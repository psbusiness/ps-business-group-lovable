import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { useT } from "@/i18n";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso Legal — PS Business Group" },
      {
        name: "description",
        content:
          "Aviso Legal do PS Business Group — identificação institucional, finalidade do site, marcas, propriedade intelectual e conformidade regulatória.",
      },
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
    <LegalLayout tag="Aviso Legal" title="Aviso Legal" updated="13/06/2026">
      <h2 className="font-display text-2xl mt-2">1. Identificação</h2>
      <p>
        <strong>Denominação:</strong> PS Business Group
        <br />
        <strong>Natureza:</strong> grupo empresarial brasileiro com atuação binacional Brasil — Paraguai.
        <br />
        <strong>Atuação:</strong> Brasil e Paraguai.
        <br />
        <strong>Contato institucional:</strong>{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
      </p>
      <p>
        As empresas integrantes do grupo possuem personalidade jurídica própria, com inscrição perante os órgãos
        competentes em suas respectivas jurisdições e áreas de atuação (logística, agronegócio, educação, esporte,
        capital, real estate, viagens, jurídico, entre outras).
      </p>

      <h2 className="font-display text-2xl mt-10">2. Finalidade do site</h2>
      <p>
        Este site tem caráter exclusivamente <strong>informativo e institucional</strong>. Os conteúdos publicados
        descrevem, em linhas gerais, as empresas do grupo, mercados de atuação, iniciativas, marcas e canais de
        contato. Nada aqui veiculado constitui (i) oferta pública de valores mobiliários, (ii) recomendação de
        investimento, (iii) consultoria financeira, jurídica, contábil ou tributária, (iv) intermediação financeira,
        (v) prestação direta de serviços regulados, nem (vi) compromisso contratual vinculante.
      </p>
      <p>
        Decisões de negócio, contratação ou investimento devem ser precedidas de análise específica e de
        aconselhamento profissional independente.
      </p>

      <h2 className="font-display text-2xl mt-10">3. Propriedade intelectual e marcas</h2>
      <p>
        A marca "PS Business Group", o logotipo, identidade visual, layout, tipografia, organização do conteúdo,
        código-fonte e demais sinais distintivos são protegidos pela Lei nº 9.279/1996 (Propriedade Industrial),
        Lei nº 9.610/1998 (Direitos Autorais) e tratados internacionais. As marcas das empresas associadas pertencem
        aos seus respectivos titulares e são utilizadas neste site para fins meramente informativos. Reprodução,
        adaptação ou comercialização sem autorização prévia e por escrito caracteriza violação punível na esfera
        cível e criminal.
      </p>

      <h2 className="font-display text-2xl mt-10">4. Conformidade regulatória</h2>
      <p>Atuamos em conformidade com a legislação brasileira e paraguaia aplicável, incluindo:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Lei nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD);</li>
        <li>Lei nº 12.965/2014 — Marco Civil da Internet;</li>
        <li>Decreto nº 8.771/2016 — regulamenta o Marco Civil;</li>
        <li>Lei nº 8.078/1990 — Código de Defesa do Consumidor;</li>
        <li>Lei nº 12.846/2013 — Lei Anticorrupção brasileira;</li>
        <li>Lei nº 9.613/1998 — Prevenção à lavagem de dinheiro;</li>
        <li>Ley N° 6.534/20 da República do Paraguai — Proteção de Dados Pessoais;</li>
        <li>Ley N° 1.015/97 do Paraguai — Prevenção e Repressão de Lavagem de Dinheiro;</li>
        <li>Normas regulatórias setoriais aplicáveis a cada empresa do grupo.</li>
      </ul>

      <h2 className="font-display text-2xl mt-10">5. Compliance e canal de integridade</h2>
      <p>
        O PS Business adota políticas de governança, prevenção a fraudes, compliance anticorrupção e código de
        conduta. Relatos de eventuais condutas em desacordo podem ser encaminhados a{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
        , com garantia de sigilo e não retaliação.
      </p>

      <h2 className="font-display text-2xl mt-10">6. Privacidade, cookies e segurança</h2>
      <p>
        O tratamento de dados pessoais é detalhado na{" "}
        <a href="/privacidade" className="text-gold-soft underline">Política de Privacidade</a> e os direitos e deveres
        de uso no <a href="/termos" className="text-gold-soft underline">Termos de Uso</a>. O site opera sob conexão
        criptografada HTTPS/TLS (cadeado de segurança visível no navegador).
      </p>

      <h2 className="font-display text-2xl mt-10">7. Limitação de responsabilidade</h2>
      <p>
        O PS Business empenha-se em manter as informações precisas e atualizadas, mas não garante exatidão,
        integralidade ou atualidade permanente, nem se responsabiliza por interpretações, decisões ou perdas
        decorrentes do uso do conteúdo aqui veiculado.
      </p>

      <h2 className="font-display text-2xl mt-10">8. Foro</h2>
      <p>
        Eventuais controvérsias serão dirimidas no foro da Comarca de São Paulo/SP, salvo regra de foro
        consumerista ou regra cogente diversa.
      </p>

      <h2 className="font-display text-2xl mt-10">9. Direitos autorais</h2>
      <p>© {new Date().getFullYear()} PS Business Group. Todos os direitos reservados.</p>
    </LegalLayout>
  );
}

