"use client";

import styles from "./Invitation.module.css";
import { MOCK_DATA } from "../data";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Monogram() {
  return <p className={styles.monogram}>{MOCK_DATA.invitation_meta.monogram}</p>;
}

export function Distance() {
  const { distance, couple } = MOCK_DATA;
  const reducedMotion = useReducedMotion();
  const journeyRef = useRef<HTMLDivElement>(null);
  // Observe the HTML container, rather than the SVG path, on mobile browsers.
  const journeyVisible = useInView(journeyRef, { amount: 0.6 });
  const animateJourney = journeyVisible && !reducedMotion;
  return (
    <section aria-labelledby="distance-title" className={`${styles.section} ${styles.story} text-center`}>
      <FadeIn className="max-w-sm mx-auto">
        <h2 id="distance-title" className={styles.distanceTitle}>{distance.section_title}</h2>
        <div ref={journeyRef} className={styles.distanceJourney}>
          <svg viewBox="0 0 320 115" fill="none" aria-hidden="true" className={styles.distanceRoute}>
            <path d="M35 78 C90 78 77 22 132 32 S221 102 285 38" stroke="#929778" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3 6" />
            <motion.path
              d="M35 78 C90 78 77 22 132 32 S221 102 285 38"
              stroke="#8a906b" strokeWidth="1.4" strokeLinecap="round"
              initial={false}
              animate={animateJourney
                ? { pathLength: [0, 1, 1], opacity: [1, 1, 0] }
                : { pathLength: 1, opacity: 1 }}
              transition={animateJourney
                ? { duration: 4.5, times: [0, 0.65, 1], delay: 0.8, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }
                : { duration: 0 }}
            />
            <circle cx="35" cy="78" r="12" fill="#e7e7d8" />
            <circle cx="35" cy="78" r="4" fill="#81885e" />
            <circle cx="285" cy="38" r="12" fill="#e7e7d8" />
            <circle cx="285" cy="38" r="4" fill="#81885e" />
          </svg>
          <span className={styles.distanceNameLeft}>{couple.groom.first_name}</span>
          <span className={styles.distanceNameRight}>{couple.bride.first_name}</span>
          <span className={styles.distanceHeart} aria-hidden="true"><Heart size={17} strokeWidth={1.2} /></span>
        </div>
        <div className={styles.distanceCopy}>
          {distance.paragraphs.map((paragraph: string) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <blockquote className={styles.distanceNote}>
          <span aria-hidden="true" className={styles.distanceQuoteMark}>“</span>
          <p>{distance.phrase}</p>
          <span className={styles.distanceSignature}>{MOCK_DATA.invitation_meta.monogram}</span>
        </blockquote>
      </FadeIn>
    </section>
  );
}

export function JustUs() {
  const { just_us } = MOCK_DATA;
  return (
    <section className={`${styles.section} text-center`}>
      <FadeIn className="max-w-sm mx-auto">
        <h2 className="font-serif text-2xl text-[var(--color-olive)] mb-10">{just_us.section_title}</h2>
        {just_us.profiles.map((person: { name: string; description: string }, index: number) => (
          <div key={person.name} className={`${styles.profile} ${index % 2 ? styles.profileAlternate : ""}`}>
            <span className={styles.profileInitial} aria-hidden="true">{person.name[0]}</span>
            <h3 className="text-xs tracking-[0.25em] mb-4">{person.name}</h3>
            <p className="font-serif text-lg leading-8 whitespace-pre-line">{person.description}</p>
          </div>
        ))}
        <p className={`${styles.scriptPhrase} opacity-75`}>{just_us.phrase}</p>
        <Monogram />
      </FadeIn>
    </section>
  );
}

export function DressCode() {
  const { dress_code } = MOCK_DATA;
  return (
    <section className={`${styles.section} ${styles.dress} text-center`}>
      <FadeIn className="max-w-sm mx-auto">
        <h2 className="font-serif text-2xl text-[var(--color-olive)] mb-8">{dress_code.section_title}</h2>
        <ul className={`${styles.palette} flex justify-center gap-2 mb-8`}>
          {dress_code.colors.map((color: { name: string; hex: string }) => (
            <li key={color.name} className="flex-1 max-w-16">
              <span className={`${styles.swatch} block w-10 sm:w-12 mx-auto border mb-3`} style={{ backgroundColor: color.hex }} />
              <span className="text-[10px] leading-4 block">{color.name}</span>
            </li>
          ))}
        </ul>
        <h3 className="text-xs tracking-[0.2em] mb-3">{dress_code.label}</h3>
        <p className="font-serif text-lg mb-5">{dress_code.description}</p>
        <p className="font-serif italic text-sm leading-7 opacity-75">{dress_code.phrase}</p>
      </FadeIn>
    </section>
  );
}

export function Closing() {
  return (
    <footer className={`${styles.section} ${styles.closing} text-center`}>
      <FadeIn className={`${styles.closingLetter} max-w-sm mx-auto`}>
        <span className={styles.sectionEyebrow}>WITH LOVE & GRATITUDE</span>
        {MOCK_DATA.closing.paragraphs.map((paragraph: string) => <p key={paragraph} className="text-sm leading-8 mb-6">{paragraph}</p>)}
        <p className={styles.closingNames}>{MOCK_DATA.couple.groom.first_name} &amp; {MOCK_DATA.couple.bride.first_name}</p>
        <Monogram />
        <p className="text-xs tracking-[0.2em] mt-5">{MOCK_DATA.hero_section.date_label}</p>
      </FadeIn>
    </footer>
  );
}
