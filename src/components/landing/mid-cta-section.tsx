import React from 'react';
import { RippleButton } from './ripple-button';

export function MidCtaSection() {
  return (
    <section className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mid-cta bg-primary/10 border border-primary/20 rounded-2xl p-12 text-center max-w-4xl mx-auto backdrop-blur-lg transition-all duration-500 hover:shadow-[0_20px_40px_hsla(var(--primary),0.2)] hover:border-primary">
          <h3 className="text-4xl font-bold mb-4 text-foreground" style={{ animation: 'titleSlide 1s ease-out 0.3s both' }}>
            Turn Your Idea Into{' '}
            <span className="text-primary [text-shadow:0_0_20px_hsla(var(--primary),0.5)]">
              Reality
            </span>
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto" style={{ animation: 'subtitleFade 1.2s ease-out 0.6s both' }}>
            We partner with startups and growing businesses to deliver products
            that last and{' '}
            <span className="text-foreground font-semibold">scale</span>.
          </p>
          <div style={{ animation: 'ctaRise 1.4s ease-out 0.9s both' }}>
            <RippleButton
              href="/contact"
              className="cta-btn cta-primary text-lg font-bold"
            >
              Start Your Project
            </RippleButton>
          </div>
          <p className="text-sm text-muted-foreground/60 mt-8" style={{ animation: 'subtitleFade 1.2s ease-out 1.2s both' }}>
            Already empowering founders to launch products with impact.
          </p