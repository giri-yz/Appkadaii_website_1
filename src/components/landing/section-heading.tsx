import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading text-center mb-12 opacity-0 translate-y-12">
      <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-4 section-title-gradient">{title}</h2>
      <p className="text-lg text-[rgba(255,255,255,0.8)] max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
