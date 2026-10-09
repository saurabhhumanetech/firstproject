import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { toggleMute, getIsMuted } from '../utils/sound';

interface NavbarProps {
  onSoundChange?: (muted: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSoundChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(getIsMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSoundToggle = () => {
    const newMuted = toggleMute();
    setMuted(newMuted);
    onSoundChange?.(newMuted);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Songs', href: '#songs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Moment', href: '#moment' },
    { name: 'The Question', href: '#question' },
    { name: 'A Note', href: '#note' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Dimmed & Blurred Backdrop Overlay Layer to prevent background text overlap */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 48,
            backgroundColor: 'rgba(79, 37, 56, 0.45)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            animation: 'fadeInBackdrop 0.2s ease-out',
          }}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF5F9]/95 backdrop-blur-md shadow-sm border-b border-[#F8CAD9]/60 py-2.5'
            : 'bg-transparent py-4'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(255, 245, 249, 0.95)' : 'rgba(255, 241, 246, 0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(248, 202, 217, 0.6)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo / Dedication */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: 'var(--accent-berry)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.15rem',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--accent-rose)' }}>
              <Heart size={20} fill="#FF7AA8" color="#FF7AA8" />
            </span>
            <span>ariessgurlll._</span>
            <span
              style={{
                fontSize: '0.75rem',
                background: '#FFE0ED',
                color: 'var(--accent-berry)',
                padding: '2px 8px',
                borderRadius: '999px',
                fontWeight: 600,
                marginLeft: '4px',
              }}
            >
              for you ♡
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '24px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  transition: 'color 0.2s ease',
                  padding: '6px 10px',
                  borderRadius: '8px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-rose)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
              >
                {link.name}
              </a>
            ))}

            {/* Sound Mute Toggle */}
            <button
              onClick={handleSoundToggle}
              aria-label={muted ? 'Unmute romantic chimes' : 'Mute romantic chimes'}
              title={muted ? 'Unmute sounds' : 'Mute sounds'}
              style={{
                background: '#FFF0F5',
                border: '1px solid var(--border-pink)',
                borderRadius: '999px',
                padding: '7px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--accent-berry)',
                fontSize: '0.82rem',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                transition: 'all 0.2s',
              }}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} color="#FF7AA8" />}
              <span>{muted ? 'Muted' : 'Chimes On'}</span>
            </button>
          </nav>

          {/* Mobile Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-actions">
            <button
              onClick={handleSoundToggle}
              aria-label={muted ? 'Unmute sound' : 'Mute sound'}
              style={{
                background: '#FFF0F5',
                border: '1px solid var(--border-pink)',
                borderRadius: '999px',
                padding: '6px 10px',
                cursor: 'pointer',
                color: 'var(--accent-berry)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} color="#FF7AA8" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              style={{
                background: '#FFF0F5',
                border: '1px solid var(--border-pink)',
                borderRadius: '12px',
                padding: '6px 10px',
                cursor: 'pointer',
                color: 'var(--accent-berry)',
                display: 'flex',
                alignItems: 'center',
              }}
              className="hamburger-btn"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Collapsible Dropdown with Solid Background & High Z-Index Layer */}
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '12px',
              right: '12px',
              backgroundColor: '#FFFDF9',
              borderRadius: '24px',
              boxShadow: '0 20px 45px rgba(79, 37, 56, 0.25), 0 4px 15px rgba(255, 122, 168, 0.2)',
              border: '2px solid var(--border-pink)',
              padding: '18px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginTop: '10px',
              animation: 'fadeInMenu 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 55,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '10px',
                borderBottom: '1px dashed var(--border-pink)',
                marginBottom: '4px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="#FF7AA8" />
                <span
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--accent-berry)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                  }}
                >
                  ariessgurlll._ menu
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-handwriting)',
                  color: 'var(--accent-rose-dark)',
                  fontWeight: 700,
                }}
              >
                saurabh's corner ♡
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '11px 14px',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFF5F9',
                  border: '1px solid rgba(248, 202, 217, 0.5)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFE5F0';
                  e.currentTarget.style.borderColor = 'var(--accent-rose)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFF5F9';
                  e.currentTarget.style.borderColor = 'rgba(248, 202, 217, 0.5)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <span>{link.name}</span>
                <Heart size={15} fill="#FF7AA8" color="#FF7AA8" />
              </a>
            ))}
          </div>
        )}

        <style>{`
          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
            }
            .hamburger-btn {
              display: none !important;
            }
          }
          @keyframes fadeInMenu {
            from { opacity: 0; transform: translateY(-10px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fadeInBackdrop {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </header>
    </>
  );
};
