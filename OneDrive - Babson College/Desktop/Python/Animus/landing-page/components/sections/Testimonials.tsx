'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Animus saved my GPA. I went from constantly missing deadlines to staying ahead of every assignment. The AI prioritization is a game-changer.",
      name: "Sarah Martinez",
      school: "Stanford University",
      major: "Computer Science",
      avatar: "SM",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      quote: "I can't believe I used to waste hours clicking through Canvas. Animus gives me everything I need in one glance. Best $5/month I've ever spent.",
      name: "James Chen",
      school: "MIT",
      major: "Mechanical Engineering",
      avatar: "JC",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      quote: "The grade calculator feature alone is worth it. I always know exactly where I stand and what I need to hit my target grades. Stress = gone.",
      name: "Emily Rodriguez",
      school: "UC Berkeley",
      major: "Business Administration",
      avatar: "ER",
      gradient: "from-pink-500 to-cyan-500",
    },
    {
      quote: "As someone juggling 6 classes and a part-time job, Animus is literally the only reason I'm surviving this semester. The smart reminders are perfect.",
      name: "Marcus Thompson",
      school: "Georgia Tech",
      major: "Data Science",
      avatar: "MT",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      quote: "My grades improved by a full letter when I started using Animus. The insights feature helps me study smarter, not harder.",
      name: "Priya Patel",
      school: "NYU",
      major: "Psychology",
      avatar: "PP",
      gradient: "from-green-500 to-teal-500",
    },
    {
      quote: "I recommended Animus to my entire dorm floor. Everyone who uses it says the same thing: 'Why didn't this exist sooner?'",
      name: "Alex Kim",
      school: "Harvard University",
      major: "Economics",
      avatar: "AK",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            Loved by <span className="gradient-text">Students</span> Everywhere
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Join thousands of students who transformed their academic life with Animus.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                hover
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm p-8 h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.school}</p>
                    <p className="text-gray-500 text-xs">{testimonial.major}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">4.9/5</p>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">10,000+</p>
              <p className="text-gray-400">Active Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">500+</p>
              <p className="text-gray-400">Universities</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text mb-2">50M+</p>
              <p className="text-gray-400">Assignments Tracked</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
