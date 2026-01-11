'use client';

import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import connectDB from '@/lib/mongodb';
import QuizQuestion, { IQuizQuestion } from '@/models/QuizQuestion';

const MODEL_NAME = "gemini-1.5-flash-latest";
const API_KEY = process.env.GEMINI_API_KEY || '';

// Định nghĩa schema JSON mà chúng ta muốn Gemini trả về.
// Việc này giúp đảm bảo dữ liệu trả về luôn nhất quán và đúng cấu trúc.
const jsonSchema = {
  type: "ARRAY",
  items: {
    type: "OBJECT",
    properties: {
      question: { type: "STRING" },
      options: {
        type: "ARRAY",
        items: { type: "STRING" },
      },
      correctAnswer: { type: "INTEGER", description: "0-indexed index of the correct option" },
      explanation: { type: "STRING" },
    },
    required: ["question", "options", "correctAnswer", "explanation"],
  },
};

/**
 * Xử lý yêu cầu POST để tạo hoặc lấy một bộ câu hỏi trắc nghiệm.
 * Route này sẽ kiểm tra xem đã có quiz cho chủ đề được yêu cầu trong DB chưa.
 * Nếu có, nó sẽ trả về quiz từ DB (cache).
 * Nếu không, nó sẽ gọi API của Google Gemini để tạo quiz mới, lưu vào DB, và sau đó trả về.
 */
export async function POST(request: Request) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: 'Server-side API key for Gemini is not configured.' },
      { status: 500 }
    );
  }

  try {
    // 1. Lấy chủ đề từ body của request
    const { topic } = await request.json();
    if (!topic) {
      return NextResponse.json({ error: 'Topic is required.' }, { status: 400 });
    }

    // 2. Kết nối tới cơ sở dữ liệu
    await connectDB();

    // 3. Kiểm tra xem có quiz nào cho chủ đề này đã tồn tại trong DB chưa
    const existingQuiz = await QuizQuestion.find({ topic: topic }).limit(5);
    if (existingQuiz && existingQuiz.length > 0) {
      // Nếu có, trả về dữ liệu từ DB để tiết kiệm chi phí API
      return NextResponse.json(existingQuiz);
    }

    // 4. Nếu không có, gọi API của Google Gemini để tạo quiz mới
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel(
        { 
            model: MODEL_NAME, 
            // Chỉ định rõ rằng chúng ta muốn output là JSON
            generationConfig: { responseMimeType: "application/json" }
        }
    );

    const generationConfig = {
        temperature: 1,
        topK: 64,
        topP: 0.95,
        maxOutputTokens: 8192,
    };
    
    const safetySettings = [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    ];

    const prompt = `Generate a 5-question multiple choice grammar quiz about: ${topic}. Each question must have exactly 4 options. Provide a detailed explanation for the correct answer. The output must conform to this JSON schema: ${JSON.stringify(jsonSchema)}`;

    const result = await model.generateContentStream(prompt);
    
    // Chờ và ghép các chunk lại để có được response hoàn chỉnh
    const response = await result.response;
    const parsedQuiz = JSON.parse(response.text());

    // 5. Thêm trường 'topic' vào mỗi câu hỏi và lưu vào DB
    const quizWithTopic = parsedQuiz.map((q: Omit<IQuizQuestion, 'topic'>) => ({ ...q, topic }));
    await QuizQuestion.insertMany(quizWithTopic);
    
    // 6. Trả về quiz mới được tạo
    return NextResponse.json(quizWithTopic);

  } catch (error) {
    console.error('Error generating or fetching quiz:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
