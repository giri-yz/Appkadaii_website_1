import React from 'react';
import { RippleButton } from './ripple-button';

export function MidCtaSection() {
  return (
    <section className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mid-cta bg-gradient-to-br from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)] rounded-2xl p-12 text-center max-w-2xl mx-auto backdrop-blur-lg opacity-0 translate-y-12">
          <h3 className="text-3xl font-semibold mb-4 text-white">Ready to Start Your Project?</h3>
          <p className="text-[rgba(255,255,255,0.8)] mb-8 leading-relaxed">
            Join hundreds of satisfied clients who've transformed their ideas into successful applications. Let's discuss your vision and make it reality.
          </p>
          <RippleButton href="#contact" className="cta-btn cta-primary">
            Start Your Project
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
