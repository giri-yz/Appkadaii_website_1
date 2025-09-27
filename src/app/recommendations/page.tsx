'use client';

import { Suspense } from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { AppRecommendationsResult } from '@/components/landing/app-recommendations-result';

export default function RecommendationsPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRecommendationsResult />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
