import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/utils/helpers";

interface DesktopNavigationProps {
  className?: string;
}

function isNavItemActive(pathname: string, itemPath: string): boolean {
  if (itemPath === "/") {
    return pathname === "/";
  }
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}

export function DesktopNavigation({ className }: DesktopNavigationProps) {
  const { t } = useTranslation("common");
  const { pathname } = useLocation();

  return (
    <nav
      className={cn("hidden items-center gap-1 lg:flex", className)}
      aria-label="Main"
    >
      {navigationItems.map((item) => {
        const active = isNavItemActive(pathname, item.path);

        return (
          <NavLink
            key={item.id}
            to={item.path}
            end={item.path === "/"}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)]"
                : "text-[var(--text-secondary)] hover:text-[var(--primary)]",
            )}
          >
            {t(item.labelKey)}
          </NavLink>
        );
      })}
    </nav>
  );
}
