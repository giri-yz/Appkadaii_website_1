'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Smartphone, BrainCircuit, Zap } from 'lucide-react';

// COMPONENTS

function Counter({
  target,
  duration = 2000,
  decimals = 0,
}: {
  target: number;
  duration?: number;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = target;
          const increment = end / (duration / 16);

          const updateCounter = () => {
            start += increment;
            if (start < end) {
              setCount(start);
              requestAnimationFrame(updateCounter);
            } else {
              setCount(end);
            }
          };
          updateCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

function RippleButton({
  href,
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const createRipple = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <>
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-effect 0.6s linear;
          background-color: rgba(16, 185, 129, 0.3);
        }
      `}</style>
      <a
        href={href}
        className={`relative overflow-hidden ${className}`}
        onClick={createRipple}
        {...props}
      >
        {children}
      </a>
    </>
  );
}

// SECTIONS

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#tech-stack', label: 'Stack' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      id="header"
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header-container">
        <a href="#home" className="logo">
          AppShop
        </a>

        <nav
          id="navMenu"
          className={`nav-menu ${isMenuOpen ? 'active' : ''}`}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <RippleButton href="#contact" className="header-cta hidden md:block">
          Get Started
        </RippleButton>

        <div
          id="mobileToggle"
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
       {/* Mobile Menu */}
       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav
            className={`nav-menu active absolute top-[65px] left-0 right-0 bg-[rgba(0,0,0,0.98)] backdrop-blur-[20px]
              flex flex-col items-center p-8 gap-4`}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            ))}
             <RippleButton href="#contact" className="header-cta mt-4">
              Get Started
            </RippleButton>
          </nav>
        </div>
    </header>
  );
}

function HeroSection() {
  const [keyword, setKeyword] = useState('apps');

  useEffect(() => {
    const keywords = ['apps', 'AI', 'both'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % keywords.length;
      setKeyword(keywords[i]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <h1 className="hero-title">
        Your Ideal Shop for <span className="highlight">Applications</span>
      </h1>
      <p className="hero-subtitle">
        We turn your ideas into{' '}
        <span className="keyword-container">
          <span className="keyword">{keyword}</span>
        </span>
        —fast.
      </p>
      <div className="cta-section">
        <div className="cta-buttons">
          <RippleButton href="#services" className="cta-btn cta-secondary">
            Explore Our Stack
          </RippleButton>
          <RippleButton href="#contact" className="cta-btn cta-primary">
            Build With Us
          </RippleButton>
        </div>
        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">
              <Counter target={10} />x
            </span>
            <span className="stat-label">Faster Delivery</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              <Counter target={99.9} decimals={1} />%
            </span>
            <span className="stat-label">Uptime SLA</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Smartphone className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-green-400 group-hover:scale-110" />,
    title: 'App Development',
    description:
      'Build stunning mobile and web applications with modern frameworks. From concept to deployment, we handle the entire development lifecycle.',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-green-400 group-hover:scale-110" />,
    title: 'AI Solutions',
    description:
      'Harness the power of artificial intelligence for your business. Custom AI models, machine learning pipelines, and intelligent automation.',
  },
  {
    icon: <Zap className="w-10 h-10 text-primary transition-all duration-300 group-hover:text-green-400 group-hover:scale-110" />,
    title: 'Hybrid Magic',
    description:
      'Combine the best of both worlds with AI-powered applications. Smart features, predictive analytics, and intuitive user experiences.',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="section-heading">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          From mobile apps to AI solutions, we deliver cutting-edge technology
          tailored to your vision
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-container">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              {service.title}
            </h3>
            <p className="text-[rgba(255,255,255,0.8)] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

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

function ProcessSection() {
  return(
    <section id="process" className="py-16 px-8">
      <div className="section-heading">
        <h2 className="section-title">How We Work</h2>
        <p className="section-subtitle">Our streamlined process ensures quality delivery from idea to launch</p>
      </div>

      <div className="relative max-w-3xl mx-auto mt-8">
        <div className="timeline-line hidden md:block"></div>
        
        {processSteps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
              <p className="text-[rgba(255,255,255,0.8)] leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
];

function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 px-8 bg-[rgba(16,185,129,0.03)]">
        <div className="section-heading">
          <h2 className="section-title">Our Technology Stack</h2>
          <p className="section-subtitle">We use the best and latest technologies to build high-quality, scalable solutions.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card"
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
              <p className="font-semibold text-center text-white mt-4">{tech.name}</p>
            </div>
          ))}
        </div>
    </section>
  );
}


const portfolioItems = [
  {
    id: 'fintech-app',
    title: 'FinTech Mobile App',
    description: 'AI-powered investment platform with real-time analytics and smart recommendations',
    imageUrl: 'https://images.unsplash.com/photo-1599202875854-23b7cd490ff4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmaW5hbmNlJTIwYXBwfGVufDB8fHx8MTc1ODc1MDMyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'finance app'
  },
  {
    id: 'ecommerce-ai',
    title: 'E-Commerce AI Engine',
    description: 'Machine learning recommendation system increasing conversion rates by 40%',
    imageUrl: 'https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxvbmxpbmUlMjBzaG9wcGluZ3xlbnwwfHx8fDE3NTg3MjQzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'online shopping'
  },
  {
    id: 'healthcare-dashboard',
    title: 'Healthcare Dashboard',
    description: 'Real-time patient monitoring with predictive health insights and alert systems',
    imageUrl: 'https://images.unsplash.com/photo-1758691463569-66de91d76452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxtZWRpY2FsJTIwY2hhcnR8ZW58MHx8fHwxNzU4NzI3MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'medical chart'
  },
  {
    id: 'smart-home-iot',
    title: 'Smart Home IoT',
    description: 'Integrated home automation with voice control and intelligent energy optimization',
    imageUrl: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzbWFydCUyMGhvbWV8ZW58MHx8fHwxNzU4NzA2OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'smart home'
  }
];

function PortfolioSection() {
  return(
    <section id="portfolio" className="py-16 px-8">
        <div className="section-heading">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Showcasing innovative solutions across industries</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-card"
            >
              <Image
                src={item.imageUrl}
                alt={item.description}
                data-ai-hint={item.imageHint}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="portfolio-overlay">
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
    </section>
  );
}

function MidCtaSection() {
  return(
    <section className="py-16 px-8">
        <div className="mid-cta">
          <h3 className="text-3xl font-semibold mb-4 text-white">Ready to Start Your Project?</h3>
          <p className="text-[rgba(255,255,255,0.8)] mb-8 leading-relaxed">
            Join hundreds of satisfied clients who've transformed their ideas into successful applications. Let's discuss your vision and make it reality.
          </p>
          <RippleButton href="#contact" className="cta-btn cta-primary">
            Start Your Project
          </RippleButton>
        </div>
    </section>
  );
}

function TestimonialsSection() {
  return(
    <section id="about" className="py-16 px-8">
        <div className="section-heading">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Trusted by startups and enterprises worldwide</p>
        </div>

        <div className="relative max-w-3xl mx-auto mt-8">
          <div className="testimonial">
            <p className="text-lg italic mb-6 text-[rgba(255,255,255,0.9)] leading-relaxed">
              "They transformed our complex AI requirements into an elegant solution that exceeded all expectations. The team's expertise and dedication are unmatched."
            </p>
            <p className="font-semibold text-primary">Sarah Chen</p>
            <p className="text-sm text-[rgba(255,255,255,0.7)]">CTO, TechVision Inc.</p>
          </div>
        </div>
    </section>
  );
}

const stats = [
  { target: 150, label: 'Apps Delivered' },
  { target: 85, label: 'AI Models Shipped' },
  { target: 320, label: 'Happy Clients' },
  { target: 98, label: 'Success Rate', suffix: '%' },
];

function StatsExtendedSection() {
  return(
    <section className="py-16 px-8">
        <div className="section-heading">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">Numbers that speak for our expertise and commitment</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="extended-stat">
              <span className="block text-4xl font-bold text-primary mb-2">
                <Counter target={stat.target} />{stat.suffix}
              </span>
              <span className="text-base text-[rgba(255,255,255,0.8)]">{stat.label}</span>
            </div>
          ))}
        </div>
    </section>
  );
}

const faqs = [
    {
      question: 'What is the typical timeline for a project?',
      answer:
        "A typical project timeline varies depending on the complexity and scope of the application. A simple MVP can take 4-6 weeks, while a more complex application with multiple integrations could take 3-6 months. We work with you to define a clear roadmap and timeline during the discovery phase.",
    },
    {
      question: 'How much does it cost to build an app?',
      answer:
        "The cost is also dependent on the project's scope and complexity. We offer flexible pricing models, including fixed-price projects and hourly rates. After our initial consultation and discovery phase, we can provide a detailed quote tailored to your specific needs.",
    },
    {
      question: 'What kind of post-launch support do you offer?',
      answer:
        'We offer various support and maintenance packages post-launch to ensure your application remains up-to-date, secure, and performs optimally. This can include bug fixes, feature enhancements, and server monitoring.',
    },
    {
      question: 'Can you integrate AI into my existing application?',
      answer:
        'Absolutely! We specialize in integrating AI and machine learning solutions into existing platforms to enhance functionality, automate processes, and provide data-driven insights. We can assess your current system and recommend the best approach.',
    },
  ];

function FaqSection() {
  return (
    <section id="faq" className="py-16 px-8">
        <div className="section-heading">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Have questions? We have answers. Here are some of the most common questions we get.</p>
        </div>
        <div className="mt-12 faq-container max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    </section>
  );
}

function FinalCtaSection() {
  return(
    <section id="contact" className="py-16 px-8">
        <div className="section-heading">
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle">Your vision, our expertise. The perfect combination for extraordinary results.</p>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex gap-6 flex-wrap justify-center">
            <RippleButton href="mailto:hello@appshop.com" className="cta-btn cta-secondary">
              Get In Touch
            </RippleButton>
            <RippleButton href="#" className="cta-btn cta-primary">
              Schedule a Call
            </RippleButton>
          </div>
        </div>
    </section>
  );
}

const socialLinks = [
  { href: '#', icon: '📧' },
  { href: '#', icon: '💼' },
  { href: '#', icon: '🐦' },
  { href: '#', icon: '📘' },
];

const serviceLinks = [
  { href: '#services', label: 'Mobile App Development' },
  { href: '#services', label: 'Web Applications' },
  { href: '#services', label: 'AI Solutions' },
  { href: '#services', label: 'Custom Software' },
  { href: '#services', label: 'Consulting' },
];

const companyLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Careers' },
  { href: '#contact', label: 'Blog' },
];

const contactLinks = [
  { href: '#contact', label: 'Contact Us' },
  { href: 'mailto:hello@appshop.com', label: 'hello@appshop.com' },
  { href: 'tel:+1-555-0123', label: '+1 (555) 012-3456' },
  { href: '#contact', label: 'Schedule a Call' },
  { href: '#contact', label: 'Support' },
];

function Footer() {
  return(
    <footer className="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">AppShop</h3>
            <p className="text-[rgba(255,255,255,0.8)] leading-relaxed mb-4">
              Your ideal partner for transforming ideas into powerful applications. We combine cutting-edge technology with creative solutions to deliver exceptional results.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="social-link">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="footer-link">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
               {companyLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="footer-link">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="flex flex-col gap-2">
              {contactLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="footer-link">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-[rgba(16,185,129,0.1)] pt-8 text-center text-[rgba(255,255,255,0.6)]">
          <p>&copy; {new Date().getFullYear()} AppShop. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.children.length > 0) return;

    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 15 + 15}s`;
      container.appendChild(particle);
    }
  }, []);

  return (
    <div
      id="particles"
      ref={containerRef}
      className="particles"
    ></div>
  );
}


