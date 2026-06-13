import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { useT } from "@/i18n";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — PS Business Group" },
      {
        name: "description",
        content:
          "Termos e Condições de Uso do site institucional do PS Business Group — direitos, deveres, propriedade intelectual e foro aplicável.",
      },
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
    <LegalLayout tag="Termos" title="Termos de Uso" updated="13/06/2026">
      <p>
        O acesso, navegação e utilização do site oficial do <strong>PS Business Group</strong> ("PS Business",
        "Site") implicam a aceitação integral, expressa e inequívoca destes Termos de Uso ("Termos"), bem como da
        Política de Privacidade. Caso não concorde com qualquer disposição, por favor não utilize o Site.
      </p>

      <h2 className="font-display text-2xl mt-10">1. Objeto</h2>
      <p>
        O Site possui caráter exclusivamente institucional e informativo, apresentando o grupo empresarial PS
        Business, suas empresas, áreas de atuação, valores e canais de relacionamento. Não constitui oferta pública,
        proposta vinculante, recomendação de investimento, intermediação financeira nem prestação direta de serviços
        regulados.
      </p>

      <h2 className="font-display text-2xl mt-10">2. Capacidade e cadastro</h2>
      <p>
        O Site é destinado a maiores de 18 anos ou plenamente capazes nos termos da legislação aplicável. Ao
        preencher formulários de contato, o usuário declara que as informações fornecidas são verdadeiras, atuais e
        completas, e que possui poderes para representar eventual pessoa jurídica indicada.
      </p>

      <h2 className="font-display text-2xl mt-10">3. Propriedade intelectual</h2>
      <p>
        Todos os conteúdos disponibilizados no Site — incluindo, sem limitação, textos, imagens, fotografias,
        vídeos, áudios, ilustrações, ícones, marcas, logotipos, nomes empresariais, identidade visual, código-fonte,
        layout e arquitetura da informação — são protegidos pela Lei nº 9.610/1998 (Direitos Autorais), Lei nº
        9.279/1996 (Propriedade Industrial) e demais normas aplicáveis, sendo de titularidade do PS Business Group
        ou utilizados mediante autorização. É vedada qualquer reprodução, cópia, distribuição, comercialização,
        modificação ou exploração, total ou parcial, sem autorização prévia e por escrito.
      </p>

      <h2 className="font-display text-2xl mt-10">4. Uso permitido e proibido</h2>
      <p>O usuário compromete-se a utilizar o Site de boa-fé e em conformidade com a legislação vigente. É vedado:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>praticar atos ilícitos, abusivos ou que violem direitos de terceiros;</li>
        <li>tentar acessar áreas restritas, contas, servidores ou bancos de dados sem autorização;</li>
        <li>realizar engenharia reversa, scraping massivo, mineração não autorizada ou descompilação;</li>
        <li>inserir vírus, malware, scripts maliciosos ou qualquer código que comprometa a integridade do Site;</li>
        <li>utilizar o Site para fins de spam, phishing, fraude ou concorrência desleal;</li>
        <li>reproduzir marcas, layout ou conteúdo do Site sem autorização.</li>
      </ul>

      <h2 className="font-display text-2xl mt-10">5. Disponibilidade e alterações</h2>
      <p>
        O PS Business envida seus melhores esforços para manter o Site disponível 24/7, mas não garante operação
        ininterrupta ou isenta de erros. Reservamo-nos o direito de, a qualquer tempo e sem aviso prévio: (i) alterar
        layout, funcionalidades e conteúdos; (ii) suspender ou descontinuar o Site, total ou parcialmente; (iii)
        realizar manutenções programadas ou emergenciais.
      </p>

      <h2 className="font-display text-2xl mt-10">6. Limitação de responsabilidade</h2>
      <p>
        As informações são prestadas no estado em que se encontram, com finalidade meramente informativa. O PS
        Business não se responsabiliza por: (i) decisões tomadas com base no conteúdo do Site; (ii) eventuais
        imprecisões, desatualizações ou omissões; (iii) indisponibilidades temporárias decorrentes de caso fortuito,
        força maior, ataques cibernéticos ou falhas de infraestrutura de terceiros; (iv) danos indiretos, lucros
        cessantes ou perda de oportunidade. Nada nesta cláusula limita responsabilidades que, por lei imperativa,
        não possam ser limitadas.
      </p>

      <h2 className="font-display text-2xl mt-10">7. Links externos e conteúdo de terceiros</h2>
      <p>
        O Site pode conter links para sites, perfis em redes sociais ou serviços de terceiros. Tais redirecionamentos
        são oferecidos apenas para conveniência do usuário; o PS Business não controla nem se responsabiliza pelo
        conteúdo, políticas de privacidade ou práticas de tais terceiros.
      </p>

      <h2 className="font-display text-2xl mt-10">8. Privacidade e proteção de dados</h2>
      <p>
        O tratamento de dados pessoais coletados via Site é regido pela{" "}
        <a href="/privacidade" className="text-gold-soft underline">Política de Privacidade</a>, parte integrante destes Termos.
      </p>

      <h2 className="font-display text-2xl mt-10">9. Comunicação e canais oficiais</h2>
      <p>
        Os únicos canais oficiais de comunicação são os divulgados neste Site. O PS Business não se responsabiliza
        por perfis, páginas, e-mails ou aplicativos que não estejam expressamente listados aqui.
      </p>

      <h2 className="font-display text-2xl mt-10">10. Alterações destes Termos</h2>
      <p>
        Estes Termos podem ser atualizados a qualquer momento. A versão vigente estará sempre publicada nesta página
        com a respectiva data de atualização. O uso continuado do Site após a publicação de nova versão constitui
        aceitação das alterações.
      </p>

      <h2 className="font-display text-2xl mt-10">11. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de
        São Paulo/SP como o competente para dirimir quaisquer controvérsias deles decorrentes, com renúncia expressa
        a qualquer outro, por mais privilegiado que seja. Para usuários localizados no Paraguai, aplica-se,
        adicionalmente, a legislação paraguaia naquilo que for cogente.
      </p>

      <h2 className="font-display text-2xl mt-10">12. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser enviadas para{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
        .
      </p>
    </LegalLayout>
  );
}

