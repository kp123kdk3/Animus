'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <br />
            Your Student Life?
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Join 10,000+ students who've taken back control of their academics.
            <br />
            Your best semester starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-10 py-5 bg-white text-indigo-600 text-lg font-bold rounded-full shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Get Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>60-second setup</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
