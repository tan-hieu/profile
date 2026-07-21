export interface Profile {
  fullName: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  /** Ảnh chân dung / hero */
  avatar: string;
  /** Ảnh không gian làm việc */
  workspaceImage: string;
  /** Ảnh khi làm dự án */
  projectImage: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}
