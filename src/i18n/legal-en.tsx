import { LegalLayout } from "@/components/LegalLayout";

const email = <a href="mailto:contato@psbusinessgroup.com.br" className="text-gold-soft underline">contato@psbusinessgroup.com.br</a>;
const privacy = <a href="/privacidade" className="text-gold-soft underline">Privacy Policy</a>;
const terms = <a href="/termos" className="text-gold-soft underline">Terms of Use</a>;
const heading = "font-display text-2xl mt-10";
const list = "list-disc pl-6 space-y-2";

export function PrivacyEn() {
  return <LegalLayout tag="Privacy" title="Privacy Policy" updated="13/06/2026">
    <p><strong>PS Business Group</strong> ("PS Business", "we" or "Controller") is committed to respecting the privacy and protecting the personal data of its visitors, clients, partners, suppliers and applicants ("Data Subjects" or "you"). This Policy transparently describes how we collect, use, share, store and protect personal data processed through our digital channels, in accordance with Brazil's General Data Protection Law (Law No. 13,709/2018 — "LGPD"), the Brazilian Internet Civil Rights Framework (Law No. 12,965/2014), Decree No. 8,771/2016 and, where applicable, Law No. 6,534/20 of the Republic of Paraguay.</p>
    <h2 className={heading}>1. Identification of the Controller</h2>
    <p><strong>Business name:</strong> PS Business Group<br /><strong>Operations:</strong> Brazil and Paraguay<br /><strong>Institutional email:</strong> {email}</p>
    <h2 className={heading}>2. Definitions</h2>
    <p><strong>Personal data:</strong> information relating to an identified or identifiable individual.<br /><strong>Sensitive personal data:</strong> data concerning racial origin, religious beliefs, political opinions, trade union membership, health, sex life, genetic or biometric data.<br /><strong>Processing:</strong> any operation performed on personal data (collection, use, storage, sharing, deletion, etc.).<br /><strong>Data Subject:</strong> the individual to whom personal data relates.<br /><strong>Controller:</strong> the party responsible for decisions concerning processing — on this website, PS Business Group.<br /><strong>Processor:</strong> the party that processes data on behalf of the Controller.<br /><strong>Data Protection Officer (DPO):</strong> the person designated as a communication channel between the Controller, Data Subjects and Brazil's National Data Protection Authority (ANPD).</p>
    <h2 className={heading}>3. Data we collect</h2>
    <p>We collect only the data strictly necessary for the stated purposes:</p>
    <ul className={list}>
      <li><strong>Registration/contact data:</strong> name, email, phone number, company, position and messages submitted through forms.</li>
      <li><strong>Browsing data:</strong> IP address, device identifiers, browser type, operating system, language, pages visited, time spent, traffic source and cookies.</li>
      <li><strong>Professional data:</strong> résumés and information voluntarily submitted during partnership, supply or recruitment processes.</li>
      <li><strong>Communications:</strong> content of interactions with us by email, WhatsApp, forms or social media.</li>
    </ul>
    <p>We do not intentionally collect sensitive personal data or personal data from individuals under 18.</p>
    <h2 className={heading}>4. Purposes and legal bases (LGPD Articles 7 and 11)</h2>
    <ul className={list}>
      <li><strong>Responding to contacts, questions, partnerships and opportunities</strong> — basis: preliminary contractual procedures and legitimate interest.</li>
      <li><strong>Institutional communication and relationship management</strong> — basis: consent and/or legitimate interest.</li>
      <li><strong>Compliance with legal, regulatory and tax obligations</strong> — basis: legal obligation.</li>
      <li><strong>Statistical analysis, metrics and website improvement</strong> — basis: legitimate interest, with minimization and pseudonymization whenever possible.</li>
      <li><strong>Fraud prevention and security</strong> — basis: legitimate interest and compliance with legal obligations.</li>
      <li><strong>Defense in judicial, administrative or arbitration proceedings</strong> — basis: the regular exercise of rights.</li>
    </ul>
    <h2 className={heading}>5. Data sharing</h2>
    <p>We do not sell or rent personal data. We may share it, always subject to contractual confidentiality and security obligations, with:</p>
    <ul className={list}><li>Companies within PS Business Group, for purposes compatible with this Policy;</li><li>Technology processors (hosting, email, analytics, CRM, security);</li><li>Competent authorities, upon a lawful request or court order;</li><li>Legal and accounting advisers and auditors in the regular performance of their duties.</li></ul>
    <h2 className={heading}>6. International transfers</h2>
    <p>Some processors may be located outside Brazil. In such cases, we ensure transfers take place only to countries with an adequate level of protection or under specific contractual clauses, pursuant to LGPD Article 33.</p>
    <h2 className={heading}>7. Storage and retention</h2>
    <p>Data is retained only as long as necessary to fulfill its purposes, subject to statutory retention periods — in particular: 6 months for access records (Article 15 of the Internet Civil Rights Framework), 5 years for consumer relationships (Article 27 of the Consumer Protection Code), and other applicable tax and limitation periods. After that period, data is securely deleted or anonymized.</p>
    <h2 className={heading}>8. Information security</h2>
    <p>We adopt technical and organizational measures consistent with industry best practices, including encrypted HTTPS/TLS connections, least-privilege access controls, multi-factor authentication for administrative tools, logging, backups, continuous monitoring, periodic supplier assessments and staff training. In the event of a security incident that may cause significant risk or harm, we will notify affected Data Subjects and the ANPD, pursuant to LGPD Article 48.</p>
    <h2 className={heading}>9. Data Subject rights (LGPD Article 18)</h2>
    <p>You may exercise the following rights at any time:</p>
    <ul className={list}><li>confirmation that processing exists;</li><li>access to your data;</li><li>correction of incomplete, inaccurate or outdated data;</li><li>anonymization, blocking or deletion of unnecessary data or data processed unlawfully;</li><li>data portability;</li><li>deletion of data processed with consent;</li><li>information about entities with which data has been shared;</li><li>information about the possibility of withholding consent and its consequences;</li><li>withdrawal of consent;</li><li>objection to processing carried out on grounds that do not require consent;</li><li>review of decisions based solely on automated processing.</li></ul>
    <p>To exercise your rights, send your request to {email}. We will respond within the statutory period of up to 15 days.</p>
    <h2 className={heading}>10. Cookies and similar technologies</h2>
    <p>We use necessary cookies (operation and security), performance cookies (anonymous statistics), functionality cookies (preferences such as language) and, occasionally, marketing cookies. On your first visit, we display a banner so you can accept, reject or manage your preferences. You can also configure your browser to block cookies, acknowledging that some functionality may be affected.</p>
    <h2 className={heading}>11. Data Protection Officer (DPO)</h2>
    <p>In compliance with LGPD Article 41, PS Business Group provides {email} as a channel for communications from Data Subjects and the ANPD.</p>
    <h2 className={heading}>12. National Authority</h2>
    <p>If you believe your rights have not been adequately addressed, you may submit a petition to Brazil's National Data Protection Authority (ANPD) — <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-gold-soft underline">www.gov.br/anpd</a>.</p>
    <h2 className={heading}>13. Updates to this Policy</h2>
    <p>This Policy may be revised periodically. The current version will always be available on this page, together with the date of its last update.</p>
  </LegalLayout>;
}

