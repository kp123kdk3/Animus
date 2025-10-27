'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const metrics = [
  { label: 'Students', value: 10000, suffix: '+', icon: '🎯' },
  { label: 'Assignments Tracked', value: 50, suffix: 'M+', icon: '📊' },
  { label: 'Grade Improvement', value: 12, suffix: '%', prefix: '+', icon: '📈' },
  { label: 'Time Saved/Week', value: 5, suffix: ' hrs', icon: '⚡' },
  { label: 'Satisfaction', value: 4.9, suffix: '/5 ⭐', decimals: 1, icon: '✨' },
  { label: 'Universities', value: 50, suffix: '+', icon: '🎓' },
  { label: 'Retention Rate', value: 89, suffix: '%', icon: '🔥' },
  { label: 'Daily Active Users', value: 7500, suffix: '+', icon: '👥' },
];

function CountUpAnimation({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}</>;
}

export function MetricsSection() {
  return (
    <section id="metrics" className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Numbers</span> Don't Lie
          </h2>
          <p className="text-xl text-gray-400">
            Real impact. Real students. Real results.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                {/* Icon */}
                <div className="text-4xl mb-4">{metric.icon}</div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {metric.prefix}
                  <CountUpAnimation value={metric.value} decimals={metric.decimals} />
                  {metric.suffix}
                </div>

                {/* Label */}
                <div className="text-gray-400 text-sm font-medium">
                  {metric.label}
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
