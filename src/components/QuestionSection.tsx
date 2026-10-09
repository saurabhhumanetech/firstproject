import React, { useState } from 'react';
import { Heart, Sparkles, ArrowUp, RefreshCw } from 'lucide-react';
import { fireHeartConfetti } from '../utils/confetti';
import { playCelebrationSound, playSoftAwwSound } from '../utils/sound';

export const QuestionSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'yes' | 'no'>('idle');
  const [noCount, setNoCount] = useState(0);

  const handleYes = () => {
    setStatus('yes');
    playCelebrationSound();
    fireHeartConfetti();
  };

  const handleNo = () => {
    setStatus('no');
    setNoCount((prev) => prev + 1);
    playSoftAwwSound();
  };

  const handleReset = () => {
    setStatus('idle');
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
              margin: '0 auto 28px',
              lineHeight: 1.5,
            }}
          >
            no pressure, pretty girl. I just wanted to ask you in my own little way 🫶
          </p>

          {/* Interaction States */}
          {status === 'idle' && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              {/* YES Button */}
              <button
                onClick={handleYes}
                className="btn-pink"
                style={{
                  fontSize: '1.25rem',
                  padding: '14px 42px',
                  minWidth: '150px',
                  boxShadow: '0 8px 24px rgba(255, 122, 168, 0.45)',
                }}
              >
                <span>YES ♡</span>
              </button>

              {/* NO Button */}
              <button
                onClick={handleNo}
                className="btn-soft"
                style={{
                  fontSize: '1.15rem',
                  padding: '14px 34px',
                  minWidth: '130px',
                  color: 'var(--text-muted)',
                  border: '1.5px solid var(--border-pink)',
                }}
              >
                <span>NO 🥺</span>
              </button>
            </div>
          )}

          {/* YES Outcome */}
          {status === 'yes' && (
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

          {/* NO Outcome */}
          {status === 'no' && (
            <div
              style={{
                animation: 'fadeInSlow 0.4s ease-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFF0F5',
                  color: 'var(--text-muted)',
                  borderRadius: '50%',
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Heart size={30} color="#FF7AA8" />
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  color: 'var(--accent-berry)',
                  fontWeight: 700,
                  maxWidth: '420px',
                  margin: 0,
                }}
              >
                aww 🥺 that’s okay too. thank you for being honest with me ♡
              </p>

              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.25rem',
                  color: 'var(--text-muted)',
                  margin: 0,
                }}
              >
                {noCount > 1
                  ? `(attempt #${noCount} at clicking no? Saurabh is still waiting right here patiently 🤭)`
                  : '(no pressure ever! but if you accidentally misclicked, Saurabh is still right here 🤭)'}
              </p>

              {/* Keep option functional - let her change her choice or revisit */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  justifyContent: 'center',
                  marginTop: '12px',
                }}
              >
                <button onClick={handleYes} className="btn-pink" style={{ fontSize: '1rem', padding: '10px 26px' }}>
                  <span>Wait, actually YES ♡</span>
                </button>

                <button onClick={handleReset} className="btn-soft" style={{ fontSize: '0.9rem', padding: '10px 18px' }}>
                  <RefreshCw size={14} />
                  <span>Choose again</span>
                </button>

                <button onClick={scrollToTop} className="btn-soft" style={{ fontSize: '0.9rem', padding: '10px 18px' }}>
                  <ArrowUp size={14} />
                  <span>Return home</span>
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
        @keyframes fadeInSlow {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
