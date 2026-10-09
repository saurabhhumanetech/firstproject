/**
 * Configuration for Ariessgurlll & Saurabh's Romantic Scrapbook Website
 * 
 * Edit this file to customize song details, Instagram URLs, or custom notes easily!
 */

export interface SongConfig {
  title: string;
  artist: string;
  label: string; // e.g., "Her Song" / "My Song"
  note: string;
  coverImage?: string;
  spotifyUrl: string;
  audioUrl?: string; // Optional direct audio URL for in-app preview
}

export interface SiteConfig {
  herName: string;
  herHandle: string;
  hisName: string;
  hisHandle: string;
  herInstagramUrl: string;
  hisInstagramUrl: string;
  
  // Songs
  herSong: SongConfig;
  hisSong: SongConfig;
}

export const siteConfig: SiteConfig = {
  herName: "ariessgurlll._",
  herHandle: "ariessgurlll._",
  hisName: "Saurabh",
  hisHandle: "_frame.theoryy",
  herInstagramUrl: "https://www.instagram.com/ariessgurlll._/",
  hisInstagramUrl: "https://www.instagram.com/_frame.theoryy?rpxt=MXU3OWNxdzVjbXpiMw==",

  herSong: {
    label: "Her Song",
    title: "mirrorball",
    artist: "Taylor Swift",
    note: "Featured on her stories ✨",
    spotifyUrl: "https://open.spotify.com/search/Taylor%20Swift%20mirrorball",
    coverImage: "/assets/gallery-1.png",
  },

  hisSong: {
    label: "My Song for Her",
    title: "Lover",
    artist: "Taylor Swift",
    note: "Dedicated with warmth ♡",
    spotifyUrl: "https://open.spotify.com/search/Taylor%20Swift%20Lover",
    coverImage: "/assets/heart-portrait.png",
  },
};
