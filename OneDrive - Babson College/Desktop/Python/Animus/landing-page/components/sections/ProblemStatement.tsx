'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { RefreshCw, BarChart3, Calendar } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils';

export function ProblemStatement() {
  const problems = [
    {
      icon: RefreshCw,
      title: 'Endless Clicking',
      description: 'Navigate through 6 different pages just to see what\'s due tomorrow. Canvas makes simple tasks impossibly tedious.',
    },
    {
      icon: BarChart3,
      title: 'Hidden Grades',
      description: 'Your grades are buried in confusing spreadsheets and scattered menus. Finding your GPA shouldn\'t be a treasure hunt.',
    },
    {
      icon: Calendar,
      title: 'Calendar Nightmare',
      description: 'Miss deadlines because Canvas won\'t show you everything in one place. Assignments fall through the cracks daily.',
    },
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The <span className="gradient-text">Canvas Chaos</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Canvas LMS wasn't built for student productivity. We're changing that.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                hover
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full p-8"
              >
                <div className="text-indigo-400 mb-6">
                  <problem.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {problem.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
