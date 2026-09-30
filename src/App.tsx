/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { ProductVideo } from './components/ProductVideo';
import { GiveawaysBlock } from './components/GiveawaysBlock';
import { CategoriesBlock } from './components/CategoriesBlock';
import { ProductShowcase } from './components/ProductShowcase';
import { GroupBenefits } from './components/GroupBenefits';
import { ReturnPolicy } from './components/ReturnPolicy';
import { AboutMe } from './components/AboutMe';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LinkNoticeModal } from './components/LinkNoticeModal';
import { WHATSAPP_GROUP_URL } from './config';
import { trackLeadEvent } from './utils/pixel';

export default function App() {
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 4. Dispara o evento padrão Lead de forma centralizada e resiliente
    trackLeadEvent();

    // Se o usuário ainda não substituiu o link de exemplo, exibe o aviso explicativo
    if (WHATSAPP_GROUP_URL.includes("SEU-LINK-DO-GRUPO-AQUI")) {
      e.preventDefault();
      setIsNoticeOpen(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. Faixa superior laranja fixa */}
      <TopBanner />

      {/* Main Content Flow */}
      <main className="flex-1 w-full flex flex-col items-center">
        {/* 2. Seção Principal (Hero com 70% 3D e chamada) */}
        <HeroSection onLinkClick={handleLinkClick} />

        {/* 1. Vídeo de Produtos em destaque com botão abaixo */}
        <ProductVideo onLinkClick={handleLinkClick} />

        {/* 1. Destaque para os Sorteios (logo acima de As Melhores Ofertas) */}
        <GiveawaysBlock />

        {/* 3. Bloco claro com lista de categorias, destaques e botão no final */}
        <CategoriesBlock onLinkClick={handleLinkClick} />

        {/* 4. Vitrine compacta com 6 produtos de /imagens/ */}
        <ProductShowcase />

        {/* 3. Benefícios atualizados do grupo com botão direto */}
        <GroupBenefits onLinkClick={handleLinkClick} />

        {/* 5. Seção sobre Devolução (Art. 49 do CDC) */}
        <ReturnPolicy />

        {/* 6. Quem Eu Sou (Parceiro Prata Mercado Livre) */}
        <AboutMe />

        {/* 5. Chamada final com carro ao fundo e botão verde grande direto */}
        <FinalCTA onLinkClick={handleLinkClick} />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Modal de apoio caso o link do grupo ainda seja o placeholder */}
      <LinkNoticeModal
        isOpen={isNoticeOpen}
        onClose={() => setIsNoticeOpen(false)}
      />
    </div>
  );
}
