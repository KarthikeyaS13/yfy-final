import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  FileCheck, 
  Lock, 
  Eye, 
  XCircle, 
  Check, 
  ChevronRight, 
  Server, 
  Database, 
  Key, 
  ShieldCheck, 
  Cpu, 
  Code, 
  Terminal, 
  HardDrive, 
  Activity, 
  Users,
  ExternalLink
} from 'lucide-react';
import ItFaq from './ItFaq';
import SecurityPackForm from './SecurityPackForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Security, Tenancy & DPDP Architecture — Vendor Review Pack | yfy®',
  description:
    'Schema-per-tenant isolation, SAML and SCIM, application-layer encryption with blind indexes, hash-chained audit ledger, and a published list of what we do not have yet.',
  alternates: { canonical: '/roles/it' },
  keywords: [
    'HRMS tenant isolation architecture',
    'DPDP compliant payroll platform India',
    'payroll vendor security questionnaire',
    'schema per tenant multi-tenancy',
    'HR software ISO 27001 India',
    'application layer encryption blind index',
    'segregation of duties payroll ICFR'
  ],
  openGraph: {
    title: 'Security, Tenancy & DPDP Architecture — Vendor Review Pack | yfy®',
    description:
      'Schema-per-tenant isolation, SAML and SCIM, application-layer encryption with blind indexes, hash-chained audit ledger, and a published list of what we do not have yet.',
    url: 'https://yfy.ai/roles/it',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security, Tenancy & DPDP Architecture — Vendor Review Pack | yfy®',
    description: 'Answer your vendor review from this page.',
  },
};

const faqData = [
  {
    q: 'Can your staff access our data?',
    a: 'Platform staff and tenant users are separate identity planes with separate authentication. Platform staff reach a tenant only through an explicit cross-tenant membership grant. Our global-admin role does bypass tenant permission checks by design, for platform operations and incident response — restricted to 3 named senior infrastructure engineers, requiring hardware MFA, break-glass elevation approval, and immutable session audit logging.'
  },
  {
    q: 'Where is our data hosted, and does it leave India?',
    a: 'Hosted on Amazon Web Services (AWS) in the Asia Pacific (Mumbai) region (ap-south-1). All production databases, replicas, file storage buckets and backup archives reside exclusively in India, guaranteeing 100% Indian data residency.'
  },
  {
    q: 'Do you support customer-managed encryption keys?',
    a: 'Yes, on the dedicated storage tier: a tenant-specific bucket with your own KMS key, and optional object-lock. It also gives you a crypto-shred exit at termination: schedule the key for deletion and the bucket is unreadable without touching a row.'
  },
  {
    q: 'How do you prevent a user seeing data outside their scope?',
    a: 'Four authorisation layers with row-level scoping, enforced at three independent gates (navigation visibility, route guard, and API endpoint) that automated CI tests assert stay in agreement. In addition, contractor portal scoping is unconditional — a vendor can never reach another vendor’s roster or documents.'
  },
  {
    q: 'What happens to our data when we terminate?',
    a: 'Document export is a first-class operation, DPDP erasure is implemented, and on the dedicated tier scheduling your KMS key for deletion crypto-shreds the bucket. Standard offboarding includes a 30-day post-termination retention window for customer data retrieval, followed by permanent cryptographic erasure and issuance of a formal Certificate of Deletion.'
  },
  {
    q: 'Do you have a documented incident response process?',
    a: 'Yes. Our Incident Response Plan defines 4 severity levels (P1 Critical through P4 Low). For any confirmed security incident involving tenant data, notification commitments comply with CERT-In 6-hour reporting guidelines and DPDP breach notification directives, coordinated via our 24/7 Security Operations bridge.'
  },
  {
    q: 'Can we run our own penetration test?',
    a: 'Yes. Enterprise customers may perform white-box or black-box penetration testing against an isolated staging environment running their exact configuration, subject to 14 days prior notice and an agreed rules-of-engagement scope document.'
  },
  {
    q: 'Will you complete our questionnaire?',
    a: 'Yes. Request the security pack, which includes a pre-completed Cloud Security Alliance CAIQ v4 questionnaire. If you require custom questionnaire responses, our engineering and Infosec team completes them within 5 to 7 working days under mutual NDA.'
  }
];

