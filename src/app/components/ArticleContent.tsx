'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { IQuizQuestion } from '@/models/QuizQuestion';
import { BookmarkPlus, Share2, HelpCircle, X, CheckCircle2, XCircle, Info } from 'lucide-react';

const ArticleContent: React.FC = () => {
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<IQuizQuestion[] | null>(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartQuiz = async () => {
    setIsQuizLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: "Subject-Verb Agreement in IELTS Writing" }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate quiz.');
      }

      const questions: IQuizQuestion[] = await response.json();
      setQuizQuestions(questions);
      setCurrentQuizIndex(0);
      setSelectedOption(null);
      setShowExplanation(false);

    } catch (err: any) {
      console.error(err);
      setError(err.message);
      // Hide the quiz block if there is an error
      setQuizQuestions(null);
    } finally {
      setIsQuizLoading(false);
    }
  };

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex < (quizQuestions?.length || 0) - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Quiz finished, reset to initial state
      setQuizQuestions(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        5 Common Mistakes in IELTS Writing Task 2 & How to Fix Them
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b border-slate-200">
        <div className="flex items-center gap-4">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM5Lz16Th9foU_rGAig7UGsmnh5fs96EeStYHfteFqOjDPDF-CWEOSrSsgA3-_hyz0-8TvWydG0Af8YIV9G0Xzslfj4SYBzEberYDch6wgP7oB6E3jZrlVRmmTSmkxC0uGmxQ3oBvVdQCsBZUQ3wzHsmAnCnV5CSDhsFBzwm32mbWe7G18KZa6YibKRyHx8VYy6mAv0fVNr9Ot9imt6FSzFuSuuKBktxt9OOYCuN2VB9NrNACuvE_OIEK_R6sxgHYps1-ZvlFkDJNP" 
            alt="Sarah Nguyen" 
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <p className="font-bold text-slate-900">Ms. Sarah Nguyen</p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>IELTS 8.5</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>Oct 24, 2023</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
            <BookmarkPlus className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Image 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdWTSaL7UHL81B5DRXuCnlfD-GH73Ft5Oip7bMGUh209HpWwyawNWtcBQXvZfcRl-1p4Q8sEnQdo8uPEUR294CUQjSsC1QXJ_gnqv14eAXcXE6rP5Ct2h1H_FCYLF453nDhokibS9edVshRU1Vn28HhSUjPcwg6pLYcuLf2LpmIPq02FHFbn0m2GuPadkk0fYNIw3AQec4x92EcwtpBMp-g3PQlF54Zdy7Wu6HSf66srzuN8Zxw8jkzCQV7Hahoammj7DalQrNJaWn" 
        alt="Student studying" 
        width={1200}
        height={630}
        className="w-full h-auto rounded-2xl shadow-sm"
      />

      <article className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
        <p className="text-xl text-slate-600 mb-8">
          Achieving a high band score in IELTS Writing Task 2 requires not only strong vocabulary but also grammatical precision. Many students lose points on common errors that are easily avoidable. In this guide, we'll break down the top 5 mistakes and provide actionable tips to correct them.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Subject-Verb Agreement</h2>
        <p className="mb-6">
          One of the most frequent errors is matching a singular subject with a plural verb (or vice versa). This often happens when the subject is separated from the verb by a prepositional phrase.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
          <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase mb-3">
              <XCircle className="w-5 h-5" />
              Incorrect
            </div>
            <p className="text-slate-800 font-medium">"The list of items <strong>are</strong> on the desk."</p>
            <p className="text-sm text-slate-500 mt-2 italic">The verb 'are' incorrectly matches 'items' instead of 'list'.</p>
          </div>
          <div className="bg-green-50 border border-green-100 p-5 rounded-xl">
            <div className="flex items-center gap-2 text-green-600 font-bold text-sm uppercase mb-3">
              <CheckCircle2 className="w-5 h-5" />
              Correct
            </div>
            <p className="text-slate-800 font-medium">"The list of items <strong>is</strong> on the desk."</p>
            <p className="text-sm text-slate-500 mt-2 italic">The verb 'is' correctly matches the singular subject 'list'.</p>
          </div>
        </div>

        <p className="mb-8">
          Always identify the true subject of the sentence before choosing your verb form. Don't be distracted by nouns in prepositional phrases like "of items" or "in the box".
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Misusing Connector Words</h2>
        <p className="mb-6">
          Overusing "Moreover", "Furthermore", or "However" can make your writing sound mechanical. It is crucial to understand the nuance of each connector. For instance, "On the contrary" is different from "On the other hand".
        </p>

        <blockquote className="border-l-4 border-[#2b8cee] pl-6 py-4 my-8 bg-[#2b8cee]/5 italic text-slate-700 rounded-r-xl">
          "Cohesion is not just about using linking words; it's about the logical flow of ideas."
        </blockquote>

        {/* Dynamic Quiz Section */}
        <div className="bg-gradient-to-br from-[#2b8cee]/10 to-blue-50 border border-[#2b8cee]/20 rounded-2xl p-8 my-12 not-prose shadow-sm">
          {!quizQuestions && error && (
            <div className="text-center text-red-500">
                <p><strong>Error:</strong> {error}</p>
                <p className='text-sm text-slate-600 mt-2'>Please check the server console or contact support.</p>
            </div>
          )}

          {!quizQuestions && !error && (
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white p-6 rounded-full shadow-md text-[#2b8cee] shrink-0">
                <HelpCircle className="w-10 h-10" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Test Your Grammar Skills!</h3>
                <p className="text-slate-600 mb-6">Take an AI-powered quiz to identify your weak spots in Subject-Verb Agreement based on this article.</p>
                <button 
                  onClick={handleStartQuiz}
                  disabled={isQuizLoading}
                  className="bg-[#2b8cee] hover:bg-[#2b8cee]/90 text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-[#2b8cee]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isQuizLoading ? 'Generating Quiz...' : 'Start Quiz Now'}
                </button>
              </div>
            </div>
          )}
          
          {quizQuestions && quizQuestions.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Question {currentQuizIndex + 1} of {quizQuestions.length}</h3>
                <button onClick={() => setQuizQuestions(null)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-lg font-medium text-slate-800 mb-6">{quizQuestions[currentQuizIndex].question}</p>
              
              <div className="grid gap-3 mb-8">
                {quizQuestions[currentQuizIndex].options.map((opt, i) => {
                  const isCorrect = i === quizQuestions[currentQuizIndex].correctAnswer;
                  const isSelected = i === selectedOption;
                  
                  let bgColor = "bg-white border-slate-200 hover:border-[#2b8cee]/50";
                  if (selectedOption !== null) {
                    if (isCorrect) bgColor = "bg-green-100 border-green-500 text-green-800";
                    else if (isSelected) bgColor = "bg-red-100 border-red-500 text-red-800";
                    else bgColor = "bg-slate-50 border-slate-100 text-slate-400";
                  }

                  return (
                    <button 
                      key={i}
                      disabled={selectedOption !== null}
                      onClick={() => handleOptionSelect(i)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between ${bgColor}`}
                    >
                      {opt}
                      {selectedOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                      {selectedOption !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="bg-white/60 p-5 rounded-xl border border-[#2b8cee]/10 mb-8 animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-sm font-bold text-[#2b8cee] mb-2 flex items-center gap-1 uppercase tracking-wide">
                    <Info className="w-4 h-4" />
                    Explanation
                  </p>
                  <p className="text-slate-700 text-sm italic">{quizQuestions[currentQuizIndex].explanation}</p>
                </div>
              )}

              {selectedOption !== null && (
                <button 
                  onClick={handleNextQuestion}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all"
                >
                  {currentQuizIndex < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              )}
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Informal Vocabulary</h2>
        <p className="mb-8">
          IELTS is an academic exam. Avoid slang, contractions (don't, can't), and informal phrasal verbs (get, fix). Instead of "get", use "obtain" or "receive". Instead of "fix", use "resolve" or "address".
        </p>
      </article>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 pt-8 border-t border-slate-200">
        {['#IELTS', '#Writing', '#Grammar', '#ExamTips'].map(tag => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {/* Author Bio Section */}
      <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJtHGHdQtK2sOcl6AZmt18Zas-NdLyRiyAcPia1RvUZm9LJE4tqkR9YVLaL-6iYKHkkS_HyPOdBka0Lshs8jWctqRWiNFd_5iJf-5wp7YvxxtKVoSPalnn7DIY3EI6aJB9KpTDEfRUMJVXqbiFoDemFW-ri-kk49iH20J_kOtuFWrDkIXQPxyQFgV6Mvg3QrmIEzT7jSc-BEntneMIV4ZOJbVKYxbBX05PBM4Xk306f8OQUOAqSIHI9aDnpxJEH6EPdQgnWMMSKN67" 
          alt="Sarah Profile" 
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-bold text-slate-900">Written by Sarah Nguyen</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Sarah is a certified TESOL teacher with over 8 years of experience preparing students for IELTS and TOEFL. She specializes in Academic Writing and advanced grammar structures.
          </p>
          <Link href="#" className="text-[#2b8cee] font-bold text-sm hover:underline mt-1">View all posts by Sarah</Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
