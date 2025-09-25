import React from 'react';
import { SectionHeading } from './section-heading';

const processSteps = [
    {
      number: 1,
      title: 'Idea Discovery',
      description: 'We dive deep into your vision, understanding requirements, target audience, and business goals to create a comprehensive project roadmap.',
    },
    {
      number: 2,
      title: 'Prototype & Design',
      description: 'Rapid prototyping with interactive mockups and user experience design. Get a tangible feel of your product before development begins.',
    },
    {
      number: 3,
      title: 'Build & Develop',
      description: 'Agile development with regular updates and feedback loops. Clean code, robust architecture, and cutting-edge technologies.',
    },
    {
      number: 4,
      title: 'Ship & Deploy',
      description: 'Seamless deployment with comprehensive testing, performance optimization, and launch support across all platforms.',
    },
  ];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="How We Work"
          subtitle="Our streamlined process ensures quality delivery from idea to launch"
        />

        <div className="relative max-w-3xl mx-auto mt-8">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2 hidden md:block"></div>
          
          {processSteps.map((step, index) => (
            <div key={index} className="process-step relative flex items-center mb-8 md:mb-4 opacity-0 md:[&:nth-child(even)]:flex-row-reverse">
              <div className="md:flex-1">
                <div className="step-content p-6 bg-[rgba(255,255,255,0.05)] rounded-2xl border border-[rgba(16,185,129,0.2)] md:mx-8 backdrop-blur-lg transition-all duration-300 hover:bg-[rgba(16,185,129,0.1)] hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
                  <p className="text-[rgba(255,255,255,0.8)] leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-br from-primary to-green-800 items-center justify-center font-bold text-lg shadow-[0_5px_15px_rgba(16,185,129,0.3)] z-10 shrink-0">
                {step.number}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
