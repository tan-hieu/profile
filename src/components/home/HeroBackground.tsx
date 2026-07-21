export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="bg-grid-subtle absolute inset-0 opacity-80" />
      <div className="animate-orb-drift absolute -left-24 top-10 h-80 w-80 rounded-full bg-[var(--primary)] opacity-[0.22] blur-[90px]" />
      <div className="animate-orb-drift-reverse absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-[var(--accent)] opacity-[0.18] blur-[80px]" />
      <div className="animate-orb-pulse absolute bottom-0 left-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--primary)] opacity-[0.14] blur-[100px]" />
      <div className="animate-orb-drift absolute left-1/2 top-2/3 h-56 w-56 -translate-x-1/2 rounded-full bg-[#60a5fa] opacity-[0.08] blur-[90px]" />
      <div className="animate-shimmer-line absolute inset-x-0 top-1/4 h-px bg-[image:linear-gradient(90deg,transparent,color-mix(in_srgb,var(--primary)_60%,transparent),transparent)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_65%)]" />
    </div>
  );
}
