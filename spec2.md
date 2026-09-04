<USER_REQUEST>
# yfy.ai — Screen-by-Screen Design & Content Specification

**Version:** 1.0 · September 2026
**Scope:** information architecture, navigation, design system, CTA system, and screen-by-screen content for every page.
**Companions:** `yfy-website-restructure-spec.md` (change log and form schemas), `statutory-coverage-matrix.xlsx`, the four pitch decks.

**Legal entity for all copy:** Finnovo Tech Functional Private Limited, Madhapur, Hyderabad. Product mark: yfy®.

---

# PART 1 — Who this site is for

Every screen decision below traces back to one of four visitors. If a page doesn't serve one of them, it shouldn't exist.

| | **P1 · Principal Employer** | **P2 · Staffing Agency** | **P3 · Multi-State Employer** | **P4 · Evaluator** |
|---|---|---|---|---|
| **Who** | Plant head, IR/compliance manager, CFO | Founder/MD, operations head | HR head, finance controller | InfoSec, IT, procurement, consultant |
| **Company** | 500–5,000 own staff, contract labour 30%+, 3+ plants | 1,500–15,000 deployed, 4+ states | 300–3,000 across 3+ states | Any of the above, second visit |
| **Arrives asking** | "What are my contractors exposing me to?" | "How do I stop losing days at month-end — and prove compliance to clients?" | "Can this handle PT and LWF across our states?" | "Is this real, and will it pass our review?" |
| **Decides on** | A sized liability number | Days to invoice, and winning bids | Coverage depth and migration risk | Certificates, architecture, honesty |
| **Fears** | An inspection, a penalty, a contractor's failure landing on them | Payroll breaking, cash-flow gaps, losing a contract | A botched payroll migration | Being sold a roadmap |
| **Primary offer** | Contractor exposure assessment | Compliance proof pack | Coverage check + replay | Trust centre + coverage matrix |
| **Wrong thing to show them** | Module lists, HR savings | Enterprise architecture | Contract labour | Marketing superlatives |

**The rule that governs the whole site:** every page identifies which persona it serves, and offers that persona's offer. A page serving nobody in particular gets deleted.

---

# PART 2 — Information architecture

## 2.1 Primary navigation

Five items plus one button. Persona routing sits first because segmentation is the entire strategy.

```
[yfy®]   Who it's for ▾   Platform ▾   Products ▾   Pricing   Resources ▾     [Get your exposure report]
```

### Who it's for ▾ — three columns

| Column | Item | Sub-label | URL |
|---|---|---|---|
| **By situation** | **Principal Employers** | You engage contract labour through vendors | `/for/principal-employers` |
| | **Staffing & Manpower Agencies** | You supply workers to client sites | `/for/staffing-agencies` |
| | **Multi-State Employers** | Payroll and statutory across many states | `/for/multi-state-employers` |
| **By industry** | Manufacturing & Pharma | Multi-plant, contract-labour heavy | `/industries/manufacturing` |
| | Facility Management & Security | High headcount, thin margins | `/industries/facility-management` |
| | Logistics & Warehousing | Seasonal ramps, multi-site | `/industries/logistics` |
| **By role** | Finance & CFO | Liability, cost, controls | `/roles/finance` |
| | HR & IR Leaders | Operations and statutory | `/roles/hr` |
| | IT & Security | Architecture and review | `/roles/it` |

> **Why persona-first, not product-first.** Your buyer does not know which of your fourteen modules solves their problem. They know their own situation. Routing by situation converts; routing by module makes the visitor do your segmentation for you.

### Platform ▾

| Item | Sub-label | URL |
|---|---|---|
| **How the statutory engine works** | Applicability → rules → returns → evidence | `/platform` |
| **Statutory coverage by state** | What we load, where, verified when | `/coverage` |
| **Migration & replay** | See every variance before you commit | `/platform/migration` |
| **Security & architecture** | Tenant isolation, SSO, encryption, ISO | `/trust` |
| **Integrations** | What connects today | `/integrations` |

### Products ▾ — four columns

Lead products first, named the way buyers name them.

| Group | Items |
|---|---|
| **Contract labour & compliance** | Contractor Bill Verification · Statutory Compliance & Returns · Compliance Calendar & Obligations · Evidence Vault |
| **Staffing operations** | Roster & Site Muster · Multi-Client Payroll · Client Billing & GST · Agency Profitability |
| **Core HR & payroll** | Payroll & Statutory · Core HRMS & Attendance · Leave & Timesheets · Expense Management |
| **Talent & platform** | Recruitment & ATS · Performance · Learning · Workforce Planning · Assets · Service Desk |

### Resources ▾

Blog · Case Studies · **Statutory Coverage Matrix** · Compliance Calendar · **Labour Codes Impact Guide** · **Exposure Calculator** · Community · Partners

### Pricing
Top-level link. Enterprise buyers look for it in the nav and read a hidden price as a bad sign.

## 2.2 Full screen inventory

