import React from 'react';
import { Heart, Sparkles, Camera, ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (src: string, title?: string, caption?: string) => void;
}

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  supportingText: string;
  tag: string;
  tilt: string;
  desktopLayout: 'image-left' | 'image-right';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const items: GalleryItem[] = [
    {
      id: 1,
      image: '/assets/gallery-1.png',
      caption: 'first of all… look at you 😭♡',
      supportingText: 'you have this playful little vibe that makes teasing you way too easy 🤭',
      tag: '01 · that smile',
      tilt: '-2deg',
      desktopLayout: 'image-left',
    },
    {
      id: 2,
      image: '/assets/gallery-2.png',
      caption: 'miss drama queen 🎀',
      supportingText: 'a little dramatic sometimes, but honestly, that’s part of your charm 😭😂',
      tag: '02 · food & drama',
      tilt: '2deg',
      desktopLayout: 'image-right',
    },
    {
      id: 3,
      image: '/assets/gallery-3.png',
      caption: 'and still… ♡',
      supportingText: 'anyways, I like you just the way you are 🤍',
      tag: '03 · simply you',
      tilt: '-1.5deg',
      desktopLayout: 'image-right', // Desktop: image on right, text on left as per specs
    },
  ];

  return (
    <section id="gallery" style={{ padding: '60px 0 40px', position: 'relative' }}>
      <div className="container">
        {/* Section Heading & Subheading */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
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
            <Camera size={15} color="#FF7AA8" />
            <span
              style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.25rem',
                color: 'var(--accent-berry)',
                fontWeight: 700,
              }}
            >
              photo scrapbook
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 4vw, 2.7rem)',
              color: 'var(--accent-berry)',
              marginBottom: '6px',
            }}
          >
            ariessgurlll._ ♡
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.45rem',
              color: 'var(--accent-rose-dark)',
              fontWeight: 600,
            }}
          >
            three little things I noticed about you
          </p>
        </div>

        {/* Gallery Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '38px' }}>
          {items.map((item) => {
            const isImageLeft = item.desktopLayout === 'image-left';

            return (
              <div
                key={item.id}
                className="gallery-card"
                style={{
                  backgroundColor: '#FFFDF9',
                  border: '2px solid var(--border-pink)',
                  borderRadius: '30px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Washi Tape Accent */}
                <div
                  className="washi-tape"
                  style={{
                    top: '-10px',
                    left: isImageLeft ? '30px' : 'auto',
                    right: isImageLeft ? 'auto' : '30px',
                    width: '90px',
                    transform: isImageLeft ? 'rotate(-4deg)' : 'rotate(4deg)',
                  }}
                />

                <div
                  className={`gallery-inner-grid ${
                    isImageLeft ? 'layout-image-left' : 'layout-image-right'
                  }`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    alignItems: 'center',
                    gap: '24px',
                  }}
                >
                  {/* Photo Polaroids Frame */}
                  <div
                    className="photo-frame-wrapper"
                    style={{
                      order: isImageLeft ? 1 : 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      className="polaroid-frame"
                      onClick={() => onOpenLightbox(item.image, item.caption, item.supportingText)}
                      style={{
                        position: 'relative',
                        backgroundColor: '#FFFFFF',
                        padding: '12px 12px 18px',
                        borderRadius: '20px',
                        boxShadow: '0 10px 24px rgba(212, 107, 148, 0.2)',
                        border: '1.5px solid #FAD2E1',
                        cursor: 'pointer',
                        transform: `rotate(${item.tilt})`,
                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s',
                        maxWidth: '280px',
                        width: '100%',
                      }}
                      title="Tap to see full photo ♡"
                    >
                      {/* Photo Container */}
                      <div
                        style={{
                          width: '100%',
                          height: '360px',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          backgroundColor: '#FFF0F5',
                          position: 'relative',
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.caption}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />

                        {/* Zoom hint badge on hover/tap */}
                        <div
                          className="zoom-hint"
                          style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.88)',
                            color: 'var(--accent-berry)',
                            borderRadius: '999px',
                            padding: '4px 8px',
                            fontSize: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 600,
                            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                          }}
                        >
                          <ZoomIn size={12} />
                          <span>view</span>
                        </div>
                      </div>

                      {/* Handwritten Polaroid mini caption */}
                      <div
                        style={{
                          marginTop: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0 4px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-handwriting)',
                            fontSize: '1.15rem',
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                          }}
                        >
                          {item.tag}
                        </span>
                        <Heart size={14} fill="#FF7AA8" color="#FF7AA8" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div
                    className="gallery-text-wrapper"
                    style={{
                      order: isImageLeft ? 2 : 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      textAlign: 'left',
                      padding: '8px 12px',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--accent-rose)',
                        marginBottom: '8px',
                      }}
                    >
                      <Sparkles size={16} />
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.8px',
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
                        color: 'var(--accent-berry)',
                        marginBottom: '10px',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.caption}
                    </h3>

                    <p
                      style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.6,
                        marginBottom: '14px',
                        maxWidth: '460px',
                      }}
                    >
                      {item.supportingText}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-handwriting)',
                        fontSize: '1.25rem',
                        color: 'var(--accent-rose-dark)',
                      }}
                    >
                      <span>— little memories Saurabh kept</span>
                      <Heart size={14} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .gallery-inner-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .gallery-inner-grid.layout-image-left .photo-frame-wrapper {
            order: 1 !important;
          }
          .gallery-inner-grid.layout-image-left .gallery-text-wrapper {
            order: 2 !important;
            padding-left: 20px !important;
          }
          .gallery-inner-grid.layout-image-right .photo-frame-wrapper {
            order: 2 !important;
          }
          .gallery-inner-grid.layout-image-right .gallery-text-wrapper {
            order: 1 !important;
            padding-right: 20px !important;
          }
        }
        .polaroid-frame:hover {
          transform: rotate(0deg) scale(1.04) !important;
          box-shadow: 0 16px 36px rgba(212, 107, 148, 0.3) !important;
        }
      `}</style>
    </section>
  );
};
