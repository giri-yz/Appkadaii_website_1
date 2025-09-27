'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { TestimonialsSection } from '@/components/landing/testimonials-section';

export default function AboutPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
