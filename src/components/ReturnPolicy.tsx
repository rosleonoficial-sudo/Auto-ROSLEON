import React from 'react';
import { RotateCcw, ShieldCheck, Scale } from 'lucide-react';

export const ReturnPolicy: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-6 sm:my-10">
      <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
        
        {/* Subtle orange accent glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
          
          {/* Selo discreto: Direito de arrependimento • Art. 49 do CDC */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950 border border-neutral-700/80 text-neutral-300 text-xs font-semibold mb-4">
            <Scale className="w-3.5 h-3.5 text-orange-400" />
            <span>Direito de arrependimento • Art. 49 do CDC</span>
          </div>

          {/* Título: Comprou e mudou de ideia? */}
          <h2 className="font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-white mb-2">
            Comprou e mudou de ideia?
          </h2>

          {/* Destaque: 7 dias para solicitar a devolução */}
          <div className="my-2 inline-flex items-center gap-2 text-orange-400 font-heading font-extrabold text-base sm:text-lg md:text-xl">
            <RotateCcw className="w-5 h-5 shrink-0" />
            <span>7 dias para solicitar a devolução</span>
          </div>

          {/* Descrição oficial */}
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-2 text-center">
            Em compras online, você pode exercer o direito de arrependimento em até 7 dias corridos após o recebimento, conforme o Art. 49 do CDC. Consulte as orientações de devolução do Mercado Livre ou da Amazon, conforme a plataforma da compra.
          </p>

        </div>

      </div>
    </section>
  );
};
