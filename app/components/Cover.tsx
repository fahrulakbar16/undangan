"use client";


import { useState, useEffect, useRef } from "react";
import { MOCK_DATA } from "../data";
import { motion, AnimatePresence } from "framer-motion";

// ── THEME COLORS (sesuai palette di attachment) ──────────────────────────────
const T = {
  cream:     "#ECE9E2",
  beige:     "#E1D7C4",
  sage:      "#CBD1A1",
  olive:     "#6F744A",
  darkOlive: "#515442",
};

interface CoverProps {
  isOpened: boolean;
  onOpen: () => void;
}

type Phase = "cover" | "envelope" | "opening" | "letter";

// ── PARTICLE: soft sage petal dots floating up ───────────────────────────────
function Particle({ delay, xPercent, size, duration }: {
  delay: number; xPercent: number; size: number; duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size,
        left: `${xPercent}%`, bottom: -12,
        background: `radial-gradient(circle, rgba(111,116,74,0.35) 0%, rgba(111,116,74,0) 70%)`,
      }}
      animate={{ y: [0, -900], opacity: [0, 0.55, 0.55, 0], scale: [0.4, 1, 1, 0.2] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}


// ── ELEGANT DIVIDER: olive lines with diamond ────────────────────────────────
function ElegantDivider({ accentColor = T.olive, opacity = 0.45 }: { accentColor?: string; opacity?: number }) {
  const col = accentColor;
  const alpha = opacity;
  const gradR = `linear-gradient(to right, transparent, ${col}${Math.round(alpha * 255).toString(16).padStart(2,"0")})`;
  const gradL = `linear-gradient(to left, transparent, ${col}${Math.round(alpha * 255).toString(16).padStart(2,"0")})`;
  return (
    <div className="flex items-center gap-3 w-full max-w-[180px]">
      <div className="flex-1 h-px" style={{ background: gradR }} />
      <svg width="8" height="8" viewBox="0 0 8 8">
        <rect x="0.5" y="0.5" width="7" height="7" fill={col} fillOpacity={alpha + 0.1} transform="rotate(45 4 4)" />
      </svg>
      <div className="flex-1 h-px" style={{ background: gradL }} />
    </div>
  );
}

// ── ENVELOPE SCENE ───────────────────────────────────────────────────────────
function EnvelopeScene({ phase, groomName, brideName, formattedDate, onOpen }: {
  phase: Phase; groomName: string; brideName: string; formattedDate: string; onOpen: () => void;
}) {
  const isOpening = phase === "opening" || phase === "letter";
  const showLetter = phase === "letter";
  const W = 300; const H = 200;

  return (
    <div
      onClick={phase === "envelope" ? onOpen : undefined}
      className={`relative flex flex-col items-center justify-center transition-all duration-300 ${
        phase === "envelope" ? "cursor-pointer hover:scale-[1.03] active:scale-[0.98]" : ""
      }`}
      style={{ perspective: "900px", perspectiveOrigin: "50% 50%" }}
    >
      {/* ── LETTER / CARD ── */}
      <motion.div
        className="absolute"
        style={{ width: W - 24, zIndex: 5, bottom: H * 0.18, left: 12, transformOrigin: "bottom center" }}
        initial={{ y: 0 }}
        animate={showLetter ? { y: -(H * 0.88) } : { y: 0 }}
        transition={{ duration: 0.9, ease: [0.32, 0, 0.08, 1], delay: showLetter ? 0.15 : 0 }}
      >
        <div
          className="relative rounded-sm overflow-hidden flex flex-col items-center justify-center gap-2"
          style={{
            height: H * 0.88,
            background: `linear-gradient(160deg, ${T.cream} 0%, ${T.beige} 100%)`,
            border: `1px solid rgba(111,116,74,0.3)`,
            boxShadow: `0 8px 32px rgba(81,84,66,0.2), 0 2px 8px rgba(81,84,66,0.12)`,
            paddingTop: 16, paddingBottom: 16,
          }}
        >
          {/* Olive inner border */}
          <div className="absolute inset-2 pointer-events-none" style={{ border: `0.75px solid rgba(111,116,74,0.25)`, borderRadius: 2 }} />
          {/* Card content */}
          <motion.div
            className="flex flex-col items-center gap-2 px-6"
            initial={{ opacity: 0 }}
            animate={showLetter ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: showLetter ? 0.55 : 0 }}
          >
            <p className="uppercase font-light" style={{ fontSize: "0.48rem", color: T.olive, letterSpacing: "0.38em" }}>
              Undangan Pernikahan
            </p>
            <div className="flex flex-col items-center gap-0.5">
              <p className="font-serif italic" style={{ fontSize: "1.6rem", color: T.darkOlive, lineHeight: 1.1, textAlign: "center" }}>
                {groomName}
              </p>
              <p className="font-serif italic" style={{ fontSize: "0.9rem", color: T.olive, lineHeight: 1 }}>
                &amp;
              </p>
              <p className="font-serif italic" style={{ fontSize: "1.6rem", color: T.darkOlive, lineHeight: 1.1, textAlign: "center" }}>
                {brideName}
              </p>
            </div>
            <ElegantDivider />
            <p className="uppercase font-light" style={{ fontSize: "0.5rem", color: `${T.olive}99`, letterSpacing: "0.2em" }}>
              {formattedDate}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ── ENVELOPE BODY ── */}
      <div className="relative" style={{ width: W, height: H, zIndex: 10, transformStyle: "preserve-3d" }}>
        {/* Back panel */}
        <div
          className="absolute inset-0 rounded-[8px]"
          style={{
            background: `linear-gradient(145deg, ${T.olive} 0%, ${T.darkOlive} 100%)`,
            boxShadow: `0 20px 60px rgba(81,84,66,0.35), 0 4px 12px rgba(81,84,66,0.2)`,
            border: `1px solid rgba(111,116,74,0.3)`,
          }}
        />
        {/* Left flap */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to right, #5c603d, ${T.olive})`, clipPath: "polygon(0 0, 50% 52%, 0 100%)" }} />
        {/* Right flap */}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to left, #5c603d, ${T.olive})`, clipPath: "polygon(100% 0, 50% 52%, 100% 100%)" }} />
        {/* Bottom flap */}
        <div className="absolute inset-0 z-[2]" style={{ background: `linear-gradient(to top, #4d5133, #5c603d)`, clipPath: "polygon(0 100%, 50% 52%, 100% 100%)", filter: "drop-shadow(0 -3px 6px rgba(0,0,0,0.15))" }} />

        {/* Accent lines */}
        <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
            <line x1="20" y1={H / 2} x2={W - 20} y2={H / 2} stroke={`${T.sage}33`} strokeWidth="0.5" />
            <rect x={W / 2 - 4} y={H / 2 - 4} width="8" height="8" fill={`${T.sage}44`} transform={`rotate(45 ${W / 2} ${H / 2})`} />
          </svg>
        </div>

        {/* ── TOP FLAP (3D open) ── */}
        <div className="absolute inset-0 z-[20]" style={{ transformStyle: "preserve-3d" }}>
          <motion.div
            style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", transformOrigin: "top center", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            initial={{ rotateX: 0, filter: "drop-shadow(0 5px 8px rgba(0,0,0,0.22))" }}
            animate={isOpening ? { rotateX: -180, filter: "drop-shadow(0 0px 0px rgba(0,0,0,0))" } : { rotateX: 0, filter: "drop-shadow(0 5px 8px rgba(0,0,0,0.22))" }}
            transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1], delay: isOpening ? 0.1 : 0 }}
          >
            {/* Flap front */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: `linear-gradient(175deg, ${T.olive} 0%, ${T.darkOlive} 100%)`, clipPath: "polygon(0 0, 100% 0, 50% 60%)", backfaceVisibility: "hidden" }}>
              {/* Crease lines */}
              <svg style={{ position: "absolute", inset: 0 }} width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none">
                <path d={`M0 0 L${W / 2} ${H * 0.6} L${W} 0`} stroke={`${T.sage}44`} strokeWidth="1.2" />
              </svg>
              {/* Flap text */}
              <motion.div
                style={{ position: "absolute", top: "16%", left: 0, right: 0, textAlign: "center" }}
                animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <span className="font-serif italic" style={{ fontSize: "1rem", color: `${T.cream}b3`, letterSpacing: "0.04em" }}>
                  You&apos;re Invited
                </span>
              </motion.div>
            </div>
            {/* Flap back */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", background: `linear-gradient(175deg, #454736 0%, #36382b 100%)`, clipPath: "polygon(0 0, 100% 0, 50% 60%)", backfaceVisibility: "hidden", transform: "rotateX(180deg)" }} />
          </motion.div>
        </div>

        {/* ── WAX SEAL ── */}
        <motion.div
          onClick={phase === "envelope" ? onOpen : undefined}
          className="absolute z-[30] flex items-center justify-center cursor-pointer"
          style={{ width: 64, height: 64, top: "58%", left: "50%", x: "-50%", y: "-50%" }}
          animate={isOpening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          whileHover={phase === "envelope" ? { scale: 1.15 } : {}}
          transition={{ duration: 0.35, ease: "backIn" }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="w-full h-full">
            <defs>
              <radialGradient id="gold-seal" cx="35%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#FAF1D6" />
                <stop offset="35%" stopColor="#E5C583" />
                <stop offset="70%" stopColor="#B8974A" />
                <stop offset="100%" stopColor="#8C6C2B" />
              </radialGradient>
              <filter id="seal-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2.5" stdDeviation="3" floodColor="#36382b" floodOpacity="0.35" />
              </filter>
            </defs>

            {/* Organic wax outer shape */}
            <path
              d="M 32,3 C 49,2 62,15 61,32 C 60,49 49,61 32,61 C 15,61 3,49 3,32 C 3,15 15,4 32,3 Z"
              fill="url(#gold-seal)"
              filter="url(#seal-shadow)"
            />

            {/* Inner ring */}
            <circle cx="32" cy="32" r="21" stroke="#FAF1D6" strokeWidth="1.2" strokeOpacity="0.5" fill="none" />
            <circle cx="32" cy="32" r="20" stroke="#8C6C2B" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />

            {/* Dynamic Initials Text */}
            <text
              x="32"
              y="37.5"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="12"
              fontStyle="italic"
              fontWeight="bold"
              fill="#FAF9F6"
              style={{ textShadow: "0 1px 1.5px rgba(0,0,0,0.4)" }}
            >
              {`${groomName[0]}&${brideName[0]}`}
            </text>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

const PARTICLES = [
  { delay: 0,   xPercent: 10, size: 7,  duration: 9  },
  { delay: 1.5, xPercent: 25, size: 5,  duration: 11 },
  { delay: 3,   xPercent: 50, size: 9,  duration: 13 },
  { delay: 0.8, xPercent: 70, size: 6,  duration: 10 },
  { delay: 2.2, xPercent: 85, size: 8,  duration: 12 },
  { delay: 4,   xPercent: 40, size: 4,  duration: 9  },
  { delay: 1,   xPercent: 60, size: 7,  duration: 14 },
  { delay: 5,   xPercent: 15, size: 5,  duration: 11 },
];

export function Cover({ isOpened, onOpen }: CoverProps) {
  const { couple } = MOCK_DATA;
  const [phase, setPhase]         = useState<Phase>("envelope");
  const [isVisible, setIsVisible] = useState(true);
  const [guestName, setGuestName] = useState("");

  // useRef instead of useState for mounted — avoids a state-update-before-mount warning
  const mountedRef  = useRef(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

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
    return () => {
      // Clean up all pending timeouts when component unmounts
      mountedRef.current = false;
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const handleOpen = () => {
    if (phase !== "envelope") return;
    setPhase("opening");
    timeoutsRef.current.push(
      setTimeout(() => { if (mountedRef.current) setPhase("letter");  }, 900)
    );
    // cover fade-out → onOpen called via AnimatePresence.onExitComplete
    timeoutsRef.current.push(
      setTimeout(() => { if (mountedRef.current) setIsVisible(false); }, 2700)
    );
  };

  if (isOpened) return null;

  const formattedDate = new Date(MOCK_DATA.hero_section.target_date).toLocaleDateString("id-ID", {
    day: "2-digit", month: "long", year: "numeric",
  });

  return (
    <AnimatePresence onExitComplete={onOpen}>
      {isVisible && (
        <motion.div
          key="cover-root"
          className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-md z-[100] overflow-hidden flex flex-col items-center justify-center shadow-2xl"
          style={{ backgroundColor: T.sage }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── FLOATING SAGE PETAL PARTICLES ── */}
          {mountedRef.current && PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

          {/* ── CORNER FLOWER OVERLAYS ── */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 30 }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/images/bunga.png"
              alt=""
              style={{
                position: "absolute",
                width: "115%",
                height: "112%",
                top: "-6%",
                objectFit: "cover",
                transformOrigin: "center center",
              }}
              animate={{
                rotate: [-1.2, 1.2, -1.2],
                scale: [1.11, 1.14, 1.11],
                x: [-3, 3, -3],
                y: [-2, 2, -2],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* ── ENVELOPE CONTENT ── */}
          <motion.div
            className="relative z-20 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <motion.p
              className="uppercase font-medium text-center"
              style={{ letterSpacing: "0.38em", fontSize: "0.75rem", color: T.darkOlive }}
              animate={{ opacity: phase === "envelope" ? [0.6, 1, 0.6] : 0 }}
              transition={phase === "envelope" ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
            >
              {MOCK_DATA.labels.buttons.open_invitation}
            </motion.p>

            <EnvelopeScene
              phase={phase}
              groomName={couple.groom.first_name}
              brideName={couple.bride.first_name}
              formattedDate={formattedDate}
              onOpen={handleOpen}
            />

            {/* Guest Name Block */}
            {guestName && phase === "envelope" && (
              <motion.div
                className="flex flex-col items-center gap-1.5 text-center mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="uppercase font-medium text-center" style={{ letterSpacing: "0.25em", fontSize: "0.62rem", color: T.darkOlive }}>
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <p className="font-serif italic font-medium text-center" style={{ fontSize: "1.3rem", color: T.darkOlive, letterSpacing: "0.02em" }}>
                  {guestName}
                </p>
              </motion.div>
            )}

            <motion.p
              className="uppercase font-medium text-center"
              style={{ letterSpacing: "0.28em", fontSize: "0.65rem", color: T.darkOlive }}
              animate={{ opacity: phase === "envelope" ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {MOCK_DATA.hero_section.label}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
