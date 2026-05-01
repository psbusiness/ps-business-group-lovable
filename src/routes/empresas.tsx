import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CompanyCard } from "@/components/CompanyCard";
import { companies } from "@/data/companies";

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: "Empresas — PS Business Group" },
      { name: "description", content: "Conheça as dez empresas do PS Business Group em setores como logística, agro, educação, esporte, capital, imobiliário e mais." },
      { property: "og:title", content: "Empresas — PS Business Group" },
      { property: "og:description", content: "Portfólio completo das empresas do grupo." },
    ],
  }),
  component: EmpresasPage,
});

function EmpresasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="bg-noir text-foreground grain pt-40 pb-24 lg:pt-52 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">Empresas do grupo</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight max-w-4xl text-balance">
            Um ecossistema de <span className="italic text-gold-soft">crescimento</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75 leading-relaxed">
            Conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados — todas guiadas pelos mesmos princípios de transparência, segurança, performance e expansão estratégica.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
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
