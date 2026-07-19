import type { Profile } from "@/types/profile";

export const profile: Profile = {
  fullName: "Đoàn Tấn Hiếu",
  shortName: "HIT",
  role: "Backend Developer",
  location: "Vietnam",
  email: "dtanhieu123@gmail.com",
  phone: undefined,
  avatar: "/images/avatar-placeholder.svg",
  resumeUrl: "/resume/cv-placeholder.pdf",
  githubUrl: "https://github.com/tan-hieu",
  linkedinUrl: "https://www.linkedin.com/in/%C4%91o%C3%A0n-t%E1%BA%A5n-hi%E1%BA%BFu-9a9213401/?skipRedirect=true",
};

export const journeySteps = [
  { id: "legacy", labelKey: "journey.legacy" },
  { id: "analysis", labelKey: "journey.analysis" },
  { id: "migration", labelKey: "journey.migration" },
  { id: "testing", labelKey: "journey.testing" },
  { id: "modern", labelKey: "journey.modern" },
] as const;

export const quickStats = [
  { id: "migrations", valueKey: "stats.migrations.value", labelKey: "stats.migrations.label" },
  { id: "personal", valueKey: "stats.personal.value", labelKey: "stats.personal.label" },
  { id: "platforms", valueKey: "stats.platforms.value", labelKey: "stats.platforms.label" },
] as const;

export const featuredTechnologies = [
  "Java",
  "C#",
  ".NET",
  "VB.NET",
  "Android",
  "React",
  "Spring Boot",
  "PostgreSQL",
  "SQL",
  "Docker",
] as const;

export const aboutStrengths = [
  "legacy",
  "business",
  "multitech",
  "verification",
  "learning",
  "migration",
] as const;

export const aboutTimeline = [
  { id: "study" },
  { id: "goline" },
  { id: "rikai" },
  { id: "personal" },
] as const;
