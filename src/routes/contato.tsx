import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useT } from "@/i18n";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — PS Business Group" },
      {
        name: "description",
        content:
          "Entre em contato com o PS Business Group para parcerias e oportunidades de negócio.",
      },
      { property: "og:title", content: "Contato — PS Business Group" },
      {
        property: "og:description",
        content: "Entre em contato para parcerias e oportunidades de negócio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://psbusiness.lovable.app/contato" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/Vp46e3IjKETKAi2tCDp1ZEMcc382/social-images/social-1776567463821-Oficial_-_PS_Business_Group_-_Horizontal.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://psbusiness.lovable.app/contato" }],
  }),
  component: ContatoPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const contactSchema = z.object({
  nome: z.string().trim().min(2, "min").max(100, "max"),
  empresa: z.string().trim().max(120, "max").optional().or(z.literal("")),
  email: z.string().trim().email("email").max(255, "max"),
  assunto: z.string().trim().min(3, "min").max(150, "max"),
  msg: z.string().trim().min(10, "min").max(2000, "max"),
  // Honeypot — must remain empty. Bots typically fill all fields.
  website: z.string().max(0, "spam").optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

// Google Forms endpoint (no-cors POST — accepts cross-origin form submissions)
const GFORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfZJ0NaUMT8YyRa46UmQChp3iIYDT8jnaa9PPEfiQoVD7z2UQ/formResponse";
const GFORM_ENTRY = {
  nome: "entry.1324216922",
  email: "entry.1947794513",
  mensagem: "entry.1159789124",
} as const;

function ContatoPage() {
  const { t } = useT();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    (window as unknown as { __contatoMarks?: string[] }).__contatoMarks = [
      ...((window as unknown as { __contatoMarks?: string[] }).__contatoMarks ?? []),
      `onSubmit@${Date.now()}`,
    ];
    console.log("[contato] onSubmit fired");
    e.preventDefault();
    if (submitting || sent) return;
    setSubmitting(true);
    setSubmitError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const next: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSubmitting(false);
      return;
    }
    // Honeypot tripped — silently pretend success.
    if (result.data.website) {
      setSent(true);
      setSubmitting(false);
      return;
    }
    setErrors({});

    // Build payload for Google Forms. The form only has 3 fields,
    // so we fold empresa + assunto into the message body.
    const { nome, empresa, email, assunto, msg } = result.data;
    const composedMessage = [
      assunto ? `Assunto: ${assunto}` : null,
      empresa ? `Empresa: ${empresa}` : null,
      "",
      msg,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const body = new URLSearchParams();
    body.append(GFORM_ENTRY.nome, nome);
    body.append(GFORM_ENTRY.email, email);
    body.append(GFORM_ENTRY.mensagem, composedMessage);

    try {
      console.log("[contato] POSTing to Google Forms", { len: body.toString().length });
      // Google Forms does not return CORS headers; use no-cors fire-and-forget.
      // A successful POST resolves; only true network failures reject.
      await fetch(GFORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      console.log("[contato] fetch resolved");
      // Track conversion in GA4 (if consent granted)
      try {
        window.gtag?.("event", "generate_lead", {
          event_category: "contact",
          event_label: "contact_form",
        });
      } catch {
        // ignore
      }
      setSent(true);
    } catch {
      setSubmitError(t("contact.err.send"));
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-16 lg:pt-52">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t("tag.contact")}
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight text-balance">
              {t("contact.titleA")}{" "}
              <span className="italic text-gold-soft">{t("contact.titleB")}</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              {t("contact.lead")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32" aria-labelledby="contato-info-heading">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-5xl mx-auto px-6 lg:px-12 grid md:grid-cols-5 gap-16"
        >
          <div className="md:col-span-2 space-y-8">
            <h2 id="contato-info-heading" className="sr-only">
              {t("contact.email")}
            </h2>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-2">
                {t("contact.email")}
              </div>
              <a
                href="mailto:contato@psbusinessgroup.com.br"
                className="hover:text-gold-soft transition-colors duration-300"
              >
                contato@psbusinessgroup.com.br
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-2">
                {t("contact.region")}
              </div>
              <p>{t("contact.regionV")}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-2">
                {t("contact.group")}
              </div>
              <p className="text-muted-foreground">{t("contact.groupV")}</p>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="md:col-span-3 space-y-6">
            {/* Honeypot — visually hidden, must stay empty */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label={t("contact.f.name")} id="nome" required error={errors.nome} />
              <Field label={t("contact.f.company")} id="empresa" error={errors.empresa} />
            </div>
            <Field
              label={t("contact.f.email")}
              id="email"
              type="email"
              required
              error={errors.email}
            />
            <Field label={t("contact.f.subject")} id="assunto" required error={errors.assunto} />
            <div>
              <label
                htmlFor="msg"
                className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3"
              >
                {t("contact.f.msg")} <span className="text-gold-soft">*</span>
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={5}
                required
                maxLength={2000}
                aria-invalid={!!errors.msg}
                aria-describedby={errors.msg ? "msg-error" : undefined}
                className="w-full bg-transparent border-b border-border focus:border-gold-soft outline-none py-3 text-base resize-none transition-colors duration-300"
              />
              {errors.msg && (
                <p id="msg-error" className="mt-2 text-xs text-destructive">
                  {t("contact.err.msg")}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={sent || submitting}
              aria-busy={submitting}
              className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500 disabled:opacity-50"
            >
              {sent
                ? t("contact.f.sent")
                : submitting
                  ? t("contact.f.sending")
                  : `${t("contact.f.send")} →`}
            </button>
            <div aria-live="polite" className="min-h-[1.25rem]">
              {submitError && (
                <p role="alert" className="text-xs text-destructive">
                  {submitError}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
  error,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const { t } = useT();
  const errKey = error ? `contact.err.${id}` : "";
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3"
      >
        {label} {required && <span className="text-gold-soft">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        maxLength={type === "email" ? 255 : 150}
        autoComplete={type === "email" ? "email" : "off"}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full bg-transparent border-b border-border focus:border-gold-soft outline-none py-3 text-base transition-colors duration-300"
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {t(errKey) || t("contact.err.generic")}
        </p>
      )}
    </div>
  );
}
