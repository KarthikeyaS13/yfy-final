import Link from 'next/link';
import { 
  ArrowRight, 
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
  Calendar, 
  ShieldCheck, 
  Zap, 
  DollarSign, 
  Building2, 
  FileSpreadsheet, 
  Percent, 
  Receipt, 
  Scale,
  CreditCard,
  AlertCircle
} from 'lucide-react';
import BillingGstFaq from './BillingGstFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Client Billing & GST for Manpower Supply and Security Agencies | yfy®',
  description:
    'Invoices generated from approved attendance with per-contract rate cards, forward and reverse charge per service line, multi-state place of supply, credit notes against client deductions, and per-contract profitability.',
  alternates: { canonical: '/products/client-billing-gst' },
  keywords: [
    'GST on manpower supply services',
    'reverse charge security services GST',
    'manpower supply billing software India',
    'facility management invoicing software',
    'credit note client deduction GST',
    'Notification 29 2018 RCM security services',
    'pure agent manpower supply GST'
  ],
  openGraph: {
    title: 'Client Billing & GST for Manpower Supply and Security Agencies | yfy®',
    description:
      'Invoices generated from approved attendance with per-contract rate cards, forward and reverse charge per service line, multi-state place of supply, credit notes against client deductions, and per-contract profitability.',
    url: 'https://yfy.ai/products/client-billing-gst',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Billing & GST for Manpower Supply and Security Agencies | yfy®',
    description: 'The invoice is the last step of payroll, not the first step of accounting.',
  },
};

const faqData = [
  {
    q: 'We invoice from Tally today. Does this replace it?',
    a: 'No. We generate the invoice from approved attendance and the contract’s rate card, and push the verified invoice data to your accounting system (Zoho Books, Tally Prime via XML/API bridge, or your ERP). Your general ledger stays where it is.'
  },
  {
    q: 'We supply guarding and housekeeping to the same client under one contract. Can the GST treatment differ per line?',
    a: 'Yes — treatment is applied per service line and per client rather than per company. That case is common for integrated operators structured as a partnership or LLP, where the guarding line falls under reverse charge (Notification 29/2018) while housekeeping remains forward charge on the same invoice.'
  },
  {
    q: 'Our client deducts every month for absenteeism. How is that handled?',
    a: 'Deductions are recorded against the invoice line with an explicit reason, and reconciled against the approved site muster. Accepted deductions generate an authorized credit note carrying the original invoice reference, ensuring your output GST is legally adjusted before the statutory annual deadline.'
  },
  {
    q: 'We have GST registrations in six states. Which one raises the invoice?',
    a: 'Registrations are held per state, and the client’s GSTIN is held per site or establishment. The engine evaluates place-of-supply rules per line item to determine whether to levy IGST or CGST + SGST from the corresponding state registration.'
  },
  {
    q: 'Is e-invoicing supported?',
    a: 'Yes. For agencies meeting the aggregate B2B turnover threshold, the billing engine generates the mandatory e-Invoice payload, acquires the Invoice Reference Number (IRN) and signed QR code via standard GST Suvidha Provider (GSP) APIs, and prints it directly on the final invoice PDF.'
  },
  {
    q: 'Several of our clients are PSUs who deduct GST TDS. Do you track that?',
    a: 'Yes. Section 51 GST TDS (2% on taxable contracts exceeding ₹2.5L) is tracked as a dedicated receivable line, matching client TDS certificates against your GST portal Electronic Cash Ledger.'
  },
  {
    q: 'Can our clients see the backing detail for an invoice?',
    a: 'Yes, if you grant it — a scoped read-only client window displays their specific deployment, approved muster, wage register, and statutory challan receipts. Backing evidence travels with the invoice, eliminating backup email trails.'
  },
  {
    q: 'How long from month-end to invoices raised?',
    a: 'Typically within 24 to 48 hours of muster approval. Because attendance is already verified at the gate daily, raising invoices is a 1-click batch operation rather than a two-week spreadsheet reconciliation.'
  }
];

