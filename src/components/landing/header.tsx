'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      id="header"
      className={cn(
        'fixed top-0 w-full z-[1000] transition-all duration-300',
        isScrolled
          ? 'bg-[rgba(0,0,0,0.98)] shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
          : 'bg-[rgba(0,0,0,0.95)]',
        'backdrop-blur-[20px] border-b border-[rgba(16,185,129,0.1)]'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4 md:px-4">
        <a href="#home" className="text-2xl font-bold text-primary transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
          AppShop
        </a>

        <nav
          className={cn(
            'flex-col md:flex-row md:flex md:items-center md:gap-8',
            'fixed top-[70px] left-0 right-0 p-8 md:p-0 md:static',
            'bg-[rgba(0,0,0,0.98)] md:bg-transparent backdrop-blur-[20px] md:backdrop-blur-none',
            'transition-all duration-300 md:transform-none md:opacity-100',
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          )}
        >
          {navLinks.map((link) => (
             <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-white no-underline font-medium relative transition-all duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-green-400 after:transition-all after:duration-300 after:transform after:-translate-x-1/2 hover:after:w-full block py-2 md:py-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:block bg-gradient-to-r from-primary to-green-800 text-white py-2 px-6 rounded-full no-underline font-semibold transition-all duration-300 border-2 border-transparent hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(16,185,129,0.3)] hover:border-green-400">
          Get Started
        </a>

        <div
          id="mobileToggle"
          className="flex-col cursor-pointer gap-1 md:hidden flex"
          onClick={toggleMenu}
        >
          <span className={cn('w-6 h-0.5 bg-primary rounded-sm transition-all duration-300', isMenuOpen && 'transform rotate-45 translate-y-1.5')}></span>
          <span className={cn('w-6 h-0.5 bg-primary rounded-sm transition-all duration-300', isMenuOpen && 'opacity-0')}></span>
          <span className={cn('w-6 h-0.5 bg-primary rounded-sm transition-all duration-300', isMenuOpen && 'transform -rotate-45 -translate-y-1.5')}></span>
        </div>
      </div>
    </header>
  );
}
