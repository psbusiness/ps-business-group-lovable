import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { useT } from "@/i18n";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — PS Business Group" },
      { name: "description", content: "Aviso Legal e informações corporativas do PS Business Group." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://psbusiness.lovable.app/aviso-legal" }],
  }),
  component: AvisoLegalPage,
});

function AvisoLegalPage() {
  const { lang } = useT();
  if (lang === "es") return <Es />;
  return <Pt />;
}

function Pt() {
  return (
    <LegalLayout tag="Aviso Legal" title="Aviso Legal" updated="11/06/2026">
      <h2 className="font-display text-2xl mt-2">Titularidade do site</h2>
      <p><strong>PS Business Group</strong> — Grupo empresarial brasileiro com atuação binacional.</p>
      <p>Contato: <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">contato@psbusinessgroup.com.br</a></p>
      <p>Sede: São Paulo · Brasil</p>

      <h2 className="font-display text-2xl mt-10">Finalidade</h2>
      <p>Este site possui caráter exclusivamente informativo e institucional. As informações apresentadas sobre as empresas do grupo, mercados de atuação e iniciativas não constituem oferta, recomendação de investimento ou compromisso contratual.</p>

      <h2 className="font-display text-2xl mt-10">Marcas</h2>
      <p>"PS Business Group" e as marcas das empresas do grupo são de titularidade de seus respectivos detentores. O uso indevido é vedado.</p>

      <h2 className="font-display text-2xl mt-10">Conformidade</h2>
      <p>Operamos em conformidade com a legislação brasileira aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014) e o Código de Defesa do Consumidor.</p>

      <h2 className="font-display text-2xl mt-10">Direitos autorais</h2>
      <p>© {new Date().getFullYear()} PS Business Group. Todos os direitos reservados.</p>
    </LegalLayout>
  );
}

function Es() {
  return (
    <LegalLayout tag="Aviso Legal" title="Aviso Legal" updated="11/06/2026">
      <h2 className="font-display text-2xl mt-2">Titularidad del sitio</h2>
      <p><strong>PS Business Group</strong> — Grupo empresarial con actuación binacional Brasil / Paraguay.</p>
      <p>Contacto: <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">contato@psbusinessgroup.com.br</a></p>

      <h2 className="font-display text-2xl mt-10">Finalidad</h2>
      <p>Este sitio tiene carácter exclusivamente informativo e institucional. Las informaciones presentadas no constituyen oferta, recomendación de inversión ni compromiso contractual.</p>

      <h2 className="font-display text-2xl mt-10">Marcas</h2>
      <p>"PS Business Group" y las marcas de las empresas del grupo son titularidad de sus respectivos titulares. Queda prohibido su uso indebido.</p>

      <h2 className="font-display text-2xl mt-10">Cumplimiento</h2>
      <p>Operamos en cumplimiento de la legislación aplicable, incluyendo la Ley N° 6.534/20 de Paraguay (Protección de Datos Personales Crediticios) y la LGPD brasileña.</p>

      <h2 className="font-display text-2xl mt-10">Derechos de autor</h2>
      <p>© {new Date().getFullYear()} PS Business Group. Todos los derechos reservados.</p>
    </LegalLayout>
  );
}