export function TermsEn() {
  return <LegalLayout tag="Terms" title="Terms of Use" updated="13/06/2026">
    <p>Accessing, browsing and using the official <strong>PS Business Group</strong> website ("PS Business", "Website") constitutes full, express and unequivocal acceptance of these Terms of Use ("Terms") and the Privacy Policy. If you disagree with any provision, please do not use the Website.</p>
    <h2 className={heading}>1. Purpose</h2>
    <p>The Website is exclusively institutional and informational, presenting PS Business Group, its companies, operations, values and communication channels. It does not constitute a public offering, binding proposal, investment recommendation, financial intermediation or direct provision of regulated services.</p>
    <h2 className={heading}>2. Capacity and registration</h2>
    <p>The Website is intended for individuals over 18 or those with full legal capacity under applicable law. By completing contact forms, users declare that the information provided is true, current and complete, and that they are authorized to represent any legal entity indicated.</p>
    <h2 className={heading}>3. Intellectual property</h2>
    <p>All content available on the Website — including, without limitation, text, images, photographs, videos, audio, illustrations, icons, trademarks, logos, business names, visual identity, source code, layout and information architecture — is protected by Law No. 9,610/1998 (Copyright), Law No. 9,279/1996 (Industrial Property) and other applicable rules, and is owned by PS Business Group or used with authorization. Any reproduction, copying, distribution, commercialization, modification or exploitation, in whole or in part, without prior written authorization is prohibited.</p>
    <h2 className={heading}>4. Permitted and prohibited use</h2>
    <p>Users agree to use the Website in good faith and in accordance with applicable law. The following are prohibited:</p>
    <ul className={list}><li>unlawful or abusive acts, or acts that violate third-party rights;</li><li>attempting to access restricted areas, accounts, servers or databases without authorization;</li><li>reverse engineering, large-scale scraping, unauthorized mining or decompilation;</li><li>introducing viruses, malware, malicious scripts or code that compromises the Website's integrity;</li><li>using the Website for spam, phishing, fraud or unfair competition;</li><li>reproducing the Website's trademarks, layout or content without authorization.</li></ul>
    <h2 className={heading}>5. Availability and changes</h2>
    <p>PS Business makes its best efforts to keep the Website available 24/7, but does not guarantee uninterrupted or error-free operation. We reserve the right, at any time and without prior notice, to: (i) change the layout, functionality and content; (ii) suspend or discontinue the Website, in whole or in part; (iii) perform scheduled or emergency maintenance.</p>
    <h2 className={heading}>6. Limitation of liability</h2>
    <p>Information is provided as is, solely for informational purposes. PS Business is not liable for: (i) decisions based on the Website's content; (ii) inaccuracies, outdated information or omissions; (iii) temporary unavailability caused by unforeseen events, force majeure, cyberattacks or third-party infrastructure failures; (iv) indirect damages, lost profits or lost opportunities. Nothing in this clause limits liability that cannot be limited under mandatory law.</p>
    <h2 className={heading}>7. External links and third-party content</h2>
    <p>The Website may contain links to third-party websites, social media profiles or services. These links are provided solely for users' convenience; PS Business does not control and is not responsible for those third parties' content, privacy policies or practices.</p>
    <h2 className={heading}>8. Privacy and data protection</h2>
    <p>Processing of personal data collected through the Website is governed by the {privacy}, which forms an integral part of these Terms.</p>
    <h2 className={heading}>9. Communications and official channels</h2>
    <p>The only official communication channels are those published on this Website. PS Business is not responsible for profiles, pages, emails or applications not expressly listed here.</p>
    <h2 className={heading}>10. Changes to these Terms</h2>
    <p>These Terms may be updated at any time. The current version will always be published on this page with its update date. Continued use of the Website after publication of a new version constitutes acceptance of the changes.</p>
    <h2 className={heading}>11. Applicable law and jurisdiction</h2>
    <p>These Terms are governed by the laws of the Federative Republic of Brazil. The courts of São Paulo/SP are designated to resolve any disputes arising from them, with express waiver of any other jurisdiction, however privileged. For users located in Paraguay, mandatory Paraguayan law also applies.</p>
    <h2 className={heading}>12. Contact</h2>
    <p>Questions about these Terms may be sent to {email}.</p>
  </LegalLayout>;
}

