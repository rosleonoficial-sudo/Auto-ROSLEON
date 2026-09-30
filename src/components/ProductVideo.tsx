import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_GROUP_URL } from '../config';

interface ProductVideoProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ProductVideo: React.FC<ProductVideoProps> = ({ onLinkClick }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Parâmetros do YouTube: reprodução em linha (playsinline=1), sem som para permitir autoplay, em loop
  const embedUrl = "https://www.youtube-nocookie.com/embed/yKHrUfcMD_o?autoplay=1&mute=1&loop=1&playlist=yKHrUfcMD_o&playsinline=1&controls=0&enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1";

  const sendIframeCommand = (func: string, args: unknown = '') => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: func,
          args: args,
        }),
        '*'
      );
    }
  };

  // Alterna entre pausar e reproduzir via IFrame API
  const handleTogglePlay = () => {
    if (isPlaying) {
      sendIframeCommand('pauseVideo');
      setIsPlaying(false);
    } else {
      sendIframeCommand('playVideo');
      setIsPlaying(true);
    }
  };

  // Ao carregar o iframe, garante que inicie mudo para o autoplay nos navegadores
  const handleIframeLoad = () => {
    try {
      sendIframeCommand('mute');
      setTimeout(() => {
        sendIframeCommand('playVideo');
      }, 200);
    } catch (err) {
      console.warn("Iframe command error:", err);
    }
  };

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        if (data && data.event === 'infoDelivery' && data.info) {
          if (data.info.playerState === 1) {
            // 1 = Reproduzindo
            setIsPlaying(true);
          } else if (data.info.playerState === 2) {
            // 2 = Pausado
            setIsPlaying(false);
          }
        }
      } catch {
        // Ignora mensagens de extensões ou origens externas
      }
    };

    window.addEventListener('message', handleMessage);

    const timer = setTimeout(() => {
      sendIframeCommand('mute');
      sendIframeCommand('playVideo');
    }, 800);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-4 sm:mt-5 mb-8 sm:mb-12 relative z-10 flex flex-col items-center">
      
      {/* 9:16 Vertical Video Player Container */}
      <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.3)] border-2 border-orange-500/50 bg-black">
        
        {/* IFrame do YouTube (com pointer-events desativados diretamente no frame para proteger contra cliques externos) */}
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title="Vídeo demonstrativo de produtos automotivos"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          onLoad={handleIframeLoad}
          className="w-full h-full border-0 block pointer-events-none select-none"
        />

        {/* Camada sobre o player: intercepta 100% dos toques/cliques impedindo que abram o YouTube e alternando Play/Pause */}
        <div
          onClick={handleTogglePlay}
          role="button"
          tabIndex={0}
          aria-label={isPlaying ? "Pausar vídeo" : "Continuar vídeo"}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault();
              handleTogglePlay();
            }
          }}
          className="absolute inset-0 z-20 cursor-pointer select-none flex items-center justify-center bg-transparent active:bg-black/10 transition-colors"
        >
          {/* Indicador de reprodução exibido centralizado quando o vídeo estiver pausado */}
          {!isPlaying && (
            <div className="w-16 h-16 rounded-full bg-black/75 border-2 border-orange-500/80 backdrop-blur-md flex items-center justify-center text-white shadow-2xl transition-transform transform scale-100 hover:scale-105 active:scale-95">
              <Play className="w-7 h-7 fill-white translate-x-0.5 text-white" />
            </div>
          )}
        </div>

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
