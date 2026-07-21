import type { SupportedLanguage } from "@/utils/constants";

/** Nội dung đa ngôn ngữ — sửa `vi` trước, các ngôn ngữ khác tùy chọn. */
export type LocalizedText = string | Partial<Record<SupportedLanguage, string>>;

export function pickLocalized(
  text: LocalizedText,
  language: SupportedLanguage,
): string {
  if (typeof text === "string") {
    return text;
  }

  return text[language] ?? text.vi ?? text.en ?? "";
}
