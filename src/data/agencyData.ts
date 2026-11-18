export const WHATSAPP_NUMBER = "5538984254238";
export const CONTACT_EMAIL = "lethoscontato@gmail.com";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

export interface HeroMetric {
  label: string;
  value: string;
  detail: string;
}

export const HERO_METRICS: HeroMetric[] = [
  {
    value: "Sob medida",
    label: "Arquitetura exclusiva",
    detail: "Nenhum projeto usa modelo engessado",
  },
  {
    value: "< 1,2s",
    label: "Carregamento otimizado",
    detail: "Performance real em dispositivos móveis",
  },
  {
    value: "100%",
    label: "Design responsivo",
    detail: "Experiência precisa do celular ao desktop",
  },
  {
    value: "Direto",
    label: "Atendimento sem ruído",
    detail: "Contato próximo do briefing à entrega",
  },
];

export const ABOUT_CONTENT = {
  eyebrow: "Sobre a Lethos",
  headline: "Tecnologia sob medida para negócios que exigem presença digital sólida.",
  paragraphs: [
    "A Lethos Soluções Digitais é uma empresa focada no desenvolvimento de soluções tecnológicas personalizadas para empresas e profissionais. Criamos sites e aplicativos modernos, funcionais e intuitivos, utilizando tecnologia e inovação para ajudar negócios a fortalecer sua presença digital, otimizar processos e alcançar novos resultados.",
    "Nosso compromisso é transformar necessidades em soluções digitais eficientes, com qualidade, criatividade e atenção a cada projeto — entregando estrutura sólida para pequenas e médias empresas, empreendedores, profissionais autônomos e comércios que buscam crescer com segurança.",
  ],
  image: "/src/assets/images/about_lethos_studio_1795009975218.jpg",
  imageAlt: "Ambiente de trabalho da Lethos Serviços Digitais com estação de desenvolvimento em tela escura e arquitetura minimalista",
  differentials: [
    {
      title: "Projetos personalizados",
      description: "Cada interface e funcionalidade nasce da realidade e dos objetivos específicos do seu negócio.",
    },
    {
      title: "Design moderno e responsivo",
      description: "Visual de alto padrão adaptado com precisão para celulares, tablets e telas de alta resolução.",
    },
    {
      title: "Foco na experiência do usuário",
      description: "Navegação fluida, leitura clara e jornadas pensadas para conduzir o visitante à ação.",
    },
    {
      title: "Soluções funcionais e escaláveis",
      description: "Código limpo, integrações confiáveis e base preparada para acompanhar a evolução da empresa.",
    },
    {
      title: "Atendimento próximo",
      description: "Comunicação transparente em todas as etapas, com suporte ágil diretamente pelo WhatsApp.",
    },
    {
      title: "Compromisso com resultados",
      description: "Cada detalhe visual e técnico trabalha para gerar autoridade, eficiência operacional e conversão.",
    },
  ],
};

