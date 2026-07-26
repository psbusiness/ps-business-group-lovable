import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";
import { useT } from "@/i18n";
import logo from "@/assets/ps-logo-official.png";
import skylineBg from "@/assets/ps-skyline.png";
import handshakeImg from "@/assets/ps-handshake.png";
import officeImg from "@/assets/ps-office.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PS Business Group — Conexões que impulsionam o futuro" },
      {
        name: "description",
        content:
          "No PS Business Group, cada parceria representa confiança, visão compartilhada e compromisso com crescimento sustentável.",
      },
      { property: "og:title", content: "PS Business Group — Conexões que impulsionam o futuro" },
      {
        property: "og:description",
        content:
          "Grupo empresarial reunindo empresas de excelência em diferentes setores estratégicos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://psbusiness.lovable.app/" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/Vp46e3IjKETKAi2tCDp1ZEMcc382/social-images/social-1776567463821-Oficial_-_PS_Business_Group_-_Horizontal.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PS Business Group" },
      {
        name: "twitter:description",
        content: "Grupo empresarial brasileiro em múltiplos setores estratégicos.",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/Vp46e3IjKETKAi2tCDp1ZEMcc382/social-images/social-1776567463821-Oficial_-_PS_Business_Group_-_Horizontal.webp",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://psbusiness.lovable.app/" }],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeUpSimple = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const contactSchema = z.object({
  nome: z.string().trim().min(2, "min").max(100, "max"),
  empresa: z.string().trim().max(120, "max").optional().or(z.literal("")),
  email: z.string().trim().email("email").max(255, "max"),
  assunto: z.string().trim().min(3, "min").max(150, "max"),
  msg: z.string().trim().min(10, "min").max(2000, "max"),
  website: z.string().max(0, "spam").optional(),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const GFORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfZJ0NaUMT8YyRa46UmQChp3iIYDT8jnaa9PPEfiQoVD7z2UQ/formResponse";
const GFORM_ENTRY = {
  nome: "entry.1324216922",
  email: "entry.1947794513",
  mensagem: "entry.1159789124",
} as const;

function HomePage() {
  const { t } = useT();

  // Scroll to hash on load / hash change (for /#sobre etc.)
  useEffect(() => {
    const scrollToHash = () => {
      const h = window.location.hash.replace("#", "");
      if (!h) return;
      const el = document.getElementById(h);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section
        id="inicio"
        className="relative bg-noir text-foreground overflow-hidden min-h-[100svh] flex items-center scroll-mt-24"
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${skylineBg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"
          aria-hidden="true"
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-40 lg:pb-40">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
                {t("tag.group")}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-tight text-balance"
            >
              {t("home.hero.title.a")}{" "}
              <span className="italic text-gold-soft">{t("home.hero.title.b")}</span>{" "}
              {t("home.hero.title.c")}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-10 max-w-xl text-lg sm:text-xl text-white/75 leading-relaxed text-pretty"
            >
              {t("home.hero.subtitle")}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <a
                href="#empresas"
                className="group inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500"
              >
                {t("home.hero.ctaCompanies")}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white/8 hover:border-gold-soft/60 transition-all duration-500"
              >
                {t("home.hero.ctaAbout")}
              </a>
            </motion.div>
          </div>

          <motion.img
            src={logo}
            alt="PS Business Group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute bottom-12 right-12 h-24 lg:h-32 w-auto object-contain"
          />
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t("tag.principles")}
              </span>
            </div>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-balance max-w-4xl text-foreground/90">
              {t("home.principles.lead")}
            </p>
          </motion.div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border/50">
            {[
              { n: "01", t: t("home.p1.t"), d: t("home.p1.d") },
              { n: "02", t: t("home.p2.t"), d: t("home.p2.d") },
              { n: "03", t: t("home.p3.t"), d: t("home.p3.d") },
              { n: "04", t: t("home.p4.t"), d: t("home.p4.d") },
            ].map((p, i) => (
              <motion.div
                key={p.n}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-500"
              >
                <div className="font-display text-gold/40 text-sm tracking-[0.3em] mb-6 group-hover:text-gold/70 transition-colors duration-500">
                  {p.n}
                </div>
                <h2 className="font-display text-2xl mb-3">{p.t}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-cream py-28 lg:py-36 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpSimple}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t("tag.about")}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-balance max-w-4xl">
              {t("about.hero.title.a")}{" "}
              <span className="italic text-gold-soft">{t("about.hero.title.b")}</span>.
            </h2>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-12 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpSimple}
              className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80"
            >
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p className="text-gold-soft/80 italic font-display text-xl">{t("about.p4")}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpSimple}
              className="md:col-span-5"
            >
              <div className="overflow-hidden aspect-[4/5] shadow-elegant">
                <img
                  src={officeImg}
                  alt="Ambiente corporativo PS Business Group"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpSimple}
            className="mt-20 grid md:grid-cols-12 gap-12 items-start"
          >
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {t("tag.opExcellence")}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight text-balance">
                {t("about.op.title")}
              </h3>
            </div>
            <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/80">
              <p>{t("about.op.p1")}</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4">
                {[
                  t("about.op.l1"),
                  t("about.op.l2"),
                  t("about.op.l3"),
                  t("about.op.l4"),
                  t("about.op.l5"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 h-px w-6 bg-gold/50 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2 text-muted-foreground">{t("about.op.p2")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section id="empresas" className="py-28 lg:py-36 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpSimple}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t("tag.companies")}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
              {t("home.eco.titleA")}{" "}
              <span className="italic text-gold-soft">{t("home.eco.titleB")}</span>.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              {t("home.eco.desc")}
            </p>
          </motion.div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {companies.map((c, i) => (
              <CompanyCard key={c.slug} company={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* GESTÃO / HANDSHAKE */}
      <section className="py-24 sm:py-28 lg:py-40 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpSimple}
            className="md:col-span-5"
          >
            <div className="overflow-hidden aspect-[4/5] max-h-[520px] shadow-elegant">
              <img
                src={handshakeImg}
                alt="Parceria estratégica PS Business Group"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpSimple}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {t("tag.management")}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance mb-8">
              {t("home.mgmt.title")}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>{t("home.mgmt.p1")}</p>
              <p>{t("home.mgmt.p2")}</p>
              <p className="text-muted-foreground">{t("home.mgmt.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTATO */}
      <ContactSection />

      <SiteFooter />
    </div>
  );
}

function ContactSection() {
  const { t } = useT();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    if (result.data.website) {
      setSent(true);
      setSubmitting(false);
      return;
    }
    setErrors({});

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
      await fetch(GFORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
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
    <section
      id="contato"
      className="bg-noir text-foreground py-28 lg:py-36 scroll-mt-24"
      aria-labelledby="contato-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpSimple}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold/50" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft/70">
              {t("tag.contact")}
            </span>
          </div>
          <h2
            id="contato-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-balance"
          >
            {t("contact.titleA")}{" "}
            <span className="italic text-gold-soft">{t("contact.titleB")}</span>.
          </h2>
          <p className="mt-8 max-w-xl text-lg text-foreground/60 leading-relaxed">
            {t("contact.lead")}
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-2 space-y-8">
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
              <p className="text-foreground/60">{t("contact.groupV")}</p>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="md:col-span-3 space-y-6">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field label={t("contact.f.name")} id="nome" required error={errors.nome} onDark />
              <Field label={t("contact.f.company")} id="empresa" error={errors.empresa} onDark />
            </div>
            <Field
              label={t("contact.f.email")}
              id="email"
              type="email"
              required
              error={errors.email}
              onDark
            />
            <Field
              label={t("contact.f.subject")}
              id="assunto"
              required
              error={errors.assunto}
              onDark
            />
            <div>
              <label
                htmlFor="msg"
                className="block text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-3"
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
                className="w-full bg-transparent border-b border-white/20 focus:border-gold-soft outline-none py-3 text-base resize-none transition-colors duration-300"
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
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
  error,
  onDark,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  error?: string;
  onDark?: boolean;
}) {
  const { t } = useT();
  const errKey = error ? `contact.err.${id}` : "";
  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-[10px] uppercase tracking-[0.3em] mb-3 ${onDark ? "text-foreground/50" : "text-muted-foreground"}`}
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
        className={`w-full bg-transparent border-b ${onDark ? "border-white/20" : "border-border"} focus:border-gold-soft outline-none py-3 text-base transition-colors duration-300`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {t(errKey) || t("contact.err.generic")}
        </p>
      )}
    </div>
  );
}
