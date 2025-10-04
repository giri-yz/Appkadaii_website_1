'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { ContactForm } from '@/components/landing/contact-form';

export default function ContactPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <ContactForm formType="contact" />
      </main>
      <Footer />
    </>
  );
}
