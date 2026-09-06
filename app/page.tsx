"use client";

import { useState, useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Quote } from "./components/Quote";
import { Couple } from "./components/Couple";
import { Events } from "./components/Events";
import { Story } from "./components/Story";
import { Gallery } from "./components/Gallery";
import { Gift } from "./components/Gift";
import { Wishes } from "./components/Wishes";
import { FloatingNav } from "./components/FloatingNav";
import { Cover } from "./components/Cover";
import { MOCK_DATA } from "./data";
import { Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => console.log("Audio play failed:", e));
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    // Prevent scrolling when cover is active
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  return (
    <main className="w-full flex flex-col bg-[var(--color-cream)] min-h-screen relative">
      <Cover isOpened={isOpened} onOpen={handleOpen} />
      
      {/* Background Music */}
      {MOCK_DATA.invitation_meta?.music_url && (
        <audio ref={audioRef} loop src={MOCK_DATA.invitation_meta.music_url} />
      )}

      {/* Audio Control Button */}
      {isOpened && MOCK_DATA.invitation_meta?.music_url && (
        <button
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 rounded-full bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[var(--color-olive)]/20 text-[var(--color-olive)] hover:bg-white hover:scale-110 transition-all duration-300"
          aria-label="Toggle Music"
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      )}

      {/* Sections with IDs for scrolling */}
      {MOCK_DATA.hero_section && (
        <div id="top">
          <Hero isOpened={isOpened} />
        </div>
      )}
      
      {MOCK_DATA.quotes && MOCK_DATA.quotes.length > 0 && (
        <Quote />
      )}
      
      {MOCK_DATA.couple && (
        <div id="couple">
          <Couple />
        </div>
      )}
      
      {MOCK_DATA.events && MOCK_DATA.events.length > 0 && (
        <div id="events">
          <Events />
        </div>
      )}
      
      {MOCK_DATA.story && MOCK_DATA.story.timeline && MOCK_DATA.story.timeline.length > 0 && (
        <Story />
      )}
      
      {MOCK_DATA.gallery && MOCK_DATA.gallery.images && MOCK_DATA.gallery.images.length > 0 && (
        <div id="gallery">
          <Gallery />
        </div>
      )}
      
      {MOCK_DATA.gift && MOCK_DATA.gift.bank_accounts && MOCK_DATA.gift.bank_accounts.length > 0 && (
        <Gift />
      )}
      
      {MOCK_DATA.wishes && (
        <Wishes />
      )}
      
      {/* Global Elements */}
      <FloatingNav />
    </main>
  );
}
