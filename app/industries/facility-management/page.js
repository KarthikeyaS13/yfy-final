import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  FileText, 
  FileCheck, 
  Coins, 
  Smartphone, 
  WifiOff, 
  Save, 
  UserCheck, 
  UserPlus, 
  Users, 
  LogOut, 
  Lock, 
  Eye, 
  Award, 
  XCircle,
  TrendingDown,
  Layers,
  Building,
  Check
} from 'lucide-react';
import FaqAccordion from './FaqAccordion';
import styles from './page.module.css';

export const metadata = {
  title: 'Compliance & Payroll Software for Facility Management and Security Agencies | yfy®',
  description:
    'PSARA licence tracking, minimum wage by skill and zone, roster-to-invoice off one approved muster, and client-ready compliance packs. Built for FM, housekeeping and security agencies operating at 3–5% margins.',
  alternates: { canonical: '/industries/facility-management' },
  keywords: [
    'PSARA compliance software',
    'Facility management payroll software India',
    'Security agency compliance software',
    'Contract labour licence tracking',
    'Manpower supply billing software',
    'Security services reverse charge GST Notification 29 2018',
    'Client compliance proof pack ECR challan'
  ],
  openGraph: {
    title: 'Compliance & Payroll Software for Facility Management and Security Agencies | yfy®',
    description:
      'PSARA licence tracking, minimum wage by skill and zone, roster-to-invoice off one approved muster, and client-ready compliance packs. Built for FM and security agencies at 3–5% margins.',
    url: 'https://yfy.ai/industries/facility-management',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compliance & Payroll Software for Facility Management and Security Agencies | yfy®',
    description: 'At 3% margin, compliance is not overhead. It is the bid.',
  },
};

const faqData = [
  {
    q: 'Does this replace our payroll software?',
    a: 'It can, and most agencies eventually consolidate — but it does not have to. The compliance and roster layer runs alongside what you use today. Start with one client contract in parallel and decide from there.'
  },
  {
    q: 'We run on Excel and Tally. How hard is the move?',
    a: "Send us one month you have already paid and billed. We re-compute it on our engine and report every figure where we disagree, writing nothing to anything live. If the numbers agree, you have a baseline. If they don't, you have found something worth knowing before you commit. Then go live on a single client or branch — a few hundred workers — in parallel with what you run today, and expand after two clean cycles."
  },
  {
    q: 'Our sites have poor connectivity. How does the muster actually work?',
    a: 'A link by SMS, no app install, marks saved on every tap, held on the device offline and synced when signal returns. Larger sites with biometric devices feed the same muster.'
  },
  {
    q: 'Can our clients see our data?',
    a: "Only what you grant, scoped to their own contract. A client given a window cannot reach another client's deployment, and that boundary is enforced at the platform rather than set as a configuration option. Your data sits in its own database schema, not in a shared table separated from another agency's records by a column."
  },
  {
    q: 'How does the statutory ceiling work when a worker moves between our clients mid-month?',
    a: 'The worker’s month is aggregated first. The statutory cap is applied once on that aggregate, then apportioned back across each client line in proportion. That is the calculation that leaks money when it is done per client line, and it is the single thing we would most like to show you on your own data.'
  },
  {
    q: 'How do you handle GST on our invoices?',
    a: (
      <div>
        <p style={{ margin: '0 0 0.75rem' }}>
          The invoicing engine applies your markup per contract and raises the invoice with attendance evidence attached, under either forward charge or reverse charge as configured per service line and client.
        </p>
        <p style={{ margin: '0 0 0.75rem' }}>
          That configuration matters more in this sector than most. Under Notification 29/2018-Central Tax (Rate), security services supplied by an agency that is not a body corporate to a registered client fall under reverse charge, while housekeeping and general manpower supply remain forward charge — so an integrated agency structured as a partnership can be reverse-charge on the guarding line and forward-charge on the housekeeping line of the same contract.
        </p>
        <p style={{ margin: 0 }}>
          We handle the mechanics. Which treatment applies to your constitution and your client mix is a question for your CA, and we will not pretend otherwise.
        </p>
      </div>
    )
  },
  {
    q: 'What about PSARA — do you file our licence applications?',
    a: 'No. We track the licence, its state, its expiry and the renewal obligation, and we hold the guard training and verification records against each person. The application itself stays with you or your consultant.'
  },
  {
    q: 'How is this priced?',
    a: 'Per deployed worker per month — from ₹20 per active worker — not per HR seat, because your cost driver is the number of people you have on client sites rather than the size of your back office. Volume tiers apply above 1,000 deployed workers. Billing starts at go-live, not at signature.'
  }
];

