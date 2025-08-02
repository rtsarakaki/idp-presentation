'use client';

import React from 'react';
import Image from 'next/image';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IPersonalSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

export default function PersonalSlide({ slide, isActive }: IPersonalSlideProps) {
  if (!isActive) return null;

  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-y-auto custom-scrollbar">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Foto e Informações Pessoais */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                <Image
                  src="/linkedin-foto.webp"
                  alt="Ricardo Arakaki"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {slide.subtitle}
              </h2>
              <p className="text-lg text-gray-300 mt-2">
                Profissional de Tecnologia
              </p>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">
                {slide.title}
              </h1>
              
              <div className="space-y-4">
                {slide.content.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-3"></div>
                    <p className="text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Info */}
            <div className="flex justify-center lg:justify-start pt-4">
              <div className="text-sm text-gray-400">
                {slide.duration} min • {slide.type}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 