'use client';
import { useEffect, useRef } from 'react';

export function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.children.length > 0) return; // Particles already created

    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 15 + 15}s`;
      container.appendChild(particle);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(16, 185, 129, 0.6);
            border-radius: 50%;
            animation-name: particleFloat;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    }

  }, []);

  return <div id="particles" ref={containerRef} className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none"></div>;
}
