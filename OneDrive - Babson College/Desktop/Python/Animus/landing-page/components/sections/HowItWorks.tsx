'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Link2, Sparkles, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Link2,
      title: 'Connect Canvas',
      description: 'Secure OAuth authentication in 30 seconds. Your credentials never leave Canvas.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'Watch Magic Happen',
      description: 'Our AI instantly organizes all your assignments, grades, and deadlines. Zero manual input.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Stay Ahead',
      description: 'Get smart reminders, priority rankings, and insights. Never miss a deadline again.',
      color: 'from-pink-500 to-cyan-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get Started in <span className="gradient-text">3 Simple Steps</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            From Canvas chaos to organized success in under a minute.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -translate-y-1/2 opacity-30" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative"
              >
                <Card
                  hover
                  className="bg-gray-800/50 border-gray-700 backdrop-blur-sm p-8 text-center h-full relative z-10"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center font-bold text-white shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} bg-opacity-10`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Join 10,000+ students who've transformed their academic life
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            <span className="text-white font-semibold text-lg">+10,000 more</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
