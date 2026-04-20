import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";
import logo from "@/assets/ps-logo-black.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PS Business Group — Conexões que impulsionam o futuro" },
      {
        name: "description",
        content:
          "No PS Business Group, cada parceria representa confiança, visão compartilhada e compromisso com crescimento sustentável. Conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores.",
      },
      { property: "og:title", content: "PS Business Group" },
      { property: "og:description", content: "Grupo empresarial — conexões que impulsionam o futuro." },
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-32 lg:pt-52 lg:pb-44 text-center">
          <motion.img
            src={logo}
            alt="PS Business Group"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto h-56 lg:h-72 w-auto object-contain mb-12 invert brightness-0 contrast-200"
            style={{ filter: "invert(1) brightness(2)" }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-white/40" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">Grupo empresarial</span>
            <span className="h-px w-12 bg-white/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight max-w-4xl mx-auto text-balance"
          >
            Conexões que <span className="italic text-gold-soft">impulsionam o futuro</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-2xl mx-auto text-lg text-primary-foreground/75 leading-relaxed text-pretty"
          >
            No PS Business Group, acreditamos que cada parceria representa mais do que um acordo. Representa confiança, visão compartilhada e compromisso com crescimento sustentável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-5"
          >
            <Link
              to="/empresas"
              className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft hover:text-primary transition-all"
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
        </div>
      </section>

      {/* MANIFESTO — princípios reais do site */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-foreground" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Princípios</span>
          </div>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-balance max-w-4xl">
            Atuando de forma estratégica e estruturada, conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados. Cada negociação é orientada por princípios fundamentais.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { n: "01", t: "Transparência", d: "Clareza em cada etapa, do primeiro contato ao fechamento." },
              { n: "02", t: "Segurança", d: "Estrutura sólida que protege parceiros, capital e reputação." },
              { n: "03", t: "Performance", d: "Resultado consistente como métrica final de toda decisão." },
              { n: "04", t: "Expansão estratégica", d: "Crescimento estruturado, com visão de longo prazo." },
            ].map((p) => (
              <div key={p.n} className="bg-background p-8 lg:p-10">
                <div className="font-display text-foreground/30 text-sm tracking-[0.3em] mb-6">{p.n}</div>
                <h3 className="font-display text-2xl mb-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-12 mb-16 items-end">
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-foreground" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Empresas</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
                Um ecossistema de <span className="italic">crescimento</span>.
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
                O PS Business Group não é apenas um grupo empresarial — é um ecossistema preparado para atuar em cenários complexos e gerar impacto consistente.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Link
                to="/empresas"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              >
                Ver todas as empresas
                <span className="h-px w-10 bg-foreground group-hover:w-16 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {companies.slice(0, 6).map((c, i) => (
              <CompanyCard key={c.slug} company={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* GESTÃO INTEGRADA */}
      <section className="py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-foreground" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Gestão</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Gestão integrada, resultados consistentes.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              Trabalhamos com uma gestão integrada, onde processos, pessoas e tecnologia caminham juntos para garantir resultados consistentes e escaláveis.
            </p>
            <p>
              Nossa atuação abrange múltiplos setores, com foco em <strong>gestão empresarial</strong>, <strong>investimentos estratégicos</strong>, <strong>expansão de negócios</strong>, <strong>estruturação corporativa</strong> e <strong>inteligência operacional</strong>.
            </p>
            <p className="text-muted-foreground">
              Mais do que administrar empresas, estruturamos sistemas que funcionam de forma sólida, previsível e orientada a crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-noir text-primary-foreground py-28 lg:py-36 grain relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">Construindo presença</span>
            <span className="h-px w-12 bg-white/40" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
            Estamos construindo mais do que empresas. <span className="italic text-gold-soft">Estamos construindo presença.</span>
          </h2>
          <p className="mt-8 text-primary-foreground/70 max-w-xl mx-auto">
            Cada cidade, uma nova possibilidade. Cada mercado, uma nova estratégia. Cada movimento, uma nova construção.
          </p>
          <Link
            to="/contato"
            className="mt-12 inline-flex items-center gap-3 bg-primary-foreground text-primary px-10 py-5 text-sm uppercase tracking-[0.25em] hover:bg-gold-soft transition-all"
          >
            Fale com o grupo <span>→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
