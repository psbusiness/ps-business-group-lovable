import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { useT } from "@/i18n";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — PS Business Group" },
      { name: "description", content: "Política de Privacidade do PS Business Group em conformidade com a LGPD (Lei 13.709/2018) e leis de proteção de dados aplicáveis." },
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
    <LegalLayout tag="Privacidade" title="Política de Privacidade" updated="11/06/2026">
      <p>
        O <strong>PS Business Group</strong> ("nós") respeita a sua privacidade e está comprometido com a proteção
        dos dados pessoais tratados em nossos canais digitais, em conformidade com a Lei Geral de Proteção de Dados
        (Lei nº 13.709/2018 — LGPD).
      </p>
      <h2 className="font-display text-2xl mt-10">1. Dados que coletamos</h2>
      <p>Coletamos apenas as informações estritamente necessárias para responder ao seu contato e melhorar a experiência de navegação, tais como nome, e-mail, empresa, mensagem e dados de navegação (cookies, IP, dispositivo).</p>
      <h2 className="font-display text-2xl mt-10">2. Finalidades</h2>
      <p>Utilizamos os dados para: (i) atender solicitações e parcerias; (ii) executar atividades de comunicação institucional; (iii) cumprir obrigações legais e regulatórias; (iv) análise estatística e melhoria contínua do site.</p>
      <h2 className="font-display text-2xl mt-10">3. Compartilhamento</h2>
      <p>Não comercializamos seus dados. Podemos compartilhá-los com prestadores de serviço (hospedagem, analytics), autoridades competentes ou empresas do grupo, sempre sob obrigação de confidencialidade.</p>
      <h2 className="font-display text-2xl mt-10">4. Seus direitos (LGPD)</h2>
      <p>Você pode, a qualquer momento, solicitar confirmação, acesso, correção, anonimização, portabilidade ou eliminação dos seus dados, bem como revogar consentimento, através do e-mail <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">contato@psbusinessgroup.com.br</a>.</p>
      <h2 className="font-display text-2xl mt-10">5. Segurança</h2>
      <p>Adotamos medidas técnicas e organizacionais para proteger os dados, incluindo conexões cifradas via HTTPS/SSL, controles de acesso e auditoria periódica.</p>
      <h2 className="font-display text-2xl mt-10">6. Retenção</h2>
      <p>Os dados são mantidos apenas pelo tempo necessário ao cumprimento das finalidades ou conforme exigido por lei.</p>
      <h2 className="font-display text-2xl mt-10">7. Cookies</h2>
      <p>Utilizamos cookies para funcionamento essencial, análise de tráfego e personalização. Você pode aceitar, recusar ou gerenciar preferências através do banner exibido no primeiro acesso.</p>
      <h2 className="font-display text-2xl mt-10">8. Encarregado (DPO)</h2>
      <p>Em caso de dúvidas, entre em contato com nosso Encarregado de Proteção de Dados pelo e-mail acima.</p>
    </LegalLayout>
  );
}

function Es() {
  return (
    <LegalLayout tag="Privacidad" title="Política de Privacidad" updated="11/06/2026">
      <p>
        <strong>PS Business Group</strong> respeta tu privacidad y está comprometido con la protección de los datos
        personales tratados en nuestros canales digitales, conforme a la Ley N° 6.534/20 de Paraguay y a la
        LGPD brasileña (Ley N° 13.709/2018), según aplique.
      </p>
      <h2 className="font-display text-2xl mt-10">1. Datos que recopilamos</h2>
      <p>Recopilamos solo la información estrictamente necesaria: nombre, correo, empresa, mensaje y datos de navegación (cookies, IP, dispositivo).</p>
      <h2 className="font-display text-2xl mt-10">2. Finalidades</h2>
      <p>Atender solicitudes y alianzas, comunicación institucional, cumplir obligaciones legales, análisis estadístico y mejora del sitio.</p>
      <h2 className="font-display text-2xl mt-10">3. Compartición</h2>
      <p>No comercializamos tus datos. Podemos compartirlos con proveedores de servicios, autoridades competentes o empresas del grupo, siempre bajo confidencialidad.</p>
      <h2 className="font-display text-2xl mt-10">4. Tus derechos</h2>
      <p>Podés solicitar acceso, rectificación, eliminación o portabilidad de tus datos, así como revocar el consentimiento, escribiendo a <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">contato@psbusinessgroup.com.br</a>.</p>
      <h2 className="font-display text-2xl mt-10">5. Seguridad</h2>
      <p>Adoptamos medidas técnicas y organizativas, incluyendo conexiones cifradas HTTPS/SSL y controles de acceso.</p>
      <h2 className="font-display text-2xl mt-10">6. Retención</h2>
      <p>Conservamos los datos solo por el tiempo necesario al cumplimiento de las finalidades o según lo exigido por ley.</p>
      <h2 className="font-display text-2xl mt-10">7. Cookies</h2>
      <p>Usamos cookies para funcionamiento esencial, análisis y personalización. Podés aceptar o rechazar a través del banner del primer acceso.</p>
    </LegalLayout>
  );
}