| # | Screen | URL | Persona | Priority |
|---|---|---|---|---|
| 1 | Home | `/` | All | P0 |
| 2 | Principal Employers | `/for/principal-employers` | P1 | P0 |
| 3 | Staffing Agencies | `/for/staffing-agencies` | P2 | P0 |
| 4 | Multi-State Employers | `/for/multi-state-employers` | P3 | P0 |
| 5 | Exposure report offer | `/exposure-report` | P1 | P0 |
| 6 | Compliance proof pack offer | `/compliance-proof-pack` | P2 | P0 |
| 7 | Coverage matrix | `/coverage` | P3, P4 | P0 |
| 8 | Pricing | `/pricing` | All | P0 |
| 9 | Trust centre | `/trust` | P4 | P0 |
| 10 | Migration & replay | `/platform/migration` | P1, P3 | P1 |
| 11 | Platform engine | `/platform` | P3, P4 | P1 |
| 12 | Contractor Bill Verification | `/products/contract-labour` | P1 | P1 |
| 13 | Staffing Operations | `/products/staffing` | P2 | P1 |
| 14 | Payroll & Statutory | `/products/payroll` | P3 | P1 |
| 15 | Statutory Compliance | `/products/compliance` | P1, P3 | P1 |
| 16 | Exposure calculator | `/tools/exposure-calculator` | P1 | P1 |
| 17 | Book a demo | `/demo` | All | P1 |
| 18 | About | `/about` | P4 | P1 |
| 19 | Integrations | `/integrations` | P4 | P2 |
| 20 | Remaining product pages (×10) | `/products/*` | Various | P2 |
| 21 | Industry pages (×3) | `/industries/*` | P1, P2 | P2 |
| 22 | Role pages (×3) | `/roles/*` | Various | P3 |
| 23 | Labour Codes guide | `/resources/labour-codes` | All | P2 |
| 24 | Compliance calendar | `/resources/compliance-calendar` | All | P2 |
| 25 | Blog, Case studies, Community | `/blog`, `/case-studies`, `/community` | All | P2 |
| 26 | Partners | `/partners/*` | Channel | P2 |
| 27 | Legal (privacy, terms, DPA) | `/legal/*` | P4 | P1 |

**Delete or redirect:** `/platform/roi` (see 6.2), `/solutions/*` role pages in their current form (fold into `/roles/*`), `/partners/recruitment-agencies` (wrong channel — see 6.4).

---

# PART 3 — Design system

## 3.1 Colour tokens

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#1A1128` | Body text, headings on light |
| `--dark` | `#1E1033` | Dark section backgrounds, footer |
| `--violet` | `#7C3AED` | Primary action, section kickers, emphasis |
| `--violet-deep` | `#5B21B6` | Primary hover |
| `--lilac` | `#A78BFA` | Accents on dark, arrows, dividers |
| `--tint` | `#F5F2FA` | Card fill on light |
| `--tint-active` | `#EDE4FC` | Highlighted card |
| `--gold` | `#D99A2B` | Warnings, "measured against", timing labels |
| `--mute` | `#6B6480` | Secondary text |
| `--line` | `#DFD8EC` | Borders |

**Rule:** gold marks risk, exposure and honest limitations. Violet marks capability. Never use green — it implies "all clear," which is a claim you cannot make about anyone's compliance.

## 3.2 Type scale

| Level | Size / weight | Use |
|---|---|---|
| Display | 56/60, 800 | Home hero H1 only |
| H1 | 40/46, 700 | Page titles |
| H2 | 30/38, 700 | Section headings |
| H3 | 20/28, 600 | Card titles |
| Body-L | 18/28, 400 | Section lead paragraphs |
| Body | 16/26, 400 | Default |
| Small | 14/22, 400 | Card body, captions |
| Kicker | 12/16, 700, +2 tracking, uppercase, violet | Section labels |

Max line length 68 characters for prose. Nothing below 14px anywhere, including footnotes — a compliance buyer reading fine print about compliance is a bad look.

## 3.3 Components

**Card.** 12px radius, `--tint` fill, 1px `--line` border, 28px padding, subtle shadow. Highlighted variant uses `--tint-active`. Dark variant uses `--dark` with `#46326F` border.

**Statement band.** Full-width `--dark` block holding one bolded claim plus one supporting sentence. Used no more than twice per page. This is where the sharpest lines live.

**Stat block.** 46px violet numeral, 14px `--mute` label beneath. Only for figures you can evidence.

**Numbered step.** 42px violet circle, white numeral, title, one line of body. Horizontal for ≤4 steps, vertical beyond.

**Honest split.** Three columns — violet dot "Available today", gold dot "Recorded and evidenced", grey dot "Not available / gated". Reused on returns, integrations and coverage.

**Coverage row.** State, then one status chip per statutory head. Chips: `Live` violet, `Partial` gold, `Manual` grey outline, `Not loaded` grey, `N/A` faint.

## 3.4 CTA system

Three tiers. **Never more than two buttons visible in one viewport**, and never two primaries.

| Tier | Style | Use |
|---|---|---|
| **Primary** | Filled `--violet`, white, 16px semibold, 14×28 padding, 8px radius. Hover `--violet-deep`. Focus: 2px offset ring. | The persona's offer. One per screen region. |
| **Secondary** | 1.5px `--violet` outline, violet text, transparent fill. | Proof: coverage matrix, replay, sample report. |
| **Tertiary** | Violet text + `→`, underline on hover. | Demo, alternate persona path, deeper reading. |

### CTA by page and persona

| Page | Primary | Secondary | Tertiary |
|---|---|---|---|
| Home | Two persona cards (see 4.2) | — | Neither — multi-state → |
| `/for/principal-employers` | Get your contractor exposure report | See a sample report | Book a demo → |
| `/for/staffing-agencies` | Get your compliance proof pack | See what's in the pack | Book a demo → |
| `/for/multi-state-employers` | Check your state coverage | Run a payroll replay | Book a demo → |
| `/coverage` | Check your states | Get the exposure report | Book a demo → |
| `/platform/migration` | Run a replay on your data | Talk to a migration lead | — |
| `/pricing` | Per tier, persona-matched | — | Talk to sales → |
| `/trust` | Request the security pack | Download certificates | — |
| Product pages | Persona offer for that product | Related product | Book a demo → |

