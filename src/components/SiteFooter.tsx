import { Link } from "@tanstack/react-router";
import logo from "@/assets/ps-logo-black.png";

export function SiteFooter() {
  return (
    <footer className="bg-noir text-foreground grain relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={logo}
                alt="PS Business Group"
                className="h-14 w-14 object-contain invert"
              />
              <div>
                <div className="font-display text-lg">PS Business Group</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">Grupo empresarial</div>
              </div>
            </div>
            <p className="text-sm text-foreground/70 max-w-sm leading-relaxed">
              Conexões que impulsionam o futuro. Inteligência empresarial, gestão eficiente e visão de longo prazo em diferentes setores e mercados.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/50 mb-5">Navegação</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/empresas" className="hover:text-white transition-colors">Empresas</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-white/50 mb-5">Contato</div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>contato@psbusinessgroup.com.br</li>
              <li>São Paulo · Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/50">
          <div>© {new Date().getFullYear()} PS Business Group. Todos os direitos reservados.</div>
          <div className="font-display italic">Construindo presença.</div>
        </div>
      </div>
    </footer>
  );
}
