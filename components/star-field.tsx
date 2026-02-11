'use client';

import { useMemo } from 'react';

type Star = {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
};

export function StarField() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 100 }, (_, id) => ({
      id,
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-cosmic-blue/90 animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: '0 0 8px rgba(56, 189, 248, 0.75), 0 0 14px rgba(168, 85, 247, 0.45)',
          }}
        />
      ))}
    </div>
  );
}