**Rules.** Button labels name the outcome, never "Learn more", "Explore" or "Submit". A button never lands on a page that doesn't deliver what the label promised. Any CTA whose destination isn't built yet points at `/demo` until it is.

## 3.5 Persona memory

On first persona selection (hero card, nav item, or persona page visit) set `yfy_persona = pe | agency | multistate`, 90-day expiry.

Thereafter:
- Header CTA label swaps to that persona's offer.
- Home hero collapses to a single persona band with a "not you? switch →" link.
- Pricing highlights the matching tier.
- Blog and resource pages surface that persona's offer in the inline CTA.

Never hide navigation based on the cookie, and never make the switch hard to find. Personalisation that traps is worse than none.

---

# PART 4 — Global elements

## 4.1 Header

Sticky, 72px, white with 1px bottom border on scroll. Logo left, five nav items centre, primary CTA right. Mega-menu panels open on hover (desktop) and tap (touch), 320ms ease.

Mobile: logo, hamburger, CTA. Drawer opens with the three "Who it's for" items expanded by default — everything else collapsed. A mobile visitor should be able to self-identify in one tap.

**Fix from live site:** the header is currently inconsistent across pages. `/platform/demo` still renders the old navigation. One header component, every page.

## 4.2 Footer

Four columns plus a legal bar.

**Column 1 — company.** Logo. Then:

> yfy® is the workforce and statutory compliance platform built by Finnovo Tech Functional Private Limited, Hyderabad — for Indian employers whose statutory complexity is the hard part.

Then certification badges linking to `/trust`.

**Column 2 — Who it's for.** Principal Employers · Staffing & Manpower Agencies · Multi-State Employers · Manufacturing · Facility Management · Logistics

**Column 3 — Platform.** Statutory engine · Coverage matrix · Migration & replay · Trust centre · Integrations · Pricing

**Column 4 — Company & resources.** About · Blog · Case studies · Compliance calendar · Labour Codes guide · Partners · Contact

**Compliance alert signup.** Keep it. Retitle: *"Monthly statutory due dates, by state, in your inbox."* One field, one button.

**Legal bar:**

> © 2026 Finnovo Tech Functional Private Limited. yfy® is a registered trademark of Finnovo Tech Functional Private Limited.
> Privacy Policy · Terms of Service · Data Processing Addendum · Trust Centre

**Three live-site fixes:** the footer tagline still says "built for the New Labour Codes 2020" — remove the year. The legal line names no entity — add Finnovo. The certification badges carry no link — point them at `/trust`.

## 4.3 Global metadata

Current title tag sells the module list — it is the first thing a prospect sees in search, and it contradicts the hero.

| Field | Change to |
|---|---|
| Home title | `Contractor Bill Verification & Multi-State Statutory Payroll — India \| yfy®` |
| Home description | `Verify what your labour contractors actually paid before you release their bill. Multi-state payroll, professional tax, labour welfare fund, PF, ESI and CLRA registers — computed, filed and evidenced.` |
| Canonical | The host actually serving the page. Currently every page claims `yfy.ai` while served from staging, which suppresses indexation entirely. |
| og:image | A real image on the serving host, 1200×630. |
| Keywords meta | Delete. It carries no SEO weight and currently says "Labour Codes 2020". |

## 4.4 Consent and privacy

Cookie banner defaults to essential-only, with analytics opt-in. For a product selling DPDP readiness, a dark-pattern consent banner is a credibility hole a security reviewer will notice.

---

# PART 5 — Screen-by-screen

## SCREEN 1 — Home `/`

**Serves:** all four, routing them within one viewport.

### 1.1 Hero — keep as built, fix one line

Current hero is correct. H1, subhead, both persona cards, third path — all stay.

**Change the trust bar.** It currently reads *"Trusted by India's fastest-growing enterprises."* You have no named customers and your case studies carry a "(Demo)" label. Replace with:

> Built in Hyderabad by Finnovo Tech Functional Private Limited · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019 · Billing starts at go-live, not at signature

**Fix the destinations.** All three hero links currently lead to empty pages or a 404. Nothing else on this page matters until that is true.

### 1.2 The problem *(new — currently missing)*

**Kicker:** THE EXPOSURE
**H2:** Your contractor's compliance failure becomes your liability

> As a principal employer you do not run payroll for contract workers — the contractor does. Your exposure is residual, and it arrives without warning.

Three cards:

| Card | Body |
|---|---|
| **CLRA §21** | If the contractor fails to pay wages, the principal employer pays them — and recovers afterwards, if they can. |
| **EPF §8A** | Provident fund dues of contract workers can be recovered from the principal employer. |
| **ESI §40** | The principal employer is the primary payer of contributions for workers engaged through an immediate employer. |

**Statement band:**
> **And it is growing right now.** The wage definition under the Code on Wages is expected to raise statutory costs by 3–15% depending on existing salary structures. Every rupee of that flows into the contractor bills arriving on your desk — and each state is framing its own rules on its own timetable.

### 1.3 How it works *(new)*

**Kicker:** HOW IT WORKS
**H2:** Report → verify → release

Four numbered steps, horizontal:

1. **Contractor reports** — A monthly bill with per-worker lines, plus the EPF, ESI and LWF challans they claim to have paid.
2. **Your attendance trims it** — Your own muster or biometric record independently caps the claimed man-days. Not their number — yours.
3. **The statute checks it** — Minimum wage for that site, skill and zone. Statutory bonus. PF, ESI and PT for that jurisdiction.
4. **You release the verified figure** — An eligible-to-pay amount. Paying above it needs an explicit override with a recorded reason.

