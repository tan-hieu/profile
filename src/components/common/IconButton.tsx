import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  label: string;
}

export function IconButton({
  children,
  label,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "inline-flex h-10 min-w-10 items-center justify-center rounded-[var(--radius-md)] px-2",
        "text-[var(--text-secondary)] transition-colors duration-200",
        "hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
