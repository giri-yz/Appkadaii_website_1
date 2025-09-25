import React from 'react';
import { SectionHeading } from './section-heading';
import { Counter } from './counter';

const stats = [
  { target: 150, label: 'Apps Delivered' },
  { target: 85, label: 'AI Models Shipped' },
  { target: 320, label: 'Happy Clients' },
  { target: 98, label: 'Success Rate', suffix: '%' },
];

export function StatsExtendedSection() {
  return (
    <section className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="Our Impact"
          subtitle="Numbers that speak for our expertise and commitment"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="extended-stat text-center p-6 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] backdrop-blur-lg transition-all duration-300 hover:bg-[rgba(16,185,129,0.1)] hover:-translate-y-1">
              <span className="block text-4xl font-bold text-primary mb-2">
                <Counter target={stat.target} />{stat.suffix}
              </span>
              <span className="text-base text-[rgba(255,255,255,0.8)]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
