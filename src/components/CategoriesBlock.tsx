import React from 'react';
import { Check, Plus, ChevronRight } from 'lucide-react';
import { CATEGORIES_LIST, WHATSAPP_GROUP_URL } from '../config';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CategoriesBlockProps {
  onLinkClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const CategoriesBlock: React.FC<CategoriesBlockProps> = ({ onLinkClick }) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-6 sm:my-10">
      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-neutral-900 border border-neutral-100">
        
        {/* Title */}
        <h2 className="font-heading font-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight mb-6 sm:mb-8 text-neutral-950">
          AS MELHORES OFERTAS{' '}
          <span className="italic text-orange-600 font-black">
            PARA O SEU CARRO
          </span>
        </h2>

        {/* Categories List (2 columns on mobile and desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 sm:gap-y-4 gap-x-6 sm:gap-x-10 max-w-2xl mx-auto">
          {CATEGORIES_LIST.map((category) => (
            <div
              key={category}
              className="flex items-center gap-3 text-neutral-900 font-semibold text-sm sm:text-base md:text-lg"
            >
              {/* Orange circular check icon */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-sm">
                <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white stroke-[3.5]" />
              </div>
              <span className="leading-snug">{category}</span>
            </div>
          ))}
        </div>

        {/* Highlight Callout Box */}
        <div className="mt-6 sm:mt-8 pt-2">
          <div className="bg-orange-50/90 border border-orange-200/80 rounded-2xl py-3 px-4 sm:py-3.5 sm:px-6 flex items-center justify-center gap-2 text-center text-xs sm:text-sm md:text-base font-semibold text-neutral-800 shadow-sm">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white stroke-[3.5]" />
            </div>
            <span>
              e muito mais, com até{' '}
              <strong className="text-orange-600 font-black">
                70% de desconto.
              </strong>
            </span>
          </div>
        </div>

        {/* Botão no final da seção: ENTRAR NO GRUPO */}
        <div className="mt-5 sm:mt-6 flex justify-center">
          <a
            href={WHATSAPP_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className="btn-yellow-cta group inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-5 sm:px-8 rounded-full text-black font-heading font-black text-sm sm:text-base md:text-lg tracking-wider uppercase whitespace-nowrap cursor-pointer select-none border border-amber-300/40"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-black fill-current" />
            <span className="text-black font-black">ENTRAR NO GRUPO</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-black stroke-[3] animate-arrow-nudge" />
          </a>
        </div>

      </div>
    </section>
  );
};
