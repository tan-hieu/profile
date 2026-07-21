import { useTranslation } from "react-i18next";
import type { Project, ProjectContent } from "@/types/project";
import type { Experience, ExperienceContent } from "@/types/experience";
import type { SupportedLanguage } from "@/utils/constants";

function readStringList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  if (value && typeof value === "object") {
    return Object.values(value as Record<string, string>);
  }
  return [];
}

/** Lấy nội dung dự án: tiếng Việt từ data, ngôn ngữ khác từ locales/projects.json */
export function useProjectContent(project: Project | undefined): ProjectContent | null {
  const { i18n, t } = useTranslation("projects");
  const language = i18n.language as SupportedLanguage;

  if (!project) {
    return null;
  }

  if (language === "vi") {
    return project.content;
  }

  const key = project.id;
  return {
    shortDescription: t(`items.${key}.shortDescription`),
    overview: t(`items.${key}.overview`),
    context: t(`items.${key}.context`),
    role: t(`items.${key}.role`),
    scope: t(`items.${key}.scope`),
    architectureDescription: t(`items.${key}.architectureDescription`),
    problems: readStringList(t(`items.${key}.problems`, { returnObjects: true })),
    goals: readStringList(t(`items.${key}.goals`, { returnObjects: true })),
    responsibilities: readStringList(
      t(`items.${key}.responsibilities`, { returnObjects: true }),
    ),
    highlights: readStringList(t(`items.${key}.highlights`, { returnObjects: true })),
    challenges: readStringList(t(`items.${key}.challenges`, { returnObjects: true })),
    solutions: readStringList(t(`items.${key}.solutions`, { returnObjects: true })),
    results: readStringList(t(`items.${key}.results`, { returnObjects: true })),
    learnings: readStringList(t(`items.${key}.learnings`, { returnObjects: true })),
    processSteps: readStringList(t(`items.${key}.process`, { returnObjects: true })),
  };
}

/** Lấy nội dung kinh nghiệm: tiếng Việt từ data, ngôn ngữ khác từ locales */
export function useExperienceContent(
  experience: Experience,
): ExperienceContent {
  const { i18n, t } = useTranslation("experience");
  const language = i18n.language as SupportedLanguage;

  if (language === "vi") {
    return experience.content;
  }

  const responsibilities = readStringList(
    t(`items.${experience.id}`, { returnObjects: true }),
  ).filter((item) => item.startsWith("r") === false);

  // Fallback: read r1, r2, ... from locale
  const fromKeys: string[] = [];
  for (let index = 1; index <= 12; index += 1) {
    const item = t(`items.${experience.id}.r${index}`, { defaultValue: "" });
    if (!item) break;
    fromKeys.push(item);
  }

  return {
    summary: t(`items.${experience.id}.summary`),
    responsibilities: fromKeys.length > 0 ? fromKeys : responsibilities,
  };
}

export function useIsVietnamese(): boolean {
  const { i18n } = useTranslation();
  return (i18n.language as SupportedLanguage) === "vi";
}
