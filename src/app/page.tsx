'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { ServicesSection } from '@/components/landing/services-section';
import { ProcessSection } from '@/components/landing/process-section';
import { PortfolioSection } from '@/components/landing/portfolio-section';
import { MidCtaSection } from '@/components/landing/mid-cta-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { StatsExtendedSection } from '@/components/landing/stats-extended-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { useScrollAnimations } from '@/hooks/use-scroll-animations';

export default function LandingPage() {
  useScrollAnimations();

  return (
    <>
      <Particles />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <MidCtaSection />
        <TestimonialsSection />
        <StatsExtendedSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