export default function ClientBillingGstPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Client Billing & GST Invoicing for Staffing Agencies',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Attendance-driven client billing, rate card automation, forward and reverse charge GST determination, and credit-note deduction tracking for manpower and security agencies.',
        serviceType: 'Billing & Tax Invoicing Software',
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
          Staffing Operations
        </div>

        <h1 className={styles.title}>
          The invoice is the last step of payroll,<br />
          <span className="text-gradient">not the first step of accounting.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            Approved attendance already knows who worked, at which client site, on which day, in which state. The invoice should follow from that record — with your rate card applied, the right GST treatment for that service line and that client, and the attendance evidence attached.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            Instead, most agencies rebuild it. Days after payroll closed, in a different system, from a spreadsheet somebody assembled.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
            Get your compliance proof pack <ArrowRight size={18} />
          </Link>
          <Link href="/products/roster-site-muster" className="btn btn-outline btn-lg">
            See how the roster drives it
          </Link>
          <Link href="/platform/demo?module=client-billing-gst&cta=billing_header_demo&persona=agency&source=/products/client-billing-gst" className={styles.tertiaryLink}>
            Book a demo →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · Invoice generated from approved attendance · Billing starts at go-live
          </span>
        </div>
      </header>

      {/* SECTION 2: FROM APPROVED DAY TO RAISED INVOICE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The flow</span>
          <h2 className={styles.sectionTitle}>Four steps, one record</h2>
          <p className={styles.sectionLead}>
            A single contiguous data path from 6am gate muster to collections reconciliation.
          </p>
        </div>

        <div className={styles.flowGrid}>
          <div className={styles.flowCard}>
            <div className={styles.flowStepNum}>1</div>
            <h3 className={styles.flowTitle}>Approved Muster</h3>
            <p className={styles.flowDesc}>
              The day both sides stand behind — captured at the site gate, approved with a named supervisor timestamp.
            </p>
          </div>

          <div className={styles.flowCard}>
            <div className={styles.flowStepNum}>2</div>
            <h3 className={styles.flowTitle}>Worker Payroll</h3>
            <p className={styles.flowDesc}>
              What the worker was paid, and the statutory liability (PF, ESI, PT, LWF, bonus) that attached to the day.
            </p>
          </div>

          <div className={styles.flowCard}>
            <div className={styles.flowStepNum}>3</div>
            <h3 className={styles.flowTitle}>Client Invoice</h3>
            <p className={styles.flowDesc}>
              Billable days or units at that contract's rate card, with your agreed agency markup accurately applied.
            </p>
          </div>

          <div className={styles.flowCard}>
            <div className={styles.flowStepNum}>4</div>
            <h3 className={styles.flowTitle}>GST &amp; Collections</h3>
            <p className={styles.flowDesc}>
              The correct tax treatment for that service line and client, raised with evidence attached, tracked and aged.
            </p>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Billed days cannot drift from paid days, because they are the same row.</strong> Calculated separately — which is what happens when attendance lives in one place and invoicing in another — the two numbers diverge quietly, every month, in your client's favour more often than yours.
          </p>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#D1C5E2', lineHeight: 1.65 }}>
          The invoice carries the attendance evidence with it. That is not a nicety: an invoice a client can verify without asking you for backup is an invoice that gets approved in days rather than weeks.
        </p>

        <div style={{ marginTop: '1rem' }}>
          <Link href="/products/roster-site-muster" className={styles.tertiaryLink}>
            Explore Roster &amp; Site Muster capture →
          </Link>
        </div>
      </section>

      {/* SECTION 3: THE INVOICE, BUILT FROM THE CONTRACT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Billing</span>
          <h2 className={styles.sectionTitle}>Every client bills differently. That should be configuration, not re-keying.</h2>
          <p className={styles.sectionLead}>
            Contract terms configure into the billing engine once, eliminating month-end Excel calculations.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Receipt size={22} />
            </div>
            <h3 className={styles.cardTitle}>Per-contract rate cards</h3>
            <p className={styles.cardDesc}>
              Rates by skill category, shift, and site. Overtime multipliers and statutory pass-through provisions held against the contract and versioned.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Percent size={22} />
            </div>
            <h3 className={styles.cardTitle}>Supported markup models</h3>
            <p className={styles.cardDesc}>
              Percentage on cost, fixed fee per deployed head, per man-day billing, or fixed monthly lump-sum service management charges.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Building2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>Consolidated or split</h3>
            <p className={styles.cardDesc}>
              One client, multiple sites, multiple service lines (housekeeping, technical, security) — billed as one consolidated invoice or separate bills.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <DollarSign size={22} />
            </div>
            <h3 className={styles.cardTitle}>Computed statutory cost</h3>
            <p className={styles.cardDesc}>
              Where contracts pass through employer PF, ESI, and bonus, invoices use the exact figures produced by payroll, not rough percentage estimates.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Contract metadata tracked:</strong> Billing cut-off dates, credit periods, minimum headcount SLA thresholds, escalation clauses, and retention deposit terms.
        </p>
      </section>

      {/* SECTION 4: GST FOR MANPOWER SUPPLY */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The part nobody writes about</span>
          <h2 className={styles.sectionTitle}>Four GST questions specific to your business</h2>
          <p className={styles.sectionLead}>
            Manpower and security services have mechanics most accounting software treats generically. Getting them wrong creates client disputes, credit problems and, in one common case, an exposure that compounds quietly for years.
          </p>
        </div>

        <div className={styles.gstGrid}>
          {/* 4.1 RCM vs FCM */}
          <div className={styles.gstCard}>
            <div className={styles.gstCardHeader}>
              <h3 className={styles.gstCardTitle}>4.1 Forward charge or reverse charge — and it can be both on one client</h3>
              <span className={styles.gstBadge}>Notification 29/2018</span>
            </div>
            <div className={styles.gstCardBody}>
              <p>
                <strong>Security services</strong> (supply of security personnel) supplied by a person <strong>other than a body corporate</strong> (partnership, LLP, or sole proprietorship) to a registered person fall under <strong>reverse charge (RCM)</strong>. Where the agency is a body corporate (Pvt Ltd / Ltd), forward charge applies as normal.
              </p>
              <p>
                <strong>Housekeeping, soft services, and general manpower supply remain forward charge (FCM)</strong> regardless of the supplier’s entity constitution.
              </p>
              <div className={styles.gstHighlightBox}>
                <strong>Which produces the case that catches integrated operators:</strong> An agency structured as an LLP or partnership, supplying guarding <em>and</em> housekeeping to the same corporate client, is <strong>reverse charge on the guarding line and forward charge on the housekeeping line of the same relationship.</strong>
              </div>
              <p>
                The yfy billing engine applies the tax treatment per service line and per client, rather than globally per company.
              </p>
            </div>
          </div>

          {/* 4.2 Pure Agent */}
          <div className={styles.gstCard}>
            <div className={styles.gstCardHeader}>
              <h3 className={styles.gstCardTitle}>4.2 The pure-agent question</h3>
              <span className={styles.badgeGold}>High Audit Risk</span>
            </div>
            <div className={styles.gstCardBody}>
              <p>
                Some agencies attempt to invoice GST strictly on their agency service charge, treating the salary and statutory component as a reimbursement under pure-agent rules.
              </p>
              <p>
                The established position under GST law is that this does not hold for manpower supply. Because the staffing agency is the <strong>employer of record</strong> and is itself legally liable to pay its workers, the pure-agent test fails (pure-agent requires the recipient to be the party liable to the third party). Consequently, GST applies to the <strong>gross consideration including wages</strong>, not to the margin alone.
              </p>
              <div className={styles.gstHighlightBox}>
                <strong>Our operational discipline:</strong> We are not your tax adviser and this is not legal advice. What we do is compute the invoice on the basis you configure, and make the statutory basis explicit on the document rather than implicit in a spreadsheet — so if questioned in an audit, your basis is completely transparent.
              </div>
            </div>
          </div>

          {/* 4.3 Place of Supply */}
          <div className={styles.gstCard}>
            <div className={styles.gstCardHeader}>
              <h3 className={styles.gstCardTitle}>4.3 Place of supply when operating across states</h3>
              <span className={styles.badgeViolet}>Multi-State Architecture</span>
            </div>
            <div className={styles.gstCardBody}>
              <p>
                Your registered office is in one state. Your client’s operational facility is in another. Their billing GSTIN may be in a third state.
              </p>
              <p>
                For manpower services supplied to a registered person, place of supply is generally the location of the recipient — which dictates whether an invoice carries IGST or CGST + SGST, and which of your state GSTINs must raise the bill.
              </p>
              <p>
                yfy holds multiple GST registrations per tenant and resolves the correct state GSTIN and tax heads (IGST vs CGST/SGST) per invoice line automatically.
              </p>
            </div>
          </div>

          {/* 4.4 e-Invoicing & TDS */}
          <div className={styles.gstCard}>
            <div className={styles.gstCardHeader}>
              <h3 className={styles.gstCardTitle}>4.4 e-invoicing and government TDS</h3>
              <span className={styles.badgeViolet}>IRP &amp; Section 51</span>
            </div>
            <div className={styles.gstCardBody}>
              <p>
                <strong>e-invoicing:</strong> For agencies exceeding the notified aggregate B2B turnover threshold, invoices require an Invoice Reference Number (IRN) and signed QR code generated via the Invoice Registration Portal (IRP). Built-in GSP API workflows generate IRNs seamlessly.
              </p>
              <p>
                <strong>GST TDS:</strong> Government departments, PSUs, and public sector bodies deduct 2% tax at source under Section 51 on contracts exceeding ₹2.5 Lakhs. yfy tracks GST TDS deductions as a separate ledger line, reconciling certificates against your Electronic Cash Ledger.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.statementBandHigh}>
          <p>
            <strong>We handle the mechanics. Which treatment applies to your constitution, your client mix and your contract terms is a question for your CA — and we will say so on the page rather than let you assume otherwise.</strong>
          </p>
        </div>
      </section>

      {/* SECTION 5: WHEN THE CLIENT SHORT-PAYS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The monthly argument</span>
          <h2 className={styles.sectionTitle}>Deductions, credit notes, and a deadline most agencies miss</h2>
          <p className={styles.sectionLead}>
            Clients deduct for absenteeism, unfilled shifts, or SLA claims. That creates a statutory GST problem that compounds quietly for years.
          </p>
        </div>

        <div className={styles.warningBox}>
          <div className={styles.warningTitle}>
            <AlertCircle size={18} />
            The Credit-Note Statutory Deadline (Section 34)
          </div>
          <p className={styles.warningText}>
            If a client deduction is accepted and invoice value reduces, the output GST already declared on the original invoice is overstated. Correcting it requires a <strong>credit note issued within the statutory window</strong> (up to 30th November following the end of the financial year). Past that deadline, the commercial deduction stands, but the GST adjustment is forfeited. <strong>You have paid tax on revenue you never received, permanently.</strong>
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Deduction Control</th>
                <th style={{ width: '65%' }}>How the Billing Engine Manages It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Deductions recorded against invoice lines</strong></td>
                <td>Never netted off as an untracked bank payment difference; the deduction amount and reason stay visible on the ledger.</td>
              </tr>
              <tr>
                <td><strong>Reasons tied to the underlying record</strong></td>
                <td>An absenteeism deduction reconciles against the site muster; an SLA deduction reconciles against contract headcount terms.</td>
              </tr>
              <tr>
                <td><strong>Credit notes generated from deductions</strong></td>
                <td>Carries the original tax invoice number, date, and HSN code to satisfy Section 34 compliance.</td>
              </tr>
              <tr>
                <td><strong>Ageing against the statutory window</strong></td>
                <td>Surfaces accepted deductions nearing the annual deadline so credit notes are issued before tax write-offs become permanent.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
          <strong>Disputed deductions:</strong> Retained as &quot;Disputed&quot; in aging reports rather than accepted, clearly distinguishing slow payers from unrecoverable billing disputes.
        </p>
      </section>

      {/* SECTION 6: RECEIVABLES YOU CAN SEE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Cash &amp; Collections</span>
          <h2 className={styles.sectionTitle}>On a three per cent margin, collections is not an admin function</h2>
          <p className={styles.sectionLead}>
            Protecting thin agency operating margins by identifying exactly where and why invoices are held up.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Ageing by contract &amp; site</h3>
            <p className={styles.cardDesc}>
              Clear visibility of what is raised, what is client-approved, what is overdue, and exactly how many days it has aged.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <AlertTriangle size={22} />
            </div>
            <h3 className={styles.cardTitle}>Why an invoice is stuck</h3>
            <p className={styles.cardDesc}>
              Categorizes bottlenecks: unapproved by client, disputed on days, disputed on rate card, short-paid, or approved and delayed.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Compliance pack dependency</h3>
            <p className={styles.cardDesc}>
              Highlights invoices where enterprise clients are legally withholding payment pending monthly PF/ESI challans.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Lock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Retention deposits tracked</h3>
            <p className={styles.cardDesc}>
              Monitors security deposits and contractual retention money so funds are not misclassified as overdue receivables.
            </p>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>An invoice a client can verify without asking you for backup gets approved faster.</strong> The attendance evidence travels with the invoice, which removes the most common reason a manpower invoice sits in someone's queue.
          </p>
        </div>
      </section>

      {/* SECTION 7: PER-CONTRACT PROFITABILITY */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The answer you do not currently have</span>
          <h2 className={styles.sectionTitle}>Which contracts are actually making money</h2>
          <p className={styles.sectionLead}>
            Most agencies know their gross margin across the business, but cannot pinpoint which client contracts are subsidizing loss-making ones.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Cost Component</th>
                <th style={{ width: '65%' }}>How yfy Derives True Contract Margins</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Wages actually paid</strong></td>
                <td>Derived per worker, per site, per day from the approved muster and payroll register.</td>
              </tr>
              <tr>
                <td><strong>Employer statutory cost</strong></td>
                <td>Actual PF, ESI, LWF, and bonus liabilities as computed by payroll — never flat percentage estimates.</td>
              </tr>
              <tr>
                <td><strong>Overtime and allowances</strong></td>
                <td>Directly pulled from the approved shift muster records.</td>
              </tr>
              <tr>
                <td><strong>Deductions &amp; credit notes</strong></td>
                <td>Mapped directly against the specific client contract that incurred them.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.95rem', color: '#D1C5E2', lineHeight: 1.65 }}>
          Know your net margins by client, site, service line, and month. Instantly spot which contracts a state minimum wage revision just pushed into loss, before you sign a renewal.
        </p>

        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <Link href="/products/profitability" className={styles.tertiaryLink}>
            Explore Agency Profitability Analytics →
          </Link>
        </div>
      </section>

      {/* SECTION 8: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Honest limits: What we do not do</h2>
          <p className={styles.sectionLead}>
            We define the boundaries of our billing engine clearly.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We are not an accounting system.</strong> No general ledger, no trial balance, no balance sheet reporting. We generate the invoice, tax schedule, and receivables ledger; your core books remain in Tally, Zoho Books, or your ERP.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not file your GST returns.</strong> We produce the GSTR-1 ready invoice data and sales registers. Return submission remains with your in-house tax team or CA.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not give tax advice.</strong> The reverse charge, pure agent, and place-of-supply positions detailed here represent our understanding of the statute. Always confirm treatments with your tax counsel.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not chase your money.</strong> We provide aging dashboards, dispute tracking, and automated reminder templates. We do not operate a manual collections calling service.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Specifically built for Indian GST regulations, state minimum wage notifications, and statutory compliance.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Invoicing, tax mechanics &amp; collections answers</h2>
        </div>

        <BillingGstFaq items={faqData} />
      </section>

      {/* SECTION 10: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Reconcile one month, both sides</h2>
          
          <p className={styles.offerLead}>
            Send one month: your deployed roster with client sites, that month's payroll register, one client invoice, and your PF and ESI challans. We reconcile billed days against paid days per client site, test wages against the notified floor for each site's state and skill, and show you where the two sides diverge. Plus a sample client-facing compliance pack for one contract.
          </p>

          <div className={styles.offerConditions}>
            Two weeks · under NDA · read-only · nothing installed, nothing migrated
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
              Get your compliance proof pack <ArrowRight size={18} />
            </Link>
            <Link href="/platform/demo?module=client-billing-gst&cta=billing_bottom_demo&persona=agency&source=/products/client-billing-gst" className="btn btn-outline btn-lg">
              Book a live demo
            </Link>
            <Link href="/products/roster-site-muster" className={styles.tertiaryLink} style={{ alignSelf: 'center' }}>
              See how the roster drives it →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Tax references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

      {/* MOBILE STICKY CTA BAR (< 768px) */}
      <div className={styles.mobileStickyBar}>
        <Link href="/compliance-proof-pack" className={`btn btn-primary btn-md ${styles.mobileStickyBtn}`}>
          Get Compliance Proof Pack <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
