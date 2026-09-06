"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import { motion } from "framer-motion";
import { Home, Heart, Calendar, MapPin, MessageSquare } from "lucide-react";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const childVariants: any = {
    hidden: {
      opacity: 0,
      y: 15,
      rotateX: -45,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-flex justify-center perspective-[1000px]"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block whitespace-pre drop-shadow-sm"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

const HERO_NAV_ITEMS = [
  { icon: Home, label: "Beranda" },
  { icon: Heart, label: "Mempelai" },
  { icon: Calendar, label: "Acara" },
  { icon: MapPin, label: "Lokasi" },
  { icon: MessageSquare, label: "Ucapan" },
];

export function Hero({ isOpened = false }: { isOpened?: boolean }) {
  const { hero_section, couple } = MOCK_DATA;

  const handleSaveCalendar = () => {
    const event = hero_section.calendar_event;
    const startDate = new Date(hero_section.target_date);
    const endDate = new Date(startDate.getTime() + 6 * 60 * 60 * 1000);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.summary)}&dates=${fmt(startDate)}/${fmt(endDate)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[var(--color-cream)] text-[var(--color-dark-olive)] text-center">
      {/* Top section with content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-6 pt-16 pb-8 relative z-10">
        {isOpened && (
          <motion.div
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Leaf ornament top */}
            <FadeIn delay={0.2} direction="down">
              <LeafOrnament className="w-9 h-9 text-[var(--color-olive)] opacity-70 mb-3 mx-auto" />
            </FadeIn>

            {/* Eyebrow */}
            <FadeIn delay={0.4} direction="down">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[var(--color-olive)]/40" />
                <p className="tracking-[0.2em] uppercase text-[0.65rem] font-semibold text-[var(--color-olive)]">
                  {hero_section.eyebrow}
                </p>
                <div className="h-[1px] w-8 bg-[var(--color-olive)]/40" />
              </div>
            </FadeIn>

            {/* Names */}
            <div className="flex flex-col items-center my-2">
              <h1 className="font-serif italic" style={{ fontSize: "clamp(2.8rem, 12vw, 4.2rem)", color: "var(--color-dark-olive)", lineHeight: 1.1 }}>
                <TypewriterText text={couple.groom.first_name} delay={0.6} />
              </h1>

              <FadeIn delay={1.4} className="my-2 relative">
                <div className="font-serif italic text-3xl text-[var(--color-olive)] opacity-70 font-light">
                  &amp;
                </div>
              </FadeIn>

              <h1 className="font-serif italic" style={{ fontSize: "clamp(2.8rem, 12vw, 4.2rem)", color: "var(--color-dark-olive)", lineHeight: 1.1 }}>
                <TypewriterText text={couple.bride.first_name} delay={1.8} />
              </h1>
            </div>

            {/* Date */}
            <FadeIn delay={2.4} direction="up" className="mt-4 flex flex-col items-center gap-4">
              <p className="font-serif text-base tracking-wider text-[var(--color-dark-olive)]">
                {new Date(hero_section.target_date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <p className="text-xs opacity-70 max-w-[220px]">
                {hero_section.calendar_event.location}
              </p>
            </FadeIn>

            {/* Save to Calendar button */}
            <FadeIn delay={2.8} direction="up" className="mt-6">
              <motion.button
                onClick={handleSaveCalendar}
                className="px-6 py-2.5 rounded-full border border-[var(--color-olive)] text-[var(--color-olive)] text-xs font-medium tracking-wider hover:bg-[var(--color-olive)] hover:text-white transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Calendar className="w-3.5 h-3.5" />
                {MOCK_DATA.labels.buttons.save_calendar}
              </motion.button>
            </FadeIn>
          </motion.div>
        )}
      </div>

      {/* Watercolor landscape at bottom — seamless blend */}
      <div className="w-full relative z-0" style={{ marginTop: -1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/watercolor-landscape.jpg"
            alt=""
            className="w-full h-auto block"
          />
        </motion.div>
      </div>

      {/* Bottom nav icons */}
      {isOpened && (
        <FadeIn delay={3.2} direction="up">
          <div className="w-full py-4 px-6 grid grid-cols-5 gap-1 bg-[var(--color-cream)]">
            {HERO_NAV_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-[var(--color-beige)]/40 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[var(--color-olive)]" strokeWidth={1.5} />
                </div>
                <span className="text-[8px] text-[var(--color-dark-olive)] opacity-60 font-medium tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      )}
    </section>
  );
}
