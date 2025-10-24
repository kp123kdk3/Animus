# Animus Landing Page - Build Guide

## ✅ Completed So Far

1. **Utilities & Base Components**
   - ✅ `lib/utils.ts` - Utility functions and animation variants
   - ✅ `components/ui/Button.tsx` - Reusable button with variants
   - ✅ `components/ui/Card.tsx` - Card component with hover effects
   - ✅ `components/ui/Badge.tsx` - Badge component
   - ✅ `app/globals.css` - Complete design system with animations

2. **Dependencies Installed**
   - ✅ Framer Motion
   - ✅ Lucide React (for icons)
   - ✅ Tailwind CSS v4
   - ✅ TypeScript

## 🚧 Components to Build

### Priority 1: Core Layout Components

#### 1. Navbar Component (`components/layout/Navbar.tsx`)

**Features Needed**:
- Sticky positioning with blur effect on scroll
- Logo that links to top
- Navigation links (Features, How It Works, Pricing, About)
- Login button + "Get Started" CTA
- Mobile hamburger menu with slide-in animation
- Scroll detection to change background

**Code Structure**:
```typescript
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Animus
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button variant="primary">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 pt-20 px-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-4 text-lg text-gray-700 hover:text-indigo-600"
              >
                {link.name}
              </button>
            ))}
            <div className="mt-8 space-y-4">
              <Button variant="outline" className="w-full">Login</Button>
              <Button variant="primary" className="w-full">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

#### 2. Hero Section (`components/sections/Hero.tsx`)

**Features**:
- Full viewport height
- Gradient animated text
- Dual CTAs
- Statistics bar
- Floating mockup elements
- Mesh gradient background

**Key Elements**:
```typescript
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Play, ArrowRight } from 'lucide-react';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient pt-20">
      <div className="container mx-auto px-6 py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              The Future of Student Productivity
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Stop Wrestling With{' '}
            <span className="gradient-text">Canvas</span>.
            <br />
            Start Winning at School.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Animus transforms your chaotic Canvas experience into a beautifully organized command center.
            One dashboard. All your assignments, grades, and deadlines—synced automatically.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="primary" size="lg">
              Start Free Trial <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="secondary" size="lg">
              <Play className="mr-2" size={20} /> Watch Demo
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-600">10,000+</span> students
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-600">4.9★</span> rating
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-600">50M+</span> assignments tracked
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative animate-float">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              {/* Simple mockup representation */}
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

#### 3. Problem Statement Section (`components/sections/ProblemStatement.tsx`)

**3 Pain Point Cards**:
```typescript
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
      description: 'Navigate through 6 different pages just to see what\'s due tomorrow',
    },
    {
      icon: BarChart3,
      title: 'Hidden Grades',
      description: 'Your grades are buried in confusing spreadsheets and scattered menus',
    },
    {
      icon: Calendar,
      title: 'Calendar Nightmare',
      description: 'Miss deadlines because Canvas won\'t show you everything in one place',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Canvas Chaos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Canvas LMS wasn't built for student productivity. We're changing that.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                hover
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm h-full"
              >
                <div className="text-indigo-400 mb-4">
                  <problem.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {problem.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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
```

## 📝 Remaining Sections to Build

### 4. Features Section
- 5 feature cards with alternating layouts
- Each with badge, title, description, mockup
- Hover animations

### 5. How It Works
- 3 numbered steps
- Animated connecting line
- Icons and descriptions

### 6. Testimonials
- Marquee scrolling or grid
- Student quotes with avatars
- School names for credibility

### 7. Pricing
- 3 tiers (Free, Student, Premium)
- Monthly/Annual toggle
- Feature lists
- Highlight middle tier

### 8. Final CTA
- Full-width gradient background
- Large prominent button
- Trust badges

### 9. Footer
- 4-column grid (Product, Company, Resources, Legal)
- Social links
- Copyright

## 🎨 Design Tokens (Already in globals.css)

- Gradient text: `.gradient-text`
- Mesh background: `.mesh-gradient`
- Glass effect: `.glass`
- Float animation: `.animate-float`
- All colors and spacing defined

## 🚀 Next Steps

1. Copy the Navbar component code above
2. Copy the Hero component code above
3. Copy the ProblemStatement component code above
4. Build remaining sections following same pattern
5. Update `app/page.tsx` to import and render all sections
6. Test responsiveness
7. Commit to GitHub

## 📱 Main Page Structure

```typescript
// app/page.tsx
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProblemStatement } from '@/components/sections/ProblemStatement';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}
```

All animation variants are ready in `lib/utils.ts`. All design tokens are in `globals.css`. Components use Framer Motion for smooth animations.

Continue building remaining sections following the patterns shown above!
