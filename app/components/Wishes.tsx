"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import { Send, UserCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Auto-cycling wish ticker — shows 2 cards, scrolls 1 at a time
function WishTicker({ wishes }: { wishes: typeof MOCK_DATA.wishes }) {
  const [startIdx, setStartIdx] = useState(0);
  const n = wishes.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % n);
    }, 3500);
    return () => clearInterval(timer);
  }, [n]);

  // Sliding window of 2
  const visibleItems = [wishes[startIdx % n], wishes[(startIdx + 1) % n]];

  return (
    <div className="relative">
      {/* Label */}
      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-olive)] opacity-60 mb-3 px-1">
        Ucapan &amp; Doa
      </p>

      {/* Ticker container */}
      <div className="overflow-hidden flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((wish) => (
            <motion.div
              key={wish.id}
              layout
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -48, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <div
                className="bg-[#FAF9F6] rounded-[20px] p-4"
                style={{ boxShadow: "0 4px 16px rgba(81, 84, 66, 0.05)" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-beige)]/40 flex items-center justify-center shrink-0">
                    <UserCircle2 className="w-4 h-4 text-[var(--color-olive)]" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="font-semibold text-sm text-[var(--color-dark-olive)] leading-tight">
                        {wish.name}
                      </h4>
                      <span className="text-[9px] bg-[var(--color-beige)]/50 text-[var(--color-olive)] px-2 py-0.5 rounded-full font-medium ml-2 shrink-0">
                        {wish.attend}
                      </span>
                    </div>
                    <span className="text-[9px] opacity-40 block mb-1.5">{wish.time}</span>
                    <p className="text-xs leading-relaxed opacity-80 whitespace-pre-wrap">
                      {wish.message}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Wishes() {
  const { wishes, labels } = MOCK_DATA;

  return (
    <section id="rsvp" className="relative w-full py-20 px-4 bg-[var(--color-cream)] text-[var(--color-dark-olive)] overflow-hidden">
      <div className="relative z-10 w-full max-w-sm mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-50" />
            </div>
            <h2 className="font-serif italic text-2xl mb-2 text-[var(--color-olive)]">
              Ucapan Tamu
            </h2>
            <p className="text-xs opacity-80 leading-relaxed max-w-xs mx-auto text-[var(--color-dark-olive)]">
              Kehadiran dan doa restu Anda adalah anugerah terindah bagi kami.
            </p>
          </FadeIn>
        </div>

        {/* Form card */}
        <FadeIn>
          <div
            className="bg-[#FAF9F6] rounded-[24px] p-5 mb-8"
            style={{ boxShadow: "0 8px 24px rgba(81, 84, 66, 0.06)" }}
          >
            <form className="flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={labels.placeholders.name}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sage)]/60 bg-[#FAF9F6] focus:outline-none focus:border-[var(--color-olive)] focus:ring-1 focus:ring-[var(--color-olive)] transition-colors text-sm"
              />

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="attend" className="accent-[var(--color-olive)]" defaultChecked />
                  <span className="text-xs">Hadir</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="attend" className="accent-[var(--color-olive)]" />
                  <span className="text-xs">Tidak Hadir</span>
                </label>
              </div>

              <textarea
                placeholder={labels.placeholders.message}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sage)]/60 bg-[#FAF9F6] focus:outline-none focus:border-[var(--color-olive)] focus:ring-1 focus:ring-[var(--color-olive)] transition-colors text-sm resize-none"
              />

              <motion.button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[var(--color-olive)] text-white text-xs font-medium tracking-wide flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, backgroundColor: "var(--color-dark-olive)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Send className="w-3.5 h-3.5" />
                Kirim Ucapan
              </motion.button>
            </form>
          </div>
        </FadeIn>

        {/* Auto-cycling wishes ticker */}
        <FadeIn delay={0.3}>
          <WishTicker wishes={wishes} />
        </FadeIn>
      </div>
    </section>
  );
}
