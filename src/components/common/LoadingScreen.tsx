import { useTranslation } from "react-i18next";

export function LoadingScreen() {
  const { t } = useTranslation("common");

  return (
    <div
      className="flex min-h-[40vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--primary)]"
          aria-hidden="true"
        />
        <p className="text-sm text-[var(--text-secondary)]">{t("loading")}</p>
      </div>
    </div>
  );
}
