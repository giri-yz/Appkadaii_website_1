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
              title="Book a Consultation"
              subtitle="Fill out the form below to schedule a call with our team. We're excited to hear about your project!"
            />
            <Card className="mt-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
             <p className="text-center mt-4 text-sm text-muted-foreground">
                **Please replace the `src` URL in the `iframe` in `/src/app/book-a-call/page.tsx` with your own Google Form embed URL.**
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
