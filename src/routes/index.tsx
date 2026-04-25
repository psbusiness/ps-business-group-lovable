import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";
import logo from "@/assets/ps-logo-black.png";
import skylineBg from "@/assets/ps-skyline.png";
import handshakeImg from "@/assets/ps-handshake.png";

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

      {/* HERO — imersivo, skyline preenchendo o fundo */}
      <section className="relative bg-noir text-primary-foreground grain overflow-hidden min-h-[100svh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${skylineBg})`,
            backgroundPosition: "center center",
          }}
          aria-hidden="true"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/40 to-noir" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-transparent to-noir/60" aria-hidden="true" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-36 pb-24 sm:pt-44 sm:pb-32 lg:pt-40 lg:pb-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-white/50" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">Grupo empresarial</span>
            </div>

            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-balance">
              Conexões que <span className="italic text-gold-soft">impulsionam</span> o futuro.
            </h1>

            <p className="mt-10 max-w-xl text-lg sm:text-xl text-primary-foreground/80 leading-relaxed text-pretty">
              Cada parceria representa mais do que um acordo: confiança, visão compartilhada e compromisso com crescimento sustentável.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Link
                to="/empresas"
                className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold-soft transition-all"
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
            </div>
          </div>

          {/* Logo discreto no canto */}
          <img
            src={logo}
            alt="PS Business Group"
            className="hidden md:block absolute bottom-12 right-12 h-24 lg:h-32 w-auto object-contain opacity-90 invert"
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em]">
          <span>Role</span>
          <span className="h-10 w-px bg-white/30" />
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
            {companies.map((c, i) => (
              <CompanyCard key={c.slug} company={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* GESTÃO INTEGRADA */}
      <section className="py-20 sm:py-24 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-5">
            <div className="overflow-hidden aspect-square md:aspect-auto max-h-[480px]">
              <img
                src={handshakeImg}
                alt="Parceria estratégica PS Business Group"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-foreground" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Gestão</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance mb-6 sm:mb-8">
              Gestão integrada, resultados consistentes.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
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
