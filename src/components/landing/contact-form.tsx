'use client';

import { SectionHeading } from './section-heading';
import { Card, CardContent, CardHeader } from '../ui/card';

export function ContactForm() {
  return (
    <section id="contact-form" className="py-16 px-8">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or just want to say hi? Fill out the form below and we'll get back to you."
        />
        <Card className="mt-12 bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
          <CardHeader />
          <CardContent className="p-0">
             <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdf_your_form_id_here/viewform?embedded=true"
                    width="100%"
                    height="1200"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
