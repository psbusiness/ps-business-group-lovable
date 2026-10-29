import { useT, type Lang } from "@/i18n";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const { lang, setLang } = useT();

  const base = onDark ? "text-foreground/50" : "text-muted-foreground";
  const active = "text-foreground";
  const labels: Record<Lang, string> = { pt: "Português", es: "Español (Paraguay)", en: "English" };

  const btn = (l: Lang, label: string) => (
    <Button
      key={l}
      variant="ghost"
      type="button"
      onClick={() => setLang(l)}
      className={`h-auto rounded-none p-0 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-transparent hover:text-foreground ${lang === l ? `${active} font-medium` : base}`}
      aria-pressed={lang === l}
      aria-label={labels[l]}
    >
      {label}
    </Button>
  );

  return (
    <div className="inline-flex items-center gap-2">
      {btn("pt", "PT")}
      <span aria-hidden className={onDark ? "text-foreground/20" : "text-muted-foreground/40"}>/</span>
      {btn("es", "ES")}
      <span aria-hidden className={onDark ? "text-foreground/20" : "text-muted-foreground/40"}>/</span>
      {btn("en", "EN")}
    </div>
  );
}
