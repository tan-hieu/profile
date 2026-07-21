import { useTranslation } from "react-i18next";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Reveal } from "@/components/common/Reveal";
import { experiences } from "@/data/experience";
import { useExperienceContent } from "@/hooks/usePortfolioContent";
import type { Experience } from "@/types/experience";

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const content = useExperienceContent(experience);

  return (
    <li className="relative">
      <Reveal delay={index * 0.05}>
        <span
          className="absolute -left-[1.91rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-[var(--primary)] bg-[var(--background)] sm:-left-[2.41rem]"
          aria-hidden="true"
        />
        <article className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_8px_24px_var(--shadow)]">
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--accent-hover)]">
            {experience.startDate} — {experience.endDate}
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            {experience.role}
          </h2>
          <p className="mt-1 text-[var(--primary)]">{experience.company}</p>
          {experience.location ? (
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {experience.location}
            </p>
          ) : null}
          <p className="mt-4 text-[var(--text-secondary)]">{content.summary}</p>

          <h3 className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-[var(--text-primary)]">
            Responsibilities
          </h3>
          <ul className="mt-3 space-y-2">
            {content.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-[var(--text-secondary)]"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} tone="primary">
                {tech}
              </Badge>
            ))}
          </div>
        </article>
      </Reveal>
    </li>
  );
}

export function ExperiencePage() {
  const { t } = useTranslation("experience");

  return (
    <>
      <Seo title={t("meta.title")} description={t("meta.description")} />

      <Container className="py-8 sm:py-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <ol className="relative space-y-10 border-l border-[var(--border)] pl-6 sm:pl-8">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </ol>
      </Container>
    </>
  );
}
