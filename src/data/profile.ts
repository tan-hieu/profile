import type { Profile } from "@/types/profile";

/**
 * ═══════════════════════════════════════════════════════════════
 *  THÔNG TIN CÁ NHÂN — Sửa trực tiếp tại đây.
 * ═══════════════════════════════════════════════════════════════
 */
export const profile: Profile = {
  fullName: "Đoàn Tấn Hiếu",
  shortName: "HIT",
  role: "Backend Developer",
  location: "Vietnam",
  email: "dtanhieu123@gmail.com",
  phone: undefined,
  avatar: "/images/avatar-placeholder.jpg",
  workspaceImage: "/images/gallery-workspace.jpg",
  projectImage: "/images/gallery-project.jpg",
  resumeUrl: "/resume/cv-placeholder.pdf",
  githubUrl: "https://github.com/tan-hieu",
  linkedinUrl:
    "https://www.linkedin.com/in/%C4%91o%C3%A0n-t%E1%BA%A5n-hi%E1%BA%BFu-9a9213401/?skipRedirect=true",
};

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
