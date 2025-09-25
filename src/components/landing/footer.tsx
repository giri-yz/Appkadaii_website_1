import React from 'react';

export function Footer() {
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


  return (
    <footer className="bg-[rgba(16,185,129,0.05)] border-t border-[rgba(16,185,129,0.2)] pt-12 px-8 pb-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">AppShop</h3>
            <p className="text-[rgba(255,255,255,0.8)] leading-relaxed mb-4">
              Your ideal partner for transforming ideas into powerful applications. We combine cutting-edge technology with creative solutions to deliver exceptional results.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="inline-flex items-center justify-center w-10 h-10 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] rounded-full text-primary no-underline transition-all duration-300 hover:bg-[rgba(16,185,129,0.2)] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(16,185,129,0.3)]">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-300 hover:text-primary">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
               {companyLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-300 hover:text-primary">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="flex flex-col gap-2">
              {contactLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="text-[rgba(255,255,255,0.7)] no-underline transition-colors duration-300 hover:text-primary">{link.label}</a></li>
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
