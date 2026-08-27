"use client";

import Image from "next/image";
import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      rotateX: -45,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-flex justify-center perspective-[1000px]"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block whitespace-pre drop-shadow-sm"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero({ isOpened = false }: { isOpened?: boolean }) {
  const { hero_section, couple } = MOCK_DATA;

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent text-[var(--color-dark-olive)] text-center p-5">
      {/* ── CORNER FLOWER OVERLAYS ── */}
      <div className="absolute inset-0 max-h-[100vh] pointer-events-none z-0 overflow-hidden mix-blend-multiply">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bunga.png"
          alt=""
          style={{
            position: "absolute",
            width: "115%",
            height: "112%",
            top: "-6%",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
      </div>

      {/* ── CENTERED CREAM CARD ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={isOpened ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-sm sm:max-w-md rounded-[2.5rem] p-[2px] overflow-hidden"
        style={{
          boxShadow: "0 25px 50px -12px rgba(81, 84, 66, 0.15)",
        }}
      >
        {/* Subtle gradient border wrapper */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/10 to-[var(--color-olive)]/30 z-0" />
        
        <div className="relative z-10 h-full w-full rounded-[2.4rem] bg-[#FAF9F6]/90 backdrop-blur-md px-6 py-16 sm:px-10 flex flex-col items-center justify-center"
             style={{ minHeight: "min(520px, 78vh)" }}>
          
          {/* Decorative inner border */}
          <div className="absolute inset-3 sm:inset-4 rounded-[1.8rem] border border-[var(--color-olive)]/15 pointer-events-none z-0" />

          {isOpened && (
            <div className="flex flex-col items-center w-full relative z-10">
              <FadeIn delay={0.4} direction="down">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-[1px] w-8 bg-[var(--color-olive)]/40" />
                  <p className="tracking-[0.2em] uppercase text-[0.7rem] sm:text-xs font-semibold text-[var(--color-olive)]">
                    {hero_section.eyebrow}
                  </p>
                  <div className="h-[1px] w-8 bg-[var(--color-olive)]/40" />
                </div>
              </FadeIn>

              <div className="flex flex-col items-center my-4">
                <h1 className="font-serif italic" style={{ fontSize: "clamp(2.8rem, 12vw, 4.2rem)", color: "var(--color-dark-olive)", lineHeight: 1.1 }}>
                  <TypewriterText text={couple.groom.first_name} delay={0.6} />
                </h1>
                
                <FadeIn delay={1.4} className="my-3 relative">
                  <div className="font-serif italic text-4xl sm:text-5xl text-[var(--color-olive)] opacity-80 font-light relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[2px] opacity-40">&amp;</span>
                    <span className="relative z-10">&amp;</span>
                  </div>
                </FadeIn>
                
                <h1 className="font-serif italic" style={{ fontSize: "clamp(2.8rem, 12vw, 4.2rem)", color: "var(--color-dark-olive)", lineHeight: 1.1 }}>
                  <TypewriterText text={couple.bride.first_name} delay={1.8} />
                </h1>
              </div>

              <FadeIn delay={2.8} direction="up" className="mt-10 flex flex-col items-center gap-4">
                <div className="p-2 rounded-full border border-[var(--color-olive)]/20 bg-white/50">
                  <Leaf className="text-[var(--color-olive)] w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-serif text-lg sm:text-xl tracking-wider font-medium text-[var(--color-dark-olive)]">
                    {new Date(hero_section.target_date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
