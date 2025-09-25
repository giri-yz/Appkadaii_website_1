import React from 'react';
import { SectionHeading } from './section-heading';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-green-400 group-hover:scale-110">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'App Development',
    description: 'Build stunning mobile and web applications with modern frameworks. From concept to deployment, we handle the entire development lifecycle.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-green-400 group-hover:scale-110">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="12 22.08 12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence for your business. Custom AI models, machine learning pipelines, and intelligent automation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-green-400 group-hover:scale-110">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Hybrid Magic',
    description: 'Combine the best of both worlds with AI-powered applications. Smart features, predictive analytics, and intuitive user experiences.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[rgba(16,185,129,0.03)] border-t border-b border-[rgba(16,185,129,0.1)] py-16 px-8">
      <div className="container max-w-7xl mx-auto">
        <SectionHeading
          title="What We Offer"
          subtitle="From mobile apps to AI solutions, we deliver cutting-edge technology tailored to your vision"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group bg-[rgba(255,255,255,0.05)] border border-[rgba(16,185,129,0.2)] rounded-2xl p-8 text-center transition-all duration-300 backdrop-blur-lg relative overflow-hidden hover:-translate-y-2.5 hover:scale-105 hover:shadow-[0_20px_40px_rgba(16,185,129,0.2)] hover:border-primary">
               <div className="absolute inset-0 bg-gradient-to-br from-[rgba(16,185,129,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[rgba(16,185,129,0.2)] to-[rgba(16,185,129,0.1)] border-2 border-[rgba(16,185,129,0.3)] rounded-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(16,185,129,0.3)] group-hover:border-primary">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(16,185,129,0.1)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
              <p className="text-[rgba(255,255,255,0.8)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
