import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, ExternalLink, Sparkles } from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { Reveal } from "@/components/common/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/common/Stagger";
import { HeroBackground } from "@/components/home/HeroBackground";
import { HeroSpotlight } from "@/components/home/HeroSpotlight";
import { FloatingParticles } from "@/components/home/FloatingParticles";
import { AnimatedGradientText } from "@/components/home/AnimatedGradientText";
import { TypewriterRole } from "@/components/home/TypewriterRole";
import { TiltCard } from "@/components/home/TiltCard";
import { DecorativeCodeCard } from "@/components/home/DecorativeCodeCard";
import { ScrollIndicator } from "@/components/home/ScrollIndicator";
import { TechMarquee } from "@/components/home/TechMarquee";
import { SectionDivider } from "@/components/home/SectionDivider";
import { ParallaxImage } from "@/components/home/ParallaxImage";
import { ShineButtonWrap } from "@/components/home/ShineButtonWrap";
import { AnimatedStat } from "@/components/home/AnimatedStat";
import { MigrationJourneyTimeline } from "@/components/home/MigrationJourneyTimeline";
import { featuredTechnologies, profile } from "@/data/profile";
import { homeContent } from "@/data/home";
import { getFeaturedProjects } from "@/data/projects";
import { useIsVietnamese, useProjectContent } from "@/hooks/usePortfolioContent";
import type { Project } from "@/types/project";

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function FeaturedProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation(["common", "projects"]);
  const content = useProjectContent(project);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative"
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -10, scale: 1.03, transition: { type: "spring", stiffness: 280, damping: 18 } }
      }
    >
      <div className="pointer-events-none absolute -inset-px rounded-[var(--radius-lg)] bg-[image:var(--gradient-primary)] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70" />
      <Link
        to={`/projects/${project.slug}`}
        className="group relative block overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[0_8px_24px_var(--shadow)] transition-colors duration-300 hover:border-[var(--primary)] hover:shadow-[0_24px_56px_var(--shadow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[image:linear-gradient(180deg,transparent_30%,color-mix(in_srgb,var(--background)_90%,transparent))]" />
          <motion.div
            className="absolute inset-0 bg-[image:linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)]"
            initial={{ x: "-120%" }}
            whileHover={{ x: "120%" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2">
            {project.category.slice(0, 2).map((category) => (
              <Badge key={category} tone="primary">
                {t(`projects:filters.${category === "web" ? "web" : category}`)}
              </Badge>
            ))}
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold transition-colors group-hover:text-[var(--primary)]">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {content?.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
            {t("common:actions.viewDetails")}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function HomePage() {
  const { t } = useTranslation(["home", "common", "projects"]);
  const isVi = useIsVietnamese();
  const content = isVi ? homeContent : null;
  const prefersReducedMotion = useReducedMotion();
  const featured = getFeaturedProjects().slice(0, 3);

  const stats =
    content?.stats ??
    [
      { value: t("home:stats.projects.value"), label: t("home:stats.projects.label") },
      { value: t("home:stats.personal.value"), label: t("home:stats.personal.label") },
      { value: t("home:stats.platforms.value"), label: t("home:stats.platforms.label") },
    ];

  const rolePhrases = isVi
    ? [
        content?.role ?? "Backend Developer",
        "API & PostgreSQL",
        "Migration hệ thống",
        "Full-stack Builder",
      ]
    : [
        t("home:role"),
        "API & Database",
        "Legacy Migration",
        "Full-stack Builder",
      ];

  const capabilityItems = isVi
    ? homeContent.capabilities.items
    : (["backend", "product", "delivery"] as const).map((id) => ({
        title: t(`home:capabilities.${id}.title`),
        body: t(`home:capabilities.${id}.body`),
      }));

  return (
    <>
      <Seo title={t("home:meta.title")} description={t("home:meta.description")} />

      <HeroSpotlight>
        <HeroBackground />
        <FloatingParticles />
        <Container className="relative z-[2] grid gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <motion.div
            variants={prefersReducedMotion ? undefined : heroContainer}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
          >
            <motion.div variants={prefersReducedMotion ? undefined : heroItem}>
              <Badge tone="accent" className="gap-2">
                <Sparkles size={14} aria-hidden="true" />
                {t("home:eyebrow")}
              </Badge>
            </motion.div>

            <motion.h1
              variants={prefersReducedMotion ? undefined : heroItem}
              className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            >
              {t("home:greeting")}{" "}
              <AnimatedGradientText>{profile.fullName}</AnimatedGradientText>
            </motion.h1>

            <motion.div variants={prefersReducedMotion ? undefined : heroItem}>
              <TypewriterRole
                phrases={rolePhrases}
                className="mt-4 font-display text-xl font-medium sm:text-2xl"
              />
            </motion.div>

            <motion.p
              variants={prefersReducedMotion ? undefined : heroItem}
              className="mt-5 max-w-xl text-base text-[var(--text-secondary)] sm:text-lg"
            >
              {content?.intro ?? t("home:intro")}
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? undefined : heroItem}
              className="mt-8 flex flex-wrap gap-3"
            >
              <ShineButtonWrap>
                <Link to="/projects">
                  <Button size="lg" className="gap-2 shadow-[0_12px_32px_color-mix(in_srgb,var(--primary)_35%,transparent)]">
                    {t("home:cta.projects")}
                    <ArrowRight size={18} aria-hidden="true" />
                  </Button>
                </Link>
              </ShineButtonWrap>
              <a href={profile.resumeUrl} download>
                <Button variant="secondary" size="lg" className="gap-2">
                  <Download size={18} aria-hidden="true" />
                  {t("home:cta.cv")}
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={prefersReducedMotion ? undefined : heroItem}
              className="mt-10 flex flex-wrap gap-2"
            >
              {featuredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.35 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.08, rotate: -1 }}
                >
                  <Badge tone={index < 3 ? "primary" : "default"}>{tech}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.88, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <DecorativeCodeCard />
            <div
              className="absolute -inset-8 rounded-[2.2rem] bg-[image:var(--gradient-primary)] opacity-30 blur-3xl"
              aria-hidden="true"
            />
            <div className="animate-ring-pulse pointer-events-none absolute -inset-2 rounded-[1.65rem] border border-[var(--primary)] opacity-50" />
            <TiltCard>
              <motion.div
                className="group relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[0_28px_70px_var(--shadow)]"
                animate={prefersReducedMotion ? undefined : { y: [0, -12, 0] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <img
                  src={profile.avatar}
                  alt={profile.fullName}
                  className="aspect-[4/5] w-full rounded-[1.1rem] bg-[var(--surface-secondary)] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                  <p className="font-display font-semibold text-white">
                    {profile.fullName}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {content?.role ?? t("home:role")}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          </motion.div>
        </Container>
        <ScrollIndicator />
      </HeroSpotlight>

      <TechMarquee items={featuredTechnologies} />

      <Container className="pb-16">
        <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-3" stagger={0.12}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <AnimatedStat value={stat.value} label={stat.label} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <SectionDivider />

        <Reveal className="mt-4">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {content?.capabilities.eyebrow ?? t("home:capabilities.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              {content?.capabilities.title ?? t("home:capabilities.title")}
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              {content?.capabilities.description ?? t("home:capabilities.description")}
            </p>
          </div>

          <StaggerGroup className="mt-8 grid gap-5 lg:grid-cols-3" stagger={0.14}>
            {capabilityItems.map((item, index) => (
              <StaggerItem key={item.title}>
                <motion.article
                  className="group relative h-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -8, scale: 1.02, transition: { type: "spring", stiffness: 260, damping: 16 } }
                  }
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--primary)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                  <span className="font-mono text-xs text-[var(--primary)]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--text-secondary)]">
                    {item.body}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[image:var(--gradient-primary)] transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <SectionDivider />

        <div className="mt-4">
          <MigrationJourneyTimeline />
        </div>

        <SectionDivider />

        <Reveal className="mt-4 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid min-w-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {content?.story.eyebrow ?? t("home:story.eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                {content?.story.title ?? t("home:story.title")}
              </h2>
              <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
                {content?.story.body ?? t("home:story.body")}
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex w-fit items-center gap-2 font-medium text-[var(--primary)] transition-transform hover:translate-x-1.5 hover:text-[var(--primary-hover)]"
              >
                {content?.story.action ?? t("home:story.action")}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="min-w-0 p-3">
              <ParallaxImage className="group relative min-w-0 overflow-hidden rounded-[var(--radius-md)] bg-[var(--surface-secondary)]">
                <img
                  src={profile.workspaceImage}
                  alt={t("home:gallery.workspaceAlt")}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] lg:h-[26rem]"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-3 bottom-3 rounded-lg bg-black/65 px-3 py-2 text-sm text-white backdrop-blur">
                  {content?.gallery.workspace ?? t("home:gallery.workspace")}
                </figcaption>
              </ParallaxImage>
            </div>
          </div>
        </Reveal>

        <SectionDivider />

        <Reveal className="mt-4">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                {content?.featured.title ?? t("home:featured.title")}
              </h2>
              <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
                {content?.featured.description ?? t("home:featured.description")}
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

          <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" stagger={0.12}>
            {featured.map((project) => (
              <StaggerItem key={project.id}>
                <FeaturedProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <SectionDivider />

        <Reveal className="mt-4 grid min-w-0 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-[1.1fr_0.9fr]">
          <ParallaxImage className="group min-w-0 overflow-hidden bg-[var(--surface-secondary)]" offset={36}>
            <img
              src={profile.projectImage}
              alt={t("home:gallery.projectAlt")}
              className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] lg:h-full lg:min-h-[24rem]"
              loading="lazy"
            />
          </ParallaxImage>
          <div className="flex min-w-0 flex-col justify-center p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              {content?.gallery.project ?? t("home:gallery.project")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              {content?.closing.title ?? t("home:closing.title")}
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              {content?.closing.body ?? t("home:closing.body")}
            </p>
            <ShineButtonWrap className="mt-6 w-fit">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-3 font-medium text-white transition-transform hover:scale-[1.03] hover:bg-[var(--primary-hover)]"
              >
                {content?.closing.action ?? t("home:closing.action")}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </ShineButtonWrap>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
