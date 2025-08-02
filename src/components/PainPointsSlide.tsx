'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  AlertTriangle,
  Users,
  TrendingDown,
  BarChart3,
  Target,
  UserPlus,
  Settings
} from 'lucide-react';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IPainPointsSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

interface IPainPoint {
  id: number;
  title: string;
  description: string;
  metric: string;
  impact: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  category: 'time' | 'process' | 'visibility' | 'onboarding';
}

const painPoints: IPainPoint[] = [
  {
    id: 1,
    title: "Tempo Perdido em Tarefas Não-Código",
    description: "Desenvolvedores gastam uma parte significativa do tempo em configuração, deploy e infraestrutura ao invés de código de negócio",
    metric: "Tempo",
    impact: "significativo perdido",
    icon: Clock,
    color: "bg-red-600",
    category: 'time'
  },
  {
    id: 2,
    title: "Processos Burocráticos",
    description: "Aprovações manuais, tickets, e processos sequenciais que atrasam entregas e frustram desenvolvedores",
    metric: "Processos",
    impact: "manuais e lentos",
    icon: AlertTriangle,
    color: "bg-orange-600",
    category: 'process'
  },
  {
    id: 3,
    title: "Inconsistência Entre Projetos",
    description: "Cada time tem sua própria forma de fazer, gerando silos de conhecimento e baixa padronização",
    metric: "Baixa",
    impact: "padronização",
    icon: Users,
    color: "bg-yellow-600",
    category: 'process'
  },
  {
    id: 4,
    title: "Falta de Visibilidade",
    description: "Métricas limitadas sobre custos, performance e saúde dos sistemas. Decisões muitas vezes baseadas em intuição",
    metric: "Visibilidade",
    impact: "limitada",
    icon: BarChart3,
    color: "bg-blue-600",
    category: 'visibility'
  },
  {
    id: 5,
    title: "Onboarding Lento",
    description: "Novos desenvolvedores levam tempo considerável para configurar ambiente e entender processos da empresa",
    metric: "Onboarding",
    impact: "demorado",
    icon: UserPlus,
    color: "bg-purple-600",
    category: 'onboarding'
  }
];

const categories = [
  { id: 'time', name: 'Tempo', icon: Clock, color: 'bg-red-500' },
  { id: 'process', name: 'Processos', icon: Settings, color: 'bg-orange-500' },
  { id: 'visibility', name: 'Visibilidade', icon: BarChart3, color: 'bg-blue-500' },
  { id: 'onboarding', name: 'Onboarding', icon: UserPlus, color: 'bg-purple-500' }
];

// Diagrama de impacto visual
const ImpactDiagram = ({ selectedCategory }: { selectedCategory: string }) => {
  const filteredPoints = selectedCategory === 'all' 
    ? painPoints 
    : painPoints.filter(point => point.category === selectedCategory);

  return (
    <div className="flex flex-col items-center space-y-6 p-2">
      {/* Métricas Principais */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full mb-3">
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-sm font-bold text-red-400">Tempo</div>
          <div className="text-[10px] text-gray-300">Significativo perdido</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-sm font-bold text-orange-400">Processos</div>
          <div className="text-[10px] text-gray-300">Manuais e lentos</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-sm font-bold text-blue-400">Visibilidade</div>
          <div className="text-[10px] text-gray-300">Limitada</div>
        </div>
        <div className="bg-white/10 rounded-lg p-3 text-center">
          <div className="text-sm font-bold text-purple-400">Onboarding</div>
          <div className="text-[10px] text-gray-300">Demorado</div>
        </div>
      </div>

      {/* Fluxo de Problemas */}
      <div className="flex items-center justify-center space-x-6 mb-4">
                 <div className="flex flex-col items-center space-y-2">
           <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
             <Clock size={32} className="text-white" />
           </div>
           <div className="text-center">
             <div className="text-sm font-semibold text-white">Tempo Perdido</div>
             <div className="text-[10px] text-white/70">Significativo</div>
           </div>
         </div>
        
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-orange-500"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
            <AlertTriangle size={32} className="text-white" />
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-white">Frustração</div>
            <div className="text-[10px] text-white/70">Devs</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        
        <div className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
            <TrendingDown size={32} className="text-white" />
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-white">Velocidade</div>
            <div className="text-[10px] text-white/70">Reduzida</div>
          </div>
        </div>
      </div>

      {/* Problemas Específicos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {filteredPoints.map((point) => (
                    <div key={point.id} className="bg-white/5 rounded-lg p-3 border border-white/10 flex flex-col h-full">
            <div className="flex items-start space-x-3 mb-3 flex-1">
              <div className={`w-10 h-10 ${point.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                {(() => {
                  const IconComponent = point.icon;
                  return <IconComponent size={20} className="text-white" />;
                })()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white mb-2">{point.title}</div>
                <div className="text-sm text-gray-300 leading-relaxed">{point.description}</div>
              </div>
            </div>
                         <div className="flex items-end justify-between mt-auto">
                <div className="text-[12px] font-bold text-red-400">{point.metric}</div>
                <div className="text-[12px] text-gray-200">{point.impact}</div>
               </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PainPointsSlide({ slide, isActive }: IPainPointsSlideProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!isActive) return null;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white">
      <div className="max-w-6xl w-full py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
            {slide.title}
          </h1>
          <div className="text-lg text-gray-300 mb-6">
            {slide.subtitle}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Categorias de Problemas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === 'all' 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/10 text-white/70 hover:bg-white/15'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Target size={20} />
                  <span>Todos</span>
                </div>
              </button>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    selectedCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white/10 text-white/70 hover:bg-white/15'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {(() => {
                      const IconComponent = category.icon;
                      return <IconComponent size={20} />;
                    })()}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Conteúdo Principal */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-6 max-h-[70vh] overflow-y-auto custom-scrollbar"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                                  <h4 className="text-lg font-semibold mb-3 text-red-300">Problemas Identificados</h4>
                  <div className="space-y-3">
                  {painPoints
                    .filter(point => selectedCategory === 'all' || point.category === selectedCategory)
                    .map((point, index) => (
                      <motion.div
                        key={point.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className={`w-8 h-8 ${point.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          {(() => {
                            const IconComponent = point.icon;
                            return <IconComponent size={16} className="text-white" />;
                          })()}
                        </div>
                                                 <div className="flex-1 min-w-0">
                           <div className="font-semibold text-white mb-1">{point.title}</div>
                           <div className="text-sm text-gray-300 mb-2 leading-relaxed">{point.description}</div>
                           <div className="flex items-center justify-between">
                                                           <div className="text-[10px] font-bold text-red-400">{point.metric}</div>
                              <div className="text-[7px] text-gray-400">{point.impact}</div>
                           </div>
                         </div>
                      </motion.div>
                    ))}
                </div>
              </div>

                              <div>
                  <h4 className="text-lg font-semibold mb-3 text-orange-300">Impacto Visual</h4>
                  <div className="bg-white/5 rounded-lg p-2 border border-white/10">
                  <ImpactDiagram selectedCategory={selectedCategory} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 