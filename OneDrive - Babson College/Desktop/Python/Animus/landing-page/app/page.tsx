import { Hero } from '@/components/sections/Hero';
import { ProblemStatement } from '@/components/sections/ProblemStatement';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { Features } from '@/components/sections/Features';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ProblemStatement />
      <SolutionSection />
      <Features />
      <MetricsSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
