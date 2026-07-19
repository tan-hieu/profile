import { useTranslation } from "react-i18next";
import type { Project } from "@/types/project";
import { Badge } from "@/components/common/Badge";

interface BeforeAfterCompareProps {
  project: Project;
}

export function BeforeAfterCompare({ project }: BeforeAfterCompareProps) {
  const { t } = useTranslation("projects");
  const columns = [
    { key: "before" as const, items: project.beforeAfter.before, tone: "default" as const },
    { key: "migration" as const, items: project.beforeAfter.migration, tone: "accent" as const },
    { key: "after" as const, items: project.beforeAfter.after, tone: "primary" as const },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {columns.map((column) => (
        <div
          key={column.key}
          className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-5"
        >
          <h3 className="font-display text-lg font-semibold">
            {t(`sections.${column.key}`)}
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {column.items.map((item) => (
              <li key={item}>
                <Badge tone={column.tone}>{item}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
