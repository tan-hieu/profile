import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PageNavigation } from "@/components/layout/PageNavigation";
import { PageTransition } from "@/components/common/PageTransition";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export function MainLayout() {
  const { t } = useTranslation("common");
  const { theme, toggleTheme } = useTheme();
  const { language, cycleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useScrollToTop();

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((open) => !open);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--text-primary)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-md)] focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white"
      >
        {t("a11y.skipToContent")}
      </a>

      <Header
        theme={theme}
        language={language}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleTheme={toggleTheme}
        onToggleLanguage={cycleLanguage}
        onToggleMobileMenu={toggleMobileMenu}
        onCloseMobileMenu={closeMobileMenu}
      />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <main id="main-content" className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
        <PageNavigation />
      </main>

      <Footer />
    </div>
  );
}
