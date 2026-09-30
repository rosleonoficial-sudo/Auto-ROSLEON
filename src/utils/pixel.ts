declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

let lastTrackedTime = 0;

/**
 * Dispara o evento padrão Lead do Meta Pixel de forma centralizada e segura.
 * - Evita duplicidade de disparos (throttling para cliques rápidos).
 * - Executa em bloco try/catch para garantir que o link de entrada no grupo
 *   sempre abra normalmente, mesmo se o pixel estiver bloqueado ou inacessível.
 */
export const trackLeadEvent = (): void => {
  const now = Date.now();
  // Previne disparos repetidos caso haja múltiplos cliques em fração de segundo
  if (now - lastTrackedTime < 800) {
    return;
  }
  lastTrackedTime = now;

  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
  } catch (err) {
    // Falha silenciosa para nunca interromper a navegação do usuário
    console.warn('Erro ao disparar evento Lead do Meta Pixel:', err);
  }
};
