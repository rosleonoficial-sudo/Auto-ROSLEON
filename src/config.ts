/**
 * CONFIGURAÇÃO DO GRUPO DE WHATSAPP
 * 
 * Insira o link de convite do seu grupo do WhatsApp abaixo.
 * Exemplo: "https://chat.whatsapp.com/Gabc12345Def6789"
 */
export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/SEU-LINK-DO-GRUPO-AQUI";

/**
 * VÍDEO DO YOUTUBE
 * 
 * Cole o link do vídeo do YouTube aqui.
 * Suporta formatos:
 * - https://www.youtube.com/watch?v=ID
 * - https://youtu.be/ID
 * - https://www.youtube.com/shorts/ID
 */
export const YOUTUBE_VIDEO_URL = "https://youtube.com/shorts/yKHrUfcMD_o";

/**
 * Produtos da Vitrine ("ALGUNS PRODUTOS QUE JÁ PASSARAM PELO GRUPO")
 * Imagens locais em /imagens/ com nomes completos reais
 */
export interface ProductItem {
  id: string;
  name: string;
  image: string;
  width: number;
  height: number;
}

export const SHOWCASE_PRODUCTS: ProductItem[] = [
  {
    id: "kit-limpeza",
    name: "Kit de Limpeza Automotiva",
    image: "/imagens/kit-limpeza.webp",
    width: 600,
    height: 450,
  },
  {
    id: "central-multimidia",
    name: "Central Multimídia",
    image: "/imagens/central-multimidia.webp",
    width: 600,
    height: 450,
  },
  {
    id: "caixa-som",
    name: "Caixa de Som Automotiva",
    image: "/imagens/caixa-som.webp",
    width: 600,
    height: 450,
  },
  {
    id: "auxiliar-partida",
    name: "Auxiliar de Partida e Compressor",
    image: "/imagens/auxiliar-partida.webp",
    width: 600,
    height: 450,
  },
  {
    id: "camera-veicular",
    name: "Câmera Veicular",
    image: "/imagens/camera-veicular.webp",
    width: 600,
    height: 450,
  },
  {
    id: "pneus",
    name: "Pneus",
    image: "/imagens/pneus.webp",
    width: 600,
    height: 450,
  },
];

export const CATEGORIES_LIST = [
  "Multimídia e som",
  "Ferramentas",
  "Limpeza automotiva",
  "Acessórios para carro",
  "Pneus",
  "Elétricos, eletrônicos e acessórios",
];

export const GROUP_BENEFITS = [
  {
    id: "gratuito",
    title: "100% gratuito",
    description: "Sem mensalidade.",
  },
  {
    id: "liberdade",
    title: "Liberdade para participar",
    description: "Entre e saia quando quiser.",
  },
  {
    id: "sem-lotar",
    title: "Sem lotar seu celular",
    description: "Enviamos links com prévia dos produtos, sem fotos e vídeos anexados para baixar na galeria.",
  },
  {
    id: "plataformas-confiaveis",
    title: "Links de plataformas confiáveis",
    description: "Ofertas do Mercado Livre, Shopee e Amazon, com compra diretamente nas plataformas.",
  },
];

