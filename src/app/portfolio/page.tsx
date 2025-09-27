'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { PortfolioSection } from '@/components/landing/portfolio-section';

export default function PortfolioPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}
