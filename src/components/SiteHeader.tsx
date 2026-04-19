import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/ps-logo.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <img src={logo} alt="PS Business Group" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-base tracking-wide">PS Business</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Group</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link to="/" className="hover:text-foreground transition-colors text-muted-foreground" activeProps={{ className: "text-foreground font-medium" }} activeOptions={{ exact: true }}>
            Início
          </Link>
          <Link to="/empresas" className="hover:text-foreground transition-colors text-muted-foreground" activeProps={{ className: "text-foreground font-medium" }}>
            Empresas
          </Link>
          <Link to="/sobre" className="hover:text-foreground transition-colors text-muted-foreground" activeProps={{ className: "text-foreground font-medium" }}>
            Sobre
          </Link>
          <Link to="/contato" className="hover:text-foreground transition-colors text-muted-foreground" activeProps={{ className: "text-foreground font-medium" }}>
            Contato
          </Link>
        </nav>

        <Link
          to="/contato"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-foreground/80 px-5 py-2.5 hover:bg-foreground hover:text-background transition-all"
        >
          Fale conosco
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
