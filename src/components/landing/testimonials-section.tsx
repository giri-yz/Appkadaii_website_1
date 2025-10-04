import React from 'react';
import { SectionHeading } from './section-heading';
import { Building, Award, Smile } from 'lucide-react';
import { Counter } from './counter';

const stats = [
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    value: 5,
    label: 'Years in Business',
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    value: 150,
    label: 'Projects Completed',
  },
  {
    icon: <Smile className="w-8 h-8 text-primary" />,
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text and Mission */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Driven by Passion, Defined by Excellence
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] leading-relaxed">
                App kadaii was founded on the principle that great ideas deserve brilliant execution. We are a team of expert engineers, designers, and strategists dedicated to crafting digital solutions that are not only powerful and scalable but also beautiful and intuitive. We thrive on challenges and are committed to our clients' success.
              </p>
            </div>
            <div className="mission-card text-left p-6 bg-gradient-to-br from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] rounded-2xl border border-primary/50 backdrop-blur-lg">
              <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
              <p className="text-[rgba(255,255,255,0.9)] leading-relaxed">
                To empower visionaries and businesses by transforming their ideas into impactful digital realities that drive growth and inspire users.
              </p>
            </div>
          </div>

          {/* Right Column: Stats and Testimonial */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card text-center p-4 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(16,185,129,0.2)]"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] rounded-xl">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-primary">
                    <Counter target={stat.value} />+
                  </p>
                  <p className="text-xs text-[rgba(255,255,255,0.7)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="testimonial p-8 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
              <p className="text-lg italic mb-6 text-[rgba(255,255,255,0.9)] leading-relaxed">
                "They transformed our complex AI requirements into an elegant solution that exceeded all expectations. Their expertise is unmatched."
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
