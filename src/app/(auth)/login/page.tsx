"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginTab, setIsLoginTab] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic here
    console.log("Login attempt with:", email);
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      {/* Left Side: Hero Image / Illustration */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#2b8cee]/10 items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2b8cee]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-50"></div>
        <div className="relative z-10 w-full max-w-lg flex flex-col gap-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/auth-hero.jpg"
                alt="Hình ảnh minh họa trang đăng nhập"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4 text-center lg:text-left p-4">
            <h2 className="text-3xl font-bold text-[#111418] leading-tight">
              Chinh phục tiếng Anh,<br />mở rộng tương lai.
            </h2>
            <p className="text-lg text-[#617589]">
              Hệ thống bài tập trắc nghiệm thông minh giúp bạn luyện thi chứng chỉ quốc tế và đạt điểm cao ở trường.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex -space-x-3">
                <Image alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/64/100/100" width={40} height={40} />
                <Image alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/65/100/100" width={40} height={40} />
                <Image alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/66/100/100" width={40} height={40} />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#2b8cee] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                  +2k
                </div>
              </div>
              <span className="text-sm font-medium text-[#617589]">Học sinh đã tham gia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col h-full bg-white overflow-y-auto">
        <div className="p-6 lg:p-8 flex justify-between items-center">
          <div className="flex items-center gap-3 text-[#2b8cee]">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#2b8cee]/10 text-[#2b8cee]">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h2 className="text-[#111418] text-xl font-bold tracking-tight">EnglishMaster</h2>
          </div>
          <Link className="text-sm font-medium text-[#617589] hover:text-[#2b8cee] transition-colors lg:hidden" href="#">Trợ giúp?</Link>
        </div>
        
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32 py-8">
          <div className="max-w-md w-full mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-[#111418] tracking-tight">
                {isLoginTab ? 'Chào mừng trở lại!' : 'Tham gia cùng chúng tôi!'}
              </h1>
              <p className="text-[#617589]">
                {isLoginTab ? 'Vui lòng nhập thông tin để đăng nhập.' : 'Tạo tài khoản để bắt đầu học ngay.'}
              </p>
            </div>

            <div className="w-full">
              <div className="flex border-b border-[#dbe0e6]">
                <button 
                  onClick={() => setIsLoginTab(true)}
                  className={`flex-1 pb-3 pt-2 text-center border-b-[3px] font-bold text-sm transition-colors ${isLoginTab ? 'border-[#2b8cee] text-[#2b8cee]' : 'border-transparent text-[#617589]'}`}
                >
                  Đăng nhập
                </button>
                <button 
                  onClick={() => setIsLoginTab(false)}
                  className={`flex-1 pb-3 pt-2 text-center border-b-[3px] font-bold text-sm transition-colors ${!isLoginTab ? 'border-[#2b8cee] text-[#2b8cee]' : 'border-transparent text-[#617589]'}`}
                >
                  Đăng ký
                </button>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#111418]">Email hoặc Tên đăng nhập</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#617589] text-xl">mail</span>
                  </div>
                  <input 
                    required
                    className="block w-full rounded-lg border-[#dbe0e6] pl-10 pr-3 py-3 text-[#111418] bg-white placeholder-[#617589] focus:border-[#2b8cee] focus:ring-[#2b8cee] focus:ring-1 sm:text-sm" 
                    placeholder="name@example.com" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-[#111418]">Mật khẩu</label>
                  {isLoginTab && <Link className="text-sm font-semibold text-[#2b8cee] hover:text-blue-600" href="#">Quên mật khẩu?</Link>}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#617589] text-xl">lock</span>
                  </div>
                  <input 
                    required
                    className="block w-full rounded-lg border-[#dbe0e6] pl-10 pr-10 py-3 text-[#111418] bg-white placeholder-[#617589] focus:border-[#2b8cee] focus:ring-[#2b8cee] focus:ring-1 sm:text-sm" 
                    placeholder="••••••••" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#617589] hover:text-[#111418] transition-colors" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#2b8cee] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b8cee] transition-all transform active:scale-[0.98]"
              >
                {isLoginTab ? 'Bắt đầu học ngay' : 'Đăng ký ngay'}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#dbe0e6]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#617589]">Hoặc tiếp tục với</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center px-4 py-2.5 border border-[#dbe0e6] rounded-lg shadow-sm bg-white text-sm font-medium text-[#111418] hover:bg-gray-50 transition-colors" 
                type="button"
              >
                <svg aria-hidden="true" className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
              <button 
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center px-4 py-2.5 border border-[#dbe0e6] rounded-lg shadow-sm bg-white text-sm font-medium text-[#111418] hover:bg-gray-50 transition-colors" 
                type="button"
              >
                <svg aria-hidden="true" className="h-5 w-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
                Facebook
              </button>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-[#617589]">
                {isLoginTab ? 'Bạn chưa có tài khoản?' : 'Đã có tài khoản?'} 
                <button 
                  onClick={() => setIsLoginTab(!isLoginTab)}
                  className="font-bold text-[#2b8cee] hover:underline ml-1"
                >
                  {isLoginTab ? 'Đăng ký miễn phí' : 'Đăng nhập ngay'}
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 text-center text-xs text-[#9aa6b2]">
          © 2024 EnglishMaster. All rights reserved. <br />
          <Link className="hover:text-[#2b8cee]" href="#">Điều khoản</Link> • <Link className="hover:text-[#2b8cee]" href="#">Bảo mật</Link>
        </div>
      </div>
    </div>
  );
}
