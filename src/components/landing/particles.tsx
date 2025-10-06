'use client';
import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear existing particles if theme changes
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const particleCount = 60;
    const isLight = theme === 'light';
    
    // Define colors based on theme
    const particleColor = isLight ? 'rgba(0, 0, 0, 0.6)' : 'rgba(16, 185, 129, 0.6)';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 15 + 15}s`;
      particle.style.background = particleColor;
      container.appendChild(particle);
    }
    
    const styleId = 'particle-style';
    let style = document.getElementById(styleId) as HTMLStyleElement;
    if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
    }

    style.textContent = `
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            animation-name: particleFloat;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
    `;

  }, [theme]); // Rerun when theme changes

  return <div id="particles" ref={containerRef} className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none"></div>;
}
