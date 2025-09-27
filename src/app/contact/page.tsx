'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { FinalCtaSection } from '@/components/landing/final-cta-section';

export default function ContactPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
