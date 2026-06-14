import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useT } from "@/i18n";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — PS Business Group" },
      { name: "description", content: "Entre em contato com o PS Business Group para parcerias e oportunidades de negócio." },
      { property: "og:title", content: "Contato — PS Business Group" },
      { property: "og:description", content: "Entre em contato para parcerias e oportunidades de negócio." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://psbusiness.lovable.app/contato" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Vp46e3IjKETKAi2tCDp1ZEMcc382/social-images/social-1776567463821-Oficial_-_PS_Business_Group_-_Horizontal.webp" },
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

function ContatoPage() {
  const { t } = useT();
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-16 lg:pt-52">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{t("tag.contact")}</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight text-balance">
              {t("contact.titleA")} <span className="italic text-gold-soft">{t("contact.titleB")}</span>.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">{t("contact.lead")}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32" aria-labelledby="contato-info-heading">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-5xl mx-auto px-6 lg:px-12 grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2 space-y-8">
            <h2 id="contato-info-heading" className="sr-only">{t("contact.email")}</h2>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-2">{t("contact.email")}</div>
              <a href="mailto:contato@psbusinessgroup.com.br" className="hover:text-gold-soft transition-colors duration-300">
                contato@psbusinessgroup.com.br
              </a>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-2">{t("contact.region")}</div>
              <p>{t("contact.regionV")}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-2">{t("contact.group")}</div>
              <p className="text-muted-foreground">{t("contact.groupV")}</p>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="md:col-span-3 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label={t("contact.f.name")} id="nome" required />
              <Field label={t("contact.f.company")} id="empresa" />
            </div>
            <Field label={t("contact.f.email")} id="email" type="email" required />
            <Field label={t("contact.f.subject")} id="assunto" required />
            <div>
              <label htmlFor="msg" className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                {t("contact.f.msg")}
              </label>
              <textarea id="msg" rows={5} required className="w-full bg-transparent border-b border-border focus:border-gold-soft outline-none py-3 text-base resize-none transition-colors duration-300" />
            </div>
            <button type="submit" disabled={sent} className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500 disabled:opacity-50">
              {sent ? t("contact.f.sent") : `${t("contact.f.send")} →`}
            </button>
          </form>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        {label} {required && <span className="text-gold-soft">*</span>}
      </label>
      <input id={id} type={type} required={required} className="w-full bg-transparent border-b border-border focus:border-gold-soft outline-none py-3 text-base transition-colors duration-300" />
    </div>
  );
}
