'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { TechStackSection } from '@/components/landing/tech-stack-section';

export default function TechStackPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <TechStackSection />
      </main>
      <Footer />
    </>
  );
}
