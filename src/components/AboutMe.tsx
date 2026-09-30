import React from 'react';
import { Award, CheckCircle, Sparkles } from 'lucide-react';

export const AboutMe: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-6 sm:mt-10 mb-3 sm:mb-4">
      <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-heading font-bold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4" />
            PARCEIRO GERENCIADO MERCADO LIVRE • NÍVEL PRATA
          </div>
          
          <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-white max-w-2xl mx-auto">
            QUEM EU SOU E COMO CONSIGO <span className="text-orange-500">ESSAS PROMOÇÕES</span>
          </h2>
        </div>

        {/* 3. Foto acima no celular e ao lado no computador, preservando proporções sem distorcer ou cortar a cabeça */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Foto oficial de Rosleon */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] rounded-2xl overflow-hidden border-2 border-orange-500/40 bg-neutral-950 shadow-2xl">
              <img
                src="/imagens/rosleon-about.webp"
                alt="Rosleon - Parceiro Mercado Livre Prata"
                width={640}
                height={961}
                loading="lazy"
                className="w-full h-auto object-cover object-top block"
              />
            </div>
          </div>

          {/* Copy e Destaques */}
          <div className="md:col-span-7 flex flex-col text-left space-y-4">
            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed">
              Sou parceiro gerenciado do Mercado Livre, nível prata, e tenho acesso a campanhas, cupons e ofertas divulgados em canais específicos, que nem sempre aparecem no site ou aplicativo.
            </p>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Todas as promoções são selecionadas manualmente, uma por uma. Nada é publicado por inteligência artificial: escolho a dedo o que realmente vale a pena compartilhar.
            </p>

            {/* Dois destaques */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs sm:text-sm font-bold shadow-sm">
                <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Seleção 100% manual</span>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs sm:text-sm font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Ofertas e cupons exclusivos</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