export default function FacilityManagementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Facility Management & Security Statutory Compliance Software',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'PSARA licence tracking, minimum wage by skill and zone, offline site muster, and automated client compliance proof packs for security and FM agencies.',
        serviceType: 'Statutory Workforce Compliance Software',
        areaServed: 'IN',
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqData.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: typeof f.a === 'string' ? f.a : 'See full guidance on GST reverse charge Notification 29/2018 for security personnel.',
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
          Facility Management &amp; Security
        </div>

        <h1 className={styles.title}>
          At 3% margin, compliance is not overhead.<br />
          <span className="text-gradient">It is the bid.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            Hundreds of client sites, a handful of people at each, twelve-hour shifts, high attrition, and minimum wage that changes by state, zone and skill category. You are the employer of record for every one of those workers — PF, ESI, PT, LWF, bonus and gratuity all sit with you. So does the invoice.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            yfy runs your roster, your payroll, your statutory position and your client billing off the same approved daily muster — and generates the compliance pack your enterprise clients keep asking for.
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
            Get your compliance proof pack <ArrowRight size={18} />
          </Link>
          <a href="#pack-contents" className="btn btn-outline btn-lg">
            See what's in the pack
          </a>
          <Link href="/platform/demo?module=client-billing-gst&cta=fm_header_architect&persona=agency&source=/industries/facility-management" className={styles.tertiaryLink}>
            Talk to someone who has done this →
          </Link>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019 · Billing starts at go-live, not at signature
          </span>
        </div>
      </header>

      {/* SECTION 2: THE LICENCE AND STATUTE STACK */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What applies to you</span>
          <h2 className={styles.sectionTitle}>Your licence stack is longer than your client's</h2>
          <p className={styles.sectionLead}>
            Your client holds one CLRA registration. You hold a licence for every one of their establishments, a PSARA licence in every state you guard in, and a minimum wage obligation that differs by district. Nobody else in the contracting chain carries this much paper.
          </p>
        </div>

        <div className={styles.statuteGrid}>
          {/* PSARA */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Private Security Agencies (Regulation) Act, 2005</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              A licence from each state's Controlling Authority. Prescribed training for guards and supervisors under that state's PSARA rules. Character and antecedent verification, through the police, for every person deployed.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              The licence is per state and time-bound. A lapse rarely stops today's operation — it stops the next tender, and it is the first document an enterprise client's procurement team asks for.
            </div>
          </div>

          {/* CLRA */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Contract Labour (Regulation &amp; Abolition) Act, 1970</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              A contractor licence tied to each principal employer establishment, plus wage registers, muster rolls and returns per establishment.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              Every new client site creates a new licence obligation. In most agencies this lives in one person's spreadsheet, and nobody knows what expires next month.
            </div>
          </div>

          {/* Minimum Wages Act */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Minimum Wages Act, 1948</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              The notified floor for that state, that zone, and that skill category — unskilled, semi-skilled, skilled. Security services and housekeeping are frequently separate scheduled employments with their own notified rates.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              This is not a compliance line item. It is your entire cost base, it is revised by notification without much warning, and a rate revision you priced a contract before is margin you have already lost.
            </div>
          </div>

          {/* Payment of Wages Act */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Payment of Wages Act, 1936</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              Deductions only of the kinds the Act permits, within the prescribed limits.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              Uniform, equipment, training and ID recoveries are routine in this sector and a routine source of inspection findings and worker disputes.
            </div>
          </div>

          {/* EPF & ESI */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>EPF &amp; MP Act, 1952 · ESI Act, 1948</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              Contributions and returns, per establishment code.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              Workers who move between client sites inside one month are where the contribution arithmetic goes wrong, in both directions.
            </div>
          </div>

          {/* Bonus & Gratuity */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Payment of Bonus Act, 1965 · Payment of Gratuity Act, 1972</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              Statutory bonus and gratuity provisioning.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              You carry both across a workforce with high churn and multi-site service, so the eligibility and continuity calculations are genuinely hard.
            </div>
          </div>

          {/* Weekly Off */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Weekly Off, National and Festival Holidays</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              Under the applicable state establishment act — several states have their own National and Festival Holidays legislation.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              Twelve-hour security shifts and continuous-cover contracts make weekly-off compliance a scheduling problem, not a policy problem.
            </div>
          </div>

          {/* POSH */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>POSH Act, 2013</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>What it requires</div>
              Internal committee, annual return, and training.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where agencies get caught</div>
              A largely female housekeeping workforce deployed at a client's premises sits in a genuinely awkward place between two employers' obligations. Worth having an answer ready.
            </div>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Almost every threshold above has been amended by one or more states.</strong> That is exactly why we resolve applicability per state, against that state’s deployments, rather than against a national headcount — and why we publish which jurisdictions we have loaded rather than claiming all of them.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHERE THE MONEY AND THE DAYS ACTUALLY GO */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The problem</span>
          <h2 className={styles.sectionTitle}>Five leaks, and four of them are invisible in a monthly total</h2>
          <p className={styles.sectionLead}>
            Where agency margin quietly drains between site supervisor muster and finance billing.
          </p>
        </div>

        <div className={styles.leakList}>
          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <AlertTriangle size={20} />
              The aggregate ceiling, split the wrong way
            </div>
            <div className={styles.leakDetail}>
              One guard at three client sites in a month, on three different rates. The statutory ceiling applies once, on the worker's aggregate for that month, and then apportions back across each client line. Computed per line instead — which is what a spreadsheet does — you either over-deduct from the worker or under-remit to the department. Both cost you, and neither shows up in a total.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <Clock size={20} />
              Attendance arrives late, so cash arrives late
            </div>
            <div className={styles.leakDetail}>
              Supervisors send sheets, photographs and phone calls. Someone keys them in. A three-day delay at site becomes a two-week delay on the invoice. On a 3% margin, working capital is the business.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <TrendingDown size={20} />
              Billed days drift from paid days
            </div>
            <div className={styles.leakDetail}>
              The two figures are calculated separately, from different sources, by different people. The gap is your margin, and it is usually discovered at year end when it is far too late to bill for it.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <FileText size={20} />
              Compliance proof rebuilt by hand, every time
            </div>
            <div className={styles.leakDetail}>
              A client asks for the pack. Someone spends three days assembling challans, registers and wage records. It is never quite complete, and an incomplete pack gives an enterprise client a defensible reason to hold a payment.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <ShieldCheck size={20} />
              Licences and verifications found lapsed by the client
            </div>
            <div className={styles.leakDetail}>
              PSARA renewals, guard training records and police verification discovered at an audit rather than tracked to an expiry date.
            </div>
          </div>
        </div>

        <div className={styles.closingLine}>
          Four of these five are symptoms of the same thing: attendance, payroll and billing are three records in your business instead of one.
        </div>
      </section>

      {/* SECTION 4: ONE APPROVED ROSTER DAY, FOUR OUTPUTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>How we are built</span>
          <h2 className={styles.sectionTitle}>Approve the day once. Everything downstream reads the same record.</h2>
          <p className={styles.sectionLead}>
            The roster-day spine: single-entry attendance guarantees that what was worked is what is paid, billed, and evidenced.
          </p>
        </div>

        <div className={styles.spineGrid}>
          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 1</span>
            <h3 className={styles.spineTitle}>Worker payroll</h3>
            <p className={styles.spineDesc}>
              Wages, overtime and lawful deductions for the person who actually stood at that site on that day.
            </p>
          </div>

          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 2</span>
            <h3 className={styles.spineTitle}>Statutory liability</h3>
            <p className={styles.spineDesc}>
              PF, ESI, PT, LWF, bonus and gratuity — all yours as employer of record, all computed from the same approved day.
            </p>
          </div>

          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 3</span>
            <h3 className={styles.spineTitle}>Client billing</h3>
            <p className={styles.spineDesc}>
              Billed days cannot drift from paid days, because they are the same row.
            </p>
          </div>

          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 4</span>
            <h3 className={styles.spineTitle}>GST invoice</h3>
            <p className={styles.spineDesc}>
              Your markup applied per contract, invoice raised with the attendance evidence already attached.
            </p>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>The arithmetic nobody gets right.</strong> Aggregate the worker's month across every client site. Apply the statutory cap once, on the total. Apportion the liability back to each client line. Every rupee traces to a day, a site and a client — which is the only version of this that survives both a client audit and an inspection.
          </p>
        </div>
      </section>

      {/* SECTION 5: SITE MUSTER */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Site muster</span>
          <h2 className={styles.sectionTitle}>The best attendance system is the one that gets used at 6am at a gate with one bar of signal</h2>
          <p className={styles.sectionLead}>
            Built specifically for distributed supervisors managing remote posts with low signal.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Smartphone size={22} />
            </div>
            <h3 className={styles.cardTitle}>No app to install</h3>
            <p className={styles.cardDesc}>
              A supervisor opens a link sent by SMS. No download, no app-store account, no IT ticket, no training session. For a workforce of a few people at each of two hundred sites, this is the difference between a system that works and one that gets abandoned in month two.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <WifiOff size={22} />
            </div>
            <h3 className={styles.cardTitle}>Works offline</h3>
            <p className={styles.cardDesc}>
              Marks are held on the device and sync when signal returns. A basement car park or a dead zone at a plant gate does not stop the muster.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Save size={22} />
            </div>
            <h3 className={styles.cardTitle}>Saves on every tap</h3>
            <p className={styles.cardDesc}>
              There is no submit button to forget. Each mark is stored as it is made, so a dropped connection loses nothing and nobody has to re-enter a shift.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <UserCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Cover and replacement in one tap</h3>
            <p className={styles.cardDesc}>
              When a guard does not show, the supervisor records who covered the place — on the spot, at the site, not reconstructed from memory at month end. That single behaviour is where most billed-versus-paid drift originates.
            </p>
          </div>
        </div>

        <div className={styles.footnote}>
          Geo-tagged, timestamped and tied to the site, so a man-day is evidenced rather than asserted — whether the question comes from your client or an inspector. Where you already have biometric devices at larger sites, those feed the same muster.
        </div>
      </section>

      {/* SECTION A4: CHURN AND THROUGHPUT */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The volume problem</span>
          <h2 className={styles.sectionTitle}>High churn is not a people problem you can fix. It is a throughput problem you can systemise.</h2>
          <p className={styles.sectionLead}>
            A two-thousand-worker agency may onboard and exit several hundred people a month. Each one is a joining record, a statutory enrolment, a uniform issue, a verification file, a site deployment and eventually a full and final settlement. Attrition in this sector is not going to fall. The cost of processing it can.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <UserPlus size={22} />
            </div>
            <h3 className={styles.cardTitle}>Bulk onboarding, entered once</h3>
            <p className={styles.cardDesc}>
              Joining records, PF and ESI enrolment data, bank details and identifiers captured once and reused everywhere downstream. Nobody re-keys a PAN into a second system, which is where most enrolment errors originate.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Building size={22} />
            </div>
            <h3 className={styles.cardTitle}>Deployment in batches, with the right wage</h3>
            <p className={styles.cardDesc}>
              Assign hundreds of workers to sites in one action, with each site's client contract, state, zone and skill category — and therefore the right minimum wage floor — attached automatically rather than selected by hand.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <ShieldCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>Verification &amp; training as a gate</h3>
            <p className={styles.cardDesc}>
              Where PSARA applies, a person without current antecedent verification or the prescribed training is visible before deployment rather than discovered at a client audit.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <LogOut size={22} />
            </div>
            <h3 className={styles.cardTitle}>Exit that settles itself</h3>
            <p className={styles.cardDesc}>
              Uniform, equipment and ID recovery ride an obligation ledger into full and final settlement, so an unreturned item becomes a lawful, recorded deduction rather than someone editing payroll by hand under time pressure.
            </p>
          </div>
        </div>

        <div className={styles.footnote}>
          Continuous service is held against the worker rather than the deployment, so a person who moves between three client sites over two years has one service history — which is what makes gratuity eligibility and bonus continuity correct rather than approximate.
        </div>
      </section>

      {/* SECTION 6: LICENCES, DOCUMENTS AND EXPIRY */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What you hold</span>
          <h2 className={styles.sectionTitle}>Every licence, every registration, every verification — with an expiry date attached</h2>
          <p className={styles.sectionLead}>
            The document that ends a tender is the one nobody knew had lapsed.
          </p>
        </div>

        <div className={styles.licenceGrid}>
          {[
            'PSARA licence, per state',
            'CLRA licence, per client establishment',
            'EPF registration',
            'ESI registration',
            'Professional tax registration',
            'Labour welfare fund registration',
            "Workmen's compensation / EC insurance",
            'Shops & Establishment registration per site',
            'Guard training records, per person',
            'Police / antecedent verification, per person',
            'Certificate of incorporation, GST, PAN',
            'Client contracts and rate cards'
          ].map((item, i) => (
            <div key={i} className={styles.licenceItem}>
              <CheckCircle2 size={18} className={styles.licenceCheck} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Per-state establishment codes matter more here than anywhere.</strong> EPF, ESI, LWF and CLRA licence numbers differ by state for the same agency — so a challan you produce for a Karnataka client has to be reconcilable to the workers deployed in Karnataka, under the right code. We hold them per state, not as one flat number on your company record.
          </p>
        </div>
      </section>

      {/* SECTION 7: THE COMMERCIAL EDGE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The commercial edge</span>
          <h2 className={styles.sectionTitle}>Your client's exposure is real. Being the agency that removes it is a pricing position.</h2>
          <p className={styles.sectionLead}>
            Under CLRA §21, EPF §8A and ESI §40, your principal employer becomes the payer of last resort for your defaults. Their board knows it. Their procurement team has been asked to reduce it. Most agencies experience that as an audit. It can be a differentiator instead.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>A generated monthly compliance pack</h3>
            <p className={styles.cardDesc}>
              ECR and ESI challans, wage registers, muster records and statutory evidence — packaged per client contract, produced rather than assembled. What currently takes three days becomes a download.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={22} />
            </div>
            <h3 className={styles.cardTitle}>A scoped client window</h3>
            <p className={styles.cardDesc}>
              Give your principal employer a read-only view of their own deployment: workers, attendance, statutory position. Their contract only, nothing else, ever. Enforced at the platform, not configured.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Award size={22} />
            </div>
            <h3 className={styles.cardTitle}>Your brand, not ours</h3>
            <p className={styles.cardDesc}>
              White-label the portal your clients see — your name, your domain, your branded documents. Four rendering planes: the application, PDF and spreadsheet output, email from your own sending domain, and custom domains with automatic TLS.
            </p>
          </div>
        </div>

        <div className={styles.closingLine} style={{ marginTop: '2rem' }}>
          An agency that can hand a client a live compliance view is no longer competing on rate. It is removing a risk from their balance sheet — and that is a conversation with procurement, not with purchasing.
        </div>

        {/* SUBSECTION A5: WHAT IS IN THE PACK */}
        <div className={styles.packBox} id="pack-contents">
          <div className={styles.packHeader}>
            <h3 className={styles.packTitle}>What your client receives, every month, per contract</h3>
            <p className={styles.packSubtitle}>The automated compliance evidence bundle that unlocks client payments.</p>
          </div>

          <div className={styles.packList}>
            {[
              {
                name: 'Wage register and wage slips for deployed workers',
                why: 'Evidence the notified statutory floor was met at their establishment, for their workers.'
              },
              {
                name: 'PF ECR and ESI monthly contribution filings',
                why: 'Proof the contributions covered their deployment specifically — not that you filed something for someone.'
              },
              {
                name: 'Challans and payment receipts',
                why: 'Held against the correct wage month. A bank statement is not evidence; an acknowledged return and stamped receipt are.'
              },
              {
                name: 'Attendance record per worker per day',
                why: 'Geo-tagged and timestamped, letting clients reconcile the days they were billed against an auditable record.'
              },
              {
                name: 'The CLRA register set for their establishment',
                why: 'Precisely what a statutory inspection at their premises will ask them to produce.'
              },
              {
                name: 'Licence and verification status for personnel',
                why: 'PSARA training certificates and police antecedent verification records, current as at the pack date.'
              },
              {
                name: 'Bonus and gratuity provisioning position',
                why: 'Increasingly requested by listed clients assessing their own residual exposure.'
              }
            ].map((pack, idx) => (
              <div key={idx} className={styles.packItem}>
                <div className={styles.packItemName}>
                  <Check size={16} color="#22D3A0" style={{ flexShrink: 0 }} />
                  {pack.name}
                </div>
                <div className={styles.packItemWhy}>{pack.why}</div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1.5rem', marginBottom: 0, fontSize: '0.92rem', color: '#C07EF0', fontWeight: 600 }}>
            Generated from the records the month already created. What currently takes three days and arrives incomplete becomes a download that is complete by construction.
          </p>
        </div>
      </section>

      {/* SECTION 8: WHICH LENS ARE YOU? */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>How this is set up</span>
          <h2 className={styles.sectionTitle}>Most FM agencies need one lens. Large ones need both.</h2>
          <p className={styles.sectionLead}>
            Configure the platform to match your operating model with zero custom engineering.
          </p>
        </div>

        <div className={styles.lensTableContainer}>
          <table className={styles.lensTable}>
            <thead>
              <tr>
                <th style={{ width: '40%' }}>Situation</th>
                <th style={{ width: '35%' }}>Lens</th>
                <th style={{ width: '25%' }}>Where to read more</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>You supply manpower to client sites</strong></td>
                <td>Supplier lens. Roster, payroll, statutory, billing, client proof.</td>
                <td>
                  <Link href="/for/staffing-agencies" style={{ color: 'var(--brand-xlight)', textDecoration: 'underline', fontWeight: 600 }}>
                    Staffing view →
                  </Link>
                </td>
              </tr>
              <tr>
                <td><strong>You sub-contract labour yourself</strong> — specialist trades, pest control, technical services</td>
                <td>Principal employer lens. You verify your sub-contractor's bill before you pay it, on the same platform.</td>
                <td>
                  <Link href="/for/principal-employers" style={{ color: 'var(--brand-xlight)', textDecoration: 'underline', fontWeight: 600 }}>
                    Principal employer view →
                  </Link>
                </td>
              </tr>
              <tr>
                <td><strong>Both</strong></td>
                <td>One tenant configuration field. Most integrated FM groups above ₹200 crore run both.</td>
                <td style={{ color: '#22D3A0', fontWeight: 600 }}>Ask us in the first call</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Commercial and operational answers</h2>
        </div>

        <FaqAccordion items={faqData} />
      </section>

      {/* SECTION 11: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Honest limits: What we do not do</h2>
          <p className={styles.sectionLead}>
            We state our operational boundaries clearly so expectations align before you sign an agreement.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We are not a CAFM or CMMS.</strong> Work orders, asset maintenance scheduling, helpdesk for building systems — not ours. We run the workforce, the statutory position and the billing.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not source or recruit.</strong> Onboarding through to deployment, payroll and billing, yes. Finding guards and housekeeping staff is your business and your channels.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>PSARA support means tracking, not filing.</strong> Licence expiry, training records, verification records. Not the government application itself.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not deliver training content.</strong> Course delivery and certificate evidence, yes — the curriculum is yours or your accredited training partner's.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Deliberately. The depth in state minimum wage, professional tax, labour welfare fund and CLRA exists because we did not spread across jurisdictions.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We have three ISO certifications and few public references.</strong> We would rather prove the engine on one month of your own roster and billing than show you someone else's logo.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 12: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>See what your clients would find — before they look</h2>
          
          <p className={styles.offerLead}>
            Send us one month: your deployed roster with client sites, that month's payroll register, one client invoice, and your PF and ESI challans. We reconcile them against the statute and show you exactly where the gaps are. Then we show you the pack you could be handing every client, every month, instead of building it by hand.
          </p>

          <div className={styles.offerDeliverables}>
            <div className={styles.deliverableItem}>
              <CheckCircle2 size={16} color="#22D3A0" style={{ flexShrink: 0 }} />
              <span>Roster-to-payroll reconciliation: paid days vs billed days per client site</span>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle2 size={16} color="#22D3A0" style={{ flexShrink: 0 }} />
              <span>Minimum wage compliance per site, state, zone and skill category</span>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle2 size={16} color="#22D3A0" style={{ flexShrink: 0 }} />
              <span>PF, ESI, PT and LWF checked against challans with aggregate-cap apportionment</span>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle2 size={16} color="#22D3A0" style={{ flexShrink: 0 }} />
              <span>Statutory bonus and gratuity provisioning position</span>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle2 size={16} color="#22D3A0" style={{ flexShrink: 0 }} />
              <span>A sample client-facing compliance pack for one of your contracts</span>
            </div>
          </div>
          
          <div className={styles.offerConditions}>
            Two weeks · under NDA · read-only. Nothing installed, nothing migrated, no workers moved.
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/compliance-proof-pack" className="btn btn-primary btn-lg">
              Get your compliance proof pack <ArrowRight size={18} />
            </Link>
            <Link href="/platform/demo?module=client-billing-gst&cta=fm_bottom_architect&persona=agency&source=/industries/facility-management" className="btn btn-outline btn-lg">
              Book a call with a statutory architect
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
