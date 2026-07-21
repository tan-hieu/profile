/** Toàn bộ nội dung kinh nghiệm — sửa trực tiếp tại đây. */
export interface ExperienceContent {
  summary: string;
  responsibilities: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  technologies: string[];
  content: ExperienceContent;
}
