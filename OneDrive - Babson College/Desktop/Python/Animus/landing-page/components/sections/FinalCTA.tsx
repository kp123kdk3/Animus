'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Shield, Check, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils';

export function FinalCTA() {
  const trustBadges = [
    { icon: Shield, text: 'Bank-Level Security' },
    { icon: Check, text: 'Free Forever Plan' },
    { icon: Zap, text: '30-Second Setup' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-gradient opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 600,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20">
              Join 10,000+ Successful Students
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform Your
            <br />
            <span className="gradient-text">Student Life?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Stop wrestling with Canvas. Start winning at school. Get organized in under 30 seconds.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mb-12">
            <Button
              variant="primary"
              size="lg"
              className="text-lg px-12 py-6 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
            >
              Start Free Trial - No Credit Card
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                  <badge.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">4.9/5</p>
                <p className="text-gray-400 text-sm">Student Rating</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">10,000+</p>
                <p className="text-gray-400 text-sm">Active Students</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div>
                <p className="text-4xl font-bold gradient-text mb-2">500+</p>
                <p className="text-gray-400 text-sm">Universities</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="currentColor"
            className="text-black"
          />
        </svg>
      </div>
    </section>
  );
}
