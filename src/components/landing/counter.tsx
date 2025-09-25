'use client';
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  target: number;
  duration?: number;
  decimals?: number;
}

export function Counter({ target, duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          const increment = end / (duration / 16);

          const updateCounter = () => {
            start += increment;
            if (start < end) {
              setCount(start);
              requestAnimationFrame(updateCounter);
            } else {
              setCount(end);
            }
          };
          updateCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}
