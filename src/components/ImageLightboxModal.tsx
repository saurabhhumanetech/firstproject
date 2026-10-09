import React, { useEffect } from 'react';
import { X, Heart, Sparkles } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
  caption?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(79, 37, 56, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeInLightbox 0.25s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '92vw',
          maxHeight: '92vh',
          backgroundColor: '#FFFDF9',
          borderRadius: '24px',
          padding: '16px 16px 20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
          border: '2px solid #F8CAD9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi tape decoration */}
        <div className="washi-tape washi-tape-top-center" style={{ width: '130px', top: '-14px' }} />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close photo"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 10,
            background: '#FFE0ED',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--accent-berry)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#FFF1F6',
            maxHeight: '72vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={imageSrc}
            alt={title || 'Photograph of ariessgurlll._'}
            style={{
              maxWidth: '100%',
              maxHeight: '72vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '14px',
            }}
          />
        </div>

        {/* Caption */}
        {(title || caption) && (
          <div
            style={{
              marginTop: '12px',
              textAlign: 'center',
              maxWidth: '420px',
            }}
          >
            {title && (
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  color: 'var(--accent-berry)',
                  marginBottom: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <span>{title}</span>
                <Heart size={16} fill="#FF7AA8" color="#FF7AA8" />
              </h3>
            )}
            {caption && (
              <p
                style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: '1.25rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.3,
                }}
              >
                {caption}
              </p>
            )}
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
          <Sparkles size={13} color="#FF7AA8" />
          <span style={{ fontSize: '0.78rem', color: '#B36D88', fontWeight: 600 }}>ariessgurlll._ scrapbook memory</span>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLightbox {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
