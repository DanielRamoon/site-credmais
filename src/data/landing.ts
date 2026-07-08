export const navLinks = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "VANTAGENS", href: "#vantagens" },
  { label: "COMO FUNCIONA", href: "#como-funciona" },
  { label: "SIMULAÇÃO", href: "#simulacao" },
  { label: "PERGUNTAS", href: "#perguntas" },
  { label: "CONTATO", href: "#contato" },
] as const;

export const advantages = [
  { title: "APROVAÇÃO RÁPIDA", icon: "rocket" },
  { title: "TAXAS REDUZIDAS", icon: "percent" },
  { title: "ATENDIMENTO PERSONALIZADO", icon: "headset" },
  { title: "SEM BUROCRACIA", icon: "document" },
  { title: "PAGAMENTO RÁPIDO", icon: "banknote" },
  { title: "SEGURANÇA TOTAL", icon: "shield" },
] as const;

export const audiences = [
  {
    label: "APOSENTADOS E PENSIONISTAS INSS",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop",
  },
  {
    label: "SERVIDORES PÚBLICOS",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
  },
  {
    label: "TRABALHADORES CLT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    label: "AUTÔNOMOS",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  },
  {
    label: "CRÉDITO PESSOAL",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&h=200&fit=crop",
  },
] as const;

export const steps = [
  { number: 1, title: "SOLICITE A SIMULAÇÃO", icon: "calculator" },
  { number: 2, title: "ENVIE A DOCUMENTAÇÃO", icon: "upload" },
  { number: 3, title: "AGUARDE A APROVAÇÃO", icon: "clock" },
  { number: 4, title: "RECEBA O DINHEIRO NA CONTA", icon: "wallet" },
] as const;

export const simulationRows = [
  { value: "R$ 2.000,00", installments: "até 24x" },
  { value: "R$ 3.000,00", installments: "até 36x" },
  { value: "R$ 5.000,00", installments: "até 48x" },
  { value: "R$ 10.000,00", installments: "até 60x" },
  { value: "R$ 15.000,00", installments: "até 72x" },
  { value: "R$ 20.000,00", installments: "até 84x" },
] as const;

export const testimonials = [
  {
    quote:
      "Processo rápido e sem complicação. Em poucas horas o dinheiro já estava na minha conta.",
    name: "Maria Silva",
    location: "São Paulo, SP",
  },
  {
    quote:
      "Atendimento excelente! Me explicaram tudo com clareza e as taxas foram as melhores que encontrei.",
    name: "João Santos",
    location: "Rio de Janeiro, RJ",
  },
  {
    quote:
      "Recomendo a Credmais para quem precisa de crédito com segurança e agilidade. Super confiável!",
    name: "Ana Oliveira",
    location: "Belo Horizonte, MG",
  },
] as const;

export const faqs = [
  {
    question: "O que é crédito consignado?",
    answer:
      "É um empréstimo com desconto direto na folha de pagamento ou benefício do INSS, oferecendo taxas mais baixas e parcelas fixas.",
  },
  {
    question: "Quanto tempo leva para aprovar?",
    answer:
      "Na maioria dos casos, a aprovação acontece no mesmo dia e o valor pode cair na conta em poucas horas após a liberação.",
  },
  {
    question: "Quais documentos são necessários?",
    answer:
      "Documento com foto, CPF, comprovante de residência e comprovante de renda ou benefício, conforme o perfil do cliente.",
  },
  {
    question: "Posso antecipar parcelas?",
    answer:
      "Sim. Você pode quitar ou antecipar parcelas a qualquer momento, com possibilidade de desconto nos juros.",
  },
  {
    question: "Qual o valor máximo que posso solicitar?",
    answer:
      "O valor depende da sua margem consignável e do perfil de crédito. Faça uma simulação gratuita para saber seu limite.",
  },
  {
    question: "O processo é 100% online?",
    answer:
      "Sim. Da simulação ao envio de documentos, todo o processo pode ser feito de forma digital, com suporte via WhatsApp.",
  },
] as const;

export const WHATSAPP_URL = "https://wa.me/5511999999999";
export const HERO_IMAGE = "/assets/images/img.png";
