'use client';
import React, { MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface RippleButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function RippleButton({ href, className, children, ...props }: RippleButtonProps) {
  const createRipple = (event: MouseEvent<HTMLAnchorElement>) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <>
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-effect 0.6s linear;
          background-color: rgba(16, 185, 129, 0.3);
        }
      `}</style>
      <a href={href} className={cn('relative overflow-hidden', className)} onClick={createRipple} {...props}>
        {children}
      </a>
    </>
  );
}
