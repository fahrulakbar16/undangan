"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import Image from "next/image";

export function Gallery() {
  const { gallery } = MOCK_DATA;

  return (
    <section className="relative w-full py-20 px-4 bg-[var(--color-cream)] text-center text-[var(--color-dark-olive)] overflow-hidden">
      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[24px] bg-[#FAF9F6] px-4 py-10"
        style={{ boxShadow: "0 8px 24px rgba(81, 84, 66, 0.06)" }}
      >
        <div className="mb-8">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-50" />
            </div>
            <h2 className="font-serif italic text-2xl mb-1 text-[var(--color-olive)]">
              {gallery.section_title}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[var(--color-olive)] font-semibold">
              {gallery.section_label}
            </p>
          </FadeIn>
        </div>

        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-2 gap-3 px-1">
          {gallery.images.map((img: any, index: number) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className={`relative rounded-2xl overflow-hidden border border-[var(--color-beige)]/50 ${
                index % 3 === 0 ? "col-span-2 aspect-video" : "aspect-[4/5]"
              }`}
            >
              <div className="w-full h-full bg-[var(--color-beige)]/30 absolute inset-0 z-0"></div>
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover relative z-10 transition-transform duration-700 hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
