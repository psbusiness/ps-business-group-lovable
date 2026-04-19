import { motion } from "framer-motion";
import type { Company } from "@/data/companies";

export function CompanyCard({ company, index }: { company: Company; index: number }) {
  return (
    <motion.a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block bg-card border border-border hover:border-gold transition-all duration-500 overflow-hidden"
    >
      <div className="p-8 lg:p-10 h-full flex flex-col min-h-[320px]">
        <div className="flex items-start justify-between mb-8">
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

        <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">
          <span>Visitar</span>
          <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
    </motion.a>
  );
}
