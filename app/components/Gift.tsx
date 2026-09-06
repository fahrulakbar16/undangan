"use client";

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
    <section className="relative w-full py-20 px-4 bg-[var(--color-cream)] text-center text-[var(--color-dark-olive)] overflow-hidden">
      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[24px] bg-[#FAF9F6] px-5 py-10"
        style={{ boxShadow: "0 8px 24px rgba(81, 84, 66, 0.06)" }}
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
            <p className="text-xs opacity-80 leading-relaxed max-w-xs mx-auto">
              {gift.instruction_text}
            </p>
          </FadeIn>
        </div>

        {/* Bank accounts */}
        <div className="flex flex-col gap-4">
          {gift.bank_accounts.map((account: any, index: number) => (
            <FadeIn key={account.id} delay={index * 0.2}>
              <div className="bg-[var(--color-beige)]/20 rounded-2xl p-5 border border-[var(--color-beige)]/50 text-left">
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

        {/* Send a Wish sub-section */}
        <FadeIn delay={0.4}>
          <div className="mt-8 pt-6 border-t border-[var(--color-sage)]/25">
            <h3 className="font-serif italic text-lg text-[var(--color-olive)] mb-2">
              Send a Wish
            </h3>
            <p className="text-xs opacity-70 leading-relaxed max-w-[240px] mx-auto mb-3">
              Kirimkan doa dan ucapan terbaik Anda untuk kedua mempelai.
            </p>
            {/* Leaf ornament */}
            <div className="flex justify-center">
              <LeafOrnament className="w-7 h-7 text-[var(--color-olive)] opacity-40" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