**Statement band:**
> **"The principal employer didn't compute the wage. The contractor reports it — the principal employer checks it."**
> The design rule written into every service in the module.

**CTA:** Secondary — *See how the statutory engine works* → `/platform`

### 1.4 Coverage *(new)*

**Kicker:** COVERAGE
**H2:** We publish our coverage — including the gaps

Three stat blocks: **22** states with professional tax rule packs · **16** states with labour welfare fund packs · **36** states and UTs listed, each with a verified date.

> EPF, ESI, TDS, statutory bonus, gratuity, minimum wage and leave are handled nationally. Every jurisdiction on the matrix shows what we load, to what depth, and when a named person last checked it against the gazette.

**Statement band:**
> **Ask every vendor on your list for their matrix.** A vendor claiming complete coverage of all 36 jurisdictions is either not counting union territories or not telling you the truth. Ours is a live page with a date on it.

**CTA:** Secondary — *View the coverage matrix* → `/coverage`

### 1.5 Returns — the honest split *(new)*

**Kicker:** RETURNS
**H2:** What we generate as a file — and what we do not
**Lead:** *We do not invent return formats we cannot source. Here is the line, drawn plainly.*

Honest-split component:

| ● Generated as a file | ● Computed, recorded, evidenced | ● Gated outside our control |
|---|---|---|
| TDS — Form 138, quarters 1 to 3 | Professional tax — liability to the rupee, employee and employer split | TDS quarter 4 and Annexure II — awaiting the ITD notification |
| PF — the revamped ECR, establishment-filtered | Labour welfare fund — including the employer half that never appears on a payslip | Form 16 — depends on TRACES processing |
| ESI — Monthly Contribution, in the department's own template | Filing and payment recorded; return and receipt held in the evidence vault | We will not guess at either |

**Closing line:** Every state has its own PT and LWF return format and its own portal. Building from inference is how vendors ship files the portal rejects.

### 1.6 Controls *(new)*

**Kicker:** HOW WE BUILD
**H2:** Controls that refuse, not controls that warn
**Lead:** A control an administrator can dismiss under deadline pressure is not a control.

Four cards: four-way separation on the money path · tamper-evident hash-chained evidence ledger holding no personal data · migration that cannot be unpicked · physical schema-per-tenant separation.

**Footnote:** *We added a fourth payroll verb after finding two of our own roles both carried a single approve grant — which meant our four-eyes control was two eyes in practice.*

### 1.7 Modules

**H2:** One tenant, one database, one contract

The module chips move here from the hero, as a 4×4 grid, ordered by how you sell: Contract Labour · Statutory Compliance · Payroll · Staffing Operations · Core HRMS & Attendance · Leave & Timesheets · Expense · e-Vault · Recruitment & ATS · Performance · Learning · Workforce Planning · Assets · Service Desk · Migration · White-label

**Sub-line:** Sold and licensed per module. You are not paying for sixteen to use two.

### 1.8 Pricing preview

Keep the three-tier structure — segmentation by compliance complexity is the best-conceived thing on the current site. Two fixes: **put real numbers on the first two tiers**, and route each CTA correctly:

| Tier | CTA | Destination |
|---|---|---|
| Multi-state employer | Check your state coverage | `/coverage` |
| Principal employer | Get your exposure report | `/exposure-report` |
| Enterprise group | Talk to sales | `/demo?intent=enterprise` |

Add under every tier: *Billing starts at go-live, not at signature.*

### 1.9 Certifications

Keep. Add what a buyer actually needs:

> **ISO 9001:2015** — Quality management — IN/19920701/2497 — ICV Assessments
> **ISO 27001:2022** — Information security — IN/48720702/6157 — ICV Assessments
> **ISO/IEC 27701:2019** — Privacy information — MQCPF72H25 — MQCI UK
> Issued to Finnovo Tech Functional Private Limited. Certificates available on request.

**Change one word:** ISO 27701 currently reads "GDPR-aligned privacy management." For an India-only product this is the wrong flag. Change to *"Privacy information management, aligned to DPDP obligations."*

### 1.10 Closing

Repeat the two persona cards from the hero. No third or fourth button.

**Remove from the current closing block:** "Join India's leading enterprises that trust yfy®" (no named customers) and "Zero Operational Downtime" (an absolute guarantee that becomes a warranty).

---

## SCREEN 2 — Principal Employers `/for/principal-employers`

**Serves P1.** Currently missing; the nav points at `/products/contract-labour` while the hero points at `/exposure-report`. Converge here.

| Section | Content |
|---|---|
| **H1** | Your contractors' compliance is your liability. Check it before you pay. |
| **Lead** | You engage labour through vendors across plants and states. Under CLRA §21, EPF §8A and ESI §40 their failures land on you. yfy verifies each monthly bill against your own attendance and the statute that applies at that site, and gives you an eligible-to-pay figure before money moves. |
| **CTAs** | Primary: Get your contractor exposure report · Secondary: See a sample report |
| **1. The exposure** | The three sections, expanded. Note that the wage-definition change flows into every contractor bill. |
| **2. Report, verify, release** | The four-step flow, plus the deviation queue and 72-hour SLA. |
| **3. The verification pack** | Minimum wage per site/zone/skill · statutory bonus under the 1965 Act · PF, ESI, PT recomputed and reconciled to challans · attendance trim. Ends with: **Eligible to pay = verified wages + statutory add-backs + agreed margin + GST** |
| **4. Vendor governance** | KYC with expiry tracking across seven document types. Per-state establishment codes — EPF, ESI, LWF and CLRA licence numbers vary by state for the same contractor, and a multi-plant PE needs the right code per site or the challan cannot be reconciled. |
| **5. Deployment and capture** | Propose-then-confirm. Biometric and gate ingestion. Site-supervisor scope. Migrant workers. Direct wage disbursement. |
| **6. Not every act counts the same people** | CLRA counts contract workers · Factories Act counts everyone on premises under §2(l) · everything else counts your own rolls. CLRA state amendments judged against that state's deployments, not the national total. |
| **7. The exposure dashboard** | Per contractor, per site, per state. Every figure traces to a named worker on a specific bill. |
| **8. What we don't do** | *Keep this section.* "We do not run your contractors' payroll — they do. We check what they report against what the statute required. If a contractor wants to run it properly, that's our staffing lens." |
| **FAQ** | Six questions (listed in the restructure spec, Part D1). |
| **Close** | Primary CTA repeated. |

