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
  TrendingUp,
  Layers,
  HelpCircle,
  Briefcase,
  Scale
} from 'lucide-react';
import ProfitabilityFaq from './ProfitabilityFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Contract Profitability for Staffing and Facility Management Agencies | yfy®',
  description:
    'Margin by client, contract, site and service line — with the cost side computed from actual wages and employer statutory cost rather than a percentage assumption.',
  alternates: { canonical: '/products/agency-profitability' },
  keywords: [
    'contract profitability staffing agency',
    'manpower contract margin analysis',
    'facility management contract costing India',
    'security agency contract margin software',
    'statutory pass through reconciliation'
  ],
  openGraph: {
    title: 'Contract Profitability for Staffing and Facility Management Agencies | yfy®',
    description:
      'Margin by client, contract, site and service line — with the cost side computed from actual wages and employer statutory cost rather than a percentage assumption.',
    url: 'https://yfy.ai/products/agency-profitability',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contract Profitability for Staffing and Facility Management Agencies | yfy®',
    description: 'You know your margin. Do you know which contracts earn it?',
  },
};

const faqData = [
  {
    q: 'How is this different from a report out of Tally?',
    a: 'Your accounting system holds the billed revenue and none of the granular workforce cost attribution. It knows what you invoiced a client; it cannot tell you what the workers at that client’s third site were actually paid, what employer statutory cost they generated, or what overtime they worked. Both sides sitting on the same record is the difference.'
  },
  {
    q: 'Does this include our overheads?',
    a: 'No. This reports contribution margin against direct workforce cost — wages, employer statutory contributions, overtime, and client deductions. Head office, management, transport, and financing overheads are not allocated because we do not hold general ledger accounts. Your finance team or CA does that work.'
  },
  {
    q: 'How current is the number?',
    a: 'It follows the completed payroll and billing cycle for that contract, so a contract’s margin is current as of its last completed wage run. We do not claim real-time speculative margins mid-month before payroll and deductions close.'
  },
  {
    q: 'Can we export it?',
    a: 'Yes. All contract margin views, site breakdowns, and per-worker attribution lines can be exported directly to standard CSV or Excel files from the interface.'
  },
  {
    q: 'Can it tell us what rate to quote on a new bid?',
    a: 'It tells you what comparable existing contracts actually cost you at similar wage zones and skill mixes, providing the empirical baseline for your pricing decision rather than auto-generating quotes.'
  },
  {
    q: 'A state revised minimum wage. Will this tell us which contracts are now loss-making?',
    a: 'Yes. Because the statutory wage engine resolves the new floor per state, zone, and skill, affected contracts are surfaced with the cost delta computed per worker, enabling repricing conversations in the month the revision takes effect.'
  },
  {
    q: 'We have 40 clients and 300 sites. Is this usable at that scale?',
    a: 'Yes. The views are designed with multi-tier filters (by client group, branch, cluster, and site), allowing operations directors to drill down from high-level portfolio margins directly into specific plant sites without scrolling through 300 unorganized rows.'
  }
];

