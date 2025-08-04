import React from 'react';
import { motion } from 'framer-motion';
import { IPresentationSlide } from '../data/presentation-outline';
import { 
  AlertTriangle, 
  Users, 
  BookOpen, 
  Shield, 
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';

interface IAdoptionChallengesSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

interface IChallenge {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  strategy: string;
}

const challenges: IChallenge[] = [
  {
    id: 1,
    title: "Cultura e Mudança",
    description: "Resistência e Engajamento",
    icon: AlertTriangle,
    color: "bg-red-500/20",
    strategy: "• Resistência à mudança de processos e cultura, cada time acha que seu jeito de fazer é o melhor, medo de ser substituído ou perder autonomia - demonstrar que devs ganham autonomia\n• Usuários não entenderem o propósito da plataforma, coisas podem não funcionar como esperado - exemplo: devs selecionando produto/sistema errado, resultando em tags indevidas e custos atribuídos à área errada\n• Devs e ops veem problemas e procuram contornar e resolver de outra forma, nem todos os problemas chegam ao time de plataforma - é preciso engajar os usuários na construção da plataforma"
  },
  {
    id: 2,
    title: "Capacitação",
    description: "Treinamento e Onboarding",
    icon: BookOpen,
    color: "bg-orange-500/20",
    strategy: "• Curva de aprendizado inicial e treinamento - criação de ferramentas de onboarding, documentação rica, sistema de mentoria\n• Dificuldade de comunicar com grande número de pessoas - necessidade de estar próximo dos times ouvindo as dores"
  },
  {
    id: 3,
    title: "Suporte Executivo",
    description: "Alinhamento e ROI",
    icon: Shield,
    color: "bg-blue-500/20",
    strategy: "• Necessidade de apoio executivo e alinhamento estratégico - apresentar ROI, demonstrar redução de custos\n• Criar roadmap executivo com milestones, envolver sponsors executivos\n• Necessidade de time-to-market veloz dos produtos dos times versus adequação à plataforma\n• Ter métricas que mostrem o quanto a plataforma gerou de impacto"
  },
  {
    id: 4,
    title: "Processo Evolutivo",
    description: "Expectativas e Melhoria Contínua",
    icon: TrendingUp,
    color: "bg-indigo-500/20",
    strategy: "• Comunicar expectativas realistas sobre o início, construir processo evolutivo junto com times\n• Explicar que é processo evolutivo feito junto, manter iteração contínua baseada em feedback real\n• Atender múltiplos times com diferentes stacks e formas de trabalho\n• Equilibrar funcionalidades de impacto com débitos técnicos, manter suporte enquanto desenvolve roadmap - pressão por novas funcionalidades pode gerar estresse no time e comprometer frequência de entregas\n• Lidar com legado da própria plataforma - migrar templates, actions, tags, catálogo - planejar como lidar com forma antiga e nova enquanto times se adequam"
  }
];

const ChallengeCard = ({ challenge }: { challenge: IChallenge }) => {
  const IconComponent = challenge.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: challenge.id * 0.1 }}
      className={`${challenge.color} rounded-lg border border-white/20 p-4`}
    >
      <div className="flex items-start space-x-3 mb-3">
        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <IconComponent size={20} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white">{challenge.title}</h3>
          <p className="text-xs text-gray-300">{challenge.description}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Zap size={12} className="text-blue-400" />
            <span className="text-xs font-semibold text-blue-400">Desafios:</span>
          </div>
          <div className="text-xs text-gray-300 space-y-1">
            {challenge.strategy.split('\n').map((bullet, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                <span>{bullet.replace('• ', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AdoptionChallengesSlide({ slide, isActive }: IAdoptionChallengesSlideProps) {
  if (!isActive) return null;

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white custom-scrollbar" 
      style={{ 
        overflowY: 'auto', 
        height: '100vh', 
        overflowX: 'hidden',
        minHeight: '120vh'
      }}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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

      <div className="relative max-w-7xl mx-auto p-6 py-8">
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

        </motion.div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>

        {/* Success Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-6 bg-white/5 rounded-lg border border-white/10 mb-8"
        >
          <h3 className="text-lg font-semibold text-white mb-4 text-center">Fatores de Sucesso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users size={24} className="text-green-400" />
              </div>
              <h4 className="font-semibold text-green-400 mb-1">Envolvimento das Equipes</h4>
              <p className="text-gray-400 text-xs">Participação ativa no design e implementação</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target size={24} className="text-blue-400" />
              </div>
              <h4 className="font-semibold text-blue-400 mb-1">Objetivos Claros</h4>
              <p className="text-gray-400 text-xs">Metas específicas e mensuráveis</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp size={24} className="text-purple-400" />
              </div>
              <h4 className="font-semibold text-purple-400 mb-1">Iteração Contínua</h4>
              <p className="text-gray-400 text-xs">Melhoria constante baseada em feedback</p>
            </div>
          </div>
        </motion.div>

        {/* Extra space to ensure scroll */}
        <div className="h-32"></div>
      </div>
    </div>
  );
} 