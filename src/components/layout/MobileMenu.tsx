import { useEffect, useId, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import { navigationItems, isNavigationPathActive } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Button } from "@/components/common/Button";
import { cn } from "@/utils/helpers";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation("common");
  const { pathname } = useLocation();
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 top-[var(--header-height)] z-40 bg-[var(--overlay)] lg:hidden"
        aria-label={t("actions.closeMenu")}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-menu"
        className="fixed inset-x-0 top-[var(--header-height)] z-50 max-h-[calc(100vh-var(--header-height))] overflow-y-auto border-b border-[var(--border)] bg-[var(--surface)] shadow-[0_16px_40px_var(--shadow)] lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <p id={titleId} className="sr-only">
          {t("actions.openMenu")}
        </p>
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
          {navigationItems.map((item) => {
            const active = isNavigationPathActive(pathname, item.path);

            return (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/"}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-[var(--radius-md)] px-4 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]",
                )}
              >
                {t(item.labelKey)}
              </NavLink>
            );
          })}

          <a href={profile.resumeUrl} download className="mt-2">
            <Button variant="primary" className="w-full gap-2">
              <Download size={16} aria-hidden="true" />
              {t("actions.downloadCv")}
            </Button>
          </a>
        </nav>
      </div>
    </>
  );
}
