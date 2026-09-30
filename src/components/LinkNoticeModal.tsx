import React from 'react';
import { AlertCircle, X, ExternalLink, Copy, Check } from 'lucide-react';
import { WHATSAPP_GROUP_URL } from '../config';

interface LinkNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LinkNoticeModal: React.FC<LinkNoticeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText("src/config.ts");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-900 border border-orange-500/40 rounded-3xl p-6 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-orange-400 mb-3">
          <AlertCircle className="w-6 h-6 shrink-0" />
          <h3 className="font-heading font-black text-lg uppercase tracking-tight">
            Link do Grupo WhatsApp
          </h3>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed mb-4">
          O link está centralizado na variável <code className="text-orange-400 font-mono bg-neutral-800 px-1.5 py-0.5 rounded">WHATSAPP_GROUP_URL</code> conforme solicitado.
        </p>

        <div className="bg-neutral-950 rounded-xl p-3 border border-neutral-800 mb-4 font-mono text-xs text-neutral-300">
          <p className="text-neutral-500 mb-1">// Arquivo: src/config.ts</p>
          <p className="break-all text-emerald-400">{WHATSAPP_GROUP_URL}</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "Caminho copiado!" : "Copiar caminho do arquivo"}
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-black font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
