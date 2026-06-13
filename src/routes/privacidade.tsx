import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { useT } from "@/i18n";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — PS Business Group" },
      {
        name: "description",
        content:
          "Política de Privacidade do PS Business Group em conformidade com a LGPD (Lei 13.709/2018), Marco Civil da Internet e Ley N° 6.534/20 do Paraguai.",
      },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://psbusiness.lovable.app/privacidade" }],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  const { lang } = useT();
  if (lang === "es") return <Es />;
  return <Pt />;
}

function Pt() {
  return (
    <LegalLayout tag="Privacidade" title="Política de Privacidade" updated="13/06/2026">
      <p>
        O <strong>PS Business Group</strong> ("PS Business", "nós" ou "Controlador") tem o compromisso permanente
        de respeitar a privacidade e proteger os dados pessoais de seus visitantes, clientes, parceiros, fornecedores
        e candidatos ("Titulares" ou "você"). Esta Política descreve, de forma transparente, como coletamos, utilizamos,
        compartilhamos, armazenamos e protegemos os dados pessoais tratados em nossos canais digitais, em conformidade
        com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — "LGPD"), o Marco Civil da Internet
        (Lei nº 12.965/2014), o Decreto nº 8.771/2016 e, quando aplicável, a Ley N° 6.534/20 da República do Paraguai.
      </p>

      <h2 className="font-display text-2xl mt-10">1. Identificação do Controlador</h2>
      <p>
        <strong>Razão social:</strong> PS Business Group
        <br />
        <strong>Atuação:</strong> Brasil e Paraguai
        <br />
        <strong>E-mail institucional:</strong>{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
      </p>

      <h2 className="font-display text-2xl mt-10">2. Definições</h2>
      <p>
        <strong>Dado pessoal:</strong> informação relacionada a pessoa natural identificada ou identificável.
        <br />
        <strong>Dado pessoal sensível:</strong> dado sobre origem racial, convicção religiosa, opinião política,
        filiação sindical, saúde, vida sexual, dado genético ou biométrico.
        <br />
        <strong>Tratamento:</strong> toda operação realizada com dados pessoais (coleta, uso, armazenamento,
        compartilhamento, eliminação etc.).
        <br />
        <strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais.
        <br />
        <strong>Controlador:</strong> a quem competem as decisões sobre o tratamento — neste site, o PS Business Group.
        <br />
        <strong>Operador:</strong> quem realiza o tratamento em nome do Controlador.
        <br />
        <strong>Encarregado (DPO):</strong> pessoa indicada para atuar como canal de comunicação entre Controlador,
        Titulares e Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2 className="font-display text-2xl mt-10">3. Dados que coletamos</h2>
      <p>
        Coletamos apenas os dados estritamente necessários às finalidades informadas:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Dados de cadastro/contato:</strong> nome, e-mail, telefone, empresa, cargo e mensagem enviada via
          formulários.
        </li>
        <li>
          <strong>Dados de navegação:</strong> endereço IP, identificadores de dispositivo, tipo de navegador,
          sistema operacional, idioma, páginas visitadas, tempo de permanência, origem do tráfego e cookies.
        </li>
        <li>
          <strong>Dados profissionais:</strong> currículo e informações enviadas espontaneamente em processos de
          parceria, fornecimento ou recrutamento.
        </li>
        <li>
          <strong>Comunicações:</strong> conteúdo das interações realizadas conosco por e-mail, WhatsApp, formulários
          ou redes sociais.
        </li>
      </ul>
      <p>Não coletamos intencionalmente dados pessoais sensíveis ou de menores de 18 anos.</p>

      <h2 className="font-display text-2xl mt-10">4. Finalidades e bases legais (art. 7º e 11 LGPD)</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Atender contato, dúvidas, parcerias e oportunidades</strong> — base: execução de procedimentos
          preliminares a contrato e legítimo interesse.
        </li>
        <li>
          <strong>Comunicação institucional e relacionamento</strong> — base: consentimento e/ou legítimo interesse.
        </li>
        <li>
          <strong>Cumprimento de obrigações legais, regulatórias e fiscais</strong> — base: obrigação legal.
        </li>
        <li>
          <strong>Análise estatística, métricas e melhoria do site</strong> — base: legítimo interesse, com
          minimização e pseudonimização sempre que possível.
        </li>
        <li>
          <strong>Prevenção a fraudes e garantia de segurança</strong> — base: legítimo interesse e cumprimento de
          obrigação legal.
        </li>
        <li>
          <strong>Defesa em processos judiciais, administrativos ou arbitrais</strong> — base: exercício regular de
          direitos.
        </li>
      </ul>

      <h2 className="font-display text-2xl mt-10">5. Compartilhamento de dados</h2>
      <p>
        Não vendemos nem alugamos dados pessoais. Poderemos compartilhá-los, sempre sob obrigação contratual de
        confidencialidade e segurança, com:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Empresas integrantes do grupo PS Business, para finalidades compatíveis com esta Política;</li>
        <li>Operadores de tecnologia (hospedagem, e-mail, analytics, CRM, segurança);</li>
        <li>Autoridades competentes, mediante requisição legal ou ordem judicial;</li>
        <li>Assessores jurídicos, contábeis e auditores, no exercício regular de suas atividades.</li>
      </ul>

      <h2 className="font-display text-2xl mt-10">6. Transferência internacional</h2>
      <p>
        Alguns operadores podem estar localizados fora do Brasil. Nesses casos, garantimos que a transferência ocorre
        apenas para países com nível adequado de proteção ou mediante cláusulas contratuais específicas, nos termos
        do art. 33 da LGPD.
      </p>

      <h2 className="font-display text-2xl mt-10">7. Armazenamento e retenção</h2>
      <p>
        Os dados são mantidos apenas pelo tempo necessário ao cumprimento das finalidades, observados os prazos
        legais de guarda — em especial: 6 meses para registros de acesso (art. 15 do Marco Civil), 5 anos para
        relações de consumo (art. 27 do CDC) e demais prazos fiscais e prescricionais aplicáveis. Após esse período,
        os dados são eliminados ou anonimizados de forma segura.
      </p>

      <h2 className="font-display text-2xl mt-10">8. Segurança da informação</h2>
      <p>
        Adotamos medidas técnicas e organizacionais compatíveis com as melhores práticas de mercado, incluindo:
        conexões cifradas via HTTPS/TLS, controles de acesso por privilégio mínimo, autenticação multifator nas
        ferramentas administrativas, registro de logs, backups, monitoramento contínuo, avaliação periódica de
        fornecedores e treinamento da equipe. Em caso de incidente de segurança que possa acarretar risco ou dano
        relevante, comunicaremos os Titulares afetados e a ANPD, conforme art. 48 da LGPD.
      </p>

      <h2 className="font-display text-2xl mt-10">9. Direitos do Titular (art. 18 LGPD)</h2>
      <p>Você pode, a qualquer momento, exercer os seguintes direitos:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>confirmação da existência de tratamento;</li>
        <li>acesso aos dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
        <li>portabilidade dos dados;</li>
        <li>eliminação dos dados tratados com consentimento;</li>
        <li>informação sobre entidades com as quais houve compartilhamento;</li>
        <li>informação sobre a possibilidade de não fornecer consentimento e respectivas consequências;</li>
        <li>revogação do consentimento;</li>
        <li>oposição a tratamento realizado com fundamento em hipóteses dispensáveis de consentimento;</li>
        <li>revisão de decisões tomadas unicamente com base em tratamento automatizado.</li>
      </ul>
      <p>
        Para exercer seus direitos, envie sua solicitação para{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
        . Responderemos no prazo legal de até 15 dias.
      </p>

      <h2 className="font-display text-2xl mt-10">10. Cookies e tecnologias similares</h2>
      <p>
        Utilizamos cookies necessários (funcionamento e segurança), de desempenho (estatísticas anônimas), de
        funcionalidade (preferências como idioma) e, eventualmente, de marketing. No primeiro acesso, exibimos um
        banner para que você aceite, recuse ou gerencie suas preferências. Você também pode configurar seu navegador
        para bloquear cookies, ciente de que algumas funcionalidades podem ser afetadas.
      </p>

      <h2 className="font-display text-2xl mt-10">11. Encarregado pelo Tratamento de Dados (DPO)</h2>
      <p>
        Em cumprimento ao art. 41 da LGPD, o PS Business Group disponibiliza o canal{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>{" "}
        para receber comunicações de Titulares e da ANPD.
      </p>

      <h2 className="font-display text-2xl mt-10">12. Autoridade Nacional</h2>
      <p>
        Caso entenda que seus direitos não foram adequadamente atendidos, você pode peticionar perante a Autoridade
        Nacional de Proteção de Dados (ANPD) — <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-gold-soft underline">www.gov.br/anpd</a>.
      </p>

      <h2 className="font-display text-2xl mt-10">13. Atualizações desta Política</h2>
      <p>
        Esta Política pode ser revisada periodicamente. A versão vigente estará sempre disponível nesta página, com
        indicação da data da última atualização.
      </p>
    </LegalLayout>
  );
}

function Es() {
  return (
    <LegalLayout tag="Privacidad" title="Política de Privacidad" updated="13/06/2026">
      <p>
        <strong>PS Business Group</strong> ("PS Business", "nosotros" o "Responsable") está comprometido con la
        protección de los datos personales de visitantes, clientes, socios, proveedores y postulantes ("Titulares"
        o "usted"). Esta Política describe cómo recolectamos, utilizamos, compartimos, almacenamos y protegemos los
        datos personales tratados en nuestros canales digitales, conforme a la Ley N° 6.534/20 de Paraguay
        (Protección de Datos Personales Crediticios) y demás normas paraguayas aplicables, así como, en lo
        pertinente, a la LGPD brasileña (Ley N° 13.709/2018).
      </p>

      <h2 className="font-display text-2xl mt-10">1. Identificación del Responsable</h2>
      <p>
        <strong>Denominación:</strong> PS Business Group
        <br />
        <strong>Actuación:</strong> Brasil y Paraguay
        <br />
        <strong>Contacto:</strong>{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
      </p>

      <h2 className="font-display text-2xl mt-10">2. Datos que recopilamos</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Datos de contacto:</strong> nombre, correo, teléfono, empresa, cargo y mensaje.</li>
        <li><strong>Datos de navegación:</strong> IP, dispositivo, navegador, páginas visitadas y cookies.</li>
        <li><strong>Datos profesionales:</strong> CV e información enviada en procesos de alianza o reclutamiento.</li>
        <li><strong>Comunicaciones:</strong> contenido de interacciones por e-mail, WhatsApp o redes sociales.</li>
      </ul>

      <h2 className="font-display text-2xl mt-10">3. Finalidades y bases legales</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Atender solicitudes, alianzas y oportunidades — ejecución de medidas precontractuales / interés legítimo.</li>
        <li>Comunicación institucional — consentimiento e interés legítimo.</li>
        <li>Cumplimiento de obligaciones legales y fiscales — obligación legal.</li>
        <li>Métricas y mejora del sitio — interés legítimo.</li>
        <li>Prevención de fraudes y seguridad — interés legítimo.</li>
        <li>Defensa en procesos judiciales o administrativos — ejercicio regular de derechos.</li>
      </ul>

      <h2 className="font-display text-2xl mt-10">4. Compartición</h2>
      <p>
        No vendemos ni alquilamos datos. Podemos compartirlos con empresas del grupo, proveedores de tecnología
        (hospedaje, analítica, CRM), autoridades competentes y asesores profesionales, siempre bajo confidencialidad.
      </p>

      <h2 className="font-display text-2xl mt-10">5. Transferencia internacional</h2>
      <p>
        Algunos proveedores pueden estar fuera de Paraguay/Brasil. La transferencia se realiza solo a países con
        nivel adecuado de protección o mediante garantías contractuales específicas.
      </p>

      <h2 className="font-display text-2xl mt-10">6. Conservación</h2>
      <p>
        Conservamos los datos sólo durante el tiempo necesario para las finalidades informadas y los plazos legales
        aplicables. Luego, son eliminados o anonimizados de forma segura.
      </p>

      <h2 className="font-display text-2xl mt-10">7. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas: HTTPS/TLS, control de acceso, autenticación multifactor, logs,
        backups, monitoreo y capacitación. En caso de incidente con riesgo relevante, notificaremos a los Titulares
        afectados y a la autoridad competente.
      </p>

      <h2 className="font-display text-2xl mt-10">8. Derechos del Titular</h2>
      <p>
        Usted puede solicitar acceso, rectificación, actualización, supresión o portabilidad de sus datos, así como
        revocar el consentimiento y oponerse al tratamiento, escribiendo a{" "}
        <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">
          contato@psbusinessgroup.com.br
        </a>
        . Responderemos en un plazo razonable conforme a la ley aplicable.
      </p>

      <h2 className="font-display text-2xl mt-10">9. Cookies</h2>
      <p>
        Utilizamos cookies necesarias, de desempeño, de funcionalidad y, eventualmente, de marketing. En el primer
        acceso mostramos un banner para que pueda aceptar, rechazar o gestionar sus preferencias.
      </p>

      <h2 className="font-display text-2xl mt-10">10. Cambios</h2>
      <p>
        Esta Política puede actualizarse periódicamente. La versión vigente siempre estará disponible en esta página,
        con indicación de la fecha de última actualización.
      </p>
    </LegalLayout>
  );
}
