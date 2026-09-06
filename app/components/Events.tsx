"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Countdown timer component
function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: MOCK_DATA.labels.countdown.days },
    { value: timeLeft.hours, label: MOCK_DATA.labels.countdown.hours },
    { value: timeLeft.minutes, label: MOCK_DATA.labels.countdown.minutes },
    { value: timeLeft.seconds, label: MOCK_DATA.labels.countdown.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        {blocks.map((block, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-xl bg-[var(--color-olive)] flex items-center justify-center"
                style={{ boxShadow: "0 4px 12px rgba(81, 84, 66, 0.2)" }}
              >
                <motion.span
                  key={block.value}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white font-serif text-xl font-bold"
                >
                  {String(block.value).padStart(2, "0")}
                </motion.span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[var(--color-olive)] font-semibold mt-1.5">
                {block.label}
              </span>
            </div>
            {i < blocks.length - 1 && (
              <span className="text-[var(--color-olive)] font-bold text-lg mb-5">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Events() {
  const { events } = MOCK_DATA;

  return (
    <section className="relative w-full py-20 px-4 bg-[var(--color-cream)] text-center text-[var(--color-dark-olive)] overflow-hidden">
      <div className="relative z-10 w-full max-w-sm mx-auto">
        {/* Section header */}
        <FadeIn>
          <div className="flex justify-center mb-4">
            <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-50" />
          </div>
          <h2
            className="font-serif italic text-2xl mb-8 text-[var(--color-olive)]"
          >
            The Ceremony
          </h2>
        </FadeIn>

        {/* Event cards */}
        <div className="flex flex-col gap-6">
          {events.map((event: any, index: number) => (
            <FadeIn key={event.id} delay={index * 0.2}>
              <div
                className="bg-[#FAF9F6] rounded-[24px] p-6 relative overflow-hidden text-left"
                style={{ boxShadow: "0 8px 24px rgba(81, 84, 66, 0.06)" }}
              >
                {/* Event type icon */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-olive)]/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[var(--color-olive)]" />
                  </div>
                  <h3 className="text-sm uppercase tracking-widest text-[var(--color-olive)] font-semibold">
                    {event.type}
                  </h3>
                </div>

                <p className="font-serif italic text-xl mb-4 text-[var(--color-dark-olive)]">
                  {event.title}
                </p>

                <div className="flex flex-col gap-3 text-sm opacity-85 mb-5">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="w-4 h-4 text-[var(--color-olive)] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-xs">{event.date_formatted}</p>
                      <p className="opacity-75 text-xs">{event.time_range}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[var(--color-olive)] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-xs">{event.venue_name}</p>
                      <p className="opacity-75 leading-relaxed text-xs">{event.address}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={event.maps_url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full border border-[var(--color-olive)] text-[var(--color-olive)] hover:bg-[var(--color-olive)] hover:text-white transition-colors text-xs font-medium tracking-wide flex items-center justify-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Lihat Lokasi
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Countdown section */}
        <FadeIn delay={0.4} direction="up">
          <div className="mt-10">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-olive)] font-semibold mb-4">
              Countdown
            </p>
            <Countdown targetDate={MOCK_DATA.hero_section.target_date} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
