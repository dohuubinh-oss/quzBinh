import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Dữ liệu cho các feature, giúp dễ dàng quản lý và tái sử dụng
const features = [
  {
    title: 'Lộ trình học cá nhân hóa',
    description: 'AI sẽ tự động tạo ra lộ trình học tập phù hợp với trình độ, điểm yếu và mục tiêu của riêng bạn. Tối ưu hóa thời gian và tăng tốc hiệu quả học tập.',
    linkText: 'Tìm hiểu thêm về lộ trình',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d044b4a1b3d?q=80&w=1200',
    imageAlt: 'Học viên đang học theo lộ trình cá nhân hóa',
    isReversed: false, // Bố cục: ảnh bên trái, chữ bên phải
  },
  {
    title: 'Gamification - Học mà chơi',
    description: 'Biến việc ôn thi nhàm chán thành những thử thách thú vị. Tích lũy điểm thưởng, leo bảng xếp hạng và nhận quà tặng hấp dẫn khi hoàn thành các cột mốc học tập.',
    linkText: 'Xem các tính năng khác',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200',
    imageAlt: 'Học viên vui vẻ thảo luận',
    isReversed: true, // Bố cục: chữ bên trái, ảnh bên phải
  },
];

const ZigZagFeatures: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 space-y-24">
        {/* Tiêu đề Section */}
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="text-[#111418] text-3xl md:text-4xl font-bold leading-tight mb-4">
            Tính năng đột phá dành cho bạn
          </h2>
          <p className="text-[#4b5563] text-lg font-body">
            Khám phá các công cụ mạnh mẽ giúp bạn chinh phục mọi bài thi một cách tự tin và hiệu quả nhất.
          </p>
        </div>

        {/* Khối Feature */}
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Cột hình ảnh */}
            <div className={`lg:w-1/2 ${feature.isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white aspect-video">
                <Image 
                  src={feature.imageUrl}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            {/* Cột văn bản */}
            <div className={`lg:w-1/2 ${feature.isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
              <span className="font-bold text-[#2b8cee] uppercase tracking-wider">Tính năng</span>
              <h3 className="text-3xl font-bold text-[#111418] mt-2 mb-4">
                {feature.title}
              </h3>
              <p className="text-[#4b5563] leading-relaxed mb-6 font-body">
                {feature.description}
              </p>
              <Link href="#" className="flex items-center text-[#2b8cee] font-bold hover:underline gap-2 group">
                {feature.linkText}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ZigZagFeatures;
