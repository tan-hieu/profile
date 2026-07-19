import { useTranslation } from "react-i18next";
import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Compass,
  GraduationCap,
  Layers,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { aboutStrengths, aboutTimeline } from "@/data/profile";

const strengthIcons = {
  legacy: Code2,
  business: SearchCheck,
  multitech: Layers,
  verification: Sparkles,
  learning: BookOpen,
  migration: Compass,
} as const;

export function AboutPage() {
  const { t } = useTranslation("about");

  return (
    <>
      <Seo title={t("meta.title")} description={t("meta.description")} />

      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("intro")}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 text-[var(--primary)]">
              <GraduationCap size={24} aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                {t("education.title")}
              </h2>
            </div>
            <p className="mt-3 text-[var(--text-secondary)]">{t("education.body")}</p>
          </Reveal>

          <Reveal
            delay={0.05}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="flex items-center gap-3 text-[var(--primary)]">
              <BriefcaseBusiness size={24} aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                {t("direction.title")}
              </h2>
            </div>
            <p className="mt-3 text-[var(--text-secondary)]">{t("direction.body")}</p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {t("strengths.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
            {t("strengths.description")}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {aboutStrengths.map((strength, index) => {
              const Icon = strengthIcons[strength];
              return (
                <Reveal
                  key={strength}
                  delay={index * 0.04}
                  className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_12px_32px_var(--shadow)]"
                >
                  <Icon
                    size={32}
                    className="text-[var(--primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {t(`strengths.${strength}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {t(`strengths.${strength}.body`)}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
            <h2 className="font-display text-xl font-semibold">
              {t("workStyle.title")}
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">{t("workStyle.body")}</p>
          </Reveal>
          <Reveal
            delay={0.05}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <h2 className="font-display text-xl font-semibold">
              {t("interests.title")}
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">{t("interests.body")}</p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {t("timeline.title")}
          </h2>
          <ol className="relative mt-8 space-y-6 border-l border-[var(--border)] pl-6">
            {aboutTimeline.map((item) => (
              <li key={item.id} className="relative">
                <span
                  className="absolute -left-[1.91rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--primary)] bg-[var(--background)]"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-wide text-[var(--accent-hover)]">
                  {t(`timeline.${item.id}.period`)}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">
                  {t(`timeline.${item.id}.title`)}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
                  {t(`timeline.${item.id}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </>
  );
}
