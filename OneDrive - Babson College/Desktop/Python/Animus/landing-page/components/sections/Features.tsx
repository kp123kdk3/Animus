'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Calendar, Brain } from 'lucide-react';

const features = [
  {
    icon: Target,
    badge: '🎯 Smart Organization',
    title: 'Everything. One Place. Zero Clicks.',
    description: 'See every assignment across all your classes instantly. No more tab-hopping through Canvas pages. Your entire academic life, organized automatically.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    badge: '🤖 Intelligent Priority',
    title: 'Let AI Decide What Matters Most',
    description: 'Animus automatically prioritizes your workload based on due dates, difficulty, and your personal patterns. Focus on what matters, ignore the noise.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    badge: '⚡ Instant Updates',
    title: 'Canvas Integration That Actually Works',
    description: "Automatic syncing every 15 minutes. New assignment posted? You'll know before your professor announces it. Never miss an update again.",
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    badge: '📈 Predictive Analytics',
    title: 'Know Your Grade Before It Drops',
    description: 'Beautiful graphs track your performance over time. Grade calculator shows exactly what you need to hit your target. Stay ahead, not behind.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Calendar,
    badge: '📅 Time Mastery',
    title: 'Your Academic Life, Visualized',
    description: 'Tests, assignments, deadlines—all color-coded on one gorgeous calendar. Export to Google Calendar with one click. Total control.',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Your Academic <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Superpowers</span>
          </h2>
        </motion.div>

        {/* Features List */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
              >
                {/* Visual Side */}
                <div className="flex-1">
                  <div className={`relative bg-gradient-to-br ${feature.gradient} rounded-3xl p-12 shadow-2xl`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
                    <Icon className="relative w-32 h-32 mx-auto text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
                    {feature.badge}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
