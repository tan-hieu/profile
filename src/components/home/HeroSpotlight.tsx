import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

interface HeroSpotlightProps {
  children: ReactNode;
}

export function HeroSpotlight({ children }: HeroSpotlightProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 22 });

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, color-mix(in srgb, var(--primary) 16%, transparent), transparent 68%)`;

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!ref.current || prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      onMouseMove={handleMove}
    >
      {!prefersReducedMotion ? (
        <motion.div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: spotlight }}
          aria-hidden="true"
        />
      ) : null}
      {children}
    </section>
  );
}
