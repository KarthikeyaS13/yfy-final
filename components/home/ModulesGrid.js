import styles from './ModulesGrid.module.css';
import { ShieldCheck, Coins, Users, BookOpen, Layers, Settings, History, Lock, UserPlus, Target, Clock, Zap, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ModulesGrid() {
  return (
    <section className="section" id="modules">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">THE 16-MODULE ARCHITECTURE</span>
          <h2>Nobody buys sixteen modules.<br />They buy one urgent thing and keep fifteen.</h2>
          <p>
            Breadth is why you stay — every serious vendor claims 16 modules. But compliance certainty is why you choose us. Here is our actual position, told honestly.
          </p>
        </div>

        <div className={styles.tiersGrid}>
          {/* Tier 1: Where We Lead */}
          <div className={`reveal ${styles.tierCard} ${styles.tierLead}`}>
            <div className={styles.tierBadgeLead}>We Lead · The Core Wedge</div>
            <h3 className={styles.tierTitle}>Statutory & Compliance Infrastructure</h3>
            <p className={styles.tierDesc}>
              No specialist in the Indian market does these the way we do. Built to eliminate balance-sheet liabilities before money leaves.
            </p>

            <div className={styles.modulesList}>
              <div className={styles.leadItem}>
                <ShieldCheck size={18} className={styles.leadIcon} />
                <div>
                  <strong>Contract Labour (PE Lens)</strong>
                  <span>Sits between contractor bill and AP; attendance trim & statutory check</span>
                </div>
              </div>
              <div className={styles.leadItem}>
                <Users size={18} className={styles.leadIcon} />
                <div>
                  <strong>Staffing Operations (Supplier Lens)</strong>
                  <span>1 approved day drives worker pay, statutory caps, client billing & GST</span>
                </div>
              </div>
              <div className={styles.leadItem}>
                <Coins size={18} className={styles.leadIcon} />
                <div>
                  <strong>Payroll Statutory Identity</strong>
                  <span>5-tier ladder resolving to exact certificate; stamped once at wage month</span>
                </div>
              </div>
              <div className={styles.leadItem}>
                <Zap size={18} className={styles.leadIcon} />
                <div>
                  <strong>Real-Time Applicability</strong>
                  <span>Obligations recompute inline on commit against live headcount</span>
                </div>
              </div>
              <div className={styles.leadItem}>
                <History size={18} className={styles.leadIcon} />
                <div>
                  <strong>Migration & Replay</strong>
                  <span>22-step console; re-computes paid months on past data, writing nothing</span>
                </div>
              </div>
            </div>
            
            <div className={styles.tierFootnoteLead}>
              The primary reason enterprises deploy yfy.
            </div>
          </div>

          {/* Tier 2: We Are Competitive */}
          <div className={`reveal ${styles.tierCard}`}>
            <div className={styles.tierBadge}>We Are Competitive</div>
            <h3 className={styles.tierTitle}>Integrated Operational Suite</h3>
            <p className={styles.tierDesc}>
              A dedicated point solution may have more niche bells and whistles. But each has one thing it structurally cannot do: connect to your live statutory ledger.
            </p>

            <div className={styles.modulesList}>
              <div className={styles.compItem}>
                <Coins size={16} />
                <div>
                  <strong>Expense Management</strong>
                  <span>Budget encumbrance ledger; commits cash before it is paid</span>
                </div>
              </div>
              <div className={styles.compItem}>
                <Lock size={16} />
                <div>
                  <strong>e-Vault & DMS</strong>
                  <span>Hash-chained append-only ledger; governance attaches at upload</span>
                </div>
              </div>
              <div className={styles.compItem}>
                <Layers size={16} />
                <div>
                  <strong>Workforce Planning</strong>
                  <span>Costed from real payslips, not hypothetical assumptions</span>
                </div>
              </div>
              <div className={styles.compItem}>
                <Settings size={16} />
                <div>
                  <strong>Service Desk</strong>
                  <span>Unroutable tickets refused at creation; pauses clock on requester</span>
                </div>
              </div>
              <div className={styles.compItem}>
                <Target size={16} />
                <div>
                  <strong>Performance Management</strong>
                  <span>Appraisal cycles & merit ratings linked directly to payroll increments</span>
                </div>
              </div>
              <div className={styles.compItem}>
                <BookOpen size={16} />
                <div>
                  <strong>Learning & Certifications</strong>
                  <span>Mandatory training tracking; lapsed statutory certs trigger compliance alerts</span>
                </div>
              </div>
            </div>

            <div className={styles.tierFootnote}>
              Single database transaction vs complex integration project.
            </div>
          </div>

          {/* Tier 3: We Are Ordinary */}
          <div className={`reveal ${styles.tierCard} ${styles.tierOrdinary}`}>
            <div className={styles.tierBadgeOrdinary}>We Are Ordinary</div>
            <h3 className={styles.tierTitle}>Solid, and already integrated</h3>
            <p className={styles.tierDesc}>
              These modules are reliable, complete, in daily use, and not a reason to choose us. Depth here would have cost us the statutory depth that matters.
            </p>

            <div className={styles.modulesList}>
              <div className={styles.ordItem}>
                <Users size={16} />
                <div>
                  <strong>Core HRMS & Attendance</strong>
                  <span>Effective-dated, append-only records; dedicated HRMS matches it</span>
                </div>
              </div>
              <div className={styles.ordItem}>
                <Clock size={16} />
                <div>
                  <strong>Leave & Timesheets</strong>
                  <span>Standard multi-level approvals and policy rules</span>
                </div>
              </div>
              <div className={styles.ordItem}>
                <UserPlus size={16} />
                <div>
                  <strong>Recruitment & ATS</strong>
                  <span>Requisition to employee record inside one tenant; no job-board syndication</span>
                </div>
              </div>
              <div className={styles.ordItem}>
                <Layers size={16} />
                <div>
                  <strong>Asset Management</strong>
                  <span>Procurement & allocation; recovers via F&F obligation ledger</span>
                </div>
              </div>
              <div className={styles.ordItem}>
                <Zap size={16} />
                <div>
                  <strong>Compliance Calendar & Alerts</strong>
                  <span>State-by-state return deadlines and statutory filing notices</span>
                </div>
              </div>
            </div>

            <div className={styles.tierFootnoteOrdinary}>
              Good enough, already integrated. Keep your existing tool or consolidate.
            </div>
          </div>
        </div>

        <div className={`reveal ${styles.licensingBand}`}>
          <p>
            <strong>Sold and licensed per module.</strong> Entitlement is enforced at the platform middleware with a clean lifecycle. You never pay for sixteen modules to use two.
          </p>
          <Link href="/pricing" className="btn btn-outline btn-sm">
            View Transparent Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
