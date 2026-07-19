export interface ProjectBeforeAfter {
  before: string[];
  migration: string[];
  after: string[];
}

export interface ProjectProcessStep {
  id: string;
  labelKey: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  /** i18n key prefix under projects.items.<id> */
  translationKey: string;
  category: Array<
    | "migration"
    | "web"
    | "frontend"
    | "backend"
    | "cloud"
  >;
  role: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  order: number;
  beforeAfter: ProjectBeforeAfter;
  processSteps: ProjectProcessStep[];
  architectureLayers: string[];
}
