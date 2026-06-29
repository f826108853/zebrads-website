'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'rise' | 'left' | 'right' | 'mask';
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'rise',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === 'left'
      ? 'reveal reveal-left'
      : variant === 'right'
        ? 'reveal reveal-right'
        : variant === 'mask'
          ? 'reveal-mask'
          : 'reveal';

  const Tag = as as 'div';
  const style: CSSProperties = { animationDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClass}${inView ? ' in-view' : ''} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
