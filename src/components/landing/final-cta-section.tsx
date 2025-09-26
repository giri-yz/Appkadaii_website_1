import React from 'react';
import { RippleButton } from './ripple-button';

export function FinalCtaSection() {
  return (
    <section id="contact" className="py-16 px-8 text-center">
      <div className="container max-w-4xl mx-auto">
        <h2
          className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let’s Build Something{' '}
          <span className="text-primary [text-shadow:0_0_20px_rgba(16,185,129,0.5)]">
            Amazing Together
          </span>
        </h2>
        <p className="text-lg text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto mb-10">
          From vision to execution — we craft digital solutions engineered to
          grow with your business.
        </p>
        <div className="flex gap-6 flex-wrap justify-center animate-fade-in-up animation-delay-300">
          <RippleButton
            href="#"
            className="cta-btn cta-secondary text-base font-semibold"
          >
            📞 Book a Call
          </RippleButton>
          <RippleButton
            href="#"
            className="cta-btn cta-primary text-base font-semibold"
          >
            🚀 Get Started
          </RippleButton>
        </div>
      </div>
    </section>
  );
}
