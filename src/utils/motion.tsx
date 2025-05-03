// A lightweight implementation of motion animations
// since we're not including framer-motion as a dependency

import React, { useEffect, useRef, ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  className?: string;
}

export const motion = {
  div: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    whileInView, 
    viewport, 
    className = '', 
    ...props 
  }: MotionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      if (!ref.current || !whileInView) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (whileInView.opacity !== undefined) {
                entry.target.style.opacity = whileInView.opacity;
              }
              
              if (whileInView.y !== undefined) {
                entry.target.style.transform = `translateY(${whileInView.y}px)`;
              }
              
              if (viewport?.once) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: viewport?.margin || '0px',
        }
      );
      
      observer.observe(ref.current);
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [whileInView, viewport]);
    
    // Apply initial styles
    useEffect(() => {
      if (!ref.current || !initial) return;
      
      if (initial.opacity !== undefined) {
        ref.current.style.opacity = initial.opacity;
      }
      
      if (initial.y !== undefined) {
        ref.current.style.transform = `translateY(${initial.y}px)`;
      }
    }, [initial]);
    
    // CSS for transition
    const transitionCSS = transition ? {
      transitionDuration: `${transition.duration || 0.3}s`,
      transitionProperty: 'opacity, transform',
      transitionTimingFunction: 'ease-out',
    } : {};
    
    return (
      <div
        ref={ref}
        className={className}
        style={{
          ...transitionCSS,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
};