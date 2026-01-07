'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e5e7eb] bg-white/95 backdrop-blur-md px-4 sm:px-10 py-3">
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="transition-transform group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2b8cee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <h2 className="text-xl font-black leading-tight tracking-[-0.015em] text-[#111418]">EnglishMaster</h2>
      </Link>

      <nav className="hidden lg:flex items-center gap-8 text-[#111418]">
        {['Tính năng', 'Lộ trình', 'Bảng giá', 'Blog'].map((item) => (
          <Link key={item} href="#" className="text-sm font-medium hover:text-[#2b8cee] transition-colors">
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-transparent hover:bg-gray-100 text-[#111418] text-sm font-bold transition-colors">
          Đăng nhập
        </button>
        <button className="flex items-center justify-center rounded-full h-10 px-6 bg-[#2b8cee] hover:bg-blue-600 text-white text-sm font-bold shadow-md shadow-primary/20 transition-all hover:scale-105 active:scale-95">
          Đăng ký ngay
        </button>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2 text-[#111418]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#e5e7eb] p-4 flex flex-col gap-4 lg:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {['Tính năng', 'Lộ trình', 'Bảng giá', 'Blog'].map((item) => (
            <Link key={item} href="#" className="text-lg font-medium p-2">{item}</Link>
          ))}
          <button className="w-full h-12 rounded-xl bg-[#2b8cee] text-white font-bold">Bắt đầu học ngay</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
