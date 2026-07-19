import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "@/utils/constants";

import viCommon from "@/locales/vi/common.json";
import viHome from "@/locales/vi/home.json";
import viAbout from "@/locales/vi/about.json";
import viSkills from "@/locales/vi/skills.json";
import viExperience from "@/locales/vi/experience.json";
import viProjects from "@/locales/vi/projects.json";
import viContact from "@/locales/vi/contact.json";

import enCommon from "@/locales/en/common.json";
import enHome from "@/locales/en/home.json";
import enAbout from "@/locales/en/about.json";
import enSkills from "@/locales/en/skills.json";
import enExperience from "@/locales/en/experience.json";
import enProjects from "@/locales/en/projects.json";
import enContact from "@/locales/en/contact.json";

import jaCommon from "@/locales/ja/common.json";
import jaHome from "@/locales/ja/home.json";
import jaAbout from "@/locales/ja/about.json";
import jaSkills from "@/locales/ja/skills.json";
import jaExperience from "@/locales/ja/experience.json";
import jaProjects from "@/locales/ja/projects.json";
import jaContact from "@/locales/ja/contact.json";

import zhCommon from "@/locales/zh/common.json";
import zhHome from "@/locales/zh/home.json";
import zhAbout from "@/locales/zh/about.json";
import zhSkills from "@/locales/zh/skills.json";
import zhExperience from "@/locales/zh/experience.json";
import zhProjects from "@/locales/zh/projects.json";
import zhContact from "@/locales/zh/contact.json";

import koCommon from "@/locales/ko/common.json";
import koHome from "@/locales/ko/home.json";
import koAbout from "@/locales/ko/about.json";
import koSkills from "@/locales/ko/skills.json";
import koExperience from "@/locales/ko/experience.json";
import koProjects from "@/locales/ko/projects.json";
import koContact from "@/locales/ko/contact.json";

function getStoredLanguage(): SupportedLanguage {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
    return stored as SupportedLanguage;
  }
  return DEFAULT_LANGUAGE;
}

void i18n.use(initReactI18next).init({
  resources: {
    vi: {
      common: viCommon,
      home: viHome,
      about: viAbout,
      skills: viSkills,
      experience: viExperience,
      projects: viProjects,
      contact: viContact,
    },
    en: {
      common: enCommon,
      home: enHome,
      about: enAbout,
      skills: enSkills,
      experience: enExperience,
      projects: enProjects,
      contact: enContact,
    },
    ja: {
      common: jaCommon,
      home: jaHome,
      about: jaAbout,
      skills: jaSkills,
      experience: jaExperience,
      projects: jaProjects,
      contact: jaContact,
    },
    zh: {
      common: zhCommon,
      home: zhHome,
      about: zhAbout,
      skills: zhSkills,
      experience: zhExperience,
      projects: zhProjects,
      contact: zhContact,
    },
    ko: {
      common: koCommon,
      home: koHome,
      about: koAbout,
      skills: koSkills,
      experience: koExperience,
      projects: koProjects,
      contact: koContact,
    },
  },
  lng: getStoredLanguage(),
  fallbackLng: "en",
  ns: ["common", "home", "about", "skills", "experience", "projects", "contact"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
}).then(() => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = i18n.language;
  }
});

export default i18n;
