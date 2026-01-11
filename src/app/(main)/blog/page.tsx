'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogCard from '@/app/components/BlogCard';
import Sidebar from '@/app/components/Sidebar';
import { BLOG_POSTS } from '@/lib/blogData';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Use .find() to get the first featured post object, or undefined
  const featuredPost = BLOG_POSTS.find(post => post.isFeatured);
  const regularPosts = BLOG_POSTS.filter(post => !post.isFeatured);

  return (
    <main className="flex-1 py-10 px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto w-full">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-black text-[#111418] mb-3 tracking-tight">Blog học tiếng Anh</h1>
          <p className="text-[#617589] text-lg max-w-2xl leading-relaxed">
            Chia sẻ kiến thức, mẹo học tập, từ vựng và tài liệu ôn thi THPT, TOEIC, IELTS bổ ích giúp bạn chinh phục mọi kỳ thi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Featured Post - Check if featuredPost exists and then render it */}
            {featuredPost && (
              <section>
                <BlogCard post={featuredPost} />
              </section>
            )}

            {/* Post List */}
            <section className="flex flex-col gap-10">
              {regularPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </section>

            {/* Pagination */}
            <nav className="flex justify-center mt-6">
              <div className="flex gap-2">
                <button 
                  disabled={currentPage === 1}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-[#e5e7eb] bg-white text-[#617589] hover:bg-gray-50 disabled:opacity-50 transition-colors shadow-sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold shadow-md transition-all ${currentPage === 1 ? 'bg-[#2b8cee] text-white shadow-[#2b8cee]/20' : 'bg-white text-[#111418] border border-[#e5e7eb]'}`}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>
                <button 
                  className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold shadow-sm transition-all ${currentPage === 2 ? 'bg-[#2b8cee] text-white shadow-[#2b8cee]/20' : 'bg-white text-[#111418] border border-[#e5e7eb]'}`}
                  onClick={() => setCurrentPage(2)}
                >
                  2
                </button>
                <button 
                  className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold shadow-sm transition-all ${currentPage === 3 ? 'bg-[#2b8cee] text-white shadow-[#2b8cee]/20' : 'bg-white text-[#111418] border border-[#e5e7eb]'}`}
                  onClick={() => setCurrentPage(3)}
                >
                  3
                </button>
                <span className="flex items-center justify-center w-10 h-10 text-[#617589]">...</span>
                <button 
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-[#e5e7eb] bg-white text-[#617589] hover:bg-gray-50 transition-colors shadow-sm"
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </nav>
          </div>

          <Sidebar />
        </div>
      </main>
  );
}