---

## SCREEN 3 — Staffing & Manpower Agencies `/for/staffing-agencies`

**Serves P2.** Owner-led buyer — lead with cash and days, not statute.

| Section | Content |
|---|---|
| **H1** | One approved roster. Payroll, statutory, billing and GST — all from it. |
| **Lead** | You are the employer of record for every worker you deploy. PF, ESI, PT, LWF, bonus and gratuity sit with you. So does the client invoice. yfy runs both off the same daily muster — and produces the compliance proof your clients keep asking for. |
| **CTAs** | Primary: Get your compliance proof pack · Secondary: See what's in the pack |
| **1. Where the month-end days go** | Attendance arrives late and unverifiable · payroll waits for attendance and billing waits for payroll · billed days drift from paid days · compliance proof assembled by hand every time a client asks. |
| **2. The roster is the spine** | One approved assignment-day row → worker payroll, statutory liability, client billing, GST invoice. Billed days cannot drift from paid days because they are the same record. |
| **3. The arithmetic nobody gets right** | Two-column compare. Spreadsheet way: compute statutory per client line, three ceilings, over-deduct or under-remit. Engine way: aggregate the worker's month, apply the cap once, apportion back to each client line. |
| **4. Site muster** | No app to install (SMS magic link) · works offline · saves on every tap · cover and replacement in one tap · geo-tagged and timestamped. |
| **5. Planning and control** | Demand-first duty roster · bulk assignment · week-ahead fill forecasting · exception-first control · per-contract SLA terms. |
| **6. Multi-client payroll** | Client-specific wage rules · state minimum wage per site · overtime from the approved muster · chunked resumable runs. |
| **7. Billing and cash flow** | Approved muster → payroll → client invoice → GST and collections. Per-contract profitability. Receivables ageing. Attendance proof attached to the invoice. |
| **8. Prove it to your clients** | Monthly compliance pack per contract · a scoped read-only client window · white-label under your own brand and domain. **Statement band:** an agency that hands a principal employer a live compliance view is no longer competing on rate. |
| **FAQ** | Six questions (restructure spec, Part E1). |

---

## SCREEN 4 — Multi-State Employers `/for/multi-state-employers`

**Serves P3.** Currently a 404 that the homepage links to. Shorter page, four sections.

| Section | Content |
|---|---|
| **H1** | Payroll and statutory across every state you operate in |
| **Lead** | Multiple entities, multiple states, one payroll. Professional tax and labour welfare fund resolved to the right registration for the wage month, not for today. Returns generated where a format exists, computed and evidenced where it doesn't. |
| **CTAs** | Primary: Check your state coverage · Secondary: Run a payroll replay |
| **1. Which registration does this rupee file under?** | The five-rung resolver ladder, with rung 3 highlighted. State acts stop there — falling through would file Karnataka's liability under Maharashtra's certificate. Ambiguity is reported, not silently resolved. |
| **2. Stamped, never re-derived** | April → October remapping → regenerate April and it reproduces as filed. An inspection asks for the return you filed, not the one you would file today. |
| **3. Applicability that moves when your data does** | Inline recompute on commit against live headcount, ratcheted. State overrides judged per state. Dismissals need a written reason and re-surface at the deadline. |
| **4. Segmentation and calendars** | Multi-entity registers with an enforced partition invariant. Multiple pay calendars — the Pune plant on 26th–25th while head office runs 1st–31st. |
| **5. Migration** | Replay → parallel run → one-way go-live. Link to `/platform/migration`. |

---

## SCREEN 5 — Exposure report offer `/exposure-report`

**Serves P1. Currently an empty shell that the primary nav CTA points at.** Highest-priority build on the site.

**H1:** Find out what your contractors are shorting you into

**Lead:**
> Send us three months of contractor invoices, your attendance records and the states you operate in. We run them through the same statutory engine our customers use to release payments, and hand you back a report: claimed versus statutorily eligible, per contractor, per site, with the residual liability sized.
>
> Nothing is installed. Nothing is migrated. You get a report.

**What you'll receive** — four cards:
- Per-contractor variance: what was billed against what the statute requires
- Minimum wage shortfalls by state, zone and skill category
- PF, ESI and bonus reconciliation gaps against the challans you were given
- Your residual exposure under CLRA §21, EPF §8A and ESI §40, sized

**What we need from you:** three months of contractor invoices · contract worker attendance in whatever form you hold it · your site list with states · the PF and ESI challans your contractors supplied.

**Turnaround:** *[state a real number — do not publish one you cannot hit]*

**Terms:** Under NDA — we sign yours or send ours. Data deleted on request at the end of the engagement.

