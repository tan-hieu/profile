import type { ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  actions?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  actions,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent-hover)]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base text-[var(--text-secondary)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {actions}
    </div>
  );
}
