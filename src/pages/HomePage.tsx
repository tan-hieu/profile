import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { Reveal } from "@/components/common/Reveal";
import { MigrationJourneyTimeline } from "@/components/home/MigrationJourneyTimeline";
import {
  featuredTechnologies,
  profile,
  quickStats,
} from "@/data/profile";
import { getFeaturedProjects } from "@/data/projects";

export function HomePage() {
  const { t } = useTranslation(["home", "common", "projects"]);
  const prefersReducedMotion = useReducedMotion();
  const featured = getFeaturedProjects().slice(0, 3);

  return (
      <>
      <Seo title={t("home:meta.title")} description={t("home:meta.description")} />

      <section className="relative overflow-hidden">
        <div
          className="bg-grid-subtle pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        />
        <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge tone="accent">{t("home:eyebrow")}</Badge>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              {t("home:greeting")}{" "}
              <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
                {profile.fullName}
              </span>
            </h1>
            <p className="mt-4 font-display text-xl font-medium text-[var(--primary)] sm:text-2xl">
              {t("home:role")}
            </p>
            <p className="mt-5 max-w-xl text-base text-[var(--text-secondary)] sm:text-lg">
              {t("home:intro")}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects">
                <Button size="lg" className="gap-2">
                  {t("home:cta.projects")}
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </Link>
              <a href={profile.resumeUrl} download>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Download size={18} aria-hidden="true" />
                  {t("home:cta.cv")}
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {featuredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                >
                  <Badge tone={index < 3 ? "primary" : "default"}>{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="relative" initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }}>
            <div
              className="absolute -inset-6 rounded-[2rem] bg-[image:var(--gradient-primary)] opacity-20 blur-2xl"
              aria-hidden="true"
            />
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[0_24px_60px_var(--shadow)]">
              <img src={profile.avatar} alt={profile.fullName} className="aspect-[4/5] w-full rounded-[1.1rem] bg-[var(--surface-secondary)] object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                <p className="font-display font-semibold text-white">{profile.fullName}</p>
                <p className="mt-1 text-sm text-slate-300">{t("home:role")}</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <Container className="pb-16">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <p className="font-display text-3xl font-semibold text-[var(--primary)]">
                  {t(`home:${stat.valueKey}`)}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {t(`home:${stat.labelKey}`)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16">
          <MigrationJourneyTimeline />
        </div>

        <Reveal className="mt-16">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                {t("home:featured.title")}
              </h2>
              <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
                {t("home:featured.description")}
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline"
            >
              {t("common:actions.viewProjects")}
              <ExternalLink size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[0_16px_40px_var(--shadow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.category.slice(0, 2).map((category) => (
                      <Badge key={category} tone="primary">
                        {t(`projects:filters.${category === "web" ? "web" : category}`)}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold group-hover:text-[var(--primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {t(`projects:items.${project.translationKey}.shortDescription`)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
                    {t("common:actions.viewDetails")}
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
      </>
  );
}
