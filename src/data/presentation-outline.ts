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
      title: "Internal Developer Platform (IDP)",
      subtitle: "Estratégia para Times de Engenharia",
      content: [
        "A Jornada dos Times de Engenharia",
        "Os Problemas que Enfrentamos",
        "O que é IDP e seus Princípios",
        "Partes que Compõem uma IDP",
        "Fluxo de Criação de Componentes",
        "Desafios de Adoção"
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
        "Experiência em desenvolvimento de software, arquitetura de soluções, plataforma de engenharia e SRE",
        "Vivi múltiplas transformações digitais ao longo da jornada",
        "Apaixonado por tecnologia, inovação e desenvolvimento de pessoas"
      ],
      duration: 4,
      type: "intro"
    },
    {
      id: "context",
      title: "A Jornada dos Times de Engenharia",
      subtitle: "Como Trabalhávamos Antes",
      content: [
        "Processos manuais e burocráticos",
        "Configuração de ambiente levava dias",
        "Cada time tinha sua própria forma de fazer",
        "Falta de padronização e visibilidade",
        "Desenvolvedores perdiam tempo com infraestrutura"
      ],
      duration: 5,
      type: "problem"
    },
    {
      id: "pain-points",
      title: "Os Problemas que Enfrentamos",
      subtitle: "Fricções no Desenvolvimento",
      content: [
        "Tempo significativo perdido em tarefas não-código",
        "Processos burocráticos e aprovações manuais",
        "Inconsistência entre projetos e times",
        "Visibilidade limitada sobre custos e performance",
        "Onboarding demorado de novos desenvolvedores"
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
      id: "idp-components",
      title: "Partes que Compõem uma IDP",
      subtitle: "Arquitetura e Componentes",
      content: [
        "Interface do Desenvolvedor (Dev Portal)",
        "Catálogo de Componentes",
        "Gerenciador de Templates",
        "Pipeline de CI/CD Automatizado",
        "Provisionamento de Infraestrutura (IaC)",
        "Gestão de Segredos e Acessos",
        "Monitoramento e Observabilidade",
        "Catálogo de Serviços (Service Catalog)",
        "Políticas e Compliance",
        "Sistema de Feedback e Métricas",
        "TechDocs e Documentação",
        "Detecção de Vazamento de Secrets"
      ],
      duration: 10,
      type: "concept"
    },
    {
      id: "component-creation-flow",
      title: "Fluxo de Criação de um Componente na Plataforma Backstage",
      subtitle: "Do Código à Produção em Minutos",
      content: [
        "Abertura da Plataforma (Portal do Desenvolvedor)",
        "Escolha de um Template",
        "Preenchimento de Informações",
        "Geração Automatizada (por Scaffolder)",
        "Provisionamento de Infraestrutura",
        "Habilitação de Observabilidade e Segurança",
        "Deploy Automatizado",
        "Registro e Visualização no Backstage"
      ],
      duration: 8,
      type: "concept"
    },
    {
      id: "closing",
      title: "Desafios de Adoção",
      subtitle: "Lições Aprendidas e Estratégias de Sucesso",
      content: [
        "Resistência à mudança de processos e cultura",
        "Curva de aprendizado inicial e treinamento - criação de ferramentas de onboarding e onboarding guiado na plataforma",
        "Necessidade de evangelização contínua e comunicação",
        "Importância do suporte executivo e alinhamento estratégico",
        "Medição e demonstração de valor e ROI",
        "Integração com ferramentas existentes e legacy",
        "Escalabilidade da plataforma e performance",
        "Governança e compliance em ambientes regulamentados"
      ],
      duration: 8,
      type: "closing"
    },
                {
              id: "thank-you",
              title: "Obrigado!",
              subtitle: "Perguntas e Discussão",
              content: [
                "Ricardo Arakaki",
                "rtsarakaki@gmail.com",
                "linkedin.com/in/ricardo-arakaki",
                "github.com/rtsarakaki"
              ],
              duration: 3,
              type: "closing"
            }
  ]
}; 