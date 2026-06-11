import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useT } from "@/i18n";

export function LegalLayout({
  tag,
  title,
  updated,
  children,
}: {
  tag: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="pt-40 pb-12 lg:pt-52">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{tag}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-balance">
            {title}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {t("legal.updated")}: {updated}
          </p>
        </div>
      </section>
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 prose-legal space-y-6 text-base leading-relaxed text-foreground/80">
          {children}
          <div className="pt-10">
            <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold-soft hover:text-gold transition-colors">
              ← {t("legal.back")}
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
