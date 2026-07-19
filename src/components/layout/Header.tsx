import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { IconButton } from "@/components/common/IconButton";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { DesktopNavigation } from "@/components/layout/DesktopNavigation";
import { cn } from "@/utils/helpers";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/utils/constants";

interface HeaderProps {
  language: SupportedLanguage;
  isMobileMenuOpen: boolean;
  onChangeLanguage: (language: SupportedLanguage) => void;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
}

const languageLabels: Record<SupportedLanguage, string> = {
  vi: "VI",
  en: "EN",
  ja: "JA",
  zh: "ZH",
  ko: "KO",
};

export function Header({
  language,
  isMobileMenuOpen,
  onChangeLanguage,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderProps) {
  const { t } = useTranslation("common");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,backdrop-filter,border-color] duration-200",
        isScrolled
          ? "border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_78%,transparent)] shadow-[0_8px_24px_var(--shadow)] backdrop-blur-md"
          : "border-transparent bg-[color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur-sm",
      )}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-[var(--text-primary)] transition-colors hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          onClick={onCloseMobileMenu}
        >
          {profile.shortName}
        </NavLink>

        <DesktopNavigation />

        <div className="flex items-center gap-1 sm:gap-2">
          <label className="relative">
            <span className="sr-only">{t("actions.changeLanguage")}</span>
            <select
              value={language}
              onChange={(event) => onChangeLanguage(event.target.value as SupportedLanguage)}
              className="h-10 cursor-pointer appearance-none rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] py-2 pl-3 pr-8 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--primary)]"
              aria-label={t("actions.changeLanguage")}
            >
              {SUPPORTED_LANGUAGES.map((item) => (
                <option key={item} value={item}>{languageLabels[item]}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-secondary)]">⌄</span>
          </label>

          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex"
          >
            <Button variant="secondary" size="sm" className="gap-2">
              <Download size={16} aria-hidden="true" />
              {t("actions.downloadCv")}
            </Button>
          </a>

          <IconButton
            label={
              isMobileMenuOpen
                ? t("actions.closeMenu")
                : t("actions.openMenu")
            }
            className="lg:hidden"
            onClick={onToggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </IconButton>
        </div>
      </Container>
    </header>
  );
}
