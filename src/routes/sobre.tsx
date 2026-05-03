import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import officeImg from "@/assets/ps-office.png";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — PS Business Group" },
      { name: "description", content: "Conheça o PS Business Group: grupo empresarial baseado em inteligência empresarial, gestão eficiente e visão de longo prazo." },
      { property: "og:title", content: "Sobre — PS Business Group" },
      { property: "og:description", content: "Conexões que impulsionam o futuro." },
    ],
  }),
  component: SobrePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function SobrePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-20 lg:pt-52">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Sobre o grupo</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-balance">
              Inteligência empresarial, gestão eficiente, <span className="italic text-gold-soft">visão de longo prazo</span>.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto px-6 lg:px-12 space-y-7 text-lg leading-relaxed text-foreground/80"
        >
          <p>
            No <strong className="text-foreground">PS Business Group</strong>, acreditamos que cada parceria representa mais do que um acordo. Representa confiança, visão compartilhada e compromisso com crescimento sustentável.
          </p>
          <p>
            Atuando de forma estratégica e estruturada, conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados. Nosso modelo é baseado em inteligência empresarial, gestão eficiente e visão de longo prazo.
          </p>
          <p>
            Construímos pontes entre mercados, conectamos ideias a resultados e transformamos potencial em valor real. O PS Business Group não é apenas um grupo empresarial — é um ecossistema de crescimento, preparado para atuar em cenários complexos e gerar impacto consistente.
          </p>
          <p className="text-gold-soft/80 italic font-display text-xl">
            Seguimos firmes, estabelecendo conexões que impulsionam o futuro.
          </p>
        </motion.div>
      </section>

      {/* Excelência operacional */}
      <section className="bg-cream py-24 lg:py-32 shimmer-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Excelência operacional</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Cada detalhe reflete organização, eficiência e excelência.
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/80"
          >
            <p>
              Nosso ambiente corporativo representa o padrão que aplicamos em todas as nossas empresas e operações. Trabalhamos com uma gestão integrada, onde processos, pessoas e tecnologia caminham juntos.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4">
              {[
                "Gestão empresarial",
                "Investimentos estratégicos",
                "Expansão de negócios",
                "Estruturação corporativa",
                "Inteligência operacional",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-px w-6 bg-gold/50 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 text-muted-foreground">
              A base de um grande grupo está na sua capacidade de organizar, padronizar e evoluir continuamente.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 lg:px-12 mt-12 sm:mt-16"
        >
          <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] shadow-elegant">
            <img
              src={officeImg}
              alt="Ambiente corporativo do PS Business Group"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* Mentalidade global */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Mentalidade global</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance max-w-3xl leading-tight">
              Atuação binacional, visão <span className="italic text-gold-soft">internacional</span>.
            </h2>
          </motion.div>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>
                O PS Business Group nasce com uma mentalidade global, preparado para atuar em diferentes mercados e identificar oportunidades onde outros ainda não enxergam.
              </p>
              <p>
                Com presença estratégica e atuação binacional, conectamos negócios, ampliamos operações e desenvolvemos projetos com foco em expansão sustentável.
              </p>
            </motion.div>
            <div className="border-l border-gold/20 pl-8 space-y-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50">Nosso posicionamento</div>
              {[
                { t: "Pensar globalmente", d: "Identificar oportunidades onde outros ainda não enxergam." },
                { t: "Atuar estrategicamente", d: "Cada movimento orientado por análise e propósito." },
                { t: "Crescer de forma estruturada", d: "Expansão sustentável, com geração de valor real." },
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

      <section className="bg-noir text-foreground py-24 lg:py-28 grain text-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(circle, oklch(0.58 0.008 260), transparent)" }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12">
          <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
            Estamos construindo mais do que empresas. <span className="italic text-gold-soft">Estamos construindo presença.</span>
          </p>
          <Link
            to="/contato"
            className="mt-12 inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500"
          >
            Fale com o grupo →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
