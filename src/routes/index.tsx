import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PS Business Group — Holding de empresas brasileiras" },
      {
        name: "description",
        content:
          "Conheça o PS Business Group: dez empresas em setores estratégicos unidas por excelência, visão de longo prazo e cultura de alta performance.",
      },
      { property: "og:title", content: "PS Business Group" },
      { property: "og:description", content: "Holding brasileira de empresas em setores estratégicos." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-noir text-primary-foreground grain overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-gold-soft blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-32 lg:pt-52 lg:pb-44">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Holding · Est. Brasil</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight max-w-5xl text-balance"
          >
            Construímos negócios{" "}
            <span className="italic text-gold-soft">duradouros</span> em setores que movem o mundo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 max-w-xl text-lg text-primary-foreground/70 leading-relaxed text-pretty"
          >
            O PS Business Group reúne dez empresas em logística, agronegócio, educação, esporte, capital, real estate e mais — unidas por uma cultura de excelência e visão de longo prazo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <Link
              to="/empresas"
              className="group inline-flex items-center gap-3 bg-gold text-primary px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all shadow-gold"
            >
              Conheça as empresas
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
            >
              Sobre o grupo
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10"
          >
            {[
              { n: "10", l: "Empresas" },
              { n: "9", l: "Setores" },
              { n: "100%", l: "Capital nacional" },
              { n: "∞", l: "Visão de longo prazo" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl lg:text-5xl text-gold-soft">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-primary-foreground/60">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Manifesto</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
              Acreditamos que <span className="italic text-gold">negócios extraordinários</span> nascem do encontro entre disciplina, cultura e tempo. Cada empresa do grupo é construída para durar décadas — não trimestres.
            </p>
            <div className="mt-12 grid sm:grid-cols-3 gap-10">
              {[
                { t: "Excelência", d: "Padrões elevados em cada decisão, do detalhe ao todo." },
                { t: "Longevidade", d: "Negócios projetados para atravessar gerações." },
                { t: "Integridade", d: "Conduta inegociável como base de toda relação." },
              ].map((p) => (
                <div key={p.t}>
                  <div className="font-display text-xl text-gold mb-2">{p.t}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Portfólio</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance max-w-3xl">
                Um ecossistema de <span className="italic text-gold">empresas singulares</span>.
              </h2>
            </div>
            <Link
              to="/empresas"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] hover:text-gold transition-colors self-start md:self-end"
            >
              Ver todas
              <span className="h-px w-10 bg-foreground group-hover:bg-gold group-hover:w-16 transition-all" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {companies.slice(0, 6).map((c, i) => (
              <CompanyCard key={c.slug} company={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-noir text-primary-foreground py-28 lg:py-40 grain relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Conversemos</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-balance">
            Tem um projeto à altura? <span className="italic text-gold-soft">Vamos construir juntos.</span>
          </h2>
          <p className="mt-8 text-primary-foreground/70 max-w-xl mx-auto">
            Parcerias estratégicas, oportunidades de negócio e iniciativas relevantes encontram aqui um ponto de partida.
          </p>
          <Link
            to="/contato"
            className="mt-12 inline-flex items-center gap-3 bg-gold text-primary px-10 py-5 text-sm uppercase tracking-[0.25em] hover:bg-gold-soft transition-all shadow-gold"
          >
            Iniciar conversa <span>→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
