'use client';
import React, { useEffect, useState } from 'react';
import { Counter } from './counter';
import { RippleButton } from './ripple-button';
import { Rocket, Workflow } from 'lucide-react';

export function HeroSection() {
  const [keyword, setKeyword] = useState('apps');

  useEffect(() => {
    const keywords = ['apps', 'AI', 'both'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % keywords.length;
      setKeyword(keywords[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section text-center pt-32"
      style={{
        animation:
          'dropdownEntry 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <div className="container max-w-7xl mx-auto">
        <h1
          className="text-[clamp(3.5rem,10vw,8rem)] font-bold tracking-[-0.02em] leading-[0.9] mb-6 text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.3)]"
          style={{ animation: 'titleSlide 1s ease-out 0.3s both' }}
        >
          Your Ideal Shop for <span className="text-primary">Applications</span>
        </h1>
        <p
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-normal mb-8 text-[rgba(255,255,255,0.9)] leading-normal max-w-3xl mx-auto"
          style={{ animation: 'subtitleFade 1.2s ease-out 0.6s both' }}
        >
          We turn your ideas into{' '}
          <span
            className={`font-semibold inline-block transition-all duration-500 text-primary [text-shadow:0_0_20px_rgba(16,185,129,0.5)]`}
          >
            {keyword}
          </span>
          —fast.
        </p>

        <div
          className="flex flex-col items-center gap-6"
          style={{ animation: 'ctaRise 1.4s ease-out 0.9s both' }}
        >
          <div className="flex gap-6 flex-wrap justify-center">
            <RippleButton href="#tech-stack" className="cta-btn cta-secondary">
              <Workflow />
              Explore Our Stack
            </RippleButton>
            <RippleButton href="#contact" className="cta-btn cta-primary">
              <Rocket />
              Build With Us
            </RippleButton>
          </div>

          <div className="flex gap-8 mt-6 opacity-80 flex-wrap justify-center">
            <div
              className="text-center"
              style={{ animation: 'statPop 0.6s ease-out 1.2s both' }}
            >
              <span className="block text-3xl font-bold text-primary mb-1">
                <Counter target={10} />x
              </span>
              <span className="text-sm text-[rgba(255,255,255,0.7)]">
                Faster Delivery
              </span>
            </div>
            <div
              className="text-center"
              style={{ animation: 'statPop 0.6s ease-out 1.4s both' }}
            >
              <span className="block text-3xl font-bold text-primary mb-1">
                <Counter target={99.9} decimals={1} />%
              </span>
              <span className="text-sm text-[rgba(255,255,255,0.7)]">
                Uptime SLA
              </span>
            </div>
            <div
              className="text-center"
              style={{ animation: 'statPop 0.6s ease-out 1.6s both' }}
            >
              <span className="block text-3xl font-bold text-primary mb-1">
                24/7
              </span>
              <span className="text-sm text-[rgba(255,255,255,0.7)]">
                Support
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-[scrollBounce_2s_ease-in-out_infinite]">
        <span className="text-xs text-[rgba(255,255,255,0.8)]">
          Scroll to explore
        </span>
        <div className="w-5 h-5 border-r-2 border-b-2 border-[rgba(16,185,129,0.8)] transform rotate-45"></div>
      </div>
    </section>
  );
}
