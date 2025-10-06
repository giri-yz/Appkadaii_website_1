'use client';

import { ApplyForm } from '@/components/landing/apply-form';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';

export default function ApplyPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
