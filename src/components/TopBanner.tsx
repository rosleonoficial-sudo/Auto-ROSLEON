import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-2.5 px-4 text-center font-heading font-black tracking-wider text-xs sm:text-sm md:text-base uppercase shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2">
        <span className="text-base sm:text-lg animate-pulse">🔥</span>
        <span>VAGAS GRATUITAS NO GRUPO AUTOMOTIVO!</span>
      </div>
    </header>
  );
};
