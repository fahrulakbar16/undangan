"use client";

import styles from "./Invitation.module.css";
import { MOCK_DATA } from "../data";
import { LeafOrnament } from "./LeafOrnament";
import { FadeIn } from "./FadeIn";
import { Monogram } from "./PersonalSections";

export function Quote() {
  const quote = MOCK_DATA.quotes[0];
  return (
    <section id="quote" aria-labelledby="quote-title" className={`${styles.section} ${styles.quote} text-center`}>
      <div className={styles.quoteFrame}>
        <FadeIn className="max-w-sm mx-auto">
          <div className={styles.quoteEmblem} aria-hidden="true"><LeafOrnament /></div>
          <h2 id="quote-title" className={styles.quoteTitle}>{quote.section_title}</h2>
          <span className={styles.quoteEyebrow}>IN HIS GRACE, WE BEGIN</span>
          <p lang="ar" dir="rtl" className={styles.quoteVerse}>{quote.content}</p>
          <span className={styles.quoteDivider} aria-hidden="true">✧</span>
          <blockquote className={styles.quoteTranslation}>
            <p>&ldquo;{quote.translation}&rdquo;</p>
            <cite>{quote.source}</cite>
          </blockquote>
          <Monogram />
        </FadeIn>
      </div>
    </section>
  );
}
