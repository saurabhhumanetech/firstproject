import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundHearts } from './components/BackgroundHearts';
import { HeroSection } from './components/HeroSection';
import { SongSection } from './components/SongSection';
import { GallerySection } from './components/GallerySection';
import { MomentSection } from './components/MomentSection';
import { QuestionSection } from './components/QuestionSection';
import { NoteSection } from './components/NoteSection';
import { FooterSection } from './components/FooterSection';
import { FloatingTopButton } from './components/FloatingTopButton';
import { ImageLightboxModal } from './components/ImageLightboxModal';

export function App() {
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title?: string;
    caption?: string;
  }>({
    isOpen: false,
    imageSrc: '',
  });

  const handleOpenLightbox = (src: string, title?: string, caption?: string) => {
    setLightboxData({
      isOpen: true,
      imageSrc: src,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative min-h-screen text-[#4F2538] flex flex-col selection:bg-[#FFD1E3]">
      {/* Gentle Floating Hearts Background */}
      <BackgroundHearts />

      {/* Sticky Cute Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1, flex: 1 }}>
        {/* Section 1: Home & Interactive Heart Reveal */}
        <HeroSection onOpenLightbox={handleOpenLightbox} />

        {/* Two-Song Section (Near the top of the page) */}
        <SongSection />

        {/* Section 2: Her Photo Gallery Scrapbook */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* Section 3: One Little Moment (Marathi Confession Chat) */}
        <MomentSection onOpenLightbox={handleOpenLightbox} />

        {/* Section 4: The Question / Proposal */}
        <QuestionSection />

        {/* Section 5: A Little Note for Her */}
        <NoteSection />
      </main>

      {/* Section 6: Footer with Instagram handles */}
      <FooterSection />

      {/* Floating Return to Top Button */}
      <FloatingTopButton />

      {/* Image Lightbox Modal */}
      <ImageLightboxModal
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightboxData.imageSrc}
        title={lightboxData.title}
        caption={lightboxData.caption}
      />
    </div>
  );
}

export default App;
