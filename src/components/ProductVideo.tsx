import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_GROUP_URL } from '../config';

interface ProductVideoProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ProductVideo: React.FC<ProductVideoProps> = ({ onLinkClick }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Exact embed URL requested with autoplay=1, mute=1, loop=1, playlist=yKHrUfcMD_o, playsinline=1, controls=1
  // enablejsapi=1 allows mute() before playVideo() programmatic handling
  const embedUrl = "https://www.youtube.com/embed/yKHrUfcMD_o?autoplay=1&mute=1&loop=1&playlist=yKHrUfcMD_o&playsinline=1&controls=1&enablejsapi=1";

  const sendIframeCommand = (func: string) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: func,
          args: '',
        }),
        '*'
      );
    }
  };

  // When iframe loads, execute mute() before playVideo()
  const handleIframeLoad = () => {
    try {
      sendIframeCommand('mute');
      setTimeout(() => {
        sendIframeCommand('playVideo');
      }, 250);
    } catch (err) {
      console.warn("Iframe command error:", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      sendIframeCommand('mute');
      sendIframeCommand('playVideo');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-4 sm:mt-5 mb-8 sm:mb-12 relative z-10 flex flex-col items-center">
      
      {/* 9:16 Vertical Video Player Container (Sem selos, sem camadas de bloqueio) */}
      <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.3)] border-2 border-orange-500/50 bg-black pointer-events-auto">
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title="Vídeo demonstrativo de produtos automotivos"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          onLoad={handleIframeLoad}
          className="w-full h-full border-0 block pointer-events-auto"
        />
      </div>

      {/* Botão abaixo do vídeo: abre diretamente o grupo */}
      <div className="w-full sm:w-auto mt-5 sm:mt-6 flex justify-center">
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

    </section>
  );
};
