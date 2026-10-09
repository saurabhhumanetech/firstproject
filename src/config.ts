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
  audioUrl?: string; // Audio source URL for the pure frontend audio player
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
    title: "Beauty and a Beat",
    artist: "Justin Bieber",
    note: "Ariessgurlll's chosen song ✨",
    spotifyUrl: "https://open.spotify.com/search/Justin%20Bieber%20Beauty%20and%20a%20Beat",
    coverImage: "/assets/gallery-1.png",
    audioUrl: "/assets/her-song.mp4",
  },

  hisSong: {
    label: "My Song for Her",
    title: "Perfect",
    artist: "Ed Sheeran",
    note: "Saurabh's song for her ♡",
    spotifyUrl: "https://open.spotify.com/search/Ed%20Sheeran%20Perfect",
    coverImage: "/assets/heart-portrait.png",
    audioUrl: "/assets/my-song.mp4",
  },
};
