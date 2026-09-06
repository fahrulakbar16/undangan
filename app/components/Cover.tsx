"use client";

import { useState, useEffect, useRef } from "react";
import { MOCK_DATA } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { LeafOrnament } from "./LeafOrnament";
import { ArrowRight } from "lucide-react";

interface CoverProps {
  isOpened: boolean;
  onOpen: () => void;
}

// Falling/floating petal dots/shapes
const PETALS = [
  { delay: 0, xPercent: 12, size: 8, duration: 9, rotate: 15 },
  { delay: 2.5, xPercent: 38, size: 10, duration: 11, rotate: -25 },
  { delay: 1, xPercent: 68, size: 7, duration: 10, rotate: 45 },
  { delay: 3, xPercent: 88, size: 9, duration: 12, rotate: -10 },
  { delay: 4.5, xPercent: 50, size: 8, duration: 9.5, rotate: 30 },
];

function Petal({ delay, xPercent, size, duration, rotate }: (typeof PETALS)[0]) {
  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={{
        width: size,
        height: size * 1.4,
        left: `${xPercent}%`,
        top: -20,
        borderRadius: "50% 0 50% 50%",
        background: "rgba(111, 116, 74, 0.18)",
      }}
      animate={{
        y: [0, 850],
        x: [-15, 15, -15],
        rotate: [rotate, rotate + 180],
        opacity: [0, 0.6, 0.6, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function Cover({ isOpened, onOpen }: CoverProps) {
  const { couple } = MOCK_DATA;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [guestName, setGuestName] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to");
      if (to) {
        setGuestName(to);
      }
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  const handlePlayVideo = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => {
        console.error("Video play error:", err);
        setTimeout(() => setIsVisible(false), 800);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 5.8) {
      setIsVisible(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVisible(false);
  };

  if (isOpened) return null;

  return (
    <AnimatePresence onExitComplete={onOpen}>
      {isVisible && (
        <motion.div
          key="cover-root"
          className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md z-[100] overflow-hidden flex flex-col items-center justify-center gap-3 py-6 px-6 shadow-2xl bg-[#FAF7F2] text-[var(--color-dark-olive)]"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Floating petals */}
          {mountedRef.current && PETALS.map((p, i) => <Petal key={i} {...p} />)}

          {/* ── BOTANICAL CORNER FLORAL ACCENTS ── */}
          <div className="absolute top-0 left-0 pointer-events-none z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/floral-corner-tl.png"
              alt=""
              className="w-36 h-auto object-contain opacity-80"
            />
          </div>
          <div className="absolute bottom-0 right-0 pointer-events-none z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/floral-corner-br.png"
              alt=""
              className="w-40 h-auto object-contain opacity-80"
            />
          </div>

          {/* Top Title Header - Hides when playing */}
          <motion.div
            className="relative z-20 flex flex-col items-center gap-0.5 text-center mt-4"
            animate={isPlaying ? { opacity: 0, y: -15 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LeafOrnament className="w-6 h-6 text-[var(--color-olive)] opacity-75 mb-0.5" />
            <p className="uppercase tracking-[0.25em] text-[9px] font-semibold text-[var(--color-olive)]">
              The Wedding Invitation
            </p>
            <p className="font-serif italic text-xl text-[var(--color-dark-olive)]">
              {couple.groom.first_name} &amp; {couple.bride.first_name}
            </p>
          </motion.div>

          {/* ── ENVELOPE VIDEO ── */}
          <div
            className="relative z-10 w-full max-w-[310px] flex items-center justify-center cursor-pointer overflow-hidden -mt-12 -mb-14"
            style={{
              mixBlendMode: "multiply",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 88%)",
              maskImage: "radial-gradient(ellipse at center, black 55%, transparent 88%)",
            }}
            onClick={handlePlayVideo}
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              ref={videoRef}
              src="/A_z.mp4"
              className="w-full h-auto block select-none pointer-events-auto"
              style={{ mixBlendMode: "multiply" }}
              playsInline
              muted
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
            />
          </div>

          {/* ── ACTION SECTION (Guest Name & Open Button) - Hides when playing ── */}
          <motion.div
            className="w-full flex flex-col items-center gap-2 relative z-30 -mt-28 mb-2"
            initial={{ opacity: 0, y: 15 }}
            animate={isPlaying ? { opacity: 0, y: 15, pointerEvents: "none" } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Guest Name */}
            {guestName && (
              <div className="flex flex-col items-center gap-0.5 text-center bg-[#FAF7F2]/90 backdrop-blur-xs py-1 px-4 rounded-full border border-[var(--color-olive)]/20 shadow-xs">
                <p className="uppercase tracking-[0.2em] text-[8.5px] text-[var(--color-olive)] opacity-80 font-medium">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <p className="font-serif italic text-base font-medium text-[var(--color-dark-olive)]">
                  {guestName}
                </p>
              </div>
            )}

            {/* "Buka Undangan ->" Pill Button */}
            <motion.button
              onClick={handlePlayVideo}
              disabled={isPlaying}
              className="px-7 py-2.5 rounded-full bg-[var(--color-olive)] text-[#FAF7F2] text-xs tracking-wider font-medium flex items-center justify-center gap-2 shadow-lg hover:bg-[var(--color-dark-olive)] transition-colors disabled:opacity-85"
              whileHover={!isPlaying ? { scale: 1.04 } : {}}
              whileTap={!isPlaying ? { scale: 0.96 } : {}}
            >
              <span>{isPlaying ? "Membuka Undangan..." : "Buka Undangan"}</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
