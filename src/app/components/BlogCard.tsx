
import { Calendar, Clock } from 'lucide-react';


export default function BlogCard ({ post }: any) {
  if (post.isFeatured) {
    return (
      <article className="group flex flex-col gap-4">
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-xl shadow-sm cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-6 z-20 w-full md:max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#2b8cee] text-white text-xs font-bold rounded-full mb-3 shadow-sm">Featured</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 group-hover:text-[#eef6ff] transition-colors">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col md:flex-row gap-5 group items-start pb-8 border-b border-gray-100 last:border-0 last:pb-0">
      <div className="w-full md:w-[240px] aspect-video md:aspect-[4/3] shrink-0 rounded-xl overflow-hidden bg-gray-100 relative shadow-sm cursor-pointer">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#111418] text-xs font-bold rounded-lg shadow-sm border border-gray-200 uppercase tracking-wide">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-[#111418] leading-snug group-hover:text-[#2b8cee] transition-colors mt-1 cursor-pointer">
          {post.title}
        </h3>
        <p className="text-[#617589] text-sm md:text-base line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-[#617589] mt-2 font-medium">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {post.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
};


