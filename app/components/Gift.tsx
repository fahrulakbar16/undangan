"use client";

import { MOCK_DATA } from "../data";
import { FadeIn } from "./FadeIn";
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

      {/* ── CENTERED CREAM CARD ── */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto rounded-[28px] bg-[#FAF9F6] px-5 py-12"
        style={{ boxShadow: "0 16px 36px rgba(81, 84, 66, 0.08)" }}
      >
        <div className="mb-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-widest text-[var(--color-olive)] mb-2 font-semibold">
              {gift.section_label}
            </p>
            <h2 className="font-serif text-3xl mb-3 text-[var(--color-olive)]">
              {gift.section_title}
            </h2>
            <p className="text-sm opacity-85 leading-relaxed max-w-xs mx-auto">
              {gift.instruction_text}
            </p>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-6">
          {gift.bank_accounts.map((account: any, index: number) => (
            <FadeIn key={account.id} delay={index * 0.2}>
              <div className="bg-[var(--color-beige)]/30 rounded-2xl p-5 border border-[var(--color-sage)]/60 relative overflow-hidden text-left shadow-sm">
                <h3 className="font-serif text-lg mb-1 text-[var(--color-dark-olive)] font-bold">
                  {account.bank_name}
                </h3>
                <p className="font-mono text-base tracking-widest text-[var(--color-olive)] mb-2">
                  {account.account_number}
                </p>
                <p className="text-xs opacity-85 mb-5">
                  {account.account_holder}
                </p>
                
                <button
                  onClick={() => handleCopy(account.account_number, account.id)}
                  className="w-full py-2 rounded-full border border-[var(--color-olive)] text-[var(--color-olive)] hover:bg-[var(--color-olive)] hover:text-white transition-all flex items-center justify-center gap-2 text-xs font-semibold tracking-wide"
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
