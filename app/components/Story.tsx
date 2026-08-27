import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { Heart } from "lucide-react";

export function Story() {
  const { story } = MOCK_DATA;

  return (
    <section className="relative w-full py-24 px-4 bg-transparent text-[var(--color-dark-olive)] overflow-hidden">
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
        className="relative z-10 w-full max-w-sm mx-auto rounded-[28px] bg-[#FAF9F6] px-5 py-12"
        style={{ boxShadow: "0 16px 36px rgba(81, 84, 66, 0.08)" }}
      >
        <div className="text-center mb-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[var(--color-olive)] mb-2 font-semibold">
              {story.section_label}
            </p>
            <h2 className="font-serif text-3xl mb-3 text-[var(--color-olive)]">
              {story.section_title}
            </h2>
            <p className="text-sm opacity-85 leading-relaxed max-w-xs mx-auto">
              {story.section_desc}
            </p>
          </FadeIn>
        </div>

        <div className="relative border-l border-[var(--color-sage)]/60 ml-2 pb-4 space-y-10">
          {story.timeline.map((item, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="left">
              <div className="relative pl-6">
                {/* Timeline dot */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 bg-[#FAF9F6] rounded-full border border-[var(--color-olive)] flex items-center justify-center text-[var(--color-olive)]">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                
                <div className="bg-[var(--color-beige)]/30 rounded-2xl p-5 shadow-sm border border-[var(--color-beige)]">
                  <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-olive)] text-white text-[10px] font-bold tracking-widest mb-2.5">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-lg mb-1.5 text-[var(--color-dark-olive)] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs opacity-85 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
