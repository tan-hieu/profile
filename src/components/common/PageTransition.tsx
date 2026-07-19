import type { ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

interface PageTransitionProps {
  children: ReactNode;
  routeKey: string;
}

export function PageTransition({ children, routeKey }: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div key={routeKey}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={routeKey}
        className="relative isolate"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: "easeOut" }}
      >
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 origin-top overflow-hidden bg-[var(--background)]"
          style={{ top: "var(--header-height)" }}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{
            clipPath: [
              "inset(0 0 100% 0)",
              "inset(0 0 0% 0)",
              "inset(0 0 0% 0)",
              "inset(0 0 0% 100%)",
            ],
          }}
          transition={{ duration: 0.9, times: [0, 0.32, 0.48, 1], ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[image:radial-gradient(circle_at_50%_35%,color-mix(in_srgb,var(--primary)_25%,transparent),transparent_42%),linear-gradient(135deg,var(--background),var(--surface-secondary))]" />
          <motion.div
            className="absolute inset-y-0 w-1/3 bg-[image:linear-gradient(90deg,transparent,color-mix(in_srgb,var(--accent)_30%,transparent),transparent)] blur-xl"
            initial={{ left: "-35%" }}
            animate={{ left: "110%" }}
            transition={{ duration: 0.82, ease: "easeInOut" }}
          />
          <div className="absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 -translate-y-1/2 bg-[var(--primary)] shadow-[0_0_22px_var(--primary)]" />
        </motion.div>

        <motion.div
          className="pointer-events-none fixed inset-x-0 z-[45] h-1 origin-left bg-[image:var(--gradient-primary)] shadow-[0_0_28px_var(--primary)]"
          style={{ top: "var(--header-height)" }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 1, times: [0, 0.7, 1], ease: "easeInOut" }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.985, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.58, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
