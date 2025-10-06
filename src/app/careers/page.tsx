'use client';

import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import { CareersSection } from '@/components/landing/careers-section';

export default function CareersPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <CareersSection />
      </main>
      <Footer />
    </>
  );
}
