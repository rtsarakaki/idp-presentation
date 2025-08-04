import React from 'react';
import { motion } from 'framer-motion';
import { IPresentationSlide } from '../data/presentation-outline';
import { 
  Monitor, 
  FileText, 
  Edit3, 
  GitBranch, 
  Server, 
  Shield, 
  Play, 
  Database,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react';

interface IComponentCreationFlowSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

interface IFlowStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  details: string[];
  duration: string;
}

const flowSteps: IFlowStep[] = [
  {
    id: 1,
    title: "Abertura da Plataforma",
    description: "Portal do Desenvolvedor",
    icon: Monitor,
    color: "bg-blue-500/20",
    details: [
      "Desenvolvedor acessa o portal Backstage",
      "Clica no botão 'Create Component'",
      "Formulário de criação é carregado"
    ],
    duration: "30 segundos"
  },
  {
    id: 2,
    title: "Escolha de Template",
    description: "Seleção Padronizada",
    icon: FileText,
    color: "bg-green-500/20",
    details: [
      "Seleciona template padronizado (YAML)",
      "Microserviço Node.js, Python, Java",
      "Lambda, container, app frontend",
      "Infraestrutura e pipelines inclusas"
    ],
    duration: "1 minuto"
  },
  {
    id: 3,
    title: "Preenchimento de Informações",
    description: "Formulário Estruturado",
    icon: Edit3,
    color: "bg-purple-500/20",
    details: [
      "Nome do componente e tipo",
      "Equipe responsável e domínio",
      "Diretória/área/sistema/produto",
      "Nível de criticidade",
      "Linguagem e tags",
      "Popula catalog-info.yaml"
    ],
    duration: "2 minutos"
  },
  {
    id: 4,
    title: "Geração Automatizada",
    description: "Scaffolder em Ação",
    icon: GitBranch,
    color: "bg-orange-500/20",
    details: [
      "Cria repositório no GitHub",
      "Estrutura de código + configurações",
      "Dockerfile, Helm chart, pipelines",
      "Branch default, codeowners, proteções",
      "Registra no catálogo Backstage"
    ],
    duration: "3 minutos"
  },
  {
    id: 5,
    title: "Provisionamento de Infraestrutura",
    description: "IaC Automatizado",
    icon: Server,
    color: "bg-red-500/20",
    details: [
      "Cria recursos na AWS (ECR, ECS/EKS)",
      "Banco de dados (RDS, DynamoDB)",
      "Buckets S3, Secrets, VPC",
      "Logs no CloudWatch",
      "Alarmes e dashboards",
      "Segmentação por conta AWS"
    ],
    duration: "5 minutos"
  },
  {
    id: 6,
    title: "Observabilidade e Segurança",
    description: "Monitoramento Integrado",
    icon: Shield,
    color: "bg-indigo-500/20",
    details: [
      "Integrações com monitoramento",
      "Rastreabilidade (OpenTelemetry)",
      "Alertas (PagerDuty, Opsgenie)",
      "Dependabot e SonarQube",
      "Regras de segurança (IAM, secrets)"
    ],
    duration: "2 minutos"
  },
  {
    id: 7,
    title: "Deploy Automatizado",
    description: "Pipeline CI/CD",
    icon: Play,
    color: "bg-teal-500/20",
    details: [
      "Testes, lint, análise estática",
      "Build e push para ECR",
      "Deploy em homologação",
      "PR para produção",
      "Aprovação automatizada/manual"
    ],
    duration: "4 minutos"
  },
  {
    id: 8,
    title: "Registro e Visualização",
    description: "Catálogo Atualizado",
    icon: Database,
    color: "bg-pink-500/20",
    details: [
      "Listado no catálogo de componentes",
      "Links para repo, CI/CD, logs",
      "Dashboard e documentação",
      "Metadados atualizados",
      "Health check e status"
    ],
    duration: "1 minuto"
  }
];

const FlowStepCard = ({ step }: { 
  step: IFlowStep; 
}) => {
  const IconComponent = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: step.id * 0.1 }}
      className={`${step.color} rounded-lg border border-white/20 max-w-md mx-auto`}
    >
      <div className="p-4">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <IconComponent size={16} className="text-white" />
          </div>
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white">{step.title}</h3>
            <p className="text-xs text-gray-300">{step.description}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={12} className="text-gray-400" />
            <span className="text-xs text-gray-400">{step.duration}</span>
          </div>
        </div>
        
        <div className="space-y-1">
          {step.details.map((detail, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <CheckCircle size={10} className="text-green-400 mt-1 flex-shrink-0" />
              <span className="text-xs text-gray-300">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ComponentCreationFlowSlide({ slide, isActive }: IComponentCreationFlowSlideProps) {

  if (!isActive) return null;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white" style={{ overflowY: 'auto', height: '100vh' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl w-full py-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            {slide.subtitle}
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>1 Desenvolvedor</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>Total: ~18 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>8 Passos Automatizados</span>
            </div>
          </div>
        </motion.div>

        {/* Flow Steps */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {flowSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <FlowStepCard step={step} />
              {index < flowSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: (step.id + 0.5) * 0.1 }}
                  className="mt-4 mb-2"
                >
                  <ArrowRight size={20} className="text-white transform rotate-90" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10"
        >
          <h3 className="text-lg font-semibold text-white mb-3 text-center">Fluxo Resumido</h3>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
            <span>Backstage → Template → Formulário → Geração → Infraestrutura → Deploy → Catálogo</span>
          </div>
          <div className="mt-4 text-center text-xs text-gray-400">
            <p>Do código à produção em menos de 20 minutos, com toda infraestrutura, observabilidade e segurança configuradas automaticamente.</p>
          </div>
        </motion.div>

        {/* Extra space for scroll */}
        <div className="h-20"></div>
      </div>
    </div>
  );
} 