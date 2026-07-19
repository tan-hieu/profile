import { useTranslation } from "react-i18next";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { Reveal } from "@/components/common/Reveal";
import { TechnologyMap } from "@/components/skills/TechnologyMap";
import { skills, skillCategories } from "@/data/skills";

const levelTone = {
  project: "primary",
  practical: "accent",
  learning: "default",
} as const;

export function SkillsPage() {
  const { t } = useTranslation("skills");

  return (
    <>
      <Seo title={t("meta.title")} description={t("meta.description")} />

      <Container className="py-8 sm:py-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <Reveal className="mb-10 flex flex-wrap gap-3">
          {(["project", "practical", "learning"] as const).map((level) => (
            <Badge key={level} tone={levelTone[level]}>
              {t(`levels.${level}`)}
            </Badge>
          ))}
        </Reveal>

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category,
            );
            return (
              <Reveal key={category} delay={categoryIndex * 0.03}>
                <h2 className="font-display text-xl font-semibold text-[var(--primary)]">
                  {t(`categories.${category}`)}
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-[var(--primary)] hover:shadow-[0_10px_24px_var(--shadow)]"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <Badge tone={levelTone[skill.usageLevel]}>
                        {t(`levels.${skill.usageLevel}`)}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16">
          <TechnologyMap />
        </div>
      </Container>
    </>
  );
}
