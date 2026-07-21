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
import { aboutContent } from "@/data/about";
import { profile } from "@/data/profile";
import { useIsVietnamese } from "@/hooks/usePortfolioContent";

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
  const isVi = useIsVietnamese();
  const content = isVi ? aboutContent : null;

  const strengths = isVi
    ? aboutContent.strengths.items
    : (["legacy", "business", "multitech", "verification", "learning", "migration"] as const).map(
        (id) => ({
          id,
          title: t(`strengths.${id}.title`),
          body: t(`strengths.${id}.body`),
        }),
      );

  const principles = isVi
    ? aboutContent.principles.items
    : (["clarity", "ownership", "growth"] as const).map((id) => ({
        id,
        title: t(`principles.${id}.title`),
        body: t(`principles.${id}.body`),
      }));

  const timeline = isVi
    ? aboutContent.timeline
    : (["study", "goline", "rikai", "personal"] as const).map((id) => ({
        id,
        period: t(`timeline.${id}.period`),
        title: t(`timeline.${id}.title`),
        body: t(`timeline.${id}.body`),
      }));

  return (
    <>
      <Seo title={t("meta.title")} description={t("meta.description")} />

      <Container className="py-8 sm:py-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={content?.intro ?? t("intro")}
        />

        <Reveal className="mb-12 grid overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-[0.72fr_1.28fr]">
          <img
            src={profile.avatar}
            alt={profile.fullName}
            className="aspect-[4/3] h-full min-h-72 w-full bg-[var(--surface-secondary)] object-cover lg:aspect-auto"
          />
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
              {profile.fullName}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              {content?.portrait.title ?? t("portrait.title")}
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
              {content?.portrait.body ?? t("portrait.body")}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
            <div className="flex items-center gap-3 text-[var(--primary)]">
              <GraduationCap size={24} aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                {content?.education.title ?? t("education.title")}
              </h2>
            </div>
            <p className="mt-3 text-[var(--text-secondary)]">
              {content?.education.body ?? t("education.body")}
            </p>
          </Reveal>

          <Reveal
            delay={0.05}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="flex items-center gap-3 text-[var(--primary)]">
              <BriefcaseBusiness size={24} aria-hidden="true" />
              <h2 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                {content?.direction.title ?? t("direction.title")}
              </h2>
            </div>
            <p className="mt-3 text-[var(--text-secondary)]">
              {content?.direction.body ?? t("direction.body")}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {content?.strengths.title ?? t("strengths.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
            {content?.strengths.description ?? t("strengths.description")}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {strengths.map((strength, index) => {
              const Icon = strengthIcons[strength.id as keyof typeof strengthIcons];
              return (
                <Reveal
                  key={strength.id}
                  delay={index * 0.04}
                  className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5 transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_12px_32px_var(--shadow)]"
                >
                  <Icon
                    size={32}
                    className="text-[var(--primary)]"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold">
                    {strength.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {strength.body}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6">
            <h2 className="font-display text-xl font-semibold">
              {content?.workStyle.title ?? t("workStyle.title")}
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              {content?.workStyle.body ?? t("workStyle.body")}
            </p>
          </Reveal>
          <Reveal
            delay={0.05}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <h2 className="font-display text-xl font-semibold">
              {content?.interests.title ?? t("interests.title")}
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              {content?.interests.body ?? t("interests.body")}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {content?.principles.eyebrow ?? t("principles.eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                {content?.principles.title ?? t("principles.title")}
              </h2>
              <p className="mt-4 text-[var(--text-secondary)]">
                {content?.principles.description ?? t("principles.description")}
              </p>
            </div>
            <div className="divide-y divide-[var(--border)]">
              {principles.map((item, index) => (
                <article
                  key={item.id}
                  className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="font-mono text-sm text-[var(--primary)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="grid min-w-0 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-[0.9fr_1.1fr]">
            <figure className="group min-w-0 overflow-hidden bg-[var(--surface-secondary)]">
              <img
                src={profile.workspaceImage}
                alt={t("gallery.learningAlt")}
                className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:h-full lg:min-h-[24rem]"
                loading="lazy"
              />
            </figure>
            <div className="flex min-w-0 flex-col justify-center p-7 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {content?.gallery.eyebrow ?? t("gallery.eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                {content?.gallery.learning ?? t("gallery.learning")}
              </h2>
              <p className="mt-4 text-[var(--text-secondary)]">
                {content?.gallery.learningBody ?? t("gallery.learningBody")}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {t("timeline.title")}
          </h2>
          <ol className="relative mt-8 space-y-6 border-l border-[var(--border)] pl-6">
            {timeline.map((item) => (
              <li key={item.id} className="relative">
                <span
                  className="absolute -left-[1.91rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--primary)] bg-[var(--background)]"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-wide text-[var(--accent-hover)]">
                  {item.period}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-16 grid min-w-0 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-w-0 flex-col justify-center p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {content?.gallery.projectEyebrow ?? t("gallery.projectEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              {content?.gallery.project ?? t("gallery.project")}
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              {content?.gallery.projectBody ?? t("gallery.projectBody")}
            </p>
          </div>
          <figure className="group min-w-0 overflow-hidden bg-[var(--surface-secondary)]">
            <img
              src={profile.projectImage}
              alt={t("gallery.projectAlt")}
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:h-full lg:min-h-[24rem]"
              loading="lazy"
            />
          </figure>
        </Reveal>
      </Container>
    </>
  );
}
