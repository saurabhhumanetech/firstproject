import React, { useState } from 'react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';
import { playHeartSound } from '../utils/sound';

interface HeroSectionProps {
  onOpenLightbox?: (src: string, title?: string, caption?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLightbox }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isBeating, setIsBeating] = useState(false);

  const handleHeartClick = () => {
    setIsBeating(true);
    playHeartSound();
    setTimeout(() => {
      setIsRevealed(true);
      setIsBeating(false);
    }, 450);
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        paddingTop: '96px',
        paddingBottom: '32px',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: '780px' }}>
        {/* Handwritten Greeting */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FFF0F5',
            border: '1.5px solid var(--border-pink)',
            padding: '6px 18px',
            borderRadius: '999px',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '16px',
          }}
        >
          <Sparkles size={16} color="#FF7AA8" className="animate-sparkle" />
          <span
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.45rem',
              color: 'var(--accent-berry)',
              fontWeight: 700,
            }}
          >
            hiii, ariessgurlll._ ♡
          </span>
          <Sparkles size={16} color="#FF7AA8" className="animate-sparkle" />
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
            color: 'var(--accent-berry)',
            lineHeight: 1.2,
            marginBottom: '14px',
            letterSpacing: '-0.5px',
          }}
        >
          I made a little something for you 🤭
        </h1>

        {/* Supporting Text */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            margin: '0 auto 10px',
            lineHeight: 1.5,
          }}
        >
          because some people deserve their own little corner of the internet.
        </p>

        {/* Signature */}
        <p
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.4rem',
            color: 'var(--accent-rose-dark)',
            fontWeight: 600,
            marginBottom: '32px',
          }}
        >
          — made by Saurabh ♡
        </p>

        {/* Interactive Heart Center Area */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#FFFDF9',
            border: '2px solid var(--border-pink)',
            borderRadius: '32px',
            padding: '36px 24px',
            boxShadow: 'var(--shadow-md)',
            margin: '0 auto 28px',
            maxWidth: '480px',
          }}
        >
          {/* Decorative Washi Tape */}
          <div className="washi-tape washi-tape-top-center" />

          {/* Prompt caption above heart */}
          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.35rem',
              color: 'var(--accent-rose-dark)',
              marginBottom: '16px',
            }}
          >
            one tiny question…
          </p>

          {/* The Heart Reveal Button / Container */}
          {!isRevealed ? (
            <button
              onClick={handleHeartClick}
              aria-label="Tap to see who is in Saurabh's heart"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 auto',
                outline: 'none',
                padding: '10px',
              }}
              className={`heart-trigger ${isBeating ? 'animate-heart-beat' : 'animate-heart-pulse'}`}
            >
              <div
                style={{
                  position: 'relative',
                  width: '130px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Heart
                  size={120}
                  fill="url(#heartGradient)"
                  stroke="#FF5993"
                  strokeWidth={1.5}
                  style={{
                    filter: 'drop-shadow(0 8px 18px rgba(255, 122, 168, 0.45))',
                  }}
                />
                <svg width="0" height="0">
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFAEC9" />
                    <stop offset="50%" stopColor="#FF7AA8" />
                    <stop offset="100%" stopColor="#FA558E" />
                  </linearGradient>
                </svg>

                <div
                  style={{
                    position: 'absolute',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <Sparkles size={28} />
                </div>
              </div>

              {/* Text inside / directly beneath heart */}
              <div
                style={{
                  marginTop: '16px',
                  backgroundColor: '#FFF0F5',
                  border: '1.5px solid var(--border-pink)',
                  borderRadius: '999px',
                  padding: '10px 22px',
                  color: 'var(--accent-berry)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s',
                }}
              >
                <Heart size={16} fill="#FF7AA8" color="#FF7AA8" />
                <span>tap to see who’s in Saurabh’s heart ♡</span>
              </div>
            </button>
          ) : (
            /* Revealed State */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: 'revealSpring 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Scrapbook Framed Portrait */}
              <div
                style={{
                  position: 'relative',
                  width: '180px',
                  height: '240px',
                  borderRadius: '24px',
                  padding: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #F8CAD9',
                  boxShadow: '0 12px 28px rgba(212, 107, 148, 0.25)',
                  cursor: 'pointer',
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.3s ease',
                }}
                onClick={() =>
                  onOpenLightbox?.(
                    '/assets/heart-portrait.png',
                    'ariessgurlll._ in Saurabh’s heart ♡',
                    'obviously, it’s you only, gurl 🤭😩♡'
                  )
                }
                title="Tap to see photo larger"
              >
                {/* Mini corner tape */}
                <div
                  className="washi-tape"
                  style={{
                    top: '-8px',
                    right: '-10px',
                    width: '55px',
                    transform: 'rotate(25deg)',
                  }}
                />

                <img
                  src="/assets/heart-portrait.png"
                  alt="Ariessgurlll portrait"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '18px',
                    display: 'block',
                  }}
                />

                {/* Floating Heart Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-12px',
                    right: '-10px',
                    backgroundColor: '#FF7AA8',
                    color: '#FFF',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(255, 122, 168, 0.4)',
                  }}
                >
                  <Heart size={20} fill="#FFF" />
                </div>
              </div>

              {/* Reveal Text */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.45rem',
                  color: 'var(--accent-berry)',
                  marginTop: '22px',
                  marginBottom: '6px',
                }}
              >
                obviously, it’s you only, gurl 🤭😩♡
              </h3>

              {/* Playful sub-caption */}
              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.35rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  marginBottom: '18px',
                }}
              >
                did you really expect someone else? 😭
              </p>

              {/* Button to scroll to gallery */}
              <button
                onClick={scrollToGallery}
                className="btn-pink"
                style={{ fontSize: '0.95rem', padding: '10px 22px' }}
              >
                <span>let’s see what’s next</span>
                <ArrowDown size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes revealSpring {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .heart-trigger:hover div {
          background-color: #FFE5EE;
        }
      `}</style>
    </section>
  );
};
