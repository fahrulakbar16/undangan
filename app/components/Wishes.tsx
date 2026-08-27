"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
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
      <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-olive)] opacity-70 mb-3 px-1">
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
                className="bg-[#FAF9F6] rounded-[24px] p-5"
                style={{ boxShadow: "0 10px 24px rgba(81, 84, 66, 0.07)" }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-sage)]/60 to-[var(--color-beige)] flex items-center justify-center shrink-0">
                    <UserCircle2 className="w-5 h-5 text-[var(--color-olive)]" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="font-semibold text-sm text-[var(--color-dark-olive)] leading-tight">
                        {wish.name}
                      </h4>
                      <span className="text-[10px] bg-[var(--color-beige)] text-[var(--color-olive)] px-2 py-0.5 rounded-full font-medium ml-2 shrink-0">
                        {wish.attend}
                      </span>
                    </div>
                    <span className="text-[10px] opacity-50 block mb-2">{wish.time}</span>
                    <p className="text-xs leading-relaxed opacity-85 whitespace-pre-wrap">
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
    <section id="rsvp" className="relative w-full py-24 px-4 bg-transparent text-[var(--color-dark-olive)] overflow-hidden">
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

      <div className="relative z-10 w-full max-w-sm mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <FadeIn>
            <h2
              className="font-serif text-3xl mb-3 text-[var(--color-olive)]"
              style={{ textShadow: "0 2px 10px rgba(255,255,255,0.4)" }}
            >
              Kirim Ucapan &amp; RSVP
            </h2>
            <p className="text-sm opacity-90 leading-relaxed max-w-xs mx-auto text-[var(--color-dark-olive)]">
              Kehadiran dan doa restu Anda adalah anugerah terindah bagi kami.
            </p>
          </FadeIn>
        </div>

        {/* Form card */}
        <FadeIn>
          <div
            className="bg-[#FAF9F6] rounded-[28px] p-6 mb-8"
            style={{ boxShadow: "0 16px 36px rgba(81, 84, 66, 0.08)" }}
          >
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={labels.placeholders.name}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-sage)] bg-[#FAF9F6] focus:outline-none focus:border-[var(--color-olive)] focus:ring-1 focus:ring-[var(--color-olive)] transition-colors text-sm"
              />

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="attend" className="accent-[var(--color-olive)]" defaultChecked />
                  <span>Hadir</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="attend" className="accent-[var(--color-olive)]" />
                  <span>Tidak Hadir</span>
                </label>
              </div>

              <textarea
                placeholder={labels.placeholders.message}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-sage)] bg-[#FAF9F6] focus:outline-none focus:border-[var(--color-olive)] focus:ring-1 focus:ring-[var(--color-olive)] transition-colors text-sm resize-none"
              />

              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl bg-[var(--color-olive)] text-white text-sm font-medium tracking-wide flex items-center justify-center gap-2 mt-1"
                whileHover={{ scale: 1.02, backgroundColor: "var(--color-dark-olive)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Send className="w-4 h-4" />
                {labels.buttons.send_wish}
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
