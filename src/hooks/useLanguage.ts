import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "@/utils/constants";

export function useLanguage() {
  const { i18n } = useTranslation();
  const language = i18n.language as SupportedLanguage;

  const setLanguage = useCallback(
    (nextLanguage: SupportedLanguage) => {
      void i18n.changeLanguage(nextLanguage);
      document.documentElement.lang = nextLanguage;
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    },
    [i18n],
  );

  const cycleLanguage = useCallback(() => {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(
      (SUPPORTED_LANGUAGES as readonly string[]).includes(language)
        ? language
        : "vi",
    );
    const next =
      SUPPORTED_LANGUAGES[(currentIndex + 1) % SUPPORTED_LANGUAGES.length];
    setLanguage(next);
  }, [language, setLanguage]);

  return { language, setLanguage, cycleLanguage };
}
