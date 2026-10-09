import React from 'react';
import { Heart, Sparkles, MessageCircle, ZoomIn } from 'lucide-react';

interface MomentSectionProps {
  onOpenLightbox: (src: string, title?: string, caption?: string) => void;
}

export const MomentSection: React.FC<MomentSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="moment" style={{ padding: '60px 0 40px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        {/* Section Heading & Subheading */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
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
            <MessageCircle size={15} color="#FF7AA8" />
            <span
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.25rem',
                color: 'var(--accent-berry)',
                fontWeight: 700,
              }}
            >
              saved in memory
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.85rem, 4vw, 2.6rem)',
              color: 'var(--accent-berry)',
              marginBottom: '8px',
            }}
          >
            a little moment I wanted to keep ♡
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            some words are a little easier to say when you mean them 🤭
          </p>
        </div>

        {/* Marathi Quote Highlight Banner */}
        <div
          style={{
            backgroundColor: '#FFF0F7',
            border: '2px dashed var(--border-pink)',
            borderRadius: '24px',
            padding: '18px 24px',
            margin: '0 auto 28px',
            maxWidth: '520px',
            textAlign: 'center',
            boxShadow: 'var(--shadow-sm)',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
            <Sparkles size={16} color="#FF7AA8" />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)',
                color: 'var(--accent-berry)',
                fontWeight: 700,
              }}
            >
              “मला तू खूप आवडते 🤭”
            </span>
            <Sparkles size={16} color="#FF7AA8" />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              margin: 0,
            }}
          >
            (and you had to go Google it right away 😭👀)
          </p>
        </div>

        {/* Styled Phone Frame for Screenshot */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#FFFDF9',
            border: '2px solid var(--border-pink)',
            borderRadius: '32px',
            padding: '24px 20px',
            boxShadow: 'var(--shadow-md)',
            maxWidth: '540px',
            margin: '0 auto',
          }}
        >
          {/* Top Washi Tape */}
          <div className="washi-tape washi-tape-top-center" style={{ width: '120px' }} />

          {/* Phone Frame Device Wrapper */}
          <div
            onClick={() =>
              onOpenLightbox(
                '/assets/chat-moment.jpg',
                'One Little Moment ♡',
                '“मला तू खूप आवडते 🤭”'
              )
            }
            style={{
              position: 'relative',
              backgroundColor: '#0F0F14',
              borderRadius: '24px',
              padding: '12px 12px 16px',
              boxShadow: '0 14px 30px rgba(0, 0, 0, 0.25)',
              border: '4px solid #FAD2E1',
              cursor: 'pointer',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            className="phone-container"
            title="Tap to view conversation in full detail"
          >
            {/* Phone Speaker Notch */}
            <div
              style={{
                width: '60px',
                height: '5px',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                borderRadius: '999px',
                margin: '0 auto 10px',
              }}
            />

            {/* Conversation Screenshot */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#000000',
              }}
            >
              <img
                src="/assets/chat-moment.jpg"
                alt="Conversation screenshot: मला तू खूप आवडते"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '14px',
                }}
              />
            </div>

            {/* Zoom hint badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '22px',
                right: '22px',
                backgroundColor: 'rgba(255, 122, 168, 0.92)',
                color: '#FFFFFF',
                borderRadius: '999px',
                padding: '5px 12px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
              }}
            >
              <ZoomIn size={14} />
              <span>tap to zoom</span>
            </div>
          </div>

          {/* Sticky Note handwritten annotation */}
          <div
            style={{
              marginTop: '20px',
              backgroundColor: '#FFF7EC',
              border: '1px solid #FFE4B5',
              borderRadius: '16px',
              padding: '12px 18px',
              boxShadow: '0 4px 12px rgba(220, 180, 140, 0.15)',
              transform: 'rotate(0.8deg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                backgroundColor: '#FFE0ED',
                color: 'var(--accent-rose-dark)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Heart size={16} fill="currentColor" />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.25rem',
                color: '#6E452B',
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              The way you said "I don't understand" and then asked "really? u like me?" still makes me smile every single time 🥺♡
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .phone-container:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 18px 40px rgba(212, 107, 148, 0.35) !important;
        }
      `}</style>
    </section>
  );
};
