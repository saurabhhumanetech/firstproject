import React, { useMemo } from 'react';
import { Heart } from 'lucide-react';

export const BackgroundHearts: React.FC = () => {
  // Generate a fixed set of gentle floating hearts with varying sizes and speeds
  const hearts = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7.2 + 3) % 94}%`,
      size: 14 + (i % 4) * 8,
      duration: 14 + (i % 6) * 3,
      delay: -(i * 2.3),
      opacity: 0.12 + (i % 3) * 0.08,
    }));
  }, []);

  return (
    <div className="floating-hearts-bg" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="bg-heart-item"
          style={{
            left: h.left,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          <Heart size={h.size} fill="#FF7AA8" color="#FF7AA8" />
        </div>
      ))}
    </div>
  );
};
