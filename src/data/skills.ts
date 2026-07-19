import type { Skill } from "@/types/skill";

export const skills: Skill[] = [
  // Languages
  { id: "java", name: "Java", category: "language", usageLevel: "project", featured: true },
  { id: "javascript", name: "JavaScript", category: "language", usageLevel: "project", featured: true },
  { id: "typescript", name: "TypeScript", category: "language", usageLevel: "project", featured: true },
  { id: "csharp", name: "C#", category: "language", usageLevel: "project", featured: true },
  { id: "vbnet", name: "VB.NET", category: "language", usageLevel: "project" },
  { id: "sql", name: "SQL", category: "language", usageLevel: "project", featured: true },

  // Frontend
  { id: "react", name: "React", category: "frontend", usageLevel: "project", featured: true },
  { id: "vite", name: "Vite", category: "frontend", usageLevel: "project" },
  { id: "html", name: "HTML", category: "frontend", usageLevel: "project" },
  { id: "css", name: "CSS", category: "frontend", usageLevel: "project" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", usageLevel: "project" },
  { id: "bootstrap", name: "Bootstrap", category: "frontend", usageLevel: "practical" },
  { id: "responsive", name: "Responsive Design", category: "frontend", usageLevel: "project" },
  { id: "hlsjs", name: "HLS.js", category: "frontend", usageLevel: "project" },

  // Backend
  { id: "spring-boot", name: "Spring Boot", category: "backend", usageLevel: "project", featured: true },
  { id: "dotnet", name: "C# / .NET", category: "backend", usageLevel: "project", featured: true },
  { id: "rest-api", name: "REST API", category: "backend", usageLevel: "project", featured: true },
  { id: "webhook", name: "Webhook", category: "backend", usageLevel: "project" },
  { id: "payment", name: "Payment Integration", category: "backend", usageLevel: "project" },
  { id: "jsp", name: "JSP", category: "backend", usageLevel: "project" },

  // Database
  { id: "postgresql", name: "PostgreSQL", category: "database", usageLevel: "project", featured: true },
  { id: "oracle", name: "Oracle", category: "database", usageLevel: "practical" },
  { id: "db-design", name: "Database Design", category: "database", usageLevel: "project" },
  { id: "sql-query", name: "SQL Query", category: "database", usageLevel: "project" },
  { id: "data-migration", name: "Data Migration", category: "database", usageLevel: "project" },
  { id: "seed-script", name: "Seed Script", category: "database", usageLevel: "practical" },

  // Cloud / tools
  { id: "git", name: "Git", category: "tool", usageLevel: "project", featured: true },
  { id: "github", name: "GitHub", category: "tool", usageLevel: "project" },
  { id: "docker", name: "Docker", category: "cloud", usageLevel: "project", featured: true },
  { id: "aws-s3", name: "AWS S3", category: "cloud", usageLevel: "project" },
  { id: "cloudfront", name: "CloudFront", category: "cloud", usageLevel: "project" },
  { id: "mediaconvert", name: "MediaConvert", category: "cloud", usageLevel: "project" },
  { id: "payos", name: "PayOS", category: "tool", usageLevel: "project" },
  { id: "postman", name: "Postman", category: "tool", usageLevel: "project" },

  // Business
  { id: "legacy-analysis", name: "Legacy Code Analysis", category: "business", usageLevel: "project", featured: true },
  { id: "system-migration", name: "System Migration", category: "business", usageLevel: "project", featured: true },
  { id: "business-verify", name: "Business Logic Verification", category: "business", usageLevel: "project", featured: true },
  { id: "debugging", name: "Debugging", category: "business", usageLevel: "project" },
  { id: "api-integration", name: "API Integration", category: "business", usageLevel: "project" },
  { id: "excel-report", name: "Excel Report Generation", category: "business", usageLevel: "project" },
  { id: "tech-docs", name: "Technical Documentation", category: "business", usageLevel: "project" },
];

export const skillCategories = [
  "language",
  "frontend",
  "backend",
  "database",
  "cloud",
  "tool",
  "business",
] as const;

export type SkillCategory = (typeof skillCategories)[number];
