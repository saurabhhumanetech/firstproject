import React, { useState } from 'react';
import { Music, Play, Square, ExternalLink, Heart, Sparkles, Disc } from 'lucide-react';
import { siteConfig } from '../config';
import type { SongConfig } from '../config';
import { playMelodyPreview, stopMelody } from '../utils/sound';

interface SongCardProps {
  song: SongConfig;
  isHerSong?: boolean;
}

const SingleSongCard: React.FC<SongCardProps> = ({ song, isHerSong = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePreview = () => {
    if (isPlaying) {
      stopMelody();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      playMelodyPreview(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#FFFDF9',
        border: '1.5px solid var(--border-pink)',
        borderRadius: '24px',
        padding: '24px',
        boxShadow: 'var(--shadow-md)',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flex: 1,
      }}
      className="song-card"
    >
      {/* Decorative Washi Tape */}
      <div
        className="washi-tape"
        style={{
          top: '-10px',
          left: isHerSong ? '20px' : 'auto',
          right: isHerSong ? 'auto' : '20px',
          width: '80px',
          transform: isHerSong ? 'rotate(-6deg)' : 'rotate(5deg)',
        }}
      />

      {/* Header Tag */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: isHerSong ? '#FFE3EE' : '#FFF0F5',
            color: 'var(--accent-berry)',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
          }}
        >
          {isHerSong ? <Heart size={14} fill="#FF7AA8" color="#FF7AA8" /> : <Music size={14} color="#FF7AA8" />}
          <span>{song.label}</span>
        </div>

        <span
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-handwriting)',
            fontWeight: 600,
          }}
        >
          {song.note}
        </span>
      </div>

      {/* Album Artwork & Details Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Album Art / Vinyl Graphic */}
        <div
          style={{
            position: 'relative',
            width: '74px',
            height: '74px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#FFE9F2',
            border: '2px solid #F8CAD9',
            flexShrink: 0,
            boxShadow: '0 4px 10px rgba(212, 107, 148, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {song.coverImage ? (
            <img
              src={song.coverImage}
              alt={`${song.title} artwork`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '14px',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #FFE4EF, #FFB3CE)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#873D5B',
              }}
            >
              <Music size={28} />
            </div>
          )}

          {/* Vinyl spin overlay when playing */}
          {isPlaying && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(79, 37, 56, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'spinVinyl 3s linear infinite',
              }}
            >
              <Disc size={32} color="#FFF" />
            </div>
          )}
        </div>

        {/* Title & Artist */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              color: 'var(--accent-berry)',
              margin: '0 0 2px 0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {song.title}
          </h4>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
              margin: 0,
            }}
          >
            {song.artist}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            <Sparkles size={12} color="#FF7AA8" />
            <span style={{ fontSize: '0.75rem', color: '#9E5B74' }}>
              {isHerSong ? "Ariessgurlll's vibe" : "Saurabh's pick"}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
        {/* In-app Melody Preview */}
        <button
          onClick={handleTogglePreview}
          aria-label={isPlaying ? `Stop preview of ${song.title}` : `Play sweet chime melody for ${song.title}`}
          style={{
            flex: 1,
            backgroundColor: isPlaying ? '#FF7AA8' : '#FFF0F5',
            color: isPlaying ? '#FFFFFF' : 'var(--accent-berry)',
            border: '1.5px solid var(--border-pink)',
            borderRadius: '999px',
            padding: '9px 14px',
            fontSize: '0.88rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
          }}
        >
          {isPlaying ? <Square size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
          <span>{isPlaying ? 'Pause Melody' : 'Play Chime Melody'}</span>
        </button>

        {/* External Spotify / Search Link */}
        <a
          href={song.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Open ${song.title} on Spotify`}
          aria-label={`Open ${song.title} on Spotify`}
          style={{
            backgroundColor: '#FFFDF9',
            border: '1.5px solid var(--border-pink)',
            color: 'var(--accent-berry)',
            borderRadius: '999px',
            padding: '9px 14px',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFEAF2';
            e.currentTarget.style.borderColor = 'var(--accent-rose)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFDF9';
            e.currentTarget.style.borderColor = 'var(--border-pink)';
          }}
        >
          <span>Listen</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
};

export const SongSection: React.FC = () => {
  return (
    <section id="songs" style={{ padding: '36px 0 20px', position: 'relative' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.35rem',
              color: 'var(--accent-rose-dark)',
              marginBottom: '2px',
            }}
          >
            <span>our little soundtrack</span>
            <Music size={18} />
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              color: 'var(--accent-berry)',
              margin: '0 0 6px 0',
            }}
          >
            Two songs that make us smile ♡
          </h3>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            One from her favorite stories, and one dedicated to her. Tap to play the gentle chime melody or open in Spotify!
          </p>
        </div>

        {/* Side-by-side on desktop, stacked on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          <SingleSongCard song={siteConfig.herSong} isHerSong={true} />
          <SingleSongCard song={siteConfig.hisSong} isHerSong={false} />
        </div>
      </div>

      <style>{`
        @keyframes spinVinyl {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .song-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }
      `}</style>
    </section>
  );
};
