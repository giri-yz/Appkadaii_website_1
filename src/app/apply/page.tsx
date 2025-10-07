'use client';

import { ApplyForm } from '@/components/landing/apply-form';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';
import React from 'react';

export default function ApplyPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <React.Suspense>
          <ApplyForm />
        </React.Suspense>
      </main>
      <Footer />
    </>
  );
}
