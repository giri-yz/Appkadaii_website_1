import React from 'react';
import { SectionHeading } from './section-heading';
import { RippleButton } from './ripple-button';

export function FinalCtaSection() {
  return (
    <section id="contact" className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="Let's Build Something Amazing"
          subtitle="Your vision, our expertise. The perfect combination for extraordinary results."
        />
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex gap-6 flex-wrap justify-center">
            <RippleButton href="mailto:hello@appshop.com" className="cta-btn cta-secondary">
              Get In Touch
            </RippleButton>
            <RippleButton href="#" className="cta-btn cta-primary">
              Schedule a Call
            </RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
}
