'use client';

import mongoose, { Schema, Document, models, Model } from 'mongoose';

// Định nghĩa cấu trúc dữ liệu cho một câu hỏi Quiz thông qua TypeScript interface
// Interface này sẽ được dùng trong toàn bộ ứng dụng để đảm bảo type safety.
export interface IQuizQuestion extends Document {
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  topic: string;
}

// Tạo Mongoose Schema dựa trên interface đã định nghĩa
const QuizQuestionSchema: Schema<IQuizQuestion> = new Schema({
  question: {
    type: String,
    required: [true, 'Question text is required.'],
  },
  options: {
    type: [String],
    required: true,
    validate: [
      (val: string[]) => val.length === 4,
      'There must be exactly 4 options.'
    ],
  },
  correctAnswer: {
    type: Number,
    required: [true, 'The index of the correct answer is required.'],
  },
  explanation: {
    type: String,
    required: [true, 'Explanation is required.'],
  },
  topic: {
    type: String,
    required: [true, 'Topic is required.'],
  },
}, {
  timestamps: true, // Tự động thêm hai trường createdAt và updatedAt
});

// Kiểm tra xem model đã được biên dịch trước đó chưa để tránh lỗi trong môi trường dev của Next.js
const QuizQuestion: Model<IQuizQuestion> = models.QuizQuestion || mongoose.model<IQuizQuestion>('QuizQuestion', QuizQuestionSchema);

export default QuizQuestion;
