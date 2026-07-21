import type { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className = "",
}: AnimatedGradientTextProps) {
  return (
    <span
      className={`animate-gradient-shift bg-[length:220%_auto] bg-clip-text text-transparent bg-[image:linear-gradient(100deg,var(--primary),var(--accent),#60a5fa,var(--primary))] ${className}`}
    >
      {children}
    </span>
  );
}
