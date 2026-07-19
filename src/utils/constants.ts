export const APP_NAME = "Portfolio";
export const THEME_STORAGE_KEY = "portfolio-theme";
export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const SUPPORTED_LANGUAGES = ["vi", "en", "ja", "zh", "ko"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "vi";
export const DEFAULT_THEME = "light" as const;

export type ThemeMode = "light" | "dark";
