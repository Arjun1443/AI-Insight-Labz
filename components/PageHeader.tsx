import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  const bgImage = image || "https://picsum.photos/1920/400?grayscale&blur=2";
  
  return (
    <div className="relative bg-gray-900 py-20 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
        <p className="text-xl text-gray-300 max-w-2xl font-light">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;