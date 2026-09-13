import type { CSSProperties } from "react";
import styles from "./FallingFlowers.module.css";

// Fixed values keep server and client rendering identical.
const flowers = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 37 + 5) % 100}%`,
  size: `${12 + (index % 4) * 4}px`,
  duration: `${16 + (index % 5) * 3}s`,
  delay: `${-index * 2.7}s`,
  drift: `${(index % 2 ? 1 : -1) * (18 + (index % 3) * 12)}px`,
}));

export function FallingFlowers() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      {flowers.map((flower, index) => (
        <span
          key={index}
          className={styles.flower}
          style={{
            left: flower.left,
            width: flower.size,
            height: flower.size,
            "--duration": flower.duration,
            "--delay": flower.delay,
            "--drift": flower.drift,
          } as CSSProperties}
        >
          <svg viewBox="0 0 40 40" fill="none" focusable="false">
            {index % 3 === 0 ? (
              <g fill="#e5cfbd" stroke="#c4ad94" strokeWidth="0.6">
                {[0, 72, 144, 216, 288].map((angle) => (
                  <ellipse key={angle} cx="20" cy="12" rx="5.5" ry="9" transform={`rotate(${angle} 20 20)`} />
                ))}
                <circle cx="20" cy="20" r="3" fill="#a6ad83" />
              </g>
            ) : (
              <path d="M9 29C1 15 13 3 31 7C37 23 24 37 9 29Z" fill={index % 2 ? "#ead8ca" : "#e1d6bc"} stroke="#c4b497" strokeWidth="0.7" />
            )}
          </svg>
        </span>
      ))}
    </div>
  );
}
