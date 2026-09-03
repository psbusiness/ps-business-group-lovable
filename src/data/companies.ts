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
  sectorEs: string;
  description: string;
  descriptionEs: string;
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
    sectorEs: "Logística & Transporte",
    description:
      "Soluções logísticas integradas com foco em agilidade, rastreabilidade e excelência operacional em escala nacional.",
    descriptionEs:
      "Soluciones logísticas integradas con foco en agilidad, trazabilidad y excelencia operativa a escala nacional.",
    url: "http://www.liorelogistica.com.br",
    logo: lioreLogo,
    logoBg: "light",
  },
  {
    slug: "agricola-santo-cristo",
    name: "Agrícola Santo Cristo",
    sector: "Agronegócio",
    sectorEs: "Agronegocio",
    description:
      "Produção agrícola de alto desempenho, unindo tradição rural a tecnologia e práticas sustentáveis no campo.",
    descriptionEs:
      "Producción agrícola de alto desempeño, uniendo tradición rural con tecnología y prácticas sostenibles en el campo.",
    url: "https://www.agricolasantocristo.com.br",
    logo: santoCristoLogo,
    logoBg: "light",
  },
  {
    slug: "novus-mundi",
    name: "Novus Mundi",
    sector: "Educação",
    sectorEs: "Educación",
    description:
      "Educação transformadora que prepara líderes globais por meio de currículo internacional e formação humana integral.",
    descriptionEs:
      "Educación transformadora que prepara líderes globales mediante currículo internacional y formación humana integral.",
    url: "https://www.novusmundi.com.br/",
    logo: novusLogo,
    logoBg: "light",
  },
  {
    slug: "legionis",
    name: "Legionis Sports",
    sector: "Esporte & Performance",
    sectorEs: "Deporte & Rendimiento",
    description:
      "Gestão e desenvolvimento de atletas de alto rendimento, conectando talento, ciência e mercado esportivo.",
    descriptionEs:
      "Gestión y desarrollo de atletas de alto rendimiento, conectando talento, ciencia y mercado deportivo.",
    url: "https://www.legionis.com.br/",
    logo: legionisLogo,
    logoBg: "light",
  },
  {
    slug: "stella-aurea",
    name: "Stella Aurea Capital",
    sector: "Gestão de Capital",
    sectorEs: "Gestión de Capital",
    description:
      "Alocação patrimonial sofisticada e investimentos de longo prazo guiados por disciplina, análise e visão estratégica.",
    descriptionEs:
      "Asignación patrimonial sofisticada e inversiones de largo plazo guiadas por disciplina, análisis y visión estratégica.",
    url: "http://www.stellaaureacapital.com.br",
    logo: stellaLogo,
    logoBg: "light",
  },
  {
    slug: "horin",
    name: "Horin Real Estate",
    sector: "Imobiliário",
    sectorEs: "Inmobiliario",
    description:
      "Empreendimentos imobiliários com curadoria arquitetônica e localização estratégica para investidores e moradores exigentes.",
    descriptionEs:
      "Emprendimientos inmobiliarios con curaduría arquitectónica y ubicación estratégica para inversores y residentes exigentes.",
    url: "http://www.horinrealestate.com.br",
    logo: horinLogo,
    logoBg: "dark",
  },
  {
    slug: "vincere-travel",
    name: "Vincere Travel",
    sector: "Viagens & Experiências",
    sectorEs: "Viajes & Experiencias",
    description:
      "Viagens sob medida e experiências autorais ao redor do mundo para clientes que buscam o extraordinário.",
    descriptionEs:
      "Viajes a medida y experiencias de autor alrededor del mundo para clientes que buscan lo extraordinario.",
    url: "http://www.vinceretravel.com.br",
    logo: vincereLogo,
    logoBg: "dark",
  },
  {
    slug: "libertare",
    name: "Libertare",
    sector: "Jurídico",
    sectorEs: "Jurídico",
    description:
      "Estúdio jurídico boutique focado em soluções estratégicas, consultoria empresarial e direito de alta complexidade.",
    descriptionEs:
      "Estudio jurídico boutique enfocado en soluciones estratégicas, consultoría empresarial y derecho de alta complejidad.",
    url: "https://sites.google.com/view/libertareestudiojurdico/inicio",
    logo: libertareLogo,
    logoBg: "light",
  },
  {
    slug: "pro96",
    name: "Pro96 Automotive",
    sector: "Automotivo",
    sectorEs: "Automotor",
    description:
      "Cuidado premium para veículos de alto padrão, unindo expertise técnica, estética e performance.",
    descriptionEs:
      "Cuidado premium para vehículos de alta gama, uniendo experiencia técnica, estética y rendimiento.",
    url: "https://www.pro96automotive.com.br/",
    logo: pro96Logo,
    logoBg: "dark",
  },
  {
    slug: "white-tiger",
    name: "White Tiger",
    sector: "Lifestyle & Marca",
    sectorEs: "Lifestyle & Marca",
    description:
      "Marca autoral com identidade forte, unindo design, atitude e presença em produtos que traduzem performance e estilo.",
    descriptionEs:
      "Marca de autor con identidad fuerte, uniendo diseño, actitud y presencia en productos que traducen rendimiento y estilo.",
    url: "http://www.whitetigeroficial.com.br/",
    logo: whiteTigerLogo,
    logoBg: "dark",
  },
];
