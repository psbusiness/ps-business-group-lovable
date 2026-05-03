import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/ps-logo-official.png";

export function SiteFooter() {
  return (
    <footer className="bg-noir text-foreground grain relative shimmer-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="PS Business Group"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-display text-lg">PS Business Group</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-foreground/40">Grupo empresarial</div>
              </div>
            </div>
            <p className="text-sm text-foreground/50 max-w-sm leading-relaxed">
              Conexões que impulsionam o futuro. Inteligência empresarial, gestão eficiente e visão de longo prazo em diferentes setores e mercados.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-5">Navegação</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Início</Link></li>
              <li><Link to="/empresas" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Empresas</Link></li>
              <li><Link to="/sobre" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Sobre</Link></li>
              <li><Link to="/contato" className="text-foreground/60 hover:text-foreground transition-colors duration-300">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-5">Contato</div>
            <ul className="space-y-3 text-sm text-foreground/50">
              <li>contato@psbusinessgroup.com.br</li>
              <li>São Paulo · Brasil</li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/ps_businessgroup/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-gold-soft transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/ps-business-group" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-gold-soft transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/30">
          <div>© {new Date().getFullYear()} PS Business Group. Todos os direitos reservados.</div>
          <div className="font-display italic text-gold-soft/40">Construindo presença.</div>
        </div>
      </div>
    </footer>
  );
}
