import lioreLogo from "@/assets/logos/liore.png";
import santoCristoLogo from "@/assets/logos/santo-cristo.png";
import novusLogo from "@/assets/logos/novus.png";
import legionisLogo from "@/assets/logos/legionis.png";
import stellaLogo from "@/assets/logos/stella.png";
import horinLogo from "@/assets/logos/horin.png";
import vincereLogo from "@/assets/logos/vincere.png";
import libertareLogo from "@/assets/logos/libertare.png";
import pro96Logo from "@/assets/logos/pro96.png";
import whiteTigerLogo from "@/assets/logos/white-tiger.png";

export type Company = {
  slug: string;
  name: string;
  sector: string;
  description: string;
  url: string;
  logo?: string;
  logoBg?: "light" | "dark";
  established?: string;
};

export const companies: Company[] = [
  {
    slug: "liore",
    name: "Liore Logística",
    sector: "Logística & Transporte",
    description: "Soluções logísticas integradas com foco em agilidade, rastreabilidade e excelência operacional em escala nacional.",
    url: "http://www.liorelogistica.com.br",
    logo: lioreLogo,
    logoBg: "light",
  },
  {
    slug: "agricola-santo-cristo",
    name: "Agrícola Santo Cristo",
    sector: "Agronegócio",
    description: "Produção agrícola de alto desempenho, unindo tradição rural a tecnologia e práticas sustentáveis no campo.",
    url: "https://www.agricolasantocristo.com.br",
    logo: santoCristoLogo,
    logoBg: "light",
  },
  {
    slug: "novus-mundi",
    name: "Novus Mundi",
    sector: "Educação",
    description: "Educação transformadora que prepara líderes globais por meio de currículo internacional e formação humana integral.",
    url: "https://www.novusmundi.com.br/",
    logo: novusLogo,
    logoBg: "light",
  },
  {
    slug: "legionis",
    name: "Legionis Sports",
    sector: "Esporte & Performance",
    description: "Gestão e desenvolvimento de atletas de alto rendimento, conectando talento, ciência e mercado esportivo.",
    url: "https://www.legionis.com.br/",
    logo: legionisLogo,
    logoBg: "light",
  },
  {
    slug: "stella-aurea",
    name: "Stella Aurea Capital",
    sector: "Gestão de Capital",
    description: "Alocação patrimonial sofisticada e investimentos de longo prazo guiados por disciplina, análise e visão estratégica.",
    url: "http://www.stellaaureacapital.com.br",
    logo: stellaLogo,
    logoBg: "light",
  },
  {
    slug: "horin",
    name: "Horin Real Estate",
    sector: "Imobiliário",
    description: "Empreendimentos imobiliários com curadoria arquitetônica e localização estratégica para investidores e moradores exigentes.",
    url: "http://www.horinrealestate.com.br",
    logo: horinLogo,
    logoBg: "dark",
  },
  {
    slug: "vincere-travel",
    name: "Vincere Travel",
    sector: "Viagens & Experiências",
    description: "Viagens sob medida e experiências autorais ao redor do mundo para clientes que buscam o extraordinário.",
    url: "http://www.vinceretravel.com.br",
    logo: vincereLogo,
    logoBg: "dark",
  },
  {
    slug: "libertare",
    name: "Libertare",
    sector: "Jurídico",
    description: "Estúdio jurídico boutique focado em soluções estratégicas, consultoria empresarial e direito de alta complexidade.",
    url: "https://sites.google.com/view/libertareestudiojurdico/inicio",
    logo: libertareLogo,
    logoBg: "light",
  },
  {
    slug: "pro96",
    name: "Pro96 Automotive",
    sector: "Automotivo",
    description: "Cuidado premium para veículos de alto padrão, unindo expertise técnica, estética e performance.",
    url: "https://www.pro96automotive.com.br/",
    logo: pro96Logo,
    logoBg: "dark",
  },
  {
    slug: "white-tiger",
    name: "White Tiger",
    sector: "Lifestyle & Marca",
    description: "Marca autoral com identidade forte, unindo design, atitude e presença em produtos que traduzem performance e estilo.",
    url: "http://www.whitetigeroficial.com.br/",
    logo: whiteTigerLogo,
    logoBg: "dark",
  },
];
