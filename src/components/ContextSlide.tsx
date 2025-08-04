'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Database,
  Globe,
  Code,
  Cloud,
  Shield,
  Sparkles,
  Server,
  Network,
  Monitor,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IContextSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

interface ITimelineEra {
  id: number;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
  interaction: string;
  visual: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

const timelineEras: ITimelineEra[] = [
  {
    id: 1,
    period: "1960-1970",
    title: "Programadores e Operadores",
    subtitle: "Era dos Mainframes",
    description: "No início da computação, os papéis eram centralizados. Um pequeno grupo de programadores desenvolvia software diretamente em mainframes. As operações eram responsabilidade de operadores de sistemas. Desenvolvimento era lento e custoso.",
    roles: ["Programador: codificava e testava no mainframe", "Operador: controlava execução, backups, e reinício dos sistemas", "Analista: especificava requisitos em papel"],
    interaction: "Comunicação mínima entre grupos, processos sequenciais",
    visual: "Fluxo linear: Programador → Operador → Execução",
    icon: Users,
    color: "bg-gray-600"
  },
            {
            id: 2,
            period: "1980-1990",
            title: "DBAs e Administradores de Sistemas",
            subtitle: "Era Corporativa - Transição Mainframe → Cliente-Servidor",
            description: "Transição crucial de mainframes para arquiteturas cliente-servidor. Com o crescimento das aplicações corporativas e bancos de dados relacionais, surgem os DBAs e os administradores de sistemas. As aplicações passam a depender mais da infraestrutura distribuída. Desenvolvimento ainda é sequencial.",
            roles: ["Desenvolvedor: cria o sistema cliente-servidor", "DBA: modela, implementa e mantém o banco de dados relacional", "Administrador de Sistemas: cuida de servidores, implantações e infraestrutura", "Analista de Sistemas: especifica requisitos", "Arquiteto: define arquitetura cliente-servidor"],
            interaction: "Comunicação intensifica entre devs e DBAs, processos ainda sequenciais, transição de mainframe para distribuição",
            visual: "Diagrama de Venn: Dev ↔ DBA | Dev ↔ SysAdmin | Mainframe → Cliente-Servidor",
            icon: Database,
            color: "bg-blue-600"
          },
            {
            id: 3,
            period: "1995-2005",
            title: "A Era da Web",
            subtitle: "Dot-com Boom e Fragmentação de Infraestrutura",
            description: "Com o boom da web (dot-com boom 1995-2000) e a popularização da internet, surgem novas demandas e especializações. A infraestrutura se torna mais complexa: servidores web, load balancers, CDNs, bancos de dados distribuídos, servidores de aplicação. Surgem os servidores compartilhados onde múltiplas aplicações rodam no mesmo servidor físico, criando conflitos de recursos, dependências e isolamento. A crise dot-com (2000-2002) força otimização de custos.",
            roles: ["Web Designer: foco na experiência visual", "Dev Back-End: lógica de negócio, APIs", "Dev Front-End: JavaScript e interação com UI", "SysAdmin: infraestrutura complexa e servidores compartilhados", "DBA: bancos distribuídos e replicação", "Analista de Sistemas: especifica requisitos web"],
            interaction: "Múltiplas coordenações para entrega, silos de conhecimento, infraestrutura complexa e distribuída, gerenciamento de servidores compartilhados",
            visual: "Diagrama de silos isolados por plataforma com infraestrutura complexa e servidores compartilhados",
            icon: Globe,
            color: "bg-green-600"
          },
            {
            id: 4,
            period: "2005-2015",
            title: "DevOps, Cloud e Mobile",
            subtitle: "Automação, Escalabilidade e Revolução Mobile",
            description: "Com o DevOps (termo cunhado em 2009) e a adoção da cloud (AWS 2006, Azure 2010, GCP 2008), há um esforço para unir desenvolvimento e operações. A revolução mobile (iOS 2007, Android 2008) cria novas demandas. Automatização, integração contínua, containers (Docker 2013) e cultura colaborativa ganham força.",
            roles: ["DevOps Engineer: ponte entre dev e infra", "Cloud Engineer: gerencia recursos cloud", "Mobile Developer: apps nativos iOS/Android", "Desenvolvedores Full Stack", "SRE: confiabilidade de sistemas"],
            interaction: "Compartilhamento de responsabilidades, automação de processos, desenvolvimento mobile",
            visual: "Setas bidirecionais: Dev ↔ DevOps ↔ Cloud + Mobile",
            icon: Code,
            color: "bg-purple-600"
          },
  {
    id: 5,
    period: "2015-2020",
    title: "Microserviços e SRE",
    subtitle: "Era da Confiabilidade e Escala",
    description: "Microserviços se popularizam, aumentando a complexidade operacional. SRE (Site Reliability Engineer) se torna essencial. Kubernetes e orquestração de containers dominam. Equipes lutam com observabilidade.",
    roles: ["SRE: monitora, automatiza, responde a incidentes", "Platform Engineer: cuida de infraestrutura como código", "DevOps: automação de CI/CD", "Desenvolvedores: mais foco em código"],
    interaction: "SRE no centro conectado a Devs e Infra, observabilidade crítica",
    visual: "SRE conectando Devs e Infra com métricas",
    icon: Cloud,
    color: "bg-indigo-600"
  },
  {
    id: 6,
    period: "2020-2025",
    title: "Internal Developer Platforms",
    subtitle: "Era do Self-Service e Produtividade",
    description: "Para escalar, acelerar entregas e reduzir a dependência de especialistas, as IDPs se popularizam. Empresas como Spotify, Netflix, Uber já usam IDPs há anos. Developer Experience se torna prioridade.",
    roles: ["Platform Engineer: cria e mantém a IDP", "DevOps: automação e ferramentas", "Desenvolvedores: consomem serviços self-service", "SRE: confiabilidade da plataforma"],
    interaction: "Developer Portal central conectando recursos, self-service",
    visual: "Developer Portal ao centro ligando recursos",
    icon: Shield,
    color: "bg-emerald-600"
  },
            {
            id: 7,
            period: "2025+",
            title: "Plataformas Cognitivas e IA",
            subtitle: "Era da Inteligência (Projeção Futura)",
            description: "As IDPs se tornam mais inteligentes com IA. Recomendam práticas, corrigem erros automaticamente, otimizam performance e preveem problemas. A IA ajuda no dimensionamento da infraestrutura, otimizando custos e recursos. Copilot para infraestrutura se torna realidade. Esta é uma projeção baseada nas tendências atuais de IA e automação.",
            roles: ["AI Engineer: cuida do aprendizado da plataforma", "Platform Engineer: integra IA na IDP", "Dev: focado em valor de negócio", "SRE: monitora IA e automação"],
            interaction: "IA integrada na IDP, automação inteligente, otimização de custos e dimensionamento de infraestrutura",
            visual: "IA integrada na IDP com otimização de recursos",
            icon: Sparkles,
            color: "bg-pink-600"
          }
];

// Diagram Components for each era
const EraDiagram = ({ era }: { era: ITimelineEra }) => {
  switch (era.id) {
    case 1: // 1960-1970: Programadores e Operadores
      return (
        <div className="flex items-center justify-center space-x-8 p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Users size={32} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Programador</div>
              <div className="text-sm text-white/80">Codifica e testa</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="text-sm text-white/70">Fluxo sequencial</div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <Server size={32} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Operador</div>
              <div className="text-sm text-white/80">Controla execução</div>
            </div>
          </div>
        </div>
      );

    case 2: // 1980-1990: DBAs e Administradores de Rede
      return (
        <div className="flex flex-col items-center space-y-6 p-6">
          {/* Transição Mainframe → Cliente-Servidor */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                <Server size={24} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-white">Mainframe</div>
                <div className="text-xs text-white/70">Centralizado</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-gray-400 to-blue-500"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Network size={24} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-white">Cliente-Servidor</div>
                <div className="text-xs text-white/70">Distribuído</div>
              </div>
            </div>
          </div>
          
          {/* Papéis na nova arquitetura */}
          <div className="flex items-center justify-center space-x-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Code size={32} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-white">Desenvolvedor</div>
                <div className="text-sm text-white/80">Cliente-Servidor</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-sm text-white/70">Integração</div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                <Database size={32} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-white">DBA</div>
                <div className="text-sm text-white/80">BD Relacional</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-sm text-white/70">Infraestrutura</div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <Server size={32} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-white">SysAdmin</div>
                <div className="text-sm text-white/80">Servidores & Deploy</div>
              </div>
            </div>
          </div>
        </div>
      );

                case 3: // 1995-2005: A Era da Web
              return (
                <div className="flex flex-col items-center space-y-6 p-6">
                  {/* Dot-com Boom */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center relative">
                        <Globe size={28} className="text-white" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">!</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Dot-com Boom</div>
                        <div className="text-xs text-white/70">1995-2000</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Crise Dot-com</div>
                        <div className="text-xs text-white/70">2000-2002</div>
                        <div className="text-xs text-white/70">Otimização</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Servidores Compartilhados */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center relative">
                        <Server size={28} className="text-white" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">3</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Servidor Compartilhado</div>
                        <div className="text-xs text-white/70">App1 + App2 + App3</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Problemas</div>
                        <div className="text-xs text-white/70">Conflitos de recursos</div>
                        <div className="text-xs text-white/70">Dependências</div>
                        <div className="text-xs text-white/70">Isolamento</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Infraestrutura Complexa */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <Server size={24} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Web Servers</div>
                        <div className="text-xs text-white/70">Apache/Nginx</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-0.5 bg-white"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Server size={24} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">App Servers</div>
                        <div className="text-xs text-white/70">Tomcat/JBoss</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-0.5 bg-white"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Database size={24} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">DB Cluster</div>
                        <div className="text-xs text-white/70">Master/Slave</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Papéis de Desenvolvimento */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                        <Monitor size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Web Designer</div>
                        <div className="text-sm text-white/80">UX/UI</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <Code size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Back-End</div>
                        <div className="text-sm text-white/80">APIs</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <Globe size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Front-End</div>
                        <div className="text-sm text-white/80">Web</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                        <Server size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">SysAdmin</div>
                        <div className="text-sm text-white/80">Servidores Compartilhados</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                        <Database size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">DBA</div>
                        <div className="text-sm text-white/80">BD Distribuído</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                        <Users size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Analista</div>
                        <div className="text-sm text-white/80">Requisitos Web</div>
                      </div>
                    </div>
                  </div>
                </div>
              );

                case 4: // 2005-2015: DevOps, Cloud e Mobile
              return (
                <div className="flex flex-col items-center space-y-6 p-6">
                  {/* Revolução Mobile */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">iOS</div>
                        <div className="text-xs text-white/70">2007</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-4 h-0.5 bg-white"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Monitor size={24} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Android</div>
                        <div className="text-xs text-white/70">2008</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* DevOps e Cloud */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <Code size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Dev</div>
                        <div className="text-sm text-white/80">Desenvolvimento</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="text-sm text-white/70">DevOps (2009)</div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                        <Zap size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">DevOps</div>
                        <div className="text-sm text-white/80">Automação</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-green-500"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="text-sm text-white/70">Cloud</div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <Cloud size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Cloud</div>
                        <div className="text-sm text-white/80">AWS/Azure/GCP</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Papéis */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                        <Monitor size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Mobile Dev</div>
                        <div className="text-sm text-white/80">iOS/Android</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                        <Server size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Cloud Engineer</div>
                        <div className="text-sm text-white/80">AWS/Azure/GCP</div>
                      </div>
                    </div>
                  </div>
                </div>
              );

    case 5: // 2015-2020: Microserviços e SRE
      return (
        <div className="flex items-center justify-center space-x-6 p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Code size={32} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Devs</div>
              <div className="text-sm text-white/80">Microserviços</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center">
              <Shield size={36} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">SRE</div>
              <div className="text-sm text-white/80">Confiabilidade</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <Server size={32} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Platform</div>
              <div className="text-sm text-white/80">Kubernetes</div>
            </div>
          </div>
        </div>
      );

    case 6: // 2020-2025: Internal Developer Platforms
      return (
        <div className="flex items-center justify-center space-x-6 p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Code size={32} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Devs</div>
              <div className="text-sm text-white/80">Self-service</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center">
              <Shield size={40} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Developer Portal</div>
              <div className="text-sm text-white/80">Spotify/Netflix</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
              <Users size={32} className="text-white" />
            </div>
            <div className="text-center">
              <div className="text-base font-semibold text-white">Platform Eng</div>
              <div className="text-sm text-white/80">Cria IDP</div>
            </div>
          </div>
        </div>
      );

                case 7: // 2025+: Plataformas Cognitivas e IA
              return (
                <div className="flex flex-col items-center space-y-6 p-6">
                  {/* Otimização de Custos */}
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center relative">
                        <Zap size={28} className="text-white" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-bold">$</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Otimização</div>
                        <div className="text-xs text-white/70">Custos & Recursos</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-white">Dimensionamento</div>
                        <div className="text-xs text-white/70">Infraestrutura</div>
                        <div className="text-xs text-white/70">Inteligente</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Papéis Principais */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <Code size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">Dev</div>
                        <div className="text-sm text-white/80">Valor de negócio</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-28 h-28 bg-pink-600 rounded-full flex items-center justify-center">
                        <Sparkles size={44} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">IA</div>
                        <div className="text-sm text-white/80">Integrada</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <Zap size={32} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-base font-semibold text-white">AI Engineer</div>
                        <div className="text-sm text-white/80">Aprendizado</div>
                      </div>
                    </div>
                  </div>
                </div>
              );

    default:
      return null;
  }
};

export default function ContextSlide({ slide, isActive }: IContextSlideProps) {
  const [currentEra, setCurrentEra] = useState(0);

  if (!isActive) return null;

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl w-full py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            {slide.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Decades Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-8 overflow-hidden">
              <button
                onClick={() => setCurrentEra(Math.max(0, currentEra - 1))}
                disabled={currentEra === 0}
                className="p-2 bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              
              {timelineEras.map((era, index) => (
                <button
                  key={era.id}
                  onClick={() => setCurrentEra(index)}
                  className="flex flex-col items-center space-y-2 min-w-max hover:scale-110 transition-all"
                >
                  <div className={`w-4 h-4 rounded-full transition-all ${
                    currentEra === index ? era.color : 'bg-white/30'
                  }`}></div>
                                      <div className="text-center">
                      <div className={`text-sm font-semibold transition-colors ${
                        currentEra === index ? 'text-white' : 'text-white/60'
                      }`}>
                        {era.period}
                      </div>
                      <div className={`text-xs transition-colors ${
                        currentEra === index ? 'text-white/80' : 'text-white/40'
                      }`}>
                        {era.title.split(' ').slice(0, 2).join(' ')}
                      </div>
                    </div>
                  {index < timelineEras.length - 1 && (
                    <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
                  )}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentEra(Math.min(timelineEras.length - 1, currentEra + 1))}
                disabled={currentEra === timelineEras.length - 1}
                className="p-2 bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* Current Era Display */}
          <motion.div
            key={currentEra}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-8 max-h-[70vh] overflow-y-auto custom-scrollbar"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 ${timelineEras[currentEra].color} rounded-full flex items-center justify-center`}>
                {(() => {
                  const IconComponent = timelineEras[currentEra].icon;
                  return <IconComponent size={32} className="text-white" />;
                })()}
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">{timelineEras[currentEra].period}</div>
                <h3 className="text-3xl font-bold mb-2">{timelineEras[currentEra].title}</h3>
                <div className="text-xl text-gray-300">{timelineEras[currentEra].subtitle}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Descrição</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {timelineEras[currentEra].description}
                </p>

                <h4 className="text-xl font-semibold mb-4 text-green-300">Papéis</h4>
                <ul className="space-y-2">
                  {timelineEras[currentEra].roles.map((role, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-300">Interação</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {timelineEras[currentEra].interaction}
                </p>

                <h4 className="text-xl font-semibold mb-4 text-orange-300">Diagrama Visual</h4>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <EraDiagram era={timelineEras[currentEra]} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 