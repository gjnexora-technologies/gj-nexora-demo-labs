import { useEffect, useState, useRef } from 'react';

export interface MouseParallaxOptions {
  intensity?: number; // Scaling factor for movement
  disabled?: boolean;
}

/**
 * Lightweight mouse parallax hook that smoothly interpolates coordinate offsets.
 * Automatically disabled on mobile/touch screens and when reduced motion is requested.
 */
export function useMouseParallax(options: MouseParallaxOptions = {}) {
  const { intensity = 15, disabled = false } = options;
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const targetOffset = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (disabled) return;
    if (typeof window === 'undefined') return;

    // Disable on mobile/touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    if (isTouch || isReduced || isMobile) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetOffset.current = {
        x: ((e.clientX - centerX) / centerX) * intensity,
        y: ((e.clientY - centerY) / centerY) * intensity,
      };
    };

    const updatePosition = () => {
      setOffset((prev) => {
        const dx = targetOffset.current.x - prev.x;
        const dy = targetOffset.current.y - prev.y;
        // Smooth lerp (linear interpolation)
        return {
          x: prev.x + dx * 0.08,
          y: prev.y + dy * 0.08,
        };
      });
      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [intensity, disabled]);

  return offset;
}

/**
 * Lightweight scroll parallax offset calculator for background layers.
 */
export function useScrollParallax(speed: number = 0.1) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY * speed);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return scrollY;
}
