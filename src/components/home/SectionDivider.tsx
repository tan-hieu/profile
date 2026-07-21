import { motion, useReducedMotion } from "motion/react";

export function SectionDivider() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className="my-16 h-px bg-[var(--border)]" />;
  }

  return (
    <div className="relative my-16 h-px overflow-visible">
      <motion.div
        className="absolute inset-0 origin-left bg-[image:linear-gradient(90deg,transparent,var(--primary),var(--accent),transparent)]"
        initial={{ scaleX: 0, opacity: 0.4 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] shadow-[0_0_16px_var(--primary)]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 16 }}
      />
    </div>
  );
}
