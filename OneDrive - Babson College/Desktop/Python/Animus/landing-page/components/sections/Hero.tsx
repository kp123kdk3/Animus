'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
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
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-black to-black flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-40">
        <Hero3D />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
            ANIMUS
          </h1>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Stop Wrestling With Canvas.
          <br />
          <span className="gradient-text">Start Winning at School.</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          The AI-powered command center that transforms your chaotic Canvas experience into organized success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            className="group"
          >
            Get Early Access
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">10,000+</span>
            <span className="text-sm">Students</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">4.9★</span>
            <span className="text-sm">Rating</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">50M+</span>
            <span className="text-sm">Assignments Tracked</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
