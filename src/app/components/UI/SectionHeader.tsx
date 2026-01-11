import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center max-w-[720px] mx-auto mb-16">
      <h2 className="text-[#111418] text-3xl md:text-4xl font-bold leading-tight mb-4">
        {title}
      </h2>
      <p className="text-[#4b5563] text-lg font-body">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
