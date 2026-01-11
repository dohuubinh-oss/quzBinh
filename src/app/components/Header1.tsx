'use client';

import React, { useState } from 'react';
import { Search, UserCircle, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header1: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="whitespace-nowrap border-b border-solid border-b-[#e5e7eb] bg-white py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#111418] md:gap-8 group">
            <div className="transition-transform group-hover:scale-110 text-[#2b8cee]">
                <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-black leading-tight tracking-[-0.015em] hidden sm:block">EnglishPro</h2>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-sm transition-colors ${pathname === '/' ? 'font-bold text-[#2b8cee]' : 'font-medium text-[#617589] hover:text-[#2b8cee]'}`}>Trang chủ</Link>
            <Link href="/practice" className={`text-sm transition-colors ${pathname === '/practice' ? 'font-bold text-[#2b8cee]' : 'font-medium text-[#617589] hover:text-[#2b8cee]'}`}>Luyện tập</Link>
            <Link href="/test" className={`text-sm transition-colors ${pathname === '/test' ? 'font-bold text-[#2b8cee]' : 'font-medium text-[#617589] hover:text-[#2b8cee]'}`}>Thi thử</Link>
            <Link href="/blog" className={`text-sm transition-colors ${pathname === '/blog' ? 'font-bold text-[#2b8cee]' : 'font-medium text-[#617589] hover:text-[#2b8cee]'}`}>Blog</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 w-64">
              <Search className="text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search topics..." 
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm placeholder:text-slate-400 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <UserCircle className="w-8 h-8 text-slate-500" />
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 transition-all text-sm font-bold"
                >
                  <span>Đăng xuất</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2b8cee] text-white hover:bg-blue-600 transition-all text-sm font-bold shadow-lg shadow-[#2b8cee]/30"
              >
                <span>Đăng nhập</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
