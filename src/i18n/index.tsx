import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "es";

type Dict = Record<string, string>;

const pt: Dict = {
  // Header
  "nav.home": "Início",
  "nav.companies": "Empresas",
  "nav.about": "Sobre",
  "nav.contact": "Contato",
  "nav.cta": "Fale conosco",
  "nav.openMenu": "Abrir menu",
  // Common
  "tag.group": "Grupo empresarial",
  "tag.principles": "Princípios",
  "tag.companies": "Empresas",
  "tag.about": "Sobre o grupo",
  "tag.contact": "Contato",
  "tag.management": "Gestão",
  "tag.building": "Construindo presença",
  "tag.opExcellence": "Excelência operacional",
  "tag.globalMindset": "Mentalidade global",
  "tag.positioning": "Nosso posicionamento",
  // Home
  "home.hero.title.a": "Conexões que",
  "home.hero.title.b": "impulsionam",
  "home.hero.title.c": "o futuro.",
  "home.hero.subtitle":
    "Cada parceria representa mais do que um acordo: confiança, visão compartilhada e compromisso com crescimento sustentável.",
  "home.hero.ctaCompanies": "Conheça as empresas",
  "home.hero.ctaAbout": "Sobre o grupo",
  "home.scroll": "Role",
  "home.principles.lead":
    "Atuando de forma estratégica e estruturada, conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados.",
  "home.p1.t": "Transparência",
  "home.p1.d": "Clareza em cada etapa, do primeiro contato ao fechamento.",
  "home.p2.t": "Segurança",
  "home.p2.d": "Estrutura sólida que protege parceiros, capital e reputação.",
  "home.p3.t": "Performance",
  "home.p3.d": "Resultado consistente como métrica final de toda decisão.",
  "home.p4.t": "Expansão",
  "home.p4.d": "Crescimento estruturado, com visão de longo prazo.",
  "home.eco.titleA": "Um ecossistema de",
  "home.eco.titleB": "crescimento",
  "home.eco.desc":
    "O PS Business Group não é apenas um grupo empresarial — é um ecossistema preparado para atuar em cenários complexos e gerar impacto consistente.",
  "home.eco.viewAll": "Ver todas as empresas",
  "home.mgmt.title": "Gestão integrada, resultados consistentes.",
  "home.mgmt.p1":
    "Trabalhamos com uma gestão integrada, onde processos, pessoas e tecnologia caminham juntos para garantir resultados consistentes e escaláveis.",
  "home.mgmt.p2":
    "Nossa atuação abrange múltiplos setores, com foco em gestão empresarial, investimentos estratégicos, expansão de negócios, estruturação corporativa e inteligência operacional.",
  "home.mgmt.p3":
    "Mais do que administrar empresas, estruturamos sistemas que funcionam de forma sólida, previsível e orientada a crescimento.",
  "home.cta.title.a": "Estamos construindo mais do que empresas.",
  "home.cta.title.b": "Estamos construindo presença.",
  "home.cta.desc":
    "Cada cidade, uma nova possibilidade. Cada mercado, uma nova estratégia. Cada movimento, uma nova construção.",
  "home.cta.btn": "Fale com o grupo",
  // Sobre
  "about.hero.title.a": "Inteligência empresarial, gestão eficiente,",
  "about.hero.title.b": "visão de longo prazo",
  "about.p1":
    "No PS Business Group, acreditamos que cada parceria representa mais do que um acordo. Representa confiança, visão compartilhada e compromisso com crescimento sustentável.",
  "about.p2":
    "Atuando de forma estratégica e estruturada, conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados. Nosso modelo é baseado em inteligência empresarial, gestão eficiente e visão de longo prazo.",
  "about.p3":
    "Construímos pontes entre mercados, conectamos ideias a resultados e transformamos potencial em valor real. O PS Business Group não é apenas um grupo empresarial — é um ecossistema de crescimento, preparado para atuar em cenários complexos e gerar impacto consistente.",
  "about.p4": "Seguimos firmes, estabelecendo conexões que impulsionam o futuro.",
  "about.op.title": "Cada detalhe reflete organização, eficiência e excelência.",
  "about.op.p1":
    "Nosso ambiente corporativo representa o padrão que aplicamos em todas as nossas empresas e operações. Trabalhamos com uma gestão integrada, onde processos, pessoas e tecnologia caminham juntos.",
  "about.op.p2":
    "A base de um grande grupo está na sua capacidade de organizar, padronizar e evoluir continuamente.",
  "about.op.l1": "Gestão empresarial",
  "about.op.l2": "Investimentos estratégicos",
  "about.op.l3": "Expansão de negócios",
  "about.op.l4": "Estruturação corporativa",
  "about.op.l5": "Inteligência operacional",
  "about.global.titleA": "Atuação binacional, visão",
  "about.global.titleB": "internacional",
  "about.global.p1":
    "O PS Business Group nasce com uma mentalidade global, preparado para atuar em diferentes mercados e identificar oportunidades onde outros ainda não enxergam.",
  "about.global.p2":
    "Com presença estratégica e atuação binacional, conectamos negócios, ampliamos operações e desenvolvemos projetos com foco em expansão sustentável.",
  "about.global.b1.t": "Pensar globalmente",
  "about.global.b1.d": "Identificar oportunidades onde outros ainda não enxergam.",
  "about.global.b2.t": "Atuar estrategicamente",
  "about.global.b2.d": "Cada movimento orientado por análise e propósito.",
  "about.global.b3.t": "Crescer de forma estruturada",
  "about.global.b3.d": "Expansão sustentável, com geração de valor real.",
  "about.cta.btn": "Fale com o grupo",
  "about.cta.lead.a": "Estamos construindo mais do que empresas.",
  "about.cta.lead.b": "Estamos construindo presença.",
  // Empresas
  "companies.tag": "Empresas do grupo",
  "companies.titleA": "Um ecossistema de",
  "companies.titleB": "crescimento",
  "companies.desc":
    "Conectamos oportunidades, desenvolvemos negócios e fortalecemos empresas em diferentes setores e mercados — todas guiadas pelos mesmos princípios de transparência, segurança, performance e expansão estratégica.",
  // Contato
  "contact.titleA": "Conexões que",
  "contact.titleB": "impulsionam o futuro",
  "contact.lead":
    "Para parcerias, oportunidades de negócio ou imprensa, deixe sua mensagem. Cada parceria representa mais do que um acordo.",
  "contact.email": "E-mail",
  "contact.region": "Atuação",
  "contact.regionV": "Binacional · Brasil",
  "contact.group": "Grupo",
  "contact.groupV": "9 empresas em setores estratégicos",
  "contact.f.name": "Nome",
  "contact.f.company": "Empresa",
  "contact.f.email": "E-mail",
  "contact.f.subject": "Assunto",
  "contact.f.msg": "Mensagem",
  "contact.f.send": "Enviar mensagem",
  "contact.f.sent": "Mensagem enviada ✓",
  "contact.err.generic": "Campo inválido.",
  "contact.err.nome": "Informe seu nome (mínimo 2 caracteres).",
  "contact.err.empresa": "Nome da empresa muito longo.",
  "contact.err.email": "Informe um e-mail válido.",
  "contact.err.assunto": "Informe o assunto (mínimo 3 caracteres).",
  "contact.err.msg": "Mensagem deve ter entre 10 e 2000 caracteres.",
  // Footer
  "footer.tagline":
    "Conexões que impulsionam o futuro. Inteligência empresarial, gestão eficiente e visão de longo prazo em diferentes setores e mercados.",
  "footer.nav": "Navegação",
  "footer.contact": "Contato",
  "footer.location": "Brasil · Paraguai",
  "footer.legal": "Legal",
  "footer.privacy": "Política de Privacidade",
  "footer.terms": "Termos de Uso",
  "footer.legalNotice": "Aviso Legal",
  "footer.rights": "Todos os direitos reservados.",
  "footer.building": "Construindo presença.",
  "footer.subtitle": "Grupo empresarial",
  // Cookies
  "cookies.text":
    "Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo, conforme a Lei Geral de Proteção de Dados (LGPD).",
  "cookies.accept": "Aceitar",
  "cookies.reject": "Recusar",
  "cookies.more": "Saiba mais",
  // Legal common
  "legal.updated": "Última atualização",
  "legal.back": "Voltar ao início",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.companies": "Empresas",
  "nav.about": "Acerca",
  "nav.contact": "Contacto",
  "nav.cta": "Hablemos",
  "nav.openMenu": "Abrir menú",
  "tag.group": "Grupo empresarial",
  "tag.principles": "Principios",
  "tag.companies": "Empresas",
  "tag.about": "Sobre el grupo",
  "tag.contact": "Contacto",
  "tag.management": "Gestión",
  "tag.building": "Construyendo presencia",
  "tag.opExcellence": "Excelencia operativa",
  "tag.globalMindset": "Mentalidad global",
  "tag.positioning": "Nuestro posicionamiento",
  "home.hero.title.a": "Conexiones que",
  "home.hero.title.b": "impulsan",
  "home.hero.title.c": "el futuro.",
  "home.hero.subtitle":
    "Cada alianza representa más que un acuerdo: confianza, visión compartida y compromiso con el crecimiento sostenible.",
  "home.hero.ctaCompanies": "Conocé las empresas",
  "home.hero.ctaAbout": "Sobre el grupo",
  "home.scroll": "Desplazar",
  "home.principles.lead":
    "Actuando de forma estratégica y estructurada, conectamos oportunidades, desarrollamos negocios y fortalecemos empresas en distintos sectores y mercados.",
  "home.p1.t": "Transparencia",
  "home.p1.d": "Claridad en cada etapa, desde el primer contacto hasta el cierre.",
  "home.p2.t": "Seguridad",
  "home.p2.d": "Estructura sólida que protege socios, capital y reputación.",
  "home.p3.t": "Desempeño",
  "home.p3.d": "Resultado consistente como métrica final de cada decisión.",
  "home.p4.t": "Expansión",
  "home.p4.d": "Crecimiento estructurado, con visión de largo plazo.",
  "home.eco.titleA": "Un ecosistema de",
  "home.eco.titleB": "crecimiento",
  "home.eco.desc":
    "PS Business Group no es solo un grupo empresarial — es un ecosistema preparado para actuar en escenarios complejos y generar impacto consistente.",
  "home.eco.viewAll": "Ver todas las empresas",
  "home.mgmt.title": "Gestión integrada, resultados consistentes.",
  "home.mgmt.p1":
    "Trabajamos con una gestión integrada, donde procesos, personas y tecnología avanzan juntos para garantizar resultados consistentes y escalables.",
  "home.mgmt.p2":
    "Nuestra actuación abarca múltiples sectores, con foco en gestión empresarial, inversiones estratégicas, expansión de negocios, estructuración corporativa e inteligencia operativa.",
  "home.mgmt.p3":
    "Más que administrar empresas, estructuramos sistemas que funcionan de forma sólida, previsible y orientada al crecimiento.",
  "home.cta.title.a": "Estamos construyendo más que empresas.",
  "home.cta.title.b": "Estamos construyendo presencia.",
  "home.cta.desc":
    "Cada ciudad, una nueva posibilidad. Cada mercado, una nueva estrategia. Cada movimiento, una nueva construcción.",
  "home.cta.btn": "Hablá con el grupo",
  "about.hero.title.a": "Inteligencia empresarial, gestión eficiente,",
  "about.hero.title.b": "visión de largo plazo",
  "about.p1":
    "En PS Business Group, creemos que cada alianza representa más que un acuerdo. Representa confianza, visión compartida y compromiso con el crecimiento sostenible.",
  "about.p2":
    "Actuando de forma estratégica y estructurada, conectamos oportunidades, desarrollamos negocios y fortalecemos empresas en distintos sectores y mercados. Nuestro modelo se basa en inteligencia empresarial, gestión eficiente y visión de largo plazo.",
  "about.p3":
    "Construimos puentes entre mercados, conectamos ideas con resultados y transformamos potencial en valor real. PS Business Group es un ecosistema de crecimiento, preparado para actuar en escenarios complejos y generar impacto consistente.",
  "about.p4": "Seguimos firmes, estableciendo conexiones que impulsan el futuro.",
  "about.op.title": "Cada detalle refleja organización, eficiencia y excelencia.",
  "about.op.p1":
    "Nuestro entorno corporativo representa el estándar que aplicamos en todas nuestras empresas y operaciones. Trabajamos con una gestión integrada donde procesos, personas y tecnología avanzan juntos.",
  "about.op.p2":
    "La base de un gran grupo está en su capacidad de organizar, estandarizar y evolucionar continuamente.",
  "about.op.l1": "Gestión empresarial",
  "about.op.l2": "Inversiones estratégicas",
  "about.op.l3": "Expansión de negocios",
  "about.op.l4": "Estructuración corporativa",
  "about.op.l5": "Inteligencia operativa",
  "about.global.titleA": "Actuación binacional, visión",
  "about.global.titleB": "internacional",
  "about.global.p1":
    "PS Business Group nace con una mentalidad global, preparado para actuar en distintos mercados e identificar oportunidades donde otros aún no las ven.",
  "about.global.p2":
    "Con presencia estratégica y actuación binacional, conectamos negocios, ampliamos operaciones y desarrollamos proyectos con foco en expansión sostenible.",
  "about.global.b1.t": "Pensar globalmente",
  "about.global.b1.d": "Identificar oportunidades donde otros aún no las ven.",
  "about.global.b2.t": "Actuar estratégicamente",
  "about.global.b2.d": "Cada movimiento orientado por análisis y propósito.",
  "about.global.b3.t": "Crecer de forma estructurada",
  "about.global.b3.d": "Expansión sostenible, con generación de valor real.",
  "about.cta.btn": "Hablá con el grupo",
  "about.cta.lead.a": "Estamos construyendo más que empresas.",
  "about.cta.lead.b": "Estamos construyendo presencia.",
  "companies.tag": "Empresas del grupo",
  "companies.titleA": "Un ecosistema de",
  "companies.titleB": "crecimiento",
  "companies.desc":
    "Conectamos oportunidades, desarrollamos negocios y fortalecemos empresas en distintos sectores y mercados — todas guiadas por los mismos principios de transparencia, seguridad, desempeño y expansión estratégica.",
  "contact.titleA": "Conexiones que",
  "contact.titleB": "impulsan el futuro",
  "contact.lead":
    "Para alianzas, oportunidades de negocio o prensa, dejá tu mensaje. Cada alianza representa más que un acuerdo.",
  "contact.email": "Correo",
  "contact.region": "Actuación",
  "contact.regionV": "Binacional · Paraguay · Brasil",
  "contact.group": "Grupo",
  "contact.groupV": "9 empresas en sectores estratégicos",
  "contact.f.name": "Nombre",
  "contact.f.company": "Empresa",
  "contact.f.email": "Correo",
  "contact.f.subject": "Asunto",
  "contact.f.msg": "Mensaje",
  "contact.f.send": "Enviar mensaje",
  "contact.f.sent": "Mensaje enviado ✓",
  "contact.err.generic": "Campo inválido.",
  "contact.err.nome": "Ingresa tu nombre (mínimo 2 caracteres).",
  "contact.err.empresa": "Nombre de empresa demasiado largo.",
  "contact.err.email": "Ingresa un e-mail válido.",
  "contact.err.assunto": "Ingresa el asunto (mínimo 3 caracteres).",
  "contact.err.msg": "El mensaje debe tener entre 10 y 2000 caracteres.",
  "footer.tagline":
    "Conexiones que impulsan el futuro. Inteligencia empresarial, gestión eficiente y visión de largo plazo en distintos sectores y mercados.",
  "footer.nav": "Navegación",
  "footer.contact": "Contacto",
  "footer.location": "Brasil · Paraguay",
  "footer.legal": "Legal",
  "footer.privacy": "Política de Privacidad",
  "footer.terms": "Términos de Uso",
  "footer.legalNotice": "Aviso Legal",
  "footer.rights": "Todos los derechos reservados.",
  "footer.building": "Construyendo presencia.",
  "footer.subtitle": "Grupo empresarial",
  "cookies.text":
    "Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar contenido, conforme a las leyes de protección de datos vigentes (LGPD / Ley N° 6.534/20 PY).",
  "cookies.accept": "Aceptar",
  "cookies.reject": "Rechazar",
  "cookies.more": "Más información",
  "legal.updated": "Última actualización",
  "legal.back": "Volver al inicio",
};

const dicts: Record<Lang, Dict> = { pt, es };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangCtx = createContext<Ctx>({ lang: "pt", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ps-lang") as Lang | null;
      if (saved === "pt" || saved === "es") setLangState(saved);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "es-PY";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("ps-lang", l);
    } catch {
      // ignore
    }
  };

  const t = (k: string) => dicts[lang][k] ?? dicts.pt[k] ?? k;

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useT() {
  return useContext(LangCtx);
}
