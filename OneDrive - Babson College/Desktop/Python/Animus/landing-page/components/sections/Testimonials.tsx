'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Animus saved my GPA. I went from constantly missing deadlines to staying ahead of every assignment. It's like having a personal assistant who actually gets student life.",
    author: 'Sarah Martinez',
    role: 'Computer Science',
    school: 'Stanford University',
    rating: 5,
    avatar: '👩‍💻',
  },
  {
    quote: "I used to spend 30 minutes every morning just figuring out what was due. Now I open Animus once and I'm done. It's beautiful and it actually works.",
    author: 'Marcus Johnson',
    role: 'Business Administration',
    school: 'UC Berkeley',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    quote: "The grade calculator changed everything. I always know exactly where I stand and what I need to hit my goals. Absolute game changer for pre-med.",
    author: 'Priya Kapoor',
    role: 'Pre-Med',
    school: 'MIT',
    rating: 5,
    avatar: '👩‍⚕️',
  },
  {
    quote: "Canvas stresses me out. Animus makes me feel in control. I actually enjoy planning my week now. Who knew productivity could feel this good?",
    author: 'Alex Thompson',
    role: 'Engineering',
    school: 'Georgia Tech',
    rating: 5,
    avatar: '👨‍🔧',
  },
  {
    quote: "Finally, a tool that understands students. The AI prioritization is scary accurate. It knows what I need to focus on before I do.",
    author: 'Emma Chen',
    role: 'Psychology',
    school: 'UCLA',
    rating: 5,
    avatar: '👩‍🎓',
  },
  {
    quote: "My entire friend group switched to Animus after seeing my dashboard. Now we can't imagine going back to regular Canvas. It's that good.",
    author: 'James Rodriguez',
    role: 'Economics',
    school: 'University of Michigan',
    rating: 5,
    avatar: '👨‍🎓',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            What Students Are <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Saying</span>
          </h2>
          <p className="text-xl text-gray-600">
            10,000+ students transformed. Here are their stories.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-indigo-600 font-medium">
                    {testimonial.school}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
