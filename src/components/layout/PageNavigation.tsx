import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getPageNavigation } from "@/data/navigation";
import { Container } from "@/components/common/Container";

export function PageNavigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { previous, next } = getPageNavigation(pathname);
  const { t } = useTranslation("common");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (event.key === "ArrowLeft" && previous) {
        event.preventDefault();
        void navigate(previous.path);
      }

      if (event.key === "ArrowRight" && next) {
        event.preventDefault();
        void navigate(next.path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, next, previous]);

  if (!previous && !next) {
    return null;
  }

  return (
    <Container className="py-12">
      <nav
        className="flex items-stretch justify-between gap-4 border-t border-[var(--border)] pt-8"
        aria-label="Page navigation"
      >
        {previous ? (
          <Link
            to={previous.path}
            className="group flex min-w-0 flex-1 flex-col gap-1 rounded-[var(--radius-md)] p-3 transition-colors hover:bg-[var(--surface-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--text-secondary)]">
              <ArrowLeft size={16} aria-hidden="true" />
              {t("pageNav.previous")}
            </span>
            <span className="truncate font-display text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)]">
              {t(previous.labelKey)}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <Link
            to={next.path}
            className="group flex min-w-0 flex-1 flex-col items-end gap-1 rounded-[var(--radius-md)] p-3 text-right transition-colors hover:bg-[var(--surface-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-[var(--text-secondary)]">
              {t("pageNav.next")}
              <ArrowRight size={16} aria-hidden="true" />
            </span>
            <span className="truncate font-display text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)]">
              {t(next.labelKey)}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
      <p className="mt-3 text-center text-xs text-[var(--text-secondary)]">
        {t("pageNav.keyboardHint")}
      </p>
    </Container>
  );
}
