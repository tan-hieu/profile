export interface Skill {
  id: string;
  name: string;
  category:
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
    | "tool"
    | "business";
  icon?: string;
  usageLevel: "project" | "practical" | "learning";
  featured?: boolean;
}
