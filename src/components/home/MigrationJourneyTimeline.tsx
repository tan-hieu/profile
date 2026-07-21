import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { homeContent } from "@/data/home";
import { Reveal } from "@/components/common/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/common/Stagger";
import { useIsVietnamese } from "@/hooks/usePortfolioContent";

export function MigrationJourneyTimeline() {
  const { t } = useTranslation("home");
  const isVi = useIsVietnamese();
  const prefersReducedMotion = useReducedMotion();
  const journey = isVi ? homeContent.journey : null;
  const steps = isVi
    ? homeContent.journey.steps
    : [
        t("journey.discover"),
        t("journey.design"),
        t("journey.build"),
        t("journey.validate"),
        t("journey.improve"),
      ];

  return (
    <Reveal className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        {journey?.title ?? t("journey.title")}
      </h2>
      <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
        {journey?.description ?? t("journey.description")}
      </p>

      <StaggerGroup
        className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-2"
        stagger={0.1}
      >
        {steps.map((label, index) => (
          <StaggerItem key={label} className="flex flex-1 items-stretch gap-2">
            <motion.div
              className="flex flex-1 flex-col rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-secondary)] p-4"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -4, borderColor: "var(--primary)" }
              }
            >
              <span className="font-mono text-xs text-[var(--accent-hover)]">
                0{index + 1}
              </span>
              <span className="mt-2 font-display text-base font-semibold text-[var(--text-primary)]">
                {label}
              </span>
            </motion.div>
            {index < steps.length - 1 ? (
              <ArrowRight
                className="mt-6 hidden shrink-0 text-[var(--primary)] lg:block"
                size={20}
                aria-hidden="true"
              />
            ) : null}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Reveal>
  );
}
