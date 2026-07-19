import { useEffect, useRef, useState } from "react";
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

const languageNames: Record<SupportedLanguage, string> = {
  vi: "Tiếng Việt",
  en: "English",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
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
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isLanguageOpen) return;

    const closeMenu = (event: MouseEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLanguageOpen(false);
    };

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isLanguageOpen]);

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
          <div ref={languageMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((open) => !open)}
              className={cn(
                "flex h-10 min-w-[4.5rem] items-center justify-between gap-3 rounded-[var(--radius-md)] border bg-[var(--surface)] px-3 text-sm font-semibold transition-colors",
                isLanguageOpen ? "border-[var(--primary)] text-[var(--primary)]" : "border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--primary)]",
              )}
              aria-label={t("actions.changeLanguage")}
              aria-haspopup="listbox"
              aria-expanded={isLanguageOpen}
            >
              <span>{languageLabels[language]}</span>
              <span className={cn("text-[10px] text-[var(--text-secondary)] transition-transform", isLanguageOpen && "rotate-180")} aria-hidden="true">▼</span>
            </button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-[calc(100%+0.6rem)] z-[70] w-44 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.5)]" role="listbox" aria-label={t("actions.changeLanguage")}>
                {SUPPORTED_LANGUAGES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="option"
                    aria-selected={item === language}
                    onClick={() => {
                      onChangeLanguage(item);
                      setIsLanguageOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                      item === language
                        ? "bg-[color-mix(in_srgb,var(--primary)_14%,transparent)] text-[var(--primary)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)]",
                    )}
                  >
                    <span>{languageNames[item]}</span>
                    <span className="font-mono text-xs opacity-70">{languageLabels[item]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

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
