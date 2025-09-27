'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { ProcessSection } from '@/components/landing/process-section';

export default function ProcessPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
