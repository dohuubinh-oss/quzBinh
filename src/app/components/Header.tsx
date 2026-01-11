
import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] bg-white px-4 md:px-10 py-3 sticky top-0 z-50">
      {/* <div className="flex items-center gap-4 md:gap-8"> */}
        <div className="flex items-center gap-4 text-[#111418] md:gap-8 group">
          <div className="transition-transform group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2b8cee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> 
          </div>
          <h2 className="text-xl font-black leading-tight tracking-[-0.015em] hidden sm:block">EnglishPro</h2>
        </div>
        
      {/* </div> */}
      <nav className="hidden md:flex items-center gap-6">
          <Link className="text-[#617589] hover:text-[#2b8cee] text-sm font-medium transition-colors" href="/">Trang chủ</Link>
          <Link className="text-[#617589] hover:text-[#2b8cee] text-sm font-medium transition-colors" href="/practice">Luyện tập</Link>
          <Link className="text-[#617589] hover:text-[#2b8cee] text-sm font-medium transition-colors" href="/test">Thi thử</Link>
          <Link className="text-[#2b8cee] text-sm font-bold" href="/blog">Blog</Link>
        </nav>

      <div className="flex items-center gap-4">
        <button className="md:hidden text-[#617589]">
          <Search size={20} />
        </button>
        <div className="flex gap-2">
          <Link href="/login" className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-[#2b8cee] text-[#2b8cee] hover:bg-[#2b8cee] hover:text-white transition-all text-sm font-bold">
            <span>Đăng nhập</span>
          </Link>
          <Link href="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2b8cee] text-white hover:bg-blue-600 transition-all text-sm font-bold shadow-lg shadow-[#2b8cee]/30">
            <span>Đăng ký</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
