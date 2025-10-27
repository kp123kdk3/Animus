'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/utils';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for trying Animus',
      features: [
        'Up to 5 courses',
        'Basic dashboard',
        'Manual sync',
        'Grade tracking',
        'Assignment list',
        'Email support',
      ],
      cta: 'Get Started',
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Student',
      price: { monthly: 4.99, annual: 49.99 },
      description: 'Most popular for students',
      features: [
        'Unlimited courses',
        'Auto-sync every hour',
        'Grade calculator',
        'Smart prioritization',
        'Calendar integration',
        'Mobile app access',
        'Priority support',
        'Custom themes',
      ],
      cta: 'Start Free Trial',
      popular: true,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Premium',
      price: { monthly: 9.99, annual: 99.99 },
      description: 'For power users',
      features: [
        'Everything in Student',
        'AI study recommendations',
        'Performance analytics',
        'Export data (PDF/CSV)',
        'Study time tracking',
        'Collaboration tools',
        'API access',
        'White-label option',
        '24/7 premium support',
      ],
      cta: 'Start Free Trial',
      popular: false,
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Start free, upgrade when you're ready. Cancel anytime.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-4 bg-gray-800/50 p-2 rounded-full border border-gray-700"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <Badge variant="gradient" className="text-xs">
                Save 17%
              </Badge>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <Badge variant="gradient" className="text-sm">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                hover
                className={`p-8 h-full flex flex-col relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-purple-500/50 shadow-xl shadow-purple-500/10'
                    : 'bg-gray-800/50 border-gray-700'
                } backdrop-blur-sm`}
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-400">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  {isAnnual && plan.price.monthly > 0 && (
                    <p className="text-gray-500 text-sm mt-2">
                      ${(plan.price.annual / 12).toFixed(2)}/month billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className={`w-full ${
                    !plan.popular && 'border-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-4">
            All plans include a <span className="text-white font-semibold">14-day free trial</span>. No credit card required.
          </p>
          <p className="text-gray-500 text-sm">
            Need a custom plan for your university? <a href="#" className="text-purple-400 hover:text-purple-300 underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
