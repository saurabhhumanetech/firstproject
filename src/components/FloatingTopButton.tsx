import React, { useState, useEffect } from 'react';
import { Heart, ChevronUp } from 'lucide-react';

export const FloatingTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Return to top ♡"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 40,
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: '#FFF0F6',
        border: '2px solid #FF7AA8',
        boxShadow: '0 6px 18px rgba(255, 122, 168, 0.35)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FF7AA8',
        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        backdropFilter: 'blur(6px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
        e.currentTarget.style.backgroundColor = '#FF7AA8';
        e.currentTarget.style.color = '#FFFFFF';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.backgroundColor = '#FFF0F6';
        e.currentTarget.style.color = '#FF7AA8';
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1 }}>
        <ChevronUp size={16} strokeWidth={2.8} />
        <Heart size={10} fill="currentColor" style={{ marginTop: '-2px' }} />
      </div>
    </button>
  );
};
