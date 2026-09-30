import React from 'react';
import { BadgePercent, DoorOpen, Smartphone, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_GROUP_URL } from '../config';

interface GroupBenefitsProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const GroupBenefits: React.FC<GroupBenefitsProps> = ({ onLinkClick }) => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-6 sm:my-10">
      <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-heading font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            VANTAGENS EXCLUSIVAS
          </div>
          <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-white">
            BENEFÍCIOS DO <span className="text-orange-500">GRUPO</span>
          </h2>
        </div>

        {/* Benefits List (4 itens diretos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          
          {/* 1. 100% gratuito */}
          <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-orange-400">
              <BadgePercent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                100% gratuito
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Sem mensalidade.
              </p>
            </div>
          </div>

          {/* 2. Liberdade para participar */}
          <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-orange-400">
              <DoorOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                Liberdade para participar
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Entre e saia quando quiser.
              </p>
            </div>
          </div>

          {/* 3. Sem lotar seu celular */}
          <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-orange-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                Sem lotar seu celular
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 leading-relaxed">
                Enviamos links com prévia dos produtos, sem fotos e vídeos anexados para baixar na galeria.
              </p>
            </div>
          </div>

          {/* 4. Links de plataformas confiáveis */}
          <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-neutral-950/70 border border-neutral-800/80">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-orange-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                Links de plataformas confiáveis
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 leading-relaxed">
                Ofertas do Mercado Livre, Shopee e Amazon, com compra diretamente nas plataformas.
              </p>
            </div>
          </div>

        </div>

        {/* Botão abaixo dos benefícios: abre diretamente o grupo */}
        <div className="mt-6 sm:mt-7 flex justify-center">
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
