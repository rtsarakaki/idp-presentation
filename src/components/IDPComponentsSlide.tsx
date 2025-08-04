'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Package,
  FileText,
  GitBranch,
  Server,
  Shield,
  Eye,
  Database,
  CheckCircle,
  BarChart3,
  ArrowRight,
  ArrowUp
} from 'lucide-react';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IIDPComponentsSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

interface IComponent {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  examples: string[];
  benefits: string[];
  howItWorks: string;
}

const components: IComponent[] = [
  {
    id: 1,
    title: "Interface do Desenvolvedor",
    description: "Ponto de entrada da IDP. Portal web, CLI ou bot (ex: Slack). Permite solicitar ambientes, criar aplicações, fazer deploys, acessar logs e métricas.",
    icon: Monitor,
    color: "bg-blue-600",
    examples: ["Portal Web", "CLI", "Slack Bot", "VS Code Extension"],
    benefits: ["Acesso centralizado", "Experiência unificada", "Self-service"],
    howItWorks: "A plataforma oferece múltiplos pontos de entrada: portal web para interface visual, CLI para automação e scripts, bots para integração com ferramentas de comunicação. Todos conectam aos mesmos serviços backend, garantindo consistência."
  },
  {
    id: 2,
    title: "Catálogo de Componentes",
    description: "Lista todos os recursos disponíveis: templates de aplicação, serviços, bibliotecas reutilizáveis, infraestrutura. Permite padronização e descoberta fácil.",
    icon: Package,
    color: "bg-green-600",
    examples: ["Templates de App", "Bibliotecas", "Serviços", "Infraestrutura"],
    benefits: ["Padronização", "Descoberta fácil", "Reutilização"],
    howItWorks: "A plataforma mantém um registro centralizado de todos os recursos disponíveis. Desenvolvedores podem navegar, pesquisar e descobrir componentes através de tags, categorias e metadados. O catálogo integra-se com repositórios Git, registros de containers e documentação."
  },
  {
    id: 3,
    title: "Gerenciador de Templates",
    description: "Define modelos para criação de novos projetos, APIs, microsserviços, lambdas, etc. Garante conformidade com padrões de arquitetura, segurança e observabilidade.",
    icon: FileText,
    color: "bg-purple-600",
    examples: ["Scaffolds", "Boilerplates", "Arquiteturas", "Configurações"],
    benefits: ["Conformidade", "Padrões", "Velocidade"],
    howItWorks: "A plataforma armazena templates versionados em repositórios Git. Quando um desenvolvedor solicita um novo projeto, a plataforma clona o template, substitui variáveis, aplica configurações específicas e cria o repositório final. Templates incluem CI/CD, observabilidade e configurações de segurança pré-definidas."
  },
  {
    id: 4,
    title: "Pipeline de CI/CD",
    description: "Automatiza build, testes, validações e deploys com regras e políticas definidas previamente. Garante qualidade e entrega consistente.",
    icon: GitBranch,
    color: "bg-orange-600",
    examples: ["Build", "Testes", "Validações", "Deploy"],
    benefits: ["Automação", "Qualidade", "Consistência"],
    howItWorks: "A plataforma configura pipelines automaticamente baseados em templates. Quando um repositório é criado, a plataforma detecta o tipo de aplicação e aplica o pipeline apropriado. Pipelines incluem stages para build, testes unitários, testes de integração, análise de segurança e deploy automatizado para ambientes."
  },
  {
    id: 5,
    title: "Provisionamento IaC",
    description: "Geração e aplicação de infraestrutura como código. Pode ser CloudFormation, Terraform, Pulumi, etc. Abstrai recursos como buckets, filas, bancos de dados.",
    icon: Server,
    color: "bg-red-600",
    examples: ["Terraform", "CloudFormation", "Pulumi", "CDK"],
    benefits: ["Infraestrutura como código", "Versionamento", "Reprodutibilidade"],
    howItWorks: "A plataforma gera código IaC automaticamente baseado em templates e configurações. Quando um desenvolvedor solicita recursos, a plataforma cria os arquivos Terraform/CloudFormation, aplica as configurações de rede, segurança e observabilidade, e executa o deploy através de pipelines automatizados."
  },
  {
    id: 6,
    title: "Gestão de Segredos e Acessos",
    description: "Integra com cofres de segredo (ex: AWS Secrets Manager, Vault). Aplica permissões via RBAC, ABAC ou policies de cloud.",
    icon: Shield,
    color: "bg-indigo-600",
    examples: ["AWS Secrets Manager", "HashiCorp Vault", "RBAC", "ABAC"],
    benefits: ["Segurança", "Controle de acesso", "Compliance"],
    howItWorks: "A plataforma integra-se com cofres de segredos para gerenciar credenciais automaticamente. Quando aplicações são criadas, a plataforma gera secrets únicos, configura políticas de acesso baseadas em roles, e injeta as credenciais de forma segura nos containers/instâncias. Rotação automática de credenciais é configurada por padrão."
  },
  {
    id: 7,
    title: "Monitoramento e Observabilidade",
    description: "Dashboards e alertas prontos. Integrações com ferramentas como Prometheus, Grafana, New Relic, Datadog, etc.",
    icon: Eye,
    color: "bg-teal-600",
    examples: ["Prometheus", "Grafana", "New Relic", "Datadog"],
    benefits: ["Visibilidade", "Alertas proativos", "Troubleshooting"],
    howItWorks: "A plataforma configura automaticamente agentes de monitoramento em todos os recursos provisionados. Dashboards são criados automaticamente com métricas de aplicação, infraestrutura e negócio. Alertas são configurados baseados em thresholds e SLOs. Logs são centralizados e correlacionados para facilitar troubleshooting."
  },
  {
    id: 8,
    title: "Catálogo de Serviços",
    description: "Módulos prontos para uso: banco de dados, cache, filas, storage, etc. Time de plataforma provisiona e mantém.",
    icon: Database,
    color: "bg-pink-600",
    examples: ["RDS", "Redis", "SQS", "S3"],
    benefits: ["Reutilização", "Padronização", "Manutenção centralizada"],
    howItWorks: "A plataforma oferece serviços gerenciados através de um catálogo self-service. Desenvolvedores podem solicitar bancos de dados, caches, filas e storage com configurações pré-aprovadas. A plataforma provisiona automaticamente os recursos, configura backup, monitoramento e manutenção. Custos são alocados por projeto/time."
  },
  {
    id: 9,
    title: "Políticas e Compliance",
    description: "Validações automáticas antes do deploy. Garantia de padrões mínimos de segurança, custo, performance.",
    icon: CheckCircle,
    color: "bg-emerald-600",
    examples: ["Security Policies", "Cost Controls", "Performance Gates"],
    benefits: ["Compliance", "Governança", "Controle de custos"],
    howItWorks: "A plataforma implementa políticas como código (Policy as Code). Antes de cada deploy, validações automáticas verificam segurança, custos, performance e compliance. Políticas podem bloquear deploys que não atendem aos padrões. Relatórios de compliance são gerados automaticamente para auditorias."
  },
  {
    id: 10,
    title: "Sistema de Feedback e Métricas",
    description: "Geração de métricas como tempo de deploy, MTTR, sucesso de builds. Permite mensurar o impacto da plataforma e das melhorias.",
    icon: BarChart3,
    color: "bg-cyan-600",
    examples: ["DORA Metrics", "Build Success Rate", "Deployment Time"],
    benefits: ["Mensuração", "Melhoria contínua", "ROI"],
    howItWorks: "A plataforma coleta métricas automaticamente de todos os componentes: tempo de deploy, taxa de sucesso de builds, MTTR, disponibilidade de serviços. Dashboards mostram tendências e comparativos. Relatórios são gerados para demonstrar ROI da plataforma e identificar oportunidades de melhoria."
  },
  {
    id: 11,
    title: "TechDocs e Documentação",
    description: "Documentação técnica centralizada e automatizada. Geração automática de docs baseada em código, APIs e infraestrutura.",
    icon: FileText,
    color: "bg-yellow-600",
    examples: ["API Docs", "Architecture Docs", "Runbooks", "Troubleshooting"],
    benefits: ["Documentação sempre atualizada", "Onboarding facilitado", "Conhecimento compartilhado"],
    howItWorks: "A plataforma gera documentação automaticamente a partir do código, APIs, infraestrutura e configurações. TechDocs são criados usando ferramentas como Backstage, Docusaurus ou MkDocs. Documentação é versionada junto com o código e atualizada automaticamente em cada deploy. Inclui runbooks, troubleshooting guides e arquitetura de sistemas."
  },
  {
    id: 12,
    title: "Detecção de Vazamento de Secrets",
    description: "Monitoramento contínuo para detectar credenciais expostas em código, logs, repositórios e comunicação. Alertas e remediação automática.",
    icon: Shield,
    color: "bg-red-600",
    examples: ["GitGuardian", "TruffleHog", "AWS Config", "Custom Scanners"],
    benefits: ["Segurança proativa", "Compliance", "Prevenção de incidentes"],
    howItWorks: "A plataforma implementa scanners automáticos que monitoram repositórios Git, logs, comunicação e infraestrutura em busca de credenciais expostas. Quando detectado, gera alertas imediatos, bloqueia commits se necessário, e inicia processo de rotação automática de credenciais. Integra-se com ferramentas como GitGuardian, TruffleHog e scanners customizados."
  }
];



