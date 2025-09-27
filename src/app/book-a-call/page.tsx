'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { BookingForm } from '@/components/landing/booking-form';

export default function BookACallPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
