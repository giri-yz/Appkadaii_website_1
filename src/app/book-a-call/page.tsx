'use client';

import React from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Particles } from '@/components/landing/particles';
import { SectionHeading } from '@/components/landing/section-heading';
import { Card, CardContent } from '@/components/ui/card';

export default function BookACallPage() {
  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <section id="book-a-call" className="py-16 px-8">
          <div className="container max-w-4xl mx-auto">
            <SectionHeading
              title="Book Your Appointment with App kadaii"
              subtitle="Schedule a convenient time to connect with us. We look forward to assisting you."
            />
            <Card className="mt-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
              <CardContent className="p-0">
                <div className="w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe_Phn9YTRbiVKVJ4X8-JZc_aTxpLdUF57ElTTg3Y7I6v3LzA/viewform?embedded=true"
                    width="100%"
                    height="1903"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="border-0"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}