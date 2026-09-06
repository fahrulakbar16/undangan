import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import { Heart } from "lucide-react";

export function Story() {
  const { story } = MOCK_DATA;

  return (
    <section className="relative w-full py-20 px-4 bg-[var(--color-cream)] text-[var(--color-dark-olive)] overflow-hidden">
      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[24px] bg-[#FAF9F6] px-5 py-10"
        style={{ boxShadow: "0 8px 24px rgba(81, 84, 66, 0.06)" }}
      >
        <div className="text-center mb-8">
          <FadeIn>
            {/* Leaf ornament */}
            <div className="flex justify-center mb-4">
              <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-50" />
            </div>

            <h2 className="font-serif italic text-2xl mb-2 text-[var(--color-olive)]">
              {story.section_title}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[var(--color-olive)] mb-3 font-semibold">
              {story.section_label}
            </p>
            <p className="text-xs opacity-80 leading-relaxed max-w-xs mx-auto">
              {story.section_desc}
            </p>
          </FadeIn>
        </div>

        <div className="relative border-l border-[var(--color-sage)]/50 ml-2 pb-2 space-y-8">
          {story.timeline.map((item: any, index: number) => (
            <FadeIn key={index} delay={index * 0.15} direction="left">
              <div className="relative pl-6">
                {/* Timeline dot */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 bg-[#FAF9F6] rounded-full border border-[var(--color-olive)]/50 flex items-center justify-center text-[var(--color-olive)]">
                  <Heart className="w-3 h-3" />
                </div>

                <div className="bg-[var(--color-beige)]/20 rounded-2xl p-4 border border-[var(--color-beige)]/60">
                  <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-olive)] text-white text-[10px] font-bold tracking-widest mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif italic text-base mb-1 text-[var(--color-dark-olive)] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs opacity-80 leading-relaxed">
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
