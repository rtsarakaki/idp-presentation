'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ISlideTransitionProps {
  children: React.ReactNode;
  slideId: string;
}

export default function SlideTransition({ children, slideId }: ISlideTransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={slideId}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        className="w-full h-full overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 