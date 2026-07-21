import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

interface TypewriterRoleProps {
  phrases: string[];
  className?: string;
}

export function TypewriterRole({ phrases, className }: TypewriterRoleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(phrases[0] ?? "");
      return;
    }

    const current = phrases[phraseIndex] ?? "";
    let timeout = 0;

    if (!isDeleting && text === current) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && text === "") {
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
      }, 280);
    } else {
      timeout = window.setTimeout(() => {
        setText(current.slice(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? 32 : 52);
    }

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, phrases, prefersReducedMotion, text]);

  return (
    <p className={className}>
      <span className="text-[var(--primary)]">{text}</span>
      <span className="animate-cursor-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-[var(--accent)]" />
    </p>
  );
}
