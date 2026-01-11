
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const linkGroups = [
    {
      title: 'Sản phẩm',
      links: [
        { text: 'Tính năng', href: '/features' },
        { text: 'Bảng giá', href: '/pricing' },
        { text: 'Lộ trình', href: '/roadmap' },
      ],
    },
    {
      title: 'Tài nguyên',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Tài liệu', href: '/documents' },
        { text: 'Hỗ trợ', href: '/support' },
      ],
    },
    {
      title: 'Về chúng tôi',
      links: [
        { text: 'Giới thiệu', href: '/about' },
        { text: 'Tuyển dụng', href: '/careers' },
        { text: 'Liên hệ', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg> },
    { name: 'Twitter', href: '#', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085c.645 1.956 2.523 3.374 4.752 3.419-1.797 1.4-4.057 2.23-6.516 2.23-.423 0-.84-.023-1.254-.073a13.96 13.96 0 007.548 2.212c9.058 0 14.01-7.502 14.01-14.013 0-.213-.005-.426-.015-.637a9.953 9.953 0 002.46-2.548l-.001-.001z" /></svg> },
    { name: 'Instagram', href: '#', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.26 0-3.648.014-4.91.07-2.828.13-4.017 1.319-4.145 4.145-.057 1.262-.07 1.646-.07 4.91s.013 3.648.07 4.91c.13 2.827 1.318 4.016 4.145 4.145 1.262.056 1.65.07 4.91.07s3.648-.014 4.91-.07c2.827-.13 4.016-1.318 4.145-4.145.057-1.262.07-1.646.07-4.91s-.013-3.648-.07-4.91c-.13-2.828-1.318-4.016-4.145-4.145-1.262-.057-1.65-.07-4.91-.07zM12 7.272a4.728 4.728 0 100 9.456 4.728 4.728 0 000-9.456zm0 7.827a3.1 3.1 0 110-6.198 3.1 3.1 0 010 6.198zm6.505-8.818a1.15 1.15 0 100-2.3 1.15 1.15 0 000 2.3z" /></svg> },
  ];

  const legalLinks = [
    { text: 'Quyền riêng tư', href: '/privacy' },
    { text: 'Bảo mật', href: '/security' },
    { text: 'Cookie', href: '/cookie' },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-12">
          <div className="md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.svg" alt="EnglishMaster Logo" width={180} height={40} />
            </Link>
            <p className="text-[#6b7280] font-body text-[15px]">
              Nền tảng luyện thi Tiếng Anh thông minh, giúp bạn tự tin chinh phục mọi kỳ thi với lộ trình học được cá nhân hoá bởi AI.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-[#9ca3af] hover:text-[#2b8cee] transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.text}>
                      <Link href={link.href} className="text-[#6b7280] hover:text-[#2b8cee] transition-colors text-[15px] font-body">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#e5e7eb] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9ca3af] text-sm font-body">© 2024 EnglishMaster. All rights reserved.</p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link key={link.text} href={link.href} className="text-[#9ca3af] text-sm hover:text-[#2b8cee] transition-colors font-body">
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
