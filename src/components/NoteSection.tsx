import React from 'react';
import { Heart, Feather } from 'lucide-react';

export const NoteSection: React.FC = () => {
  return (
    <section id="note" style={{ padding: '60px 0 40px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '680px' }}>
        {/* Section Heading Tag */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FFF0F5',
              padding: '4px 14px',
              borderRadius: '999px',
              border: '1.5px solid var(--border-pink)',
              marginBottom: '10px',
            }}
          >
            <Feather size={15} color="#FF7AA8" />
            <span
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.25rem',
                color: 'var(--accent-berry)',
                fontWeight: 700,
              }}
            >
              straight from the heart
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 4vw, 2.6rem)',
              color: 'var(--accent-berry)',
            }}
          >
            a tiny note for you ♡
          </h2>
        </div>

        {/* Paper Letter Card with Scrapbook Texture & Tape */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#FFFDF7',
            backgroundImage:
              'radial-gradient(#F7D6E4 0.75px, transparent 0.75px), radial-gradient(#F7D6E4 0.75px, #FFFDF7 0.75px)',
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px',
            border: '2px solid #FAD2E1',
            borderRadius: '28px',
            padding: '44px 28px 36px',
            boxShadow: 'var(--shadow-md)',
            margin: '0 auto',
          }}
        >
          {/* Top Washi Tape */}
          <div className="washi-tape washi-tape-top-center" style={{ width: '140px', top: '-12px' }} />

          {/* Letter Content */}
          <div
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: 'clamp(1.35rem, 3.2vw, 1.6rem)',
              color: '#4A2333',
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--accent-berry)' }}>
              hey, pretty girl 🤍
            </p>

            <p style={{ margin: 0 }}>
              just a little reminder to take care of yourself, okay?
            </p>

            <p style={{ margin: 0 }}>
              stay healthy, drink more water, eat properly, and get enough rest. don't forget to take breaks when things get stressful, and don't be too hard on yourself.
            </p>

            <p style={{ margin: 0 }}>
              I hope life gives you lots of reasons to smile, little moments that make you happy, and people who treat you with the kindness you deserve.
            </p>

            <p style={{ margin: 0 }}>
              keep being your cute, playful self. and please stay hydrated, miss girl 😭💧
            </p>

            <p style={{ margin: 0 }}>
              take care of yourself, okay? ♡
            </p>

            {/* Signature & Animated Beating Heart */}
            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px dashed #F8CAD9',
                paddingTop: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.65rem',
                  fontWeight: 700,
                  color: 'var(--accent-rose-dark)',
                }}
              >
                — Saurabh 🤭
              </span>

              {/* Tiny animated beating heart */}
              <div
                className="animate-heart-pulse"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#FFEBF3',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  border: '1px solid #F8CAD9',
                }}
              >
                <Heart size={18} fill="#FF7AA8" color="#FF7AA8" />
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.82rem',
                    color: 'var(--accent-berry)',
                    fontWeight: 700,
                  }}
                >
                  always rooting for you
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