export interface ServiceItem {
  index: string;
  title: string;
  summary: string;
  deliverable: string;
  featured?: boolean;
  whatsappMessage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    index: "01",
    title: "Criação de Sites Institucionais",
    summary:
      "Posicionamos sua marca com autoridade, arquitetura clara e desempenho superior nos buscadores para atrair clientes qualificados.",
    deliverable: "Estrutura completa, SEO técnico, painel editável e integração direta com WhatsApp.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de solicitar um orçamento para criação de um Site Institucional com a Lethos.",
  },
  {
    index: "02",
    title: "Desenvolvimento de Landing Pages",
    summary:
      "Páginas de alta conversão desenhadas para campanhas, lançamentos e captação imediata de leads com carregamento instantâneo.",
    deliverable: "Copy estratégica, rastreamento de eventos e formulário integrado.",
    whatsappMessage:
      "Olá! Tenho interesse no desenvolvimento de uma Landing Page de alta conversão.",
  },
  {
    index: "03",
    title: "Criação de Lojas Virtuais",
    summary:
      "E-commerces rápidos, seguros e intuitivos para transformar visitantes em compradores recorrentes com checkout simplificado.",
    deliverable: "Catálogo inteligente, meios de pagamento, cálculo de frete e gestão de pedidos.",
    whatsappMessage:
      "Olá! Quero saber mais sobre a criação de uma Loja Virtual para o meu negócio.",
  },
  {
    index: "04",
    title: "Desenvolvimento de Aplicativos",
    summary:
      "Aplicativos móveis modernos e responsivos que colocam seus serviços na palma da mão do cliente com fluidez nativa.",
    deliverable: "Experiência iOS e Android, notificações e sincronização em nuvem.",
    featured: true,
    whatsappMessage:
      "Olá! Gostaria de conversar sobre o desenvolvimento de um Aplicativo.",
  },
  {
    index: "05",
    title: "Automação de Processos",
    summary:
      "Integração entre ferramentas, fluxos automatizados e soluções digitais sob medida para reduzir trabalho manual e erros.",
    deliverable: "APIs conectadas, rotinas automatizadas e ganho real de produtividade.",
    whatsappMessage:
      "Olá! Gostaria de avaliar uma Automação de Processos para otimizar meu negócio.",
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  context: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote:
      "Nosso site antigo não transmitia a qualidade do nosso escritório e era lento no celular. Após o novo portal institucional e a integração direta com o WhatsApp, dobramos os agendamentos mensais já nos primeiros 60 dias.",
    author: "Rafael Mendes",
    role: "Sócio-Diretor",
    company: "Mendes & Almeida Contabilidade",
    metric: "+118% em contatos qualificados",
    context: "Site Institucional · 60 dias pós-lançamento",
  },
  {
    id: "t2",
    quote:
      "Precisávamos sair das vendas apenas por mensagem e estruturar uma loja virtual confiável. A Lethos entregou um e-commerce rápido, fácil de gerenciar e com checkout sem atrito, elevando nossa receita online.",
    author: "Camila Ferreira",
    role: "Fundadora",
    company: "Ateliê Verve Concept",
    metric: "3,4x mais pedidos online",
    context: "Loja Virtual · 1º trimestre de operação",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  outcome: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico e Estratégia",
    description:
      "Entendemos seu modelo de negócio, público-alvo e gargalos operacionais para definir o escopo exato que gera retorno.",
    outcome: "Escopo técnico e cronograma claros",
  },
  {
    step: "02",
    title: "Design de Interface e Experiência",
    description:
      "Criamos o layout exclusivo com hierarquia visual precisa, identidade coerente e navegação intuitiva em qualquer tela.",
    outcome: "Protótipo validado antes do código",
  },
  {
    step: "03",
    title: "Desenvolvimento e Integrações",
    description:
      "Codificamos a solução com tecnologia atual, performance otimizada, SEO estruturado e integrações com WhatsApp e APIs.",
    outcome: "Código limpo, seguro e escalável",
  },
  {
    step: "04",
    title: "Testes, Lançamento e Evolução",
    description:
      "Validamos responsividade, velocidade e formulários antes da publicação, garantindo acompanhamento após ir ao ar.",
    outcome: "Publicação assistida e suporte próximo",
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  priceLabel: string;
  priceNote: string;
  highlighted?: boolean;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "presenca",
    name: "Presença Digital",
    subtitle: "Ideal para profissionais autônomos e lançamentos",
    priceLabel: "R$ 290,99",
    priceNote: "Prazo médio de 1 a 2 dias úteis",
    features: [
      "Landing page ou site one-page exclusivo",
      "Design responsivo para celular e desktop",
      "Botões estratégicos conectados ao WhatsApp",
      "SEO técnico inicial e certificado SSL",
      "Otimização de velocidade e formulários validados",
    ],
    ctaLabel: "Orçar Presença Digital",
    whatsappMessage:
      "Olá! Tenho interesse no plano Presença Digital (R$ 290,99). Gostaria de receber um orçamento.",
  },
  {
    id: "crescimento",
    name: "Negócio Escalável",
    subtitle: "Para empresas que querem autoridade e vendas contínuas",
    priceLabel: "R$ 779,90",
    priceNote: "Prazo médio de 2 a 3 dias",
    highlighted: true,
    features: [
      "Site institucional completo ou loja virtual",
      "Arquitetura multipáginas com UX sob medida",
      "Gestão de catálogo, checkout ou captação avançada",
      "Integração com WhatsApp, Analytics e pixel de conversão",
      "Treinamento da equipe e suporte prioritário pós-entrega",
    ],
    ctaLabel: "Orçar Negócio Escalável",
    whatsappMessage:
      "Olá! Gostaria de solicitar um orçamento para o plano Negócio Escalável (R$ 779,90).",
  },
  {
    id: "sob-medida",
    name: "Sistemas & Apps",
    subtitle: "Aplicativos, sistemas web e automações personalizadas",
    priceLabel: "Sob consulta",
    priceNote: "Escopo e cronograma conforme complexidade",
    features: [
      "Aplicativos móveis ou sistemas web dedicados",
      "Painéis administrativos com controle de acesso",
      "Automação de rotinas e integração via API",
      "Banco de dados estruturado e alta disponibilidade",
      "Acompanhamento técnico contínuo e evolução modular",
    ],
    ctaLabel: "Agendar Diagnóstico Técnico",
    whatsappMessage:
      "Olá! Preciso de um projeto sob medida (Sistema Web, Aplicativo ou Automação) e gostaria de agendar um diagnóstico.",
  },
];

