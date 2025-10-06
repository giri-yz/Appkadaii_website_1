'use client';
import React from 'react';
import { Counter } from './counter';
import { RippleButton } from './ripple-button';
import { Rocket, Workflow } from 'lucide-react';

export function HeroSection() {
  const keywords = ['apps', 'AI', 'both', 'apps'];

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
          className="text-[clamp(3.5rem,10vw,8rem)] font-bold tracking-[-0.02em] leading-[0.9] mb-6 text-foreground [text-shadow:0_4px_30px_rgba(0,0,0,0.1)]"
          style={{ animation: 'titleSlide 1s ease-out 0.3s both' }}
        >
          Your Ideal Shop for <span className="text-primary">Applications</span>
        </h1>
        <div
          className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-normal mb-8 text-muted-foreground leading-normal max-w-3xl mx-auto flex items-center justify-center gap-2"
          style={{ animation: 'subtitleFade 1.2s ease-out 0.6s both' }}
        >
          <span>We turn your ideas into</span>
          <div className="inline-block h-[1.5em] overflow-hidden align-middle">
            <div
              className="inline-block animate-[marquee-scroll_6s_ease-in-out_infinite] text-primary [text-shadow:0_0_20px_hsla(var(--primary),0.5)]"
            >
              {keywords.map((word, index) => (
                <div key={index} className="block h-[1.5em] text-center font-semibold">
                  {word}
                </div>
              ))}
            </div>
          </div>
          <span>—fast.</span>
        </div>

        <div
          className="flex flex-col items-center gap-6"
          style={{ animation: 'ctaRise 1.4s ease-out 0.9s both' }}
        >
          <div className="flex gap-6 flex-wrap justify-center">
            <RippleButton href="/#tech-stack" className="cta-btn cta-secondary">
              <Workflow />
              Explore Our Stack
            </RippleButton>
            <RippleButton href="/contact" className="cta-btn cta-primary">
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
                <Counter target={3} />x
              </span>
              <span className="text-sm text-muted-foreground">
                Faster
              </span>
            </div>
            <div
              className="text-center"
              style={{ animation: 'statPop 0.6s ease-out 1.4s both' }}
            >
              <span className="block text-3xl font-bold text-primary mb-1">
                <Counter target={3} />+
              </span>
              <span className="text-sm text-muted-foreground">
                Happy Clients
              </span>
            </div>
            <div
              className="text-center"
              style={{ animation: 'statPop 0.6s ease-out 1.6s both' }}
            >
              <span className="block text-3xl font-bold text-primary mb-1">
                24/7
              </span>
              <span className="text-sm text-muted-foreground">
                Support
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-[scrollBounce_2s_ease-in-out_infinite]">
        <span className="text-xs text-muted-foreground">
          Scroll to explore
        </span>
        <div className="w-5 h-5 border-r-2 border-b-2 border-primary/80 transform rotate-45"></div>
      </div>
    </section>
  );
}