function Es() {
  return (
    <LegalLayout tag="Términos" title="Términos de Uso" updated="13/06/2026">
      <p>
        El acceso, navegación y uso del sitio oficial de <strong>PS Business Group</strong> ("PS Business",
        "Sitio") implica la aceptación íntegra, expresa e inequívoca de estos Términos de Uso ("Términos") y de la
        Política de Privacidad. Si no está de acuerdo con alguna disposición, por favor no utilice el Sitio.
      </p>

      <h2 className="font-display text-2xl mt-10">1. Objeto</h2>
      <p>
        El Sitio tiene carácter exclusivamente institucional e informativo. No constituye oferta pública, propuesta
        vinculante, recomendación de inversión ni prestación directa de servicios regulados.
      </p>

      <h2 className="font-display text-2xl mt-10">2. Capacidad</h2>
      <p>
        El Sitio está dirigido a personas mayores de 18 años o plenamente capaces conforme a la legislación
        aplicable. Al completar formularios, el usuario declara que la información provista es verdadera, actual y
        completa.
      </p>

      <h2 className="font-display text-2xl mt-10">3. Propiedad intelectual</h2>
      <p>
        Todos los contenidos del Sitio (textos, imágenes, marcas, logotipos, layout, código) son de titularidad de
        PS Business Group o utilizados bajo autorización, y están protegidos por la legislación paraguaya y los
        tratados internacionales aplicables. Queda prohibida toda reproducción, copia, distribución, modificación o
        explotación, total o parcial, sin autorización previa por escrito.
      </p>

      <h2 className="font-display text-2xl mt-10">4. Uso permitido y prohibido</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Está prohibido realizar actos ilícitos o que vulneren derechos de terceros;</li>
        <li>Intentar acceder a áreas restringidas, servidores o bases de datos sin autorización;</li>
        <li>Realizar ingeniería inversa, scraping masivo o descompilación;</li>
        <li>Introducir virus, malware o cualquier código malicioso;</li>
        <li>Utilizar el Sitio para spam, phishing, fraude o competencia desleal.</li>
      </ul>

      <h2 className="font-display text-2xl mt-10">5. Disponibilidad y modificaciones</h2>
      <p>
        Realizamos esfuerzos razonables para mantener el Sitio disponible 24/7, sin garantizar operación
        ininterrumpida o libre de errores. Podemos modificar, suspender o discontinuar el Sitio, total o
        parcialmente, sin previo aviso.
      </p>

      <h2 className="font-display text-2xl mt-10">6. Limitación de responsabilidad</h2>
      <p>
        La información se presta tal cual, con finalidad meramente informativa. PS Business no se responsabiliza
        por decisiones tomadas con base en el contenido del Sitio, imprecisiones, indisponibilidades temporales o
        daños indirectos.
      </p>

      <h2 className="font-display text-2xl mt-10">7. Enlaces externos</h2>
      <p>
        El Sitio puede contener enlaces a sitios de terceros, cuyo contenido y políticas no son de nuestra
        responsabilidad.
      </p>

      <h2 className="font-display text-2xl mt-10">8. Privacidad</h2>
      <p>
        El tratamiento de datos personales se rige por la{" "}
        <a href="/privacidade" className="text-gold-soft underline">Política de Privacidad</a>, parte integrante de
        estos Términos.
      </p>

      <h2 className="font-display text-2xl mt-10">9. Modificaciones</h2>
      <p>
        Estos Términos pueden actualizarse en cualquier momento. La versión vigente estará siempre publicada en esta
        página con su fecha de actualización.
      </p>

      <h2 className="font-display text-2xl mt-10">10. Ley aplicable y jurisdicción</h2>
      <p>
        Para usuarios en Paraguay aplicará la legislación paraguaya y la jurisdicción de los tribunales ordinarios
        de Asunción. Para usuarios en Brasil, aplicará la legislación brasileña y el foro de São Paulo/SP.
      </p>

      <h2 className="font-display text-2xl mt-10">11. Contacto</h2>
      <p>
        Consultas:{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
        .
      </p>
    </LegalLayout>
  );
}
