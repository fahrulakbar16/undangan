"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";

export function Quote() {
  const quote = MOCK_DATA.quotes[0];

  return (
    <section className="relative w-full py-20 px-4 bg-[var(--color-cream)] text-center text-[var(--color-dark-olive)] overflow-hidden">
      {/* Leaf ornament top */}
      <FadeIn direction="down">
        <div className="flex justify-center mb-6">
          <LeafOrnament className="w-9 h-9 text-[var(--color-olive)] opacity-60" />
        </div>
      </FadeIn>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[24px] bg-[#FAF9F6] px-6 py-10"
        style={{ boxShadow: "0 8px 24px rgba(81, 84, 66, 0.06)" }}
      >
        {/* Section title */}
        <FadeIn direction="down">
          <h2 className="font-serif italic text-2xl text-[var(--color-olive)] mb-6">
            Love &amp; Gratitude
          </h2>
        </FadeIn>

        {/* Bismillah */}
        <FadeIn direction="down" delay={0.1}>
          <p className="font-arabic text-lg text-[var(--color-olive)] mb-2 leading-loose">
            {quote.bismillah}
          </p>

          {/* Thin ornament line */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px flex-1 bg-[var(--color-sage)]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-olive)]/40" />
            <div className="h-px flex-1 bg-[var(--color-sage)]/40" />
          </div>
        </FadeIn>

        {/* Arabic verse */}
        <FadeIn delay={0.2}>
          <p
            className="font-arabic text-[1.2rem] leading-[2.2] mb-6 text-[var(--color-dark-olive)] break-words"
            dir="rtl"
          >
            {quote.content}
          </p>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-sage)]/50 to-transparent" />
          </div>
        </FadeIn>

        {/* Translation */}
        <FadeIn delay={0.4}>
          <p className="text-[0.78rem] italic leading-7 text-[var(--color-dark-olive)]/70 mb-6 text-center">
            &ldquo;{quote.translation}&rdquo;
          </p>
        </FadeIn>

        {/* Source */}
        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-[var(--color-olive)]/30" />
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--color-olive)]">
              {quote.source}
            </p>
            <div className="h-px w-6 bg-[var(--color-olive)]/30" />
          </div>
        </FadeIn>
      </div>

      {/* Leaf ornament bottom */}
      <FadeIn delay={0.6} direction="up">
        <div className="flex justify-center mt-6">
          <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-40 rotate-180" />
        </div>
      </FadeIn>
    </section>
  );
}
