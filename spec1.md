<USER_REQUEST>
# yfy.ai — Website Restructure Specification

**Prepared:** August 2026
**Scope:** navigation, homepage, three persona pages, two offer landing pages, form schemas, and a full change log against the current site.
**Principle throughout:** every claim on the site must be evidenceable within 48 hours. The product is strong enough that honesty converts better than inflation.

---

# PART A — Global change log

Everything in this table is a change to something that exists today. Ordered by urgency.

## A1. Remove immediately (today)

| # | Where | Current | Change to | Why |
|---|---|---|---|---|
| 1 | `/platform/demo` | "Trusted by Fast-Growing Companies: TechCorp · FinServe · RetailHub" | Delete the entire logo strip | Fabricated customer names sitting directly above the lead form. Highest-risk item on the site. |
| 2 | Homepage hero trust bar | "Trusted by **India's fastest-growing enterprises**" | "Built in Hyderabad by Finnovo Tech Functional Pvt Ltd · ISO 9001 · 27001 · 27701" | No named customers exist. Case studies carry a (Demo) label; this line contradicts them. |
| 3 | `/platform` | "2,000+ Indian companies" | Delete | Same reason. |
| 4 | All pages | "Labour Codes 2020" (chips, footer, closing CTA, meta keywords) | "Labour Codes" or "Labour Codes rollout" | The Codes were operationalised Nov 2025 with central rules May 2026. "2020" makes the site read as years out of date. |
| 5 | All pages `<head>` | `canonical: https://yfy.ai` while serving from the staging host | Either point yfy.ai at this build, or set canonical to the live host | Currently telling search engines the real page is elsewhere. Zero indexation until fixed. |
| 6 | All pages `<head>` | `og:image: https://yfy.ai/og-image.png` | Point at a live image on the serving host | If it 404s, every LinkedIn/WhatsApp share renders blank. |

## A2. Claims to correct (this week)

| # | Where | Current | Change to |
|---|---|---|---|
| 7 | Products nav subtitle | "Payroll & statutory — 100% automated calculations" | "Payroll & statutory — computed, evidenced, filed" |
| 8 | `/products/compliance` | "Zero Compliance Penalties", "100% Legal Protection" | "Every statutory deadline tracked per registered location, with the evidence held against it" |
| 9 | `/products/staffing` | "Zero Margin Leakage", "100% Compliance Tracking" | "Attendance-to-payroll-to-invoice off one approved roster", "PF and ESI challans generated and held as client proof" |
| 10 | `/products/compliance` and staffing | "Automated portal filing / pre-formatted statutory return files" (blanket) | Split it: **file generation** for TDS, PF and ESI; **compute, record, remit and evidence** for PT and LWF. See A3. |
| 11 | `/platform` | "28 States — Complete Indian jurisdiction support" | "22 states with professional tax rule packs · 16 with labour welfare fund · EPF, ESI, TDS, bonus, gratuity and minimum wage nationally. See the full coverage matrix →" |
| 12 | `/security` | "DPDP Act Compliance: Fully compliant" | "Built for DPDP: data-principal export and erasure, consent and retention as policy, hash-chained audit ledger, India data residency" |
| 13 | `/security` | "Last Updated: 01/01/2025" | Current date, and set a quarterly review reminder |
| 14 | Homepage ROI block | "₹8.5L+ Average Annual Savings · 60% Compliance Cost Reduction · 12 months Typical Payback" | Remove the averages. Keep the calculator, label its output "Based on the figures you entered", and list the assumptions underneath. |
| 15 | `/integrations` | Naukri, LinkedIn, Indeed, SAP, Oracle NetSuite, GraphQL listed as native | Split the page into **Available today** and **On the roadmap — [quarter]**. Only Zoho Books, Tally (verify), and the statutory portals go in the first list. |
| 16 | `/platform` | "On-Premise Enterprise Deployment" | Remove. Replace with "Dedicated tenant with your own encryption key and isolated storage bucket" |
| 17 | Footer | "yfy® is a registered trademark." | "yfy® is a registered trademark of Finnovo Tech Functional Private Limited, Hyderabad." |
| 18 | Homepage badge | "India's First Workforce Intelligent Operating System" | Delete. It competes with the H1's compliance-first positioning and is unverifiable. |

