import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";
import logo from "@/assets/ps-logo-official.png";
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-noir text-foreground overflow-hidden min-h-[100svh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${skylineBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" aria-hidden="true" />
        {/* Glow sutil */}
        <div
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, oklch(0.58 0.008 260) 0%, transparent 70%)" }}
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
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">Grupo empresarial</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-tight text-balance"
            >
              Conexões que{" "}
              <span className="italic text-gold-soft">impulsionam</span>{" "}
              o futuro.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-10 max-w-xl text-lg sm:text-xl text-white/75 leading-relaxed text-pretty"
            >
              Cada parceria representa mais do que um acordo: confiança, visão compartilhada e compromisso com crescimento sustentável.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <Link
                to="/empresas"
                className="group inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500"
              >
                Conheça as empresas
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white/8 hover:border-gold-soft/60 transition-all duration-500"
              >
                Sobre o grupo
              </Link>
            </motion.div>
          </div>

          {/* Logo discreto */}
          <motion.img
            src={logo}
            alt="PS Business Group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute bottom-12 right-12 h-24 lg:h-32 w-auto object-contain"
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-gold-soft/60 text-[10px] uppercase tracking-[0.3em]"
        >
          <span>Role</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold-soft/50 to-transparent animate-pulse" />
        </motion.div>
      </section>

      {/* ═══ PRINCÍPIOS ═══ */}
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
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Princípios</span>
            </div>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-snug text-balance max-w-4xl text-foreground/90">
              Atuando de forma estratégica e estruturada, conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados.
            </p>
          </motion.div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border/50">
            {[
              { n: "01", t: "Transparência", d: "Clareza em cada etapa, do primeiro contato ao fechamento." },
              { n: "02", t: "Segurança", d: "Estrutura sólida que protege parceiros, capital e reputação." },
              { n: "03", t: "Performance", d: "Resultado consistente como métrica final de toda decisão." },
              { n: "04", t: "Expansão", d: "Crescimento estruturado, com visão de longo prazo." },
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
                <div className="font-display text-gold/40 text-sm tracking-[0.3em] mb-6 group-hover:text-gold/70 transition-colors duration-500">{p.n}</div>
                <h3 className="font-display text-2xl mb-3">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ECOSSISTEMA ═══ */}
      <section className="py-28 lg:py-36 bg-cream shimmer-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-12 gap-12 mb-16 items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
              className="md:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Empresas</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
                Um ecossistema de <span className="italic text-gold-soft">crescimento</span>.
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
                O PS Business Group não é apenas um grupo empresarial — é um ecossistema preparado para atuar em cenários complexos e gerar impacto consistente.
              </p>
            </motion.div>
            <div className="md:col-span-5 md:text-right">
              <Link
                to="/empresas"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-gold-soft hover:text-gold transition-colors duration-300"
              >
                Ver todas as empresas
                <span className="h-px w-10 bg-gold-soft group-hover:w-16 transition-all duration-500" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {companies.map((c, i) => (
              <CompanyCard key={c.slug} company={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GESTÃO INTEGRADA ═══ */}
      <section className="py-24 sm:py-28 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
            variants={fadeUp}
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
            custom={1}
            variants={fadeUp}
            className="md:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Gestão</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-balance mb-8">
              Gestão integrada, resultados consistentes.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Trabalhamos com uma gestão integrada, onde processos, pessoas e tecnologia caminham juntos para garantir resultados consistentes e escaláveis.
              </p>
              <p>
                Nossa atuação abrange múltiplos setores, com foco em <strong className="text-foreground">gestão empresarial</strong>, <strong className="text-foreground">investimentos estratégicos</strong>, <strong className="text-foreground">expansão de negócios</strong>, <strong className="text-foreground">estruturação corporativa</strong> e <strong className="text-foreground">inteligência operacional</strong>.
              </p>
              <p className="text-muted-foreground">
                Mais do que administrar empresas, estruturamos sistemas que funcionam de forma sólida, previsível e orientada a crescimento.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="bg-noir text-foreground py-28 lg:py-36 grain relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full opacity-10 blur-[140px]"
          style={{ background: "radial-gradient(circle, oklch(0.58 0.008 260), transparent)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold/40" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-soft/70">Construindo presença</span>
              <span className="h-px w-12 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-balance leading-tight">
              Estamos construindo mais do que empresas.{" "}
              <span className="italic text-gold-soft">Estamos construindo presença.</span>
            </h2>
            <p className="mt-8 text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Cada cidade, uma nova possibilidade. Cada mercado, uma nova estratégia. Cada movimento, uma nova construção.
            </p>
            <Link
              to="/contato"
              className="mt-12 inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-10 py-5 text-sm uppercase tracking-[0.25em] hover:shadow-gold transition-all duration-500"
            >
              Fale com o grupo <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
