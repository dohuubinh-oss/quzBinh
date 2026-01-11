import React from 'react';
import Image from 'next/image';
import SectionHeader from './UI/SectionHeader';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Minh Anh',
      role: 'Học sinh lớp 12 - THPT Chuyên',
      quote: 'Nhờ EnglishMaster mà mình đã đạt 7.5 IELTS chỉ sau 3 tháng ôn tập. Phần giải thích đáp án cực kỳ chi tiết giúp mình hiểu sâu vấn đề.',
      avatar: 'https://picsum.photos/id/64/100/100',
    },
    {
      name: 'Tuấn Kiệt',
      role: 'Sinh viên Đại học Bách Khoa',
      quote: 'Giao diện dễ sử dụng, bài tập phong phú. Tính năng theo dõi tiến độ giúp mình biết mình yếu ở đâu để cải thiện. Rất đáng tiền!',
      avatar: 'https://picsum.photos/id/65/100/100',
    },
    {
      name: 'Chị Lan',
      role: 'Phụ huynh học sinh lớp 5',
      quote: 'Con mình rất lười học tiếng Anh nhưng từ khi dùng app này, bé chủ động học hẳn. Hình ảnh sinh động, vừa học vừa chơi rất cuốn.',
      avatar: 'https://picsum.photos/id/66/100/100',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <SectionHeader 
          title="Học viên nói gì về chúng tôi?"
          description="Lắng nghe chia sẻ thật từ những người đã và đang đồng hành cùng EnglishMaster trên con đường chinh phục tiếng Anh."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <p className="text-[#111418] text-lg font-medium italic mb-6 flex-1 font-body">
                &quot;{review.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <Image src={review.avatar} alt={review.name} width={48} height={48} className="rounded-full object-cover" />
                <div>
                  <p className="font-bold text-[#111418]">{review.name}</p>
                  <p className="text-sm text-[#2b8cee]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