function Es() {
  return (
    <LegalLayout tag="Aviso Legal" title="Aviso Legal" updated="13/06/2026">
      <h2 className="font-display text-2xl mt-2">1. Identificación</h2>
      <p>
        <strong>Denominación:</strong> PS Business Group
        <br />
        <strong>Naturaleza:</strong> grupo empresarial con actuación binacional Brasil — Paraguay.
        <br />
        <strong>Contacto:</strong>{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
      </p>
      <p>
        Las empresas integrantes del grupo poseen personalidad jurídica propia y están inscriptas ante los órganos
        competentes en sus respectivas jurisdicciones y rubros (logística, agronegocios, educación, deporte,
        capital, real estate, turismo, jurídico, entre otros).
      </p>

      <h2 className="font-display text-2xl mt-10">2. Finalidad del sitio</h2>
      <p>
        Este sitio es exclusivamente <strong>informativo e institucional</strong>. Nada de lo aquí publicado
        constituye oferta pública, recomendación de inversión, asesoría financiera, jurídica o tributaria, ni
        compromiso contractual vinculante. Toda decisión debe ser precedida de análisis específico y asesoramiento
        profesional independiente.
      </p>

      <h2 className="font-display text-2xl mt-10">3. Propiedad intelectual</h2>
      <p>
        La marca "PS Business Group", el logotipo, identidad visual, layout, código y demás signos distintivos están
        protegidos por la legislación paraguaya, brasileña y tratados internacionales aplicables. Las marcas de las
        empresas asociadas pertenecen a sus respectivos titulares y se utilizan con fines meramente informativos.
        Queda prohibida la reproducción o explotación sin autorización previa por escrito.
      </p>

      <h2 className="font-display text-2xl mt-10">4. Cumplimiento normativo</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ley N° 6.534/20 — Protección de Datos Personales (Paraguay);</li>
        <li>Ley N° 1.015/97 — Prevención y Represión de Lavado de Dinero (Paraguay);</li>
        <li>Ley N° 4.868/13 — Comercio Electrónico (Paraguay);</li>
        <li>Lei N° 13.709/2018 — LGPD (Brasil);</li>
        <li>Lei N° 12.965/2014 — Marco Civil da Internet (Brasil);</li>
        <li>Lei N° 12.846/2013 — Anticorrupción (Brasil);</li>
        <li>Normativa sectorial aplicable a cada empresa del grupo.</li>
      </ul>

      <h2 className="font-display text-2xl mt-10">5. Compliance</h2>
      <p>
        Adoptamos políticas de gobernanza, prevención de fraudes y código de conducta. Relatos pueden enviarse a{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>{" "}
        con garantía de sigilo y no represalia.
      </p>

      <h2 className="font-display text-2xl mt-10">6. Privacidad y seguridad</h2>
      <p>
        El tratamiento de datos personales se detalla en la{" "}
        <a href="/privacidade" className="text-gold-soft underline">Política de Privacidad</a> y los términos de uso en{" "}
        <a href="/termos" className="text-gold-soft underline">Términos de Uso</a>. El sitio opera bajo conexión
        cifrada HTTPS/TLS.
      </p>

      <h2 className="font-display text-2xl mt-10">7. Limitación de responsabilidad</h2>
      <p>
        PS Business procura mantener la información precisa y actualizada, pero no garantiza exactitud,
        integralidad o actualidad permanente, ni se responsabiliza por decisiones tomadas con base en el contenido
        del sitio.
      </p>

      <h2 className="font-display text-2xl mt-10">8. Jurisdicción</h2>
      <p>
        Para usuarios en Paraguay, jurisdicción de los tribunales ordinarios de Asunción. Para usuarios en Brasil,
        foro de São Paulo/SP, salvo regla cogente diversa.
      </p>

      <h2 className="font-display text-2xl mt-10">9. Derechos de autor</h2>
      <p>© {new Date().getFullYear()} PS Business Group. Todos los derechos reservados.</p>
    </LegalLayout>
  );
}
