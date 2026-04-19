import { Link } from "@tanstack/react-router";
import logo from "@/assets/ps-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-noir text-primary-foreground grain relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="PS Business Group" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display text-lg">PS Business Group</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">Holding</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-sm leading-relaxed">
              Um ecossistema de empresas em setores estratégicos — construído sobre excelência, longevidade e visão de futuro.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Navegação</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Início</Link></li>
              <li><Link to="/empresas" className="hover:text-gold transition-colors">Empresas</Link></li>
              <li><Link to="/sobre" className="hover:text-gold transition-colors">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-gold mb-5">Contato</div>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>contato@psbusinessgroup.com.br</li>
              <li>São Paulo · Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} PS Business Group. Todos os direitos reservados.</div>
          <div className="font-display italic">Vincit qui se vincit</div>
        </div>
      </div>
    </footer>
  );
}
