import { useReducedMotion } from "motion/react";

interface TechMarqueeProps {
  items: readonly string[];
}

export function TechMarquee({ items }: TechMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] py-4 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,var(--background),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,var(--background),transparent)]" />

      <div
        className={
          prefersReducedMotion
            ? "flex flex-wrap justify-center gap-3 px-4"
            : "animate-marquee flex w-max gap-3 pr-3"
        }
      >
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 font-mono text-xs text-[var(--text-secondary)] shadow-[0_4px_16px_var(--shadow)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
