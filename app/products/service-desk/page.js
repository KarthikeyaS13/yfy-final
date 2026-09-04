import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Ban,
  CheckCircle2,
  FileText,
  Lock,
  Eye,
  Users,
  Building2,
  Layers,
  Inbox,
  Mail,
  Smartphone,
  HelpCircle,
  Play,
  Check,
  AlertTriangle
} from 'lucide-react';
import ServiceDeskFaq from './ServiceDeskFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Employee Service Desk Inside Your HR System | yfy®',
  description:
    'Unroutable tickets refused at creation, requester-only close, and an SLA clock that pauses when the ball is with the employee. Runs in the same tenant as the payslip and the document vault.',
  alternates: { canonical: '/products/service-desk' },
  keywords: [
    'employee service desk HR India',
    'HR helpdesk software India',
    'employee query management HRMS',
    'payroll query helpdesk India',
    'internal service desk same tenant',
    'SLA tracking HR operations'
  ],
  openGraph: {
    title: 'Employee Service Desk Inside Your HR System | yfy®',
    description:
      'Unroutable tickets refused at creation, requester-only close, and an SLA clock that pauses when the ball is with the employee. Runs in the same tenant as the payslip.',
    url: 'https://yfy.ai/products/service-desk',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employee Service Desk Inside Your HR System | yfy®',
    description: 'A desk whose numbers mean something. Runs in the same tenant as the payslip.',
  },
};

const scopeComparison = [
  {
    is: 'Where employees raise payroll, leave, document, facilities and HR queries',
    isNot: 'IT service management with asset discovery, CMDB and change management',
  },
  {
    is: 'A queue your HR operations team works, with routing and SLAs',
    isNot: 'External customer support or a helpdesk for your clients',
  },
  {
    is: 'Part of the same tenant as the employee record, the payslip and the document vault',
    isNot: 'A standalone desk you integrate with your HR system',
  },
];

const assignmentModels = [
  {
    model: 'Pull',
    when: 'Agents take the next item themselves — works where the team is small and self-managing',
  },
  {
    model: 'Round-robin',
    when: 'Even distribution across active team members, regardless of load',
  },
  {
    model: 'Least-loaded',
    when: 'Assignment by current open volume rather than by turn',
  },
  {
    model: 'Named owner',
    when: 'Specific categories that always route to a designated subject-matter specialist',
  },
];

const faqData = [
  {
    q: 'We already use Freshservice for IT. Do we replace it?',
    a: 'No, and we would not suggest it. Freshservice is an ITSM product and this is not. Most customers keep their IT desk and run employee HR queries here, because that is where the payslip, the leave balance and the document vault are. If you would rather run everything in one desk, run it in theirs — you will lose the record proximity, which is the only reason to use ours.'
  },
  {
    q: "Can an agent see an employee's salary through the desk?",
    a: "Only if their own role grants it. The desk does not have its own permission model — it uses the platform's unified authorization model, so an agent's access through a ticket is exactly their access everywhere else, governed by persona, module, verb and data scope."
  },
  {
    q: 'How do you stop the desk being used to raise a grievance the manager should not see?',
    a: 'Sensitive categories (such as POSH complaints, harassment disclosures, and disciplinary grievances) route directly to designated committee members or HR IR heads. The reporting line is excluded from queue dashboards, ticket views, and search indexing at the database policy layer.'
  },
  {
    q: 'Our workers are on plant floors and client sites with no corporate email address. How do they raise a ticket?',
    a: 'Workers can access the responsive self-service portal directly on any mobile browser using their employee ID and mobile authentication. For workers without smartphones, shift supervisors and site muster admins can raise and track requests on their behalf with full audit logging.'
  },
  {
    q: 'What does your SLA report actually measure?',
    a: 'Working time to resolution, excluding any period the ticket was waiting on the requester, on tickets the requester confirmed were resolved. Three exclusions most desk reports do not make, which is why our attainment figures are typically lower than the one you are looking at today and mean considerably more.'
  },
  {
    q: 'Can we route by employee attribute — location, department, entity?',
    a: 'Yes. Routing rules are data-driven and can evaluate registered establishment, legal entity, state of employment, department, and category taxonomy to assign tickets to the correct regional or functional queue.'
  },
  {
    q: 'Is there an API available for the service desk?',
    a: 'Yes. Standard authenticated REST endpoints support ticket creation, status synchronization, and event webhooks for enterprise alerting or centralized operational dashboards.'
  }
];

