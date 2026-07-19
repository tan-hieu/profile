import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { journeySteps } from "@/data/profile";
import { Reveal } from "@/components/common/Reveal";

export function MigrationJourneyTimeline() {
  const { t } = useTranslation("home");

  return (
    <Reveal className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        {t("journey.title")}
      </h2>
      <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
        {t("journey.description")}
      </p>

      <ol className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-2">
        {journeySteps.map((step, index) => (
          <li key={step.id} className="flex flex-1 items-stretch gap-2">
            <div className="flex flex-1 flex-col rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-secondary)] p-4">
              <span className="font-mono text-xs text-[var(--accent-hover)]">
                0{index + 1}
              </span>
              <span className="mt-2 font-display text-base font-semibold text-[var(--text-primary)]">
                {t(`journey.${step.id}`)}
              </span>
            </div>
            {index < journeySteps.length - 1 ? (
              <ArrowRight
                className="mt-6 hidden shrink-0 text-[var(--primary)] lg:block"
                size={20}
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
