import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

export const GiveawaysBlock: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-6 sm:my-8 relative z-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 border-2 border-orange-500/40 p-6 sm:p-8 md:p-10 shadow-[0_0_35px_rgba(249,115,22,0.2)] text-center flex flex-col items-center">
        
        {/* Subtle orange background glow */}
        <div className="absolute -top-16 -right-16 w-44 h-44 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Icon de presente com selo */}
        <div className="relative mb-3 sm:mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-black shadow-lg shadow-orange-500/30">
            <Gift className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
          </div>
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500" />
          </span>
        </div>

        {/* Título: QUEM ESTÁ NO GRUPO TAMBÉM CONCORRE! */}
        <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight text-white mb-2">
          QUEM ESTÁ NO GRUPO <span className="text-orange-500">TAMBÉM CONCORRE!</span>
        </h2>

        {/* Destaque: SORTEIOS GRATUITOS TODOS OS MESES */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 font-heading font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wide my-2 shadow-sm">
          <Sparkles className="w-4 h-4 shrink-0 text-orange-400" />
          <span>SORTEIOS GRATUITOS TODOS OS MESES</span>
        </div>

        {/* Descrição oficial */}
        <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-2">
          Além das ofertas, quem participa dos nossos grupos pode participar de sorteios gratuitos todos os meses. Entre no grupo e acompanhe como participar!
        </p>

      </div>
    </section>
  );
};
