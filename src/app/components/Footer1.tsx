
import React from 'react';
import Link from 'next/link';

const Footer1: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <div className="flex items-center justify-center gap-2 mb-4 text-[#111418]">
          <div className="w-8 h-8 text-[#2b8cee]">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2b8cee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> 
          </div>
          <span className="font-black text-xl tracking-tight">EnglishPro</span>
        </div>
        <p className="text-[#617589] text-sm mb-6 max-w-lg mx-auto">
          Nền tảng học tiếng Anh trực tuyến hàng đầu, giúp bạn chinh phục các kỳ thi quốc tế với lộ trình bài bản và tài liệu chất lượng cao.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-[#617589] text-sm font-medium">
          <Link href="/terms" className="hover:text-[#2b8cee] transition-colors">Điều khoản</Link>
          <Link href="/privacy" className="hover:text-[#2b8cee] transition-colors">Bảo mật</Link>
          <Link href="/contact" className="hover:text-[#2b8cee] transition-colors">Liên hệ</Link>
          <Link href="/about" className="hover:text-[#2b8cee] transition-colors">Về chúng tôi</Link>
        </div>
        <p className="text-xs text-[#617589]">© 2024 EnglishPro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer1;