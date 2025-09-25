import React from 'react';
import { SectionHeading } from './section-heading';

const portfolioItems = [
    {
      title: 'FinTech Mobile App',
      description: 'AI-powered investment platform with real-time analytics and smart recommendations',
    },
    {
      title: 'E-Commerce AI Engine',
      description: 'Machine learning recommendation system increasing conversion rates by 40%',
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Real-time patient monitoring with predictive health insights and alert systems',
    },
    {
      title: 'Smart Home IoT',
      description: 'Integrated home automation with voice control and intelligent energy optimization',
    },
  ];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="Our Work"
          subtitle="Showcasing innovative solutions across industries"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card group bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden transition-all duration-300 relative h-64 cursor-pointer opacity-0 translate-y-12 hover:-translate-y-2.5 hover:scale-105 hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-800 opacity-10 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.9)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
