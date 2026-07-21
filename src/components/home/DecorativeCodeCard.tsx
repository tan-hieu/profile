import { motion, useReducedMotion } from "motion/react";

export function DecorativeCodeCard() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="absolute -left-4 top-12 z-20 hidden rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_92%,transparent)] p-3 font-mono text-[10px] leading-relaxed text-[var(--text-secondary)] shadow-[0_16px_40px_var(--shadow)] backdrop-blur-md lg:block"
      initial={{ opacity: 0, x: -20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
      transition={{
        opacity: { delay: 0.9, duration: 0.5 },
        x: { delay: 0.9, duration: 0.5 },
        y: { delay: 1.4, duration: 4.5, repeat: Infinity, ease: "easeInOut" },
      }}
      aria-hidden="true"
    >
      <p className="text-[var(--accent)]">// backend.ts</p>
      <p>
        <span className="text-[var(--primary)]">const</span> build = async () =&gt; {"{"}
      </p>
      <p className="pl-3">
        <span className="text-[var(--primary)]">await</span> api.design();
      </p>
      <p className="pl-3">
        <span className="text-[var(--primary)]">return</span> ship();
      </p>
      <p>{"}"}</p>
    </motion.div>
  );
}
