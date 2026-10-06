import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom' | 'none';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  className?: string;
  distance?: number; // px for translate
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  distance = 24,
}) => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold,
    delay,
    triggerOnce: true,
  });

  const getTransform = (): string => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'zoom':
        return 'scale3d(0.96, 0.96, 1)';
      case 'fade':
      case 'none':
      default:
        return 'none';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};
