export function LeafOrnament({ className = "w-8 h-8 text-[var(--color-olive)] opacity-60" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      {/* Delicate central stem */}
      <path d="M50 92 Q 48 50 50 8" strokeWidth="2" strokeLinecap="round" />
      {/* Left leaves with soft fill */}
      <path d="M49 76 C 28 72 18 56 24 46 C 34 46 44 60 49 72" fill="currentColor" fillOpacity="0.25" strokeWidth="1.5" />
      <path d="M49 52 C 30 46 22 32 28 22 C 38 24 45 38 49 48" fill="currentColor" fillOpacity="0.25" strokeWidth="1.5" />
      <path d="M50 30 C 36 24 30 14 34 7 C 42 9 47 20 50 26" fill="currentColor" fillOpacity="0.25" strokeWidth="1.5" />
      {/* Right leaves with soft fill */}
      <path d="M51 64 C 72 60 82 44 76 34 C 66 34 56 48 51 60" fill="currentColor" fillOpacity="0.25" strokeWidth="1.5" />
      <path d="M51 40 C 70 34 78 20 72 10 C 62 12 55 26 51 36" fill="currentColor" fillOpacity="0.25" strokeWidth="1.5" />
    </svg>
  );
}
