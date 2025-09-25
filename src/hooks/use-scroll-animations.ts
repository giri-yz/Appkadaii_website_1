'use client';
import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const animatedElements = document.querySelectorAll(`
      .section-heading, 
      .service-card, 
      .process-step, 
      .portfolio-card, 
      .testimonial, 
      .extended-stat, 
      .mid-cta
    `);

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    const smoothScroll = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute('href');
        if (!targetId) return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = (document.querySelector('#header') as HTMLElement)?.offsetHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', smoothScroll as EventListener);
    });
    
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const bg = document.querySelector('.global-bg') as HTMLElement;
      if (bg) {
        bg.style.transform = `translateY(${scrolled * -0.3}px)`;
      }

      const scrollIndicator = document.querySelector('.scroll-indicator') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.opacity = `${Math.max(0, 1 - scrolled / 300)}`;
      }
    }

    window.addEventListener('scroll', handleParallax);


    return () => {
      observer.disconnect();
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll as EventListener);
      });
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
}
