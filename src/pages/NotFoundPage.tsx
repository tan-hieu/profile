import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export function NotFoundPage() {
  const { t } = useTranslation("common");

  return (
      <>
      <Seo title={t("notFound.title")} description={t("notFound.description")} />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--accent-hover)]">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold">
          {t("notFound.title")}
        </h1>
        <p className="mt-3 max-w-md text-[var(--text-secondary)]">
          {t("notFound.description")}
        </p>
        <Link to="/" className="mt-8">
          <Button>{t("actions.backHome")}</Button>
        </Link>
      </Container>
      </>
  );
}
