'use client';
import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('visible');
          if (target.classList.contains('tech-card')) {
            target.style.transitionDelay = `${index * 50}ms`;
          }
          
          // Trigger counter animation
          const counters = target.querySelectorAll('.counter');
          counters.forEach(counter => {
            const el = counter as HTMLElement;
            if (!el.classList.contains('counted')) {
              animateCounter(el);
              el.classList.add('counted');
            }
          });
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(`
        .section-heading, 
        .service-card, 
        .process-step, 
        .portfolio-card, 
        .testimonial, 
        .extended-stat, 
        .mid-cta,
        .tech-card,
        .faq-container
    `);
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Counter animation function
    function animateCounter(counter: HTMLElement) {
      const target = parseInt(counter.dataset.target || '0');
      const duration = 2000;
      let start = 0;
      const stepTime = 16;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      const updateCounter = () => {
        start += increment;
        if (start < target) {
          counter.textContent = Math.floor(start).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };
      updateCounter();
    }

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
