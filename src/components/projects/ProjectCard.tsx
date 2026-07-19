import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/project";
import { Badge } from "@/components/common/Badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation(["projects", "common"]);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-1.5 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_var(--shadow)]">
      <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          {project.category.map((category) => (
            <Badge key={category} tone="primary">
              {t(`projects:filters.${category === "web" ? "web" : category}`)}
            </Badge>
          ))}
        </div>

        <h2 className="mt-3 font-display text-xl font-semibold">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            {project.title}
          </Link>
        </h2>

        <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)]">
          {t(`projects:items.${project.translationKey}.shortDescription`)}
        </p>

        <p className="mt-3 text-xs font-medium text-[var(--text-secondary)]">
          {project.role}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline"
          >
            {t("common:actions.viewDetails")}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
          ) : null}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