function useScrollAnimations() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.section-heading, .service-card, .process-step, .tech-card, .portfolio-card, .mid-cta, .testimonial, .extended-stat, .faq-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('visible');
          
          if (target.classList.contains('tech-card')) {
            const techCards = Array.from(document.querySelectorAll('.tech-card'));
            const cardIndex = techCards.indexOf(target);
            target.style.transitionDelay = `${cardIndex * 100}ms`;
          }

          observer.unobserve(target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
    
    function setupSmoothScroll() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const href = this.getAttribute('href');
          if (!href) return;
          const target = document.querySelector(href);
          if (target) {
            const header = document.querySelector('.header') as HTMLElement;
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = (target as HTMLElement).offsetTop - headerHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }

    function setupParallaxEffect() {
      const handleScroll = () => {
        const scrolled = window.pageYOffset;
        
        const bgPattern = document.querySelector('.global-bg') as HTMLElement;
        if (bgPattern) {
          bgPattern.style.transform = `translateY(${scrolled * -0.3}px)`;
        }

        const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
        if (scrollIndicator) {
          scrollIndicator.style.opacity = `${Math.max(0, 1 - scrolled / 300)}`;
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    
    const parallaxCleanup = setupParallaxEffect();
    setupSmoothScroll();

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
      parallaxCleanup();
    };
  }, []);
}


// MAIN PAGE COMPONENT

export default function LandingPage() {
  useScrollAnimations();

  return (
    <>
      <Particles />
      <div className="global-bg"></div>

      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TechStackSection />
        <PortfolioSection />
        <MidCtaSection />
        <TestimonialsSection />
        <StatsExtendedSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
