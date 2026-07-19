import { useCallback, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PageTransition } from "@/components/common/PageTransition";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export function MainLayout() {
  const { t } = useTranslation("common");
  const location = useLocation();
  const outlet = useOutlet();
  const { language, setLanguage } = useLanguage();
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
        language={language}
        isMobileMenuOpen={isMobileMenuOpen}
        onChangeLanguage={setLanguage}
        onToggleMobileMenu={toggleMobileMenu}
        onCloseMobileMenu={closeMobileMenu}
      />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <main id="main-content" className="flex-1">
        <PageTransition routeKey={location.pathname}>
          {outlet}
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
