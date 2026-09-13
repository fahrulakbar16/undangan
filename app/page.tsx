"use client";

import { useState, useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Quote } from "./components/Quote";
import { Couple } from "./components/Couple";
import { Events } from "./components/Events";
import { Distance, JustUs, DressCode, Closing } from "./components/PersonalSections";
import { Gift } from "./components/Gift";
import { Wishes } from "./components/Wishes";
import { FloatingNav } from "./components/FloatingNav";
import { Cover } from "./components/Cover";
import { MOCK_DATA } from "./data";
import { Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioStartApplied = useRef(false);

  const prepareAudioStart = () => {
    const audio = audioRef.current;
    if (!audio || audio.readyState < 1 || audioStartApplied.current) return;
    const start = MOCK_DATA.invitation_meta.music_start_seconds;
    audio.currentTime = start < audio.duration ? start : 0;
    audioStartApplied.current = true;
  };

  const handleOpen = () => setIsOpened(true);

  const playAudio = () => {
    // Start playback directly from the cover click, before any animation timers.
    const audio = audioRef.current;
    if (!audio) return;
    prepareAudioStart();
    void audio.play().catch((error: unknown) => {
      setIsPlaying(false);
      console.error("Audio play failed:", error);
    });
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      playAudio();
    } else {
      audio.pause();
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
      <Cover isOpened={isOpened} onOpen={handleOpen} onStartOpening={playAudio} onReveal={() => setHeroVisible(true)} />
      
      {/* Background Music */}
      {MOCK_DATA.invitation_meta?.music_url && (
        <audio
          ref={audioRef}
          preload="auto"
          src={MOCK_DATA.invitation_meta.music_url}
          onLoadedMetadata={prepareAudioStart}
          onEnded={() => {
            audioStartApplied.current = false;
            playAudio();
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setIsPlaying(false)}
        />
      )}

      {/* Audio Control Button */}
      {isOpened && MOCK_DATA.invitation_meta?.music_url && (
        <button
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 rounded-full bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[var(--color-olive)]/20 text-[var(--color-olive)] hover:bg-white hover:scale-110 transition-all duration-300"
          aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
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
          <Hero isOpened={heroVisible} />
        </div>
      )}
      
      {MOCK_DATA.quotes && MOCK_DATA.quotes.length > 0 && (
        <Quote />
      )}
      
      <Distance />
      <JustUs />

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
      
      <DressCode />
      <Wishes />
      <Gift />
      <Closing />

      {/* Global Elements */}
      <FloatingNav />
    </main>
  );
}
