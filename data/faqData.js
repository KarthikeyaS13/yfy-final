export const FAQ_ITEMS = [
  {
    question: "How does yfy protect Principal Employers from CLRA §21, EPF §8A, and ESI §40 liability?",
    answer: "Under Section 21 of the Contract Labour (Regulation and Abolition) Act, Section 8A of the Employees' Provident Funds Act, and Section 40 of the ESI Act, principal employers are held strictly liable for contractor defaults in wages and statutory dues. yfy sits between contractor invoices and Accounts Payable: it automatically reconciles billed worker days against biometric gate logs, audits ECR challans to verify vendor PF/ESI contributions specifically cover your plant or establishment, and computes a capped release figure that can only be exceeded by an explicit human override with a recorded justification — which is exactly what an inspection asks for."
  },
  {
    question: "Does a Principal Employer with 500 direct employees and 1,200 contract workers pay for 1,700 software users?",
    answer: "No. You do not pay enterprise software seat licenses for third-party contract workers. Your own direct employees (if managed on yfy) are billed under the payroll seat tier, while contract workers are metered strictly per verified contractor-invoice active headcount under your compliance-services budget — at a fraction of software seat licenses and paid against contractor risk management spend rather than HR software budgets."
  },
  {
    question: "Does yfy replace our existing HRMS or ERP (such as SAP, Darwinbox, ZingHR, greytHR, or Workday)?",
    answer: "No. yfy is built to sit alongside your existing enterprise stack with zero rip-and-replace. Conventional HRMS handles internal employee records, leave, and white-collar payslips. yfy acts as the dedicated statutory compliance and contractor verification engine, handling multi-state jurisdictional taxation, contractor overbilling, and labour code transitions. It syncs clean payroll journal entries and verified invoice clearances directly back into SAP, Oracle, Tally, or your HRMS via automated REST APIs."
  },
  {
    question: "How does the 3-Month Historical Payroll Replay work without disrupting live payroll?",
    answer: "We operate on the principle of 'starting with the number, not the software.' Under an NDA, you supply 3 months of past anonymized payroll inputs and contractor invoices. yfy executes a read-only historical replay through our dual-running statutory calculation engine, generating a forensic Variance & Exposure Report that highlights every unhedged rupee, PT/LWF misfiling, or contractor overbilling across your establishments — with zero risk to live production systems."
  },
  {
    question: "How does yfy handle multi-state Professional Tax (PT) and Labour Welfare Fund (LWF) across 36 jurisdictions?",
    answer: "Multi-state payroll in India is fundamentally a jurisdiction problem spanning 22 Professional Tax states, 16 Labour Welfare Fund acts, and dual-running Labour Codes. yfy eliminates silent cross-state fallthrough by binding every employee and contractor to an establishment-level statutory certificate. Rules are gazette-checked in real-time, preventing high-liability errors such as filing Karnataka remote workers under Maharashtra PT or missing state-specific half-yearly LWF contribution deadlines."
  },
  {
    question: "How does yfy help Staffing & Manpower Agencies protect margins and unlock held client payments?",
    answer: "Staffing agencies operate on thin 3%–5% gross margins that evaporate when billed days drift from muster logs or when client payments are frozen pending compliance proofs. yfy unifies roster, payroll, statutory apportionments, and GST billing into a single locked pipeline. It automatically compiles one-click, establishment-scoped Compliance Proof Packs (EPF ECRs, ESI monthly returns, challans, wage registers) that satisfy client auditors and unlock held client payments within 72 hours."
  },
  {
    question: "What enterprise security, privacy, and data residency standards does yfy adhere to?",
    answer: "yfy is certified under ISO 27001:2022 (Information Security Management), ISO/IEC 27701:2019 (Privacy Information Management), and ISO 9001:2015 (Quality Management). All workforce, biometric, and payroll data is encrypted in transit (TLS 1.3) and at rest (AES-256), strictly resident within Indian cloud data centers (MeitY empaneled) in compliance with the Digital Personal Data Protection (DPDP) Act, 2023."
  }
];
