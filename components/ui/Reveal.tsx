"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  scale = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : scale ? { opacity: 0, scale: 0.92 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : scale ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