export type ProjectCategory = "todos" | "sites" | "apps" | "sistemas";

export interface PortfolioProject {
  id: string;
  category: Exclude<ProjectCategory, "todos">;
  categoryLabel: string;
  title: string;
  client: string;
  year: string;
  stack: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  imageAlt: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "velours-ecommerce",
    category: "sites",
    categoryLabel: "Loja Virtual",
    title: "Plataforma de E-commerce de Alto Padrão",
    client: "Verve Concept Store",
    year: "2026",
    stack: "React · Checkout Integrado · SEO",
    summary:
      "Loja virtual minimalista com navegação instantânea entre coleções, vitrine responsiva e checkout simplificado para dispositivos móveis.",
    challenge:
      "A marca dependia exclusivamente de atendimentos manuais e perdia vendas pela lentidão do catálogo anterior.",
    solution:
      "Arquitetura leve com carregamento progressivo de imagens, filtros instantâneos e finalização de pedido em poucas etapas.",
    result: "Aumento de 240% na taxa de conclusão de compra pelo celular em 90 dias.",
    image: "/src/assets/images/portfolio_ecommerce_luxo_1795009976517.jpg",
    imageAlt: "Mockup de loja virtual de alto padrão exibida em notebook preto fosco sobre pedra escura",
  },
  {
    id: "apex-mobile-app",
    category: "apps",
    categoryLabel: "Aplicativo & Painel",
    title: "Aplicativo de Gestão e Indicadores em Tempo Real",
    client: "Grupo Horizonte Serviços",
    year: "2026",
    stack: "App Mobile · Painel Web · Nuvem",
    summary:
      "Aplicativo móvel integrado a painel gerencial para acompanhamento diário de metas, conversões e desempenho comercial.",
    challenge:
      "Gestores precisavam consolidar relatórios manualmente ao fim de cada semana para tomar decisões.",
    solution:
      "Interface única para celular e tablet com sincronização automática de dados, gráficos claros e alertas de operação.",
    result: "Visibilidade diária em tempo real e redução de 80% no tempo de consolidação gerencial.",
    image: "/src/assets/images/portfolio_app_gestao_1795009976973.jpg",
    imageAlt: "Smartphone e tablet exibindo aplicativo de indicadores e painel financeiro em modo escuro",
  },
  {
    id: "workflow-system",
    category: "sistemas",
    categoryLabel: "Sistema & Automação",
    title: "Portal Corporativo e Automação de Fluxos Internos",
    client: "NorteSul Engenharia",
    year: "2026",
    stack: "Sistema Web · APIs · Automação",
    summary:
      "Sistema web personalizado que centraliza aprovação de projetos, acompanhamento de etapas e notificações automáticas.",
    challenge:
      "Comunicação fragmentada entre equipes de campo e escritório gerava retrabalho e atrasos em aprovações.",
    solution:
      "Desenvolvimento de fluxo visual de aprovações com permissões por perfil e integração direta com alertas automáticos.",
    result: "Eliminação de planilhas paralelas e redução de 42% no ciclo médio de aprovação.",
    image: "/src/assets/images/portfolio_sistema_corporativo_1795009977694.jpg",
    imageAlt: "Monitor desktop exibindo sistema corporativo de fluxo de trabalho e automação em ambiente minimalista",
  },
];
