'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { presentationOutline } from '@/data/presentation-outline';
import PresentationSlide from './PresentationSlide';
import PersonalSlide from './PersonalSlide';
import IntroSlide from './IntroSlide';
import ContextSlide from './ContextSlide';
import PainPointsSlide from './PainPointsSlide';
import SlideTransition from './SlideTransition';

export default function Presentation() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { slides } = presentationOutline;

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log('Key pressed:', event.key);
      if (event.key === 'ArrowRight' || event.key === ' ') {
        if (currentSlideIndex < slides.length - 1) {
          setCurrentSlideIndex(prev => prev + 1);
        }
      } else if (event.key === 'ArrowLeft') {
        if (currentSlideIndex > 0) {
          setCurrentSlideIndex(prev => prev - 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentSlideIndex, slides.length]);

  const currentSlide = slides[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  return (
    <div className="relative h-screen bg-slate-900 overflow-y-auto custom-scrollbar" tabIndex={0}>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      {/* Slide Counter */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 text-white text-sm z-50">
        {currentSlideIndex + 1} / {slides.length}
      </div>

      {/* Navigation Controls */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handlePrevious}
          disabled={currentSlideIndex === 0}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all"
        >
          ← Anterior
        </button>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleNext}
          disabled={currentSlideIndex === slides.length - 1}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-600 transition-all"
        >
          Próximo →
        </button>
      </div>

      {/* Slides */}
      <SlideTransition slideId={currentSlide.id}>
        {currentSlide.id === 'intro' ? (
          <IntroSlide
            slide={currentSlide}
            isActive={true}
          />
        ) : currentSlide.id === 'presentation' ? (
          <PersonalSlide
            slide={currentSlide}
            isActive={true}
          />
        ) : currentSlide.id === 'context' ? (
          <ContextSlide
            slide={currentSlide}
            isActive={true}
          />
        ) : currentSlide.id === 'pain-points' ? (
          <PainPointsSlide
            slide={currentSlide}
            isActive={true}
          />
        ) : (
          <PresentationSlide
            slide={currentSlide}
            isActive={true}
          />
        )}
      </SlideTransition>

      {/* Instructions */}
      <div className="fixed bottom-4 right-4 text-white/60 text-xs z-50">
        Use ← → ou Espaço para navegar
      </div>
    </div>
  );
} 