'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import 3D component to avoid SSR issues
const Hero3D = dynamic(
  () => import('../3d/Hero3D').then((mod) => mod.Hero3D),
  { ssr: false }
);

export function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black">
      {/* 3D Background Layer (z-0) */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Hero3D />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-5 mesh-gradient opacity-50" />

      {/* Text Overlay Layer (z-10) */}
      <div className="absolute inset-0 z-10 flex flex-row items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto px-6 pointer-events-auto">
          <motion.div
            className="text-center w-full"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base font-medium text-white/80 mb-6 tracking-wide uppercase block"
            >
              The Future of Student Productivity
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight block"
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stop Wrestling With Canvas.
              </span>
              <br />
              <span className="text-white">
                Start Winning at School.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto block"
            >
              The AI-powered command center that transforms your chaotic Canvas experience into organized success.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 hover:scale-105 transition-all duration-200 flex items-center gap-2">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center gap-2">
                <Play className="w-5 h-5" />
                For Investors
              </button>
            </motion.div>

            {/* Statistics Bar */}
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base text-white/70"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="font-medium">10,000+ students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span className="font-medium">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <span className="font-medium">50M+ assignments tracked</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-white/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
