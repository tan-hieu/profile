import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/data/projects";
import { cn } from "@/utils/helpers";

export function ProjectsPage() {
  const { t } = useTranslation("projects");
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const sorted = [...projects].sort((a, b) => a.order - b.order);
    if (activeFilter === "all") {
      return sorted;
    }
    return sorted.filter((project) =>
      project.category.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
      <>
      <Seo title={t("meta.title")} description={t("meta.description")} />

      <Container className="py-8 sm:py-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Project filters"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeFilter === filter
                  ? "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
              )}
            >
              {t(`filters.${filter}`)}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="rounded-[var(--radius-md)] border border-dashed border-[var(--border)] bg-[var(--surface)] p-8 text-center text-[var(--text-secondary)]">
            {t("empty")}
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout={!prefersReducedMotion}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </Container>
      </>
  );
}
