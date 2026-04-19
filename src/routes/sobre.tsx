import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — PS Business Group" },
      { name: "description", content: "Conheça o PS Business Group: holding empresarial baseada em inteligência empresarial, gestão eficiente e visão de longo prazo. Pensar globalmente, atuar estrategicamente, crescer de forma estruturada." },
      { property: "og:title", content: "Sobre — PS Business Group" },
      { property: "og:description", content: "Conexões que impulsionam o futuro." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-20 lg:pt-52">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-foreground" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Sobre o grupo</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-balance">
            Inteligência empresarial, gestão eficiente, <span className="italic">visão de longo prazo</span>.
          </h1>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-7 text-lg leading-relaxed text-foreground/85">
          <p>
            No <strong>PS Business Group</strong>, acreditamos que cada parceria representa mais do que um acordo. Representa confiança, visão compartilhada e compromisso com crescimento sustentável.
          </p>
          <p>
            Atuando de forma estratégica e estruturada, conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados. Nosso modelo é baseado em inteligência empresarial, gestão eficiente e visão de longo prazo.
          </p>
          <p>
            Construímos pontes entre mercados, conectamos ideias a resultados e transformamos potencial em valor real. O PS Business Group não é apenas um grupo empresarial — é um ecossistema de crescimento, preparado para atuar em cenários complexos e gerar impacto consistente.
          </p>
          <p className="text-muted-foreground italic">
            Seguimos firmes, estabelecendo conexões que impulsionam o futuro.
          </p>
        </div>
      </section>

      {/* Excelência operacional */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-foreground" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Excelência operacional</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              Cada detalhe reflete organização, eficiência e excelência.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              Nosso ambiente corporativo representa o padrão que aplicamos em todas as nossas empresas e operações. Trabalhamos com uma gestão integrada, onde processos, pessoas e tecnologia caminham juntos para garantir resultados consistentes e escaláveis.
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
                  <span className="mt-2 h-px w-6 bg-foreground/60 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 text-muted-foreground">
              A base de um grande grupo está na sua capacidade de organizar, padronizar e evoluir continuamente — e é exatamente isso que construímos todos os dias.
            </p>
          </div>
        </div>
      </section>

      {/* Mentalidade global */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-foreground" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Mentalidade global</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance max-w-3xl leading-tight">
            Atuação binacional, visão internacional.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              <p>
                O PS Business Group nasce com uma mentalidade global, preparado para atuar em diferentes mercados e identificar oportunidades onde outros ainda não enxergam.
              </p>
              <p>
                Com presença estratégica e atuação binacional, conectamos negócios, ampliamos operações e desenvolvemos projetos com foco em expansão sustentável e geração de valor.
              </p>
            </div>
            <div className="border-l border-foreground/15 pl-8 space-y-6">
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Nosso posicionamento</div>
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

      <section className="bg-noir text-primary-foreground py-24 lg:py-28 grain text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
            Estamos construindo mais do que empresas. <span className="italic text-gold-soft">Estamos construindo presença.</span>
          </p>
          <Link
            to="/contato"
            className="mt-12 inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
          >
            Fale com o grupo →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