export default function AgencyProfitabilityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Agency Contract Profitability Analytics',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Direct contribution margin per contract computed from actual payroll wages, statutory additions, and client invoices off a single approved roster record.',
        serviceType: 'Contract Costing & Margin Analytics Software',
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
          You know your margin.<br />
          <span className="text-gradient">Do you know which contracts earn it?</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            In most manpower businesses the cost side is computed in payroll and the revenue side is raised in accounting, and the two are joined once a year by someone with a spreadsheet. Which means the blended number is knowable and the per-contract number is not.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            Here both come from the same approved roster day. Wages actually paid, employer statutory cost as computed, deductions as taken, against the invoice raised at that contract's rate card.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
            Get your compliance proof pack <ArrowRight size={18} />
          </Link>
          <Link href="/products/roster-site-muster" className="btn btn-outline btn-lg">
            See how the roster drives it
          </Link>
          <Link href="/platform/demo?module=agency-profitability&cta=profitability_header_demo&persona=agency&source=/products/agency-profitability" className={styles.tertiaryLink}>
            Book a demo →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · Costed from your own payroll, not from assumptions
          </span>
        </div>
      </header>

      {/* SECTION 2: WHY THE NUMBER IS USUALLY WRONG */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The Problem</span>
          <h2 className={styles.sectionTitle}>Three reasons your contract margin is an estimate</h2>
          <p className={styles.sectionLead}>
            Why traditional manpower financial reporting hides structural client losses.
          </p>
        </div>

        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <h3 className={styles.problemCardTitle}>1 · The cost side is assumed</h3>
            <p className={styles.problemCardDesc}>
              Employer statutory cost is applied as a flat percentage, because pulling the real figure per worker per contract is too much work by hand. The assumption is close on average and wrong on every individual contract.
            </p>
          </div>

          <div className={styles.problemCard}>
            <h3 className={styles.problemCardTitle}>2 · The revenue side is disconnected</h3>
            <p className={styles.problemCardDesc}>
              Invoices are raised in an accounting package from a figure assembled separately, so revenue cannot be joined back to the workers who generated it.
            </p>
          </div>

          <div className={styles.problemCard}>
            <h3 className={styles.problemCardTitle}>3 · The leaks are invisible</h3>
            <p className={styles.problemCardDesc}>
              Overtime, unfilled posts, client deductions and statutory pass-through gaps each move a contract's margin, and none of them appears as a line anyone reviews monthly.
            </p>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>A blended margin tells you the business is profitable. It does not tell you which client to renegotiate, which site is losing money, or which renewal to walk away from.</strong> Those are the three decisions that actually change the number.
          </p>
        </div>
      </section>

      {/* SECTION 3: COSTED FROM WHAT YOU ACTUALLY PAID */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Why this number is different</span>
          <h2 className={styles.sectionTitle}>The cost side is computed, not estimated</h2>
          <p className={styles.sectionLead}>
            Because payroll and billing read the same record, the cost attributed to a contract is what that contract's workers were actually paid — not a rate applied to a headcount.
          </p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Cost Component</th>
                <th style={{ width: '65%' }}>Attributed Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Wages</strong></td>
                <td>As paid, per worker, per day, at the client site worked.</td>
              </tr>
              <tr>
                <td><strong>Overtime and allowances</strong></td>
                <td>From the approved muster, computed at the applicable statutory multiplier.</td>
              </tr>
              <tr>
                <td><strong>Employer statutory cost</strong></td>
                <td>PF, ESI, LWF, and bonus as the payroll run computed them — not a flat percentage assumption.</td>
              </tr>
              <tr>
                <td><strong>Gratuity provisioning</strong></td>
                <td>As provisioned, with continuous service held against the worker rather than the deployment.</td>
              </tr>
              <tr>
                <td><strong>Deductions and credit notes</strong></td>
                <td>Attributed directly to the contract that took them.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBandHigh}>
          <p>
            <strong>A hard-coded employer PF rate overstated one real tenant by roughly seventeen times.</strong> That is why cost rates in this platform are derived from actual payroll rather than typed in as an assumption. A margin computed on an assumed statutory rate is a margin computed on a guess.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT YOU CAN SEE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The Views</span>
          <h2 className={styles.sectionTitle}>Margin, broken down the way you actually manage</h2>
          <p className={styles.sectionLead}>
            Granular dimensions computable directly from the underlying approved muster and billing records.
          </p>
        </div>

        <div className={styles.dimensionsList}>
          <div className={styles.dimensionItem}>
            <div className={styles.dimensionLabel}>By Client</div>
            <p className={styles.dimensionDesc}>The account-level commercial conversation across all facilities.</p>
          </div>
          <div className={styles.dimensionItem}>
            <div className={styles.dimensionLabel}>By Contract</div>
            <p className={styles.dimensionDesc}>Where annual renewals and rate card revisions actually happen.</p>
          </div>
          <div className={styles.dimensionItem}>
            <div className={styles.dimensionLabel}>By Site</div>
            <p className={styles.dimensionDesc}>One client, several plants — identifying the one losing money.</p>
          </div>
          <div className={styles.dimensionItem}>
            <div className={styles.dimensionLabel}>By Service Line</div>
            <p className={styles.dimensionDesc}>Guarding vs housekeeping margins under integrated contracts.</p>
          </div>
          <div className={styles.dimensionItem}>
            <div className={styles.dimensionLabel}>By Month</div>
            <p className={styles.dimensionDesc}>Historical margin trends and the exact month a wage change hit.</p>
          </div>
        </div>

        <p style={{ fontSize: '0.92rem', color: '#D1C5E2', lineHeight: 1.6 }}>
          <strong>Per-worker traceability:</strong> Every summary figure drills down to the underlying named workers, shifts, and invoice lines. All views support 1-click CSV and Excel export.
        </p>
      </section>

      {/* SECTION 5: FOUR LEAKS IT MAKES VISIBLE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Where margin goes</span>
          <h2 className={styles.sectionTitle}>All four are computable. None of them is currently visible to you monthly.</h2>
          <p className={styles.sectionLead}>
            Recovering profitability by exposing margin leakage before year-end accounts close.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Clock size={22} />
            </div>
            <h3 className={styles.cardTitle}>Overtime concentration</h3>
            <p className={styles.cardDesc}>
              Overtime is billed and paid, but its impact depends on your rate card multiplier versus statutory double overtime. Computed directly from site muster hours.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <AlertTriangle size={22} />
            </div>
            <h3 className={styles.cardTitle}>Unfilled posts</h3>
            <p className={styles.cardDesc}>
              A contracted headcount you did not fill is revenue not earned, plus potential SLA penalties. Shortfalls are measured against contractual commitments.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <DollarSign size={22} />
            </div>
            <h3 className={styles.cardTitle}>Client deductions</h3>
            <p className={styles.cardDesc}>
              Absenteeism and SLA deductions recorded against invoice lines with reasons. A contract with routine deductions is completely different from its rate card.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Pass-through gaps</h3>
            <p className={styles.cardDesc}>
              Where contracts pass through statutory costs, recovered amounts are reconciled against actual liabilities. Unbilled revisions are immediately flagged.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHEN A WAGE REVISION LANDS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The event that moves everything</span>
          <h2 className={styles.sectionTitle}>A minimum wage notification is a repricing event, not a payroll event</h2>
          <p className={styles.sectionLead}>
            How state statutory gazettes impact contract economics immediately.
          </p>
        </div>

        <div className={styles.revisionBox}>
          <p className={styles.revisionText}>
            A state revises its notified minimum wage. Your cost base moves immediately for every worker at every site in that state. Your client rate cards do not move at all.
          </p>
          <p className={styles.revisionText}>
            Because the wage engine resolves the applicable floor per state, zone and skill category, and because each contract's costs are attributed per site, the affected contracts are identified with the cost delta computed per worker — rather than discovered when the quarter closes.
          </p>
          <p className={styles.revisionText} style={{ fontWeight: 600, color: '#fff' }}>
            Whether you absorb it or take it to the client is a commercial decision. The point is making it in the month it happened, with a real number.
          </p>
        </div>
      </section>

      {/* SECTION 7: WHAT IT IS FOR */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Using it</span>
          <h2 className={styles.sectionTitle}>Three conversations this changes</h2>
          <p className={styles.sectionLead}>
            Direct operational utility for leadership.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Briefcase size={22} />
            </div>
            <h3 className={styles.cardTitle}>The renewal</h3>
            <p className={styles.cardDesc}>
              Entering a rate renegotiation knowing the contract's actual historical margin, including overtime and deductions, rather than your original quote assumption.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Building2 size={22} />
            </div>
            <h3 className={styles.cardTitle}>The unprofitable site</h3>
            <p className={styles.cardDesc}>
              One client, twelve facilities, and two of them structurally lose money because of shift patterns or a local wage zone. That is a site-level conversation, not an account loss.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Scale size={22} />
            </div>
            <h3 className={styles.cardTitle}>The bid you should not win</h3>
            <p className={styles.cardDesc}>
              Knowing what rate you can quote profitably at one location versus another because the minimum wage zone and skill mix differ. Knowing which is which before you bid.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHAT THIS IS NOT (HIGH TRUST BOUNDARIES) */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What this is not</h2>
          <p className={styles.sectionLead}>
            We state our operational boundaries plainly so you can evaluate the platform with confidence.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>This is not a business intelligence platform.</strong> No custom report builder, no drag-and-drop dashboards, and no cross-domain data modelling. It reports on your workforce, contracts, and invoices — nothing else.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>This is not a bid or quote pricing engine.</strong> It does not auto-generate tender bids. It provides the empirical cost history of comparable contracts as your decision input.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not do scenario modelling or what-if analysis.</strong> We compute what actually happened off approved records, not simulated futures.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not forecast margin.</strong> The figures represent completed operational runs, not future projections.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not benchmark you against the industry.</strong> We hold no cross-tenant dataset that would make such comparisons honest, and we will not manufacture synthetic benchmarks.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not include your overheads.</strong> Contract margin here is contribution against direct workforce cost. Office, management, transport, and financing overheads are not allocated because we do not hold them. Your accountant does that work.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>This is not an accounting system.</strong> No general ledger, no P&amp;L, no statutory reporting. We integrate with Zoho Books and Tally Prime to post invoice data.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>There is no AI layer here.</strong> This module computes; it does not interpret or speculate. We state that plainly rather than imply artificial intelligence that is not load-bearing.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Specifically built for Indian labour laws, minimum wage notifications, and statutory compliance.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Cost attribution, overheads and reporting answers</h2>
        </div>

        <ProfitabilityFaq items={faqData} />
      </section>

      {/* SECTION 10: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Reconcile one month and see the real number</h2>
          
          <p className={styles.offerLead}>
            Send one month: your deployed roster with client sites, that month's payroll register, one client invoice, and your PF and ESI challans. We reconcile billed days against paid days per client site, test wages against the notified floor for each site's state and skill, and show you the contribution position for that contract with the cost side computed rather than assumed.
          </p>

          <div className={styles.offerConditions}>
            Two weeks · under NDA · read-only · nothing installed, nothing migrated
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
              Get your compliance proof pack <ArrowRight size={18} />
            </Link>
            <Link href="/platform/demo?module=agency-profitability&cta=profitability_bottom_demo&persona=agency&source=/products/agency-profitability" className="btn btn-outline btn-lg">
              Book a live demo
            </Link>
            <Link href="/products/roster-site-muster" className={styles.tertiaryLink} style={{ alignSelf: 'center' }}>
              See how the roster drives it →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Statutory references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
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
