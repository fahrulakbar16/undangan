"use client";

import Image from "next/image";
import { Calendar, ChevronDown } from "lucide-react";
import { MOCK_DATA } from "../data";
import styles from "./Hero.module.css";

export function Hero({ isOpened = false }: { isOpened?: boolean }) {
  const { hero_section, couple, labels } = MOCK_DATA;
  const weddingNames = `${couple.groom.first_name} & ${couple.bride.first_name}`;
  const dateLabel = new Date(hero_section.target_date).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric",
  });

  const handleSaveCalendar = () => {
    const event = hero_section.calendar_event;
    const startDate = new Date(hero_section.target_date);
    const endDate = new Date(startDate.getTime() + 6 * 60 * 60 * 1000);
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const params = new URLSearchParams({
      action: "TEMPLATE", text: `The Wedding of ${weddingNames}`,
      dates: `${fmt(startDate)}/${fmt(endDate)}`,
      details: `Pernikahan ${weddingNames}`, location: event.location,
    });
    window.open(`https://calendar.google.com/calendar/render?${params}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={`${styles.hero} ${isOpened ? styles.opened : ""}`} aria-label={`Undangan pernikahan ${weddingNames}`}>
      <Image src="/images/hero-wildflowers.webp" alt="" fill sizes="(max-width: 448px) 100vw, 448px" className={styles.background} />
      <div className={styles.wash} aria-hidden="true" />
      {isOpened && (
        <>
          <div className={styles.petals} aria-hidden="true">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => <span key={i} />)}
          </div>
          <div className={styles.content}>
            <p className={styles.eyebrow}>A BEAUTIFUL BEGINNING</p>
            <h1 className={styles.title} aria-label="Save the Date">
              <span>SAVE</span>
              <em>the</em>
              <span>DATE</span>
            </h1>
            <div className={styles.details}>
              <p className={styles.intro}>{hero_section.eyebrow}</p>
              <h2 className={styles.names}>{couple.groom.first_name} <i>&amp;</i> {couple.bride.first_name}</h2>
              <span className={styles.divider} aria-hidden="true">✧</span>
              <p className={styles.date}>{dateLabel}</p>
              <p className={styles.location}>{hero_section.calendar_event.location}</p>
              <button onClick={handleSaveCalendar} className={styles.calendar}>
                <Calendar size={14} strokeWidth={1.3} />{labels.buttons.save_calendar}
              </button>
            </div>
          </div>
          <a href="#couple" className={styles.scroll} aria-label="Lihat profil mempelai">
            <span>OUR FOREVER STARTS HERE</span><ChevronDown size={18} strokeWidth={1} />
          </a>
        </>
      )}
    </section>
  );
}
