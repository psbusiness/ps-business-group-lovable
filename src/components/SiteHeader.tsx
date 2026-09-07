import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ps-logo-official.png";
import { useT } from "@/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTIONS = ["sobre", "empresas", "contato"];

export function SiteHeader() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const onDark = isHome && !scrolled;
  const activeSection = useActiveSection(SECTIONS, isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goToSection = (e: React.MouseEvent, id: string) => {
    setOpen(false);
    if (!isHome) return; // let the browser navigate to /#id
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${id}`);
  };

  const linkBase = onDark
    ? "text-white/60 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const linkActive = onDark ? "text-white font-medium" : "text-foreground font-medium";

  const navItems = [
    { id: "sobre", label: t("nav.about") },
    { id: "empresas", label: t("nav.companies") },
    { id: "contato", label: t("nav.contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/40" : "bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
      >
        {t("nav.skip")}
      </a>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="PS Business Group"
            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`leading-tight ${onDark ? "text-white" : "text-foreground"}`}>
            <div className="font-display text-base tracking-wide">PS Business</div>
            <div
              className={`text-[9px] uppercase tracking-[0.3em] ${
                onDark ? "text-white/50" : "text-muted-foreground"
              }`}
            >
              Group
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm" aria-label="Principal">
          <Link
            to="/"
            className={`${linkBase} transition-colors duration-300 ${
              isHome && !activeSection ? linkActive : ""
            }`}
            activeProps={{ "aria-current": activeSection ? undefined : "page" }}
            activeOptions={{ exact: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {t("nav.home")}
          </Link>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => goToSection(e, item.id)}
              aria-current={activeSection === item.id ? "true" : undefined}
              className={`${linkBase} transition-colors duration-300 ${
                activeSection === item.id ? linkActive : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher onDark={onDark} />
          <a
            href="/#contato"
            onClick={(e) => goToSection(e, "contato")}
            className={`inline-flex items-center gap-2 text-sm px-5 py-2.5 transition-all duration-300 border ${
              onDark
                ? "border-gold-soft/40 text-gold-soft hover:bg-gold-soft/10 hover:border-gold-soft/60"
                : "border-gold/40 text-foreground hover:bg-gold/10 hover:border-gold/60"
            }`}
          >
            {t("nav.cta")}
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex items-center justify-center h-10 w-10 ${onDark ? "text-white" : "text-foreground"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden glass border-t border-border/40">
          <nav className="px-6 py-6 flex flex-col gap-5 text-base" aria-label="Principal (mobile)">
            <Link
              to="/"
              className="text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: true }}
              onClick={() => setOpen(false)}
            >
              {t("nav.home")}
            </Link>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                className={
                  activeSection === item.id ? "text-foreground font-medium" : "text-foreground/70"
                }
                onClick={(e) => goToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <LanguageSwitcher />
              <a
                href="/#contato"
                onClick={(e) => goToSection(e, "contato")}
                className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-3 text-sm uppercase tracking-[0.2em]"
              >
                {t("nav.cta")} →
              </a>
            </div>
          </nav>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-30" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(90deg, transparent, var(--gold-soft), transparent)" }}
      />
    </header>
  );
}
