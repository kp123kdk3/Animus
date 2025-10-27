'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Target, Zap, Calculator, Calendar as CalendarIcon, Brain } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/utils';

export function Features() {
  const features = [
    {
      icon: Target,
      emoji: '🎯',
      badge: 'Smart Organization',
      title: 'Everything. One Place. Zero Clicks.',
      description: 'See every assignment across all your classes instantly. No more hunting through Canvas menus or missing deadlines.',
      gradient: 'from-indigo-500 to-purple-500',
      direction: 'left',
    },
    {
      icon: Zap,
      emoji: '⚡',
      badge: 'AI-Powered',
      title: 'Your Assignments. Prioritized.',
      description: 'Smart algorithms rank your work by urgency, difficulty, and weight. Focus on what matters most, automatically.',
      gradient: 'from-purple-500 to-pink-500',
      direction: 'right',
    },
    {
      icon: Calculator,
      emoji: '📊',
      badge: 'Grade Calculator',
      title: 'Know Your GPA. Always.',
      description: 'Real-time grade tracking with "what-if" scenarios. Calculate exactly what you need to hit your target grade.',
      gradient: 'from-pink-500 to-red-500',
      direction: 'left',
    },
    {
      icon: CalendarIcon,
      emoji: '📅',
      badge: 'Smart Calendar',
      title: 'Never Miss a Deadline Again.',
      description: 'Auto-sync with Google Calendar. Get smart reminders based on assignment complexity and your schedule.',
      gradient: 'from-cyan-500 to-blue-500',
      direction: 'right',
    },
    {
      icon: Brain,
      emoji: '🧠',
      badge: 'Study Insights',
      title: 'Learn Smarter, Not Harder.',
      description: 'AI analyzes your performance patterns and suggests optimal study times. Get personalized recommendations for success.',
      gradient: 'from-green-500 to-teal-500',
      direction: 'left',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
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
            Features That <span className="gradient-text">Transform</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to dominate your academics. All in one beautiful dashboard.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={feature.direction === 'left' ? slideInLeft : slideInRight}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <Badge variant="gradient" className="text-sm">
                  {feature.emoji} {feature.badge}
                </Badge>

                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>

                <p className="text-xl text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="pt-4">
                  <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} bg-opacity-10`}>
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Visual Mockup */}
              <div className="flex-1 w-full">
                <Card
                  hover
                  className="bg-gray-800/50 border-gray-700 backdrop-blur-sm p-8 h-80"
                >
                  <div className={`w-full h-full rounded-lg bg-gradient-to-br ${feature.gradient} opacity-20 flex items-center justify-center`}>
                    <feature.icon className="w-24 h-24 text-white/30" />
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
