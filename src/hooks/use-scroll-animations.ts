'use client';
import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.service-card, .process-step, .portfolio-card, .testimonial, .extended-stat, .mid-cta, .tech-card, .faq-container');

    // Set initial state
    animatedElements.forEach(el => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(50px)';
        (el as HTMLElement).style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
          
          // Apply staggered delay for tech cards
          if (target.classList.contains('tech-card')) {
            const techCards = Array.from(document.querySelectorAll('.tech-card'));
            const cardIndex = techCards.indexOf(target);
            target.style.transitionDelay = `${cardIndex * 100}ms`;
          }
          
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for anchor links
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

    // Parallax effect on scroll
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
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
      parallaxCleanup();
    };
  }, []);
}
