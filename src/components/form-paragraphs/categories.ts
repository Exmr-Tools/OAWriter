/**
 * Manual category tree for the "Categories" tab.
 * Each node is either a section header (label only) or a form paragraph (fpId set).
 * Generated from Categories.docx.
 */
export interface CatNode {
  id: string
  label?: string       // section header text; omit for FP nodes
  fpId?: string        // MPEP form paragraph number (dot notation, e.g. "7.42.04")
  isHeading?: boolean  // true = can be inserted as a bold/centered heading
  headingLabel?: string // text to insert as heading (falls back to label)
  children?: CatNode[]
}

// Helper: build a FP leaf node (optionally with sub-FP children)
function fp(id: string, children?: CatNode[]): CatNode {
  return { id: `fp-${id}`, fpId: id, children }
}

// Helper: build an organizational section (not a document heading)
function sec(id: string, label: string, children: CatNode[]): CatNode {
  return { id, label, children }
}

// Helper: build a section that is also an insertable document heading
function h(id: string, label: string, children: CatNode[]): CatNode {
  return { id, label, isHeading: true, children }
}

// Helper: top-level section with its own insertable heading (label ≠ heading text)
function cat(id: string, label: string, headingLabel: string, children: CatNode[]): CatNode {
  return { id, label, isHeading: true, headingLabel, children }
}

