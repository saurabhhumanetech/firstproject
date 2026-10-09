import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, ExternalLink, Heart, Sparkles, Disc, Volume2, VolumeX } from 'lucide-react';
import { siteConfig } from '../config';
import type { SongConfig } from '../config';

interface SongCardProps {
  song: SongConfig;
  isHerSong?: boolean;
  activeAudioId: string | null;
  setActiveAudioId: (id: string | null) => void;
}

const SingleSongCard: React.FC<SongCardProps> = ({
  song,
  isHerSong = false,
  activeAudioId,
  setActiveAudioId,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const cardId = isHerSong ? 'her-song' : 'his-song';

  // Pause if another card starts playing
  useEffect(() => {
    if (activeAudioId !== cardId && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [activeAudioId, cardId, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setActiveAudioId(null);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setActiveAudioId(cardId);
      }).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setActiveAudioId(null);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#FFFDF9',
        border: '1.5px solid var(--border-pink)',
        borderRadius: '26px',
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
      {/* Hidden HTML5 Audio Element (Only audio, absolutely no video) */}
      {song.audioUrl && (
        <audio
          ref={audioRef}
          src={song.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          preload="metadata"
        />
      )}

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
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-handwriting)',
            fontWeight: 700,
          }}
        >
          {song.note}
        </span>
      </div>

      {/* Album Artwork & Details Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Album Artwork / Vinyl */}
        <div
          style={{
            position: 'relative',
            width: '76px',
            height: '76px',
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#FFE9F2',
            border: '2px solid #F8CAD9',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(212, 107, 148, 0.16)',
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

          {/* Vinyl spin overlay when audio is playing */}
          {isPlaying && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(79, 37, 56, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'spinVinyl 3s linear infinite',
              }}
            >
              <Disc size={34} color="#FFF" />
            </div>
          )}
        </div>

        {/* Title, Artist, and Sound Waves */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
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
              fontSize: '0.96rem',
              color: 'var(--text-muted)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            {song.artist}
          </p>

          {/* Animated visualizer bars when playing */}
          {isPlaying ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '6px' }}>
              <span className="audio-bar bar-1" />
              <span className="audio-bar bar-2" />
              <span className="audio-bar bar-3" />
              <span className="audio-bar bar-4" />
              <span style={{ fontSize: '0.74rem', color: '#B3557A', fontWeight: 600, marginLeft: '4px' }}>
                playing audio...
              </span>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
              <Sparkles size={12} color="#FF7AA8" />
              <span style={{ fontSize: '0.75rem', color: '#9E5B74', fontWeight: 600 }}>
                tap play to listen ♡
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Audio Player Controls & Scrubber */}
      <div
        style={{
          backgroundColor: '#FFF5F9',
          border: '1px solid var(--border-pink)',
          borderRadius: '16px',
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {/* Scrubber Progress Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', minWidth: '32px' }}>
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            aria-label={`Audio progress for ${song.title}`}
            style={{
              flex: 1,
              height: '5px',
              borderRadius: '999px',
              accentColor: '#FF7AA8',
              cursor: 'pointer',
            }}
          />
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', minWidth: '32px', textAlign: 'right' }}>
            {formatTime(duration)}
          </span>
        </div>

        {/* Buttons Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
          {/* Main Play/Pause Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? `Pause ${song.title}` : `Play audio for ${song.title}`}
            style={{
              backgroundColor: isPlaying ? '#FF7AA8' : '#FFFFFF',
              color: isPlaying ? '#FFFFFF' : 'var(--accent-berry)',
              border: '1.5px solid var(--border-pink)',
              borderRadius: '999px',
              padding: '8px 18px',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 3px 10px rgba(212, 107, 148, 0.15)',
              transition: 'all 0.2s ease',
            }}
          >
            {isPlaying ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
            <span>{isPlaying ? 'Pause Audio' : 'Play Song'}</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Mute / Unmute Button */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-berry)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
              }}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={17} color="#9E5B74" /> : <Volume2 size={17} color="#FF7AA8" />}
            </button>

            {/* External Spotify Link */}
            <a
              href={song.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Open ${song.title} on Spotify`}
              aria-label={`Open ${song.title} on Spotify`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-pink)',
                color: 'var(--accent-berry)',
                borderRadius: '999px',
                padding: '7px 12px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                transition: 'all 0.2s ease',
              }}
            >
              <span>Spotify</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SongSection: React.FC = () => {
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

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
            Tap to play the actual song audio right here in your browser!
          </p>
        </div>

        {/* Side-by-side on desktop, stacked on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '20px',
          }}
        >
          <SingleSongCard
            song={siteConfig.herSong}
            isHerSong={true}
            activeAudioId={activeAudioId}
            setActiveAudioId={setActiveAudioId}
          />
          <SingleSongCard
            song={siteConfig.hisSong}
            isHerSong={false}
            activeAudioId={activeAudioId}
            setActiveAudioId={setActiveAudioId}
          />
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
        .audio-bar {
          display: inline-block;
          width: 3px;
          border-radius: 999px;
          background-color: #FF7AA8;
          animation: wave 1s ease-in-out infinite alternate;
        }
        .bar-1 { height: 6px; animation-delay: 0.1s; }
        .bar-2 { height: 14px; animation-delay: 0.3s; }
        .bar-3 { height: 10px; animation-delay: 0.2s; }
        .bar-4 { height: 8px; animation-delay: 0.4s; }
        @keyframes wave {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1.3); }
        }
      `}</style>
    </section>
  );
};
