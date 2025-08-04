import React from 'react';
import { motion } from 'framer-motion';
import { IPresentationSlide } from '../data/presentation-outline';
import { 
  Heart, 
  MessageCircle, 
  Mail, 
  Linkedin, 
  Github,
  Coffee,
  Users,
  Handshake
} from 'lucide-react';

interface IThankYouSlideProps {
  slide: IPresentationSlide;
  isActive: boolean;
}

export default function ThankYouSlide({ slide, isActive }: IThankYouSlideProps) {
  if (!isActive) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Thank You */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center"
            >
              <Heart size={40} className="text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
            Obrigado!
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8">
            {slide.subtitle}
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6">{slide.content[0]}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">{slide.content[1]}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Linkedin size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-white">{slide.content[2]}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700/20 rounded-lg flex items-center justify-center">
                    <Github size={20} className="text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-white">{slide.content[3]}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <MessageCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Disponível para</p>
                    <p className="text-white">Consultoria e Mentoria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center space-x-4 text-gray-400">
            <div className="flex items-center space-x-2">
              <Coffee size={16} />
              <span>Vamos tomar um café?</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users size={16} />
              <span>Conecte-se</span>
            </div>
            <div className="flex items-center space-x-2">
              <Handshake size={16} />
              <span>Colaboração</span>
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Esta apresentação foi criada com ❤️ usando Next.js, Framer Motion e Tailwind CSS</p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 text-4xl opacity-20"
        >
          🚀
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 text-4xl opacity-20"
        >
          💡
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-32 text-4xl opacity-20"
        >
          ⚡
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 12, 0],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-32 text-4xl opacity-20"
        >
          🎯
        </motion.div>
      </div>
    </div>
  );
} 