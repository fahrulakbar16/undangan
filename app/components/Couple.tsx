"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import { AtSign } from "lucide-react";
import { motion } from "framer-motion";

export function Couple() {
  const { couple } = MOCK_DATA;

  return (
    <section className="relative w-full py-20 px-4 bg-[var(--color-cream)] text-center text-[var(--color-dark-olive)] overflow-hidden">
      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[24px] bg-[#FAF9F6] overflow-hidden"
        style={{ boxShadow: "0 8px 24px rgba(81, 84, 66, 0.06)" }}
      >
        {/* Header */}
        <div className="px-6 pt-10 pb-6">
          <FadeIn direction="down">
            {/* Leaf ornament */}
            <div className="flex justify-center mb-4">
              <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-50" />
            </div>

            <h2 className="font-serif italic text-2xl text-[var(--color-olive)] mb-3">
              {couple.section_title}
            </h2>

            {/* Ornament line */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-10 bg-[var(--color-sage)]/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-olive)]/40" />
              <div className="h-px w-10 bg-[var(--color-sage)]/50" />
            </div>

            <p className="text-xs leading-6 opacity-70 max-w-[260px] mx-auto">
              {couple.intro_text}
            </p>
          </FadeIn>
        </div>

        {/* Divider */}
        <div className="h-px mx-6 bg-[var(--color-sage)]/25" />

        {/* Groom */}
        <FadeIn delay={0.1} direction="up">
          <div className="px-6 py-6 flex flex-col items-center">
            <h3 className="font-serif italic text-xl text-[var(--color-dark-olive)] font-semibold mb-1">
              {couple.groom.full_name}
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-olive)] font-bold mb-3">
              {couple.groom.role_label}
            </p>

            {/* Parents */}
            <div className="w-full bg-[var(--color-beige)]/20 rounded-2xl px-4 py-3 mb-4">
              <p className="text-[11px] leading-5 text-[var(--color-dark-olive)]/70">
                {couple.groom.parents_desc}
              </p>
            </div>

            <motion.a
              href={couple.groom.ig_link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--color-olive)]/30 hover:bg-[var(--color-sage)]/15 transition-colors text-[11px] font-medium text-[var(--color-olive)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AtSign className="w-3 h-3" />
              <span>{couple.groom.ig_handle}</span>
            </motion.a>
          </div>
        </FadeIn>

        {/* Ampersand divider */}
        <FadeIn delay={0.2}>
          <div className="flex items-center px-6 gap-4 py-1">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--color-sage)]/40" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-3 bg-[var(--color-sage)]/30" />
              <span className="font-serif text-2xl italic text-[var(--color-olive)] opacity-70">
                &amp;
              </span>
              <div className="w-px h-3 bg-[var(--color-sage)]/30" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--color-sage)]/40" />
          </div>
        </FadeIn>

        {/* Bride */}
        <FadeIn delay={0.3} direction="up">
          <div className="px-6 py-6 flex flex-col items-center">
            <h3 className="font-serif italic text-xl text-[var(--color-dark-olive)] font-semibold mb-1">
              {couple.bride.full_name}
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-olive)] font-bold mb-3">
              {couple.bride.role_label}
            </p>

            {/* Parents */}
            <div className="w-full bg-[var(--color-beige)]/20 rounded-2xl px-4 py-3 mb-4">
              <p className="text-[11px] leading-5 text-[var(--color-dark-olive)]/70">
                {couple.bride.parents_desc}
              </p>
            </div>

            <motion.a
              href={couple.bride.ig_link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[var(--color-olive)]/30 hover:bg-[var(--color-sage)]/15 transition-colors text-[11px] font-medium text-[var(--color-olive)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AtSign className="w-3 h-3" />
              <span>{couple.bride.ig_handle}</span>
            </motion.a>
          </div>
        </FadeIn>

        {/* Footer accent line */}
        <div className="h-1 bg-gradient-to-r from-[var(--color-sage)]/20 via-[var(--color-olive)]/40 to-[var(--color-sage)]/20" />
      </div>

      {/* Leaf ornament bottom */}
      <FadeIn delay={0.4} direction="up">
        <div className="flex justify-center mt-6">
          <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-30 rotate-180" />
        </div>
      </FadeIn>
    </section>
  );
}
