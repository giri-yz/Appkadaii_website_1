import React from 'react';
import { SectionHeading } from './section-heading';
import { Building, Award, Smile, Calendar, Rocket, Users } from 'lucide-react';
import { Counter } from './counter';

const stats = [
  {
    icon: <Calendar className="w-8 h-8 text-primary" />,
    value: 2024,
    label: 'Since 2024',
    description: 'Turning Ideas into Reality',
    isYear: true,
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    value: 5,
    label: 'Projects Brought to Life',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    value: 3,
    label: 'Clients (and Rising) Who Believe in Us',
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
              Appkadai isn’t just a development company — it’s a space where innovation meets craftsmanship. We aim to empower startups, students, and businesses with custom-built apps, AI solutions, and digital tools that blend performance, creativity, and human touch.
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
                    {stat.isYear ? stat.value : <Counter target={stat.value} />}
                  </p>
                  <p className="text-xs text-[rgba(255,255,255,0.7)] mt-1 h-10 flex items-center justify-center">
                    {stat.description || stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="testimonial p-8 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] backdrop-blur-lg">
              <p className="text-lg italic mb-6 text-[rgba(255,255,255,0.9)] leading-relaxed">
              “Thank you so much for your invaluable support on this project. You truly made the entire process much smoother and less stressful. I’m genuinely grateful for your help and will definitely recommend your services to my friends and colleagues as well.”
              </p>
              <p className="font-semibold text-primary">Hensly Anisha</p>
              <p className="text-sm text-[rgba(255,255,255,0.7)]">
              Renifler
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
