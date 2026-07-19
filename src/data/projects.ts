import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "handy",
    slug: "handy-terminal-migration",
    title: "Handy Terminal System Migration",
    translationKey: "handy",
    category: ["migration", "backend"],
    role: "Software Developer Intern",
    technologies: [
      "Android",
      "VB.NET",
      "BHT-BASIC",
      "Keyence BT-A1000",
      "Existing Server",
      "Existing Database",
    ],
    image: "/images/projects/handy-terminal.svg",
    featured: true,
    order: 2,
    beforeAfter: {
      before: ["BHT Device", "BHT-OS", "BHT-BASIC"],
      migration: ["Business analysis", "Function conversion", "Device switch"],
      after: ["Android Device", "Keyence BT-A1000", "VB.NET Communication"],
    },
    processSteps: [
      { id: "legacy", labelKey: "items.handy.process.legacy" },
      { id: "analysis", labelKey: "items.handy.process.analysis" },
      { id: "convert", labelKey: "items.handy.process.convert" },
      { id: "pc", labelKey: "items.handy.process.pc" },
      { id: "test", labelKey: "items.handy.process.test" },
    ],
    architectureLayers: [
      "Android Handy App",
      "VB.NET Communication App",
      "Existing Server / Database",
    ],
  },
  {
    id: "wms",
    slug: "jsp-to-csharp-migration",
    title: "Legacy JSP to C# WMS Migration",
    translationKey: "wms",
    category: ["migration", "backend"],
    role: "Software Developer Intern",
    technologies: [
      "Java",
      "JSP",
      "C#",
      ".NET",
      "PostgreSQL",
      "SQL",
      "Excel template",
      "Git",
    ],
    image: "/images/projects/jsp-csharp.svg",
    featured: true,
    order: 3,
    beforeAfter: {
      before: ["Java", "JSP", "Business logic in legacy source"],
      migration: ["Logic analysis", "DB mapping", "Comparison testing"],
      after: ["C#", ".NET", "Excel report generation"],
    },
    processSteps: [
      { id: "jsp", labelKey: "items.wms.process.jsp" },
      { id: "logic", labelKey: "items.wms.process.logic" },
      { id: "db", labelKey: "items.wms.process.db" },
      { id: "csharp", labelKey: "items.wms.process.csharp" },
      { id: "compare", labelKey: "items.wms.process.compare" },
      { id: "excel", labelKey: "items.wms.process.excel" },
    ],
    architectureLayers: [
      "Legacy JSP Application",
      "Business Logic Analysis",
      "C# Application / Infrastructure",
      "PostgreSQL",
      "Excel Output",
    ],
  },
  {
    id: "learnova",
    slug: "learnova",
    title: "LearnOva Online Learning Platform",
    translationKey: "learnova",
    category: ["web", "frontend", "backend", "cloud"],
    role: "Full-stack Developer",
    technologies: [
      "React",
      "Vite",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "HLS.js",
      "AWS S3",
      "CloudFront",
      "MediaConvert",
      "PayOS",
      "Docker",
    ],
    image: "/images/projects/learnova.svg",
    featured: true,
    order: 1,
    beforeAfter: {
      before: ["Monolithic learning idea", "Direct video upload concept"],
      migration: ["HLS conversion", "Payment webhook", "Revenue logic"],
      after: ["HLS streaming", "CloudFront CDN", "PayOS + webhook flow"],
    },
    processSteps: [
      { id: "auth", labelKey: "items.learnova.process.auth" },
      { id: "course", labelKey: "items.learnova.process.course" },
      { id: "video", labelKey: "items.learnova.process.video" },
      { id: "pay", labelKey: "items.learnova.process.pay" },
      { id: "revenue", labelKey: "items.learnova.process.revenue" },
    ],
    architectureLayers: [
      "React Frontend",
      "Spring Boot API",
      "PostgreSQL",
      "S3 + MediaConvert + CloudFront",
      "PayOS Webhook",
    ],
  },
];

export const projectFilters = [
  "all",
  "migration",
  "web",
  "frontend",
  "backend",
  "cloud",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((left, right) => left.order - right.order);
}

export function getAdjacentProjects(slug: string) {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const index = sorted.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}
