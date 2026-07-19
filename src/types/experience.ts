export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  /** i18n keys for responsibilities */
  responsibilityKeys: string[];
  technologies: string[];
}