const ArchitectureDiagram = ({ onComponentClick }: { onComponentClick: (componentId: number, event: React.MouseEvent) => void }) => {
  return (
    <div className="bg-white/5 rounded-lg p-8 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-6 text-center">Arquitetura da IDP</h3>
      
                        <div className="space-y-12">
        {/* First Layer */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { 
              id: 1, 
              title: "Interface do Desenvolvedor", 
              icon: Monitor, 
              color: "bg-blue-500/20", 
              borderColor: "border-blue-500/30", 
              textColor: "text-blue-300",
              description: "Ponto de entrada da IDP. Portal web, CLI ou bot (ex: Slack).",
              examples: ["Portal Web", "CLI", "Slack Bot"],
              benefits: ["Acesso centralizado", "Self-service"]
            },
            { 
              id: 2, 
              title: "Catálogo de Componentes", 
              icon: Package, 
              color: "bg-green-500/20", 
              borderColor: "border-green-500/30", 
              textColor: "text-green-300",
              description: "Lista todos os recursos disponíveis: templates, serviços, bibliotecas reutilizáveis.",
              examples: ["Templates de App", "Bibliotecas", "Serviços"],
              benefits: ["Padronização", "Descoberta fácil", "Reutilização"]
            },
            { 
              id: 3, 
              title: "Gerenciador de Templates", 
              icon: FileText, 
              color: "bg-purple-500/20", 
              borderColor: "border-purple-500/30", 
              textColor: "text-purple-300",
              description: "Define modelos para criação de novos projetos, APIs, microsserviços, lambdas.",
              examples: ["Scaffolds", "Boilerplates", "Arquiteturas"],
              benefits: ["Conformidade", "Padrões", "Velocidade"]
            }
          ].map((component) => (
            <div 
              key={component.id}
              className={`${component.color} rounded-lg p-4 border ${component.borderColor} cursor-pointer hover:scale-105 transition-transform`}
              onClick={(e) => onComponentClick(component.id, e)}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                {(() => {
                  const IconComponent = component.icon;
                  return <IconComponent size={20} className={`${component.textColor}`} />;
                })()}
                <span className={`text-sm font-semibold ${component.textColor}`}>{component.title}</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">{component.description}</div>
              <div className="text-xs text-gray-300 space-y-1">
                <div className="font-semibold text-blue-300">Exemplos:</div>
                {component.examples.slice(0, 2).map((example, idx) => (
                  <div key={idx}>• {example}</div>
                ))}
                <div className="font-semibold text-green-300 mt-2">Benefícios:</div>
                {component.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx}>• {benefit}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Layer */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { 
              id: 4, 
              title: "Pipeline de CI/CD", 
              icon: GitBranch, 
              color: "bg-orange-500/20", 
              borderColor: "border-orange-500/30", 
              textColor: "text-orange-300",
              description: "Automatiza build, testes, validações e deploys com regras e políticas.",
              examples: ["Build", "Testes", "Validações", "Deploy"],
              benefits: ["Automação", "Qualidade", "Consistência"]
            },
            { 
              id: 5, 
              title: "Provisionamento IaC", 
              icon: Server, 
              color: "bg-red-500/20", 
              borderColor: "border-red-500/30", 
              textColor: "text-red-300",
              description: "Geração e aplicação de infraestrutura como código. Abstrai recursos como buckets, filas, bancos de dados.",
              examples: ["Terraform", "CloudFormation", "Pulumi"],
              benefits: ["Infraestrutura como código", "Versionamento"]
            },
            { 
              id: 6, 
              title: "Gestão de Segredos e Acessos", 
              icon: Shield, 
              color: "bg-indigo-500/20", 
              borderColor: "border-indigo-500/30", 
              textColor: "text-indigo-300",
              description: "Integra com cofres de segredo e aplica permissões via RBAC, ABAC ou policies de cloud.",
              examples: ["AWS Secrets Manager", "HashiCorp Vault", "RBAC"],
              benefits: ["Segurança", "Controle de acesso", "Compliance"]
            }
          ].map((component) => (
            <div 
              key={component.id}
              className={`${component.color} rounded-lg p-4 border ${component.borderColor} cursor-pointer hover:scale-105 transition-transform`}
              onClick={(e) => onComponentClick(component.id, e)}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                {(() => {
                  const IconComponent = component.icon;
                  return <IconComponent size={20} className={`${component.textColor}`} />;
                })()}
                <span className={`text-sm font-semibold ${component.textColor}`}>{component.title}</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">{component.description}</div>
              <div className="text-xs text-gray-300 space-y-1">
                <div className="font-semibold text-blue-300">Exemplos:</div>
                {component.examples.slice(0, 2).map((example, idx) => (
                  <div key={idx}>• {example}</div>
                ))}
                <div className="font-semibold text-green-300 mt-2">Benefícios:</div>
                {component.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx}>• {benefit}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Third Layer */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { 
              id: 7, 
              title: "Monitoramento e Observabilidade", 
              icon: Eye, 
              color: "bg-teal-500/20", 
              borderColor: "border-teal-500/30", 
              textColor: "text-teal-300",
              description: "Dashboards e alertas prontos. Integrações com ferramentas como Prometheus, Grafana, New Relic, Datadog.",
              examples: ["Prometheus", "Grafana", "New Relic"],
              benefits: ["Visibilidade", "Alertas proativos", "Troubleshooting"]
            },
            { 
              id: 8, 
              title: "Catálogo de Serviços", 
              icon: Database, 
              color: "bg-pink-500/20", 
              borderColor: "border-pink-500/30", 
              textColor: "text-pink-300",
              description: "Módulos prontos para uso: banco de dados, cache, filas, storage. Time de plataforma provisiona e mantém.",
              examples: ["RDS", "Redis", "SQS", "S3"],
              benefits: ["Reutilização", "Padronização", "Manutenção centralizada"]
            },
            { 
              id: 9, 
              title: "Políticas e Compliance", 
              icon: CheckCircle, 
              color: "bg-emerald-500/20", 
              borderColor: "border-emerald-500/30", 
              textColor: "text-emerald-300",
              description: "Validações automáticas antes do deploy. Garantia de padrões mínimos de segurança, custo, performance.",
              examples: ["Security Policies", "Cost Controls", "Performance Gates"],
              benefits: ["Compliance", "Governança", "Controle de custos"]
            }
          ].map((component) => (
            <div 
              key={component.id}
              className={`${component.color} rounded-lg p-4 border ${component.borderColor} cursor-pointer hover:scale-105 transition-transform`}
              onClick={(e) => onComponentClick(component.id, e)}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                {(() => {
                  const IconComponent = component.icon;
                  return <IconComponent size={20} className={`${component.textColor}`} />;
                })()}
                <span className={`text-sm font-semibold ${component.textColor}`}>{component.title}</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">{component.description}</div>
              <div className="text-xs text-gray-300 space-y-1">
                <div className="font-semibold text-blue-300">Exemplos:</div>
                {component.examples.slice(0, 2).map((example, idx) => (
                  <div key={idx}>• {example}</div>
                ))}
                <div className="font-semibold text-green-300 mt-2">Benefícios:</div>
                {component.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx}>• {benefit}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fourth Layer */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { 
              id: 10, 
              title: "Sistema de Feedback e Métricas", 
              icon: BarChart3, 
              color: "bg-cyan-500/20", 
              borderColor: "border-cyan-500/30", 
              textColor: "text-cyan-300",
              description: "Geração de métricas como tempo de deploy, MTTR, sucesso de builds. Permite mensurar o impacto da plataforma.",
              examples: ["DORA Metrics", "Build Success Rate", "Deployment Time"],
              benefits: ["Mensuração", "Melhoria contínua", "ROI"]
            },
            { 
              id: 11, 
              title: "TechDocs e Documentação", 
              icon: FileText, 
              color: "bg-yellow-500/20", 
              borderColor: "border-yellow-500/30", 
              textColor: "text-yellow-300",
              description: "Documentação técnica centralizada e automatizada. Geração automática de docs baseada em código, APIs e infraestrutura.",
              examples: ["API Docs", "Architecture Docs", "Runbooks"],
              benefits: ["Documentação sempre atualizada", "Onboarding facilitado"]
            },
            { 
              id: 12, 
              title: "Detecção de Vazamento de Secrets", 
              icon: Shield, 
              color: "bg-red-500/20", 
              borderColor: "border-red-500/30", 
              textColor: "text-red-300",
              description: "Monitoramento contínuo para detectar credenciais expostas em código, logs, repositórios e comunicação.",
              examples: ["GitGuardian", "TruffleHog", "AWS Config"],
              benefits: ["Segurança proativa", "Compliance", "Prevenção"]
            }
          ].map((component) => (
            <div 
              key={component.id}
              className={`${component.color} rounded-lg p-4 border ${component.borderColor} cursor-pointer hover:scale-105 transition-transform`}
              onClick={(e) => onComponentClick(component.id, e)}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                {(() => {
                  const IconComponent = component.icon;
                  return <IconComponent size={20} className={`${component.textColor}`} />;
                })()}
                <span className={`text-sm font-semibold ${component.textColor}`}>{component.title}</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">{component.description}</div>
              <div className="text-xs text-gray-300 space-y-1">
                <div className="font-semibold text-blue-300">Exemplos:</div>
                {component.examples.slice(0, 2).map((example, idx) => (
                  <div key={idx}>• {example}</div>
                ))}
                <div className="font-semibold text-green-300 mt-2">Benefícios:</div>
                {component.benefits.slice(0, 2).map((benefit, idx) => (
                  <div key={idx}>• {benefit}</div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default function IDPComponentsSlide({ slide, isActive }: IIDPComponentsSlideProps) {
  const [tooltipComponent, setTooltipComponent] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);

  const handleArchitectureClick = (componentId: number, event: React.MouseEvent) => {
    if (tooltipComponent === componentId) {
      setTooltipComponent(null);
      setTooltipPosition(null);
    } else {
      setTooltipComponent(componentId);
      // Captura a posição do elemento clicado
      const rect = event.currentTarget.getBoundingClientRect();
      const tooltipWidth = 320; // 80 * 4 (w-80 = 20rem = 320px)
      const tooltipHeight = 300; // Altura aproximada do tooltip
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calcula a posição X, evitando que saia da tela
      let x = rect.right + 20;
      if (x + tooltipWidth > windowWidth) {
        x = rect.left - tooltipWidth - 20; // Posiciona à esquerda se não couber à direita
      }
      
      // Calcula a posição Y, evitando que saia da tela
      let y = rect.top + rect.height / 2;
      
      // Se o centro do elemento está na metade inferior da tela, posiciona o tooltip acima
      if (rect.top + rect.height / 2 > windowHeight / 2) {
        y = rect.top - tooltipHeight - 10; // 10px acima do elemento
      } else {
        y = rect.bottom + 10; // 10px abaixo do elemento
      }
      
      // Garante que não saia da tela
      y = Math.max(20, Math.min(windowHeight - tooltipHeight - 20, y));
      
      setTooltipPosition({
        x: Math.max(20, x), // Mínimo 20px da borda
        y: y
      });
    }
  };

  if (!isActive) return null;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white" style={{ overflowY: 'auto', height: '100vh' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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
          <p className="text-lg text-gray-300">
            {slide.subtitle}
          </p>
        </motion.div>

        {/* Main Content - Full Width Diagram */}
        <div className="flex justify-center w-full flex-1">
          <div className="w-full max-w-6xl" style={{ minHeight: 'calc(100vh - 100px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ArchitectureDiagram onComponentClick={handleArchitectureClick} />
            </motion.div>

            {/* Tooltip */}
            {tooltipComponent && tooltipPosition && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed w-80 bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-2xl z-50"
                style={{
                  left: tooltipPosition.x,
                  top: tooltipPosition.y
                }}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 ${components[tooltipComponent - 1]?.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    {(() => {
                      const IconComponent = components[tooltipComponent - 1]?.icon;
                      return IconComponent ? <IconComponent size={16} className="text-white" /> : null;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {components[tooltipComponent - 1]?.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {components[tooltipComponent - 1]?.description}
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-xs font-semibold text-blue-600 mb-1">Exemplos</h4>
                        <div className="flex flex-wrap gap-1">
                          {components[tooltipComponent - 1]?.examples.map((example, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 rounded text-xs text-blue-800">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-green-600 mb-1">Benefícios</h4>
                        <div className="flex flex-wrap gap-1">
                          {components[tooltipComponent - 1]?.benefits.map((benefit, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-100 rounded text-xs text-green-800">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-purple-600 mb-1">Como Funciona</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {components[tooltipComponent - 1]?.howItWorks}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Close button */}
                <button
                  onClick={() => setTooltipComponent(null)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Extra space for scroll */}
        <div className="h-20"></div>
      </div>
    </div>
  );
} 