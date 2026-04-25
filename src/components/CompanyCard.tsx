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
  const isDark = company.logoBg === "dark";
  const logoBgClass = isDark ? "bg-noir" : "bg-white";

  return (
    <motion.a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-card border border-border hover:border-gold transition-all duration-500 overflow-hidden"
    >
      {/* Logo area — fixed aspect for consistent alignment across all cards */}
      <div
        className={`relative ${logoBgClass} aspect-[16/9] w-full flex items-center justify-center overflow-hidden border-b border-border`}
      >
        {company.logo ? (
          <img
            src={company.logo}
            alt={`Logo ${company.name}`}
            loading="lazy"
            className="h-[55%] max-h-24 w-auto max-w-[70%] object-contain transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full border ${
              isDark ? "border-white/30 text-white/80" : "border-foreground/20 text-foreground/70"
            } font-display text-xl tracking-wider`}
            aria-label={`Iniciais ${company.name}`}
          >
            {getInitials(company.name)}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10 min-h-[240px]">
        <div className="flex items-start justify-between mb-5 sm:mb-6 gap-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {company.sector}
          </span>
          <span className="text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
            →
          </span>
        </div>

        <h3 className="font-display text-2xl lg:text-3xl mb-4 text-balance">
          {company.name}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-grow">
          {company.description}
        </p>

        <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">
          <span>Visitar</span>
          <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
    </motion.a>
  );
}
