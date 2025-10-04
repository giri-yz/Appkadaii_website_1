import React from 'react';
import { SectionHeading } from './section-heading';
import { Building, Award, Smile } from 'lucide-react';
import { Counter } from './counter';

const stats = [
  {
    icon: <Building className="w-10 h-10 text-primary" />,
    value: 5,
    label: 'Years in Business',
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    value: 150,
    label: 'Projects Completed',
  },
  {
    icon: <Smile className="w-10 h-10 text-primary" />,
    value: 100,
    label: 'Happy Clients',
  },
];

export function TestimonialsSection() {
  return (
    <section id="about" className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="Who We Are"
          subtitle="Trusted by startups and enterprises worldwide"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card text-center p-6 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[rgba(16,185,129,0.2)] to-[rgba(16,185,129,0.1)] border-2 border-[rgba(16,185,129,0.3)] rounded-2xl">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-primary">
                  <Counter target={stat.value} />+
                </p>
                <p className="text-sm text-[rgba(255,255,255,0.7)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
             <div
                className="sm:col-span-2 mission-card text-center p-6 bg-gradient-to-br from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] rounded-2xl border border-primary/50 backdrop-blur-lg"
              >
                <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                <p className="text-[rgba(255,255,255,0.9)] leading-relaxed">
                  To empower visionaries and businesses by transforming their ideas into powerful, scalable, and impactful digital realities.
                </p>
              </div>
          </div>

          {/* Right Column: Testimonial */}
          <div className="relative">
            <div className="testimonial p-8 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
              <p className="text-lg italic mb-6 text-[rgba(255,255,255,0.9)] leading-relaxed">
                "They transformed our complex AI requirements into an elegant
                solution that exceeded all expectations. The team's expertise
                and dedication are unmatched. Truly the best partner for
                bringing ambitious ideas to life."
              </p>
              <p className="font-semibold text-primary">Sarah Chen</p>
              <p className="text-sm text-[rgba(255,255,255,0.7)]">
                CTO, TechVision Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
