import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — PS Business Group" },
      { name: "description", content: "Conheça a história, os valores e a visão do PS Business Group, holding brasileira de empresas em setores estratégicos." },
      { property: "og:title", content: "Sobre — PS Business Group" },
      { property: "og:description", content: "História, valores e visão do grupo." },
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
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Sobre o grupo</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-balance">
            Construir empresas é, antes de tudo, <span className="italic text-gold">construir cultura</span>.
          </h1>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-8 text-lg leading-relaxed text-foreground/85">
          <p>
            O <strong>PS Business Group</strong> nasceu da convicção de que negócios duradouros se constroem com método, paciência e propósito. Não buscamos crescer rápido — buscamos crescer bem.
          </p>
          <p>
            Hoje o grupo reúne dez empresas em setores diversos: logística, agronegócio, educação, esporte de alto rendimento, gestão de capital, mercado imobiliário, viagens, direito, automotivo e lifestyle. Cada uma com autonomia, identidade e equipe próprias — todas conectadas por uma mesma cultura.
          </p>
          <p>
            Nossa filosofia é simples: <em className="text-gold not-italic font-medium">excelência em cada detalhe, integridade inegociável, e visão de longo prazo</em>. É o que nos permite criar valor real, construir reputação sólida e, acima de tudo, ser um parceiro confiável para clientes, colaboradores e investidores.
          </p>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "Disciplina", d: "Decisões baseadas em análise rigorosa, não em modismos. Capital, tempo e energia alocados com critério." },
              { n: "02", t: "Cultura", d: "Pessoas certas, valores claros, ambientes onde a excelência é hábito — não exceção." },
              { n: "03", t: "Tempo", d: "Pensar em décadas em um mundo que pensa em trimestres é nossa maior vantagem competitiva." },
            ].map((p) => (
              <div key={p.n} className="border-t border-foreground/20 pt-8">
                <div className="font-display text-gold text-sm tracking-[0.3em] mb-6">{p.n}</div>
                <h3 className="font-display text-3xl mb-4">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-display italic text-2xl text-gold mb-8">"Vincit qui se vincit"</p>
          <p className="text-muted-foreground">Vence quem vence a si mesmo.</p>
          <Link
            to="/contato"
            className="mt-12 inline-flex items-center gap-3 border border-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all"
          >
            Fale com o grupo →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
