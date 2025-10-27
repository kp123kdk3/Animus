'use client';

import { motion } from 'framer-motion';

export function SolutionSection() {
  return (
    <section id="solution" className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Your New{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Command Center
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            One dashboard. All your assignments, grades, and deadlines.
            Synced automatically. Organized beautifully. Stress-free studying.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Before - Canvas */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-2xl rounded-3xl" />
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="text-red-500 font-bold text-lg mb-4">❌ Before: Canvas</div>
              <div className="space-y-3 text-gray-600">
                <p>• Navigate through multiple pages</p>
                <p>• Hidden assignment details</p>
                <p>• Confusing grade calculations</p>
                <p>• Scattered calendar events</p>
                <p>• Manual organization required</p>
              </div>
            </div>
          </div>

          {/* After - Animus */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
            <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-2xl p-8 border-2 border-indigo-200">
              <div className="text-indigo-600 font-bold text-lg mb-4">✅ After: Animus</div>
              <div className="space-y-3 text-gray-700">
                <p>• Everything in one dashboard</p>
                <p>• Instant assignment overview</p>
                <p>• Smart grade tracking & predictions</p>
                <p>• Unified calendar view</p>
                <p>• AI-powered prioritization</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            '🎯 Unified Dashboard',
            '⚡ Real-Time Sync',
            '📊 Grade Intelligence',
            '📅 Smart Calendar',
            '🤖 AI Prioritization',
            '✨ Zero Clicks',
          ].map((feature, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 text-gray-700 font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              {feature}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Experience the Difference →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
