

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArticleContent from './components/ArticleContent';
import Sidebar from './components/Sidebar';
import { ChevronRight } from 'lucide-react';
import { blogs } from '@/lib/blogData';

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const blog = blogs.find((blog) => blog.id === parseInt(params.id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700">{blog.content}</p>
    </div>
  );
}
