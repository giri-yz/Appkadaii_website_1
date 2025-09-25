import React from 'react';
import { SectionHeading } from './section-heading';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function PortfolioSection() {
  const portfolioItems = PlaceHolderImages;
  return (
    <section id="portfolio" className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="Our Work"
          subtitle="Showcasing innovative solutions across industries"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-card group bg-card rounded-2xl overflow-hidden transition-all duration-300 relative h-64 cursor-pointer hover:-translate-y-2.5 hover:scale-105 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)]"
            >
              <Image
                src={item.imageUrl}
                alt={item.description}
                data-ai-hint={item.imageHint}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-[rgba(255,255,255,0.9)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
