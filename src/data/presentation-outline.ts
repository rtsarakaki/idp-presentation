export interface IPresentationSlide {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  duration: number; // em minutos
  type: 'intro' | 'problem' | 'concept' | 'solution' | 'benefits' | 'implementation' | 'closing';
}

export interface IPresentationOutline {
  title: string;
  subtitle: string;
  totalDuration: number;
  slides: IPresentationSlide[];
}

export const presentationOutline: IPresentationOutline = {
  title: "Internal Developer Platform (IDP)",
  subtitle: "Transformando a Experiência de Desenvolvimento e Acelerando a Entrega de Valor",
  totalDuration: 60,
  slides: [
    {
      id: "intro",
      title: "Internal Developer Platform",
      subtitle: "Transformando a Engenharia de Software",
      content: [
        "Contexto e Desafios Atuais",
        "O que é IDP e seus Princípios",
        "Benefícios: Aceleração, Observabilidade e Governança",
        "Abordagem de Implementação e Próximos Passos"
      ],
      duration: 3,
      type: "intro"
    },
    {
      id: "presentation",
      title: "Sobre Mim",
      subtitle: "Ricardo Arakaki",
      content: [
        "Profissional de tecnologia com mais de 25 anos de experiência",
        "Atuei em diversos papéis: desenvolvimento, arquitetura, liderança",
        "Foco em plataformas de engenharia, SRE e observabilidade",
        "Vivi múltiplas transformações digitais ao longo da jornada",
        "Apaixonado por tecnologia, inovação e desenvolvimento de pessoas"
      ],
      duration: 4,
      type: "intro"
    },
    {
      id: "context",
      title: "O Contexto Atual",
      subtitle: "Desafios da Engenharia de Software Moderna",
      content: [
        "Times distribuídos e multidisciplinares",
        "Pressão por velocidade de entrega",
        "Complexidade crescente da infraestrutura",
        "Necessidade de governança e controle"
      ],
      duration: 5,
      type: "problem"
    },
    {
      id: "pain-points",
      title: "Os Problemas que Enfrentamos",
      subtitle: "Fricções no Desenvolvimento",
      content: [
        "40-60% do tempo dos devs em tarefas não-código",
        "Processos burocráticos e aprovações manuais",
        "Inconsistência entre projetos e times",
        "Falta de visibilidade sobre custos e performance",
        "Onboarding lento de novos desenvolvedores"
      ],
      duration: 8,
      type: "problem"
    },
    {
      id: "what-is-idp",
      title: "O que é IDP?",
      subtitle: "Internal Developer Platform",
      content: [
        "Plataforma interna que automatiza e padroniza o desenvolvimento",
        "Transforma desenvolvedores em 'usuários' da infraestrutura",
        "Centraliza e simplifica processos de desenvolvimento",
        "Como um 'Netflix' para recursos de desenvolvimento"
      ],
      duration: 7,
      type: "concept"
    },
    {
      id: "idp-principles",
      title: "Princípios do IDP",
      subtitle: "Fundamentos da Plataforma",
      content: [
        "Self-service para desenvolvedores",
        "Padronização e consistência",
        "Automação de processos repetitivos",
        "Observabilidade integrada",
        "Governança embutida"
      ],
      duration: 6,
      type: "concept"
    },
    {
      id: "acceleration-benefits",
      title: "Aceleração do Desenvolvimento",
      subtitle: "Velocidade e Eficiência",
      content: [
        "Setup de projeto em minutos, não dias",
        "Templates padronizados e reutilizáveis",
        "Self-service para recursos de infraestrutura",
        "Redução de 70-80% no tempo de configuração",
        "Foco no código de negócio, não em infraestrutura"
      ],
      duration: 8,
      type: "benefits"
    },
    {
      id: "observability-benefits",
      title: "Observabilidade e Métricas",
      subtitle: "Visibilidade Total",
      content: [
        "Dashboards automáticos com baselines",
        "Métricas DORA em tempo real",
        "Indicadores por produto, time, gerência",
        "Alertas proativos e inteligentes",
        "Relatórios executivos automáticos"
      ],
      duration: 7,
      type: "benefits"
    },
    {
      id: "governance-benefits",
      title: "Governança e Controle",
      subtitle: "Compliance Automatizado",
      content: [
        "Catalogação automática de componentes",
        "Tagueamento inteligente de recursos",
        "Rastreamento de custos por múltiplas dimensões",
        "Políticas de segurança centralizadas",
        "Auditoria e compliance automáticos"
      ],
      duration: 7,
      type: "benefits"
    },
    {
      id: "implementation-approach",
      title: "Abordagem de Implementação",
      subtitle: "Como Começar",
      content: [
        "Começar pequeno, crescer organicamente",
        "Identificar processos mais críticos",
        "Engajar times early adopters",
        "Medir e iterar continuamente",
        "Cultura de melhoria contínua"
      ],
      duration: 6,
      type: "implementation"
    },
    {
      id: "closing",
      title: "Próximos Passos",
      subtitle: "Transformando a Engenharia",
      content: [
        "Identificar oportunidades de melhoria",
        "Formar comitê de adoção",
        "Definir roadmap de implementação",
        "Começar com um piloto",
        "Medir resultados e expandir"
      ],
      duration: 3,
      type: "closing"
    }
  ]
}; 