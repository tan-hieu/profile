import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { Badge } from "@/components/common/Badge";
import { Reveal } from "@/components/common/Reveal";
import { BeforeAfterCompare } from "@/components/projects/BeforeAfterCompare";
import {
  getAdjacentProjects,
  getProjectBySlug,
} from "@/data/projects";
import { profile } from "@/data/profile";

function readObjectValues(
  t: (key: string, options?: { returnObjects?: boolean }) => unknown,
  baseKey: string,
): string[] {
  const value = t(baseKey, { returnObjects: true });
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.values(value as Record<string, string>);
  }
  return [];
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation(["projects", "common"]);
  const project = slug ? getProjectBySlug(slug) : undefined;
  const key = project?.translationKey ?? "";
  const adjacent = project
    ? getAdjacentProjects(project.slug)
    : { previous: null, next: null };

  const problems = project
    ? readObjectValues(t, `items.${key}.problems`)
    : [];
  const goals = project ? readObjectValues(t, `items.${key}.goals`) : [];
  const responsibilities = project
    ? readObjectValues(t, `items.${key}.responsibilities`)
    : [];
  const highlights = project
    ? readObjectValues(t, `items.${key}.highlights`)
    : [];
  const challenges = project
    ? readObjectValues(t, `items.${key}.challenges`)
    : [];
  const solutions = project
    ? readObjectValues(t, `items.${key}.solutions`)
    : [];
  const results = project ? readObjectValues(t, `items.${key}.results`) : [];
  const learnings = project
    ? readObjectValues(t, `items.${key}.learnings`)
    : [];

  if (!project) {
    return (
        <>
        <Seo
          title={t("common:notFound.title")}
          description={t("common:notFound.description")}
        />
        <Container className="py-20 text-center">
          <h1 className="font-display text-3xl font-semibold">
            {t("common:notFound.title")}
          </h1>
          <Link
            to="/projects"
            className="mt-6 inline-flex text-[var(--primary)] hover:underline"
          >
            {t("common:actions.viewProjects")}
          </Link>
        </Container>
        </>
    );
  }

  const { previous, next } = adjacent;

  return (
      <>
      <Seo
        title={`${project.title} | ${profile.fullName}`}
        description={t(`items.${key}.shortDescription`)}
      />

      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="bg-grid-subtle pointer-events-none absolute inset-0 opacity-50" />
        <Container className="relative grid gap-8 py-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              {project.category.map((category) => (
                <Badge key={category} tone="accent">
                  {t(`filters.${category === "web" ? "web" : category}`)}
                </Badge>
              ))}
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
              {t(`items.${key}.shortDescription`)}
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--primary)]">
              {t(`items.${key}.role`)}
            </p>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-[var(--radius-lg)] border border-[var(--border)] object-cover shadow-[0_20px_50px_var(--shadow)]"
          />
        </Container>
      </section>

      <Container className="space-y-14 py-14">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            {t("sections.overview")}
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--text-secondary)]">
            {t(`items.${key}.overview`)}
          </p>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            {t("sections.context")}
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--text-secondary)]">
            {t(`items.${key}.context`)}
          </p>
        </Reveal>

        <Reveal>
          <h2 className="mb-4 font-display text-2xl font-semibold">
            Before / Migration / After
          </h2>
          <BeforeAfterCompare project={project} />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold">
              {t("sections.problems")}
            </h2>
            <ul className="mt-4 space-y-2">
              {problems.map((item) => (
                <li key={item} className="text-sm text-[var(--text-secondary)]">
                  • {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-2xl font-semibold">
              {t("sections.goals")}
            </h2>
            <ul className="mt-4 space-y-2">
              {goals.map((item) => (
                <li key={item} className="text-sm text-[var(--text-secondary)]">
                  • {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            {t("sections.architecture")}
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-[var(--text-secondary)]">
            {t(`items.${key}.architectureDescription`)}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {project.architectureLayers.map((layer, index) => (
              <div
                key={layer}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
              >
                <span className="font-mono text-xs text-[var(--accent-hover)]">
                  Layer {index + 1}
                </span>
                <p className="mt-1 font-medium">{layer}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            {t("sections.process")}
          </h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.processSteps.map((step, index) => (
              <li
                key={step.id}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-secondary)] p-4"
              >
                <span className="font-mono text-xs text-[var(--primary)]">
                  0{index + 1}
                </span>
                <p className="mt-2 text-sm font-medium">{t(step.labelKey)}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            {t("sections.tech")}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} tone="primary">
                {tech}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            {t("sections.scope")}
          </h2>
          <p className="mt-3 font-mono text-sm text-[var(--text-secondary)]">
            {t(`items.${key}.scope`)}
          </p>
          <ul className="mt-4 space-y-2">
            {responsibilities.map((item) => (
              <li key={item} className="text-sm text-[var(--text-secondary)]">
                • {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { title: t("sections.challenges"), items: challenges },
            { title: t("sections.solutions"), items: solutions },
            { title: t("sections.results"), items: results },
          ].map((block) => (
            <Reveal key={block.title}>
              <h2 className="font-display text-xl font-semibold">{block.title}</h2>
              <ul className="mt-3 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="text-sm text-[var(--text-secondary)]">
                    • {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 space-y-2">
            {highlights.map((item) => (
              <li key={item} className="text-sm text-[var(--text-secondary)]">
                • {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            {t("sections.learnings")}
          </h2>
          <ul className="mt-4 space-y-2">
            {learnings.map((item) => (
              <li key={item} className="text-sm text-[var(--text-secondary)]">
                • {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <nav className="flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:justify-between">
          {previous ? (
            <Link
              to={`/projects/${previous.slug}`}
              className="group rounded-[var(--radius-md)] p-3 hover:bg-[var(--surface-secondary)]"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                <ArrowLeft size={16} aria-hidden="true" />
                {t("sections.prevProject")}
              </span>
              <p className="mt-1 font-display text-lg font-semibold group-hover:text-[var(--primary)]">
                {previous.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group rounded-[var(--radius-md)] p-3 text-right hover:bg-[var(--surface-secondary)] sm:ml-auto"
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                {t("sections.nextProject")}
                <ArrowRight size={16} aria-hidden="true" />
              </span>
              <p className="mt-1 font-display text-lg font-semibold group-hover:text-[var(--primary)]">
                {next.title}
              </p>
            </Link>
          ) : null}
        </nav>
      </Container>
      </>
  );
}
