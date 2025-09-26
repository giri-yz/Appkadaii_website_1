'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Smartphone, BrainCircuit, Zap } from 'lucide-react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { HeroSection } from '@/components/landing/hero-section';
import { ServicesSection } from '@/components/landing/services-section';
import { ProcessSection } from '@/components/landing/process-section';
import { TechStackSection } from '@/components/landing/tech-stack-section';
import { PortfolioSection } from '@/components/landing/portfolio-section';
import { MidCtaSection } from '@/components/landing/mid-cta-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { StatsExtendedSection } from '@/components/landing/stats-extended-section';
import { FaqSection } from '@/components/landing/faq-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';


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
        <MidCtaSection />
        <TestimonialsSection />
        <StatsExtendedSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
