'use client';

import React from 'react';
import { IPresentationSlide } from '@/data/presentation-outline';

interface IPresentationSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

export default function PresentationSlide({ slide, isActive }: IPresentationSlideProps) {

  if (!isActive) return null;

  return (
    <div className="h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <h2 className="text-2xl text-gray-300 font-light">
              {slide.subtitle}
            </h2>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="grid gap-4">
            {slide.content.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-3"></div>
                <p className="text-xl leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Info */}
        <div className="flex justify-center items-center pt-8">
          <div className="text-sm text-gray-400">
            {slide.duration} min • {slide.type}
          </div>
        </div>
      </div>
    </div>
  );
} 