## A3. The filing claim — exact wording to use everywhere

Replace every blanket "automated filing" claim with this block. It is honest, and the honesty is itself differentiating:

> **What we generate as a file:** TDS (Form 138, Q1–Q3), PF (ECR), ESI (Monthly Contribution, in the department's own BIFF format).
>
> **What we compute, record and evidence:** Professional Tax and Labour Welfare Fund. Every state has its own return format and its own portal. We do not invent formats we cannot source — we compute the liability to the rupee with the employer/employee split, record the filing and the payment, and hold both the return and the receipt in the evidence vault against the right state and wage month.
>
> **What is gated externally:** TDS Q4 / Annexure II awaits the ITD notification. Form 16 depends on TRACES processing.

## A4. Structural additions

| # | New | Purpose |
|---|---|---|
| 19 | `/coverage` — live statutory coverage matrix, date-stamped | The RFP artifact and the SEO asset. Replaces the "28 states" claim. |
| 20 | `/solutions/principal-employers` | Persona page. Part D. |
| 21 | `/solutions/staffing-agencies` | Persona page. Part E. |
| 22 | `/solutions/multi-state-employers` | Persona page. Part F. |
| 23 | `/exposure-report` | Dedicated offer landing page + form. Part G. |
| 24 | `/compliance-proof-pack` | Dedicated offer landing page + form. Part G. |
| 25 | `/about` — add the Finnovo entity, the Hyderabad address, and the founding story | Enterprise buyers check who they're contracting with. |

## A5. The CTA problem — the single biggest conversion fix

Today, nine different button labels all resolve to `/platform/demo`:

`Get your free exposure report` · `Compliance readiness check` · `Talk to sales` · `Book a Live Demo` · `Schedule a Live Demo` · `Request Enterprise Demo` · `Calculate My Savings` · `Contact` · `Explore Platform`

A visitor clicks the strongest offer on the site and lands on a generic demo form. The promise breaks at peak intent.

**New CTA map:**

| Button label | Destination |
|---|---|
| Get your contractor exposure report | `/exposure-report` |
| Get your compliance proof pack | `/compliance-proof-pack` |
| See how the statutory engine works | `/platform` |
| Check your state coverage | `/coverage` |
| Book a demo | `/demo` |
| Talk to sales | `/demo?intent=enterprise` |

Also on `/demo`: the Employee Count dropdown currently starts at **500–1,000**. Add **Under 100**, **100–500**. It currently excludes most of your staffing ICP and every mid-size manufacturer.

---

# PART B — Navigation, restructured by persona

## B1. Current structure and what's wrong with it

Your nav is organised by internal module architecture; your GTM is organised by persona. They never meet.

- **Products → Workforce Operations** is where the staffing product lives. No agency owner will ever click "Workforce Operations."
- **Solutions → By Role** (HR Leaders / Finance / IT) is the default SaaS split. It contains neither a plant IR manager nor an agency owner — your two actual buyers.
- The Principal Employer capability, your single strongest differentiator, has no page of its own. It is a bullet inside Compliance Intelligence.

## B2. New top-level navigation

```
[yfy logo]   Who it's for ▾   Platform ▾   Products ▾   Pricing   Resources ▾      [Get your exposure report]
```

Five items. "Who it's for" sits first because persona routing is the whole strategy.

### Who it's for ▾

| Label | Sub-label | Destination |
|---|---|---|
| **Principal Employers** | You engage contract labour through vendors | `/solutions/principal-employers` |
| **Staffing & Manpower Agencies** | You supply workers to client sites | `/solutions/staffing-agencies` |
| **Multi-State Employers** | Payroll and statutory across many states | `/solutions/multi-state-employers` |
| — divider — | | |
| By industry: Manufacturing & Pharma | | `/industries/manufacturing` |
| By industry: Facility Management & Security | | `/industries/facility-management` |
| By industry: Logistics & Warehousing | | `/industries/logistics` |
| — divider — | | |
| For HR Leaders / Finance / IT | | keep existing role pages, demoted |

### Platform ▾

| Label | Sub-label | Destination |
|---|---|---|
| **How the statutory engine works** | Applicability → rules → returns → evidence | `/platform` |
| **Statutory coverage by state** | What we load, where, verified when | `/coverage` |
| **Security & architecture** | Tenant isolation, SSO, encryption, ISO | `/security` |
| **Migration from your current system** | Replay, parallel run, go-live | `/platform/migration` |
| **Integrations** | | `/integrations` |

`/platform/migration` is new and worth building. The replay capability — re-computing a prospect's already-paid months and reporting every variance without writing anything — removes the largest objection to switching payroll vendors. It currently appears nowhere on the site.

### Products ▾

Reorganised so the two lead products sit at the top and are named the way buyers name them.

| Group | Items |
|---|---|
| **Contract Labour & Compliance** | Contractor Bill Verification · Statutory Compliance & Returns · Compliance Calendar & Obligations · Evidence Vault |
| **Staffing Operations** | Roster & Site Muster · Multi-Client Payroll · Client Billing & GST Invoicing · Agency Profitability |
| **Core HR & Payroll** | Payroll & Statutory · Core HRMS & Attendance · Expense Management · Asset Management |
| **Talent & Performance** | Recruitment & ATS · Performance Management · Learning · Workforce Planning |
| **Platform** | e-Vault DMS · Service Desk · Analytics · White-Label |

Note: **Contractor Bill Verification gets its own product page.** It is your only genuinely uncontested capability and it currently has no URL.

### Resources ▾

Blog · Case Studies · **Statutory Coverage Matrix** · Compliance Calendar · **Labour Codes Impact Guide** · Community

### Pricing

Promote to top level. It is currently only a homepage section, and enterprise buyers look for it in the nav.

---

# PART C — Homepage, full copy

Section order matters. Every section below is in final sequence.

## C1. Hero

**Eyebrow:** *(delete the current badge — no replacement)*

**H1:**
> The Compliance-First Workforce Platform for Indian Companies

**Subhead:**
> Two lenses on the same statutory engine. If you engage contract labour, we verify what your contractors actually paid before you release their bill. If you supply manpower, we run roster to payroll to client invoice off one approved muster — and prove your compliance to the clients auditing you.

**Persona CTA row** — this replaces the current two buttons:

<table>
<tr>
<th>Card 1</th>
<th>Card 2</th>
</tr>
<tr>
<td>
<b>I engage contract labour</b><br>
Manufacturing, infrastructure, multi-plant employers<br><br>
<i>Find out what your contractors are shorting — and what it exposes you to under CLRA §21, EPF §8A and ESI §40.</i><br><br>
<b>[ Get your contractor exposure report → ]</b>
</td>
<td>
<b>I supply manpower</b><br>
Staffing, facility management, security, logistics<br><br>
<i>See what your clients will find when they audit you — before they do.</i><br><br>
<b>[ Get your compliance proof pack → ]</b>
</td>
</tr>
</table>

**Tertiary text link, below the cards:**
> Neither — we just need multi-state payroll and statutory →

**Trust bar:**
> Built in Hyderabad by Finnovo Tech Functional Pvt Ltd · ISO 9001:2015 · ISO 27001:2022 · ISO/IEC 27701:2019 · Expert-led migration with parallel run

**Remove from hero:** the eight module chips (ATS / HRMS / Payroll / PMS / LMS / Workforce Intelligence / Statutory Compliance / Labour Codes 2020). They contradict the compliance-first positioning by announcing "we're a generic suite" one line after "we're compliance-first." Move them to C6.

## C2. The problem (new section)

**H2:** Your contractor's compliance failure becomes your liability

> Under CLRA §21, EPF §8A and ESI §40, if your labour contractor underpays wages, shorts statutory bonus, or bills you for PF and ESI they never remit, you become the payer of last resort. You did not compute the wage. You are still liable for it.
>
> Most platforms give you somewhere to file the contractor's invoice. We check it.

Three stat blocks — **use only figures you can source, with the source named**:
- The wage-definition change under the Code on Wages is expected to raise statutory costs by 3–15% depending on existing salary structures
- Each state and UT frames its own rules under the Codes; most are still at draft stage
- *[third block: replace with a sourced figure or delete]*

## C3. How the engine works

**H2:** Report → verify → release

Four steps, horizontal:

1. **Contractor reports.** Monthly bill with per-worker lines, plus EPF, ESI and LWF challans.
2. **We trim on your own attendance.** Your muster or biometric data independently caps the claimed man-days.
3. **We check against the statute.** Minimum wage resolved for that worker's site, skill and zone. Statutory bonus under the Payment of Bonus Act. PF, ESI and PT for that jurisdiction.
4. **You release the verified figure.** An eligible-to-pay amount, not a report. Payment above it requires an explicit human override with a recorded reason.

**Pull quote:**
> The principal employer didn't compute the wage. The contractor reports it — the principal employer checks it.

**CTA:** See how the statutory engine works → `/platform`

## C4. Statutory coverage (new section)

**H2:** Published coverage, not a claim

> 22 states with professional tax rule packs. 16 with labour welfare fund. EPF, ESI, TDS, bonus, gratuity, minimum wage and leave nationally. Every jurisdiction shows what we load, to what depth, and when it was last verified against the gazette.
>
> Where we generate the government's own return file, we say so. Where the state has no sourced format and we compute, record and evidence instead, we say that too.

**CTA:** View the coverage matrix → `/coverage`

This section exists to do something no competitor does: publish the gaps. It converts your most sceptical visitor.

## C5. Proof and controls

**H2:** Controls that refuse, not controls that warn

Four cards:

- **Four-way separation on the money path.** Compute, approve the figures, approve the payment, disburse — four verbs, four roles, and a person-level check so the human who approved the payroll cannot also approve its payment.
- **Tamper-evident evidence.** Append-only, hash-chained document ledger with an integrity-verification endpoint. Deliberately holds no personal data, so it can be retained and produced without creating a data-protection obligation of its own.
- **Migration that cannot be unpicked.** Imported history lives physically outside the payroll tables. Go-live is a one-way door with no unlock for anyone — including us.
- **Physical tenant separation.** Schema-per-tenant on PostgreSQL. No shared table with a customer-id column that a missing filter could leak across.

## C6. Modules

**H2:** One tenant, one database, one contract

The module chips move here, as a grid with one line each. Order them by how you sell:

Contract Labour · Statutory Compliance · Payroll · Staffing Operations · Core HRMS & Attendance · Expense · e-Vault · Recruitment & ATS · Performance · Assets · Service Desk · Workforce Planning · Learning

## C7. Pricing

Keep the existing three-tier structure — segmentation by compliance complexity rather than headcount is the best-conceived thing on the current site. Two changes:

1. **Put numbers on the first two tiers.** "Per employee / month" with no figure reads as "we charge whatever we think you'll pay."
2. **Add one line under every tier:** *Billing starts at go-live, not at signature.* This is a real, provable, zero-cost differentiator that most competitors cannot match, and it is currently nowhere on the site.

Rename tier CTAs so each goes to the right destination:
- Multi-state employer → `Check your state coverage` → `/coverage`
- Principal employer → `Get your contractor exposure report` → `/exposure-report`
- Enterprise group → `Talk to sales` → `/demo?intent=enterprise`

## C8. Certifications

Keep. Add the certificate numbers, the registrar, and the entity name — a buyer verifies against an accreditation body and needs those three things:

> ISO 9001:2015 — IN/19920701/2497 — ICV Assessments
> ISO 27001:2022 — IN/48720702/6157 — ICV Assessments
> ISO/IEC 27701:2019 — MQCPF72H25 — MQCI UK
> Issued to Finnovo Tech Functional Private Limited. Certificates available on request.

## C9. Closing CTA

Repeat the two persona cards from C1. Do not introduce a third or fourth option here.

---

# PART D — `/solutions/principal-employers`

**Title tag:** Contractor Bill Verification & Principal Employer Compliance | yfy.ai
**Meta description:** Verify what your labour contractors actually paid before you release their bill. CLRA registers, per-worker PF and ESI reconciliation, and a live view of your residual liability across every site and state.

| Section | Content |
|---|---|
| **H1** | Your contractors' compliance is your liability. Check it before you pay. |
| **Subhead** | You engage labour through vendors across plants and states. Under CLRA §21, EPF §8A and ESI §40 their failures land on you. yfy verifies each monthly bill against your own attendance and the statute that applies at that site, and gives you an eligible-to-pay figure before money moves. |
| **Primary CTA** | Get your contractor exposure report |
| **Secondary CTA** | See a sample exposure report |
| **Section 1 — The exposure** | Explain residual liability plainly. Name the three sections. Note that the wage-definition change flows directly into every contractor bill. |
| **Section 2 — Report, verify, release** | The four-step flow from C3, expanded, with the deviation queue and 72-hour SLA. |
| **Section 3 — Vendor governance** | KYC with expiry tracking for incorporation, CLRA licence, PF, ESI, PT, LWF and WC/EC insurance. Agreements and rate cards. Per-state establishment codes so a multi-factory PE reconciles challans per site. Vendor compliance scoring. |
| **Section 4 — Deployment control** | Propose-then-confirm deployment. Biometric device ingestion and gate access. Migrant worker handling. Site-supervisor view scoped to their own sites only. |
| **Section 5 — Registers and returns** | CLRA register pack. What generates as a file vs. what is computed and evidenced (use the A3 block verbatim). |
| **Section 6 — The exposure dashboard** | Per-contractor, per-site, per-state aggregation. Screenshot. |
| **Section 7 — What we don't do** | *Keep this section.* "We do not run your contractors' payroll — they do. We check what they report against what the statute requires. If you want us to run it too, that's our staffing lens, and your contractor can adopt it." Honesty here builds more credibility than another feature block. |
| **FAQ** | 6 questions — see D1 |
| **Closing CTA** | Get your contractor exposure report |

## D1. FAQ questions to answer

1. We already use a compliance consultancy. How is this different? *(They audit after the fact; we sit in the payment path before release.)*
2. Our contractors won't share worker-level data. What then? *(Vendor portal, scoped so a contractor sees only their own roster; the bill line detail is already on their invoice.)*
3. How do you know the right minimum wage for each site? *(State, zone and skill category resolved per worker; coverage matrix published.)*
4. What happens when a check fails? *(Per-worker deviation into case management on a 72-hour SLA; payment capped at the eligible figure; override requires a recorded reason.)*
5. Do we have to move our own payroll to yfy? *(No. The contract labour module can run alone.)*
6. How long does implementation take? *(Give a real number by site count.)*

---

# PART E — `/solutions/staffing-agencies`

**Title tag:** Staffing & Manpower Agency Software — Roster to Payroll to Client Invoice | yfy.ai
**Meta description:** One approved roster drives worker payroll, statutory liability, client billing and GST invoicing. Prove your compliance to the principal employers auditing you.

| Section | Content |
|---|---|
| **H1** | One approved roster. Payroll, statutory, billing and GST — all from it. |
| **Subhead** | You are the employer of record for every worker you deploy. PF, ESI, PT, LWF, bonus and gratuity sit with you. So does the client invoice. yfy runs both off the same daily muster, and produces the compliance proof your clients keep asking for. |
| **Primary CTA** | Get your compliance proof pack |
| **Secondary CTA** | Book a live demo |
| **Section 1 — The roster is the spine** | One approved assignment-day row drives four flows at once: worker payroll, statutory liability, client billing, GST invoice. Diagram this. |
| **Section 2 — The arithmetic nobody gets right** | *This is your strongest section — lead the demo with it.* One worker earning different wages at different clients in one month. The statutory cap applies once on the aggregate, then apportions back to each client line. Spreadsheet-run agencies get this wrong every month and it shows up as either margin leakage or a compliance gap. |
| **Section 3 — Site muster** | Mobile-first, reachable by SMS magic link, per-tap auto-save, place-cover, offline capable, geo-tagged. Supervisors need no app install. |
| **Section 4 — Multi-client payroll** | Client-specific wage rules, state minimum wage per site, overtime, and per-contract SLA terms. |
| **Section 5 — Billing and cash flow** | Approved muster → invoice with your markup → GST → collections. Per-contract profitability. Days from month-end to invoice raised. |
| **Section 6 — Prove it to your clients** | ECR and ESI challans generated and packaged as a client-facing compliance pack. The client-visible window: give a principal employer a scoped, read-only view of their own deployment. **This is how you win bids.** |
| **Section 7 — Demand planning** | Duty roster from site requirements, bulk assignment, week-ahead fill forecasting, exception-first deployment control. |
| **FAQ** | 6 questions — see E1 |
| **Closing CTA** | Get your compliance proof pack |

## E1. FAQ questions to answer

1. Different markups per client — can we configure that? *(Yes, per contract.)*
2. Our sites have poor connectivity. How does muster work? *(Offline mode, syncs on reconnect.)*
3. How does this help us win contracts? *(Section 6 — a client-visible compliance window is a differentiator in a bid.)*
4. We run on Excel and Tally today. How hard is the move? *(Replay, parallel run, go-live at a slice first.)*
5. Can our principal employer clients see our data? *(Only what you grant, scoped to their own deployment.)*
6. What about GST on manpower supply? *(Handled in the invoice engine.)*

---

# PART F — `/solutions/multi-state-employers`

The quieter third path. Shorter page, four sections.

| Section | Content |
|---|---|
| **H1** | Payroll and statutory across every state you operate in |
| **Subhead** | Multiple entities, multiple states, one payroll. PT and LWF resolved to the right registration for the wage month, not for today. Returns generated where a format exists, computed and evidenced where it doesn't. |
| **Section 1** | Multi-entity, multi-location, segmented registers with an enforced partition invariant — nobody paid twice, nobody missed. |
| **Section 2** | The statutory identity registry: which registration each row files under. Ambiguity refuses rather than guessing. |
| **Section 3** | Obligation register with due dates per registered location. Dismissals require a written reason and re-surface at the statutory deadline. |
| **Section 4** | Migration: replay your already-paid months, see every variance, then go live. |
| **CTA** | Check your state coverage → `/coverage` |

---

# PART G — The two offer pages and their forms

## G1. Design principles for both forms

**Two steps, not one.** Step 1 asks four fields and shows the submit button. Step 2 appears after step 1 is submitted, framed as "help us size your report." You capture the lead either way; the qualification data is a bonus, not a gate.

**Never ask for budget or purchase timeline on a first form.** It signals you're selling, not helping, and it depresses completion.

**Validate work email against free domains.** Reject gmail/yahoo/outlook with an inline message, not a silent failure.

**Hidden fields on every submission:** `utm_source`, `utm_medium`, `utm_campaign`, `referrer`, `landing_page`, `persona` (pe | agency | multistate), `submitted_at`, `page_variant`.

**Set expectations on the page, not in the confirmation email:** what they'll receive, what data you need from them, and how long it takes.

---

## G2. `/exposure-report` — Principal Employer

### Page copy

**H1:** Find out what your contractors are shorting you into

**Subhead:**
> Send us three months of contractor invoices, your attendance records and the states you operate in. We run them through the same statutory engine our customers use to release payments, and hand you back a report: claimed versus statutorily eligible, per contractor, per site, with the residual liability sized.
>
> Nothing is installed. Nothing is migrated. You get a report.

**What you'll receive** (four cards):
- Per-contractor variance: what was billed against what the statute requires
- Minimum wage shortfalls by state, zone and skill category
- PF, ESI and bonus reconciliation gaps against the challans you were given
- Your residual exposure under CLRA §21, EPF §8A and ESI §40, sized

**What we need from you:** three months of contractor invoices, your contract worker attendance in whatever form you hold it, your site list with states, and the PF/ESI challans your contractors provided.

**Turnaround:** *[state it — 10 working days is credible]*

**Under NDA.** We sign yours or send ours. Data is deleted on request at the end of the engagement.

### Form schema — Step 1 (four fields, then submit)

| Field | Type | Validation / options |
|---|---|---|
| `full_name` | text | required |
| `work_email` | email | required; reject free-mail domains |
| `phone` | tel, +91 default | required, 10 digits |
| `company_name` | text | required |

### Form schema — Step 2 (qualification)

| Field | Type | Options | Why you're asking |
|---|---|---|---|
| `job_title` | select | Plant Head · HR Head / CHRO · IR / Compliance Manager · CFO / Finance Head · Procurement · Other | Buying role |
| `industry` | select | Pharma / API · Auto components · FMCG & food processing · Engineering & metals · EPC & infrastructure · Logistics & warehousing · Textiles · Healthcare · Other | Vertical for references |
| `own_employees` | select | Under 100 · 100–500 · 500–1,000 · 1,000–5,000 · 5,000+ | Sizing |
| `contract_workers` | select | Under 100 · 100–500 · 500–2,000 · 2,000–5,000 · 5,000+ | **Primary qualifier — this sizes the deal** |
| `num_contractors` | select | 1–5 · 6–15 · 16–50 · 50+ | Complexity and the vendor-onboarding opportunity |
| `states_operating` | multi-select | 36 states and UTs | **Primary qualifier — compliance complexity is multiplicative** |
| `num_sites` | select | 1 · 2–5 · 6–15 · 16+ | Implementation sizing |
| `monthly_contractor_spend` | select | Under ₹25L · ₹25L–1Cr · ₹1–5Cr · ₹5Cr+ | Sizes exposure and therefore the deal |
| `attendance_capture` | select | Biometric at gate · Manual muster register · Contractor-provided sheets · We don't capture it | **Feasibility gate — no independent attendance means no trim** |
| `challans_collected` | select | Always · Sometimes · Rarely · Never | Feasibility, and a finding in itself |
| `current_approach` | multi-select | External compliance consultancy · In-house team · Our HRMS · Excel · Nothing formal | Displacement target and budget signal |
| `trigger` | select | Upcoming labour inspection · Client or parent-company audit · Labour Codes transition · Past penalty or notice · New plant or state · General review | **Highest-value field — tells you the urgency and the pitch** |
| `can_share_data` | radio | Yes · Yes, with internal approval · Not yet | Deliverability |
| `notes` | textarea | optional | |
| `consent` | checkbox | required | Privacy policy link |

### Lead scoring

| Score | Condition |
|---|---|
| **Hot** | contract_workers ≥ 500 AND states ≥ 3 AND can_share_data = Yes |
| **Warm** | contract_workers ≥ 100 AND states ≥ 2 |
| **Nurture** | Everything else — put on the compliance calendar list, don't chase |

---

## G3. `/compliance-proof-pack` — Staffing Agency

### Page copy

**H1:** See what your clients will find when they audit you

**Subhead:**
> Your principal employer clients are checking your compliance — or they will. Send us one month of roster, payroll and one client invoice. We reconcile them against the statute and show you exactly where the gaps are, before someone else does.
>
> Then we show you the pack you could hand your clients every month instead.

**What you'll receive:**
- Roster-to-payroll reconciliation: paid days versus billed days, per client site
- Minimum wage compliance per site, state, zone and skill
- PF, ESI, PT and LWF check against your challans, with the aggregate-cap apportionment across clients
- Statutory bonus and gratuity provisioning position
- A sample client-facing compliance pack for one of your contracts

**Why agencies do this:** compliance is what you lose bids over. A client-visible compliance record is a commercial asset, not an overhead.

**What we need:** one month of deployed roster with client sites, that month's payroll register, one client invoice, and your PF/ESI challans.

### Form schema — Step 1

Same four fields as G2.

### Form schema — Step 2

| Field | Type | Options | Why |
|---|---|---|---|
| `job_title` | select | Founder / MD · Operations Head · Compliance / HR Head · Finance Head · Business Head · Other | Owner-led firms close faster |
| `service_type` | multi-select | General manpower supply · Facility management & housekeeping · Security services · Logistics & warehouse manpower · Industrial / technical manpower · IT staffing · Other | **Segment fit — FM and security are the sweet spot** |
| `deployed_workers` | select | Under 200 · 200–1,000 · 1,000–5,000 · 5,000–15,000 · 15,000+ | **Primary qualifier and pricing basis** |
| `own_employees` | select | Under 25 · 25–100 · 100–500 · 500+ | Their internal HRMS need |
| `num_clients` | select | 1–5 · 6–20 · 21–50 · 50+ | Billing complexity |
| `num_sites` | select | 1–10 · 11–50 · 51–200 · 200+ | Muster complexity |
| `states_operating` | multi-select | 36 states and UTs | **Primary qualifier** |
| `client_profile` | multi-select | Listed companies · MNCs · Large unlisted · SMEs · Government / PSU | **Adverse-selection filter — audited clients means real budget** |
| `clients_audit_compliance` | select | Yes, regularly · Occasionally · Only at contract renewal · No | **The single best predictor of urgency** |
| `days_to_invoice` | select | Within 5 days of month-end · 6–10 days · 11–20 days · Over 20 days | Cash-flow pain, quantified — your strongest commercial hook |
| `attendance_method` | select | Mobile app · Biometric at site · Paper muster · Supervisor WhatsApp / calls · Mixed | Implementation effort |
| `current_systems` | multi-select | Excel · Tally · Payroll software (name) · HRMS (name) · Custom built · Nothing | Displacement |
| `biggest_pain` | select | Monthly payroll accuracy · Time to raise client invoices · Compliance proof for clients · Margin leakage · Attendance disputes · Statutory filings | **Tells you which demo to run** |
| `can_share_data` | radio | Yes · Yes, with approval · Not yet | Deliverability |
| `consent` | checkbox | required | |

### Lead scoring

| Score | Condition |
|---|---|
| **Hot** | deployed_workers ≥ 1,000 AND states ≥ 3 AND clients_audit_compliance ∈ {regularly, occasionally} AND client_profile includes Listed or MNC |
| **Warm** | deployed_workers ≥ 500 AND states ≥ 2 |
| **Nurture** | Everything else |

---

## G4. `/demo` — repairs to the existing form

Keep it as the generic path, but fix:

| Field | Change |
|---|---|
| Logo strip | **Delete** (fabricated names) |
| `employee_count` | Add "Under 100" and "100–500" bands |
| **New:** `persona` | select — I engage contract labour · I supply manpower · Neither, multi-state employer · Not sure |
| `primary_interest` | Re-list against the new product names, contract labour first |
| Page copy | "Compliance Audit Report — instant analysis" currently overpromises. Change to "A statutory review of your current setup, walked through with a compliance architect." |

---

# PART H — Build order

| Phase | Items | Days |
|---|---|---|
| **1 — Risk removal** | A1 (all six), G4 logo strip | 1 |
| **2 — Persona routing** | B2 nav, D, E, F persona pages, C1 hero rewrite | 5–7 |
| **3 — The offers** | G2 and G3 pages and forms, CTA map from A5 | 5 |
| **4 — Claims** | A2, A3 filing block everywhere, `/coverage` page | 5 |
| **5 — Depth** | Contractor Bill Verification product page, `/platform/migration`, pricing numbers, C8 certificate detail | 5 |

## Measure these after launch

- Hero persona card split (PE vs agency vs neither) — tells you whether your segment thesis is right
- Step 1 → Step 2 completion rate on both offer forms — target above 60%
- Exposure report requests per week
- Hot-lead ratio by persona
- `/coverage` page time-on-page — a long dwell means it's doing its job as the sceptic-converter

## One thing not to do

Do not add a live chat widget or an AI chatbot to this site. Your buyer is a compliance or plant manager evaluating a system that will hold their statutory liability. A chat bubble asking "Hi! 👋 How can I help?" undercuts every serious signal the rest of the page is sending.
</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-09-02T20:10:54+05:30.

The user's current state is as follows:
Active Document: /Volumes/YFY/Website/yfy30032026/components/home/FinalCTA.js (LANGUAGE_JAVASCRIPT)
Cursor is on line: 39
Other open documents:
- /Volumes/YFY/Website/yfy30032026/components/home/FinalCTA.js (LANGUAGE_JAVASCRIPT)
- /Volumes/YFY/Website/yfy30032026/components/partners/PartnerApplyForm.module.css (LANGUAGE_CSS)
- /Volumes/YFY/Website/yfy30032026/components/IndiaMap/Tooltip.js (LANGUAGE_JAVASCRIPT)
- /Volumes/YFY/Website/yfy30032026/components/partners/PartnersTrust.js (LANGUAGE_JAVASCRIPT)
- /Volumes/YFY/Website/yfy30032026/app/solutions/it/page.js (LANGUAGE_JAVASCRIPT)
</ADDITIONAL_METADATA>
