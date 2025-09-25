'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { RippleButton } from './ripple-button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      className={cn(
        'header fixed top-0 w-full z-[1000] transition-all duration-300',
        isScrolled ? 'scrolled' : ''
      )}
    >
      <div className="header-container max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
        <a href="#home" className="logo text-2xl font-bold text-primary">
          AppShop
        </a>

        <nav
          id="navMenu"
          className={cn(
            'nav-menu hidden md:flex items-center gap-8',
            isMenuOpen && 'active'
          )}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <RippleButton href="#contact" className="header-cta">
            Get Started
          </RippleButton>
        </div>

        <div
          id="mobileToggle"
          className={cn('mobile-menu-toggle md:hidden', isMenuOpen && 'active')}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
       {/* Mobile Menu */}
       <div className={cn('md:hidden', isMenuOpen ? 'block' : 'hidden')}>
          <nav
            className={cn(
              'nav-menu active absolute top-[65px] left-0 right-0 bg-[rgba(0,0,0,0.98)] backdrop-blur-[20px]',
              'flex flex-col items-center p-8 gap-4'
            )}
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
