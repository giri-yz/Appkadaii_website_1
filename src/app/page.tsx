'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { HeroSection } from '@/components/landing/hero-section';
import { MidCtaSection } from '@/components/landing/mid-cta-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { AppRecommendations } from '@/components/landing/app-recommendations';
import { ServicesSection } from '@/components/landing/services-section';
import { ProcessSection } from '@/components/landing/process-section';
import { TechStackSection } from '@/components/landing/tech-stack-section';
import { PortfolioSection } from '@/components/landing/portfolio-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { FaqSection } from '@/components/landing/faq-section';

// MAIN PAGE COMPONENT
export default function LandingPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TechStackSection />
        <PortfolioSection />
        <AppRecommendations />
        <TestimonialsSection />
        <FaqSection />
        <MidCtaSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