export const CATEGORIES: CatNode[] = [
  cat('general', 'General Office Action', 'DETAILED ACTION', [

    h('pre-aia', 'Notice of Pre-AIA or AIA Status', [
      fp('7.03.fti'),  // Application Examined Under First to Invent provisions
      fp('7.03.aia'),  // Application Examined Under First Inventor to File provisions
    ]),

    h('cont-exam', 'Continued Examination', [
      fp('7.42.04'),   // After Final Rejection
      fp('7.42.05'),   // After Allowance or Quayle Action
      fp('7.42.06'),   // After Appeal But Before A Board Decision
      fp('7.42.07'),   // After Board Decision But Before Further Appeal or Civil Action
      fp('7.42.08'),   // Request With Not Fully Responsive Submission
      fp('7.42.08.AE'), // Request - Not Fully Responsive - Accelerated Examination
      fp('7.42.10'),   // Request After Appeal Without Submission/Fee No Claim Allowed
      fp('7.42.11'),   // Request After Appeal Without Submission/Fee Claim Allowed
      fp('7.42.12'),   // Req After Appeal W/O Submission/Fee Claim Allowed with Informalities
      fp('7.42.13'),   // Request After Appeal Without Fee Claim Allowed
      fp('7.42.14'),   // Request After Appeal W/O Fee Claim Allowed with Informalities
      fp('7.42.15'),   // Continued Prosecution Application Treated
      fp('7.42.16'),   // After Bd. Decision but before Further Appeal or Civil Action, RCE Without Submission and/or Fee
    ]),

    h('cpa', 'Continued Prosecution Application (CPA)', [
      fp('2.30'),   // Acceptable Status (for Design Applications)
      fp('2.35'),   // Acceptable Status - Conditional Request (for Design Application)
      fp('2.33'),   // New Inventor Identified in CPA (for Design Applications)
      fp('2.32'),   // Request To Delete a Named Inventor in CPA (for Design Applications)
      fp('2.34'),   // Reference in CPA to Prior Application
      fp('2.31'),   // Request Not Acceptable - Not On Separate Paper
    ]),

    h('er-general', 'Election/Restriction', [
      fp('8.49'),   // Elected Invention Allowable, Claims Stand Withdrawn, Restriction Maintained
      fp('8.50'),   // Elected Invention Allowable, Some Claims No Longer Considered Withdrawn
      fp('8.07'),   // Ready for Allowance, Non-elected Claims Withdrawn Without Traverse
      fp('8.03'),   // In Condition for Allowance, Non-elected Claims Withdrawn with Traverse
      fp('8.25'),   // Answer to arguments with traverse
      fp('8.26'),   // Cancelled elected claims, non-responsive
      fp('8.05'),   // Claims withdrawn with traverse
      fp('8.06'),   // Claims withdrawn without traverse
      fp('8.04'),   // Election by original presentation
      fp('8.25.01', [
        fp('8.25.02'), // Incomplete response
      ]),
      fp('8.23.02'),  // Joint inventors
      fp('8.41'),   // Transitional Restriction or Election of Species Requirement - pre-GATT Filing
      fp('8.42'),   // Allowable product, rejoinder of at least one process claim, less than all claims
      fp('8.43'),   // Rejoinder of all previously withdrawn process claims
      fp('8.45'),   // Elected Invention Allowable, Rejoinder of All Previously Withdrawn Claims
      fp('8.23.03'), // No Telephone Restriction Permitted, No Attorney or Agent of Record, Practitioner Included in ADS
    ]),

    h('priority', 'Priority', [
      sec('priority-cont', 'CONTINUATION (NON-CPA APPLICATIONS)', [
        fp('2.09', [
          fp('2.11'), // Application must be copending with parent
          fp('2.10'), // Disclosure of prior-filed application does not provide support
        ]),
        fp('2.06'),   // Possible status as CIP
        fp('2.05'),   // Possible status as continuation
        fp('2.20'),   // Certified Copies of Priority Papers in Parent or Related
        fp('2.15'),   // Reference to Prior Application, 35 USC 119(e), 120, 121, 365(c), or 386(c) Benefit
        fp('2.14'),   // No 35 U.S.C. 120, 121, 365(c), or 386(c) benefit, appropriate continuing application fee not paid
      ]),
      sec('priority-def', 'DEFINITIONS', [
        fp('2.01'),   // Divisional
        fp('2.07'),   // Substitute
      ]),
      sec('priority-foreign', 'FOREIGN', [
        fp('2.27'),   // Acknowledge Certified Copy of Foreign Priority Paper in Parent
        fp('2.18'),   // Advising applicant of possible priority benefits
        fp('2.25'),   // Claimed Foreign Priority, No Certified Copy Filed
        fp('2.26'),   // Claimed Foreign Priority - Certified Copy Filed
        fp('2.22'),   // Certified Copy Filed, But Proper Claim Not Made
        fp('2.23'),   // Foreign application more than one year prior, no petition to restore priority granted
        fp('23.19'),  // Translation required for interference
        fp('2.21.01'), // Foreign Priority Claim is Untimely 35 USC 119(a)-(d) or (f), 365(a) or (b), or 386(a)
        fp('2.19'),   // Overcome Rejection by Translation
      ]),
    ]),

    h('ids', 'Information disclosure statement', [
      sec('ids-national-stage', 'NATIONAL STAGE APPLICATION (35 USC 371)', [
        fp('6.53'),   // References considered based upon Search Report, prior to allowance
        fp('6.54'),   // References considered based upon Search Report, ready for allowance
        fp('6.55'),   // References not considered based upon Search Report
      ]),
      sec('ids-after-first-before-close', 'AFTER FIRST ACTION, BEFORE PROSECUTION CLOSES', [
        fp('6.49.01'), // No timing statement
        fp('6.49.02'), // Lacks timing fee
      ]),
      sec('ids-after-close', 'AFTER PROSECUTION CLOSES, BEFORE ISSUE FEE PAID', [
        fp('6.49.03'), // No timing statement
        fp('6.49.05'), // Lacks timing fee
      ]),
      fp('13.09'),  // After issue fee paid, not considered
      fp('6.49.06'), // List of references in specification
      fp('6.49.07'), // No copy
      fp('6.49.08'), // No list
      fp('6.49.09'), // No explanation of relevance
      fp('6.49'),   // Not considered
      fp('6.49.11'), // Not considered, no size fee assertion
      fp('6.49.12'), // Not considered, no size fee
      fp('6.52'),   // Considered by examiner
      fp('6.51'),   // Time limit for completing
    ]),

    h('oath', 'Oath/Declaration', [
      // Office action may not include objections to oath or declaration. (note — no FP)
    ]),

    h('drawings', 'Drawings', [
      sec('drawings-corrections', 'CORRECTIONS', [
        fp('6.37'),   // Acknowledgment of Replacement Drawing Sheets
        fp('6.21'),   // New corrected drawings required, objection not held in abeyance
        fp('6.27'),   // Requirement for Marked-up Copy of Drawing Corrections
        fp('6.47'),   // Examiner's amendment involving drawing changes
        fp('6.43'),   // Drawings contain informalities, case allowable
        fp('6.40'),   // Information on how to effect drawing corrections
        // PROPOSED DRAWING CORRECTION — sub-header only, no FP
      ]),
      fp('6.23'),   // Drawings required
      fp('6.23.01'), // Before examination
      fp('6.26'),   // Not acceptable for examination
      fp('6.21'),   // New formal drawings required (duplicate in source; same FP)
      sec('drawings-objections', 'OBJECTIONS', [
        fp('6.36'),   // Claimed subject matter not shown
        fp('6.22.01'), // Details not shown
        fp('6.22.02'), // Different numbers for same part
        fp('6.22.03'), // Different parts with same number
        fp('6.22.04'), // Incomplete illustration of invention
        fp('6.22'),   // Minor informalities
        fp('6.22.05'), // Modifications in same figure
        fp('6.36.01'), // 'Prior Art' label required
        fp('6.22.06'), // Reference numbers not in drawing
        fp('6.22.07'), // Reference numbers not in specification
      ]),
      fp('6.24.01'), // Photographs or color drawings, petition required
    ]),

    h('optical-disc', 'Read-only Optical Disc Submission', [
      fp('6.60.01'), // Read-only Optical Disc Requirements (No Statement that discs are Identical)
      fp('6.60.02'), // Read-only Optical Requirement (No Listing in Transmittal Letter)
      fp('6.61.01'), // Specification Lacking List of Read-only Optical Disc(s) and/or Associated Files
      fp('6.62'),   // Data File on Read-only Optical Disc Not in ASCII File Format or XML file format
      fp('6.64.01'), // Computer Program Listing of More Than 300 Lines in Specification
      fp('6.70.01'), // Read-only Optical Disc Requirement Amendment Doesn't Include Statement that Discs are Identical
      fp('6.70.02'), // Read-only Optical Disc Requirements (No Listing in Transmittal Letter Submitted with Amendment)
      fp('6.71.01'), // Specification Lacking List of Read-only Optical Disc(s) and/or Associated Files (Amend. filed with CD(s))
      fp('6.71.02'), // Specification Lacking Incorporation By Reference Statement for Amended or Added Read-only Optical Disc or Text File
      fp('6.72.01'), // Read-only Optical Disc Requirements (Discs Not Identical)
      fp('6.72.02'), // Data File, Submitted with Amendment on Read-only Optical Disc Not in ASCII File Format or XML File Format
      fp('6.72.03'), // Read-only Optical Discs Are Not Readable
      fp('6.72.04'), // Read-only Optical Disc Contains Viruses
      fp('6.72.05'), // Read-only Optical Disc Requirements (Missing Files on Amended Read-only Optical Disc)
    ]),

    h('nucleotide', 'Nucleotide and/or Amino Acid Sequence Disclosures', [
      fp('24.01'),   // Heading for Sequence Requirements
      fp('24.02'),   // No Sequence Listing part of the disclosure and No CRF
      fp('24.03'),   // No Sequence Listing part of the disclosure and Defective CRF
      fp('24.05'),   // The Sequence Listing part of the disclosure and the CRF are not the same
      fp('24.06'),   // Missing statement that the Sequence Listing (paper or PDF) and the CRF are the same
      fp('24.07'),   // No Computer Readable Form (CRF) submitted
      fp('24.08'),   // Computer Readable Form (CRF) contains error(s) according to STIC report
      fp('24.09'),   // Computer Readable Form (CRF) damaged or unreadable
      fp('24.10'),   // Sequence IDs not present in the specification
      fp('24.11'),   // Sequence IDs not present in the drawings
      fp('24.12'),   // Sequences present in the specification or drawings that are not in the CRF or listing
      fp('24.13'),   // Missing or Defective Incorporation by Reference Paragraph
      fp('24.14'),   // Amendment Missing Instruction to Enter the Sequence Listing into the Application
      fp('24.15'),   // Amendment Missing Statement of No New Matter
      fp('24.16'),   // Amendment Missing Statement of Support
      fp('24.17'),   // Improper CRF transfer request (24-17-draft in source)
      fp('24.17.26'), // Heading for ST.26 Sequence Requirements
      fp('24.18.26'), // No "Sequence Listing XML" part of the disclosure
      fp('24.19.26'), // Defective "Sequence Listing XML"
      fp('24.20.26'), // "Sequence Listing XML" contains errors according to STIC report
      fp('24.21.26'), // Sequence IDs not present in specification
      fp('24.22.26'), // Sequence IDs not present in drawings
      fp('24.23.26'), // Sequence in specification/drawings/claims that is not in XML
      fp('24.24.26'), // Missing, Defective, or Incomplete Incorporation by Reference Paragraph
      fp('24.25.26'), // Amendment Missing Statement of No New Matter
      fp('24.26.26'), // Amendment Missing Statement of Support
      fp('24.27.26'), // "Sequence Listing XML" contains foreign language text
      fp('24.28.26'), // "Sequence Listing XML" bibliographic information does not match application
      fp('24.29.26'), // Amendment Missing Statement of Location of Additions, Deletions or Replacements
    ]),

    h('spec', 'Specification', [
      fp('6.01'),   // Arrangement of the specification
      fp('6.02'),   // Content of the specification
      fp('6.29'),   // Double spacing required
      fp('6.32'),   // Easily erasable paper
      sec('spec-abstract', 'ABSTRACT', [
        fp('6.14'),  // Content
        fp('6.15'),  // Chemical cases
        fp('6.16'),  // Language
        fp('6.12'),  // Missing
        fp('6.13'),  // Objected to
        fp('6.16.01'), // Placement in application
      ]),
      sec('spec-title', 'TITLE OF THE INVENTION', [
        fp('6.11', [
          fp('6.11.01'), // Suggested change
        ]),
      ]),
      sec('spec-exam-precluded', 'EXAMINATION PRECLUDED', [
        fp('7.02'),  // Disclosure incomprehensible
        fp('7.01'),  // Unconventional Terminology not art-accepted
      ]),
      sec('spec-ibr', 'INCORPORATION BY REFERENCE', [
        fp('6.19'),    // Foreign patent/application
        fp('6.19.01'), // In general
      ]),
      sec('spec-sub-spec-req', 'SUBSTITUTE SPECIFICATION REQUIRED', [
        fp('6.28.01'), // Substitute specification required
        fp('6.28'),    // Substitute specification in proper Idiomatic English required
        fp('13.01'),   // Substitute specification required at issue
      ]),
      sec('spec-sub-spec-not-entered', 'SUBSTITUTE SPECIFICATION NOT ENTERED', [
        fp('6.28.02'), // Substitute specification not entered
      ]),
      sec('spec-objections', 'OBJECTIONS TO SPECIFICATION', [
        fp('7.29'),    // Disclosure objected to, Minor informalities
        fp('6.30'),    // Revision required, numerous errors
        fp('6.31'),    // Lengthy Specification
        fp('7.29.04'), // Embedded Hyperlinks or Other Browser-Executable Code
        fp('6.20'),    // Trade Names, Trademarks, and Other Marks Used in Commerce
        fp('7.44'),    // Lacks antecedent basis for claim terminology
      ]),
      sec('spec-new-matter', 'NEW MATTER', [
        fp('7.28'),  // New matter objection
      ]),
    ]),

    h('claim-obj', 'Claim objections', [
      fp('7.29.01'), // Minor informalities
      fp('7.29.02'), // Claimed reference character(s) should be in parentheses
      fp('7.29.03'), // Spacing of lines
      fp('7.36'),    // Statement of Statutory Basis, 35 U.S.C. 112(d)
      fp('6.17'),    // Numbering of claims improper, 37 CFR 1.126
      fp('6.18'),    // Series of dependent claims, pro se
      fp('7.45'),    // Multiple dependent claim(s), improper
      sec('claim-obj-duplicate', 'Duplicate claims', [
        fp('7.05.05'), // Warning
        fp('7.05.06'), // Objection
      ]),
    ]),

    h('claim-interp', 'Claim interpretation', [
      sec('claim-interp-112f', '35 USC 112(f) or 35 USC 112 (pre-AIA), Sixth Paragraph', [
        fp('7.30.03'), // Statement of Statutory Basis, 35 USC 112(f) or pre-AIA 35 USC 112, Sixth Paragraph
        fp('7.30.05'), // Broadest Reasonable Interpretation under 35 USC 112(f)
        fp('7.30.06'), // 35 USC 112(f) or pre-AIA 35 USC 112, 6th Para., Invoked Despite Absence of "Means"
        fp('7.30.07'), // 35 USC 112(f) or pre-AIA 35 USC 112, 6th Para., Not Invoked Despite Presence of "Means" or "Step"
      ]),
    ]),

    h('112', '112 rejections (including 112, 2nd indefiniteness)', [
      sec('112-first', '35 USC 112 (a) or 35 USC 112 (pre-AIA), First Paragraph', [
        fp('7.30.01', [
          fp('7.31.04'),  // Best mode requirement
          fp('7.31.01'),  // Description requirement and new matter situations
          fp('7.31.02'),  // Enablement
          fp('7.33.01'),  // Essential subject matter not in claims and/or spec.
          fp('7.31.03'),  // Scope of enablement
          fp('7.31.05'),  // Scope of Enablement of a "Single Means" Claim
        ]),
        fp('7.05.04'),    // Utility Rejections Under 35 USC 101 and 35 USC 112(a) or pre-AIA 35 USC 112, First Paragraph
      ]),
      sec('112-second', '35 USC 112 (b) or 35 USC 112 (pre-AIA), Second Paragraph', [
        fp('7.30.02'),    // Statement of Statutory Basis
        fp('7.34'),       // Failure to claim applicant's invention
        fp('7.34.01', [
          fp('7.34.02'),  // Terminology inconsistent with accepted meaning
          fp('7.34.03'),  // Relative term - term of degree
          fp('7.34.04'),  // Broader range or limitation followed by narrow range or limitation
          fp('7.34.05'),  // Lack of antecedent basis in the claims
          fp('7.34.07'),  // Idiomatic English
          sec('112-indef-lang', 'Indefinite Language', [
            fp('7.34.08'), // 'For example'
            fp('7.34.09'), // 'Or the like'
            fp('7.34.10'), // 'Such as'
          ]),
          fp('7.34.12'),  // Omits essential method steps
          fp('7.34.13'),  // Omits essential elements
          fp('7.34.14'),  // Omits structural relationship
          fp('7.34.15'),  // Pro se
          fp('7.35'),     // Omnibus claims
          fp('7.35.01'),  // Trademark or Trade Name as a Limitation in the Claim
        ]),
        fp('7.34.23'),    // Claim Limitation Interpreted under 112(f) but Disclosure Lacking
        fp('7.34.24'),    // Unclear Whether Claim Limitation Is To Be Interpreted Under 35 USC 112(f)
      ]),
      sec('112-fourth', '35 USC 112(d) or 35 USC 112 (pre-AIA), Fourth Paragraph', [
        fp('7.36', [
          fp('7.36.01'),  // Rejection under 35 USC 112(d) or pre-AIA 35 USC 112, 4th Para., Improper Dependent Claim
        ]),
      ]),
      fp('8.40'),       // Improper Markush Grouping Rejection
    ]),

    h('101', '101 rejections', [
      fp('7.04.01'),    // Statement of Statutory Basis
      fp('7.103'),      // Statute Cited in Prior Office Action
      fp('7.05', [
        fp('7.05.01'), // Rejection, 35 USC 101, Non-Statutory (Not One of the Four Statutory Categories)
        fp('7.05.016', [
          fp('7.05.017'), // Director Approval for Non-Enumerated Abstract Idea
        ]),
        fp('7.05.02'), // Rejection, Utility Lacking
        fp('7.05.03'), // Rejection, Inoperative
        fp('7.04.03'), // Rejection, Human Organism
      ]),
      fp('7.05.04'),    // Utility Rejections Under 35 USC 101 and 35 USC 112(a) or pre-AIA 35 USC 112, First Paragraph
    ]),

    h('102', '102 rejections', [
      fp('7.06'),       // NOTICE for all US Patent Applications filed on or after March 16, 2013
      fp('7.07.fti'),   // Statement of Statutory Basis, pre-AIA 35 USC 102
      fp('7.08.fti'),   // Pre-AIA 102(a), Activity by Another Before Invention by Applicant
      fp('7.09.fti'),   // Pre-AIA 102(b), Activity More Than One Year Prior to Filing
      fp('7.10.fti'),   // Pre-AIA 102(c), Invention Abandoned
      fp('7.11.fti'),   // Pre-AIA 102(d), Foreign Patenting
      fp('7.12.fti'),   // Pre-AIA 35 USC 102(e), Patent Appl. Publication or Patent to Another with Earlier Filing Date
      fp('7.12.01.fti'), // Pre-AIPA 35 USC 102(e), Patent to Another with Earlier Filing Date (National Stage/Continuing)
      fp('7.13.fti'),   // Pre-AIA 102(f), Applicant Not the Inventor
      fp('7.14.fti'),   // Pre-AIA 102(g), Priority of Invention
      fp('7.103'),      // Statute Cited in Prior Office Action
      sec('102-rejection', 'REJECTION', [
        fp('7.15.fti'),    // Rejection, Pre-AIA 35 USC 102(a), (b) Patent or Publication, and (g)
        fp('7.15.02.fti'), // Rejection, Pre-AIA 35 USC 102(e), Common Assignee, Applicant, or Joint Inventor
        fp('7.15.03.fti'), // Rejection, Pre-AIA 35 USC 102(e), No Common Assignee or Inventor(s)
        fp('7.16.fti'),    // Rejection, Pre-AIA 35 USC 102(b), Public Use or on Sale
        fp('7.17.fti'),    // Rejection, Pre-AIA 35 USC 102(c), Abandonment of Invention
        fp('7.18.fti'),    // Rejection, Pre-AIA 35 USC 102(d), Foreign Patenting
        sec('102-prov-rejection', '102(e), PROVISIONAL', [
          fp('7.15.01.fti'), // Provisional Rejection, 35 U.S.C. 102(a)(2) - Common Assignee, Common Applicant, or At Least One Common (Joint) Inventor
        ]),
        fp('7.19.fti'),    // Rejection, Pre-AIA 35 USC 102(f), Applicant Not the Inventor
        fp('7.48.fti'),    // Failure To Present Claims for Interference
        fp('7.27.fti'),    // Rejection, Pre-AIA 35 USC 102 or pre-AIA 103(a)
        fp('2.19'),        // Overcome Rejection by Translation
      ]),
    ]),

    h('103', '103 rejections', [
      fp('7.06'),         // NOTICE for all US Patent Applications filed on or after March 16, 2013
      fp('7.20.fti'),     // Statement of Statutory Basis, Pre-AIA 35 USC 103(a)
      fp('7.103'),        // Statute Cited in Prior Office Action
      fp('7.23.fti'),     // Graham v. Deere, Test for Obviousness
      fp('7.20.02.fti'),  // Joint Inventors, Common Ownership Presumed
      sec('103-rejection', 'REJECTION', [
        fp('7.21.fti'),     // Rejection, Pre-AIA 35 USC 103(a)
        fp('7.21.02.fti'),  // Rejection, pre-AIA 35 U.S.C. 103(a), Common Assignee, Common Applicant, or at Least One Common (Joint) Inventor
        fp('7.22.fti'),     // Rejection, Pre-AIA 35 USC 103(a), Further in View Of
        fp('7.27.fti'),     // Rejection, Pre-AIA 35 USC 102 or pre-AIA 103(a)
        fp('7.19.fti'),     // Rejection, Pre-AIA 35 USC 102(f), Applicant Not the Inventor
        fp('7.21.01.fti'),  // Provisional Rejection, Pre-AIA 35 U.S.C. 103(a), Common Assignee, Common Applicant, or at Least One Common (Joint) Inventor
        fp('7.20.01.fti'),  // Pre-AIA 103(a) Rejection Using Prior Art Under Pre-AIA 102(e), (f), or (g) That Is Not Disqualified Under Pre-AIA 35 USC 103(c)
      ]),
    ]),

    h('resp-amend', 'Response to amendment', [
      sec('resp-amend-affidavit', 'AFFIDAVIT', [
        fp('7.64.fti'),  // Affidavit or Declaration Under 37 CFR 1.131(a): Effective To Overcome Reference
        fp('7.57.fti', [
          fp('7.60.fti'),  // Ineffective, Reference Is a Statutory Bar
          fp('7.58.fti'),  // Ineffective, Claiming Same Invention
          fp('7.62.fti'),  // Ineffective, Diligence Lacking
          fp('7.61.fti'),  // Ineffective, Insufficient Evidence of Conception
          sec('resp-amend-deficient-rtp', 'DEFICIENT EVIDENCE OF REDUCTION TO PRACTICE', [
            fp('7.59.fti'),  // Ineffective, Insufficient Evidence of Reduction to Practice Before Reference Date
            fp('7.63.fti'),  // Ineffective, Insufficient Evidence of Actual Reduction to Practice
          ]),
        ]),
        fp('7.65'),   // 37 CFR 1.132, effective
        fp('7.66'),   // 37 CFR 1.132, ineffective
        fp('2.03'),   // Transfer from prior application
      ]),
      fp('7.84.01'),  // Amendment is unsigned
      sec('resp-amend-not-entered', 'AMENDMENT TO CLAIMS NOT ENTERED', [
        fp('6.33'),   // improper form 37 CFR 1.121(c) more than 5 words
      ]),
      fp('5.04'),     // Certificate of mailing, benefit denied
      fp('4.01'),     // Dual correspondence not permitted
      fp('7.98'),     // Late, extension of time suggested
      fp('7.98.01'),  // Late, extension of time suggested, pro se
      fp('7.98.02'),  // Late, petition to revive suggested, pro se
      fp('7.28'),     // New matter added to specification
      fp('7.91'),     // Non-responsive .. deliberate
      fp('7.95'),     // Non-responsive .. inadvertent
      fp('7.95.AE'),  // Non-Responsive .. Bona Fide - Application Under Accelerated Examination
      fp('7.84'),     // Non-responsive .. interview summary omitted
      fp('5.01.01'),  // Separate paper required
      fp('7.42'),     // Withdrawal of finality
    ]),

    h('allowable', 'Allowable subject matter', [
      fp('7.97'),     // Claims allowable over prior art
      fp('12.109.01'), // Failure to file brief
      fp('7.43.03'),  // Formal requirements outstanding
      fp('7.43'),     // Objection to claim(s) as being dependent upon rejected claim
      sec('allowable-prosecution-reopened', 'PROSECUTION REOPENED', [
        fp('13.04'),  // After notice of allowance
        fp('13.05'),  // Notice of allowance vacated
        fp('7.50'),   // Allowability withdrawn, new rejection, new art
      ]),
      fp('13.03.01'), // Reasons for indicating allowable subject matter
      fp('13.03'),    // Reasons for allowance
      sec('allowable-rejected-112', 'REJECTED UNDER 35 U.S.C. 112', [
        fp('7.43.02'), // Dependent claim
        fp('7.43.01'), // Independent claim
      ]),
      fp('7.43.04'),  // Suggestion of drafted claim, pro se
    ]),

    h('pro-se', 'Pro se paragraphs', [
      fp('7.95.01'),  // Arguments lacking in response
      fp('6.01'),     // Arrangement of specification
      fp('5.04'),     // Certificate of mailing, benefit denied
      fp('6.02'),     // Content of specification
      fp('4.10'),     // Employ services of attorney or agent
      fp('7.39.01'),  // Final rejection and options for applicant
      fp('7.98.01'),  // Late, extension of time suggested
      fp('7.98.02'),  // Late, petition to revive suggested
      fp('7.214'),    // Papers cannot be returned
      fp('7.34.15'),  // Rejection, 35 U.S.C. 112, 2nd paragraph
      fp('5.01.01'),  // Separate paper required
      fp('6.18'),     // Series of dependent claims
      fp('5.05'),     // Small entity status
      fp('7.43.04'),  // Suggestion of allowable drafted claim
    ]),

    h('design', 'Design paragraphs', [
      sec('design-all-fps', 'ALL DESIGN FPs LISTED BY FP NUMBER', [
        fp('15.01'),       // Conditions Under 35 U.S.C. 119(a)-(d), 172, 386(a) and (b)
        fp('15.01.01'),    // Conditions Under 35 USC 172 Not Met
        fp('15.02'),       // Claimed Foreign Priority, No Certified Copy Filed
        fp('15.03'),       // Certified Copy Filed, But Proper Claim Not Made
        fp('15.03.01.fti'), // Foreign Filing More Than 6 Months Before U.S. Filing, Application Filed Before March 16, 2013
        fp('15.04'),       // Priority under bilateral or multilateral treaties
        fp('15.05.04'),    // Replacement Drawing Sheets Required
        fp('15.05'),       // Design Patent Specification Arrangement (Ch. 16 Design Application)
        fp('15.05.01'),    // Title of design invention
        fp('15.05.03'),    // Drawing disclosure objected to
        fp('15.05.041'),   // Color Drawing(s)/Photograph(s) Submitted
        fp('15.05.05'),    // Drawing corrections required prior to appeal
        fp('15.07'),       // Avoidance of new matter
        fp('15.07.01'),    // Statutory Basis 35 USC 171
        fp('15.08'),       // 35 USC 171 rejection as purely functional
        fp('15.08.01'),    // Lack of Ornamentality (Article Not Visible in its Normal and Intended Use)
        fp('15.08.02'),    // Simulation (Entire Article)
        fp('15.08.03'),    // Explanation of evidence in support of simulation rejection
        fp('15.09'),       // 35 USC 171 Rejection
        fp('15.09.01'),    // Offensive subject matter
        fp('15.10.fti'),   // Applicability of AIA First Inventor to File Provisions
        fp('15.10.15'),    // Notice re prior art available under both pre-AIA and AIA
        fp('15.11.fti'),   // Pre-AIA 35 USC 102(a) Rejection
        fp('15.12.fti'),   // Pre-AIA 35 USC 102(b) Rejection
        fp('15.13.fti'),   // Pre-AIA 35 USC 102(c) Rejection
        fp('15.14.fti'),   // Pre-AIA35 USC 102(d)/35 USC 172 Rejection
        fp('15.15.fti'),   // Pre-AIA 35 USC 102(e) Rejection
        fp('15.15.01.fti'), // Explanation of rejection under Pre-AIA 35 USC 102(a), (b), (d), or (e)
        fp('15.15.02.fti'), // Provisional Pre-AIA 35 USC 102(e) rejection - design disclosed but not claimed in another application
        fp('15.15.03.fti'), // Pre-AIA 35 USC 102(e) provisional rejection - design claimed in an earlier filed design patent application
        fp('15.15.04.fti'), // Pre-AIA 35 USC 102(e) rejection - design disclosed but not claimed in a patent
        fp('15.16.fti'),   // Pre-AIA 35 USC 102(f) Rejection
        fp('15.17.fti'),   // Pre-AIA 35 USC 102(g) Rejection
        fp('15.18.fti'),   // Pre-AIA 35 USC 103(a) Rejection (Single Reference)
        fp('15.19.fti'),   // Pre-AIA 35 USC 103(a) Rejection (Multiple References)
        fp('15.19.02.fti'), // Preface pre-AIA 35 USC 102(e)/103(a) rejection - Different inventors, common assignee
        fp('15.19.03.fti'), // Provisional Pre-AIA 35 USC 102(e)/103(a) rejection - design disclosed but not claimed
        fp('15.19.04.fti'), // pre-AIA 35 USC 102(e)/103(a) Provisional Rejection - design claimed in an earlier filed design patent application
        fp('15.19.05.fti'), // Pre-AIA35 USC 102(e)/103(a) rejection - design disclosed but not claimed
        fp('15.19.06.fti'), // Pre-AIA 35 USC 102(e)/103(a) rejection - design claimed in a design patent with an earlier prior art date and common assignee
        fp('15.19.07.fti'), // Pre-AIA 35 USC 102(e)/103(a) rejection - design claimed in a design patent having an earlier prior art date and no common assignee
        fp('15.20.02'),    // Suggestion To Overcome Rejection Under 35 U.S.C. 112(a) and (b) or pre-AIA 35 U.S.C. 112, First and Second Paragraphs
        fp('15.21'),       // Rejection, 35 USC 112(a) and (b) or pre-AIA 35 USC 112, First And Second Paragraphs
        fp('15.21.01'),    // Rejection, 35 USC 112(b) or pre-AIA 35 USC 112, Second Paragraph (Additional Information Requested)
        fp('15.22'),       // Rejection, 35 USC 112(b) or pre-AIA 35 USC 112, 2nd Paragraph
        fp('15.22.02'),    // Rejection, 35 USC 112(b) or pre-AIA 35 USC 112, 2nd Paragraph ("Or the Like" In Claim)
        fp('15.22.03'),    // Rejection, 35 USC 112(b) or pre-AIA 35 USC 112, 2nd Paragraph (Title Fails to Specify a Known Article of Manufacture)
        fp('15.23'),       // 35 USC 171 double patenting rejection
        fp('15.23.01'),    // 35 USC 171 Provisional Double Pat. Rejection (Design-design)
        fp('15.23.02'),    // Summary for "Same Invention" - Type Double Patenting Rejections
        fp('15.24', [
          fp('15.24.03'),  // Provisional Nonstatutory Double Patenting Rejection (Single Reference)
          fp('15.24.04'),  // Provisional Nonstatutory Double Patenting Rejection (Multiple References)
        ]),
        fp('15.24.05.fti'), // Identical Claim: Common Assignee
        fp('15.24.06'),    // Summary statement (filing of Terminal Disclaimer required)
        fp('15.24.07'),    // Obviousness-type double patenting rejection (Design-Utility)
        fp('15.24.08'),    // Provisional Double Patenting Rejection (Design-Utility)
        fp('15.25'),       // Nonstatutory Double Patenting Rejection (Multiple References)
        fp('15.26'),       // Identification of Prior Application(s) in Provisional Applications-Benefit of Priority Claimed
        fp('15.27'),       // Restriction under 35 USC 121
        fp('15.27.01'),    // Restriction under 35 USC 121 (obvious variations within group)
        fp('15.27.02'),    // Restriction not required (first action - non issue)
        fp('15.27.03'),    // Restriction not required (first action issue)
        fp('15.27.04'),    // Restriction Not Required - Change In Scope (First Action - Non Issue)
        fp('15.27.05'),    // Restriction Not Required - Change In Scope (First Action Issue)
        fp('15.27.06'),    // Rest. Not Req. (Change in Appear. & Scope - 1st Action Non Issue)
        fp('15.27.07'),    // Rest. Not Req. (Change in Appear. & Scope - 1st Action Issue)
        fp('15.27.08'),    // Restriction with Differences in Appearance and Scope
        fp('15.28'),       // Telephone restriction under 35 USC 121
        fp('15.28.01'),    // Telephone Restriction - Obvious Variations Within Group
        fp('15.28.02'),    // Telephone Restriction with Differences in Appearance and Scope
        fp('15.29'),       // Restriction under 35 USC 121 (segregable parts)
        fp('15.30'),       // Restriction under 35 USC 121 (segregable parts)(telephonic)
        fp('15.31'),       // Provisional election required (37 CFR 1.143)
        fp('15.33'),       // Statement Used In Rest. When Common Embodiment In More Than 1 Group
        fp('15.34'),       // Groups withdrawn from consideration after traverse
        fp('15.35'),       // Cancel non-elected design (traverse)
        fp('15.36'),       // Groups withdrawn from consideration without traverse
        fp('15.37'),       // Cancellation of non-elected groups, no traverse
        fp('15.38'),       // Rejection adhered to
        fp('15.39.02.fti'), // Final Rejection Under pre-AIA 35 USC 103(a) (Single Reference)
        fp('15.40.fti'),   // Final Rejection Under pre-AIA 35 USC 103(a) (Multiple References)
        fp('15.40.01'),    // Final rejection under other statutory provisions
        fp('15.41'),       // Functional, structural features not considered
        fp('15.42'),       // Visual characteristics
        fp('15.43'),       // Subject matter of design patent
        fp('15.44'),       // Design inseparable from object to which applied
        fp('15.46.01'),    // Impermissible Descriptive Statement
        fp('15.47'),       // Characteristic feature statement
        fp('15.47.01'),    // Feature Statement Caution
        fp('15.48'),       // Necessity for good drawings
        fp('15.50'),       // Use of Broken Lines for Indicating Unimportant Features Not Permitted
        fp('15.50.01'),    // Use of Broken Lines in Drawing (Ch. 16 Design Application)
        fp('15.50.02'),    // Description of Broken Lines (Ch. 16 Design Application)
        fp('15.50.04'),    // Proper drawing disclosure with use of broken lines
        fp('15.50.05'),    // Description of Broken Lines as Boundary of Design (Ch. 16 Design Application)
        fp('15.51'),       // 35 USC 112(a) Rejection (Written Description)
        fp('15.51.01'),    // 35 USC 132 objection (new matter), not effecting Claim
        fp('15.55'),       // Design patent/copyright overlap
        fp('15.55.01'),    // Design Patent - Trademark Overlap
        fp('15.58'),       // Claimed design is patentable (ex parte Quayle actions)
        fp('15.58.01'),    // Claimed design is patentable (35 USC 112 rejections)
        fp('15.59'),       // Amend title
        fp('15.60'),       // Amend all figures descriptions
        fp('15.61'),       // Amend selected figure descriptions
        // Note: "Amend Specification to Add Reference to Color Drawing(s)/Photograph(s) (Ch. 16 Design Application)" has no FP ID in source
        fp('15.62'),       // Amend claim 'as shown'
        fp('15.63'),       // Amend claim 'as shown and described'
        fp('15.64'),       // Addition of 'and described' to claim
        fp('15.65'),       // Amendment may not be possible
        fp('15.66'),       // Employ services of patent attorney or agent (designs only)
        fp('15.66.01'),    // Employ Services of Professional Patent
        fp('15.67'),       // Rationale for 35 USC 103 Rejection (Single Reference)
        fp('15.69.01'),    // Remove 'or the like' by examiner's amendment
        fp('15.70.fti'),   // Preface, Pre-AIA 35 USC 103(a) Rejection
        fp('15.72'),       // Quayle action
        fp('15.73'),       // Corrected Drawing Sheets Required
        fp('15.74'),       // Continuation-in-part
        fp('15.74.01'),    // Continuation-In-Part - Not Entitled To Benefit of Earlier Filing Date
        fp('15.75.fti'),   // Preface to Rejection in Alleged CIP Based on pre-AIA 35 USC 102(d)/35 USC 172
        fp('15.75.01.fti'), // C-I-P Caution, Claim to Foreign Priority in Earlier Filed Application - Status of Foreign Application Unknown
        fp('15.76'),       // Trademark in Drawing
        fp('15.85'),       // Surfaces/Portions of Article Disclaimed
        fp('15.90'),       // Indication of allowability withdrawn
      ]),
      sec('design-hague', 'INTERNATIONAL DESIGN APPLICATION (HAGUE)', [
        fp('29.04'),   // Statement of Statutory Bases, Improper Inventorship in International Design Application
        fp('29.10'),   // Reproductions Objected to, Amended Reproductions Do Not Comply With Formal Requirements
        fp('29.11'),   // Reproductions Objected to, Design Not Fully Disclosed in Reproductions
        fp('29.20'),   // Matter Not Forming Part of Design (International Design Application)
        fp('29.21'),   // Rejection, 35 USC 112(b) - Undescribed Broken Lines (International Design Application)
        fp('29.22'),   // Description of Broken Lines Added by Examiner's Amendment (International Design Application)
        fp('29.23'),   // Rejection, 35 USC 112(b) - Undescribed Broken Lines as Boundary of Design (International Design Application)
        fp('29.24'),   // Description of Broken Lines as Boundary of Design Added by Examiner's Amendment (International Design Application)
        fp('29.25'),   // Rejection, 35 USC 112(b) - Unclear Use of Coloring (International Design Application)
        fp('29.26'),   // Description of Coloring Added by Examiner's Amendment (International Design Application)
        fp('29.27'),   // Suggestion To Overcome Rejection Under 35 USC 112(a) and (b) (International Design Application)
        fp('29.59.01'), // Amend Title Except for Product Indication
        fp('29.59.02'), // Amend Application Title to Correspond to the Claim
        fp('29.60.02'), // Objection to Specification - Missing Figure Descriptions
        fp('29.61.01'), // At Least One Color Drawing Statement
        fp('29.100'),  // Reply Reminder
        fp('29.101'),  // Discussion of the Merits of the Application
        fp('29.102'),  // Reply Reminder for Restriction Requirements Concerning Figure Numbering
      ]),
    ]),

    h('conclusion', 'Conclusion', [
      fp('5.02'),     // Certificate of mailing, proper format
      fp('7.96'),     // Citation of pertinent prior art
      fp('7.39'),     // Action is Final
      fp('7.40'),     // Action is Final, Necessitated by Amendment
      fp('7.40.01'),  // Action is Final, Necessitated by IDS with Fee
      fp('7.40.02.fti'), // Action Is Final, Necessitated by Invoking the Joint Research Agreement Prior Art Disqualification Under Pre-AIA 35 U.S.C. 103(c)
      fp('7.41'),     // Action is Final, First Action
      fp('7.42.09'),  // Action is Final, First Action Following Request for Continued Examination under 37 CFR 1.114
      fp('7.51'),     // Quayle action
      fp('7.51.AE'),  // Quayle Action - Application Under Accelerated Examination
    ]),

    h('double-pat', 'Double Patenting', [
      // Note: For warning/objection to duplicate claims in the same application, see Claim objections.
      fp('8.29'),     // Patentably Indistinct Claims, Copending Applications
      sec('double-pat-statutory', 'STATUTORY (35 USC 101)', [
        fp('8.30'),   // Basis for statutory double patenting, heading
        fp('8.31'),   // Rejection
        fp('8.32'),   // Provisional
      ]),
      fp('8.27.fti'), // Different Inventors, Common Assignee, Same Invention, Examined Under Pre-AIA Provisions
      sec('double-pat-nonstatutory', 'NON-STATUTORY', [
        fp('8.33'),   // Basis for non-statutory double patenting, heading
        fp('8.34', [
          fp('8.35'), // Provisional
        ]),
        fp('8.36', [
          fp('8.37'), // Provisional
        ]),
        sec('double-pat-schneller', 'IN RE SCHNELLER --- TC DIRECTOR SIGNATURE REQUIRED ---', [
          fp('8.38'), // Non-obvious type, with a patent (Based Solely on Improper Timewise Extension of Patent Rights)
          fp('8.39'), // Non-obvious type, with another application (Based Solely on Improper Timewise Extension of Patent Rights)
        ]),
      ]),
    ]),

    h('interference', 'Interference', [
      fp('23.14'),    // Claims copied more than one year from patent issue date
      fp('23.01'),    // Request for interference premature; examination not completed
      fp('23.02'),    // Ex parte prosecution resumed
      sec('interference-suspension', 'SUSPENSION OF ACTION', [
        fp('7.53'),   // Possible interference
      ]),
      sec('interference-notice-patentee', 'NOTICE TO PATENTEE', [
        fp('7.49'),   // Rejection, disclaimer, failure to appeal
      ]),
      fp('7.48.fti'), // Failure To Present Claims for Interference
      fp('23.04'),    // Requiring applicant to add claim to provoke interference
      fp('23.06', [
        fp('23.06.01'), // Failure to Identify the Other Application or Patent
        fp('23.06.02'), // Failure to Identify the Counts and Corresponding Claims
        fp('23.06.03'), // Failure to Provide Claim Chart Comparing At Least One Claim
        fp('23.06.04'), // Failure to Explain in Detail Why Applicant Will Prevail on Priority
        fp('23.06.05'), // Claim Added/Amended; Failure to Provide Claim Chart Showing Written Description
        fp('23.06.06'), // Time Period for Reply
      ]),
    ]),

    h('inventorship', 'Inventorship', [
      sec('inventorship-correction', 'CORRECTION OF INVENTORSHIP', [
        sec('inventorship-design', 'DESIGN APPLICATIONS', [
          fp('2.32'),  // Request To Delete a Named Inventor in CPA (for Design Applications)
          fp('2.33'),  // New Inventor Identified in CPA (for Design Applications)
        ]),
      ]),
      sec('inventorship-sof', 'STATEMENT OF FACT PROBLEM', [
        fp('8.23.02'),     // Joint inventors, notice in restriction requirement
        fp('7.20.02.fti'), // Joint Inventors, Common Ownership Presumed
        fp('2.14'),        // Misjoinder or nonjoinder of inventors
      ]),
    ]),

    h('reexam', 'Reexamination', [
      fp('22.06'),   // Examiner's amendment accompanying NIRC
      fp('22.09'),   // Reexamination - Action is final
      fp('22.10'),   // Reexamination - Action is final, necessitated by amendment
      fp('22.03'),   // Issue not within scope of reexamination
      fp('22.07'),   // Litigation, reminder to apprise PTO
      fp('22.08'),   // Litigation reminder, third party
      fp('22.01'),   // Substantial New question of patentability
      // Substantial New Question of Patentability Based Solely on Old Art — no FP number in source
      fp('22.02'),   // No substantial new question of patentability
      fp('22.04'),   // Papers to be submitted in response to action
      fp('22.05'),   // Reexamination based on reissue claims
      fp('22.16'),   // Statement of reasons for patentability and/or confirmation
      fp('22.11'),   // Rejection, 35 USC 305, Claim Enlarges Scope of Patent
    ]),

    h('reissue', 'Reissue Applications', [
      sec('reissue-heading', 'OFFICE ACTION HEADING PARAGRAPH', [
        fp('14.01'),  // Reissue Application, Applicable Laws and Rules Heading
      ]),
      sec('reissue-assent-unacceptable', 'ASSENT OF ASSIGNEE UNACCEPTABLE', [
        fp('14.16.04.fti'), // Attorney/Agent of Record Signs - Application Filed Before Sept. 16, 2012
        fp('14.16.02'),     // Failure to State Capacity to Sign
        fp('14.16.03'),     // Lack of Capacity to Sign
      ]),
      fp('14.15'),    // Consent of assignee lacking
      fp('14.16'),    // Failure of Assignee to Establish Ownership
      fp('14.16.01'), // Establishment Owner Not Signed by Appropriate Party
      fp('14.16.06'), // Criteria to Accept if Signed by Nonrecognized Officer
      sec('reissue-litigation', 'LITIGATION RELATED REISSUE', [
        sec('reissue-action-not-stayed', 'ACTION NOT STAYED', [
          fp('14.07'),  // Related litigation stayed
          fp('14.08'),  // Related litigation terminated
          fp('14.09'),  // Related litigation not overlapping
          fp('14.10'),  // Applicant's request
        ]),
        fp('14.11'),  // Action stayed, related litigation
        fp('14.06'),  // Litigation related reissue
      ]),
      sec('reissue-defective-oath', 'DEFECTIVE REISSUE OATH/DECLARATION, 37 CFR 1.175(a)(1)', [
        fp('14.11.01'), // Duties under 37 CFR 1.178(b) and 1.56, reminder
        sec('reissue-oath-defective', 'OATH DEFECTIVE', [
          fp('14.01.01'), // No Statement of a Specific Error
          fp('14.01.02'), // The Identified "Error" Is Not Appropriate Error
          fp('14.01.03'), // Multiple Identified Errors Not Appropriate Errors
          fp('14.01.04.fti'), // Defective Reissue Oath/Declaration in Application Filed Before Sept. 16, 2012 - Lack of Statement of "Without Any Deceptive Intention"
          fp('14.01.05'), // No Statement of Defect in the Patent
          fp('14.01.06'), // General
          // GENERAL STATEMENT — sub-header only
        ]),
      ]),
      fp('14.14'),    // Rejection, defective reissue oath or declaration
      fp('14.05.02.fti'), // Supplemental Oath or Declaration Required Prior to Allowance - Application Filed Before Sept. 16, 2012
      fp('14.12'),    // Rejection, 35 U.S.C. 251, broadened claims after 2 years
      fp('14.13'),    // Rejection, 35 U.S.C. 251, broadened claims from assignee
    ]),

    h('resp-args', 'Response to Arguments', [
      fp('7.37'),     // Arguments not persuasive
      fp('7.38'),     // Arguments moot, new ground(s) of rejection
      fp('7.38.01'),  // Arguments Persuasive, Previous Rejection/Objection Withdrawn
      fp('7.38.02'),  // Arguments Persuasive, New Ground(s) of Rejection
      fp('7.95.01'),  // Lack of arguments in response, pro se
      sec('resp-args-combo', 'ARGUMENTS REGARDING COMBINATION OF REFERENCES', [
        fp('7.37.01'), // Age of references
        fp('7.37.02'), // Bodily incorporation
        fp('7.37.03'), // Hindsight reasoning
        fp('7.37.04'), // No Teaching, Suggestion, or Motivation To Combine
        fp('7.37.05'), // Non-analogous art
        fp('7.37.06'), // Number of references
      ]),
      sec('resp-args-unpersuasive', 'UNPERSUASIVE ARGUMENTS', [
        fp('7.37.07'), // The Invention Obtains Result Not Contemplated by Prior Art
        fp('7.37.08'), // Features which are not claimed
        fp('7.37.09'), // Intended use recitation
        fp('7.37.10'), // Limitations in preamble
        fp('7.37.11'), // Mere allegation of patentability
        fp('7.37.12'), // Novelty not clearly pointed out
        fp('7.37.13'), // Piecemeal analysis of references
      ]),
      fp('2.03'),     // Transfer from prior application
    ]),

    h('term-disc', 'Terminal Disclaimer', [
      sec('term-disc-acceptable-lang', 'EXAMPLES OF ACCEPTABLE LANGUAGE', [
        fp('14.27.04.fti'), // Examples of Acceptable Terminal Disclaimer Language in Patent To Be Granted - Application Filed Before Sept. 16, 2012
        fp('14.27.06'),     // In patent (reexamination situation)
      ]),
      sec('term-disc-samples', 'SAMPLES OF A TERMINAL DISCLAIMER', [
        fp('14.37'),  // Information about a Terminal Disclaimer Over a Pending Application
        fp('14.38'),  // Information about a Terminal Disclaimer Over a Prior Patent
      ]),
      fp('14.36'),    // Suggestion that patent applicant request a refund
      fp('14.36.01'), // Suggestion that patent owner request a refund
      fp('14.34'),    // Requirement for statement to record assignment submitted with Terminal Disclaimer
      fp('14.23', [
        fp('14.23.01'), // Reexam only
      ]),
      sec('term-disc-not-proper', 'TERMINAL DISCLAIMER NOT PROPER', [
        fp('14.26.05'), // Application/patent improperly identified
        fp('14.26.04'), // Application/patent not identified
        fp('14.26.02'), // Directed to particular claim(s)
        fp('14.26', [
          fp('14.26.01'), // Extent of interest not stated
          sec('term-disc-fails-disclaim', 'FAILS TO DISCLAIM TERMINAL PORTION', [
            fp('14.27.02'), // Of any patent granted on subject application
            fp('14.27.03'), // Of subject patent
          ]),
          fp('14.28.fti'), // Failure To State Capacity To Sign - Application Filed Before Sept. 16, 2012
          fp('14.24', [
            fp('14.25'), // Reexam only
          ]),
          fp('14.27.01'), // No clause enforceable only during ... common ownership
          fp('14.26.07'), // No disclaimer fee submitted
          fp('14.26.03'), // Not signed
          fp('14.26.06.fti'), // Not Signed by All Owners - Application Filed Before Sept. 16, 2012
        ]),
        fp('14.29.fti'), // Not Recognized as Officer of Assignee - Application Filed Before Sept. 16, 2012
      ]),
      sec('term-disc-chain-of-title', 'EVIDENCE OF CHAIN OF TITLE TO ASSIGNEE', [
        sec('term-disc-not-signed', 'SUBMISSION NOT SIGNED BY APPROPRIATE PARTY', [
          fp('14.30.02.fti'), // Evidence of Chain of Title to Assignee - Submission Not Signed by Appropriate Party - Application Filed Before Sept. 16, 2012, Terminal Disclaimer Is Thus Not Entered
          fp('14.30.fti'),    // No Evidence of Chain of Title to Assignee - Application Filed Before Sept. 16, 2012
        ]),
        fp('14.30.01'), // No Evidence of Chain of Title to Assignee (Reexamination Situations)
        fp('14.32'),    // Application/patent which forms basis for rejection not identified
        fp('14.33'),    // 37 CFR 3.73 Establishing the right of the assignee to prosecute
        fp('14.35'),    // Previously submitted disclaimer fee can be applied, patent applicant
        fp('14.35.01'), // Previously submitted disclaimer fee can be applied, patent owner
      ]),
    ]),

    h('transitional', 'Transitional after final practice', [
      fp('7.42.03.fti'),  // Action Is Final, First Action Following Submission Under 37 CFR 1.129(a) Filed Prior to June 8, 2005
      fp('7.41.01.fti'),  // Transitional After Final Practice, First Submission (37 CFR 1.129(a))
      fp('7.41.02.fti'),  // Transitional After Final Practice, Second Submission (37 CFR 1.129(a))
      fp('7.42.01.fti'),  // Withdrawal of Finality of Last Office Action - Transitional Application Under 37 CFR 1.129(a)
      fp('7.42.02.fti'),  // Nonresponsive Submission Filed Under 37 CFR 1.129(a)
    ]),

  ]), // end general

  sec('appeal', "Examiner's Answer (Appeal on or after 1-23-2012)", [
    fp('12.249'),    // Examiner's Answer Cover Sheet
    h('appeal-grounds-review', '(1) Grounds of Rejection to be Reviewed on Appeal', [
      fp('12.254.01'), // Statement of Grounds of Rejection - not modified
      fp('12.254.02'), // Statement of Grounds of Rejection - modified
    ]),
    h('appeal-restatement', '(2) Restatement of Rejection', [
      fp('12.255'),    // Restatement of Rejection
    ]),
    h('appeal-new-grounds', '(3) New Grounds of Rejection', [
      fp('12.256'),    // New Grounds of Rejection - Heading
    ]),
    h('appeal-withdrawn', '(4) Withdrawn Ground of Rejection', [
      fp('12.257'),    // Withdrawn Rejections
    ]),
    h('appeal-resp-argument', '(5) Response to Argument', [
      sec('appeal-affidavit', 'AFFIDAVIT', [
        fp('7.64.fti'),  // Affidavit or Declaration Under 37 CFR 1.131(a): Effective To Overcome Reference
        fp('7.57.fti'),  // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective- Heading
        fp('7.60.fti'),  // Ineffective, Reference Is a Statutory Bar
        fp('7.58.fti'),  // Ineffective, Claiming Same Invention
        fp('7.62.fti'),  // Ineffective, Diligence Lacking
        fp('7.61.fti'),  // Ineffective, Insufficient Evidence of Conception
        sec('appeal-deficient-rtp', 'DEFICIENT EVIDENCE OF REDUCTION TO PRACTICE', [
          fp('7.59.fti'), // Ineffective, Insufficient Evidence of Reduction to Practice Before Reference Date
          fp('7.63.fti'), // Ineffective, Insufficient Evidence of Actual Reduction to Practice
        ]),
        fp('7.65'),   // Affidavit or Declaration Under 37 CFR 1.132, Effective to Withdraw Rejection
        fp('7.66'),   // Affidavit or Declaration Under 37 CFR 1.132, Insufficient
        fp('2.03'),   // Affidavits and Declarations in Prior Application
      ]),
      fp('7.84.01'), // Paper Is Unsigned
      fp('5.04'),    // Benefit of Certificate of Mailing Denied
      fp('4.01'),    // Dual Correspondence
      fp('7.98'),    // Response Is Late, Extension of Time Suggested
      fp('7.98.01'), // Reply Is Late, Extension of Time Suggested, Pro Se
      fp('7.98.02'), // Reply Is Late, Petition to Revive Suggested, Pro Se
      fp('7.28'),    // Objection To New Matter Added To Specification
      fp('7.91'),    // Reply Is Not Fully Responsive, Extension of Time Suggested
      fp('7.95'),    // Bona Fide, Non-responsive Amendments
      fp('7.95.AE'), // Bona Fide, Non-Responsive Amendments - Application Under Accelerated Examination
      fp('7.84'),    // Amendment is Non-responsive to Interview
      fp('7.84.AE'), // Amendment Is Non-Responsive to Interview - Application Under Accelerated Examination // verify
      fp('7.42'),    // Withdrawal of Finality of Last Office Action
    ]),
    h('appeal-conclusion', '(6) Conclusion of Examiner Answer', [
      fp('12.279.01'), // Conclusion to Examiner Answer Raising New Grounds of Rejection
      fp('12.279'),    // Conclusion to Examiner Answer - No New Grounds of Rejection
    ]),
  ]),

  sec('amendment', "Examiner's Amendment", [
    h('amendment-with-ext', '...with extension of time', [
      fp('13.02.02'), // Extension of Time and Examiner's Amendment Authorized
      fp('13.06'),    // Extension of Time by Examiner's Amendment
    ]),
    h('amendment-no-ext', '...no extension of time', [
      fp('13.02'),    // Examiner's Amendment
      fp('13.02.01'), // Examiner's Amendment Authorized
    ]),
    h('amendment-text', "Amendment(s) text", [
      // "The application has been amended as follows" — plain text note, no FP
      fp('6.47'),     // Examiner's Amendment Involving Drawing Changes
    ]),
    h('amendment-reasons', 'Reasons for allowance', [
      fp('13.03'),    // Reasons for Allowance
    ]),
    h('amendment-conclusion', 'Conclusion', [
      // OC Closing Paragraph — not an FP
    ]),
  ]),

  sec('election', 'Election/Restriction', [

    h('er-restriction', 'Restriction', [
      sec('er-restr-only', 'Restriction', [
        fp('8.08'),    // Restriction, 2 Groupings
        fp('8.11'),    // Restriction, Additional Groupings
      ]),
      sec('er-how-related', 'How Inventions are Related', [
        fp('8.13'),    // Distinctness (Heading)
        sec('er-inventions-related', 'Inventions Related', [
          fp('8.14'),    // Intermediate-Final Product
          fp('8.14.01'), // Distinct Products or Distinct Processes
          fp('8.15'),    // Combination-Subcombination
          fp('8.16'),    // Subcombinations, Useable Together
          fp('8.17'),    // Process and Apparatus
          fp('8.18'),    // Product and Process of Making
          fp('8.19'),    // Apparatus and Product Made
          fp('8.20'),    // Product and Process of Using
          fp('8.20.02'), // Unrelated Inventions
          fp('8.20.03'), // Unrelated Product and Process Inventions
        ]),
        fp('8.21'),    // Burden and Means for Traversal for all Restrictions, other than an Election of Species
      ]),
      sec('er-election-by-phone', 'Election by Phone', [
        fp('8.23'),    // Requirement, When Elected by Telephone
        fp('8.23.01'), // Requirement, No Election by Telephone
        fp('8.23.03'), // No telephone restriction permitted
      ]),
      sec('er-joint-inventors-opt', 'Joint Inventors (optional)', [
        fp('8.23.02'), // Joint Inventors, Correction of Inventorship
      ]),
      sec('er-rejoinder-opt', 'Rejoinder (optional)', [
        fp('8.21.04'), // Notice of Potential Rejoinder of Process Claims in Ochiai/Brouwer Situation
      ]),
      sec('er-conclusion-opt', 'Conclusion (optional)', [
        // OC Closing Paragraph — not an FP
      ]),
    ]),

    h('er-election-of-species', 'Election of Species', [
      sec('er-eos-basis', 'Election Of Species (Basis for)', [
        fp('8.01'),    // Election of Species; Species Claim(s) Present
        fp('8.02'),    // Election of Species; No Species Claim Present
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
      sec('er-eos-conclusion', 'Conclusion (optional)', [
        // OC Closing Paragraph
      ]),
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
      sec('er-both-conclusion', 'Conclusion (optional)', [
        // OC Closing Paragraph
      ]),
    ]),

    h('er-371-restriction', '35 U.S.C. 371 - Restriction', [
      fp('18.18'),   // Lack Of Unity - Species - Reasons Why Unity Is Lacking
      fp('18.19'),   // National Stage Restriction In 35 USC. 371 Applications
      fp('18.06.01'), // Lack Of Unity - Two (Or Additional) Groups Of Claims
      sec('er-371-restr-main', 'Restriction 371', [
        fp('18.06.02'), // Lack Of Unity - One Additional Group Of Claims
        fp('18.07'),    // Lack Of Unity - Reasons Why Inventions Lack Unity
        sec('er-371-chem-alt', 'Chemical Compound Alternative', [
          fp('18.07.03'), // Heading- Chemical Compound Alternatives of Markush Group Are Not of a Similar Nature
          // 18-07-03a, 18-07-03b, 18-07-03c — sub-items without separate IDs; use 18.07.03 parent
        ]),
        sec('er-371-tech-feat', 'Technical Feature', [
          fp('18.07.01'), // Same or Corresponding Technical Feature Lacking Among Groups
          fp('18.07.02'), // Shared Technical Feature Does Not Make a Contribution Over the Prior Art
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
      sec('er-371-restr-conclusion', 'Conclusion (optional)', [
        // OC Closing Paragraph
      ]),
    ]),

    h('er-371-eos', '35 U.S.C. 371 - Election of Species', [
      fp('18.18'),   // Lack Of Unity - Species - Reasons Why Unity Is Lacking
      fp('18.20'),   // National Stage Election Of Species In 35 USC. 371 Applications
      sec('er-371-eos-main', 'Election of Species 371', [
        fp('18.07'),    // Lack Of Unity - Reasons Why Inventions Lack Unity
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
      sec('er-371-eos-conclusion', 'Conclusion (optional)', [
        // OC Closing Paragraph
      ]),
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
      sec('er-371-both-conclusion', 'Conclusion (optional)', [
        // OC Closing Paragraph
      ]),
    ]),

  ]), // end election

]
