import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { grantAnalyticsConsent, denyAnalyticsConsent } from "@/components/Analytics";

const KEY = "ps-cookies-consent";

export function CookieBanner() {
  const { t } = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (!saved) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // ignore
    }
    if (value === "accepted") grantAnalyticsConsent();
    else denyAnalyticsConsent();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="max-w-5xl mx-auto bg-card/95 backdrop-blur-md border border-border/60 shadow-elegant p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed flex-1">
          {t("cookies.text")}{" "}
          <Link
            to="/privacidade"
            className="underline underline-offset-4 hover:text-gold-soft transition-colors"
          >
            {t("cookies.more")}
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="text-xs uppercase tracking-[0.2em] px-4 py-2.5 border border-border hover:border-foreground/40 transition-colors"
          >
            {t("cookies.reject")}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="text-xs uppercase tracking-[0.2em] px-4 py-2.5 bg-gold-gradient text-primary-foreground hover:shadow-gold transition-all"
          >
            {t("cookies.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
