import { useTranslation } from "react-i18next";
import { skills, skillCategories } from "@/data/skills";
import { Badge } from "@/components/common/Badge";
import { Reveal } from "@/components/common/Reveal";

export function TechnologyMap() {
  const { t } = useTranslation("skills");

  return (
    <Reveal className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold">{t("map.title")}</h2>
      <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
        {t("map.description")}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter(
            (skill) => skill.category === category,
          );
          return (
            <div
              key={category}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-secondary)] p-4"
            >
              <h3 className="font-display text-base font-semibold text-[var(--primary)]">
                {t(`categories.${category}`)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge
                    key={skill.id}
                    tone={skill.featured ? "accent" : "default"}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
