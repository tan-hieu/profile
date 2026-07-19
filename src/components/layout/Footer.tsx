import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/common/Container";
import { profile } from "@/data/profile";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <p className="font-display text-base font-semibold text-[var(--text-primary)]">
            {profile.fullName}
          </p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {profile.role}
          </p>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            {t("footer.journey")}
          </p>
          <p className="mt-2 text-xs text-[var(--text-secondary)]">
            {t("footer.rights", { year, name: profile.fullName })}
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            aria-label="Email"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            aria-label="GitHub"
          >
            <Github size={20} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
