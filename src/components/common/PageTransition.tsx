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
        initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -24, filter: "blur(8px)" }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="pointer-events-none fixed inset-x-0 z-[45] h-1 origin-left bg-[image:var(--gradient-primary)] shadow-[0_0_28px_var(--primary)]"
          style={{ top: "var(--header-height)" }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 0.75, times: [0, 0.65, 1], ease: "easeInOut" }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none fixed inset-0 z-40 bg-[var(--background)]"
          initial={{ opacity: 0.55 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          aria-hidden="true"
        />

        <motion.div
          className="pointer-events-none fixed inset-y-0 left-0 z-[46] w-1/3 bg-[image:linear-gradient(90deg,color-mix(in_srgb,var(--primary)_35%,transparent),transparent)] blur-2xl"
          initial={{ x: "-120%", opacity: 0.8 }}
          animate={{ x: "320%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        />

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
