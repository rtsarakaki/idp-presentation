'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IIntroSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

export default function IntroSlide({ slide, isActive }: IIntroSlideProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Pequeno delay para garantir que o componente está montado
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Textual */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {slide.title}
              </h1>
              <h2 className="text-3xl text-gray-300 font-light">
                {slide.subtitle}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              {slide.content.map((item, index) => {
                const colors = ['bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-yellow-400'];
                return (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    <div className={`w-3 h-3 ${colors[index]} rounded-full`}></div>
                    <p className="text-xl">{item}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Sistema Solar IDP - Visão Isométrica */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
                              <div className="relative w-full h-[600px] lg:h-[700px]">
                                  {/* Fundo do sistema solar - transparente */}
                    <div className="absolute inset-0">
                
                {/* Sol Central - IDP */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-2xl flex items-center justify-center animate-pulse">
                  <div className="text-white text-xl font-bold">IDP</div>
                </div>

                {/* Órbita 1 - Desenvolvedores */}
                <motion.div
                  animate={shouldAnimate ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                >
                  <motion.div 
                    animate={shouldAnimate ? { rotate: -360 } : { rotate: 0 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                    style={{ 
                      background: "radial-gradient(circle at 25% 25%, #93C5FD, #60A5FA, #3B82F6, #1D4ED8)",
                      boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.3), 0 6px 12px rgba(0,0,0,0.4), 0 0 20px rgba(96,165,250,0.3)",
                      transform: "rotateX(20deg) rotateY(20deg)"
                    }}
                  >
                    Dev
                  </motion.div>
                </motion.div>

                {/* Órbita 2 - DevOps */}
                <motion.div
                  animate={shouldAnimate ? { rotate: -360 } : { rotate: 0 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
                >
                  <motion.div 
                    animate={shouldAnimate ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                    style={{ 
                      background: "radial-gradient(circle at 25% 25%, #C4B5FD, #A78BFA, #8B5CF6, #6D28D9)",
                      boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.3), 0 6px 12px rgba(0,0,0,0.4), 0 0 20px rgba(139,92,246,0.3)",
                      transform: "rotateX(20deg) rotateY(20deg)"
                    }}
                  >
                    Ops
                  </motion.div>
                </motion.div>

                {/* Órbita 3 - SRE */}
                <motion.div
                  animate={shouldAnimate ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128"
                >
                  <motion.div 
                    animate={shouldAnimate ? { rotate: -360 } : { rotate: 0 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                    style={{ 
                      background: "radial-gradient(circle at 25% 25%, #6EE7B7, #34D399, #10B981, #059669)",
                      boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.3), 0 6px 12px rgba(0,0,0,0.4), 0 0 20px rgba(16,185,129,0.3)",
                      transform: "rotateX(20deg) rotateY(20deg)"
                    }}
                  >
                    SRE
                  </motion.div>
                </motion.div>

                {/* Órbita 4 - Arquitetura */}
                <motion.div
                  animate={shouldAnimate ? { rotate: -360 } : { rotate: 0 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-160 h-160"
                >
                  <motion.div 
                    animate={shouldAnimate ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                    style={{ 
                      background: "radial-gradient(circle at 25% 25%, #FCD34D, #FBBF24, #F59E0B, #D97706)",
                      boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.4), inset 3px 3px 6px rgba(255,255,255,0.3), 0 6px 12px rgba(0,0,0,0.4), 0 0 20px rgba(245,158,11,0.3)",
                      transform: "rotateX(20deg) rotateY(20deg)"
                    }}
                  >
                    Sec
                  </motion.div>
                </motion.div>



                {/* Partículas de poeira cósmica */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(50)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slide Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center pt-8"
        >
          <div className="text-sm text-gray-400">
            {slide.duration} min • {slide.type}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 