import React from 'react';
import { Tag } from 'lucide-react';

interface HeroSectionProps {
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white pt-6 pb-0 sm:pt-10 sm:pb-0 lg:pt-12 lg:pb-0">
      {/* Background Car with Orange Rim Lighting */}
      <div className="absolute inset-0 z-0 opacity-40 lg:opacity-50 pointer-events-none">
        <img
          src="/imagens/hero-car-bg.webp"
          alt="Cenário automotivo esportivo"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-125"
          width={1280}
          height={720}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge: Black Automotiva está chegando */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-orange-500/40 shadow-lg mb-4 sm:mb-6 backdrop-blur-md">
          <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
          <span className="font-heading text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wider uppercase text-neutral-200">
            BLACK <span className="text-orange-400">AUTOMOTIVA</span> ESTÁ CHEGANDO
          </span>
        </div>

        {/* Giant Bold Headline */}
        <h1 className="font-heading font-black tracking-tight leading-[1.05] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase max-w-4xl mx-auto">
          <span className="block text-white drop-shadow-md">
            ECONOMIZE ATÉ
          </span>
          
          {/* 3D 70% Highlight */}
          <span className="block text-70-percent text-6xl sm:text-7xl md:text-8xl lg:text-9xl py-1 my-1 leading-none tracking-tight">
            70%
          </span>

          <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 drop-shadow-md">
            EM PRODUTOS
          </span>
          
          <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-md">
            PARA O <span className="italic text-orange-500 font-black">SEU CARRO</span>
          </span>
        </h1>

      </div>
    </section>
  );
};
