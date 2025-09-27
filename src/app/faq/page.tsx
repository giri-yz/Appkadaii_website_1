'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { FaqSection } from '@/components/landing/faq-section';

export default function FaqPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
