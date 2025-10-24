# Animus Landing Page - Setup Guide

## 🚀 Quick Start

```bash
cd landing-page
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
landing-page/
├── app/
│   ├── globals.css          # Custom Tailwind theme & animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page (landing page)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky navigation with blur
│   │   └── Footer.tsx        # Footer with links
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section with gradient text
│   │   ├── ProblemStatement.tsx  # Canvas pain points
│   │   ├── Features.tsx      # Feature showcase
│   │   ├── HowItWorks.tsx    # 3-step process
│   │   ├── Testimonials.tsx  # Social proof
│   │   ├── Pricing.tsx       # Pricing tiers
│   │   └── FinalCTA.tsx      # Call to action
│   └── ui/
│       ├── Button.tsx        # Reusable button component
│       ├── Card.tsx          # Card component
│       └── Badge.tsx         # Badge component
├── lib/
│   └── utils.ts              # Utility functions
└── public/
    └── images/               # Images and mockups
```

## 🎨 Design System

### Colors
- **Primary Gradient**: Indigo (#6366F1) → Purple (#8B5CF6) → Cyan (#06B6D4)
- **Success**: Green (#10B981)
- **Danger**: Red (#EF4444)
- **Warning**: Orange (#F59E0B)

### Typography
- **Headings**: Space Grotesk (Bold, 700-900)
- **Body**: Inter (Regular, 400-600)

### Spacing
Uses 4px base unit: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px)

### Animations
- Fade in, Slide up/down, Scale in
- Float effect for floating elements
- Pulse glow for attention-grabbing elements

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Language**: TypeScript

## 📝 Components to Build

### 1. Navbar (`components/layout/Navbar.tsx`)
- Transparent with blur on scroll
- Logo + navigation links + CTA buttons
- Mobile hamburger menu
- Sticky positioning

### 2. Hero Section (`components/sections/Hero.tsx`)
- Full viewport height
- Gradient text headline
- Dual CTAs (Start Free Trial + Watch Demo)
- Floating UI mockup elements
- Mesh gradient background

### 3. Problem Statement (`components/sections/ProblemStatement.tsx`)
- Dark background gradient
- 3 pain point cards
- Hover effects (lift + glow)

### 4. Features Showcase (`components/sections/Features.tsx`)
- Alternating left-right layout or Bento grid
- 5 key features with mockups
- Interactive hover states
- Gradient borders

### 5. How It Works (`components/sections/HowItWorks.tsx`)
- 3-step process
- Numbered timeline with icons
- Animated connecting line

### 6. Testimonials (`components/sections/Testimonials.tsx`)
- Marquee scroll or grid layout
- Student avatars + quotes
- Star ratings
- School names for credibility

### 7. Pricing (`components/sections/Pricing.tsx`)
- 3 tiers: Free, Student, Premium
- Monthly/Annual toggle
- Highlight most popular tier
- Stripe-inspired design

### 8. Final CTA (`components/sections/FinalCTA.tsx`)
- Full-width gradient background
- Large prominent button
- Trust badges

### 9. Footer (`components/layout/Footer.tsx`)
- 4-column grid (Product, Company, Resources, Legal)
- Social links
- Dark background

## 🎯 Key Features to Implement

### Animations (Framer Motion)
```tsx
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>
```

### Scroll Blur Navbar
```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Gradient Text
```tsx
<h1 className="gradient-text">
  Stop Wrestling With Canvas
</h1>
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Manual Build
```bash
npm run build
npm run start
```

## 📱 Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility
- ARIA labels on interactive elements
- Keyboard navigation
- Focus indicators
- Alt text on images
- Minimum contrast ratios (WCAG AA)

## 🔧 Utility Classes Created

### Custom Classes (in globals.css)
- `.gradient-text` - Gradient text effect
- `.gradient-bg` - Gradient background
- `.mesh-gradient` - Mesh gradient background
- `.glass` - Glassmorphism effect
- `.glass-dark` - Dark glass effect
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation
- `.animate-float` - Floating animation
- `.container` - Content container
- `.section-padding` - Consistent section spacing

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🎨 Design Inspiration
- Linear (linear.app)
- Vercel (vercel.com)
- Stripe (stripe.com)
- Notion (notion.so)

## 📝 Next Steps

1. ✅ Set up Next.js with Tailwind
2. ✅ Configure custom theme
3. ✅ Create component structure
4. ⏳ Build Navbar component
5. ⏳ Build Hero section
6. ⏳ Build remaining sections
7. ⏳ Add Framer Motion animations
8. ⏳ Optimize images and performance
9. ⏳ Test responsiveness
10. ⏳ Deploy to Vercel

---

**Status**: Setup complete, ready for component development!

To continue building, start with the Navbar and Hero section, then work through each section sequentially.
