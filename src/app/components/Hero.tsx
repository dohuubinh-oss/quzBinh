'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative px-4 py-12 md:py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#2b8cee]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b8cee]/10 border border-[#2b8cee]/20 text-[#2b8cee] text-sm font-semibold w-fit mx-auto lg:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#2b8cee]"><polyline points="20 6 9 17 4 12"/></svg>
            <span>#1 Nền tảng ôn thi trắc nghiệm</span>
          </div>

          <h1 className="text-[#111418] text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            Chinh phục tiếng Anh <br className="hidden lg:block" />
            <span className="text-[#2b8cee] relative inline-block">
              qua từng câu hỏi
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#2b8cee]/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
              </svg>
            </span>
          </h1>

          <p className="text-[#4b5563] text-lg font-normal leading-relaxed max-w-[600px] mx-auto lg:mx-0 font-body">
            Hệ thống ôn luyện thông minh dành cho học sinh phổ thông và luyện thi IELTS/TOEIC. Công nghệ AI phân tích điểm yếu giúp bạn bứt phá điểm số trong thời gian ngắn nhất.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <button className="flex items-center justify-center h-12 px-8 rounded-full bg-[#2b8cee] hover:bg-blue-600 text-white text-base font-bold shadow-lg shadow-[#2b8cee]/30 transition-all hover:-translate-y-1">
              <span className="mr-2">Bắt đầu học ngay</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button className="flex items-center justify-center h-12 px-8 rounded-full bg-white border border-[#e5e7eb] hover:bg-gray-50 text-[#111418] text-base font-bold transition-all">
              <span className="mr-2">Thi thử miễn phí</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-sm text-[#6b7280]">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={`https://picsum.photos/id/${i + 20}/64/64`} alt={`Học viên ${i}`} fill className="object-cover" />
                </div>
              ))}
            </div>
            <p><span className="font-bold text-[#111418]">10,000+</span> học viên tin dùng</p>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" 
              alt="Students studying" 
              fill
              className="w-full h-full object-cover"
            />
            {/* Floating UI Card Mockup */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Kết quả bài thi gần nhất</p>
                  <p className="text-sm font-bold text-[#111418]">IELTS Mock Test #4: <span className="text-green-600">7.5 Overall</span></p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                <div className="bg-green-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