export default function ItRolePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Enterprise Workforce Platform Security & Tenancy Architecture',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Private PostgreSQL schema-per-tenant isolation, SAML 2.0 and SCIM, application-layer non-deterministic encryption with blind indexes, hash-chained audit ledgers, and DPDP 2023 technical safeguards.',
        serviceType: 'Information Security & Compliance Architecture',
        areaServed: 'IN',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <header className={styles.hero}>
        <div className={styles.kicker}>
          <span className={styles.kickerDot} />
          IT &amp; Security
        </div>

        <h1 className={styles.title}>
          Answer your vendor review<br />
          <span className="text-gradient">from this page.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            You have a questionnaire to complete, an architecture to assess, and a DPDP position to verify. Below is our answer for each domain — including the four where our answer is &quot;not yet,&quot; with a date.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            If something here is not enough to close a row on your assessment, the security pack has the detail, and an engineer will take the call rather than an account manager.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <a href="#pack-request" className="btn btn-primary btn-lg">
            Request the security pack <ArrowRight size={18} />
          </a>
          <Link href="/trust" className="btn btn-outline btn-lg">
            Read the full trust centre
          </Link>
          <Link href="/platform/demo?module=payroll&cta=it_header_engineer&persona=multistate&intent=security&source=/roles/it" className={styles.tertiaryLink}>
            Talk to an engineer →
          </Link>
        </div>

        <div className={styles.trustStripHero}>
          <span style={{ fontWeight: 600, color: '#fff' }}>
            Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad · Indian Data Residency (AWS Mumbai)
          </span>
          <span className={styles.certNumbers}>
            ISO 9001:2015 (IN/19920701/2497) · ISO 27001:2022 (IN/48720702/6157) · ISO/IEC 27701:2019 (MQCPF72H25)
          </span>
        </div>
      </header>

      {/* SECTION 2: WHAT IS IN THE SECURITY PACK */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Start Here</span>
          <h2 className={styles.sectionTitle}>One request, and most of your questionnaire is answered</h2>
          <p className={styles.sectionLead}>
            So you know exactly what you are asking for before you submit a vendor review request.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Included in the Security Pack</th>
                <th style={{ width: '65%' }}>Specification &amp; Scope Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ISO 9001, 27001 and 27701 certificates</strong></td>
                <td>Official registrar certificates with full scope statements and accreditation seals (valid to September 2028).</td>
              </tr>
              <tr>
                <td><strong>Architecture and tenancy note</strong></td>
                <td>PostgreSQL schema isolation model, connection pool validation, identity planes, and KMS storage tiers.</td>
              </tr>
              <tr>
                <td><strong>Authorisation model document</strong></td>
                <td>Persona, module, 21-verb vocabulary and row-level data scope; the full separation-of-duties matrix.</td>
              </tr>
              <tr>
                <td><strong>Data protection note</strong></td>
                <td>Application-layer encryption at rest with blind indexes, DSAR operational handling, retention model, audit ledger design.</td>
              </tr>
              <tr>
                <td><strong>Sub-processor list</strong></td>
                <td>Complete declared list: AWS India (Hosting &amp; Storage), Exotel (SMS Muster), SendGrid (Transactional Email), Sentry (Error Telemetry).</td>
              </tr>
              <tr>
                <td><strong>Data Processing Addendum template</strong></td>
                <td>Standard counsel-reviewed DPA aligned with the Digital Personal Data Protection (DPDP) Act 2023.</td>
              </tr>
              <tr>
                <td><strong>Backup and recovery note</strong></td>
                <td>Backup verification tooling, weekly scratch DB assertion mechanics, and disaster recovery architecture.</td>
              </tr>
              <tr>
                <td><strong>Penetration test executive summary</strong></td>
                <td>Scheduled third-party external VAPT executive summary (Annual assessment scheduled Q4 2026).</td>
              </tr>
              <tr>
                <td><strong>Completed CAIQ v4 questionnaire</strong></td>
                <td>Pre-filled Cloud Security Alliance Consensus Assessments Initiative Questionnaire (CAIQ v4).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.92rem', color: '#F5C842', fontWeight: 600 }}>
          Supplied under mutual NDA · Dispatch within 2 working days
        </p>
      </section>

      {/* SECTION 3: TENANCY AND ARCHITECTURE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Isolation</span>
          <h2 className={styles.sectionTitle}>Separated at the database layer, not by a column</h2>
          <p className={styles.sectionLead}>
            Every customer has a <strong>private PostgreSQL schema</strong>. Every tenant-scoped table — employee records, payslips, documents, audit ledgers, tickets — lives inside it. There is no shared table with a customer-id column that a missing filter could leak across.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Database size={22} />
            </div>
            <h3 className={styles.cardTitle}>Verified per request</h3>
            <p className={styles.cardDesc}>
              A tenant user authenticates with a tenant-scoped token carrying a schema claim, verified against the DB connection's search_path on every request.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Users size={22} />
            </div>
            <h3 className={styles.cardTitle}>Two identity planes</h3>
            <p className={styles.cardDesc}>
              Platform staff and tenant users are completely separate models with separate auth paths. Platform staff reach tenants only via explicit cross-tenant grants.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Code size={22} />
            </div>
            <h3 className={styles.cardTitle}>No cross-schema FKs</h3>
            <p className={styles.cardDesc}>
              References between applications inside a tenant use loose integer identifiers rather than foreign keys, preventing cross-schema constraint leaks.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <HardDrive size={22} />
            </div>
            <h3 className={styles.cardTitle}>Physically separate desk</h3>
            <p className={styles.cardDesc}>
              Our internal customer support ticketing desk is a physically separate application in the public schema, so grievances are never stored in shared tables.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Storage Tiers</h3>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Storage Tier</th>
                <th style={{ width: '70%' }}>Isolation &amp; Encryption Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Shared Bucket</strong></td>
                <td>Per-tenant key-prefix isolation under a tenant-aware storage backend, server-side encrypted (SSE-S3).</td>
              </tr>
              <tr>
                <td><strong>Dedicated Bucket</strong></td>
                <td>A separate physical bucket per tenant, <strong>your own AWS KMS customer-managed key</strong>, and optional object-lock. Gives you a crypto-shred exit: schedule the key for deletion and the bucket is permanently unreadable without touching a row.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Technical Disclosure Block 1 */}
        <div className={styles.disclosureBlock}>
          <span className={styles.disclosureTag}>Technical Disclosure · Privileged Access</span>
          <p className={styles.disclosureText}>
            <strong>Our global-admin role bypasses tenant permission checks by design</strong>, for platform operations, schema migrations, and incident response. This role is restricted to 3 named senior infrastructure engineers, requires hardware MFA, temporary break-glass elevation approval, and immutable session audit logging. We state this explicitly because a reviewer will discover it, and a vendor stating it alongside its compensating controls is trustworthy.
          </p>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Hosting &amp; Data Residency:</strong> Amazon Web Services (AWS), Asia Pacific (Mumbai) region (ap-south-1). 100% Indian data residency.
        </p>
      </section>

      {/* SECTION 4: IDENTITY AND ACCESS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Authentication</span>
          <h2 className={styles.sectionTitle}>Enterprise SSO, and the version-one bounds</h2>
          <p className={styles.sectionLead}>
            Standards-based federated identity wired into enterprise directories.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Capability</th>
                <th style={{ width: '70%' }}>Status &amp; Architectural Safeguard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SAML 2.0</strong></td>
                <td>Service Provider (SP) initiated, strict mode, one IdP configuration per tenant. Supports Microsoft Entra ID (Azure AD), Okta, Google Workspace, Ping.</td>
              </tr>
              <tr>
                <td><strong>OIDC</strong></td>
                <td>Supported, sharing the same identity chokepoint as SAML — so no-JIT, inactive-user refusal, employee-profile gating and auditing hold identically.</td>
              </tr>
              <tr>
                <td><strong>SCIM</strong></td>
                <td>Automated user provisioning and deprovisioning, with deprovision semantics directly wired into the employee offboarding/leaver process.</td>
              </tr>
              <tr>
                <td><strong>Multi-factor (MFA)</strong></td>
                <td>TOTP authenticator app supported for non-SSO local administrative logins.</td>
              </tr>
              <tr>
                <td><strong>Password policy</strong></td>
                <td>Minimum length, complexity, expiry, history, and tier presets — enforced at three independent chokepoints.</td>
              </tr>
              <tr>
                <td><strong>API rate limiting</strong></td>
                <td>Tenant-scoped rate limits, so one tenant’s runaway integration cannot exhaust another tenant’s rate window.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Technical Disclosure Block 2 */}
        <div className={styles.disclosureBlock}>
          <span className={styles.disclosureTag}>Technical Disclosure · SAML Roadmap</span>
          <p className={styles.disclosureText}>
            <strong>Documented version-one bounds on our SAML implementation: no Single Logout (SLO), and no InResponseTo tracking.</strong> Both are scheduled on our roadmap for Q1 2027. We list them here rather than waiting for your questionnaire to uncover them during integration testing.
          </p>
        </div>

        <p style={{ fontSize: '0.92rem', color: '#D1C5E2', lineHeight: 1.6 }}>
          <strong>Policy Design Detail:</strong> Password expiry counts from <em>each account's next change</em> rather than from a global date, so tightening policy on an existing tenant cannot lock every corporate user out simultaneously.
        </p>
      </section>

      {/* SECTION 5: AUTHORISATION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Access Control</span>
          <h2 className={styles.sectionTitle}>Four layers, and roughly 240 permissions that are derived rather than stored</h2>
          <p className={styles.sectionLead}>
            Persona → module → action verb → data scope.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '25%' }}>Authorisation Layer</th>
                <th style={{ width: '75%' }}>Architectural Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Persona</strong></td>
                <td>A bundle of grants assigned as a unit. 30 system packs ship pre-seeded, so administrators do not assemble roles from raw permissions and risk privilege creep.</td>
              </tr>
              <tr>
                <td><strong>2. Module</strong></td>
                <td>One of 16 first-class product areas (Payroll, Statutory, Expense, Attendance, e-Vault, etc.).</td>
              </tr>
              <tr>
                <td><strong>3. Action Verb</strong></td>
                <td>A single canonical 21-verb vocabulary: <code>view</code>, <code>create</code>, <code>edit</code>, <code>delete</code>, <code>submit</code>, <code>approve</code>, <code>reject</code>, <code>cancel</code>, <code>reverse</code>, <code>lock</code>, <code>unlock</code>, <code>upload</code>, <code>download</code>, <code>export</code>, <code>print</code>, <code>configure</code>, <code>run_process</code>, <code>schedule</code>, <code>disburse</code>, <code>approve_payment</code>, <code>audit</code>.</td>
              </tr>
              <tr>
                <td><strong>4. Data Scope</strong></td>
                <td>Row-level narrowing by scope type (legal entity, site, cost centre, contractor) plus attribute conditions.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.grid2}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Three gates that must agree</h3>
            <p className={styles.cardDesc}>
              Navigation visibility, route guards, and API permissions are enforced independently. Automated CI test suites assert all three stay in lockstep, preventing URL bypass bugs.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Four-eyes separation on money</h3>
            <p className={styles.cardDesc}>
              Four verbs held by separate roles: <code>run_process</code>, <code>approve</code>, <code>approve_payment</code>, <code>disburse</code>. A person-level check blocks the payroll approver from approving payment.
            </p>
          </div>
        </div>

        {/* Technical Disclosure Block 3 */}
        <div className={styles.disclosureBlock}>
          <span className={styles.disclosureTag}>Technical Disclosure · Portal Boundary</span>
          <p className={styles.disclosureText}>
            <strong>Vendor scoping is unconditional:</strong> a labour contractor logged into the vendor portal reaches strictly their own roster, deployments and documents. It is an architectural invariant, not a toggle an administrator can disable.
          </p>
        </div>
      </section>

      {/* SECTION 6: DATA PROTECTION AND DPDP */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Data Protection &amp; DPDP 2023</span>
          <h2 className={styles.sectionTitle}>Encrypted where it matters, and still searchable</h2>
          <p className={styles.sectionLead}>
            Application-layer encryption for high-risk identity and financial attributes.
          </p>
        </div>

        <div style={{ padding: '1.75rem 2rem', background: 'rgba(26, 10, 46, 0.65)', border: '1px solid rgba(155, 61, 216, 0.3)', borderRadius: '16px', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.75rem' }}>Application-layer encryption with blind indexes</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0 0 1rem' }}>
            Sensitive identifiers are encrypted at the application layer before reaching PostgreSQL: UAN, ESIC number, PAN, passport, driving licence, voter ID, landlord PAN, and bank accounts, alongside integration credentials and webhook secrets.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#E2D9F3', lineHeight: 1.65, margin: 0 }}>
            <strong>The technical nuance:</strong> Application encryption is non-deterministic (AES-256-GCM). Because standard DB uniqueness constraints fail on non-deterministic ciphertext, columns requiring equality search or uniqueness carry <strong>blind indexes (HMAC-SHA256)</strong>. Key material is injected via environment secrets; the application refuses to boot outside debug mode if keys are missing.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Data-Principal Right</th>
                <th style={{ width: '70%' }}>System Implementation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Access &amp; Export</strong></td>
                <td>First-class tenant export with identifiers decrypted (an export with masked fields fails compliance).</td>
              </tr>
              <tr>
                <td><strong>Right to Erasure</strong></td>
                <td>Managed via an Erasure Register rather than a naive delete button; requires HR justification if legally refused (e.g. statutory 5-year retention).</td>
              </tr>
              <tr>
                <td><strong>Configurable Retention</strong></td>
                <td>Category × document type × jurisdiction → retention schedule in months, resolved at upload.</td>
              </tr>
              <tr>
                <td><strong>Legal Hold</strong></td>
                <td>Overrides automated retention schedules until explicit administrative release.</td>
              </tr>
              <tr>
                <td><strong>Append-Only Audit Ledger</strong></td>
                <td>Tamper-evident, hash-chained ledger. Holds zero personal data, so it can be produced in court without creating a privacy leak.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
          <strong>On DPDP, stated accurately:</strong> We do not claim to be &quot;fully DPDP compliant&quot; — nobody is, and the Rules' substantive compliance date is 13 May 2027. What we have built is the complete technical machinery: purpose-bound consent, retention as code, first-class erasure, and Indian data residency.
        </p>
      </section>

      {/* SECTION 7: AI GOVERNANCE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>AI Governance</span>
          <h2 className={styles.sectionTitle}>Off by default, and correct with it off</h2>
          <p className={styles.sectionLead}>
            Four non-negotiable architectural principles for generative and assistive models.
          </p>
        </div>

        <div className={styles.aiPrinciplesBox}>
          <div className={styles.aiPrinciple}>
            <div className={styles.aiPrincipleTitle}>1 · AI never decides about a person</div>
            <p className={styles.aiPrincipleText}>
              It drafts, summarises, scores, and flags. A human approves the claim, the rating, the hire, and the payment. No AI action is autonomous on the money path or in an employment decision.
            </p>
          </div>

          <div className={styles.aiPrinciple}>
            <div className={styles.aiPrincipleTitle}>2 · Every AI feature sits on a deterministic floor</div>
            <p className={styles.aiPrincipleText}>
              Each capability is built over a complete rule-based baseline that produces a correct result with AI switched off. The model enriches; it is never load-bearing.
            </p>
          </div>

          <div className={styles.aiPrinciple}>
            <div className={styles.aiPrincipleTitle}>3 · Off by default, opt-in per tenant</div>
            <p className={styles.aiPrincipleText}>
              You choose which AI features are enabled. Provisioned with AI disabled entirely, you lose zero statutory or operational functionality — only convenience.
            </p>
          </div>

          <div className={styles.aiPrinciple}>
            <div className={styles.aiPrincipleTitle}>4 · One dispatch path, logged</div>
            <p className={styles.aiPrincipleText}>
              All model dispatch runs through a single audited chokepoint rather than each module calling external APIs independently, enforcing tenant policy uniformly.
            </p>
          </div>
        </div>

        {/* Technical Disclosure: Third-party models */}
        <div className={styles.disclosureBlock}>
          <span className={styles.disclosureTag}>Technical Disclosure · Third-Party Model Dispatch</span>
          <p className={styles.disclosureText}>
            <strong>&quot;Does our employee data reach a third-party model?&quot;</strong> If AI features are enabled, yes — dispatch calls a third-party LLM provider. The identifier-redaction layer that will strip structured identifiers prior to dispatch is designed and currently in testing. Until it ships, our recommendation for security-sensitive tenants is straightforward: <strong>we provision you with AI disabled.</strong> You lose no functionality because of Principle 2.
          </p>
        </div>
      </section>

      {/* SECTION 8: AVAILABILITY AND RESILIENCE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Resilience</span>
          <h2 className={styles.sectionTitle}>What is built, and what is not yet proven</h2>
          <p className={styles.sectionLead}>
            Disaster recovery tooling that prioritizes database integrity over optimistic assertions.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Refuses small dumps</h3>
            <p className={styles.cardDesc}>
              Backup automation refuses to keep dumps under 1 KiB, catching silent cron failures that write empty files.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Weekly restore assert</h3>
            <p className={styles.cardDesc}>
              Automated restore testing into a scratch PostgreSQL instance with row-count verification.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Offsite mirroring</h3>
            <p className={styles.cardDesc}>
              Cross-zone encrypted mirroring with SHA-256 checksum readbacks on all database snapshots.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Freshness alerting</h3>
            <p className={styles.cardDesc}>
              Automated telemetry alerts on backup age to prevent silent snapshot lag.
            </p>
          </div>
        </div>

        {/* Technical Disclosure Block 4 */}
        <div className={styles.disclosureBlock}>
          <span className={styles.disclosureTag}>Technical Disclosure · RPO &amp; RTO Status</span>
          <p className={styles.disclosureText}>
            <strong>We do not yet publish formal RPO or RTO contractual commitments</strong>, because neither has been certified by a formal third-party drill. Tooling and weekly scratch restores exist; our comprehensive disaster recovery drill is scheduled for Q4 2026. Until complete, the honest answer to an RPO question is &quot;we have the tooling and are drilling it,&quot; and that answer is not dressed up. Target availability: 99.9% general uptime, with a priority pay-window standby commitment.
          </p>
        </div>
      </section>

      {/* SECTION 9: APPLICATION SECURITY AND ENGINEERING */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>How It Is Built</span>
          <h2 className={styles.sectionTitle}>Invariants enforced at build time, not by convention</h2>
          <p className={styles.sectionLead}>
            Engineering practices that ensure security controls are tested in code rather than left to developer memory.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Architectural tests</h3>
            <p className={styles.cardDesc}>
              CI build asserts tenant search-path safety and blocks any code introducing cross-schema query leakage.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Service-layer ownership</h3>
            <p className={styles.cardDesc}>
              Statutory and business logic lives in independently unit-tested services, completely separate from HTTP views.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Invariant-named suites</h3>
            <p className={styles.cardDesc}>
              484 automated tests on contract labour alone, naming the exact statutory control defended when a failure occurs.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Secrets never returned</h3>
            <p className={styles.cardDesc}>
              API keys and integration secrets are write-only. Endpoints return <code>has_secret: true</code> booleans, never plaintext.
            </p>
          </div>
        </div>

        {/* Technical Disclosure Block 5 */}
        <div className={styles.disclosureBlock}>
          <span className={styles.disclosureTag}>Technical Disclosure · Webhook Rotation</span>
          <p className={styles.disclosureText}>
            <strong>Known gap:</strong> The ATS inbound webhook signing secret is currently re-readable and lacks a zero-downtime rotation endpoint. Rotation is scheduled for remediation in Q1 2027.
          </p>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Secure SDLC:</strong> Mandatory branch protection, static analysis (SAST) and dependency vulnerability scanning in CI, dual-engineer code reviews, and separation of deployment privileges.
        </p>
      </section>

      {/* SECTION 10: CERTIFICATIONS AND ATTESTATIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Assurance</span>
          <h2 className={styles.sectionTitle}>What we hold, and what we do not</h2>
          <p className={styles.sectionLead}>
            Independent audits verified against international management standards.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Standard / Framework</th>
                <th style={{ width: '25%' }}>Status</th>
                <th style={{ width: '45%' }}>Certificate &amp; Audit Reference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ISO 9001:2015</strong></td>
                <td><span className={styles.badgeViolet}>Held</span></td>
                <td>IN/19920701/2497, ICV Assessments (Valid to 29/09/2028). EGAC accredited.</td>
              </tr>
              <tr>
                <td><strong>ISO 27001:2022</strong></td>
                <td><span className={styles.badgeViolet}>Held</span></td>
                <td>IN/48720702/6157, ICV Assessments (Valid to 29/09/2028). EGAC accredited.</td>
              </tr>
              <tr>
                <td><strong>ISO/IEC 27701:2019</strong></td>
                <td><span className={styles.badgeViolet}>Held</span></td>
                <td>MQCPF72H25, MQCI UK (Valid to 25/09/2028). Privacy Information Management.</td>
              </tr>
              <tr>
                <td><strong>SOC 2 Type II</strong></td>
                <td><span className={styles.badgeGrey}>Not held</span></td>
                <td>Observation window planned for FY 2027; report anticipated late 2027.</td>
              </tr>
              <tr>
                <td><strong>Third-party VAPT</strong></td>
                <td><span className={styles.badgeGold}>Scheduled</span></td>
                <td>Annual external grey-box penetration test scheduled Q4 2026 with CERT-In empaneled auditor.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
          All certificates are issued to <strong>Finnovo Tech Functional Private Limited</strong>, the parent company of yfy®.
        </p>
      </section>

      {/* SECTION 11: WHAT WE DO NOT HAVE YET */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Straight Answers</span>
          <h2 className={styles.sectionTitle}>The section that should make you trust the rest of this page</h2>
          <p className={styles.sectionLead}>
            Every vendor page has a security section. Almost none has this one. Here is our complete list of gaps in the domains you assess, with our exact position on each.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={`${styles.table} ${styles.gapsTable}`}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Assessed Domain / Gap</th>
                <th style={{ width: '65%' }}>Our Engineering &amp; Operational Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SOC 2 Type II</strong></td>
                <td>Not held. Target report date late 2027. ISO 27001:2022 and 27701:2019 held currently.</td>
              </tr>
              <tr>
                <td><strong>Third-party penetration test</strong></td>
                <td>Annual external VAPT scheduled for Q4 2026. Executive summary will enter the pack.</td>
              </tr>
              <tr>
                <td><strong>Published contractual RPO / RTO</strong></td>
                <td>Tooling and weekly scratch restores active; formal certified drill scheduled Q4 2026.</td>
              </tr>
              <tr>
                <td><strong>AI identifier redaction</strong></td>
                <td>Designed and in testing, not shipped. Recommendation for security-conscious tenants: AI disabled.</td>
              </tr>
              <tr>
                <td><strong>SAML Single Logout &amp; InResponseTo</strong></td>
                <td>Not in version one. Target release Q1 2027.</td>
              </tr>
              <tr>
                <td><strong>Webhook secret rotation (ATS)</strong></td>
                <td>Re-readable, rotation endpoint scheduled Q1 2027.</td>
              </tr>
              <tr>
                <td><strong>Native mobile applications</strong></td>
                <td>In progress. Highly responsive, install-free mobile-first browser surfaces active today.</td>
              </tr>
              <tr>
                <td><strong>Multi-country data residency</strong></td>
                <td>Out of scope. India only, deliberately.</td>
              </tr>
              <tr>
                <td><strong>On-premise deployment</strong></td>
                <td>Not offered. Equivalent security is our Dedicated Bucket tier with your own KMS key.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBand} style={{ marginTop: '1.5rem' }}>
          <p>
            <strong>We publish this because you are going to find it.</strong> A vendor who discloses their own version-one limitations is a vendor whose other claims you can weigh. We would rather be assessed accurately than approved on a misunderstanding.
          </p>
        </div>
      </section>

      {/* SECTION 12: QUESTIONNAIRE SHORTCUTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Questionnaire Shortcuts</span>
          <h2 className={styles.sectionTitle}>The rows that usually take three emails</h2>
        </div>

        <ItFaq items={faqData} />
      </section>

      {/* SECTION 13: OFFER & PACK REQUEST */}
      <section className={styles.section}>
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Get the pack, then talk to an engineer</h2>
            <p className={styles.formLead}>
              Request the security pack and we will send it under mutual NDA within 2 working days. If a row on your assessment still is not closed, the follow-up call is with an engineer who built the system — not an account manager reading from a sheet.
            </p>
          </div>

          <SecurityPackForm />
        </div>

        <div className={styles.reviewDate}>
          Technical statements on this page reviewed: September 2026 · Engineering &amp; Infosec · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

      {/* MOBILE STICKY CTA BAR (< 768px) */}
      <div className={styles.mobileStickyBar}>
        <a href="#pack-request" className={`btn btn-primary btn-md ${styles.mobileStickyBtn}`}>
          Request Security Pack <ArrowRight size={16} />
        </a>
      </div>

    </div>
  );
}
