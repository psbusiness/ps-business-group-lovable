import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Lock } from "lucide-react";
import logo from "@/assets/ps-logo-official.png";
import { useT } from "@/i18n";

export function SiteFooter() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noir text-foreground relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="PS Business Group" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display text-lg">PS Business Group</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-foreground/40">
                  {t("footer.subtitle")}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/50 max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-foreground/40">
              <Lock size={12} className="text-gold-soft/70" />
              <span>Conexão segura · HTTPS / SSL</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-5">
              {t("footer.nav")}
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/empresas"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {t("nav.companies")}
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-5">
              {t("footer.legal")}
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacidade"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  to="/aviso-legal"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  {t("footer.legalNotice")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/50 mb-5">
              {t("footer.contact")}
            </div>
            <ul className="space-y-3 text-sm text-foreground/50">
              <li>contato@psbusinessgroup.com.br</li>
              <li>{t("footer.location")}</li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/ps_businessgroup/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/40 hover:text-gold-soft transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/ps-business-group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground/40 hover:text-gold-soft transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/30">
          <div>
            © {year} PS Business Group. {t("footer.rights")}
          </div>
          <div className="font-display italic text-gold-soft/40">{t("footer.building")}</div>
        </div>
      </div>
    </footer>
  );
}
