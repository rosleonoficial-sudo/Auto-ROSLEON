import React from 'react';
import { ChevronRight, BadgePercent, CheckCircle, LogOut } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_GROUP_URL } from '../config';

interface FinalCTAProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onLinkClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white pt-3 pb-12 sm:pt-6 sm:pb-16 mt-2 sm:mt-4">
      {/* Background Car Taillights with Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img
          src="/imagens/footer-car-bg.webp"
          alt="Carro esportivo na estrada com lanternas acesas"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-125"
          width={1280}
          height={720}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Title */}
        <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight">
          <span className="block text-white">
            ENTRE AGORA E RECEBA
          </span>
          <span className="block text-orange-500 mt-1">
            OFERTAS TODOS OS DIAS
          </span>
        </h2>

        {/* Botão Amarelo Vibrante (Abre o link do grupo diretamente) */}
        <div className="mt-5 sm:mt-6 flex justify-center">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="btn-yellow-cta group inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-9 rounded-full text-black font-heading font-black text-sm sm:text-base md:text-lg tracking-wider uppercase whitespace-nowrap cursor-pointer select-none border border-amber-300/40"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black fill-current" />
            <span className="text-black font-black">ENTRAR NO GRUPO</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-black stroke-[3] animate-arrow-nudge" />
          </a>
        </div>

        {/* 3 Value Pillars / Badges */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-neutral-300 text-xs sm:text-sm font-semibold">
          
          {/* 100% gratuito */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-orange-500 flex items-center justify-center text-orange-400">
              <BadgePercent className="w-3.5 h-3.5" />
            </div>
            <span>100% gratuito</span>
          </div>

          {/* Sem mensalidade */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-black">
              <CheckCircle className="w-3.5 h-3.5 text-black stroke-[3]" />
            </div>
            <span>Sem mensalidade</span>
          </div>

          {/* Entre e saia quando quiser */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 flex items-center justify-center text-orange-400">
              <LogOut className="w-4 h-4" />
            </div>
            <span>Entre e saia quando quiser</span>
          </div>

        </div>

      </div>
    </section>
  );
};
