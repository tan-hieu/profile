import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface ShineButtonWrapProps {
  children: ReactNode;
  className?: string;
}

export function ShineButtonWrap({ children, className }: ShineButtonWrapProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span className={`relative inline-flex overflow-hidden rounded-[var(--radius-md)] ${className ?? ""}`}>
      {children}
      {!prefersReducedMotion ? (
        <motion.span
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.45)_50%,transparent_65%)]"
          initial={{ x: "-120%" }}
          animate={{ x: "220%" }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ) : null}
    </span>
  );
}
