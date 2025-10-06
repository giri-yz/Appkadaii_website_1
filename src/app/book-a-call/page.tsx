'use client';

import { ContactForm } from '@/components/landing/contact-form';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Particles } from '@/components/landing/particles';

export default function BookACallPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <ContactForm formType="appointment" />
      </main>
      <Footer />
    </>
  );
}
