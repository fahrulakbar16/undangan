"use client";

import styles from "./Invitation.module.css";
import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
import { LeafOrnament } from "./LeafOrnament";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Gift() {
  const { gift, labels } = MOCK_DATA;
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className={`${styles.section} text-center`}>
      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <FadeIn>
            <div className="flex justify-center mb-4">
              <LeafOrnament className="w-8 h-8 text-[var(--color-olive)] opacity-50" />
            </div>
            <h2 className="font-serif italic text-2xl mb-2 text-[var(--color-olive)]">
              {gift.section_title}
            </h2>
            <p className="text-xs opacity-80 leading-relaxed max-w-xs mx-auto whitespace-pre-line">
              {gift.instruction_text}
            </p>
          </FadeIn>
        </div>

        {/* Bank accounts */}
        <div className="flex flex-col gap-4">
          {gift.bank_accounts.map((account, index: number) => (
            <FadeIn key={account.id} delay={index * 0.2}>
              <div className={`${styles.paper} ${styles.bank} text-left`}>
                <span className={styles.bankMonogram} aria-hidden="true">{MOCK_DATA.invitation_meta.monogram}</span>
                <span className={styles.sectionEyebrow}>A LITTLE TOKEN OF LOVE</span>
                <h3 className="font-serif text-base mb-1 text-[var(--color-dark-olive)] font-bold">
                  {account.bank_name}
                </h3>
                <p className="font-mono text-sm tracking-widest text-[var(--color-olive)] mb-1.5">
                  {account.account_number}
                </p>
                <p className="text-[11px] opacity-75 mb-4">
                  {account.account_holder}
                </p>

                <button
                  onClick={() => handleCopy(account.account_number, account.id)}
                  className="w-full py-2 rounded-full border border-[var(--color-olive)]/60 text-[var(--color-olive)] hover:bg-[var(--color-olive)] hover:text-white transition-all flex items-center justify-center gap-2 text-xs font-semibold tracking-wide"
                >
                  {copiedId === account.id ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {labels.buttons.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      {labels.buttons.copy}
                    </>
                  )}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>


      </div>
    </section>
  );
}
