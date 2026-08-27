"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import Image from "next/image";

export function Gallery() {
  const { gallery } = MOCK_DATA;

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
            left: "-6%",
            objectFit: "cover",
            opacity: 0.85,
          }}
        />
      </div>

      {/* ── CENTERED CREAM CARD ── */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[28px] bg-[#FAF9F6] px-4 py-12"
        style={{ boxShadow: "0 16px 36px rgba(81, 84, 66, 0.08)" }}
      >
        <div className="mb-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[var(--color-olive)] mb-2 font-semibold">
              {gallery.section_label}
            </p>
            <h2 className="font-serif text-3xl text-[var(--color-olive)]">
              {gallery.section_title}
            </h2>
          </FadeIn>
        </div>

        {/* Masonry-style grid layout */}
        <div className="grid grid-cols-2 gap-3 px-1">
          {gallery.images.map((img: any, index: number) => (
            <FadeIn 
              key={index} 
              delay={index * 0.1} 
              className={`relative rounded-2xl overflow-hidden shadow-sm border border-[var(--color-beige)] ${
                index % 3 === 0 ? "col-span-2 aspect-video" : "aspect-[4/5]"
              }`}
            >
              <div className="w-full h-full bg-[var(--color-beige)]/50 absolute inset-0 z-0"></div>
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
