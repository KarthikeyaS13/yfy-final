import Link from 'next/link';
import { 
  ArrowRight, 
  Truck, 
  Layers, 
  Clock, 
  AlertTriangle, 
  FileText, 
  FileCheck, 
  Coins, 
  UserPlus, 
  Calendar, 
  ShieldCheck, 
  Lock, 
  Eye, 
  XCircle, 
  MapPin, 
  Check, 
  ChevronRight,
  TrendingDown,
  Warehouse,
  TrendingUp,
  Package
} from 'lucide-react';
import LensSelector from './LensSelector';
import LogisticsFaq from './LogisticsFaq';
import styles from './page.module.css';

export const metadata = {
  title: 'Workforce & Statutory Compliance for Logistics, 3PL and Warehousing in India | yfy®',
  description:
    'Piece-rate pay tested against minimum wage floors, Motor Transport Workers and inter-state migrant registers, seasonal applicability ratchets, and contractor bill verification across every hub and state.',
  alternates: { canonical: '/industries/logistics' },
  keywords: [
    'Motor Transport Workers Act compliance software',
    'Inter-state migrant workmen register software',
    'Warehouse contract labour compliance India',
    '3PL compliance audit pack',
    'Piece rate minimum wage compliance India',
    'CLRA section 21 principal employer logistics',
    'Code on Social Security gig platform worker contribution'
  ],
  openGraph: {
    title: 'Workforce & Statutory Compliance for Logistics, 3PL and Warehousing in India | yfy®',
    description:
      'Piece-rate pay tested against minimum wage floors, Motor Transport Workers and inter-state migrant registers, seasonal applicability ratchets, and contractor bill verification across every hub and state.',
    url: 'https://yfy.ai/industries/logistics',
    siteName: 'yfy.ai',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workforce & Statutory Compliance for Logistics, 3PL and Warehousing in India | yfy®',
    description: 'Your headcount doubles in October. Your statutory position has to keep up.',
  },
};

const faqData = [
  {
    q: 'We already run SAP and an HRMS. Are you asking us to replace them?',
    a: 'No. The contract labour and statutory layer is licensed separately and runs alongside whatever pays your own staff and whatever runs your warehouse. Most logistics operators keep both and add the compliance and verification layer, because that is the part neither system was built for. If you eventually consolidate payroll onto us, that is a later decision, not a condition.'
  },
  {
    q: 'Our pickers are on a per-parcel rate. How do you know whether that breaches minimum wage?',
    a: 'Earnings are computed as your rate card specifies, then tested against the notified time-rate floor for that hub’s state, zone and skill category, per worker per period. Where the piece-rate total falls short, the gap is named and the top-up computed. A rate that is safe in one state can breach in another, so the test runs per hub, not per company.'
  },
  {
    q: 'Our drivers are managed by operations, not HR. Can you handle them?',
    a: 'Yes, and it is usually where we find the most. The Motor Transport Workers Act register set, hours and rest records and medical fitness certificate expiry are held in the same evidence vault as everything else, so a transport undertaking inspection is answered from one place.'
  },
  {
    q: 'We ramp from 1,200 to 2,600 people for the festive quarter. What actually changes?',
    a: 'Bulk onboarding with statutory enrolment captured once, batch deployment with each hub’s jurisdiction and wage floor attached automatically, and — the part most systems get wrong — an applicability ratchet so obligations you acquired at peak stay in force until they legally lapse rather than disappearing when headcount falls.'
  },
  {
    q: 'Do you handle inter-state migrant workmen obligations?',
    a: 'Yes: the ISMW register set, passbook records, and displacement and journey allowance computation with payment evidence held against each workman. This is the most commonly missed obligation in hub operations, usually because nobody established the Act applied in the first place. The applicability engine raises it.'
  },
  {
    q: 'Our warehouse does repacking. Are we a factory?',
    a: 'That depends on whether the activity at your site constitutes a manufacturing process, and it is a question worth settling with your labour law adviser rather than assuming. What we do is hold the classification you register under and apply the corresponding obligations consistently — and flag where a site’s declared activity and its registration look inconsistent, so the question gets asked before an inspector asks it.'
  },
  {
    q: 'Can our clients see other clients’ data?',
    a: 'No. A client granted a window sees their own deployment and nothing else, enforced at the platform rather than configured. Your data sits in its own database schema, not in a shared table separated from another operator’s records by a column.'
  },
  {
    q: 'What about gig and platform workers in our last mile?',
    a: 'The Code on Social Security introduces a separate aggregator obligation for platform workers with its own contribution basis (1% to 2% of turnover, capped at 5% of payments to workers). We compute and evidence the statutory position and contribution registers; we do not run your dispatch or routing engine.'
  },
  {
    q: 'How is this priced?',
    a: 'For logistics operations, pricing aligns directly with how you deploy: your direct payroll staff are billed on standard payroll tiers (from ₹75/user/mo), third-party contract workers at your hubs are metered strictly on active verified headcount under compliance spend (from ₹20/contract worker/mo), and if you supply manpower into client facilities, billing is metered per active deployed head. You never pay software user seat prices for transient warehouse crews.'
  }
];