**Form — two steps.** Step 1 is four fields plus submit; step 2 appears after. Full schema in the restructure spec, Part G2. Key qualifiers: `contract_workers`, `states_operating`, `attendance_capture` (feasibility gate — no independent attendance means nothing to trim), `trigger` (inspection / client audit / Codes transition / past penalty), `can_share_data`.

**Below the form:** a two-page sample report as a scrollable preview. A prospect who sees the shape of the output converts materially better than one reading a description of it.

---

## SCREEN 6 — Compliance proof pack offer `/compliance-proof-pack`

**Serves P2. Also currently an empty shell.**

**H1:** See what your clients would find — before they look

**Lead:**
> Your principal employer clients are checking your compliance, or they will. Send us one month of roster, payroll and one client invoice. We reconcile them against the statute and show you exactly where the gaps are.
>
> Then we show you the pack you could hand your clients every month instead.

**What you'll receive:** roster-to-payroll reconciliation (paid days vs billed days, per client site) · minimum wage compliance per site, state, zone and skill · PF, ESI, PT and LWF checked against your challans with the aggregate-cap apportionment · bonus and gratuity provisioning position · a sample client-facing compliance pack for one contract.

**Why agencies do this:** compliance is what you lose bids over. A client-visible compliance record is a commercial asset, not an overhead.

**Form schema:** restructure spec, Part G3. Key qualifiers: `deployed_workers`, `states_operating`, `client_profile`, `clients_audit_compliance`, `days_to_invoice`.

---

## SCREEN 7 — Coverage matrix `/coverage`

**Serves P3 and P4.** Your single best SEO and RFP asset. Nothing else on the site converts a sceptic as efficiently.

**H1:** Statutory coverage, by jurisdiction
**Sub-line:** Coverage as at *[date]* · Verified against gazette notifications by a named owner · Last reviewed *[date]*

**Lead:**
> Most vendors say "all states." We publish the table. Every jurisdiction below shows what we load, to what depth, and when someone last checked it. Where a state has no sourced return format and we compute, record and evidence instead, it says so.

**Summary bar:** 22 PT rule packs · 16 LWF · EPF, ESI, TDS, bonus, gratuity, minimum wage, leave national

**The table.** 36 rows (28 states + 8 UTs). Columns: State/UT · Minimum Wages · Professional Tax · Labour Welfare Fund · Shops & Establishment · CLRA registers · Labour Code state rules. Chips per 3.3. Filter by state, filter by "show gaps only", sticky header, download as PDF.

Driven from `statutory-coverage-matrix.xlsx` Publish View so it stays in sync when the regulatory owner updates it.

**Legend, stated plainly:**
> **Manual** means the platform records and evidences the obligation and a named person produces the filing. We publish it because a buyer who discovers it themselves stops trusting every other row on this page.

**Central acts section.** The 20 acts, with the artifact produced for each.

**Statement band:**
> **On the Labour Codes we are deliberately conservative.** Every Code threshold change is a raise. Flipping globally would understate your obligations in states still operating the legacy acts — so the engine keeps the lower threshold binding and shows the Code figure alongside. You see both, and you are held to the stricter one.

**CTAs:** Primary *Check your states with us* · Secondary *Get the exposure report*

---

## SCREEN 8 — Pricing `/pricing`

**H1:** Priced on compliance complexity, not headcount

**Lead:** Most platforms charge by headcount, which prices a single-state office the same as a nine-state manufacturer with 1,200 contract workers. Yours is a different problem, so it's a different meter.

Three tiers as on the homepage, with two additions:

**Put numbers on the first two tiers.** "Per employee / month" with no figure reads as "we charge whatever we think you'll pay," and it loses you the mid-market buyer who self-qualifies on price before ever contacting a vendor.

**Add a commitments block** below the tiers:

| Commitment | Detail |
|---|---|
| Billing starts at go-live | Not at signature. You don't pay while an implementation runs. |
| Modules are licensed separately | Entitlement is enforced at the platform, not hidden in a menu. Buy what you need. |
| Migration is included | Replay, parallel run and go-live are part of onboarding, not a change order. |
| No charge for the exposure assessment shape | *[Confirm — if the assessment is paid, say the price here instead.]* |

**FAQ:** What counts as a contract worker for billing? · What happens if headcount fluctuates seasonally? · Is there a minimum term? · What's included in support?

---

## SCREEN 9 — Trust centre `/trust`

**Serves P4.** Replaces the current `/security` page, which was last updated 01/01/2025 under a 2026 copyright.

| Section | Content |
|---|---|
| **H1** | Trust centre |
| **Certifications** | Three certificates with number, registrar, issue and expiry, and the Finnovo entity named. Downloadable on request. |
| **Architecture** | Schema-per-tenant physical separation · two identity planes · storage tiers including dedicated bucket with customer-managed KMS key. |
| **Access control** | Persona → module → 21-verb vocabulary → data scope. Four-way separation on the money path with a person-level check. Three gates that must agree. |
| **Identity** | SAML 2.0 and OIDC SSO · SCIM · multi-factor · password policy with history and expiry · tenant-scoped API rate limiting. |
| **Data protection** | Encryption at rest with blind indexes · hash-chained PII-free audit ledger · retention as config-as-data · data-principal export and erasure · India data residency. Framed against **DPDP**, not GDPR. |
| **Availability** | Backup, restore verification, RPO and RTO. **Publish only what a drill has proven.** |
| **Sub-processors** | A named list. Enterprise reviewers ask for it and its absence stalls deals. |
| **Documents** | DPA template · security whitepaper · VAPT summary when available. |
| **CTA** | Primary: Request the security pack |

**Remove:** "DPDP Act Compliance: Fully compliant." The Rules' substantive deadline is May 2027 and nobody is compliant with an obligation that hasn't landed. Replace with the capability list.

