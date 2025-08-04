'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Zap,
  Users,
  Shield,
  Eye,
  Settings,
  Star,
  Cpu,
  Database,
  Globe,
  Code
} from 'lucide-react';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IWhatIsIDPSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

interface IIDPConcept {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  category: 'platform' | 'automation' | 'experience' | 'governance';
}

const idpConcepts: IIDPConcept[] = [
  {
    id: 1,
    title: "Developer Self-Service",
    description: "Desenvolvedores conseguem criar ambientes, provisionar infraestrutura, fazer deploy e outras operações sem depender de times de operações, ganhando autonomia total no ciclo de desenvolvimento.",
    icon: Users,
    color: "bg-blue-600",
    category: 'platform'
  },
  {
    id: 2,
    title: "Golden Paths",
    description: "Fluxos 'recomendados' e prontos para uso, como criar um novo microserviço com observabilidade e deploy contínuo já configurados, eliminando a necessidade de reinventar soluções.",
    icon: Star,
    color: "bg-green-600",
    category: 'automation'
  },
  {
    id: 3,
    title: "Abstração de Complexidade",
    description: "A IDP esconde detalhes técnicos através de portais, CLIs ou APIs internas, permitindo que desenvolvedores não precisem conhecer detalhes de Terraform, Kubernetes ou outras ferramentas complexas.",
    icon: Zap,
    color: "bg-yellow-600",
    category: 'experience'
  },
  {
    id: 4,
    title: "Opinionated Defaults",
    description: "Boas práticas e configurações padrão embutidas nos templates, incluindo versionamento, logging, dependabot, alertas e outras configurações essenciais para qualidade e segurança.",
    icon: Settings,
    color: "bg-purple-600",
    category: 'governance'
  }
];

const categories = [
  { id: 'platform', name: 'Plataforma', icon: Layers, color: 'bg-blue-500' },
  { id: 'automation', name: 'Automação', icon: Zap, color: 'bg-green-500' },
  { id: 'experience', name: 'Experiência', icon: Users, color: 'bg-purple-500' },
  { id: 'governance', name: 'Governança', icon: Shield, color: 'bg-red-500' }
];

// Componente de comparação de impacto
const ImpactComparison = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Antes da IDP */}
      <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
        <h5 className="text-sm font-semibold text-red-300 mb-3 text-center">Antes da IDP</h5>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Desenvolvedores dependem de tickets para ops</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Dependência de pessoas, processos e documentação para seguirem os padrões</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Sem observabilidade: problemas só aparecem quando quebram</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Time de ops sobrecarregado com tarefas repetitivas</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Cada time usa tecnologias diferentes</span>
          </div>
        </div>
      </div>

      {/* Depois da IDP */}
      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
        <h5 className="text-sm font-semibold text-green-300 mb-3 text-center">Depois da IDP</h5>
        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Self-service: devs criam ambientes instantaneamente</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Templates com padrões aplicados automaticamente</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Baseline de observabilidade: essencial para antecipar problemas</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Time de ops focado em inovação e melhoria da plataforma</span>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-xs text-gray-300">Tecnologias padronizadas e consistentes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Diagrama visual da IDP
const IDPDiagram = ({ selectedCategory }: { selectedCategory: string }) => {
  const filteredConcepts = selectedCategory === 'all'
    ? idpConcepts
    : idpConcepts.filter(concept => concept.category === selectedCategory);

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {/* Camadas da Plataforma */}
      <div className="space-y-3 w-full">
        {/* Camada de Desenvolvedores */}
        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Users size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Desenvolvedores</div>
              <div className="text-xs text-gray-300">Self-service e automação</div>
            </div>
          </div>
        </div>

        {/* Camada da IDP */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-300/30">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Layers size={20} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Internal Developer Platform</div>
              <div className="text-xs text-gray-300">Orquestração e padronização</div>
            </div>
          </div>
          
          {/* Componentes da IDP */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/10 rounded p-2 text-center">
              <div className="text-xs font-semibold text-blue-300">Automação</div>
            </div>
            <div className="bg-white/10 rounded p-2 text-center">
              <div className="text-xs font-semibold text-purple-300">Governança</div>
            </div>
            <div className="bg-white/10 rounded p-2 text-center">
              <div className="text-xs font-semibold text-green-300">Self-Service</div>
            </div>
            <div className="bg-white/10 rounded p-2 text-center">
              <div className="text-xs font-semibold text-red-300">Observabilidade</div>
            </div>
          </div>
        </div>

        {/* Camada de Infraestrutura */}
        <div className="bg-white/10 rounded-lg p-3 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <Cpu size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Infraestrutura</div>
              <div className="text-xs text-gray-300">Cloud, containers, databases</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WhatIsIDPSlide({ slide, isActive }: IWhatIsIDPSlideProps) {
  const [selectedCategory] = useState('all');

  if (!isActive) return null;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-6xl w-full py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            {slide.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >

          {/* Conteúdo Principal */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-6 max-h-[75vh] overflow-y-auto custom-scrollbar"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                {/* Definição da IDP */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-blue-300">Definição</h4>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Uma IDP é composta por um conjunto de ferramentas, serviços, pipelines e automações que abstraem a complexidade da infraestrutura. Ela cria um self-service layer entre os desenvolvedores e a infraestrutura, oferecendo uma experiência de desenvolvimento consistente e autônoma através de automações, templates e ferramentas padronizadas.
                    </p>
                  </div>
                </div>

                {/* Arquitetura da IDP */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">Arquitetura da IDP</h4>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <IDPDiagram selectedCategory={selectedCategory} />
                  </div>
                </div>

                {/* Impacto no Fluxo */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-300">Como Impacta no Fluxo</h4>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <ImpactComparison />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-300">Conceitos da IDP</h4>
                <div className="space-y-3">
                  {idpConcepts
                    .filter(concept => selectedCategory === 'all' || concept.category === selectedCategory)
                    .map((concept, index) => (
                      <motion.div
                        key={concept.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className={`w-8 h-8 ${concept.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          {(() => {
                            const IconComponent = concept.icon;
                            return <IconComponent size={16} className="text-white" />;
                          })()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-white mb-1">{concept.title}</div>
                          <div className="text-sm text-gray-300 mb-2 leading-relaxed">{concept.description}</div>
                          <div className="flex items-center justify-between">
                            <div className="text-[10px] font-bold text-blue-400">{concept.title.split(' ')[0]}</div>
                            <div className="text-[7px] text-gray-400">{concept.category}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 