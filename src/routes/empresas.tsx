import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";
import { useT } from "@/i18n";

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: "Empresas — PS Business Group" },
      { name: "description", content: "Conheça as empresas do PS Business Group em setores estratégicos." },
      { property: "og:title", content: "Empresas — PS Business Group" },
      { property: "og:description", content: "Portfólio completo das empresas do grupo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://psbusiness.lovable.app/empresas" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Vp46e3IjKETKAi2tCDp1ZEMcc382/social-images/social-1776567463821-Oficial_-_PS_Business_Group_-_Horizontal.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://psbusiness.lovable.app/empresas" }],
  }),
  component: EmpresasPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function EmpresasPage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="bg-noir text-foreground pt-40 pb-24 lg:pt-52 lg:pb-32 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold/50" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft/70">{t("companies.tag")}</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight max-w-4xl text-balance">
              {t("companies.titleA")} <span className="italic text-gold-soft">{t("companies.titleB")}</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-foreground/60 leading-relaxed">{t("companies.desc")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream" aria-labelledby="empresas-list-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 id="empresas-list-heading" className="sr-only">{t("companies.titleA")} {t("companies.titleB")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {companies.map((c, i) => (
              <CompanyCard key={c.slug} company={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
