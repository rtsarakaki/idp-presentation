'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Shield,
  Eye,
  Settings,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Target,
  Lock,
  TrendingUp,
  Activity,
  Layers
} from 'lucide-react';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IIDPPrinciplesSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

interface IPrinciple {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  gradient: string;
  impact: string;
  examples: string[];
  objectives: string[];
  category: 'platform' | 'experience' | 'engineering' | 'governance';
}

const principles: IPrinciple[] = [
  {
    id: 1,
    title: "Self-Service",
    description: "Capacita desenvolvedores a executar tarefas críticas de infraestrutura e operações de forma independente, eliminando a necessidade de solicitar recursos através de tickets ou dependências de outros times. Permite que equipes provisionem ambientes, criem serviços e façam deploys sem intervenção manual, acelerando significativamente o ciclo de desenvolvimento.",
    icon: Users,
    color: "bg-blue-600",
    gradient: "from-blue-500 to-cyan-500",
    impact: "Reduz gargalos",
    examples: ["Criar novo serviço", "Provisionar infraestrutura", "Fazer deploy"],
    objectives: ["Acelerar ciclo de entrega", "Eliminar dependências", "Empoderar devs"],
    category: 'platform'
  },
  {
    id: 2,
    title: "Padronização",
    description: "Estabelece um conjunto abrangente de templates, pipelines e boas práticas que são automaticamente incorporados em todos os novos projetos. Garante que todos os times sigam as mesmas convenções, utilizem as mesmas ferramentas e implementem as mesmas práticas de qualidade, eliminando inconsistências e reduzindo significativamente a curva de aprendizado para novos membros da equipe.",
    icon: Settings,
    color: "bg-green-600",
    gradient: "from-green-500 to-emerald-500",
    impact: "Consistência total",
    examples: ["Scaffolds para microserviços", "Logging e tracing prontos", "CI/CD padronizado"],
    objectives: ["Evitar duplicação", "Prevenir erros comuns", "Garantir qualidade"],
    category: 'experience'
  },
  {
    id: 3,
    title: "Abstração de Complexidade",
    description: "Cria uma camada de abstração que oculta completamente a complexidade técnica da infraestrutura subjacente, permitindo que desenvolvedores interajam com sistemas complexos através de interfaces simples e intuitivas. Transforma operações complexas como configuração de Kubernetes, gerenciamento de containers e orquestração de serviços em ações simples como clicar em um botão ou executar um comando.",
    icon: Zap,
    color: "bg-yellow-600",
    gradient: "from-yellow-500 to-orange-500",
    impact: "Foco no produto",
    examples: ["Botão para deploy", "Sem YAMLs complexos", "Sem Helm charts"],
    objectives: ["Simplificar processos", "Reduzir curva de aprendizado", "Aumentar produtividade"],
    category: 'engineering'
  },
  {
    id: 4,
    title: "Observabilidade Integrada",
    description: "Consolida todas as informações de monitoramento, logs, métricas e alertas em uma interface unificada e contextualizada, permitindo que desenvolvedores e operadores tenham visibilidade completa sobre o comportamento e performance de seus sistemas. Integra dados de múltiplas fontes para fornecer insights acionáveis e facilitar a identificação e resolução rápida de problemas.",
    icon: Eye,
    color: "bg-purple-600",
    gradient: "from-purple-500 to-pink-500",
    impact: "Visibilidade completa",
    examples: ["Dashboard por serviço", "Tempo de resposta", "Taxa de erro"],
    objectives: ["Facilitar troubleshooting", "Garantir confiabilidade", "Monitorar performance"],
    category: 'governance'
  },
  {
    id: 5,
    title: "Segurança e Governança",
    description: "Implementa automaticamente políticas de segurança, controle de acesso, auditoria e conformidade em todos os aspectos da plataforma, garantindo que as melhores práticas de segurança sejam aplicadas de forma transparente sem impactar a velocidade de desenvolvimento. Cria uma camada de proteção que evolui automaticamente com as mudanças na infraestrutura e aplicações.",
    icon: Shield,
    color: "bg-red-600",
    gradient: "from-red-500 to-rose-500",
    impact: "Segurança automática",
    examples: ["Roles automáticas", "Segregação de ambientes", "Validação de pipelines"],
    objectives: ["Garantir segurança", "Manter compliance", "Sem travar entrega"],
    category: 'governance'
  },
  {
    id: 6,
    title: "Integração Corporativa",
    description: "Estabelece conexões nativas e transparentes com todas as ferramentas e sistemas corporativos utilizados pelos times de desenvolvimento, eliminando a necessidade de alternar entre múltiplas interfaces e reduzindo significativamente o overhead operacional. Centraliza o fluxo de trabalho através de integrações bidirecionais que mantêm sincronização automática entre sistemas.",
    icon: Layers,
    color: "bg-indigo-600",
    gradient: "from-indigo-500 to-blue-500",
    impact: "Produtividade máxima",
    examples: ["Criar PRs", "Abrir tickets", "Ver alertas"],
    objectives: ["Menos context-switching", "Mais produtividade", "Integração fluida"],
    category: 'platform'
  },
  {
    id: 7,
    title: "Feedback Contínuo",
    description: "Fornece retorno imediato e contextualizado sobre todas as mudanças, builds, deploys e falhas que ocorrem no ciclo de desenvolvimento, permitindo que times identifiquem e resolvam problemas rapidamente antes que impactem usuários finais. Cria um loop de feedback que melhora continuamente a qualidade e confiabilidade dos sistemas.",
    icon: Activity,
    color: "bg-teal-600",
    gradient: "from-teal-500 to-cyan-500",
    impact: "Resolução rápida",
    examples: ["Falha de deploy notificada", "Link direto para logs", "Alertas imediatos"],
    objectives: ["Reduzir tempo de resolução", "Feedback imediato", "Melhorar qualidade"],
    category: 'experience'
  }
];

