import React, { useState } from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { fireHeartConfetti } from '../utils/confetti';
import { playCelebrationSound, playSoftAwwSound } from '../utils/sound';

export const QuestionSection: React.FC = () => {
  const [hasSaidYes, setHasSaidYes] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleYes = () => {
    setHasSaidYes(true);
    playCelebrationSound();
    fireHeartConfetti();
  };

  const handleNo = () => {
    setNoClicked(true);
    playSoftAwwSound();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="question"
      style={{
        padding: '70px 0 50px',
        position: 'relative',
        backgroundColor: 'rgba(255, 241, 246, 0.65)',
      }}
    >
      <div className="container" style={{ maxWidth: '640px' }}>
        {/* Centered Cream Card */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#FFFDF9',
            border: '2.5px solid var(--border-pink)',
            borderRadius: '36px',
            padding: '40px 24px',
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center',
          }}
        >
          {/* Scrapbook Tape */}
          <div className="washi-tape washi-tape-top-center" style={{ width: '130px' }} />

          {/* Heading */}
          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.45rem',
              color: 'var(--accent-rose-dark)',
              fontWeight: 700,
              marginBottom: '6px',
            }}
          >
            okay, one last question… 🤭
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              color: 'var(--accent-berry)',
              marginBottom: '12px',
              letterSpacing: '-0.5px',
            }}
          >
            will you be my girlfriend? ♡
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              maxWidth: '460px',
              margin: '0 auto 24px',
              lineHeight: 1.5,
            }}
          >
            no pressure, pretty girl. I just wanted to ask you in my own little way 🫶
          </p>

          {/* If YES has NOT been clicked yet */}
          {!hasSaidYes ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              {/* Playful alert text when NO is clicked */}
              {noClicked && (
                <div
                  style={{
                    backgroundColor: '#FFE8F2',
                    border: '2px dashed var(--accent-rose)',
                    borderRadius: '20px',
                    padding: '14px 22px',
                    maxWidth: '480px',
                    animation: 'shakeAndPop 0.4s ease-out',
                    boxShadow: '0 4px 14px rgba(255, 122, 168, 0.25)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      color: 'var(--accent-berry)',
                      fontWeight: 800,
                      margin: 0,
                    }}
                  >
                    noo😭 u both deserve each other go select yess
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-handwriting)',
                      fontSize: '1.2rem',
                      color: 'var(--accent-rose-dark)',
                      fontWeight: 600,
                      margin: '4px 0 0 0',
                    }}
                  >
                    (the NO button is disabled now, there is only one right answer 🤭✨)
                  </p>
                </div>
              )}

              {/* Action Buttons: YES and NO */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '6px',
                }}
              >
                {/* YES Button */}
                <button
                  onClick={handleYes}
                  className="btn-pink"
                  style={{
                    fontSize: noClicked ? '1.4rem' : '1.25rem',
                    padding: noClicked ? '16px 48px' : '14px 42px',
                    minWidth: '160px',
                    boxShadow: noClicked
                      ? '0 10px 30px rgba(255, 122, 168, 0.6)'
                      : '0 8px 24px rgba(255, 122, 168, 0.45)',
                    transform: noClicked ? 'scale(1.08)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <span>YES ♡</span>
                  {noClicked && <Sparkles size={18} className="animate-sparkle" />}
                </button>

                {/* NO Button (Disables when clicked) */}
                <button
                  onClick={handleNo}
                  disabled={noClicked}
                  className="btn-soft"
                  style={{
                    fontSize: '1.15rem',
                    padding: '14px 34px',
                    minWidth: '130px',
                    color: noClicked ? '#BA9EA9' : 'var(--text-muted)',
                    backgroundColor: noClicked ? '#F5EBF0' : '#FFFDF9',
                    border: noClicked ? '1.5px dashed #D9C3CE' : '1.5px solid var(--border-pink)',
                    opacity: noClicked ? 0.55 : 1,
                    cursor: noClicked ? 'not-allowed' : 'pointer',
                    textDecoration: noClicked ? 'line-through' : 'none',
                    pointerEvents: noClicked ? 'none' : 'auto',
                    boxShadow: noClicked ? 'none' : 'var(--shadow-sm)',
                    transition: 'all 0.25s ease',
                  }}
                  title={noClicked ? 'Disabled! Go select YES ♡' : 'NO 🥺'}
                >
                  <span>NO 🥺</span>
                </button>
              </div>
            </div>
          ) : (
            /* YES Outcome */
            <div
              style={{
                animation: 'fadePopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFE3EE',
                  color: 'var(--accent-rose-dark)',
                  borderRadius: '50%',
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(255, 122, 168, 0.35)',
                }}
              >
                <Heart size={36} fill="#FF7AA8" color="#FF7AA8" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  color: 'var(--accent-berry)',
                  margin: 0,
                }}
              >
                WAITTT 😭💗 YOU SAID YES?!
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  color: 'var(--accent-rose-dark)',
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                okay, this just made Saurabh’s day ♡
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.35rem',
                  color: 'var(--text-main)',
                  maxWidth: '440px',
                  margin: '4px auto 14px',
                }}
              >
                someone’s going to be smiling at their phone for the rest of the day 🤭
              </p>

              {/* Navigation Actions */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'center',
                  marginTop: '6px',
                }}
              >
                <button onClick={scrollToGallery} className="btn-pink" style={{ fontSize: '0.95rem' }}>
                  <span>revisit your photos</span>
                  <Sparkles size={16} />
                </button>

                <button onClick={scrollToTop} className="btn-soft" style={{ fontSize: '0.95rem' }}>
                  <ArrowUp size={16} />
                  <span>return to top</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadePopIn {
          0% { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes shakeAndPop {
          0% { opacity: 0; transform: translateY(-10px) scale(0.9); }
          50% { opacity: 1; transform: translateY(2px) scale(1.03); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
};
