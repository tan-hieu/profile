import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Seo } from "@/components/common/Seo";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { profile } from "@/data/profile";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactPage() {
  const { t } = useTranslation("contact");
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [lastSubmitAt, setLastSubmitAt] = useState(0);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) nextErrors.name = t("form.errors.required");
    if (!form.email.trim()) nextErrors.email = t("form.errors.required");
    else if (!isValidEmail(form.email.trim())) {
      nextErrors.email = t("form.errors.emailInvalid");
    }
    if (!form.subject.trim()) nextErrors.subject = t("form.errors.required");
    if (!form.message.trim()) nextErrors.message = t("form.errors.required");
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading" || Date.now() - lastSubmitAt < 2500) {
      return;
    }

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setLastSubmitAt(Date.now());

    try {
      // Demo submit — replace with EmailJS / API when available
      await new Promise((resolve) => setTimeout(resolve, 900));
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `${form.message}\n\n— ${form.name} <${form.email}>`,
      )}`;
      window.location.href = mailto;
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
      <>
      <Seo title={t("meta.title")} description={t("meta.description")} />

      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--primary)]"
            >
              <Mail size={20} className="text-[var(--primary)]" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                  {t("info.email")}
                </p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--primary)]"
            >
              <Github size={20} className="text-[var(--primary)]" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                  {t("info.github")}
                </p>
                <p className="font-medium break-all">{profile.githubUrl}</p>
              </div>
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--primary)]"
            >
              <Linkedin size={20} className="text-[var(--primary)]" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                  {t("info.linkedin")}
                </p>
                <p className="font-medium break-all">{profile.linkedinUrl}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <MapPin size={20} className="text-[var(--primary)]" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">
                  {t("info.location")}
                </p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-secondary)] p-5">
              <h2 className="font-display text-lg font-semibold">{t("cv.title")}</h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {t("cv.description")}
              </p>
              <a href={profile.resumeUrl} download className="mt-4 inline-flex">
                <Button className="gap-2">
                  <Download size={16} aria-hidden="true" />
                  {t("cv.button")}
                </Button>
              </a>
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_12px_32px_var(--shadow)]"
              noValidate
            >
              {(
                [
                  ["name", "text"],
                  ["email", "email"],
                  ["subject", "text"],
                ] as const
              ).map(([field, type]) => (
                <div key={field} className="mb-4">
                  <label
                    htmlFor={field}
                    className="mb-1.5 block text-sm font-medium"
                  >
                    {t(`form.${field}`)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={type}
                    value={form[field]}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        [field]: event.target.value,
                      }))
                    }
                    placeholder={t(`form.${field}Placeholder`)}
                    aria-invalid={Boolean(errors[field])}
                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                    className="h-11 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
                  />
                  {errors[field] ? (
                    <p
                      id={`${field}-error`}
                      className="mt-1 text-sm text-[var(--error)]"
                    >
                      {errors[field]}
                    </p>
                  ) : null}
                </div>
              ))}

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  placeholder={t("form.messagePlaceholder")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1 text-sm text-[var(--error)]">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button
                type="submit"
                isLoading={status === "loading"}
                disabled={status === "loading"}
                className="w-full sm:w-auto"
              >
                {status === "loading" ? t("form.sending") : t("form.submit")}
              </Button>

              {status === "success" ? (
                <p className="mt-4 text-sm text-[var(--success)]" role="status">
                  {t("form.success")}
                </p>
              ) : null}
              {status === "error" ? (
                <p className="mt-4 text-sm text-[var(--error)]" role="alert">
                  {t("form.error")}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </Container>
      </>
  );
}
