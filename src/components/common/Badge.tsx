import type { ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "accent" | "primary";
}

const toneClasses = {
  default:
    "bg-[var(--surface-secondary)] text-[var(--text-secondary)] border-[var(--border)]",
  accent:
    "bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-[var(--text-primary)] border-[color-mix(in_srgb,var(--accent)_45%,transparent)]",
  primary:
    "bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)] border-[color-mix(in_srgb,var(--primary)_30%,transparent)]",
};

export function Badge({
  children,
  className,
  tone = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs font-medium",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
