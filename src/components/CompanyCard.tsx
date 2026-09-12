import { motion } from "framer-motion";
import type { Company } from "@/data/companies";
import { useT } from "@/i18n";

function getInitials(name: string): string {
  const cleaned = name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !/^(de|da|do|e|of|the|and)$/i.test(w));
  const letters = cleaned.slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "");
  return letters.join("") || name.slice(0, 2).toUpperCase();
}

export function CompanyCard({ company, index }: { company: Company; index: number }) {
  const { lang } = useT();
  const sector = lang === "es" ? company.sectorEs : company.sector;
  const description = lang === "es" ? company.descriptionEs : company.description;
  return (
    <motion.a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative flex h-full flex-col bg-card shadow-card transition-all duration-500 overflow-hidden p-5 sm:p-6 md:p-4 lg:p-5"
    >
      {/* Top meta */}
      <div className="flex items-start justify-between mb-4 md:mb-4 gap-2">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {sector}
        </span>
        <span className="text-gold-soft opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0 text-base md:text-lg">
          ↗
        </span>
      </div>

      {/* Logo — fixed height so every card aligns */}
      <div className="flex h-24 sm:h-28 md:h-20 lg:h-28 items-center justify-center mb-4 md:mb-4 lg:mb-5">
        {company.logo ? (
          <img
            src={company.logo}
            alt={`Logo ${company.name}`}
            loading="lazy"
            className="max-h-full w-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-16 w-16 md:h-14 md:w-14 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-gold/30 text-foreground/60 font-display text-lg md:text-base lg:text-xl tracking-wider"
            aria-label={lang === "es" ? `Iniciales ${company.name}` : `Iniciais ${company.name}`}
          >
            {getInitials(company.name)}
          </div>
        )}
      </div>

      {/* Bottom info — grows and pushes CTA to the bottom */}
      <div className="flex flex-1 flex-col border-t border-border/60 pt-4 md:pt-3 lg:pt-5">
        <h3 className="font-display text-base md:text-sm lg:text-lg mb-1 md:mb-1 lg:mb-2 text-balance">{company.name}</h3>
        <p className="text-xs md:text-[11px] lg:text-sm text-muted-foreground leading-relaxed text-pretty flex-1">
          {description}
        </p>

        <div className="mt-4 md:mt-3 lg:mt-4 flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gold-soft">
          <span>{lang === "es" ? "Visitar sitio" : "Visitar"}</span>
          <span className="h-px w-6 bg-gold-soft transition-all duration-500 group-hover:w-12" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-gold-soft to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-700" />
    </motion.a>
  );
}
