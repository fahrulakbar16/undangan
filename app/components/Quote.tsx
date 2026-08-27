"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";

export function Quote() {
  const quote = MOCK_DATA.quotes[0];

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

      {/* ── CENTERED CREAM CARD ── */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[28px] bg-[#FAF9F6] px-6 py-12"
        style={{ boxShadow: "0 16px 36px rgba(81, 84, 66, 0.08)" }}
      >

        {/* Bismillah */}
        <FadeIn direction="down">
          <p className="font-arabic text-xl text-[var(--color-olive)] mb-2 leading-loose">
            {quote.bismillah}
          </p>

          {/* Thin ornament line */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px flex-1 bg-[var(--color-sage)]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-olive)]/50" />
            <div className="w-2.5 h-2.5 rounded-full border border-[var(--color-olive)]/60 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[var(--color-olive)]/60" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-olive)]/50" />
            <div className="h-px flex-1 bg-[var(--color-sage)]/50" />
          </div>
        </FadeIn>

        {/* Arabic verse */}
        <FadeIn delay={0.2}>
          <p
            className="font-arabic text-[1.35rem] leading-[2.4] mb-8 text-[var(--color-dark-olive)] break-words"
            dir="rtl"
          >
            {quote.content}
          </p>
        </FadeIn>

        {/* Middle divider */}
        <FadeIn delay={0.35}>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-sage)]/60 to-transparent" />
          </div>
        </FadeIn>

        {/* Translation */}
        <FadeIn delay={0.5}>
          <p className="text-[0.8rem] italic leading-7 text-[var(--color-dark-olive)]/75 mb-8 text-center">
            &ldquo;{quote.translation}&rdquo;
          </p>
        </FadeIn>

        {/* Source */}
        <FadeIn delay={0.65}>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-[var(--color-olive)]/40" />
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[var(--color-olive)]">
              {quote.source}
            </p>
            <div className="h-px w-6 bg-[var(--color-olive)]/40" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
