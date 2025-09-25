import React from 'react';
import { SectionHeading } from './section-heading';

export function TestimonialsSection() {
  return (
    <section id="about" className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="What Clients Say"
          subtitle="Trusted by startups and enterprises worldwide"
        />

        <div className="relative max-w-3xl mx-auto mt-8">
          <div className="testimonial text-center p-8 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
            <p className="text-lg italic mb-6 text-[rgba(255,255,255,0.9)] leading-relaxed">
              "They transformed our complex AI requirements into an elegant solution that exceeded all expectations. The team's expertise and dedication are unmatched."
            </p>
            <p className="font-semibold text-primary">Sarah Chen</p>
            <p className="text-sm text-[rgba(255,255,255,0.7)]">CTO, TechVision Inc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
