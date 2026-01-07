import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Học viên tích cực', value: '10K+' },
    { label: 'Bộ đề thi chuẩn', value: '500+' },
    { label: 'Câu hỏi trắc nghiệm', value: '1M+' },
    { label: 'Đánh giá trung bình', value: '4.9/5' },
  ];

  return (
    <section className="border-y border-[#e5e7eb] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-transparent md:divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1 transition-transform hover:scale-105">
              <p className="text-3xl font-black text-[#2b8cee]">{stat.value}</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
