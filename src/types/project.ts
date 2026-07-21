export interface ProjectBeforeAfter {
  before: string[];
  migration: string[];
  after: string[];
}

/** Toàn bộ nội dung mô tả dự án — sửa trực tiếp tại đây (tiếng Việt). */
export interface ProjectContent {
  shortDescription: string;
  overview: string;
  context: string;
  role: string;
  scope: string;
  architectureDescription: string;
  problems: string[];
  goals: string[];
  responsibilities: string[];
  highlights: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  learnings: string[];
  /** Nhãn từng bước quy trình — cùng thứ tự với processStepIds */
  processSteps: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Array<
    | "migration"
    | "web"
    | "frontend"
    | "backend"
    | "cloud"
  >;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  order: number;
  beforeAfter: ProjectBeforeAfter;
  /** Id từng bước — chỉ dùng làm key nội bộ, không cần sửa khi đổi nội dung */
  processStepIds: string[];
  architectureLayers: string[];
  content: ProjectContent;
}
