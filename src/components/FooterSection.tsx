import React from 'react';
import { Heart, Sparkles, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config';

const InstagramIcon: React.FC<{ size?: number; color?: string }> = ({ size = 18, color = '#FF7AA8' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const FooterSection: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#FFEBF3',
        borderTop: '2px solid var(--border-pink)',
        padding: '48px 0 36px',
        position: 'relative',
        textAlign: 'center',
        marginTop: '30px',
      }}
    >
      <div className="container" style={{ maxWidth: '640px' }}>
        {/* Heart Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px',
          }}
        >
          <div style={{ height: '1.5px', width: '60px', backgroundColor: '#F8CAD9' }} />
          <Heart size={20} fill="#FF7AA8" color="#FF7AA8" />
          <div style={{ height: '1.5px', width: '60px', backgroundColor: '#F8CAD9' }} />
        </div>

        {/* Dedication Text */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            color: 'var(--accent-berry)',
            marginBottom: '4px',
          }}
        >
          made with ♡ for {siteConfig.herHandle}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-handwriting)',
            fontSize: '1.4rem',
            color: 'var(--accent-rose-dark)',
            fontWeight: 700,
            marginBottom: '22px',
          }}
        >
          by {siteConfig.hisName}
        </p>

        {/* Instagram Buttons Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '24px',
          }}
        >
          {/* Ariessgurlll's Instagram Button */}
          <a
            href={siteConfig.herInstagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ariessgurlll's Instagram Profile (opens in new tab)"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--accent-berry)',
              border: '1.5px solid var(--border-pink)',
              borderRadius: '999px',
              padding: '10px 20px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(212, 107, 148, 0.12)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFF0F5';
              e.currentTarget.style.borderColor = 'var(--accent-rose)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = 'var(--border-pink)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <InstagramIcon size={18} color="#FF7AA8" />
            <span>@{siteConfig.herHandle}</span>
            <ExternalLink size={13} color="var(--text-muted)" />
          </a>

          {/* Saurabh's Instagram Button */}
          <a
            href={siteConfig.hisInstagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Saurabh's Instagram Profile (opens in new tab)"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--accent-berry)',
              border: '1.5px solid var(--border-pink)',
              borderRadius: '999px',
              padding: '10px 20px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(212, 107, 148, 0.12)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFF0F5';
              e.currentTarget.style.borderColor = 'var(--accent-rose)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = 'var(--border-pink)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <InstagramIcon size={18} color="#FF7AA8" />
            <span>@{siteConfig.hisHandle}</span>
            <ExternalLink size={13} color="var(--text-muted)" />
          </a>
        </div>

        {/* Finishing Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <Sparkles size={14} color="#FF7AA8" />
          <p
            style={{
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.3rem',
              color: 'var(--text-muted)',
              margin: 0,
            }}
          >
            a little corner of the internet, just for you ♡
          </p>
          <Sparkles size={14} color="#FF7AA8" />
        </div>
      </div>
    </footer>
  );
};