---

## SCREEN 10 — Migration & replay `/platform/migration`

**Serves P1 and P3.** This page does not exist and it is the answer to your biggest objection.

**H1:** See every variance before you commit
**Lead:** The most common reason employers stay on a payroll system they dislike is fear of the move. We built the answer into the product.

Three steps: **Replay** (re-compute months you've already paid, report every disagreement, write nothing) · **Parallel run** (one entity or location, both systems, reconciled monthly) · **Go-live, one way** (no step reopens, no second migration, no unlock for anyone including us).

**Three design decisions** section: imported history physically outside the payroll tables · step status derived from what landed, never declared · go-live freezes permanently.

**Statement band:** *Billing starts at go-live, not at signature.*

**CTA:** Primary — *Run a replay on your data*

---

## SCREEN 11 — Product page template

Applies to all sixteen product pages. Each is 6–8 sections, 700–1,100 words.

1. **H1 + lead** — what it does in one sentence, for whom.
2. **The problem** — three cards, specific to this module.
3. **How it works** — 3–4 numbered steps or a flow.
4. **The moat** — the one thing here that a specialist structurally cannot do, in a statement band. Use the per-module moats from deck 4.
5. **Capabilities** — a scannable grid. No superlatives.
6. **What it isn't** — one honest paragraph. On ATS: native job-board posting is not live. On Learning: no content library.
7. **Related** — two links to adjacent modules.
8. **CTA** — the persona offer for whoever buys this module.

**Naming corrections across all product pages:**

| Current | Change to | Why |
|---|---|---|
| "Payroll & statutory — 100% automated calculations" | "Payroll & statutory — computed, evidenced, filed" | Absolute guarantee becomes a warranty |
| "Workforce Operations" (footer label for staffing) | "Staffing & Manpower Operations" | No agency owner clicks "Workforce Operations" |
| "Vendor compliance tracking" (PE nav sub-label) | "Verify contractor bills before you pay" | Tracking is what the consultancies do; the whole positioning is that you don't just track |
| "Zero Margin Leakage" / "100% Compliance Tracking" | "Attendance-to-payroll-to-invoice off one approved roster" / "PF and ESI challans generated and held as client proof" | Same for absolutes |

---

## SCREEN 12 — Exposure calculator `/tools/exposure-calculator`

**Replaces the ROI calculator.** Same interactive mechanic, right buyer, right number.

**Inputs:** contract workers engaged · states of operation (multi-select) · number of contractors · average monthly contractor billing value · industry.

**Output:** an indicative residual liability range under CLRA §21, EPF §8A and ESI §40 · the deviation categories most common in that industry and state mix · a per-contractor exposure estimate.

**Assumptions block, visible, not hidden.** State the model. A CFO who cannot see the assumptions will not forward the number.

**Gate:** results shown immediately; the emailed PDF version asks for a work email. Never gate the number itself — gating it destroys the sharing behaviour that makes this work.

**CTA:** Primary — *Get the real figure from your own invoices* → `/exposure-report`

**Retire `/platform/roi`** and 301 it here. The current ROI calculator asks for HR costs and returns HR savings, which serves the buyer you deprioritised, and it publishes ₹8.5L average savings, 60% cost reduction and a 12-month payback with no customers to average.

---

## SCREEN 13 — Book a demo `/demo`

**Fixes to the current page:**

- **Remove the fabricated logo strip** — TechCorp, FinServe, RetailHub — sitting directly above the lead form. This is the highest-risk item on the site.
- **Fix the navigation** — this page still renders the old header.
- **Employee count** currently starts at 500–1,000. Add *Under 100* and *100–500*.
- **Add a persona field** — I engage contract labour · I supply manpower · Neither, multi-state employer · Not sure. It routes the meeting to the right demo.
- **"Compliance Audit Report — instant analysis"** overpromises. Change to: *"A statutory review of your current setup, walked through with a compliance architect."*
- **Keep** the office block with FINNOVO® named — and mirror that entity into the global footer.

---

## SCREEN 14 — About `/about`

**Serves P4.** Enterprise buyers check who they are contracting with.

Sections: what yfy is and who it's for · the Finnovo entity, incorporation and Hyderabad address · why India-only, deliberately · the engineering philosophy (controls that refuse, published gaps) · the team · certifications with numbers · contact.

**One paragraph worth writing carefully:**
> We are a young company with three ISO certifications and few public references. We would rather prove the engine on your own data than show you someone else's logo. That is what the replay and the exposure assessment are for.

---

## SCREEN 15 — Integrations `/integrations`

Split into two lists using the honest-split component.

**Available today:** Zoho Books · Tally *(confirm)* · statutory portals via the filing agent · SSO via SAML 2.0 and OIDC · SCIM provisioning · REST API and webhooks.

**On the roadmap — with a quarter against each:** Naukri · LinkedIn · Indeed · background verification providers · SAP · Oracle NetSuite · corporate card feeds.

The current page lists job boards and BGV as native when the adapters raise even with credentials supplied. That gap surfaces in a demo, and it costs more than the honest roadmap would.

---

## SCREEN 16 — Resources

**`/resources/labour-codes`** — a live tracker of state rule-framing status, updated by the regulatory owner. This is your best organic acquisition asset for the next eighteen months.

**`/resources/compliance-calendar`** — statutory due dates by state and head. Keep and expand. Feeds the email signup.

**`/case-studies`** — keep the "(Demo)" labels. They are honest. But remove every customer-count claim elsewhere on the site so the two stop contradicting each other. Replace with implementation scenarios framed as scenarios, until real customers agree to be named.

**`/blog`** — three content lines only: labour code state-by-state analysis, contractor compliance for principal employers, staffing agency operations. Nothing generic about "the future of HR."

---

## SCREEN 17 — Partners

**Realign to the actual channel.**

| Keep | Change |
|---|---|
| CA & Accountants | Rename to **Labour law consultants & compliance firms** — this is the real channel |
| HR Consultants | Keep |
| SaaS Partners | Rename **Technology & implementation partners** |
| Recruitment Agencies | **Remove.** They sell into the module you deprioritised, and it collides with "Staffing Agency" under Who it's for, leaving a facility-management firm unsure whether they're a customer or a reseller |
| — | **Add: Payroll bureaus & white-label** — your highest-leverage channel, and the white-label capability already exists to support it |

---

# PART 6 — Cross-cutting corrections

## 6.1 Live-site items still outstanding

| # | Item | Where |
|---|---|---|
| 1 | Fabricated logos above the lead form | `/platform/demo` |
| 2 | "Trusted by India's fastest-growing enterprises" | Home hero |
| 3 | "Join India's leading enterprises that trust yfy®" | Home closing |
| 4 | "Zero Operational Downtime" | Home closing |
| 5 | "Labour Codes 2020" | Footer, closing CTA, meta keywords |
| 6 | Canonical points to `yfy.ai` from staging | Every page |
| 7 | `og:image` points to `yfy.ai` | Every page |
| 8 | "100% automated calculations" | Products nav |
| 9 | ROI figures — ₹8.5L, 60%, 12 months | Home |
| 10 | No legal entity in the footer | Every page |
| 11 | Certifications carry no numbers or registrar | Home, `/security` |
| 12 | ISO 27701 framed against GDPR | Home, `/security` |
| 13 | Header inconsistent across pages | `/platform/demo` and others |
| 14 | Pricing CTAs all route to `/platform/demo` | Home, `/pricing` |
| 15 | Security page dated 01/01/2025 | `/security` |
| 16 | Title tag sells the module list | Every page |

## 6.2 Accessibility and performance

WCAG 2.1 AA minimum. Violet on white passes at body size; **verify `--mute` on `--tint`** — it is the most-used combination on the site and the likeliest failure. Every interactive element keyboard-reachable with a visible focus ring. Coverage table needs proper `<th scope>` and a caption. Target LCP under 2.5s; the current hero animation is the thing to check first.

## 6.3 Mobile

Persona cards stack, full-width, primary CTA inside each. Coverage table becomes one card per state with chips wrapping. Forms are one field per row, `inputmode="numeric"` on phone, and the state multi-select becomes a searchable sheet, not a 36-item dropdown.

## 6.4 Analytics to instrument from day one

Hero persona card split (PE vs agency vs neither) · offer form step 1 → step 2 completion (target above 60%) · exposure calculator completion and email capture · `/coverage` dwell time · hot-lead ratio by persona · which persona page precedes each demo booking.

The first metric tells you within six weeks whether the segmentation thesis is right. That is worth more than the rest combined.

---

# PART 7 — Build order

| Phase | Screens | Why first |
|---|---|---|
| **0 — Unblock (today)** | Point the four dead links somewhere working. Remove the fabricated logos. | The site currently converts nothing, and the logos are a credibility risk |
| **1 — The offers (week 1)** | Screens 5, 6 with forms | The persona split's entire reason to exist |
| **2 — Persona pages (week 2)** | Screens 2, 3, 4 | Fixes the 404 and gives each persona somewhere to land |
| **3 — Homepage body (week 2–3)** | Sections 1.2–1.6 | The hero currently promises what the page never explains |
| **4 — Proof (week 3–4)** | Screens 7, 9, 10 | Coverage, trust, replay — the three artifacts every deck closes on |
| **5 — Claims and metadata (week 4)** | Part 6.1 in full | Two hours of copy work worth more than any of it |
| **6 — Depth (week 5+)** | Screens 11, 12, 15, 16, 17 | Product pages, calculator swap, integrations, channel |

---

# PART 8 — The one-line test

Before any page ships, answer three questions:

1. **Which persona is this for?** If the answer is "everyone," rewrite it.
2. **What does the primary CTA promise, and does the destination deliver exactly that?** If not, fix the destination or change the label.
3. **Is every claim on this page evidenceable within 48 hours?** If not, delete the claim.

Your product is stronger than your current website suggests. The mechanisms you can prove — the resolver ladder, the eligible-to-pay cap, the published coverage gaps, controls that refuse — are more distinctive than any superlative you could write. The site's job is to say those things plainly and route each visitor to the one offer that fits them.
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-09-02T20:11:13+05:30.

The user's current state is as follows:
Active Document: /Volumes/YFY/Website/yfy30032026/components/home/FinalCTA.js (LANGUAGE_JAVASCRIPT)
Cursor is on line: 39
Other open documents:
- /Volumes/YFY/Website/yfy30032026/app/integrations/page.js (LANGUAGE_JAVASCRIPT)
- /Volumes/YFY/Website/yfy30032026/components/partners/PartnerApplyForm.js (LANGUAGE_JAVASCRIPT)
- /Volumes/YFY/Website/yfy30032026/components/home/IsoCerts.js (LANGUAGE_JAVASCRIPT)
- /Volumes/YFY/Website/yfy30032026/app/products/products-overview.module.css (LANGUAGE_CSS)
- /Volumes/YFY/Website/yfy30032026/components/home/ComplianceUSP.module.css (LANGUAGE_CSS)
</ADDITIONAL_METADATA>
