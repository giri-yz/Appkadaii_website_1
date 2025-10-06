import React from 'react';
import { RippleButton } from './ripple-button';

export function FinalCtaSection() {
  return (
    <section id="contact" className="py-24 px-8 text-center overflow-hidden">
      <div className="container max-w-4xl mx-auto">
        <h2
          className="text-[clamp(2.8rem,6vw,4.5rem)] font-bold mb-4"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'titleSlide 1s ease-out 0.3s both'
          }}
        >
          Let’s Build Something{' '}
          <span className="text-primary [text-shadow:0_0_20px_hsla(var(--primary),0.5)]">
            Amazing Together
          </span>
        </h2>
        <p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          style={{ animation: 'subtitleFade 1.2s ease-out 0.6s both' }}
        >
          From vision to execution — we craft digital solutions engineered to
          grow with your business.
        </p>
        <div 
          className="flex gap-6 flex-wrap justify-center"
          style={{ animation: 'ctaRise 1.4s ease-out 0.9s both' }}
          >
          <RippleButton
            href="/book-a-call"
            className="cta-btn cta-secondary text-base font-semibold"
          >
            📞 Book a Call
          </RippleButton>
          <RippleButton
            href="/contact"
            className="cta-btn cta-primary text-base font-semibold"
          >
            Get Started
          </RippleButton>
        </div>
      </div>
    </section>
  );
}