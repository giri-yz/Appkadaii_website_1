import React from 'react';

export function Footer() {
  const companyLinks = [
    { href: '/#about', label: 'About Us' },
    { href: '/#portfolio', label: 'Our Work' },
    { href: '/#process', label: 'Process' },
    { href: '/careers', label: 'Careers' },
    { href: '#', label: 'Blog' },
  ];

  const contactLinks = [
    { href: '/contact', label: 'Contact Us' },
    { href: 'mailto:hello@appkadaii.in', label: 'hello@appkadaii.in' },
    { href: 'tel:+919952099936', label: '+91 99520 99936' },
    { href: 'tel:+919361718757', label: '+91 93617 18757' },
    { href: '/book-a-call', label: 'Schedule a Call' },
    { href: '/contact', label: 'Support' },
  ];


  return (
    <footer className="bg-primary/5 border-t border-primary/20 pt-12 px-8 pb-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="footer-section">
            <h3 className="text-primary text-lg font-semibold mb-4">App kadaii</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your ideal partner for transforming ideas into powerful applications.
            </p>
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
          <p>&copy; {new Date().getFullYear()} App kadaii. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
