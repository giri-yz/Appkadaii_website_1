'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { ServicesSection } from '@/components/landing/services-section';

export default function ServicesPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
