import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 py-8 px-4 text-center text-xs text-neutral-500">
      <div className="max-w-4xl mx-auto space-y-2">
        <p className="font-medium text-neutral-400">
          Rosleon • Grupo VIP de Ofertas Automotivas
        </p>
        <p>
          Este site não é afiliado ao WhatsApp Inc. ou Meta Inc. Todas as marcas e imagens são de propriedade de seus respectivos donos.
        </p>
        <p className="text-[11px] text-neutral-600">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