const categories = [
  { id: 'platform', name: 'Plataforma', icon: Layers, color: 'bg-blue-500' },
  { id: 'experience', name: 'Experiência', icon: Users, color: 'bg-green-500' },
  { id: 'engineering', name: 'Engenharia', icon: Zap, color: 'bg-purple-500' },
  { id: 'governance', name: 'Governança', icon: Shield, color: 'bg-red-500' }
];

// Componente de Princípio Interativo
const InteractivePrinciple = ({ principle, isActive, index }: { principle: IPrinciple; isActive: boolean; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1 : 0.95,
        rotateY: isActive ? 0 : -5
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative group cursor-pointer transform transition-all duration-500 ${
        isActive ? 'z-20' : 'z-10'
      }`}
      onClick={() => setShowExamples(!showExamples)}
    >
      {/* Card Principal */}
      <div className={`
        relative overflow-hidden rounded-xl p-3 border-2 transition-all duration-500
        ${isActive 
          ? 'border-white/30 bg-white/15 shadow-2xl shadow-white/10' 
          : 'border-white/10 bg-white/5'
        }
        ${isHovered ? 'scale-105' : 'scale-100'}
      `}>
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-10 transition-opacity duration-500 ${
          isActive ? 'opacity-25' : 'opacity-10'
        }`} />
        
        {/* Content */}
        <div className="relative">
          <div className="flex items-center justify-center mb-2">
            <motion.div
              animate={{ 
                rotate: isActive ? 360 : 0,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.6 }}
              className={`w-8 h-8 ${principle.color} rounded-full flex items-center justify-center mr-3`}
            >
              {(() => {
                const IconComponent = principle.icon;
                return <IconComponent size={16} className="text-white" />;
              })()}
            </motion.div>
            <h3 className={`text-lg font-bold transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-gray-300'
            }`}>
              {principle.title}
            </h3>
          </div>
          <p className={`text-sm leading-relaxed mb-2 transition-colors duration-300 text-center ${
            isActive ? 'text-gray-200' : 'text-gray-400'
          }`}>
            {principle.description}
          </p>
          
          {/* Impact Badge */}
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
            isActive 
              ? 'bg-white/20 text-white border border-white/30' 
              : 'bg-white/10 text-gray-400'
          }`}>
            {principle.impact}
          </div>

          {/* Objectives Chips */}
          <div className="flex flex-wrap gap-1 mt-2 justify-center">
            {principle.objectives.map((objective, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/15 text-white/90 border border-white/20' 
                    : 'bg-white/5 text-gray-500'
                }`}
              >
                {objective}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sparkle Effect */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles size={24} className="text-yellow-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Examples Popup */}
      <AnimatePresence>
        {showExamples && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute top-full left-0 right-0 mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 z-30"
          >
            <h4 className="text-sm font-semibold text-white mb-3">Exemplos Práticos:</h4>
            <div className="space-y-2">
              {principle.examples.map((example, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                  <span className="text-xs text-gray-200">{example}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};



export default function IDPPrinciplesSlide({ slide, isActive }: IIDPPrinciplesSlideProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [countdown, setCountdown] = useState(15);

  // Auto-play functionality with countdown
  useEffect(() => {
    if (!isActive) return;

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setActiveIndex((current) => (current + 1) % principles.length);
          return 15; // Reset to 15 seconds
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
          className="text-center mb-6"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
            {slide.title}
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            {slide.subtitle}
          </p>


        </motion.div>

        {/* Main Content */}
        <div className="space-y-6">


          {/* Carousel Navigation */}
          <div className="flex justify-center space-x-2 mb-4">
            {principles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setCountdown(15); // Reset countdown when manually clicked
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* All Principles Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-lg p-3 border transition-all duration-300 cursor-pointer ${
                  index === activeIndex 
                    ? 'border-white/40 bg-white/15 scale-105' 
                    : 'border-white/10 hover:bg-white/10'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-6 h-6 ${principle.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      {(() => {
                        const IconComponent = principle.icon;
                        return <IconComponent size={14} className="text-white" />;
                      })()}
                    </div>
                  <h3 className="text-sm font-semibold text-white">{principle.title}</h3>
                </div>
                <p className="text-xs text-gray-300 line-clamp-2">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Featured Principle Details */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left: Principle Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${principles[activeIndex].color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    {(() => {
                      const IconComponent = principles[activeIndex].icon;
                      return <IconComponent size={24} className="text-white" />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{principles[activeIndex].title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{principles[activeIndex].description}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Impacto Principal</h3>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30`}>
                    {principles[activeIndex].impact}
                  </div>
                </div>

                {/* Objectives */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Objetivos</h3>
                  <div className="flex flex-wrap gap-2">
                    {principles[activeIndex].objectives.map((objective, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-white/15 text-white/90 border border-white/20"
                      >
                        {objective}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Examples and Benefits */}
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Exemplos Práticos</h3>
                  <ul className="space-y-2">
                    {principles[activeIndex].examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Benefícios</h3>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {activeIndex === 0 && "O Self-Service elimina completamente os gargalos tradicionais de desenvolvimento, reduzindo o tempo de provisionamento de infraestrutura de dias para minutos. Permite que times de desenvolvimento sejam verdadeiramente autônomos, acelerando o ciclo de entrega em até 70% e eliminando a frustração causada por dependências externas. Esta autonomia não apenas melhora a velocidade, mas também aumenta significativamente a satisfação e retenção de desenvolvedores talentosos."}
                      {activeIndex === 1 && "A Padronização garante que todos os projetos sigam as mesmas convenções e utilizem as mesmas ferramentas validadas, reduzindo erros comuns em até 60% e eliminando completamente a necessidade de reinventar soluções já testadas. Esta consistência acelera o onboarding de novos desenvolvedores em até 50% e garante que as melhores práticas sejam aplicadas automaticamente em todos os projetos, independentemente da experiência individual dos membros da equipe."}
                      {activeIndex === 2 && "A Abstração de Complexidade permite que desenvolvedores se concentrem exclusivamente no código de negócio e na experiência do usuário, sem se preocupar com detalhes técnicos de infraestrutura. Esta simplificação reduz a curva de aprendizado em até 80% e aumenta a produtividade individual em até 40%, resultando em maior satisfação no trabalho e menor turnover de desenvolvedores. Times podem entregar valor mais rapidamente sem precisar se tornar especialistas em múltiplas tecnologias de infraestrutura."}
                      {activeIndex === 3 && "A Observabilidade Integrada fornece visibilidade completa e contextualizada sobre o comportamento de todos os sistemas, permitindo que problemas sejam identificados e resolvidos antes que impactem usuários finais. Esta visibilidade reduz o tempo médio de resolução de incidentes em até 75% e melhora a confiabilidade geral dos sistemas em até 90%. Equipes podem tomar decisões baseadas em dados reais ao invés de suposições, resultando em melhor performance e experiência do usuário."}
                      {activeIndex === 4 && "A Segurança e Governança implementa automaticamente as melhores práticas de segurança em todos os aspectos da plataforma, garantindo compliance sem criar fricção para os times de desenvolvimento. Esta abordagem elimina completamente os trade-offs tradicionais entre velocidade e segurança, permitindo que aplicações sejam desenvolvidas e deployadas rapidamente enquanto mantêm os mais altos padrões de segurança. A implementação automática reduz riscos de segurança em até 85% sem impactar a produtividade dos times."}
                      {activeIndex === 5 && "A Integração Corporativa elimina completamente a necessidade de alternar entre múltiplas ferramentas e interfaces, centralizando todo o fluxo de trabalho em uma única plataforma coesa. Esta integração reduz o overhead operacional em até 60% e elimina erros de sincronização entre sistemas. Desenvolvedores podem focar em criar valor ao invés de gerenciar múltiplas ferramentas, resultando em maior produtividade e menor frustração no dia a dia."}
                      {activeIndex === 6 && "O Feedback Contínuo fornece retorno imediato e contextualizado sobre todas as mudanças no ciclo de desenvolvimento, permitindo que problemas sejam identificados e resolvidos em tempo real. Esta capacidade reduz o tempo médio de resolução de problemas em até 80% e melhora significativamente a qualidade geral dos sistemas através de um loop de feedback contínuo. Equipes podem iterar rapidamente e com confiança, sabendo que receberão feedback imediato sobre o impacto de suas mudanças."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer with Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex items-center space-x-3">
            <div className="text-sm text-gray-400">Próximo em:</div>
            <div className="text-lg font-semibold text-white">
              {countdown}s
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 