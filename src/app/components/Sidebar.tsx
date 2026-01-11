
import React from 'react';
import { Search, Lightbulb, Volume2, TrendingUp, Mail, Send, GraduationCap } from 'lucide-react';
import { TRENDING_POSTS, WORD_OF_THE_DAY, POPULAR_TAGS } from '@/lib/blogData';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-8">
      {/* Search Widget */}
      <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-bold text-[#111418]">Tìm kiếm bài viết</span>
          <div className="flex w-full items-center rounded-lg border border-[#dbe0e6] bg-[#f0f2f4] overflow-hidden focus-within:border-[#2b8cee] focus-within:ring-1 focus-within:ring-[#2b8cee] transition-all">
            <span className="pl-3 text-[#617589]">
              <Search size={18} />
            </span>
            <input 
              className="w-full bg-transparent border-none text-sm p-3 text-[#111418] placeholder:text-[#617589] focus:ring-0" 
              placeholder="Ngữ pháp, từ vựng..." 
            />
          </div>
        </label>
      </div>

      {/* Word of the Day Widget */}
      <div className="bg-gradient-to-br from-[#2b8cee] to-blue-600 rounded-xl p-6 text-white shadow-lg shadow-[#2b8cee]/30 relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 opacity-10 rotate-12 transform group-hover:scale-110 transition-transform duration-700">
          <GraduationCap size={150} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3 opacity-90">
            <Lightbulb size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Word of the Day</span>
          </div>
          <h3 className="text-3xl font-black mb-1">{WORD_OF_THE_DAY.word}</h3>
          <p className="text-white/80 italic font-medium mb-4 text-sm">{WORD_OF_THE_DAY.pronunciation} • {WORD_OF_THE_DAY.type}</p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 mb-4 border border-white/10">
            <p className="text-sm leading-relaxed">
              {WORD_OF_THE_DAY.definition}
            </p>
          </div>
          <button className="w-full bg-white text-[#2b8cee] py-2 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Volume2 size={18} /> Nghe phát âm
          </button>
        </div>
      </div>

      {/* Trending Posts Widget */}
      <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm">
        <h3 className="text-lg font-bold text-[#111418] mb-4 flex items-center gap-2 border-b pb-2">
          <TrendingUp size={20} className="text-[#2b8cee]" />
          Bài viết nổi bật
        </h3>
        <div className="flex flex-col gap-4">
          {TRENDING_POSTS.map(post => (
            <Link key={post.id} className="flex gap-3 group cursor-pointer" href={`/blog/${post.id}`}>
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <Image 
                  src={post.imageUrl} 
                  alt={post.title} 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-sm font-bold text-[#111418] line-clamp-2 mb-1 group-hover:text-[#2b8cee] transition-colors">
                  {post.title}
                </h4>
                <span className="text-xs text-[#617589]">{post.views}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags Widget */}
      <div className="bg-white p-6 rounded-xl border border-[#e5e7eb] shadow-sm">
        <h3 className="text-lg font-bold text-[#111418] mb-4">Chủ đề phổ biến</h3>
        <div className="flex flex-wrap gap-2">
          {POPULAR_TAGS.map(tag => (
            <Link 
              key={tag}
              className="px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-[#617589] hover:bg-[#2b8cee] hover:text-white transition-all" 
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="bg-[#eef6ff] p-6 rounded-xl border border-[#2b8cee]/20 text-center">
        <div className="mx-auto w-12 h-12 bg-white text-[#2b8cee] rounded-full flex items-center justify-center mb-3 shadow-sm">
          <Mail size={24} />
        </div>
        <h3 className="text-lg font-bold text-[#111418] mb-2">Đăng ký nhận tin</h3>
        <p className="text-sm text-[#617589] mb-4">Nhận tài liệu học tập và bài viết mới nhất qua email hàng tuần.</p>
        <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
          <input 
            className="flex-1 rounded-lg border-none text-sm p-2 shadow-sm focus:ring-2 focus:ring-[#2b8cee]" 
            placeholder="Email của bạn" 
            type="email" 
          />
          <button className="bg-[#2b8cee] text-white rounded-lg p-2 hover:bg-blue-600 transition-colors">
            <Send size={18} />
          </button>
        </form>
      </div>
    </aside>
  );
};

export default Sidebar;
