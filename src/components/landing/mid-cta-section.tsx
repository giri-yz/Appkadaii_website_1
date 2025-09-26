import React from 'react';
import { RippleButton } from './ripple-button';

export function MidCtaSection() {
  return (
    <section className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mid-cta bg-gradient-to-br from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.2)] rounded-2xl p-12 text-center max-w-3xl mx-auto backdrop-blur-lg transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:border-primary">
          <h3 className="text-4xl font-bold mb-4 text-white">
            Turn Your Idea Into{' '}
            <span className="text-primary [text-shadow:0_0_20px_rgba(16,185,129,0.5)]">
              Reality
            </span>
          </h3>
          <p className="text-[rgba(255,255,255,0.8)] mb-8 leading-relaxed max-w-2xl mx-auto">
            We partner with startups and growing businesses to deliver products
            that last and{' '}
            <span className="text-white font-semibold">scale</span>.
          </p>
          <RippleButton
            href="#contact"
            className="cta-btn cta-primary text-lg font-bold"
          >
            🔥 Start Your Project
          </RippleButton>
          <p className="text-sm text-[rgba(255,255,255,0.6)] mt-8">
            Already empowering founders to launch products with impact.
          </p>
        </div>
      </div>
    </section>
  );
}
