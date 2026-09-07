"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { MOCK_DATA } from "../data";
import { LeafOrnament } from "./LeafOrnament";
import { ArrowRight } from "lucide-react";
import styles from "./Cover.module.css";

interface CoverProps {
  isOpened: boolean;
  onOpen: () => void;
  onStartOpening: () => void;
  onReveal: () => void;
}

const subscribe = () => () => {};
const getGuest = () => new URLSearchParams(window.location.search).get("to") || "";
const getServerGuest = () => "";

export function Cover({ isOpened, onOpen, onReveal, onStartOpening }: CoverProps) {
  const { couple } = MOCK_DATA;
  const [opening, setOpening] = useState(false);
  const guestName = useSyncExternalStore(subscribe, getGuest, getServerGuest);
  const started = useRef(false);
  const onOpenRef = useRef(onOpen);
  const onRevealRef = useRef(onReveal);

  useEffect(() => {
    onOpenRef.current = onOpen;
    onRevealRef.current = onReveal;
  }, [onOpen, onReveal]);
  useEffect(() => {
    if (!opening || isOpened) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Reveal the hero underneath while the card settles into the background.
    const revealTimer = window.setTimeout(() => onRevealRef.current(), reduced ? 0 : 7000);
    const timer = window.setTimeout(() => onOpenRef.current(), reduced ? 450 : 8200);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(timer);
    };
  }, [opening, isOpened]);

  const open = () => {
    if (started.current) return;
    started.current = true;
    onStartOpening();
    setOpening(true);
  };

  if (isOpened) return null;

  return (
    <section className={`${styles.cover} ${opening ? styles.opening : ""}`} aria-label="Sampul undangan pernikahan">
      <div className={styles.light} aria-hidden="true" />
      <div className={styles.branchTop} aria-hidden="true" />
      <div className={styles.branchBottom} aria-hidden="true" />
      <div className={styles.petals} aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => <span key={i} />)}
      </div>

      <header className={styles.heading}>
        <p>THE WEDDING OF</p>
        <h1>{couple.groom.first_name} <span>&amp;</span> {couple.bride.first_name}</h1>
        <div className={styles.rule} />
      </header>

      <button className={styles.scene} onClick={open} disabled={opening} aria-label="Buka amplop undangan">
        <span className={styles.envelope} aria-hidden="true">
          <span className={styles.back} />
          <span className={styles.card} />
          <span className={styles.pocket}>
            <span className={styles.foldLeft} />
            <span className={styles.foldRight} />
            <span className={styles.foldBottom} />
            <span className={styles.envelopeFlowers} />
          </span>
          <span className={styles.flap}><span /></span>
          <span className={styles.seal}><LeafOrnament className={styles.sealLeaf} /></span>
        </span>
      </button>

      <footer className={styles.footer}>
        <p className={styles.salutation}>Kepada Yth. Bapak/Ibu/Saudara/i</p>
        <p className={styles.guest}>{guestName || "Tamu Undangan"}</p>
        <button onClick={open} disabled={opening} className={styles.openButton}>
          Buka Undangan <ArrowRight size={15} />
        </button>
        <p className={styles.note}>Sebuah awal, untuk selamanya.</p>
      </footer>
      <span className={styles.status} role="status">{opening ? "Membuka undangan…" : ""}</span>
    </section>
  );
}
