"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { AtSign, Heart } from "lucide-react";
import { motion } from "framer-motion";

// Floating hearts particle
const floatingHearts = [
  { x: "15%", delay: 0, size: 10, duration: 4 },
  { x: "75%", delay: 0.8, size: 7, duration: 5 },
  { x: "40%", delay: 1.5, size: 9, duration: 4.5 },
  { x: "60%", delay: 0.4, size: 6, duration: 5.5 },
  { x: "88%", delay: 1.2, size: 8, duration: 4.2 },
];

export function Couple() {
  const { couple } = MOCK_DATA;

  return (
    <section className="relative w-full py-24 px-4 bg-transparent text-center text-[var(--color-dark-olive)] overflow-hidden">
      {/* ── CORNER FLOWER OVERLAYS ── */}
      <div className="absolute inset-0 max-h-[100vh] pointer-events-none z-0 overflow-hidden">
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

      {/* ── FLOATING HEARTS ── */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {floatingHearts.map((h, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: h.x, bottom: "-20px" }}
            animate={{
              y: [0, -320],
              opacity: [0, 0.6, 0],
              scale: [0.6, 1, 0.5],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: h.duration,
              delay: h.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            <Heart
              style={{ width: h.size, height: h.size }}
              className="text-[var(--color-olive)] fill-[var(--color-olive)]"
            />
          </motion.div>
        ))}
      </div>

      {/* ── CENTERED CREAM CARD ── */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[28px] bg-[#FAF9F6] overflow-hidden"
        style={{ boxShadow: "0 20px 48px rgba(81, 84, 66, 0.14)" }}
      >
        {/* Header */}
        <div className="px-6 pt-10 pb-8">
          <FadeIn direction="down">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-olive)] font-semibold mb-2">
              Bismillah
            </p>
            {/* Animated title */}
            <motion.h2
              className="font-serif text-2xl text-[var(--color-olive)] mb-3"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {couple.section_title}
            </motion.h2>

            {/* Animated ornament dots */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-px w-10 bg-[var(--color-sage)]/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-olive)]/50" />
              <div className="w-2 h-2 rounded-full border border-[var(--color-olive)]/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-olive)]/50" />
              <div className="h-px w-10 bg-[var(--color-sage)]/60" />
            </motion.div>

            <p className="text-xs leading-6 opacity-70 max-w-[240px] mx-auto">
              {couple.intro_text}
            </p>
          </FadeIn>
        </div>

        {/* Divider line */}
        <div className="h-px mx-6 bg-[var(--color-sage)]/30" />

        {/* Groom */}
        <FadeIn delay={0.1} direction="up">
          <div className="px-6 py-6 flex flex-col items-center">
            <motion.h3
              className="font-serif text-xl text-[var(--color-dark-olive)] font-semibold mb-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {couple.groom.full_name}
            </motion.h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-olive)] font-bold mb-3">
              {couple.groom.role_label}
            </p>

            {/* Parents box */}
            <div className="w-full bg-[var(--color-sage)]/10 rounded-2xl px-4 py-3 mb-4">
              <p className="text-[11px] leading-5 text-[var(--color-dark-olive)]/75">
                {couple.groom.parents_desc}
              </p>
            </div>

            <motion.a
              href={couple.groom.ig_link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--color-olive)]/40 hover:bg-[var(--color-sage)]/20 transition-colors text-[11px] font-medium text-[var(--color-olive)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AtSign className="w-3 h-3" />
              <span>{couple.groom.ig_handle}</span>
            </motion.a>
          </div>
        </FadeIn>

        {/* Ampersand divider — pulsing heart */}
        <FadeIn delay={0.2}>
          <div className="flex items-center px-6 gap-4 py-2">
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--color-sage)]/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ originX: 0 }}
            />
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-3 bg-[var(--color-sage)]/40" />
              <motion.span
                className="font-serif text-3xl italic text-[var(--color-olive)] inline-block"
                animate={{
                  scale: [1, 1.25, 1],
                  color: ["var(--color-olive)", "var(--color-dark-olive)", "var(--color-olive)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                &amp;
              </motion.span>
              <div className="w-px h-3 bg-[var(--color-sage)]/40" />
            </div>
            <motion.div
              className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--color-sage)]/50"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ originX: 1 }}
            />
          </div>
        </FadeIn>

        {/* Bride */}
        <FadeIn delay={0.3} direction="up">
          <div className="px-6 py-6 flex flex-col items-center">
            <motion.h3
              className="font-serif text-xl text-[var(--color-dark-olive)] font-semibold mb-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {couple.bride.full_name}
            </motion.h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-olive)] font-bold mb-3">
              {couple.bride.role_label}
            </p>

            {/* Parents box */}
            <div className="w-full bg-[var(--color-sage)]/10 rounded-2xl px-4 py-3 mb-4">
              <p className="text-[11px] leading-5 text-[var(--color-dark-olive)]/75">
                {couple.bride.parents_desc}
              </p>
            </div>

            <motion.a
              href={couple.bride.ig_link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--color-olive)]/40 hover:bg-[var(--color-sage)]/20 transition-colors text-[11px] font-medium text-[var(--color-olive)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AtSign className="w-3 h-3" />
              <span>{couple.bride.ig_handle}</span>
            </motion.a>
          </div>
        </FadeIn>

        {/* Footer accent — animated shimmer */}
        <motion.div
          className="h-1.5 bg-gradient-to-r from-[var(--color-sage)]/30 via-[var(--color-olive)]/60 to-[var(--color-sage)]/30"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
      </div>
    </section>
  );
}
