/**
 * AIA (First Inventor to File) category tree for the "Categories" tab.
 * Covers applications examined under AIA provisions (effective March 16, 2013).
 *
 * Derived from the pre-AIA tree (categories.ts) with these systematic changes:
 *  - All .fti FPs replaced with .aia counterparts where available
 *  - Pre-AIA-only FPs removed (102(b)/(c)/(d)/(f), pre-Sept-16-2012 reissue/TD, transitional)
 *  - AIA-only FPs added (7.04.0x.aia, 7.67.aia, 7.68.aia, 15.09.0x.aia)
 *  - 102 and 103 sections restructured per AIA practice (see MPEP Ch. 700 AIA materials)
 */
import type { CatNode } from './categories'

function fp(id: string, children?: CatNode[]): CatNode {
  return { id: `fp-aia-${id}`, fpId: id, children }
}

function sec(id: string, label: string, children: CatNode[]): CatNode {
  return { id: `aia-${id}`, label, children }
}

function h(id: string, label: string, children: CatNode[]): CatNode {
  return { id: `aia-${id}`, label, isHeading: true, children }
}

function cat(id: string, label: string, headingLabel: string, children: CatNode[]): CatNode {
  return { id: `aia-${id}`, label, isHeading: true, headingLabel, children }
}

export const CATEGORIES_AIA: CatNode[] = [
  cat('general', 'General Office Action', 'DETAILED ACTION', [

    h('pre-aia', 'Notice of Pre-AIA or AIA Status', [
      fp('7.03.aia'),  // Application Examined Under AIA First Inventor to File Provisions
    ]),

    h('cont-exam', 'Continued Examination', [
      fp('7.42.04'),
      fp('7.42.05'),
      fp('7.42.06'),
      fp('7.42.07'),
      fp('7.42.08'),
      fp('7.42.08.AE'),
      fp('7.42.10'),
      fp('7.42.11'),
      fp('7.42.12'),
      fp('7.42.13'),
      fp('7.42.14'),
      fp('7.42.15'),
      fp('7.42.16'),
    ]),

    h('cpa', 'Continued Prosecution Application (CPA)', [
      fp('2.30'),
      fp('2.35'),
      fp('2.33'),
      fp('2.32'),
      fp('2.34'),
      fp('2.31'),
    ]),

    h('er-general', 'Election/Restriction', [
      fp('8.49'),
      fp('8.50'),
      fp('8.07'),
      fp('8.03'),
      fp('8.25'),
      fp('8.26'),
      fp('8.05'),
      fp('8.06'),
      fp('8.04'),
      fp('8.25.01', [
        fp('8.25.02'),
      ]),
      fp('8.23.02'),
      fp('8.41'),
      fp('8.42'),
      fp('8.43'),
      fp('8.45'),
      fp('8.23.03'),
    ]),

    h('priority', 'Priority', [
      sec('priority-cont', 'CONTINUATION (NON-CPA APPLICATIONS)', [
        fp('2.09', [
          fp('2.11'),
          fp('2.10'),
        ]),
        fp('2.06'),
        fp('2.05'),
        fp('2.20'),
        fp('2.15'),
        fp('2.14'),
      ]),
      sec('priority-def', 'DEFINITIONS', [
        fp('2.01'),
        fp('2.07'),
      ]),
      sec('priority-foreign', 'FOREIGN', [
        fp('2.27'),
        fp('2.18'),
        fp('2.25'),
        fp('2.26'),
        fp('2.22'),
        fp('2.23'),
        fp('23.19'),
        fp('2.21.01'),
        fp('2.19'),
      ]),
    ]),

    h('ids', 'Information disclosure statement', [
      sec('ids-national-stage', 'NATIONAL STAGE APPLICATION (35 USC 371)', [
        fp('6.53'),
        fp('6.54'),
        fp('6.55'),
      ]),
      sec('ids-after-first-before-close', 'AFTER FIRST ACTION, BEFORE PROSECUTION CLOSES', [
        fp('6.49.01'),
        fp('6.49.02'),
      ]),
      sec('ids-after-close', 'AFTER PROSECUTION CLOSES, BEFORE ISSUE FEE PAID', [
        fp('6.49.03'),
        fp('6.49.05'),
      ]),
      fp('13.09'),
      fp('6.49.06'),
      fp('6.49.07'),
      fp('6.49.08'),
      fp('6.49.09'),
      fp('6.49'),
      fp('6.49.11'),
      fp('6.49.12'),
      fp('6.52'),
      fp('6.51'),
    ]),

    h('oath', 'Oath/Declaration', []),

    h('drawings', 'Drawings', [
      sec('drawings-corrections', 'CORRECTIONS', [
        fp('6.37'),
        fp('6.21'),
        fp('6.27'),
        fp('6.47'),
        fp('6.43'),
        fp('6.40'),
      ]),
      fp('6.23'),
      fp('6.23.01'),
      fp('6.26'),
      fp('6.21'),
      sec('drawings-objections', 'OBJECTIONS', [
        fp('6.36'),
        fp('6.22.01'),
        fp('6.22.02'),
        fp('6.22.03'),
        fp('6.22.04'),
        fp('6.22'),
        fp('6.22.05'),
        fp('6.36.01'),
        fp('6.22.06'),
        fp('6.22.07'),
      ]),
      fp('6.24.01'),
    ]),

    h('optical-disc', 'Read-only Optical Disc Submission', [
      fp('6.60.01'),
      fp('6.60.02'),
      fp('6.61.01'),
      fp('6.62'),
      fp('6.64.01'),
      fp('6.70.01'),
      fp('6.70.02'),
      fp('6.71.01'),
      fp('6.71.02'),
      fp('6.72.01'),
      fp('6.72.02'),
      fp('6.72.03'),
      fp('6.72.04'),
      fp('6.72.05'),
    ]),

    h('nucleotide', 'Nucleotide and/or Amino Acid Sequence Disclosures', [
      fp('24.01'),
      fp('24.02'),
      fp('24.03'),
      fp('24.05'),
      fp('24.06'),
      fp('24.07'),
      fp('24.08'),
      fp('24.09'),
      fp('24.10'),
      fp('24.11'),
      fp('24.12'),
      fp('24.13'),
      fp('24.14'),
      fp('24.15'),
      fp('24.16'),
      fp('24.17'),
      fp('24.17.26'),
      fp('24.18.26'),
      fp('24.19.26'),
      fp('24.20.26'),
      fp('24.21.26'),
      fp('24.22.26'),
      fp('24.23.26'),
      fp('24.24.26'),
      fp('24.25.26'),
      fp('24.26.26'),
      fp('24.27.26'),
      fp('24.28.26'),
      fp('24.29.26'),
    ]),

    h('spec', 'Specification', [
      fp('6.01'),
      fp('6.02'),
      fp('6.29'),
      fp('6.32'),
      sec('spec-abstract', 'ABSTRACT', [
        fp('6.14'),
        fp('6.15'),
        fp('6.16'),
        fp('6.12'),
        fp('6.13'),
        fp('6.16.01'),
      ]),
      sec('spec-title', 'TITLE OF THE INVENTION', [
        fp('6.11', [
          fp('6.11.01'),
        ]),
      ]),
      sec('spec-exam-precluded', 'EXAMINATION PRECLUDED', [
        fp('7.02'),
        fp('7.01'),
      ]),
      sec('spec-ibr', 'INCORPORATION BY REFERENCE', [
        fp('6.19'),
        fp('6.19.01'),
      ]),
      sec('spec-sub-spec-req', 'SUBSTITUTE SPECIFICATION REQUIRED', [
        fp('6.28.01'),
        fp('6.28'),
        fp('13.01'),
      ]),
      sec('spec-sub-spec-not-entered', 'SUBSTITUTE SPECIFICATION NOT ENTERED', [
        fp('6.28.02'),
      ]),
      sec('spec-objections', 'OBJECTIONS TO SPECIFICATION', [
        fp('7.29'),
        fp('6.30'),
        fp('6.31'),
        fp('7.29.04'),
        fp('6.20'),
        fp('7.44'),
      ]),
      sec('spec-new-matter', 'NEW MATTER', [
        fp('7.28'),
      ]),
    ]),

    h('claim-obj', 'Claim objections', [
      fp('7.29.01'),
      fp('7.29.02'),
      fp('7.29.03'),
      fp('7.36'),
      fp('6.17'),
      fp('6.18'),
      fp('7.45'),
      sec('claim-obj-duplicate', 'Duplicate claims', [
        fp('7.05.05'),
        fp('7.05.06'),
      ]),
    ]),

    h('claim-interp', 'Claim interpretation', [
      sec('claim-interp-112f', '35 USC 112(f) or 35 USC 112 (pre-AIA), Sixth Paragraph', [
        fp('7.30.03'),
        fp('7.30.05'),
        fp('7.30.06'),
        fp('7.30.07'),
      ]),
    ]),

    h('112', '112 rejections (including 112, 2nd indefiniteness)', [
      sec('112-first', '35 USC 112 (a) or 35 USC 112 (pre-AIA), First Paragraph', [
        fp('7.30.01', [
          fp('7.31.04'),
          fp('7.31.01'),
          fp('7.31.02'),
          fp('7.33.01'),
          fp('7.31.03'),
          fp('7.31.05'),
        ]),
        fp('7.05.04'),
      ]),
      sec('112-second', '35 USC 112 (b) or 35 USC 112 (pre-AIA), Second Paragraph', [
        fp('7.30.02'),
        fp('7.34'),
        fp('7.34.01', [
          fp('7.34.02'),
          fp('7.34.03'),
          fp('7.34.04'),
          fp('7.34.05'),
          fp('7.34.07'),
          sec('112-indef-lang', 'Indefinite Language', [
            fp('7.34.08'),
            fp('7.34.09'),
            fp('7.34.10'),
          ]),
          fp('7.34.12'),
          fp('7.34.13'),
          fp('7.34.14'),
          fp('7.34.15'),
          fp('7.35'),
          fp('7.35.01'),
        ]),
        fp('7.34.23'),
        fp('7.34.24'),
      ]),
      sec('112-fourth', '35 USC 112(d) or 35 USC 112 (pre-AIA), Fourth Paragraph', [
        fp('7.36', [
          fp('7.36.01'),
        ]),
      ]),
      fp('8.40'),
    ]),

    h('101', '101 rejections', [
      fp('7.04.01'),        // Statement of Statutory Basis, 35 USC 101
      // AIA adds inventorship/115 rejections under 101
      fp('7.04.101.aia'),   // Statement of Statutory Bases, 35 USC 101 and 35 USC 115 — Improper Inventorship
      fp('7.04.102.aia'),   // Statement of Statutory Basis, 35 USC 115 — Improper Inventorship
      fp('7.04.02.aia'),    // Rejection, 35 USC 101/115
      fp('7.103'),
      fp('7.05', [
        fp('7.05.01'),
        fp('7.05.016', [
          fp('7.05.017'),
        ]),
        fp('7.05.02'),
        fp('7.05.03'),
        fp('7.04.03'),
      ]),
      fp('7.05.04'),
    ]),

    // ─── 102 rejections (AIA restructured per MPEP Ch. 700 AIA) ────────────────
    h('102', '102 rejections', [
      fp('7.06'),           // NOTICE for all US Patent Applications filed on or after March 16, 2013
      fp('7.07.aia'),       // Statement of Statutory Basis, 35 USC 102
      fp('7.08.aia'),       // 102(a)(1), Activity Before the Effective Filing Date of Claimed Invention
      fp('7.12.aia'),       // 102(a)(2), US Patent/US Patent App Publication or WIPO Published Appl. That Names Another Inventor
      fp('7.14.aia'),       // Pre-AIA 102(g), Priority of Invention
      fp('7.103'),          // Statute Cited in Prior Office Action
      sec('102-rejection', 'REJECTION', [
        fp('7.15.aia'),     // Rejection, 35 USC 102(a)(1)/102(a)(2)
        fp('7.15.02.aia'),  // Rejection, 35 USC 102(a)(2), Common Assignee, Applicant, or Joint Inventor(s)
        fp('7.15.03.aia'),  // Rejection, 35 USC 102(a)(2), No Common Assignee or Inventor(s)
        fp('7.16.aia'),     // Rejection, 35 USC 102(a)(1), Public Use, On Sale, or Otherwise Publicly Available
        fp('7.17.aia'),     // 102(a)(1) Rejection Using Prior Art Excepted under 102(b)(2)(C)
        fp('7.18.aia'),     // Rejection, Pre-AIA 35 USC 102(g)
        sec('102-prov-rejection', '102(e), PROVISIONAL', [
          fp('7.15.01.aia'), // Provisional Rejection, 35 USC 102(a)(2) — Common Assignee, Common Applicant, or At Least One Common (Joint) Inventor
        ]),
        fp('7.48.aia'),     // Failure To Present Claims for Interference
        fp('7.27.aia'),     // Rejection, 35 USC 102 or 103
        fp('2.19'),         // Overcome Rejection by Translation
      ]),
    ]),

    // ─── 103 rejections (AIA restructured per MPEP Ch. 700 AIA) ────────────────
    h('103', '103 rejections', [
      fp('7.06'),           // NOTICE for all US Patent Applications filed on or after March 16, 2013
      fp('7.20.aia'),       // Statement of Statutory Basis, 35 USC 103
      fp('7.103'),          // Statute Cited in Prior Office Action
      fp('7.23.aia'),       // Graham v. Deere, Test for Obviousness
      fp('7.20.02.aia'),    // Joint Inventors, Common Ownership Presumed
      sec('103-rejection', 'REJECTION', [
        fp('7.21.aia'),     // Rejection, 35 USC 103
        fp('7.21.02.aia'),  // Rejection, 35 USC 103, Common Assignee, Common Applicant, or at Least One Common (Joint) Inventor
        fp('7.22.aia'),     // Rejection, 35 USC 103, Further in View Of
        fp('7.27.aia'),     // Rejection, 35 USC 102 or 103
        fp('7.20.04.aia'),  // 102 or 103 Rejection Using Prior Art Under 102(a)(2) That Is Attempted To Be Excepted — Common Ownership/Assignment Provision
        fp('7.20.05.aia'),  // 102 or 103 Rejection Using Prior Art Under 102(a)(2) That Is Attempted To Be Excepted — Joint Research Agreement
        fp('2.19'),         // Overcome Rejection by Translation
        fp('7.21.01.aia'),  // Provisional Rejection, 35 USC 103, Common Assignee, Common Applicant, or at Least One Common (Joint) Inventor
        fp('7.20.01.aia'),  // 103 Rejection Using Prior Art Excepted Under 102(b)(2)(C) Because Reference is Prior Art Under 102(a)(1)
      ]),
    ]),

    h('resp-amend', 'Response to amendment', [
      sec('resp-amend-affidavit', 'AFFIDAVIT', [
        // AIA 37 CFR 1.130 affidavits (disqualify prior art via 35 USC 102(b) exception)
        fp('7.67.aia'),  // 37 CFR 1.130: Effective to Disqualify a Reference as Prior Art Via 35 USC 102(b)
        fp('7.68.aia'),  // 37 CFR 1.130: Ineffective to Disqualify a Reference as Prior Art Via 35 USC 102(b)
        // 37 CFR 1.132 still applies to both AIA and FTI
        fp('7.65'),
        fp('7.66'),
        fp('2.03'),
      ]),
      fp('7.84.01'),
      sec('resp-amend-not-entered', 'AMENDMENT TO CLAIMS NOT ENTERED', [
        fp('6.33'),
      ]),
      fp('5.04'),
      fp('4.01'),
      fp('7.98'),
      fp('7.98.01'),
      fp('7.98.02'),
      fp('7.28'),
      fp('7.91'),
      fp('7.95'),
      fp('7.95.AE'),
      fp('7.84'),
      fp('5.01.01'),
      fp('7.42'),
    ]),

    h('allowable', 'Allowable subject matter', [
      fp('7.97'),
      fp('12.109.01'),
      fp('7.43.03'),
      fp('7.43'),
      sec('allowable-prosecution-reopened', 'PROSECUTION REOPENED', [
        fp('13.04'),
        fp('13.05'),
        fp('7.50'),
      ]),
      fp('13.03.01'),
      fp('13.03'),
      sec('allowable-rejected-112', 'REJECTED UNDER 35 U.S.C. 112', [
        fp('7.43.02'),
        fp('7.43.01'),
      ]),
      fp('7.43.04'),
    ]),

    h('pro-se', 'Pro se paragraphs', [
      fp('7.95.01'),
      fp('6.01'),
      fp('5.04'),
      fp('6.02'),
      fp('4.10'),
      fp('7.39.01'),
      fp('7.98.01'),
      fp('7.98.02'),
      fp('7.214'),
      fp('7.34.15'),
      fp('5.01.01'),
      fp('6.18'),
      fp('5.05'),
      fp('7.43.04'),
    ]),

    h('design', 'Design paragraphs', [
      sec('design-all-fps', 'ALL DESIGN FPs LISTED BY FP NUMBER', [
        fp('15.01'),
        fp('15.01.01'),
        fp('15.02'),
        fp('15.03'),
        // 15.03.01.fti removed — only applies to applications filed before March 16, 2013
        fp('15.04'),
        fp('15.05.04'),
        fp('15.05'),
        fp('15.05.01'),
        fp('15.05.03'),
        fp('15.05.041'),
        fp('15.05.05'),
        fp('15.07'),
        fp('15.07.01'),
        fp('15.08'),
        fp('15.08.01'),
        fp('15.08.02'),
        fp('15.08.03'),
        fp('15.09'),
        fp('15.09.01'),
        fp('15.09.02.aia'), // AIA-only: Statement of Statutory Bases, 35 USC 171 and 35 USC 115 — Improper Inventorship
        fp('15.09.03.aia'), // AIA-only: Statement of Statutory Basis, 35 USC 115 — Improper Inventorship
        fp('15.10.aia'),    // Application Examined Under AIA First Inventor to File Provisions
        fp('15.10.15'),
        fp('15.11.aia'),    // 35 USC 102(a)(1) Rejection
        // 15.12.fti removed — pre-AIA 102(b), no AIA equivalent
        // 15.13.fti removed — pre-AIA 102(c), no AIA equivalent
        // 15.14.fti removed — pre-AIA 102(d)/172, no AIA equivalent
        fp('15.15.aia'),    // 35 USC 102(a)(2) Rejection
        fp('15.15.01.aia'), // Explanation of rejection under 35 USC 102(a)(1) or 102(a)(2)
        fp('15.15.02.aia'), // 35 USC 102(a)(2) Provisional rejection
        // 15.15.03.fti removed — covered by 15.15.02.aia in AIA
        fp('15.15.04.aia'), // 35 USC 102(a)(2) rejection — design disclosed in a patent
        // 15.16.fti removed — pre-AIA 102(f), no AIA equivalent
        fp('15.17.aia'),    // Pre-AIA 35 USC 102(g) Rejection
        fp('15.18.aia'),    // 35 USC 103 Rejection (Single Reference)
        fp('15.19.aia'),    // 35 USC 103 Rejection (Multiple Reference)
        fp('15.19.02.aia'), // Preface 35 USC 102(a)(2)/103 rejection — Different inventors, common assignee
        fp('15.19.03.aia'), // 35 USC 102(a)(2)/103 Provisional Rejection — design disclosed in another application
        // 15.19.04.fti removed — no AIA equivalent
        fp('15.19.05.aia'), // 35 USC 102(a)(2)/103 rejection — design disclosed, no common inventors or assignees
        // 15.19.06.fti removed — no AIA equivalent
        // 15.19.07.fti removed — no AIA equivalent
        fp('15.20.02'),
        fp('15.21'),
        fp('15.21.01'),
        fp('15.22'),
        fp('15.22.02'),
        fp('15.22.03'),
        fp('15.23'),
        fp('15.23.01'),
        fp('15.23.02'),
        fp('15.24', [
          fp('15.24.03'),
          fp('15.24.04'),
        ]),
        // 15.24.05.fti removed — no AIA equivalent
        fp('15.24.06'),
        fp('15.24.07'),
        fp('15.24.08'),
        fp('15.25'),
        fp('15.26'),
        fp('15.27'),
        fp('15.27.01'),
        fp('15.27.02'),
        fp('15.27.03'),
        fp('15.27.04'),
        fp('15.27.05'),
        fp('15.27.06'),
        fp('15.27.07'),
        fp('15.27.08'),
        fp('15.28'),
        fp('15.28.01'),
        fp('15.28.02'),
        fp('15.29'),
        fp('15.30'),
        fp('15.31'),
        fp('15.33'),
        fp('15.34'),
        fp('15.35'),
        fp('15.36'),
        fp('15.37'),
        fp('15.38'),
        fp('15.39.02.aia'), // Final Rejection Under 35 USC 103 (Single Reference)
        fp('15.40.aia'),    // Final Rejection Under 35 USC 103 (Multiple References)
        fp('15.40.01'),
        fp('15.41'),
        fp('15.42'),
        fp('15.43'),
        fp('15.44'),
        fp('15.46.01'),
        fp('15.47'),
        fp('15.47.01'),
        fp('15.48'),
        fp('15.50'),
        fp('15.50.01'),
        fp('15.50.02'),
        fp('15.50.04'),
        fp('15.50.05'),
        fp('15.51'),
        fp('15.51.01'),
        fp('15.55'),
        fp('15.55.01'),
        fp('15.58'),
        fp('15.58.01'),
        fp('15.59'),
        fp('15.60'),
        fp('15.61'),
        fp('15.62'),
        fp('15.63'),
        fp('15.64'),
        fp('15.65'),
        fp('15.66'),
        fp('15.66.01'),
        fp('15.67'),
        fp('15.69.01'),
        fp('15.70.aia'),    // Preface, 35 USC 103 Rejection
        fp('15.72'),
        fp('15.73'),
        fp('15.74'),
        fp('15.74.01'),
        // 15.75.fti and 15.75.01.fti removed — CIP + pre-AIA 102(d)/172, no AIA equivalent
        fp('15.76'),
        fp('15.85'),
        fp('15.90'),
      ]),
      sec('design-hague', 'INTERNATIONAL DESIGN APPLICATION (HAGUE)', [
        fp('29.04'),
        fp('29.10'),
        fp('29.11'),
        fp('29.20'),
        fp('29.21'),
        fp('29.22'),
        fp('29.23'),
        fp('29.24'),
        fp('29.25'),
        fp('29.26'),
        fp('29.27'),
        fp('29.59.01'),
        fp('29.59.02'),
        fp('29.60.02'),
        fp('29.61.01'),
        fp('29.100'),
        fp('29.101'),
        fp('29.102'),
      ]),
    ]),

    h('conclusion', 'Conclusion', [
      fp('5.02'),
      fp('7.96'),
      fp('7.39'),
      fp('7.40'),
      fp('7.40.01'),
      fp('7.40.02.aia'),   // Action Is Final, Necessitated by Invoking the JRA Prior Art Exception Under 35 USC 102(b)(2)(C)
      fp('7.41'),
      fp('7.42.09'),
      fp('7.51'),
      fp('7.51.AE'),
    ]),

    h('double-pat', 'Double Patenting', [
      fp('8.29'),
      sec('double-pat-statutory', 'STATUTORY (35 USC 101)', [
        fp('8.30'),
        fp('8.31'),
        fp('8.32'),
      ]),
      fp('8.27.aia'),      // Different Inventors, Common Assignee, Same Invention, Examined under FITF Provisions of the AIA
      fp('8.28.aia'),      // Different Inventors, Common Assignee, Inventions Not Patentably Distinct, No Evidence of Common Ownership Not Later Than EFD — AIA
      fp('8.28.01.aia'),   // Advisory Information Relating to Form Paragraph 8.28.aia
      sec('double-pat-nonstatutory', 'NON-STATUTORY', [
        fp('8.33'),
        fp('8.34', [
          fp('8.35'),
        ]),
        fp('8.36', [
          fp('8.37'),
        ]),
        sec('double-pat-schneller', 'IN RE SCHNELLER --- TC DIRECTOR SIGNATURE REQUIRED ---', [
          fp('8.38'),
          fp('8.39'),
        ]),
      ]),
    ]),

    h('interference', 'Interference', [
      fp('23.14'),
      fp('23.01'),
      fp('23.02'),
      sec('interference-suspension', 'SUSPENSION OF ACTION', [
        fp('7.53'),
      ]),
      sec('interference-notice-patentee', 'NOTICE TO PATENTEE', [
        fp('7.49'),
      ]),
      fp('7.48.aia'),      // Failure To Present Claims for Interference (AIA version)
      fp('23.04'),
      fp('23.06', [
        fp('23.06.01'),
        fp('23.06.02'),
        fp('23.06.03'),
        fp('23.06.04'),
        fp('23.06.05'),
        fp('23.06.06'),
      ]),
    ]),

    h('inventorship', 'Inventorship', [
      sec('inventorship-correction', 'CORRECTION OF INVENTORSHIP', [
        sec('inventorship-design', 'DESIGN APPLICATIONS', [
          fp('2.32'),
          fp('2.33'),
        ]),
      ]),
      sec('inventorship-sof', 'STATEMENT OF FACT PROBLEM', [
        fp('8.23.02'),
        fp('7.20.02.aia'),   // Joint Inventors, Common Ownership Presumed (AIA version)
        fp('2.14'),
      ]),
    ]),

    h('reexam', 'Reexamination', [
      fp('22.06'),
      fp('22.09'),
      fp('22.10'),
      fp('22.03'),
      fp('22.07'),
      fp('22.08'),
      fp('22.01'),
      fp('22.02'),
      fp('22.04'),
      fp('22.05'),
      fp('22.16'),
      fp('22.11'),
    ]),

    h('reissue', 'Reissue Applications', [
      sec('reissue-heading', 'OFFICE ACTION HEADING PARAGRAPH', [
        fp('14.01'),
      ]),
      sec('reissue-assent-unacceptable', 'ASSENT OF ASSIGNEE UNACCEPTABLE', [
        // 14.16.04.fti removed — only for applications filed before Sept. 16, 2012
        fp('14.16.02'),
        fp('14.16.03'),
      ]),
      fp('14.15'),
      fp('14.16'),
      fp('14.16.01'),
      fp('14.16.06'),
      sec('reissue-litigation', 'LITIGATION RELATED REISSUE', [
        sec('reissue-action-not-stayed', 'ACTION NOT STAYED', [
          fp('14.07'),
          fp('14.08'),
          fp('14.09'),
          fp('14.10'),
        ]),
        fp('14.11'),
        fp('14.06'),
      ]),
      sec('reissue-defective-oath', 'DEFECTIVE REISSUE OATH/DECLARATION, 37 CFR 1.175(a)(1)', [
        fp('14.11.01'),
        sec('reissue-oath-defective', 'OATH DEFECTIVE', [
          fp('14.01.01'),
          fp('14.01.02'),
          fp('14.01.03'),
          // 14.01.04.fti removed — only for applications filed before Sept. 16, 2012
          fp('14.01.05'),
          fp('14.01.06'),
        ]),
      ]),
      fp('14.14'),
      // 14.05.02.fti removed — only for applications filed before Sept. 16, 2012
      fp('14.12'),
      fp('14.13'),
    ]),

    h('resp-args', 'Response to Arguments', [
      fp('7.37'),
      fp('7.38'),
      fp('7.38.01'),
      fp('7.38.02'),
      fp('7.95.01'),
      sec('resp-args-combo', 'ARGUMENTS REGARDING COMBINATION OF REFERENCES', [
        fp('7.37.01'),
        fp('7.37.02'),
        fp('7.37.03'),
        fp('7.37.04'),
        fp('7.37.05'),
        fp('7.37.06'),
      ]),
      sec('resp-args-unpersuasive', 'UNPERSUASIVE ARGUMENTS', [
        fp('7.37.07'),
        fp('7.37.08'),
        fp('7.37.09'),
        fp('7.37.10'),
        fp('7.37.11'),
        fp('7.37.12'),
        fp('7.37.13'),
      ]),
      fp('2.03'),
    ]),

    h('term-disc', 'Terminal Disclaimer', [
      sec('term-disc-acceptable-lang', 'EXAMPLES OF ACCEPTABLE LANGUAGE', [
        // 14.27.04.fti removed — only for applications filed before Sept. 16, 2012
        fp('14.27.06'),
      ]),
      sec('term-disc-samples', 'SAMPLES OF A TERMINAL DISCLAIMER', [
        fp('14.37'),
        fp('14.38'),
      ]),
      fp('14.36'),
      fp('14.36.01'),
      fp('14.34'),
      fp('14.23', [
        fp('14.23.01'),
      ]),
      sec('term-disc-not-proper', 'TERMINAL DISCLAIMER NOT PROPER', [
        fp('14.26.05'),
        fp('14.26.04'),
        fp('14.26.02'),
        fp('14.26', [
          fp('14.26.01'),
          sec('term-disc-fails-disclaim', 'FAILS TO DISCLAIM TERMINAL PORTION', [
            fp('14.27.02'),
            fp('14.27.03'),
          ]),
          // 14.28.fti removed — only for applications filed before Sept. 16, 2012
          fp('14.24', [
            fp('14.25'),
          ]),
          fp('14.27.01'),
          fp('14.26.07'),
          fp('14.26.03'),
          // 14.26.06.fti removed — only for applications filed before Sept. 16, 2012
        ]),
        // 14.29.fti removed — only for applications filed before Sept. 16, 2012
      ]),
      sec('term-disc-chain-of-title', 'EVIDENCE OF CHAIN OF TITLE TO ASSIGNEE', [
        sec('term-disc-not-signed', 'SUBMISSION NOT SIGNED BY APPROPRIATE PARTY', [
          // 14.30.02.fti and 14.30.fti removed — only for applications filed before Sept. 16, 2012
        ]),
        fp('14.30.01'),
        fp('14.32'),
        fp('14.33'),
        fp('14.35'),
        fp('14.35.01'),
      ]),
    ]),

    // Transitional after final practice (37 CFR 1.129(a)) only applied to
    // applications filed before June 8, 2005 — removed entirely from AIA tree.

  ]), // end general

  sec('appeal', "Examiner's Answer (Appeal on or after 1-23-2012)", [
    fp('12.249'),
    h('appeal-grounds-review', '(1) Grounds of Rejection to be Reviewed on Appeal', [
      fp('12.254.01'),
      fp('12.254.02'),
    ]),
    h('appeal-restatement', '(2) Restatement of Rejection', [
      fp('12.255'),
    ]),
    h('appeal-new-grounds', '(3) New Grounds of Rejection', [
      fp('12.256'),
    ]),
    h('appeal-withdrawn', '(4) Withdrawn Ground of Rejection', [
      fp('12.257'),
    ]),
    h('appeal-resp-argument', '(5) Response to Argument', [
      sec('appeal-affidavit', 'AFFIDAVIT', [
        // AIA 37 CFR 1.130 affidavits
        fp('7.67.aia'),
        fp('7.68.aia'),
        // 37 CFR 1.132 still applies to AIA applications
        fp('7.65'),
        fp('7.66'),
        fp('2.03'),
      ]),
      fp('7.84.01'),
      fp('5.04'),
      fp('4.01'),
      fp('7.98'),
      fp('7.98.01'),
      fp('7.98.02'),
      fp('7.28'),
      fp('7.91'),
      fp('7.95'),
      fp('7.95.AE'),
      fp('7.84'),
      fp('7.84.AE'),
      fp('7.42'),
    ]),
    h('appeal-conclusion', '(6) Conclusion of Examiner Answer', [
      fp('12.279.01'),
      fp('12.279'),
    ]),
  ]),

  sec('amendment', "Examiner's Amendment", [
    h('amendment-with-ext', '...with extension of time', [
      fp('13.02.02'),
      fp('13.06'),
    ]),
    h('amendment-no-ext', '...no extension of time', [
      fp('13.02'),
      fp('13.02.01'),
    ]),
    h('amendment-text', "Amendment(s) text", [
      fp('6.47'),
    ]),
    h('amendment-reasons', 'Reasons for allowance', [
      fp('13.03'),
    ]),
    h('amendment-conclusion', 'Conclusion', []),
  ]),

  sec('election', 'Election/Restriction', [

    h('er-restriction', 'Restriction', [
      sec('er-restr-only', 'Restriction', [
        fp('8.08'),
        fp('8.11'),
      ]),
      sec('er-how-related', 'How Inventions are Related', [
        fp('8.13'),
        sec('er-inventions-related', 'Inventions Related', [
          fp('8.14'),
          fp('8.14.01'),
          fp('8.15'),
          fp('8.16'),
          fp('8.17'),
          fp('8.18'),
          fp('8.19'),
          fp('8.20'),
          fp('8.20.02'),
          fp('8.20.03'),
        ]),
        fp('8.21'),
      ]),
      sec('er-election-by-phone', 'Election by Phone', [
        fp('8.23'),
        fp('8.23.01'),
        fp('8.23.03'),
      ]),
      sec('er-joint-inventors-opt', 'Joint Inventors (optional)', [
        fp('8.23.02'),
      ]),
      sec('er-rejoinder-opt', 'Rejoinder (optional)', [
        fp('8.21.04'),
      ]),
      sec('er-conclusion-opt', 'Conclusion (optional)', []),
    ]),

    h('er-election-of-species', 'Election of Species', [
      sec('er-eos-basis', 'Election Of Species (Basis for)', [
        fp('8.01'),
        fp('8.02'),
      ]),
      sec('er-eos-phone', 'Election by Phone', [
        fp('8.23'),
        fp('8.23.01'),
        fp('8.23.03'),
      ]),
      sec('er-eos-joint', 'Joint Inventors (optional)', [
        fp('8.23.02'),
      ]),
      sec('er-eos-rejoinder', 'Rejoinder (optional)', [
        fp('8.21.04'),
      ]),
      sec('er-eos-conclusion', 'Conclusion (optional)', []),
    ]),

    h('er-both', 'Both', [
      sec('er-both-restriction', 'Restriction', [
        fp('8.08'),
        fp('8.11'),
      ]),
      sec('er-both-how-related', 'How Inventions are Related', [
        fp('8.13'),
        sec('er-both-inv-related', 'Inventions Related', [
          fp('8.14'),
          fp('8.14.01'),
          fp('8.15'),
          fp('8.16'),
          fp('8.17'),
          fp('8.18'),
          fp('8.19'),
          fp('8.20'),
          fp('8.20.02'),
          fp('8.20.03'),
        ]),
        fp('8.21'),
      ]),
      sec('er-both-eos-basis', 'Election Of Species (Basis for)', [
        fp('8.01'),
        fp('8.02'),
      ]),
      sec('er-both-phone', 'Election by Phone', [
        fp('8.23'),
        fp('8.23.01'),
        fp('8.23.03'),
      ]),
      sec('er-both-joint', 'Joint Inventors (optional)', [
        fp('8.23.02'),
      ]),
      sec('er-both-rejoinder', 'Rejoinder (optional)', [
        fp('8.21.04'),
      ]),
      sec('er-both-conclusion', 'Conclusion (optional)', []),
    ]),

    h('er-371-restriction', '35 U.S.C. 371 - Restriction', [
      fp('18.18'),
      fp('18.19'),
      fp('18.06.01'),
      sec('er-371-restr-main', 'Restriction 371', [
        fp('18.06.02'),
        fp('18.07'),
        sec('er-371-chem-alt', 'Chemical Compound Alternative', [
          fp('18.07.03'),
        ]),
        sec('er-371-tech-feat', 'Technical Feature', [
          fp('18.07.01'),
          fp('18.07.02'),
        ]),
      ]),
      sec('er-371-restr-phone', 'Election by Phone', [
        fp('8.23'),
        fp('8.23.01'),
        fp('8.23.03'),
      ]),
      sec('er-371-restr-joint', 'Joint Inventors (optional)', [
        fp('8.23.02'),
      ]),
      sec('er-371-restr-rejoinder', 'Rejoinder (optional)', [
        fp('8.21.04'),
      ]),
      sec('er-371-restr-conclusion', 'Conclusion (optional)', []),
    ]),

    h('er-371-eos', '35 U.S.C. 371 - Election of Species', [
      fp('18.18'),
      fp('18.20'),
      sec('er-371-eos-main', 'Election of Species 371', [
        fp('18.07'),
        sec('er-371-eos-chem-alt', 'Chemical Compound Alternative', [
          fp('18.07.03'),
        ]),
        sec('er-371-eos-tech-feat', 'Technical Feature', [
          fp('18.07.01'),
          fp('18.07.02'),
        ]),
      ]),
      sec('er-371-eos-phone', 'Election by Phone', [
        fp('8.23'),
        fp('8.23.01'),
        fp('8.23.03'),
      ]),
      sec('er-371-eos-joint', 'Joint Inventors (optional)', [
        fp('8.23.02'),
      ]),
      sec('er-371-eos-rejoinder', 'Rejoinder (optional)', [
        fp('8.21.04'),
      ]),
      sec('er-371-eos-conclusion', 'Conclusion (optional)', []),
    ]),

    h('er-371-both', '35 U.S.C. 371 - Both', [
      fp('18.18'),
      fp('18.19'),
      fp('18.20'),
      fp('18.06.01'),
      sec('er-371-both-restr', 'Restriction 371', [
        fp('18.06.02'),
        fp('18.07'),
        sec('er-371-both-chem-alt', 'Chemical Compound Alternative', [
          fp('18.07.03'),
        ]),
        sec('er-371-both-tech-feat', 'Technical Feature', [
          fp('18.07.01'),
          fp('18.07.02'),
        ]),
      ]),
      sec('er-371-both-eos', 'Election of Species 371', [
        sec('er-371-both-eos-chem-alt', 'Chemical Compound Alternative', [
          fp('18.07.03'),
        ]),
        sec('er-371-both-eos-tech-feat', 'Technical Feature', [
          fp('18.07.01'),
          fp('18.07.02'),
        ]),
      ]),
      sec('er-371-both-phone', 'Election by Phone', [
        fp('8.23'),
        fp('8.23.01'),
        fp('8.23.03'),
      ]),
      sec('er-371-both-joint', 'Joint Inventors (optional)', [
        fp('8.23.02'),
      ]),
      sec('er-371-both-rejoinder', 'Rejoinder (optional)', [
        fp('8.21.04'),
      ]),
      sec('er-371-both-conclusion', 'Conclusion (optional)', []),
    ]),

  ]), // end election

]