export default function LogisticsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Logistics & 3PL Statutory Workforce Compliance Software',
        provider: {
          '@type': 'Organization',
          name: 'yfy.ai (Finnovo Tech Functional Pvt Ltd)',
          url: 'https://yfy.ai',
        },
        description:
          'Motor Transport Workers Act compliance, piece-rate minimum wage floor testing, inter-state migrant registers, and festive ramp compliance ratchets for 3PL and warehouse operators.',
        serviceType: 'Logistics Statutory Compliance Software',
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
          Logistics &amp; Warehousing
        </div>

        <h1 className={styles.title}>
          Your headcount doubles in October.<br />
          <span className="text-gradient">Your statutory position has to keep up.</span>
        </h1>

        <div className={styles.lead}>
          <p style={{ marginBottom: '1.25rem' }}>
            Festive ramps and quarter-end surges. Pickers on piece rates and drivers under a different act entirely. Workers who cross state lines to reach a hub. E-commerce and retail clients who audit their 3PLs — usually in the quarter you have least capacity to answer.
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Volume is the part your operation already handles. Jurisdiction and evidence are the parts that break.
          </p>
          <p style={{ margin: 0, fontWeight: 500, color: '#E2D9F3' }}>
            yfy runs roster to payroll to statutory to client billing off one approved record, and holds the proof each of those obligations demands. <strong>It sits alongside your existing ERP, WMS or HRMS — there is nothing to rip out.</strong>
          </p>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/exposure-report" className="btn btn-primary btn-lg">
            Test it on a peak month <ArrowRight size={18} />
          </Link>
          <Link href="/tools/exposure-calculator" className="btn btn-outline btn-lg">
            Model your exposure
          </Link>
          <a href="#lens-section" className={styles.tertiaryLink}>
            Which lens are we? →
          </a>
        </div>

        <div>
          <span className={styles.trustStrip}>
            Finnovo Tech Functional Pvt Ltd · Hyderabad · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019 · Billing starts at go-live, not at signature
          </span>
        </div>
      </header>

      {/* SECTION 2: FOUR WORKFORCES, FOUR RULEBOOKS, ONE OPERATION */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What applies to you</span>
          <h2 className={styles.sectionTitle}>Your warehouse compliance does not cover your fleet</h2>
          <p className={styles.sectionLead}>
            Most logistics operators are compliant at the hub and exposed everywhere else. Pickers, drivers, migrant workers and platform workers are governed by four different rulebooks, and a single headcount figure evaluated against a single threshold gets at least two of them wrong.
          </p>
        </div>

        <div className={styles.statuteGrid}>
          {/* MTW Act */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Motor Transport Workers Act, 1961</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Who it covers</div>
              Drivers, conductors, cleaners, station staff and other motor transport workers. Applies to undertakings employing <strong>5 or more</strong> such workers.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where operators get caught</div>
              Registration, a separate register set, hours and rest interval limits, medical fitness certificates, uniforms and first-aid provision. The fleet is usually managed by operations, and none of this reaches the HR system. It is the most common blind spot in the sector.
            </div>
          </div>

          {/* ISMW Act */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Inter-State Migrant Workmen Act, 1979</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Who it covers</div>
              Inter-state migrant workmen. Applies from <strong>5 workmen</strong>.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where operators get caught</div>
              Registration, contractor licence, <strong>displacement allowance</strong>, <strong>journey allowance and return fare</strong>, a passbook per workman, and prescribed registers. Hub workforces are frequently recruited across state lines through contractors, and the ISMW obligations are missed almost as a rule.
            </div>
          </div>

          {/* Minimum Wages Act */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Minimum Wages Act, 1948</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Who it covers</div>
              Everyone, including workers paid by piece, by parcel or by trip.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where operators get caught</div>
              <strong>Piece-rate earnings must not fall below the notified time-rate floor</strong> for that state, zone and skill category. A per-parcel rate that clears the floor in one state breaches it in another, and breaches in any state during a slow week. It is a per-worker, per-period shortfall that is invisible in every total you look at.
            </div>
          </div>

          {/* Factories Act vs Shops & Est */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Factories Act, 1948 or state Shops &amp; Establishment Act</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Who it covers</div>
              Depends on what actually happens at the site.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where operators get caught</div>
              A warehouse that repacks, relabels, kits or otherwise alters goods may be carrying out a &quot;manufacturing process&quot; and fall under the Factories Act rather than Shops &amp; Establishment. Fulfilment centres do this routinely. Register the site under the wrong act and every downstream obligation inherits the error.
            </div>
          </div>

          {/* CLRA */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Contract Labour (Regulation &amp; Abolition) Act, 1970</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Who it covers</div>
              Contract workers engaged, per establishment.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where operators get caught</div>
              Most hubs run substantially on contract labour, the base threshold is 20, and several states have amended it. Evaluated against a national figure instead of that state's deployments, the answer is wrong in both directions.
            </div>
          </div>

          {/* Social Security Code: Gig Workers */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Code on Social Security, 2020 — gig and platform workers</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Who it covers</div>
              Aggregators and the platform workers engaged through them.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where operators get caught</div>
              If any part of your last mile runs on platform workers, this is a separate obligation with its own contribution basis — a percentage of turnover, subject to a cap expressed against payments made to those workers. It is new, and almost nobody has operationalised it.
            </div>
          </div>

          {/* Women Night Shifts */}
          <div className={styles.statuteCard}>
            <div className={styles.statuteName}>Women workers on night shifts</div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Who it covers</div>
              Female workers between the prescribed night hours.
            </div>
            <div className={styles.statuteCol}>
              <div className={styles.statuteColLabel}>Where operators get caught</div>
              Permitted in most states only under specific exemption conditions — transport, minimum numbers on shift, consent, facilities. Peak-season night shifts in fulfilment centres run straight into this, state by state.
            </div>
          </div>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Seasonal is where ratchets matter.</strong> Statutory applicability generally does not reverse — once you cross a threshold you remain covered even after the peak passes. We evaluate against the higher of live and declared headcount and hold coverage once crossed, because the alternative is a system that quietly drops in January the obligations you acquired in October.
          </p>
        </div>

        <div className={styles.reviewNoteSmall}>
          Statutory references reviewed: September 2026. Thresholds, notified rates and state amendments change by notification. Nothing here is legal advice.
        </div>
      </section>

      {/* SECTION 3: WHERE IT BREAKS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The problem</span>
          <h2 className={styles.sectionTitle}>Six failure modes, and five of them survive an audit of your totals</h2>
          <p className={styles.sectionLead}>
            The statutory vulnerabilities that pass invoice matching and surface only during regulatory inspections or client audits.
          </p>
        </div>

        <div className={styles.leakList}>
          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <AlertTriangle size={20} />
              Piece rate below the floor
            </div>
            <div className={styles.leakDetail}>
              A per-parcel or per-trip rate produces earnings that fall under the notified minimum wage in a slow week, or in a higher-wage zone, or for a worker classified at a skill level the rate was never designed for. It is a shortfall per worker per period, and no invoice total, payroll summary or client report shows it.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <TrendingDown size={20} />
              Ramp-down drops obligations you still hold
            </div>
            <div className={styles.leakDetail}>
              Headcount falls after the peak and a naive threshold engine un-applies statutes that legally remain in force. The system reports clean. You are not.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <Truck size={20} />
              The fleet is invisible to HR
            </div>
            <div className={styles.leakDetail}>
              Drivers sit with operations. Motor Transport Workers registers, hours limits and medical fitness certificates live in a folder at a transport office, if they exist at all — and they are the first thing a labour inspector asks a transport undertaking for.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <MapPin size={20} />
              Migrant obligations never triggered
            </div>
            <div className={styles.leakDetail}>
              Contract workers recruited from another state are engaged, deployed and paid without displacement allowance, journey allowance, a passbook or an ISMW register — usually because nobody established that the ISMW Act applied.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <Warehouse size={20} />
              Site registered under the wrong act
            </div>
            <div className={styles.leakDetail}>
              A fulfilment centre doing repacking and labelling registered under Shops &amp; Establishment when the activity may constitute a manufacturing process. Every hours, overtime, welfare and register obligation downstream inherits that classification.
            </div>
          </div>

          <div className={styles.leakCard}>
            <div className={styles.leakTitle}>
              <Clock size={20} />
              Client audits arrive with the peak
            </div>
            <div className={styles.leakDetail}>
              E-commerce and retail principals audit 3PL compliance in exactly the quarter your team has the least capacity. An incomplete pack is a defensible reason to hold payment on your largest billing month of the year.
            </div>
          </div>
        </div>

        <div className={styles.closingLine}>
          Five of these six are invisible in a monthly total. That is not a reporting problem. It is what happens when attendance, payroll, statutory position and billing are four records instead of one.
        </div>
      </section>

      {/* SECTION 4: ONE APPROVED RECORD, FOUR OUTPUTS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>How we are built</span>
          <h2 className={styles.sectionTitle}>Approve the day once. Payroll, statutory, billing and the invoice all read it.</h2>
          <p className={styles.sectionLead}>
            The single-record spine: attendance and trip logs feed downstream calculation engines without manual re-keying.
          </p>
        </div>

        <div className={styles.spineGrid}>
          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 1</span>
            <h3 className={styles.spineTitle}>Worker payroll</h3>
            <p className={styles.spineDesc}>
              Wages, piece-rate earnings, overtime and lawful deductions for the person who actually worked that shift at that hub.
            </p>
          </div>

          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 2</span>
            <h3 className={styles.spineTitle}>Statutory liability</h3>
            <p className={styles.spineDesc}>
              PF, ESI, PT, LWF, bonus and gratuity, computed from the same approved day against the right jurisdiction.
            </p>
          </div>

          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 3</span>
            <h3 className={styles.spineTitle}>Client billing</h3>
            <p className={styles.spineDesc}>
              For 3PL and contract logistics: billed days or units cannot drift from paid days, because they are the same row.
            </p>
          </div>

          <div className={styles.spineCard}>
            <span className={styles.spineTag}>Output 4</span>
            <h3 className={styles.spineTitle}>GST invoice</h3>
            <p className={styles.spineDesc}>
              Your rate card applied per contract, invoice raised with the attendance evidence already attached.
            </p>
          </div>
        </div>

        <div className={styles.statementBandHigh}>
          <p>
            <strong>Piece rate, floored.</strong> Earnings are computed as your rate card specifies and then tested against the notified minimum wage for that state, zone and skill category — per worker, per period. Where the piece-rate total falls short, the gap is named and the top-up is computed rather than absorbed. This is the single calculation that most distinguishes a compliant per-parcel operation from an exposed one.
          </p>
        </div>
      </section>

      {/* SECTION 5: RAMPS WITHOUT A COMPLIANCE CLIFF */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The seasonality problem</span>
          <h2 className={styles.sectionTitle}>Doubling headcount in six weeks is an onboarding problem. Halving it is a compliance problem.</h2>
          <p className={styles.sectionLead}>
            Most systems handle the ramp up. Very few handle the ramp down correctly, because correct means keeping obligations you no longer visibly qualify for.
          </p>
        </div>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <UserPlus size={22} />
            </div>
            <h3 className={styles.cardTitle}>Bulk onboarding, entered once</h3>
            <p className={styles.cardDesc}>
              Joining records, statutory enrolment data, identifiers and bank details captured once and reused everywhere downstream. For a hub taking on 800 people in three weeks, re-keying is where enrolment errors are born.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <MapPin size={22} />
            </div>
            <h3 className={styles.cardTitle}>Deployment with jurisdiction attached</h3>
            <p className={styles.cardDesc}>
              Assign workers to hubs in batches, with each hub's state, zone, skill category and applicable minimum wage floor attached automatically — not selected by hand at the point of hire.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <TrendingUp size={22} />
            </div>
            <h3 className={styles.cardTitle}>Applicability that ratchets</h3>
            <p className={styles.cardDesc}>
              Coverage is evaluated against the higher of live and declared headcount and held once crossed. Crossing a threshold in October does not un-cross in January, and the system says so.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Calendar size={22} />
            </div>
            <h3 className={styles.cardTitle}>Seasonal eligibility handled properly</h3>
            <p className={styles.cardDesc}>
              Statutory bonus eligibility turns on days worked in the accounting year rather than on being on rolls today. Gratuity for seasonal establishments follows its own statutory basis. Both are computed rather than assumed.
            </p>
          </div>
        </div>

        <div className={styles.footnote}>
          Continuous service is held against the worker rather than against a single deployment, so someone who works three consecutive peaks has one service history — which is what makes bonus continuity and gratuity eligibility correct instead of approximate.
        </div>
      </section>

      {/* SECTION 6: REGISTERS FOR EACH WORKFORCE */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>What you hold</span>
          <h2 className={styles.sectionTitle}>Four rulebooks means four register sets, in one evidence vault</h2>
          <p className={styles.sectionLead}>
            An inspection does not ask for your dashboard. It asks for a register, for a named person, on a named date.
          </p>
        </div>

        <div className={styles.registerTableContainer}>
          <table className={styles.registerTable}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>Workforce</th>
                <th style={{ width: '65%' }}>What we hold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Warehouse and hub workers</strong></td>
                <td>Muster, wage register, wage slips, overtime register, deductions and fines registers under the applicable establishment act.</td>
              </tr>
              <tr>
                <td><strong>Drivers and transport staff</strong></td>
                <td>Motor Transport Workers register set, hours and rest records, and medical fitness certificate status with expiry.</td>
              </tr>
              <tr>
                <td><strong>Inter-state migrant workmen</strong></td>
                <td>ISMW registers, passbook records, displacement and journey allowance computation and payment evidence.</td>
              </tr>
              <tr>
                <td><strong>Contract workers</strong></td>
                <td>The CLRA register set per establishment (Forms XII to XXV under Central Rules; state variations mapped), plus contractor licences and principal employer Form V.</td>
              </tr>
              <tr>
                <td><strong>All of the above</strong></td>
                <td>Challans and acknowledged returns held against the correct wage month and the correct establishment code.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statementBand}>
          <p>
            <strong>Governance attaches at upload, not in a later compliance pass.</strong> Confidentiality tier, retention floor and legal hold are set when the document arrives, and every mutation writes to an append-only, hash-chained ledger that deliberately holds no personal data of its own — so it can be retained and produced for an audit without becoming a liability itself.
          </p>
        </div>
      </section>

      {/* SECTION 7: PEAK SEASON, CLIENT AUDITS, AND THE PACK */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>The commercial edge</span>
          <h2 className={styles.sectionTitle}>Your client's audit will land in your busiest month. Answer it with a download.</h2>
          <p className={styles.sectionLead}>
            E-commerce and retail principals are auditing 3PL and manpower compliance harder every year, because under CLRA §21, EPF §8A and ESI §40 their exposure is real and their boards know it. For a contract logistics operator, being the one that can evidence its position on demand is a commercial position, not an administrative one.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <FileCheck size={22} />
            </div>
            <h3 className={styles.cardTitle}>A generated pack, per client, per month</h3>
            <p className={styles.cardDesc}>
              Wage registers and slips for workers at their sites, establishment-filtered PF ECR and ESI filings, challans and receipts against the right wage month, attendance per worker per day, and the CLRA register set for their establishment. Produced from records the month already created.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={22} />
            </div>
            <h3 className={styles.cardTitle}>A scoped client window</h3>
            <p className={styles.cardDesc}>
              Give a principal a read-only view of their own deployment — workers, attendance, statutory position, their contract only. The boundary is enforced at the platform level, not set as a configuration option someone could get wrong.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Package size={22} />
            </div>
            <h3 className={styles.cardTitle}>Peak-proof generation</h3>
            <p className={styles.cardDesc}>
              The pack takes the same time to produce in October as in June, because it is generated automatically rather than compiled by hand under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHICH LENS ARE YOU? */}
      <section className={`${styles.section} ${styles.lensSection}`} id="lens-section">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>How this is set up</span>
          <h2 className={styles.sectionTitle}>Logistics sits on both sides of this. Which are you?</h2>
          <p className={styles.sectionLead}>
            Getting this wrong wastes the first meeting, so we ask rather than assume. Select your operational model below:
          </p>
        </div>

        <LensSelector />
      </section>

      {/* SECTION 9: SUB-SEGMENT NOTES */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionKicker}>Sub-sector architecture</span>
          <h2 className={styles.sectionTitle}>How statutory shape varies across logistics sectors</h2>
          <p className={styles.sectionLead}>
            Different logistics business models face distinct statutory obligations under Indian labour law.
          </p>
        </div>

        <div className={styles.subsegmentGrid}>
          <div className={styles.subsegmentCard}>
            <h3 className={styles.subsegmentTitle}>E-commerce fulfilment centres</h3>
            <p className={styles.subsegmentText}>
              Extreme seasonality and high exposure to Factories Act classification questions due to repacking, labelling and kitting. Peak-season night shifts run into women worker exemption rules state by state. Highest client audit pressure.
            </p>
          </div>

          <div className={styles.subsegmentCard}>
            <h3 className={styles.subsegmentTitle}>3PL and contract logistics</h3>
            <p className={styles.subsegmentText}>
              Multi-client sites with diverging rate cards. The client compliance pack is a live commercial requirement to unlock held payments. Frequently both lenses at once — own contract labour at the hub, manpower supplied to clients.
            </p>
          </div>

          <div className={styles.subsegmentCard}>
            <h3 className={styles.subsegmentTitle}>Transport and fleet operators</h3>
            <p className={styles.subsegmentText}>
              Motor Transport Workers Act dominates and is usually the largest unaddressed gap. Driving hours, rest intervals, and medical fitness certificates are the core exposures, almost never housed in standard HR systems.
            </p>
          </div>

          <div className={styles.subsegmentCard}>
            <h3 className={styles.subsegmentTitle}>Last mile and delivery</h3>
            <p className={styles.subsegmentText}>
              Per-trip and per-parcel pay models where the minimum wage floor test is the central control. Where models engage gig riders, Code on Social Security aggregator provisions apply.
            </p>
          </div>

          <div className={styles.subsegmentCard}>
            <h3 className={styles.subsegmentTitle}>Cold chain and specialised warehousing</h3>
            <p className={styles.subsegmentText}>
              Higher skill categories, technical plant staff on continuous shift patterns, temperature hazard allowances, and distinct establishment classifications.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader} style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          <span className={styles.sectionKicker}>Frequently Asked Questions</span>
          <h2 className={styles.sectionTitle}>Commercial and operational answers</h2>
        </div>

        <LogisticsFaq items={faqData} />
      </section>

      {/* SECTION 11: HONEST LIMITS */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Honest limits: What we do not do for logistics</h2>
          <p className={styles.sectionLead}>
            We state our operational boundaries clearly so expectations align before you sign an agreement.
          </p>
        </div>

        <div className={styles.limitsBox}>
          <ul className={styles.limitsList}>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We are not a WMS, TMS or fleet telematics system.</strong> Inventory, slotting, route planning, vehicle tracking, fuel and maintenance are not ours. We run the workforce, its statutory position and the billing.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>Motor Transport Workers support means records, not rostering against vehicles.</strong> Registers, hours records, medical fitness expiry and statutory evidence, yes. Matching driver duty to vehicle availability, no.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not run gig platform dispatch.</strong> If your last mile is platform-based we handle the statutory and payment position, not the assignment engine.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We do not classify your sites for you.</strong> Whether a warehouse activity constitutes a manufacturing process is a question for your labour law adviser. We hold your registration and apply it consistently, and flag apparent inconsistencies.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We are not a sourcing product.</strong> Onboarding through to deployment, payroll, statutory and billing, yes. Finding several hundred pickers in three weeks is your channel's job.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>India only.</strong> Deliberately. The depth in state minimum wage, professional tax, labour welfare fund, CLRA and ISMW exists because we did not spread across jurisdictions.
              </span>
            </li>
            <li className={styles.limitItem}>
              <XCircle size={18} className={styles.limitIcon} />
              <span>
                <strong>We have three ISO certifications and few public references.</strong> We would rather prove the engine on one peak month of your own data than show you someone else's logo.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 12: OFFER */}
      <section className={styles.section}>
        <div className={styles.offerSection}>
          <h2 className={styles.offerTitle}>Test it on a peak month and a normal one</h2>
          
          <p className={styles.offerLead}>
            Send us two months you have already paid: one peak, one ordinary. We re-compute both on our engine and report every variance — writing nothing to anything live. The peak month is where piece-rate floors, ramp-time enrolment, migrant obligations and billed-versus-paid drift all show up at once.
          </p>

          <div className={styles.offerDeliverables}>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#C07EF0" style={{ flexShrink: 0 }} />
              <span>Piece-rate earnings tested against notified minimum wage floor per hub</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#C07EF0" style={{ flexShrink: 0 }} />
              <span>Statutory applicability across the ramp and post-ramp retention</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#C07EF0" style={{ flexShrink: 0 }} />
              <span>Motor Transport Workers and ISMW obligations and record audit</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#C07EF0" style={{ flexShrink: 0 }} />
              <span>Billed against paid days or units per client site for supplied manpower</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#C07EF0" style={{ flexShrink: 0 }} />
              <span>Contractor bill variance against gate/biometric records for contract labour</span>
            </div>
            <div className={styles.deliverableItem}>
              <Check size={16} color="#C07EF0" style={{ flexShrink: 0 }} />
              <span>Bonus and gratuity provisioning position across seasonal service</span>
            </div>
          </div>
          
          <div className={styles.offerConditions}>
            Two to three weeks · under NDA · read-only. Nothing installed, nothing migrated, no workers moved.
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/exposure-report" className="btn btn-primary btn-lg">
              Request the peak-month assessment <ArrowRight size={18} />
            </Link>
            <Link href="/tools/exposure-calculator" className="btn btn-outline btn-lg">
              Model your exposure first →
            </Link>
          </div>
        </div>

        <div className={styles.reviewDate}>
          Statutory references reviewed: September 2026 · Finnovo Tech Functional Pvt Ltd · Madhapur, Hyderabad
        </div>
      </section>

      {/* MOBILE STICKY CTA BAR (< 768px) */}
      <div className={styles.mobileStickyBar}>
        <Link href="/exposure-report" className={`btn btn-primary btn-md ${styles.mobileStickyBtn}`}>
          Request Peak-Month Assessment <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
