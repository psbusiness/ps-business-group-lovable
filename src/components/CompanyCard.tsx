import { motion } from "framer-motion";
import type { Company } from "@/data/companies";

function getInitials(name: string): string {
  const cleaned = name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !/^(de|da|do|e|of|the|and)$/i.test(w));
  const letters = cleaned.slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "");
  return letters.join("") || name.slice(0, 2).toUpperCase();
}

export function CompanyCard({ company, index }: { company: Company; index: number }) {
  return (
    <motion.a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative flex flex-col bg-card shadow-card glow-hover transition-all duration-500 overflow-hidden p-8 sm:p-10 min-h-[400px]"
    >
      {/* Top meta */}
      <div className="flex items-start justify-between mb-8 gap-3">
        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {company.sector}
        </span>
        <span className="text-gold-soft opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0 text-lg">
          ↗
        </span>
      </div>

      {/* Logo */}
      <div className="flex-1 flex items-center justify-center py-4 mb-6">
        {company.logo ? (
          <img
            src={company.logo}
            alt={`Logo ${company.name}`}
            loading="lazy"
            className="max-h-28 sm:max-h-36 w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 text-foreground/60 font-display text-xl tracking-wider"
            aria-label={`Iniciais ${company.name}`}
          >
            {getInitials(company.name)}
          </div>
        )}
      </div>

      {/* Bottom info */}
      <div className="border-t border-border/60 pt-6">
        <h3 className="font-display text-xl lg:text-2xl mb-2 text-balance">
          {company.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-2">
          {company.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold-soft">
          <span>Visitar</span>
          <span className="h-px w-6 bg-gold-soft transition-all duration-500 group-hover:w-12" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold-soft to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700" />
    </motion.a>
  );
}
