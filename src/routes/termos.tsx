import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { useT } from "@/i18n";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — PS Business Group" },
      { name: "description", content: "Termos e Condições de Uso do site institucional do PS Business Group." },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://psbusiness.lovable.app/termos" }],
  }),
  component: TermosPage,
});

function TermosPage() {
  const { lang } = useT();
  if (lang === "es") return <Es />;
  return <Pt />;
}

function Pt() {
  return (
    <LegalLayout tag="Termos" title="Termos de Uso" updated="11/06/2026">
      <p>O acesso e a utilização do site do <strong>PS Business Group</strong> implicam aceitação integral destes Termos de Uso. Leia atentamente antes de utilizar nossos serviços digitais.</p>
      <h2 className="font-display text-2xl mt-10">1. Objeto</h2>
      <p>Este site tem caráter institucional e informativo sobre o grupo empresarial e suas empresas. Não constitui oferta vinculante de produtos ou serviços.</p>
      <h2 className="font-display text-2xl mt-10">2. Propriedade intelectual</h2>
      <p>Todo o conteúdo (textos, imagens, marcas, logotipos, layout, código) é de titularidade do PS Business Group ou utilizado com autorização. É vedada reprodução, total ou parcial, sem prévia autorização por escrito.</p>
      <h2 className="font-display text-2xl mt-10">3. Uso permitido</h2>
      <p>O usuário compromete-se a utilizar o site de forma lícita, sem prejudicar terceiros, sem tentar acessar áreas restritas ou comprometer a segurança e disponibilidade da plataforma.</p>
      <h2 className="font-display text-2xl mt-10">4. Limitação de responsabilidade</h2>
      <p>O PS Business Group envida esforços para manter as informações atualizadas, mas não se responsabiliza por eventuais imprecisões, interrupções ou danos indiretos decorrentes do uso do site.</p>
      <h2 className="font-display text-2xl mt-10">5. Links externos</h2>
      <p>O site pode conter links para sites de terceiros, cuja política e conteúdo não são de nossa responsabilidade.</p>
      <h2 className="font-display text-2xl mt-10">6. Alterações</h2>
      <p>Estes termos podem ser atualizados a qualquer momento. Recomendamos revisão periódica.</p>
      <h2 className="font-display text-2xl mt-10">7. Foro</h2>
      <p>Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias decorrentes destes Termos.</p>
    </LegalLayout>
  );
}

function Es() {
  return (
    <LegalLayout tag="Términos" title="Términos de Uso" updated="11/06/2026">
      <p>El acceso y uso del sitio de <strong>PS Business Group</strong> implica la aceptación íntegra de estos Términos.</p>
      <h2 className="font-display text-2xl mt-10">1. Objeto</h2>
      <p>Este sitio es institucional e informativo. No constituye oferta vinculante de productos o servicios.</p>
      <h2 className="font-display text-2xl mt-10">2. Propiedad intelectual</h2>
      <p>Todo el contenido es de titularidad de PS Business Group o utilizado bajo autorización. Queda prohibida la reproducción total o parcial sin autorización previa por escrito.</p>
      <h2 className="font-display text-2xl mt-10">3. Uso permitido</h2>
      <p>El usuario se compromete a un uso lícito, sin perjudicar a terceros ni comprometer la seguridad de la plataforma.</p>
      <h2 className="font-display text-2xl mt-10">4. Limitación de responsabilidad</h2>
      <p>PS Business Group no se responsabiliza por imprecisiones, interrupciones o daños indirectos derivados del uso del sitio.</p>
      <h2 className="font-display text-2xl mt-10">5. Enlaces externos</h2>
      <p>El sitio puede contener enlaces a sitios de terceros, cuyo contenido no es de nuestra responsabilidad.</p>
      <h2 className="font-display text-2xl mt-10">6. Modificaciones</h2>
      <p>Estos términos pueden actualizarse en cualquier momento.</p>
      <h2 className="font-display text-2xl mt-10">7. Jurisdicción</h2>
      <p>Para cualquier controversia, se aplicará la legislación brasileña / paraguaya según el caso y el fuero correspondiente.</p>
    </LegalLayout>
  );
}
