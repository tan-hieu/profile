import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
}

export function FloatingParticles({ count = 28 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${(index * 17 + 11) % 100}%`,
        top: `${(index * 23 + 7) % 100}%`,
        size: 2 + (index % 4),
        delay: (index % 7) * 0.45,
        duration: 4 + (index % 5) * 1.2,
      })),
    [count],
  );

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="animate-particle-float absolute rounded-full bg-[var(--primary)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: 0.15 + (particle.id % 5) * 0.06,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: `0 0 ${particle.size * 4}px color-mix(in srgb, var(--primary) 50%, transparent)`,
          }}
        />
      ))}
    </div>
  );
}
