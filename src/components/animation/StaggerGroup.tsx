import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface StaggerGroupProps {
  children: React.ReactNode;
  staggerDelay?: number; // ms between each child item
  baseDelay?: number; // ms before first child
  duration?: number; // ms animation duration
  className?: string;
  threshold?: number;
  direction?: 'up' | 'fade' | 'zoom';
}

export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  staggerDelay = 100,
  baseDelay = 0,
  duration = 500,
  className = '',
  threshold = 0.1,
  direction = 'up',
}) => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold,
    triggerOnce: true,
  });

  const getChildTransform = (): string => {
    if (direction === 'zoom') return 'scale3d(0.96, 0.96, 1)';
    if (direction === 'fade') return 'none';
    return 'translate3d(0, 20px, 0)';
  };

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const delay = baseDelay + index * staggerDelay;
        const style: React.CSSProperties = {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : getChildTransform(),
          transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          willChange: isVisible ? 'auto' : 'opacity, transform',
        };

        return <div style={style}>{child}</div>;
      })}
    </div>
  );
};
