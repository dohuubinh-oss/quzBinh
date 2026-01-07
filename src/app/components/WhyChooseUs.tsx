import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Kho đề thi khổng lồ',
      description: 'Hàng ngàn đề thi sát với thực tế từ lớp 1 đến lớp 12, đề thi THPT Quốc gia và các chứng chỉ quốc tế như IELTS, TOEIC.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      ),
      color: 'bg-blue-50 text-[#2b8cee]',
    },
    {
      title: 'Phân tích AI thông minh',
      description: 'Hệ thống tự động chấm điểm, phân tích lỗi sai chi tiết và gợi ý bài tập khắc phục điểm yếu ngay lập tức.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M12 12L16 10"/><path d="M12 12L14 16"/><circle cx="12" cy="12" r="1"/></svg>
      ),
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Học mọi lúc mọi nơi',
      description: 'Ứng dụng đa nền tảng, đồng bộ dữ liệu giúp bạn tận dụng mọi khoảng thời gian rảnh rỗi để ôn luyện hiệu quả.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      ),
      color: 'bg-green-50 text-green-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <h2 className="text-[#111418] text-3xl md:text-4xl font-bold leading-tight mb-4">
            Tại sao chọn EnglishMaster?
          </h2>
          <p className="text-[#4b5563] text-lg font-body">
            Phương pháp học tập hiện đại kết hợp công nghệ AI giúp tối ưu hóa thời gian và nâng cao hiệu quả ôn luyện.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#2b8cee]/20 group hover:-translate-y-2">
              <div className={`size-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111418] mb-3">{feature.title}</h3>
              <p className="text-[#4b5563] leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