export default function ServiceDeskPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Employee Service Desk',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Internal employee service desk running inside the HR tenant with unroutable ticket refusal, requester-only close, and working-time SLA measurement.',
        serviceType: 'HR Helpdesk & Query Management Software',
        areaServed: 'IN',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
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
          Talent &amp; Platform · Service Desk
        </div>

        <h1 className={styles.title}>
          A desk whose numbers<br />
          <span className="text-gradient">mean something.</span>
        </h1>

        <div className={styles.lead}>
          <p>
            Most service desks can be configured to look good. Attainment targets are settings, resolution is a status an agent can set, and a request the routing rules cannot place ends up in a queue nobody owns.
          </p>
          <p>
            This one is built the other way. A ticket that cannot be routed is refused at creation. An agent resolves and only the requester closes. The SLA clock stops whenever the ball is in the employee's court.
          </p>
          <p>
            And because it runs inside your HR tenant, a payroll query reaches someone who can see the payslip.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/platform/demo?module=service-desk&cta=servicedesk_header_demo&persona=hr&source=/products/service-desk" className="btn btn-primary btn-lg">
            Book a demo <ArrowRight size={18} />
          </Link>
          <Link href="/platform" className="btn btn-outline btn-lg">
            See the full platform
          </Link>
          <Link href="/trust" className={styles.tertiaryLink}>
            Read the trust centre →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · Runs inside your HR tenant · Licensed per module
          </span>
        </div>
      </header>

      {/* SECTION 2: WHAT THIS IS, AND WHAT IT IS NOT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Scope</span>
          <h2 className={styles.sectionTitle}>An employee desk, not an ITSM suite</h2>
          <p className={styles.sectionLead}>
            Clear architectural boundaries: purpose-built for workforce employment queries, not enterprise IT infrastructure.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '50%' }}>This is</th>
                <th style={{ width: '50%' }}>This is not</th>
              </tr>
            </thead>
            <tbody>
              {scopeComparison.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.is}</strong></td>
                  <td style={{ color: '#B3A1C9' }}>{row.isNot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.honestQuoteBox}>
          <p className={styles.honestQuoteText}>
            "If you need full ITSM, use an ITSM product. If you need a customer support desk, use a support product. This is for the queries your own employees raise about their own employment — which is a narrower job, and one that benefits enormously from being next to the data."
          </p>
        </div>
      </section>

      {/* SECTION 3: THREE CONTROLS THAT REFUSE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Why The Numbers Mean Something</span>
          <h2 className={styles.sectionTitle}>Most desks can be made to look good. This one resists it.</h2>
          <p className={styles.sectionLead}>
            Service desk metrics are unusually easy to flatter, and everybody in HR operations knows it. Three design decisions here make the common flattery impossible rather than discouraged.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Ban size={22} />
            </div>
            <h3 className={styles.cardTitle}>An unroutable request is refused at creation</h3>
            <p className={styles.cardDesc}>
              A ticket the routing rules cannot place is <strong>refused when it is raised</strong>, rather than created and left invisible in a queue with no owner.
            </p>
            <p className={styles.cardDesc} style={{ marginTop: '0.85rem' }}>
              The alternative — accept everything, sort it out later — is how a desk accumulates a shadow backlog that nobody reports because nobody can see it. Refusing at creation forces the routing gap to be fixed rather than absorbed.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <CheckCircle2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>An agent resolves. Only the requester closes.</h3>
            <p className={styles.cardDesc}>
              An agent can mark a ticket resolved. The ticket closes when the <strong>employee</strong> accepts that it was.
            </p>
            <p className={styles.cardDesc} style={{ marginTop: '0.85rem' }}>
              This is the single most common way a service desk reports well and performs badly: attainment measured on agent-set statuses. Here a desk cannot report full attainment on tickets nobody actually fixed, because the agent does not hold the closing action.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>The SLA clock runs in working time, and pauses when the ball is theirs</h3>
            <p className={styles.cardDesc}>
              The clock measures <strong>working time</strong>, not wall-clock time, so a Friday evening ticket is not automatically breached by Monday morning.
            </p>
            <p className={styles.cardDesc} style={{ marginTop: '0.85rem' }}>
              And it <strong>pauses whenever the request is waiting on the employee</strong> — for a document, a clarification, or an approval. An SLA figure that includes four days waiting for the employee to send a bank statement is not a measure of anything.
            </p>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Ask any desk vendor you are evaluating whether an agent can close their own ticket, and whether the SLA clock keeps running while the requester is thinking.</strong> The answers tell you what their attainment percentage actually measures.
          </p>
        </div>
      </section>

      {/* SECTION 4: ROUTING AND QUEUES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Operations</span>
          <h2 className={styles.sectionTitle}>Teams as queues, with the assignment model you actually want</h2>
          <p className={styles.sectionLead}>
            Different queues need different assignment behaviour. A payroll queue is not a facilities queue.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '30%' }}>Assignment Model</th>
                <th style={{ width: '70%' }}>When you use it</th>
              </tr>
            </thead>
            <tbody>
              {assignmentModels.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.model}</strong></td>
                  <td>{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* DISTINCTIVE VISUAL: DATA-DRIVEN ROUTING DRY-RUN SIMULATOR */}
        <div className={styles.simulatorBox}>
          <div className={styles.simulatorHeader}>
            <div className={styles.simulatorControls}>
              <span className={styles.simDot} style={{ background: '#FF5F56' }} />
              <span className={styles.simDot} style={{ background: '#FFBD2E' }} />
              <span className={styles.simDot} style={{ background: '#27C93F' }} />
              <span style={{ fontSize: '0.85rem', color: '#B3A1C9', marginLeft: '0.5rem', fontFamily: 'monospace' }}>
                engine/router/simulator.ts
              </span>
            </div>
            <div className={styles.simulatorBadge}>
              SIMULATION MODE: DRY-RUN
            </div>
          </div>

          <div className={styles.simulatorGrid}>
            <div className={styles.simulatorCode}>
              <div style={{ color: '#8E7DA8', marginBottom: '0.5rem' }}>// Test rule change against last 14 days of traffic</div>
              <div><span className={styles.simulatorCodeKeyword}>rule</span> <span className={styles.simulatorCodeString}>"MH_Payroll_Tax_Escalation"</span> {'{'}</div>
              <div style={{ paddingLeft: '1rem' }}><span className={styles.simulatorCodeKeyword}>match</span> (ticket) =&gt; {'{'}</div>
              <div style={{ paddingLeft: '2rem' }}>category: <span className={styles.simulatorCodeString}>"Payroll"</span>,</div>
              <div style={{ paddingLeft: '2rem' }}>subcategory: <span className={styles.simulatorCodeString}>"PT_Deduction"</span>,</div>
              <div style={{ paddingLeft: '2rem' }}>establishment.state: <span className={styles.simulatorCodeString}>"Maharashtra"</span></div>
              <div style={{ paddingLeft: '1rem' }}>{'}'},</div>
              <div style={{ paddingLeft: '1rem' }}><span className={styles.simulatorCodeKeyword}>target</span>: <span className={styles.simulatorCodeString}>"MH-Payroll-Operations"</span>,</div>
              <div style={{ paddingLeft: '1rem' }}><span className={styles.simulatorCodeKeyword}>slaWorkingHours</span>: 4</div>
              <div>{'}'}</div>
            </div>

            <div className={styles.simulatorResults}>
              <div className={styles.simStatRow}>
                <span className={styles.simStatLabel}>Historical Sample Evaluated</span>
                <span className={styles.simStatValGrey}>340 tickets</span>
              </div>
              <div className={styles.simStatRow}>
                <span className={styles.simStatLabel}>Simulated Routed Successfully</span>
                <span className={styles.simStatValViolet}>334 routed (98.2%)</span>
              </div>
              <div className={styles.simStatRow}>
                <span className={styles.simStatLabel}>Refused at Creation (Missing State Metadata)</span>
                <span className={styles.simStatValGold}>6 refused (1.8%)</span>
              </div>
              <div className={styles.simStatRow}>
                <span className={styles.simStatLabel}>Shadow Backlog (Unassigned / Ghost)</span>
                <span className={styles.simStatValGrey}>0 tickets</span>
              </div>
            </div>
          </div>

          <div className={styles.simulatorCaption}>
            <strong>Data-driven routing with a dry-run simulator:</strong> Routing rules are configuration data, not brittle code. Changes can be simulated against historic live traffic before taking effect — showing exactly which tickets a rule change catches and which it would have mis-sent, without discovering mistakes on real employees.
          </div>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Layers size={22} />
            </div>
            <h3 className={styles.cardTitle}>WIP limits per agent</h3>
            <p className={styles.cardDesc}>
              Caps how much any one agent can hold open simultaneously, ensuring a queue cannot be cleared simply by distributing tickets into individual invisibility.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileText size={22} />
            </div>
            <h3 className={styles.cardTitle}>Three-level taxonomy</h3>
            <p className={styles.cardDesc}>
              Organises categories with precision — so a payroll query regarding a Professional Tax deduction routes differently from a bank account update, without spawning unmanageable top-level queues.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Configurable escalation matrix</h3>
            <p className={styles.cardDesc}>
              Time-based and tier-based escalation paths trigger automated alerts to queue leads before an SLA threshold breaches, maintaining operational accountability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY THE TENANT MATTERS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The Structural Advantage</span>
          <h2 className={styles.sectionTitle}>The query is about a payslip. The payslip is right here.</h2>
          <p className={styles.sectionLead}>
            The most common employee queries are about pay, leave, documents and statutory records. In a standalone desk, every one of them is a context-switch: the agent reads the ticket, opens the HR system, finds the employee, finds the record, comes back.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={22} />
            </div>
            <h3 className={styles.cardTitle}>1 · The agent can see the record</h3>
            <p className={styles.cardDesc}>
              Subject to their own permissions — the desk does not bypass the authorisation model. An HR operations agent with payroll view rights sees the payslip; one without does not.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Lock size={22} />
            </div>
            <h3 className={styles.cardTitle}>2 · Documents come from the vault</h3>
            <p className={styles.cardDesc}>
              A document request is fulfilled from the governed document store, with confidentiality tier, retention and audit trail already attached — rather than an agent emailing a file from a folder.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>3 · No integration to maintain</h3>
            <p className={styles.cardDesc}>
              No third-party connector, no webhook synchronization lag, and no field-mapping to re-test whenever either system upgrades or alters its database schema.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Users size={22} />
            </div>
            <h3 className={styles.cardTitle}>4 · Permissions are the same permissions</h3>
            <p className={styles.cardDesc}>
              One authorization model — persona, module, verb, data scope — governs both. An agent's access to a payslip through the desk is exactly their access to it everywhere else.
            </p>
          </div>
        </div>

        <div className={styles.statementBandHigh}>
          <p>
            <strong>A standalone desk with a perfect integration still has two permission models, two audit trails and two sources of truth. This has one of each.</strong>
          </p>
        </div>
      </section>

      {/* SECTION 6: CONFIDENTIALITY AND GRIEVANCES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The Sensitive Queue</span>
          <h2 className={styles.sectionTitle}>Some tickets must not be visible to the person's own manager</h2>
          <p className={styles.sectionLead}>
            A desk inside an HR system will receive grievances, POSH complaints and queries an employee does not want their reporting line to see. That is a design requirement, not an edge case.
          </p>
        </div>

        <div className={styles.sensitiveBox}>
          <div className={styles.sensitiveHeader}>
            <Lock size={24} color="#C07EF0" />
            <h3 className={styles.sensitiveTitle}>Granular isolation for statutory &amp; sensitive grievances</h3>
          </div>
          <p style={{ color: '#E2D9F3', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            When an employee raises a ticket under a sensitive category (e.g. POSH complaints, workplace harassment, or formal grievances against leadership), the platform applies strict isolation rules:
          </p>
          <div className={styles.grid3} style={{ marginTop: '1.5rem' }}>
            <div className={styles.card} style={{ background: 'rgba(16, 6, 28, 0.8)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Manager Visibility Excluded</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                The reporting manager and departmental hierarchy are strictly excluded from viewing the ticket, queue updates, and ticket history.
              </p>
            </div>
            <div className={styles.card} style={{ background: 'rgba(16, 6, 28, 0.8)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Dedicated Committee Intake</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Routes directly to designated roles — such as the POSH Internal Committee presiding officer or Head of IR — bypassing regular HR operations queues.
              </p>
            </div>
            <div className={styles.card} style={{ background: 'rgba(16, 6, 28, 0.8)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '0.5rem' }}>Isolated Search &amp; Audit</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Sensitive ticket content is excluded from general desk search indexes and operational dashboards, maintaining end-to-end confidentiality.
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#B3A1C9', marginTop: '1.5rem', fontStyle: 'italic', marginBottom: 0 }}>
            * Honest architectural boundary: The system authenticates the employee against their HR identity record. It does not provide unauthenticated anonymous intake. For whistleblower disclosures requiring full anonymity, dedicated third-party statutory whistleblower mechanisms should be used.
          </p>
        </div>
      </section>

      {/* SECTION 7: KNOWLEDGE BASE AND SELF-SERVICE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Deflection</span>
          <h2 className={styles.sectionTitle}>Contextual answers before a ticket is created</h2>
          <p className={styles.sectionLead}>
            The queries that reach your team should be the ones that need a person.
          </p>
        </div>

        <div className={styles.deflectionBox}>
          <p style={{ fontSize: '1.05rem', color: '#E2D9F3', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
            Articles surfaced at the point of raising a ticket deflect repetitive questions before submission — and because the desk sits in the HR tenant, an article can point directly at the employee's own record (e.g. state leave entitlement or PF UAN passbook) rather than offering a vague generic explanation.
          </p>
          <div className={styles.grid2} style={{ marginTop: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem' }}>Direct Record Linkage</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                An article explaining maternity benefit eligibility dynamically references the employee's tenure and applicable state Act, eliminating repetitive back-and-forth inquiries.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '0.5rem' }}>True Deflection Tracking</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Measures whether an employee abandoned ticket creation after reviewing a targeted article, distinguishing genuine resolution from unaddressed frustration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CHANNELS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>How Employees Reach It</span>
          <h2 className={styles.sectionTitle}>Meet the workforce where it already is</h2>
          <p className={styles.sectionLead}>
            Accessible channels ensure every tier of the workforce can raise queries without operational friction.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Smartphone size={22} />
            </div>
            <h3 className={styles.cardTitle}>Web &amp; Mobile Portal</h3>
            <p className={styles.cardDesc}>
              Fully responsive browser experience across desktop and mobile. No forced app downloads consuming worker phone storage.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Mail size={22} />
            </div>
            <h3 className={styles.cardTitle}>Email Inbound Intake</h3>
            <p className={styles.cardDesc}>
              Inbound emails to dedicated queue addresses automatically create tickets with full reply-threading back to the employee's inbox.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Users size={22} />
            </div>
            <h3 className={styles.cardTitle}>Supervisor On-Behalf Intake</h3>
            <p className={styles.cardDesc}>
              For deskless plant and site workers without email, site supervisors can raise requests on their behalf with complete identity audit trails.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Layers size={22} />
            </div>
            <h3 className={styles.cardTitle}>WhatsApp (Roadmap)</h3>
            <p className={styles.cardDesc}>
              Direct WhatsApp intake and status notification for blue-collar and facility workforces is currently in active testing on the near-term roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Honest Boundaries</span>
          <h2 className={styles.sectionTitle}>Honest limits on employee service desk</h2>
          <p className={styles.sectionLead}>
            Clear architectural boundaries prevent misaligned expectations and maintain operational trust.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>This is not IT service management</strong> — No asset discovery, no configuration management database (CMDB), no change or release management, and no incident–problem–change lifecycle. If your IT function needs ITSM, they need an ITSM product.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>This is not customer support</strong> — No external customer contacts, no multi-brand support portals, and no client-facing SLA contracts. This desk is strictly internal for employees.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>We will not match a dedicated desk on breadth</strong> — ServiceNow, Freshservice, and Zoho Desk have far more surface area, deeper third-party integration catalogues, and mature BI reporting. We compete on measurement honesty and being in the same database as the payslip — not on feature count.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>Reporting is operational, not analytical</strong> — Reports cover active queue volumes, working-time SLA attainment, ageing, and agent load with standard CSV export. We do not provide an embedded business intelligence or OLAP slice-and-dice layer.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No CSAT or satisfaction survey</strong> — We focus strictly on operational resolution and requester sign-off rather than subjective star-rating surveys.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No complex automation or workflow builder beyond routing</strong> — Assignment rules, dry-run simulation, WIP limits, and escalation matrices are purpose-built; we do not provide an open-ended Zapier-style workflow canvas.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>Native mobile apps are in progress</strong> — Accessible today via modern mobile-first web browsers. Native app store binaries are in active development.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>India only</strong> — Deliberately aligned with Indian statutory records, state establishment structures, and domestic workforce operations.</span>
            </li>
            <li className={styles.limitItem}>
              <span className={styles.limitIcon}>✕</span>
              <span><strong>No unauthenticated anonymous intake</strong> — Every ticket is linked to authenticated employee identity for statutory governance; third-party anonymous whistleblower lines should handle anonymous disclosures.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Direct answers to operational questions</h2>
          <p className={styles.sectionLead}>
            Everything HR and IT leaders ask when evaluating our internal employee service desk.
          </p>
        </div>

        <ServiceDeskFaq items={faqData} />
      </section>

      {/* SECTION 11: THE OFFER */}
      <section className={styles.section} style={{ paddingTop: '1rem' }}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>See it against the desk you already run.</h2>
          <p className={styles.offerLead}>
            Bring a week of your current desk's tickets to the demo — the categories, the volumes and the attainment figure you report. We will walk through how the same week would be measured here, including the tickets that would have been refused at creation and the hours that would not have counted against your SLA.
          </p>
          <p style={{ color: '#C07EF0', fontWeight: 600, marginBottom: '2.25rem' }}>
            It is a more useful comparison than a feature grid, and it usually changes what the attainment number means to you.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/platform/demo?module=service-desk&cta=servicedesk_bottom_demo&persona=hr&source=/products/service-desk" className="btn btn-primary btn-lg">
              Book a demo <ArrowRight size={18} />
            </Link>
            <Link href="/platform" className="btn btn-outline btn-lg">
              See the full platform
            </Link>
            <Link href="/trust" className={styles.tertiaryLink}>
              Read the trust centre →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad · Runs inside your HR tenant
        </div>
      </section>

      {/* Mobile Sticky CTA Bar */}
      <div className={styles.mobileStickyBar}>
        <Link href="/platform/demo?module=service-desk&cta=servicedesk_mobile_sticky&persona=hr&source=/products/service-desk" className={`btn btn-primary ${styles.mobileStickyBtn}`}>
          Book a demo <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
