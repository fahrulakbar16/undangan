"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { CalendarDays, MapPin } from "lucide-react";

export function Events() {
  const { events } = MOCK_DATA;

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

      <div className="relative z-10 w-full max-w-sm mx-auto">
        <FadeIn>
          <h2 className="font-serif text-3xl mb-8 text-[var(--color-olive)]" style={{ textShadow: "0 2px 10px rgba(255,255,255,0.4)" }}>
            Jadwal Acara
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {events.map((event: any, index: number) => (
            <FadeIn key={event.id} delay={index * 0.2}>
              <div className="bg-[#FAF9F6] rounded-[28px] p-6 shadow-xl border border-white/20 relative overflow-hidden" style={{ boxShadow: "0 16px 36px rgba(81, 84, 66, 0.08)" }}>
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--color-sage)]/20 rounded-bl-full -mr-8 -mt-8" />
              
              <h3 className="text-sm uppercase tracking-widest text-[var(--color-olive)] mb-2 font-semibold">
                {event.type}
              </h3>
              <p className="font-serif text-2xl mb-6 text-[var(--color-dark-olive)]">
                {event.title}
              </p>
              
              <div className="flex flex-col gap-4 text-sm opacity-90 mb-8">
                <div className="flex items-start gap-3 text-left">
                  <CalendarDays className="w-5 h-5 text-[var(--color-olive)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.date_formatted}</p>
                    <p className="opacity-80">{event.time_range}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-left">
                  <MapPin className="w-5 h-5 text-[var(--color-olive)] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{event.venue_name}</p>
                    <p className="opacity-80 leading-relaxed">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <a
                  href={event.maps_url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full bg-[var(--color-beige)] text-[var(--color-dark-olive)] hover:bg-[var(--color-olive)] hover:text-white transition-colors text-sm font-medium tracking-wide flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  {MOCK_DATA.labels.buttons.view_maps}
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      </div>
    </section>
  );
}
