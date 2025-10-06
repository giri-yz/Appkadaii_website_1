import React from 'react';

export function Footer() {
  const socialLinks = [
    { href: '#', icon: '📧' },
    { href: '#', icon: '💼' },
    { href: '#', icon: '🐦' },
    { href: '#', icon: '📘' },
  ];

  const serviceLinks = [
    { href: '/#services', label: 'Mobile App Development' },
    { href: '/#services', label: 'Web Applications' },
    { href: '/#services', label: 'AI Solutions' },
    { href: '/#services', label: 'Custom Software' },
    { href: '/#services', label: 'Consulting' },
  ];
  
  const companyLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '/#portfolio', label: 'Our Work' },
    { href: '/#process', label: 'Process' },
    { href: '/contact', label: 'Careers' },
    { href: '#', label: 'Blog' },
  ];

  const contactLinks = [
    { href: '/contact', label: 'Contact Us' },
    { href: 'mailto:hello@appkadaii.com', label: 'hello@appkadaii.com' },
    { href: 'tel:+1-555-0123', label: '+1 (555) 012-3456' },
    { href: '/book-a-call', label: 'Schedule a Call' },
    { href: '/contact', label: 'Support' },
  ];


  return (
    <footer className="bg-primary/5 border-t border-primary/20 pt-12 px-8 pb-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">App kadaii</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your ideal partner for transforming ideas into powerful applications.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-full text-primary no-underline transition-all duration-300 hover:bg-primary/20 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_hsla(var(--primary),0.3)]">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="text-muted-foreground no-underline transition-colors duration-300 hover:text-primary">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
               {companyLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="text-muted-foreground no-underline transition-colors duration-300 hover:text-primary">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="flex flex-col gap-2">
              {contactLinks.map((link, index) => (
                 <li key={index}><a href={link.href} className="text-muted-foreground no-underline transition-colors duration-300 hover:text-primary">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-8 text-center text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} App kadaii. All rights reserved. | Privacy Policy | Terms of Service</