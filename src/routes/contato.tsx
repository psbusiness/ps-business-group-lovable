import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — PS Business Group" },
      { name: "description", content: "Entre em contato com o PS Business Group para parcerias, oportunidades de negócio e iniciativas estratégicas." },
      { property: "og:title", content: "Contato — PS Business Group" },
      { property: "og:description", content: "Fale com o grupo." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-16 lg:pt-52">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Contato</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight text-balance">
            Conexões que <span className="italic">impulsionam o futuro</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Para parcerias, oportunidades de negócio ou imprensa, deixe sua mensagem. Cada parceria representa mais do que um acordo — representa confiança e visão compartilhada.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 grid md:grid-cols-5 gap-16">
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">E-mail</div>
              <a href="mailto:contato@psbusinessgroup.com.br" className="hover:opacity-70 transition-opacity">
                contato@psbusinessgroup.com.br
              </a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Atuação</div>
              <p>Binacional · Brasil</p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Grupo</div>
              <p className="text-muted-foreground">9 empresas em setores estratégicos</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="md:col-span-3 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nome" id="nome" required />
              <Field label="Empresa" id="empresa" />
            </div>
            <Field label="E-mail" id="email" type="email" required />
            <Field label="Assunto" id="assunto" required />
            <div>
              <label htmlFor="msg" className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Mensagem
              </label>
              <textarea
                id="msg"
                rows={5}
                required
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-primary transition-all disabled:opacity-60"
            >
              {sent ? "Mensagem enviada ✓" : "Enviar mensagem →"}
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, id, type = "text", required }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
        {label} {required && <span className="text-foreground">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base transition-colors"
      />
    </div>
  );
}
