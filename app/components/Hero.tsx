"use client";

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
      <div className={styles.portrait}>
        <div className={styles.branchTop} aria-hidden="true" />
        <div className={styles.branchBottom} aria-hidden="true" />
        <div className={styles.branchForeground} aria-hidden="true" />
        <div className={styles.wash} aria-hidden="true" />
        {isOpened && (
          <>
            <div className={styles.petals} aria-hidden="true">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => <span key={i} />)}
            </div>
            <div className={styles.content}>
              <div className={styles.monogram} aria-hidden="true">
                <span>{couple.groom.first_name[0]}</span><i>/</i><span>{couple.bride.first_name[0]}</span>
              </div>
              <p className={styles.promise}>and, somehow,<br />here we are</p>
              <span className={styles.divider} aria-hidden="true">✧</span>
              <div id="hero-details" className={styles.details}>
                {/* Temporarily hidden; remove hidden to show the wedding details again. */}
                <div hidden>
                  <p className={styles.intro}>{hero_section.eyebrow}</p>
                  <h1 className={styles.names}>{couple.groom.first_name} <i>&amp;</i> {couple.bride.first_name}</h1>
                  <span className={styles.divider} aria-hidden="true">✧</span>
                  <p className={styles.date}>{dateLabel}</p>
                  <p className={styles.location}>{hero_section.calendar_event.location}</p>
                </div>
                <button onClick={handleSaveCalendar} className={styles.calendar}>
                  <Calendar size={14} strokeWidth={1.3} />{labels.buttons.save_calendar}
                </button>
              </div>
            </div>
            <a href="#couple" className={styles.scroll} aria-label="Lihat profil mempelai">
              <span>SCROLL TO DISCOVER</span><ChevronDown size={18} strokeWidth={1} />
            </a>
          </>
        )}
      </div>
    </section>
  );
}
