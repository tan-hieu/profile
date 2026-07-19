import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";

interface SeoProps {
  title: string;
  description: string;
}

export function Seo({ title, description }: SeoProps) {
  const resolvedTitle = title.includes("{{name}}")
    ? title.replace("{{name}}", profile.fullName)
    : title;
  const resolvedDescription = description.includes("{{name}}")
    ? description.replace("{{name}}", profile.fullName)
    : description;

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
