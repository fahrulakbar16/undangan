"use client";

import styles from "./Invitation.module.css";
import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import { Send, UserCircle2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Auto-cycling wish ticker — shows 2 cards, scrolls 1 at a time
function WishTicker({ wishes }: { wishes: typeof MOCK_DATA.wishes }) {
  const [startIdx, setStartIdx] = useState(0);
  const reducedMotion = useReducedMotion();
  const n = wishes.length;

  useEffect(() => {
    if (n < 2 || reducedMotion) return;
    const timer = setInterval(() => {
      setStartIdx((prev) => (prev + 1) % n);
    }, 3500);
    return () => clearInterval(timer);
  }, [n, reducedMotion]);

  // Sliding window of 2
  const visibleItems = Array.from({ length: reducedMotion ? n : Math.min(2, n) }, (_, i) => wishes[(startIdx + i) % n]);

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
              initial={reducedMotion ? false : { opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -48, scale: 0.96 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <div
                className={`${styles.paper} ${styles.wish}`}
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
  const reducedMotion = useReducedMotion();
  const { wishes, labels, rsvp } = MOCK_DATA;

  return (
    <section id="rsvp" className={styles.section}>
      <div className="relative z-10 w-full max-w-sm mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-50" />
            </div>
            <h2 className="font-serif italic text-2xl mb-2 text-[var(--color-olive)]">
              {rsvp.section_title}
            </h2>
            <p className="text-xs opacity-80 leading-relaxed max-w-xs mx-auto whitespace-pre-line text-[var(--color-dark-olive)]">
              {rsvp.description}
            </p>
          </FadeIn>
        </div>

        {/* Form card */}
        <FadeIn>
          <div
            className={`${styles.paper} ${styles.form} mb-8`}
          >
            <form className="flex flex-col gap-3.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={labels.placeholders.name}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sage)]/60 bg-[#FAF9F6] focus:outline-none focus:border-[var(--color-olive)] focus:ring-1 focus:ring-[var(--color-olive)] transition-colors text-sm"
              />

              <div className={`${styles.attendance} flex flex-col gap-3`}>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="attend" className="accent-[var(--color-olive)]" defaultChecked />
                  <span className="text-xs">{rsvp.yes_label}</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="radio" name="attend" className="accent-[var(--color-olive)]" />
                  <span className="text-xs">{rsvp.no_label}</span>
                </label>
              </div>

              <h3 className="font-serif text-xl text-center mt-6 mb-2">{rsvp.wishes_title}</h3>
              <textarea
                placeholder={labels.placeholders.message}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-sage)]/60 bg-[#FAF9F6] focus:outline-none focus:border-[var(--color-olive)] focus:ring-1 focus:ring-[var(--color-olive)] transition-colors text-sm resize-none"
              />

              <motion.button
                type="submit"
                className={`${styles.submit} w-full py-2.5 text-xs font-medium tracking-wide flex items-center justify-center gap-2`}
                whileHover={reducedMotion ? undefined : { scale: 1.02, backgroundColor: "var(--color-dark-olive)" }}
                whileTap={reducedMotion ? undefined : { scale: 0.97 }}
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
