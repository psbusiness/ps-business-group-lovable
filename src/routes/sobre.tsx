import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useT } from "@/i18n";
import officeImg from "@/assets/ps-office.png";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — PS Business Group" },
      { name: "description", content: "Conheça o PS Business Group: inteligência empresarial, gestão eficiente e visão de longo prazo." },
      { property: "og:title", content: "Sobre — PS Business Group" },
      { property: "og:description", content: "Inteligência empresarial, gestão eficiente e visão de longo prazo." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://psbusiness.lovable.app/sobre" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Vp46e3IjKETKAi2tCDp1ZEMcc382/social-images/social-1776567463821-Oficial_-_PS_Business_Group_-_Horizontal.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://psbusiness.lovable.app/sobre" }],
  }),
  component: SobrePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function SobrePage() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-20 lg:pt-52">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{t("tag.about")}</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-balance">
              {t("about.hero.title.a")} <span className="italic text-gold-soft">{t("about.hero.title.b")}</span>.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto px-6 lg:px-12 space-y-7 text-lg leading-relaxed text-foreground/80">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p className="text-gold-soft/80 italic font-display text-xl">{t("about.p4")}</p>
        </motion.div>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{t("tag.opExcellence")}</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">{t("about.op.title")}</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/80">
            <p>{t("about.op.p1")}</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4">
              {[t("about.op.l1"), t("about.op.l2"), t("about.op.l3"), t("about.op.l4"), t("about.op.l5")].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-px w-6 bg-gold/50 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 text-muted-foreground">{t("about.op.p2")}</p>
          </motion.div>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-6xl mx-auto px-6 lg:px-12 mt-12 sm:mt-16">
          <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] shadow-elegant">
            <img src={officeImg} alt="Ambiente corporativo PS Business Group" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" />
          </div>
        </motion.div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{t("tag.globalMindset")}</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance max-w-3xl leading-tight">
              {t("about.global.titleA")} <span className="italic text-gold-soft">{t("about.global.titleB")}</span>.
            </h2>
          </motion.div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>{t("about.global.p1")}</p>
              <p>{t("about.global.p2")}</p>
            </motion.div>
            <div className="border-l border-gold/20 pl-8 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50">{t("tag.positioning")}</div>
              {[
                { t: t("about.global.b1.t"), d: t("about.global.b1.d") },
                { t: t("about.global.b2.t"), d: t("about.global.b2.d") },
                { t: t("about.global.b3.t"), d: t("about.global.b3.d") },
              ].map((p) => (
                <div key={p.t}>
                  <div className="font-display text-xl mb-1">{p.t}</div>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-noir text-foreground py-24 lg:py-28 text-center relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12">
          <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
            {t("about.cta.lead.a")} <span className="italic text-gold-soft">{t("about.cta.lead.b")}</span>
          </p>
          <Link to="/contato" className="mt-12 inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500">
            {t("about.cta.btn")} →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
