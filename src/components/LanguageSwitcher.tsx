import { useT, type Lang } from "@/i18n";

export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const { lang, setLang } = useT();

  const base = onDark ? "text-white/50" : "text-muted-foreground";
  const active = onDark ? "text-white" : "text-foreground";

  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      className={`text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:${
        onDark ? "text-white" : "text-foreground"
      } ${lang === l ? `${active} font-medium` : base}`}
      aria-pressed={lang === l}
      aria-label={l === "pt" ? "Português" : "Español (Paraguay)"}
    >
      {label}
    </button>
  );

  return (
    <div className="inline-flex items-center gap-2">
      {btn("pt", "PT")}
      <span className={onDark ? "text-white/20" : "text-muted-foreground/40"}>/</span>
      {btn("es", "ES")}
    </div>
  );
}
