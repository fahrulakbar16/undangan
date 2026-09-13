"use client";

import styles from "./Invitation.module.css";
import { MOCK_DATA } from "../data";
import { LeafOrnament } from "./LeafOrnament";
import { FadeIn } from "./FadeIn";
import { Monogram } from "./PersonalSections";

export function Couple() {
  const { couple } = MOCK_DATA;
  return (
    <section className={`${styles.section} ${styles.couple} text-center`}>
      <FadeIn className="max-w-sm mx-auto">
        <h2 className="font-serif text-2xl text-[var(--color-olive)] mb-6">{couple.section_title}</h2>
        <p className="text-sm leading-7 mb-10">{couple.intro_text}</p>
        {[couple.bride, couple.groom].map((person, index) => (
          <div key={person.first_name}>
            {index > 0 && <p className="font-serif italic text-3xl text-[var(--color-olive)] my-6">&amp;</p>}
            <div className={styles.person}>
            <LeafOrnament />
            <span className={styles.personRole}>{person.role_label}</span>
            <h3 className="font-serif text-3xl mb-3">{person.full_name}</h3>
            <p className="text-xs leading-6 max-w-64 mx-auto opacity-80">{person.parents_desc}</p>
            </div>
          </div>
        ))}
        <Monogram />
      </FadeIn>
    </section>
  );
}
