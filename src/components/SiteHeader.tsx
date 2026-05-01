import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ps-logo-black.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Rotas cujo topo é escuro (hero noir). Quando não scrolled, usamos modo claro/branco.
  const heroIsDark = pathname === "/" || pathname === "/empresas" || pathname === "/sobre";
  const onDark = heroIsDark && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu mobile ao trocar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkBase = onDark
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const linkActive = onDark ? "text-white font-medium" : "text-foreground font-medium";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="PS Business Group"
            className="h-14 w-14 object-contain invert"
          />
          <div className={`leading-tight ${onDark ? "text-white" : "text-foreground"}`}>
            <div className="font-display text-base tracking-wide">PS Business</div>
            <div className={`text-[10px] uppercase tracking-[0.25em] ${onDark ? "text-white/60" : "text-muted-foreground"}`}>Group</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link to="/" className={`${linkBase} transition-colors`} activeProps={{ className: linkActive }} activeOptions={{ exact: true }}>
            Início
          </Link>
          <Link to="/empresas" className={`${linkBase} transition-colors`} activeProps={{ className: linkActive }}>
            Empresas
          </Link>
          <Link to="/sobre" className={`${linkBase} transition-colors`} activeProps={{ className: linkActive }}>
            Sobre
          </Link>
          <Link to="/contato" className={`${linkBase} transition-colors`} activeProps={{ className: linkActive }}>
            Contato
          </Link>
        </nav>

        <Link
          to="/contato"
          className={`hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 transition-all border ${
            onDark
              ? "border-white/40 text-white hover:bg-white hover:text-black"
              : "border-foreground/80 text-foreground hover:bg-foreground hover:text-background"
          }`}
        >
          Fale conosco
          <span aria-hidden>→</span>
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden inline-flex items-center justify-center h-10 w-10 ${onDark ? "text-white" : "text-foreground"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="px-6 py-6 flex flex-col gap-5 text-base">
            <Link to="/" className="text-foreground" activeProps={{ className: "text-foreground font-medium" }} activeOptions={{ exact: true }}>
              Início
            </Link>
            <Link to="/empresas" className="text-foreground" activeProps={{ className: "text-foreground font-medium" }}>
              Empresas
            </Link>
            <Link to="/sobre" className="text-foreground" activeProps={{ className: "text-foreground font-medium" }}>
              Sobre
            </Link>
            <Link to="/contato" className="text-foreground" activeProps={{ className: "text-foreground font-medium" }}>
              Contato
            </Link>
            <Link
              to="/contato"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 text-sm uppercase tracking-[0.2em]"
            >
              Fale conosco →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
