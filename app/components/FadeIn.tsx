"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, ReactNode } from "react";
import { cn } from "../lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  const reducedMotion = useReducedMotion();
  const offsets = {
    up: { y: 22, x: 0 },
    down: { y: -22, x: 0 },
    left: { x: 22, y: 0 },
    right: { x: -22, y: 0 },
  };

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -30px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: reducedMotion ? 0 : delay, staggerChildren: reducedMotion ? 0 : 0.12 } },
      }}
      className={cn(className)}
    >
      {Children.toArray(children).map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, ...offsets[direction] },
            visible: { opacity: 1, x: 0, y: 0 },
          }}
          transition={{ duration: reducedMotion ? 0 : 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