export function NoticeEn() {
  return <LegalLayout tag="Legal Notice" title="Legal Notice" updated="13/06/2026">
    <h2 className="font-display text-2xl mt-2">1. Identification</h2>
    <p><strong>Name:</strong> PS Business Group<br /><strong>Nature:</strong> Brazilian business group with binational operations in Brazil — Paraguay.<br /><strong>Operations:</strong> Brazil and Paraguay.<br /><strong>Institutional contact:</strong> {email}</p>
    <p>Companies within the group have their own legal personality and are registered with the competent bodies in their respective jurisdictions and areas of operation (logistics, agribusiness, education, sports, capital, real estate, travel, legal services, among others).</p>
    <h2 className={heading}>2. Purpose of the website</h2>
    <p>This website is exclusively <strong>informational and institutional</strong>. Published content describes, in general terms, the group's companies, markets, initiatives, brands and contact channels. Nothing published here constitutes (i) a public offering of securities, (ii) an investment recommendation, (iii) financial, legal, accounting or tax advice, (iv) financial intermediation, (v) direct provision of regulated services, or (vi) a binding contractual commitment.</p>
    <p>Business, contracting or investment decisions must be preceded by specific analysis and independent professional advice.</p>
    <h2 className={heading}>3. Intellectual property and trademarks</h2>
    <p>The "PS Business Group" trademark, logo, visual identity, layout, typography, content organization, source code and other distinctive signs are protected by Law No. 9,279/1996 (Industrial Property), Law No. 9,610/1998 (Copyright) and international treaties. Associated companies' trademarks belong to their respective owners and are used on this website solely for informational purposes. Reproduction, adaptation or commercialization without prior written authorization constitutes a violation subject to civil and criminal penalties.</p>
    <h2 className={heading}>4. Regulatory compliance</h2>
    <p>We operate in accordance with applicable Brazilian and Paraguayan legislation, including:</p>
    <ul className={list}><li>Law No. 13,709/2018 — General Data Protection Law (LGPD);</li><li>Law No. 12,965/2014 — Brazilian Internet Civil Rights Framework;</li><li>Decree No. 8,771/2016 — implementing the Internet Civil Rights Framework;</li><li>Law No. 8,078/1990 — Consumer Protection Code;</li><li>Law No. 12,846/2013 — Brazilian Anti-Corruption Law;</li><li>Law No. 9,613/1998 — Prevention of Money Laundering;</li><li>Law No. 6,534/20 of the Republic of Paraguay — Personal Data Protection;</li><li>Paraguay's Law No. 1,015/97 — Prevention and Suppression of Money Laundering;</li><li>Sector-specific regulations applicable to each group company.</li></ul>
    <h2 className={heading}>5. Compliance and integrity channel</h2>
    <p>PS Business adopts governance policies, fraud prevention, anti-corruption compliance and a code of conduct. Reports of potential misconduct may be sent to {email}, with confidentiality and protection against retaliation.</p>
    <h2 className={heading}>6. Privacy, cookies and security</h2>
    <p>Personal data processing is detailed in the {privacy}, and rights and obligations relating to use are set out in the {terms}. The website operates over an encrypted HTTPS/TLS connection (security padlock visible in the browser).</p>
    <h2 className={heading}>7. Limitation of liability</h2>
    <p>PS Business strives to keep information accurate and up to date, but does not guarantee permanent accuracy, completeness or currency, and is not responsible for interpretations, decisions or losses arising from use of the content published here.</p>
    <h2 className={heading}>8. Jurisdiction</h2>
    <p>Any disputes will be resolved in the courts of São Paulo/SP, unless consumer jurisdiction rules or other mandatory rules provide otherwise.</p>
    <h2 className={heading}>9. Copyright</h2>
    <p>© {new Date().getFullYear()} PS Business Group. All rights reserved.</p>
  </LegalLayout>;
}