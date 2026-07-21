import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

interface AnimatedStatProps {
  value: string;
  label: string;
}

function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) {
    return { number: 0, suffix: value };
  }
  return { number: Number(match[1]), suffix: match[2] };
}

export function AnimatedStat({ value, label }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const { number, suffix } = parseStatValue(value);
  const count = useMotionValue(0);
  const display = useTransform(count, (current) => Math.round(current));

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      count.set(number);
      return;
    }

    const controls = animate(count, number, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [count, inView, number, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      className="group rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-300 hover:border-[var(--primary)] hover:shadow-[0_12px_36px_var(--shadow)]"
      whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <p className="font-display text-3xl font-semibold text-[var(--primary)]">
        <motion.span>{display}</motion.span>
        {suffix}
      </p>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">{label}</p>
      <div className="mt-4 h-0.5 w-0 bg-[image:var(--gradient-primary)] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}
