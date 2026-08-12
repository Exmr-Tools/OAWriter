/**
 * Subject-organized listing of MPEP form paragraphs.
 * Organized alphabetically by subject heading, then by sub-topic.
 * Generated from Subject.docx.
 *
 * Notes:
 * - FP numbers are matched by title to the JSON; entries marked "// verify" need confirmation.
 * - Entries with no resolvable FP ID are sec() nodes (label only).
 * - Cross-reference entries ([see also ...]) are omitted.
 */
import type { CatNode } from './categories'

function fp(id: string, children?: CatNode[]): CatNode {
  return { id: `fp-${id}`, fpId: id, children }
}

function sec(id: string, label: string, children: CatNode[]): CatNode {
  return { id, label, children }
}

export const SUBJECT: CatNode[] = [

  sec('subj-abandonment', 'ABANDONMENT', [
    sec('subj-abandon-fail-respond', 'Failure to respond', [
      fp('7.90'), // Abandonment, Failure to Respond
    ]),
  ]),

  sec('subj-abstract', 'ABSTRACT', [
    sec('subj-abstract-content', 'Content of', [
      fp('6.14'), // Abstract of the Disclosure- Content
    ]),
    sec('subj-abstract-chem', 'Content for chemical cases', [
      fp('6.15'), // Abstract of The Disclosure- Chemical Cases
    ]),
    sec('subj-abstract-lang', 'Language', [
      fp('6.16'), // Abstract of The Disclosure- Language
    ]),
    sec('subj-abstract-minor', 'Minor informalities, objection', [
      fp('6.13'), // Abstract Objected To
    ]),
    sec('subj-abstract-missing', 'Missing', [
      fp('6.12'), // Abstract Missing (Background)
    ]),
  ]),

  sec('subj-accel-exam', 'ACCELERATED EXAMINATION', [
    fp('7.42.08.AE'),  // Request For Continued Examination - Not Fully Responsive - Application Under Accelerated Examination
    fp('7.51.AE'),     // Quayle Action - Application Under Accelerated Examination
    fp('7.84.AE'),     // Amendment Is Non-Responsive to Interview - Application Under Accelerated Examination // verify
    fp('7.84.01.AE'),  // Paper Is Unsigned - Application Under Accelerated Examination // verify
    fp('7.95.AE'),     // Bona Fide, Non-Responsive Amendments - Application Under Accelerated Examination
    fp('7.70.AE'),     // Updated AE Support Document Required for Claim Amendments Not Encompassed by Previous Support Document(s)
    fp('7.71.AE'),     // Use Of Proper Document and Fee Codes When Filing A Reply Electronically Via the USPTO Patent Electronic Filing System
    fp('7.126.AE'),    // Conclusion Of Requirement Mailed Without Any Other Office Action - Application Under Accelerated Examination // verify
    fp('8.26.AE'),     // Canceled Elected Claims, Non-Responsive - Application Under Accelerated Examination // verify
    fp('19.02.AE'),    // Requirement for Information - Application Under Accelerated Examination // verify
  ]),

  sec('subj-affidavits', 'AFFIDAVITS, DECLARATIONS', [
    sec('subj-aff-131', '37 CFR 1.131', [
      sec('subj-aff-131-eff', 'Effective', [
        fp('7.64.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Effective To Overcome Reference
      ]),
      sec('subj-aff-131-ineff', 'Ineffective, heading', [
        sec('subj-aff-131-same-inv', 'Claiming the same invention', [
          fp('7.58.fti'), // Ineffective, Claiming Same Invention
        ]),
        sec('subj-aff-131-diligence', 'Diligence lacking', [
          fp('7.62.fti'), // Ineffective, Diligence Lacking
        ]),
        sec('subj-aff-131-actual-rtp', 'Insufficient evidence of actual reduction to practice', [
          fp('7.63.fti'), // Ineffective, Insufficient Evidence of Actual Reduction to Practice
        ]),
        sec('subj-aff-131-conception', 'Insufficient evidence of conception', [
          fp('7.61.fti'), // Ineffective, Insufficient Evidence of Conception
        ]),
        sec('subj-aff-131-rtp', 'Insufficient evidence of reduction to practice', [
          fp('7.59.fti'), // Ineffective, Insufficient Evidence of Reduction to Practice Before Reference Date
        ]),
        sec('subj-aff-131-stat-bar', 'Reference is a statutory bar', [
          fp('7.60.fti'), // Ineffective, Reference Is a Statutory Bar
        ]),
        fp('7.57.fti'),  // Ineffective- Heading
      ]),
    ]),
    sec('subj-aff-132', '37 CFR 1.132', [
      sec('subj-aff-132-eff', 'Effective', [
        fp('7.65'), // Affidavit or Declaration Under 37 CFR 1.132, Effective to Withdraw Rejection
      ]),
      sec('subj-aff-132-ineff', 'Ineffective', [
        sec('subj-aff-132-never-seen', 'Affiant has never seen invention before', [
          fp('7.66.01'), // Reason Why Affidavit or Declaration Under 37 CFR 1.132 Is Insufficient, Affiant Has Never Seen Invention Before
        ]),
        sec('subj-aff-132-conclusion', 'Conclusion', [
          fp('7.66.05'), // Reason - Conclusion
        ]),
        sec('subj-aff-132-works', 'Invention works as intended', [
          fp('7.66.02'), // Reason - Invention Works as Intended
        ]),
        sec('subj-aff-132-no-felt-need', 'No evidence of long-felt need', [
          fp('7.66.04'), // Reason - No Evidence of Long-felt Need
        ]),
        sec('subj-aff-132-refs-inv', 'Refers only to invention, not to claims', [
          fp('7.66.03'), // Reason - Refers Only to Invention, Not to Claims
        ]),
        fp('7.66'), // Affidavit or Declaration Under 37 CFR 1.132, Insufficient
      ]),
    ]),
    sec('subj-aff-transfer', 'Transfer from prior application', [
      fp('2.03'), // Affidavits and Declarations in Prior Application
    ]),
  ]),

  sec('subj-allowable', 'ALLOWABLE SUBJECT MATTER', [
    sec('subj-allow-brief', 'Failure to file brief', [
      fp('12.109.01'), // Appeal Dismissed - Allowed Claims - Formal Matters Remaining
    ]),
    sec('subj-allow-formal', 'Formal requirements outstanding', [
      fp('7.43.03'), // Allowable Subject Matter, Formal Requirements Outstanding
    ]),
    sec('subj-allow-obj-claims', 'Objection to claims', [
      fp('7.43'), // Objection to Claims, Allowable Subject Matter
    ]),
    sec('subj-allow-after-board', 'After Board Decision', [
      sec('subj-allow-sustained-no-allowed', 'Examiner sustained in part, requirement of rewriting dependent claims (no allowed claim)', [
        fp('12.119.01'), // Examiner Sustained in Part - Requirement of Rewriting Dependent Claims (No Allowed Claim)
      ]),
      sec('subj-allow-sustained-allowed', 'Examiner sustained in part, requirement of rewriting dependent claims (at least one allowed claim)', [
        fp('12.119.02'), // Examiner Sustained in Part - Requirement of Rewriting Dependent Claims (At Least One Allowed Claim)
      ]),
    ]),
    sec('subj-allow-112-only', 'REJECTION, 35 USC 112 ONLY', [
      sec('subj-allow-112-indep', 'Independent claim', [
        fp('7.43.01'), // Allowable Subject Matter, Claims Rejected Under 35 USC 112(b) or 35 USC 112 (Pre-AIA), Second Paragraph, Independent Claim
      ]),
      sec('subj-allow-112-dep', 'Dependent claim', [
        fp('7.43.02'), // Allowable Subject Matter, Claims Rejected Under 35 USC 112(b) or 35 USC 112 (Pre-AIA), Second Paragraph, Dependent Claim
      ]),
    ]),
    sec('subj-allow-reasons', 'Reasons for indication of', [
      fp('13.03.01'), // Reasons for Indication of Allowable Subject Matter
    ]),
    fp('7.50'),    // Claims Previously Allowed, Now Rejected, New Art
    fp('13.03'),   // Reasons for Allowance
  ]),

  sec('subj-amendments', 'AMENDMENTS', [
    sec('subj-amend-after-allow', 'AFTER ALLOWANCE, 37 CFR 1.312', [
      sec('subj-amend-aa-denied', 'Denied, fee not paid', [
        fp('10.20'), // Petition or Request Dismissed, Proper Fee Not Submitted
      ]),
      sec('subj-amend-aa-entered', 'Entered', [
        fp('7.85'), // Amendment Under 37 CFR 1.312 Entered
      ]),
      sec('subj-amend-aa-entered-part', 'Entered-in-part', [
        fp('7.86'), // Amendment Under 37 CFR 1. 312 Entered In Part
      ]),
      sec('subj-amend-aa-issue-fee', 'Not considered, issue fee paid', [
        fp('13.10'), // Rule 312 Amendment, Issue Fee Paid, No Petition-Fee
      ]),
      sec('subj-amend-aa-not-entered', 'Not entered', [
        fp('7.87'), // Amendment Under 37 CFR 1.312 Not Entered
      ]),
    ]),
    sec('subj-amend-after-board', 'AFTER BOARD DECISION', [
      sec('subj-amend-ab-refused', 'Entry Refused', [
        fp('12.119'), // Amendment After Board Decision - Entry Refused
      ]),
    ]),
    sec('subj-amend-args', 'ARGUMENTS BY APPLICANT OR COUNSEL', [
      sec('subj-amend-args-moot', 'Moot, new grounds of rejection', [
        fp('7.38'), // Arguments Are Moot Because of New Ground of Rejection
      ]),
      sec('subj-amend-args-persuasive-withdrawn', 'Persuasive, prior rejection/objection withdrawn', [
        fp('7.38.01'), // Arguments Persuasive, Previous Rejection/Objection Withdrawn
      ]),
      sec('subj-amend-args-persuasive-new', 'Persuasive, new grounds of rejection', [
        fp('7.38.02'), // Arguments Persuasive, New Ground(s) of Rejection
      ]),
      sec('subj-amend-args-not-persuasive', 'Not persuasive', [
        fp('7.37.01'), // Age of reference(s)
        fp('7.37.07'), // Applicant obtains result not contemplated by prior art
        fp('7.37.13'), // Arguing against references individually
        fp('7.37.08'), // Arguing limitations which are not claimed
        fp('7.37.02'), // Bodily incorporation
        fp('7.37.11'), // General allegation of patentability
        fp('7.37.03'), // Hindsight reasoning
        fp('7.37.09'), // Intended use
        fp('7.37.10'), // Limitation(s) in preamble
        fp('7.37.04'), // No Teaching, Suggestion, or Motivation To Combine
        fp('7.37.05'), // Non-analogous art
        fp('7.37.12'), // Novelty not clearly pointed out
        fp('7.37.06'), // Number of references
        fp('7.37'),    // Arguments Are Not Persuasive
      ]),
    ]),
    sec('subj-amend-cert-mailing', 'Certificate of Mailing or Transmission, suggested format', [
      fp('5.02'), // Format of Certificate of Mailing or Transmission
    ]),
    sec('subj-amend-heading', 'Heading, proper format for incoming papers', [
      fp('5.01'), // Proper Heading for Incoming Papers
    ]),
    sec('subj-amend-sep-paper', 'Heading, separate paper required', [
      fp('5.01.01'), // Separate Paper Required
    ]),
    sec('subj-amend-new-matter', 'New matter entered in specification', [
      fp('7.28'), // OBJECTION TO NEW MATTER ADDED TO SPECIFICATION
    ]),
    sec('subj-amend-non-responsive', 'NON-RESPONSIVE', [
      sec('subj-amend-cancels-elected', 'Cancels all elected claims', [
        fp('8.26'), // Canceled Elected Claims, Non-responsive
        fp('8.26.AE'), // Canceled Elected Claims, Non-Responsive - Application Under Accelerated Examination // verify
      ]),
      sec('subj-amend-inadvertent', 'Incomplete response, inadvertent, bona fide', [
        fp('7.95'),    // Bona Fide, Non-responsive Amendments
        fp('7.95.AE'), // Bona Fide, Non-Responsive Amendments - Application Under Accelerated Examination
      ]),
      sec('subj-amend-interview-omitted', 'Interview summary omitted', [
        fp('7.84'),    // Amendment is Non-responsive to Interview
        fp('7.84.AE'), // Amendment Is Non-Responsive to Interview - Application Under Accelerated Examination // verify
      ]),
      sec('subj-amend-not-fully-resp', 'Omission is advertent', [
        fp('7.91'), // Reply Is Not Fully Responsive, Extension of Time Suggested
      ]),
      sec('subj-amend-no-args-prose', 'Lack of arguments, pro se application', [
        fp('7.95.01'), // Lack of Arguments in Response
      ]),
      sec('subj-amend-unsigned', 'Unsigned', [
        fp('7.84.01'),    // Paper Is Unsigned
        fp('7.84.01.AE'), // Paper Is Unsigned - Application Under Accelerated Examination // verify
      ]),
    ]),
    sec('subj-amend-sep-papers', 'Submission of separate papers required', [
      fp('5.01.01'), // Separate Paper Required
    ]),
  ]),

  sec('subj-appeal-brief-ext', 'APPEAL BRIEF, EXTENSION OF TIME TO FILE', [
    sec('subj-appbf-ext-pre2012', 'NOTICE OF APPEAL FILED BEFORE January 23, 2012', [
      fp('12.110'), // Extension To File Brief - Granted
      fp('12.111'), // Extension To File Brief - Denied
    ]),
    sec('subj-appbf-ext-post2012', 'NOTICE OF APPEAL FILED ON OR AFTER January 23, 2012', [
      fp('12.210'), // Extension To File Brief - Granted
      fp('12.211'), // Extension To File Brief - Denied
    ]),
  ]),

  sec('subj-appeal-dismissed', 'APPEAL DISMISSED', [
    sec('subj-appdis-pre2012', 'NOTICE OF APPEAL FILED BEFORE January 23, 2012', [
      fp('12.109.01'), // Appeal Dismissed - Allowed Claims - Formal Matters Remaining
    ]),
    sec('subj-appdis-post2012', 'NOTICE OF APPEAL FILED ON OR AFTER January 23, 2012', [
      fp('12.209'), // Appeal Dismissed - Allowed Claims - Formal Matters Remaining // verify
      fp('12.279.02'), // Dismissal following new ground(s) of rejection in Examiner's Answer // verify
      fp('12.286'), // Dismissal following substitute Examiner's Answer // verify
    ]),
  ]),

  sec('subj-app-types', 'APPLICATION, TYPES OF', [
    sec('subj-apptype-div', 'Division', [
      fp('2.01'), // Possible Status as Divisional
    ]),
    sec('subj-apptype-sub', 'Substitute', [
      fp('2.07'), // Definition of a Substitute
    ]),
  ]),

  sec('subj-arguments', 'ARGUMENTS', [
    sec('subj-args-not-persuasive', 'Not persuasive', [
      fp('7.37.01'), // Age of reference(s)
      fp('7.37.07'), // The Invention Obtains Result Not Contemplated by Prior Art
      fp('7.37.13'), // Arguing against references individually
      fp('7.37.08'), // Arguing limitations which are not claimed
      fp('7.37.02'), // Bodily incorporation
      fp('7.37.11'), // General allegation of patentability
      fp('7.37.03'), // Hindsight reasoning
      fp('7.37.09'), // Intended use
      fp('7.37.10'), // Limitation(s) in preamble
      fp('7.37.04'), // No Teaching, Suggestion, or Motivation To Combine
      fp('7.37.05'), // Non-analogous art
      fp('7.37.12'), // Novelty not clearly pointed out
      fp('7.37.06'), // Number of references
      fp('7.37'),    // Arguments Are Not Persuasive
    ]),
    sec('subj-args-moot', 'Moot in view of new grounds of rejection', [
      fp('7.38'), // Arguments Are Moot Because of New Ground of Rejection
    ]),
    sec('subj-args-persuasive-new', 'Persuasive but new grounds of rejection', [
      fp('7.38.02'), // Arguments Persuasive, New Ground(s) of Rejection
    ]),
    sec('subj-args-persuasive-withdrawn', 'Persuasive, previous rejection or objection withdrawn', [
      fp('7.38.01'), // Arguments Persuasive, Previous Rejection/Objection Withdrawn
    ]),
  ]),

  sec('subj-atty-suspended', 'ATTORNEY/AGENT SUSPENDED', [
    sec('subj-atty-plural', 'Plural practitioners', [
      fp('4.08'), // Attorney - Agent Suspended (Plural Practitioners)
    ]),
    sec('subj-atty-sole', 'Attorney/Agent Suspended (Sole Practitioner)', [
      fp('4.07'), // Attorney/Agent Suspended (Sole Practitioner)
    ]),
  ]),

  sec('subj-court-review', 'COURT REVIEW', [
    fp('12.120'), // Period For Seeking Court Review Has Lapsed (pre-Jan 23 2012)
    fp('12.297'), // Period For Seeking Court Review Has Lapsed (post-Jan 23 2012) // verify
  ]),

  sec('subj-cert-mailing', 'CERTIFICATE OF MAILING', [
    fp('5.02'), // Format of Certificate of Mailing or Transmission
    sec('subj-cert-denied', 'Benefit denied', [
      fp('5.04'), // Benefit of Certificate of Mailing Denied
    ]),
  ]),

  sec('subj-citation', 'CITATION', [
    sec('subj-cit-after-allow', 'Of prior art after allowance', [
      fp('6.49'), // Information Disclosure Statement Not Considered
    ]),
    sec('subj-cit-relevant', 'Of relevant prior art by examiner', [
      fp('7.96'), // Citation of Relevant Prior Art
    ]),
  ]),

  sec('subj-claims', 'CLAIMS', [
    sec('subj-claims-allowable', 'Allowable', [
      fp('7.97'), // Claims Allowed
    ]),
    sec('subj-claims-allow-112-remains', 'ALLOWABLE, 35 USC 112 REJECTION REMAINS', [
      fp('7.43.02'), // Allowable Subject Matter, Claims Rejected Under 35 USC 112(b) or 35 USC 112 (Pre-AIA), Second Paragraph, Dependent Claim
      fp('7.43.01'), // Allowable Subject Matter, Claims Rejected Under 35 USC 112(b) or 35 USC 112 (Pre-AIA), Second Paragraph, Independent Claim
    ]),
    sec('subj-claims-improper-numbered', 'Improperly numbered', [
      fp('6.17'), // Numbering of Claims, 37 CFR 1.126
    ]),
    sec('subj-claims-objected', 'OBJECTED TO', [
      sec('subj-claims-dep-on-rejected', 'Dependent upon rejected claim', [
        fp('7.43'), // Objection to Claims, Allowable Subject Matter
      ]),
      sec('subj-claims-improper-multiple', 'Improperly multiple dependent', [
        fp('7.45'), // Improper Multiple Dependent Claims
      ]),
      sec('subj-claims-minor', 'Minor informalities', [
        fp('7.29.01'), // CLAIMS OBJECTED TO, MINOR INFORMALITIES
      ]),
      sec('subj-claims-ref-chars', 'Reference characters not enclosed within parentheses', [
        fp('7.29.02'), // CLAIMS OBJECTED TO, REFERENCE CHARACTERS NOT ENCLOSED WITHIN PARENTHESES
      ]),
      sec('subj-claims-spacing', 'Spacing of lines', [
        fp('7.29.03'), // CLAIMS OBJECTED TO, SPACING OF LINES
      ]),
    ]),
    sec('subj-claims-series-dep', 'Series of singular dependent', [
      fp('6.18'), // Series of Singular Dependent Claims
    ]),
    sec('subj-claims-interp-112f', 'INTERPRETATION, Section (f) or 6th Paragraph (Pre-AIA)', [
      sec('subj-claims-interp-header', 'Header for Claim Interpretation', [
        fp('7.30.03.h'), // Header for Claim Interpretation // verify
      ]),
      fp('7.30.03'), // Statement of Statutory Basis, 35 USC 112(f) or Pre-AIA 35 USC 112, Sixth paragraph
      fp('7.30.05'), // Broadest Reasonable Interpretation under 35 USC 112(f)
      fp('7.30.06'), // 35 USC 112(f) or pre-AIA 35 USC 112, 6th Para., Invoked Despite Absence of "Means"
      fp('7.30.07'), // 35 USC 112(f) or pre-AIA 35 USC 112, 6th Para., Not Invoked Despite Presence of "Means" or "Step"
    ]),
  ]),

  sec('subj-conflicting-claims', 'CONFLICTING CLAIMS', [
    fp('8.29'), // Patentably Indistinct Claims, Copending Applications
  ]),

  sec('subj-continuation', 'CONTINUATION', [
    sec('subj-cont-cpa', 'CPA', [
      fp('2.30'),  // CPA Status Acceptable (for Design Applications)
      fp('2.35'),  // CPA Status Acceptable - Conditional Request (for Design Application)
      fp('2.33'),  // New Inventor Identified in CPA (for Design Applications)
      fp('2.32'),  // Request To Delete a Named Inventor in CPA (for Design Applications)
      fp('2.34'),  // Reference in CPA to Prior Application
      fp('2.31'),  // CPA Status Not Acceptable - Request Not on Separate Paper
    ]),
    sec('subj-cont-aff-not-forward', 'Affidavits not carried forward', [
      fp('2.03'), // Affidavits and Declarations in Prior Application
    ]),
    sec('subj-cont-defn', 'Definition, and defects therein', [
      fp('2.05'), // Possible Status as Continuation
    ]),
    sec('subj-cont-benefit-heading', 'Heading for Conditions for Benefit Claims Under 35 USC 119(e), 120, 121, 365(c), or 386(c)', [
      fp('2.11'),  // Application must be copending
      fp('2.10'),  // Disclosure of prior-filed application does not provide support for claimed subject matter
    ]),
    sec('subj-cont-cip', 'Possible status as continuation-in-part', [
      fp('2.06'), // Possible Status as Continuation-in-Part
    ]),
    sec('subj-cont-ref-prior', 'Reference to Prior Application, 35 USC 119(e), 120, 121 or 365(c) Benefit', [
      fp('2.15'), // Reference to Prior Application, 35 USC 119(e), 120, 121, 365(c), or 386(c) Benefit
    ]),
    sec('subj-cont-fee-not-paid', '35 U.S.C. 120, 121, 365(c), or 386(c) benefit claim not entered, continuing application fee not paid', [
      fp('2.14'), // Continuing Application Fee, 35 U.S.C. 120, 121, 365(c), or 386(c) Benefit Claim
    ]),
  ]),

  sec('subj-cont-exam', 'CONTINUED EXAMINATION', [
    fp('7.42.04'), // Continued Examination Under 37 CFR 1.114 After Final Rejection
    fp('7.42.05'), // Continued Examination Under 37 CFR 1.114 After Allowance or Quayle Action
    fp('7.42.06'), // Continued Examination Under 37 CFR 1.114 After Appeal But Before A Board Decision
    fp('7.42.07'), // Continued Examination Under 37 CFR 1.114 After Board Decision But Before Further Appeal or Civil Action
    fp('7.42.08'), // Request For Continued Examination With Not Fully Responsive Submission
    fp('7.42.09'), // Action is Final, First Action Following Request For Continued Examination Under 37 CFR 1.114
    fp('7.42.10'), // Application on Appeal, Request For Continued Examination without Submission/Fee No Claim Allowed
    fp('7.42.11'), // Application on Appeal, Request For Continued Examination without Submission/Fee Claim Allowed
    fp('7.42.12'), // Application on Appeal, Request For Continued Examination without Submission/Fee Claim Allowed with Formal Matters Outstanding
    fp('7.42.13'), // Application on Appeal, Request For Continued Examination without Fee Claim Allowed
    fp('7.42.14'), // Application on Appeal, Request For Continued Examination without Fee Claim Allowed With Formal Matters Outstanding
    fp('7.42.15'), // Application on Appeal, Continued Prosecution Application Treated As Continued Examination Under 37 CFR 1.114
  ]),

  sec('subj-death-atty', 'DEATH OF ATTORNEY', [
    fp('4.03'), // Death of Patent Practitioner
  ]),

  sec('subj-disclaimer', 'DISCLAIMER', [
    sec('subj-disc-fail-appeal', 'Failure to appeal', [
      fp('7.49'), // Rejection, Disclaimer, Failure to Appeal
    ]),
    sec('subj-disc-fail-claims-interf', 'Failure to present claims for interference', [
      fp('7.48.fti'), // Failure To Present Claims for Interference
    ]),
    fp('2.01'), // Divisional application, definition
  ]),

  sec('subj-double-pat', 'DOUBLE PATENTING', [
    sec('subj-dp-non-stat-basis', 'Basis for non-statutory double patenting, heading only', [
      fp('8.33'), // Basis for Non-statutory Double Patenting (Obviousness And Non-obviousness Type) - Heading Only
      sec('subj-dp-non-stat-rej', 'Rejection, Nonstatutory Double Patenting - No Secondary Reference(s)', [
        fp('8.34'), // Rejection, Nonstatutory Double Patenting- No Secondary Reference(s)
        fp('8.35'), // Provisional
      ]),
      fp('8.36'), // Rejection, Nonstatutory Double Patenting - With Secondary Reference(s)
      fp('8.37'), // Provisional
      sec('subj-dp-schneller', 'IN RE SCHNELLER --- TC DIRECTOR SIGNATURE REQUIRED ---', [
        fp('8.38'), // Non-obvious type, with a patent
        fp('8.39'), // Non-obvious type, with another application
      ]),
    ]),
    sec('subj-dp-duplicate', 'DUPLICATE CLAIMS', [
      fp('7.05.06'), // Rejection
      fp('7.05.05'), // Warning
    ]),
    sec('subj-dp-stat-heading', 'Heading for 35 USC 101 rejection', [
      fp('8.30'), // 35 USC 101, Statutory Basis for Double Patenting - Heading Only
    ]),
    sec('subj-dp-stat-rej', 'Rejection, statutory, 35 USC 101', [
      fp('8.31'), // Rejection, 35 USC 101, Double Patenting
      fp('8.32'), // Provisional
    ]),
  ]),

  sec('subj-drawings-obj', 'DRAWINGS, OBJECTION', [
    sec('subj-drw-not-shown', 'Claimed feature not shown, 37 CFR 1.83(a)', [
      fp('6.36'), // Drawings Do Not Show Claimed Subject Matter
    ]),
    sec('subj-drw-corrections', 'CORRECTIONS', [
      fp('6.37'),   // Acknowledgment of Replacement Drawing Sheets
      fp('6.21'),   // New corrected drawings required, not held in abeyance
      fp('6.27'),   // Requirement for Marked-up Copy of Drawing Corrections
      fp('6.47'),   // Examiner's amendment involving drawing changes
      fp('6.43'),   // Drawings contain informalities, case allowable
      fp('6.40'),   // Information on how to effect drawing corrections
      fp('6.41'),   // Reminder That PTO No Longer Makes Drawing Changes
      fp('6.42'),   // Reminder That Applicant must Make Drawing Changes
    ]),
    sec('subj-drw-defects', 'Defects in drawing', [
      fp('6.22'),    // Drawings Objected To
      fp('6.22.01'), // Details not shown
      fp('6.22.02'), // Different numbers refer to same part
      fp('6.22.03'), // Different parts referred to by same number
      fp('6.22.04'), // Incomplete
      fp('6.22.05'), // Modifications in same figure
      fp('6.22.06'), // Reference numbers not in drawings
      fp('6.22.07'), // Reference numbers not in specification
    ]),
    sec('subj-drw-no-exam', 'DRAWINGS DO NOT PERMIT EXAMINATION', [
      fp('6.26'), // Not acceptable for examination / Drawings do not permit examination
    ]),
    sec('subj-drw-required', 'Required', [
      fp('6.23'), // Subject Matter Admits of Illustration
    ]),
    fp('4.01'),   // Dual correspondence not permitted
    sec('subj-drw-photos-color', 'Photographs or color drawings, petition required', [
      fp('6.24.01'), // Color Photographs and Color Drawings, Petition Required
    ]),
  ]),

  sec('subj-exam-amendment', "EXAMINER'S AMENDMENT", [
    sec('subj-ea-drawing', 'Approval of drawing corrections', [
      fp('6.47'), // Examiner's Amendment Involving Drawing Changes
    ]),
    sec('subj-ea-auth', 'Authorization by applicant', [
      fp('13.02.01'), // Examiner's Amendment Authorized
    ]),
    sec('subj-ea-ext-time', 'Extension of Time and Examiner\'s Amendment Authorized', [
      fp('13.02.02'), // Extension of Time and Examiner's Amendment Authorized
    ]),
    sec('subj-ea-statement', 'Statement of', [
      fp('13.02'), // Examiner's Amendment
    ]),
  ]),

  sec('subj-exam-answer', "EXAMINER'S ANSWER, (Arranged in order of use in answer)", [
    sec('subj-ea-pre2012', 'NOTICE OF APPEAL FILED BEFORE January 23, 2012', [
      fp('12.149'), // Examiner's Answer Cover Sheet
      fp('12.150'), // Heading for Examiner's Answer
      fp('12.150.01'), // Real Party in Interest
      fp('12.150.05'), // Identification of the Related Appeals and Interferences
      fp('12.150.06'), // No Related Appeals and Interferences Identified
      fp('12.150.04'), // Related Appeals and Interferences
      fp('12.151'), // Status of Claims
      fp('12.152'), // Status of Amendments After Final
      fp('12.153'), // Summary of Claimed Subject Matter
      fp('12.154'), // Grounds of Rejection to be Reviewed on Appeal
      fp('12.156'), // Claims Appendix
      fp('12.157.01'), // No Evidence Relied Upon
      fp('12.157.02'), // Listing of Evidence Relied Upon
      fp('12.157'), // Evidence Relied Upon
      fp('12.159'), // Grounds of Rejection
      fp('12.161'), // Response to Argument
      fp('12.163'), // Request to Present Oral Arguments
    ]),
    sec('subj-ea-post2012', 'NOTICE OF APPEAL FILED ON OR AFTER January 23, 2012', [
      fp('12.249'), // Examiner Answer Cover Sheet
      fp('12.254.01'), // Statement of Grounds of Rejection - not modified
      fp('12.254.02'), // Statement of Grounds of Rejection - modified
      fp('12.255'), // Restatement of Rejection
      fp('12.256'), // New Grounds of Rejection - Heading
      fp('12.257'), // Withdrawn Rejections
      fp('12.261'), // Response to Argument
      fp('12.279.03'), // Request to Present Oral Arguments // verify
      fp('12.279'), // Conclusion to Examiner Answer - No New Grounds of Rejection
      fp('12.279.01'), // Conclusion to Examiner Answer Raising New Grounds of Rejection
      fp('12.285'), // Substitute Examiner Answer - On Remand FOR FURTHER CONSIDERATION OF A REJECTION // verify
    ]),
  ]),

  sec('subj-ext-time', 'EXTENSION OF TIME', [
    sec('subj-ext-late-prose', 'Suggestion of, late response (pro se application)', [
      fp('7.98.01'), // Reply Is Late, Extension of Time Suggested, Pro Se
    ]),
    sec('subj-ext-brief-pre2012', 'TO FILE BRIEF - NOTICE OF APPEAL FILED BEFORE January 23, 2012', [
      fp('12.110'), // Extension To File Brief - Granted
      fp('12.111'), // Extension To File Brief - Denied
    ]),
    sec('subj-ext-brief-post2012', 'TO FILE BRIEF - NOTICE OF APPEAL FILED ON OR AFTER January 23, 2012', [
      fp('12.210'), // Extension To File Brief - Granted
      fp('12.211'), // Extension To File Brief - Denied
    ]),
    fp('10.20'), // Fee not paid, petition denied
  ]),

  sec('subj-finality', 'FINALITY', [
    fp('7.42'),        // Withdrawal of Finality of Last Office Action
    fp('7.42.01.fti'), // Withdrawal of Finality - Transitional Application Under 37 CFR 1.129(a)
    fp('7.40.02.fti'), // Action Is Final, Necessitated by Invoking the Joint Research Agreement Prior Art Disqualification
  ]),

  sec('subj-foreign-priority', 'FOREIGN PRIORITY', [
    fp('2.27'),   // Acknowledge Certified Copy of Foreign Priority Paper in Parent
    fp('2.18'),   // Advising applicant of possible priority benefits
    fp('2.25'),   // Claimed Foreign Priority, No Certified Copy Filed
    fp('2.26'),   // Claimed Foreign Priority - Certified Copy Filed
    fp('2.22'),   // Certified Copy Filed, But Proper Claim Not Made
    fp('2.23'),   // Foreign application more than one year prior, no petition to restore priority granted
    fp('2.21.01'), // Foreign Priority Claim is Untimely 35 USC 119(a)-(d) or (f), 365(a) or (b), or 386(a)
    fp('2.19'),   // Overcome Rejection by Translation
    fp('2.20'),   // Certified Copies of Priority Papers in Parent or Related (Reissue Situation) - Application
    fp('23.19'),  // Translation required for interference
  ]),

  sec('subj-incomplete-oa', 'INCOMPLETE OFFICE ACTION', [
    fp('7.81'),   // Correction Letter Re Last Office Action
    fp('7.82'),   // Correction of Reference Citation
    fp('7.83'),   // Copy of Office Action Supplied
    fp('7.82.01'), // Copy of Reference(s) Furnished
  ]),

  sec('subj-ibr', 'INCORPORATION BY REFERENCE', [
    sec('subj-ibr-general', 'In general', [
      fp('6.19.01'), // Ineffective Incorporation by Reference, General
    ]),
    sec('subj-ibr-foreign', 'To foreign patent/application', [
      fp('6.19'), // Incorporation by Reference, Foreign Patent or Application
    ]),
  ]),

  sec('subj-ids', 'INFORMATION DISCLOSURE STATEMENT', [
    fp('6.49'),    // Not considered
    fp('6.49.10'), // Not considered, non-acceptable electronic medium
    fp('6.49.11'), // Not considered, no size fee assertion
    fp('6.49.12'), // Not considered, no size fee
    sec('subj-ids-after-first', 'AFTER FIRST ACTION, BEFORE PROSECUTION CLOSES', [
      fp('6.49.01'), // No certification
      fp('6.49.02'), // No fee
    ]),
    sec('subj-ids-after-close', 'AFTER PROSECUTION CLOSES, ISSUE FEE NOT PAID', [
      fp('6.49.03'), // No certification
      fp('6.49.05'), // No petition fee
    ]),
    fp('6.49.07'), // No copy of references
    fp('6.49.09'), // No explanation of relevance
    fp('6.49.08'), // No list of references
    fp('6.49.06'), // References listed in specification
    fp('6.52'),    // Considered by Examiner
    fp('13.09'),   // Submitted after issue fee paid, not considered
    fp('6.51'),    // Time limit for completing
  ]),

  sec('subj-interference', 'INTERFERENCE', [
    fp('23.14'),   // Claims copied more than one year from patent issue date
    fp('23.14.01'), // Claims copied more than one year from Application Pub. Date // verify
    fp('23.01'),   // Request for Interference Premature; Examination Not Completed
    fp('23.02'),   // Ex parte prosecution resumed
    sec('subj-interf-suspension', 'SUSPENSION OF ACTION', [
      fp('7.53'), // Possible interference
    ]),
    fp('23.04'),  // Requiring Applicant to Add Claim to Provoke Interference
    sec('subj-interf-suggesting', 'SUGGESTING CLAIMS', [
      fp('23.06', [
        fp('23.06.01'), // Failure to Identify the Other Application or Patent
        fp('23.06.02'), // Failure to Identify the Counts and Corresponding Claims
        fp('23.06.03'), // Failure to Provide Claim Chart Comparing At Least One Claim
        fp('23.06.04'), // Failure to Explain in Detail Why Applicant Will Prevail on Priority
        fp('23.06.05'), // Claim Added/Amended; Failure to Provide Claim Chart Showing Written Description
        fp('23.06.06'), // Time Period for Reply
      ]),
    ]),
  ]),

  sec('subj-interview', 'INTERVIEW', [
    fp('7.84'),    // Summary omitted, amendment non-responsive
    fp('7.84.AE'), // Amendment Is Non-Responsive to Interview - Application Under Accelerated Examination // verify
  ]),

  sec('subj-inventorship', 'INVENTORSHIP', [
    sec('subj-inv-joint-rest', 'Joint inventors, notice in restriction requirement', [
      fp('8.23.02'), // Joint Inventors, Correction of Inventorship
    ]),
    sec('subj-inv-joint-common', 'Joint Inventors, Common Ownership Presumed', [
      fp('7.20.02.fti'), // Joint Inventors, Common Ownership Presumed
    ]),
    sec('subj-inv-petition-fee', 'Petition dismissed, fee not paid', [
      fp('10.20'), // Petition or Request Dismissed, Proper Fee Not Submitted
    ]),
  ]),

  sec('subj-new-matter', 'NEW MATTER', [
    sec('subj-nm-spec', 'Objection to specification', [
      fp('7.28'), // OBJECTION TO NEW MATTER ADDED TO SPECIFICATION
    ]),
    sec('subj-nm-112a', 'Rejection, 35 USC 112(a) or 35 USC 112 (Pre-AIA), 1st Para., Description Requirement, Including New Matter', [
      fp('7.31.01'), // Rejection, 35 USC 112(a) or 35 USC 112 (Pre-AIA), 1st Paragraph, Description Requirement, Including New Matter Situations
    ]),
  ]),

  sec('subj-notice-allow', 'NOTICE OF ALLOWANCE', [
    sec('subj-na-vacate', 'Vacated, re-open prosecution', [
      fp('13.05'), // Reopen Prosecution - Vacate Notice of Allowance
    ]),
  ]),

  sec('subj-nucleotide', 'NUCLEOTIDE AND/OR AMINO ACID SEQUENCE DISCLOSURES', [
    sec('subj-nucl-st25', 'Heading for ST.25 Sequence Requirements', [
      fp('24.01'), // Heading for Sequence Requirements
      fp('24.02'), // No Sequence Listing part of the disclosure and No CRF
      fp('24.03'), // No Sequence Listing part of the disclosure and Defective CRF
      fp('24.05'), // The Sequence Listing part of the disclosure and the CRF are not the same
      fp('24.06'), // Missing Statement that the "Sequence Listing" (Paper or PDF) and the CRF are the Same
      fp('24.07'), // No Computer Readable Form (CRF) submitted
      fp('24.08'), // Computer Readable Form (CRF) contains error(s) according to STIC report
      fp('24.09'), // Computer Readable Form (CRF) damaged or unreadable
      fp('24.10'), // Sequence IDs not present in the specification
      fp('24.11'), // Sequence IDs not present in the drawings
      fp('24.12'), // Sequences present in the specification or drawings that are not in the CRF or listing
      fp('24.13'), // Missing or Defective Incorporation by Reference Paragraph
      fp('24.14'), // Amendment Missing Instruction to Enter the Sequence Listing into the Application
      fp('24.15'), // Amendment Missing Statement of No New Matter
      fp('24.16'), // Amendment Missing Statement of Support
      fp('24.17'), // Improper CRF transfer request
    ]),
    sec('subj-nucl-st26', 'Heading for ST.26 Sequence Requirements', [
      fp('24.17.26'), // Heading for ST. 26 Sequence Requirements
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
      fp('24.29.26'), // Amendment Missing Statement of Location of Additions, Deletions or Replacements of Sequence Information
    ]),
  ]),

  sec('subj-objections', 'OBJECTIONS', [
    sec('subj-obj-abstract', 'Abstract, minor informalities', [
      fp('6.13'), // Abstract Objected To
    ]),
    sec('subj-obj-claims', 'CLAIMS', [
      fp('7.43'),    // Dependent upon rejected claim
      fp('7.45'),    // Improperly multiple dependent
      fp('7.29.01'), // Minor informalities
      fp('7.29.02'), // Reference characters not enclosed within parentheses
      fp('7.29.03'), // Spacing of lines
    ]),
    sec('subj-obj-disc-incompat', 'Disclosure, incomprehensible', [
      fp('7.02'), // DISCLOSURE IS INCOMPREHENSIBLE
    ]),
    sec('subj-obj-disc-minor', 'Disclosure, minor informalities', [
      fp('7.29'), // DISCLOSURE OBJECTED TO, MINOR INFORMALITIES
    ]),
  ]),

  sec('subj-obviousness', 'Graham v. Deere, Test for Obviousness', [
    fp('7.23.fti'), // Test for Obviousness
  ]),

  sec('subj-petition', 'PETITION', [
    fp('10.20'),    // Dismissed, fee not paid
    fp('10.16.fti'), // Petition Under 37 CFR 1.324 filed prior to September 16, 2012, Dismissed
    fp('10.16.01'), // Petition Under 37 CFR 1.324 filed on or after September 16, 2012, Dismissed
  ]),

  sec('subj-pro-se', 'PRO SE APPLICANT', [
    fp('7.95.01'),  // Arguments lacking in response
    fp('6.01'),     // Arrangement of specification
    fp('6.02'),     // Content of specification
    fp('4.10'),     // Employ services of attorney or agent
    fp('7.39.01'),  // Final rejection and options for applicant
    fp('7.214'),    // Papers cannot be returned
    fp('7.34.15'),  // Rejections, 35 USC 112
    fp('7.98.01'),  // Reply late, and extension of time suggested
    fp('7.98.02'),  // Reply late, petition to revive suggestion
    fp('5.01.01'),  // Separate paper required
    fp('7.43.04'),  // Suggestion of allowable drafted claim
  ]),

  sec('subj-prosecution-reopened', 'PROSECUTION REOPENED', [
    fp('13.04'),    // After Notice of Allowance
    fp('13.05'),    // Vacate Notice of Allowance
    fp('12.239'),   // After Appeal Brief // verify
  ]),

  sec('subj-protest', 'PROTEST', [
    fp('19.01'),    // Acknowledgement of, and period for applicant's response // verify
    fp('19.02'),    // Requirement for information relating to the protest // verify
    fp('19.02.AE'), // Requirement for Information - Application Under Accelerated Examination // verify
  ]),

  fp('7.51'),     // Quayle action
  fp('7.51.AE'),  // Quayle Action - Application Under Accelerated Examination
  fp('13.03'),    // Reasons for allowance
  fp('13.03.01'), // Reasons for indication of allowable subject matter

  sec('subj-readonly-disc', 'READ-ONLY OPTICAL DISC SUBMISSION', [
    fp('6.60.01'), // No Statement that discs are Identical
    fp('6.60.02'), // No Listing in Transmittal Letter
    fp('6.61.01'), // Specification Lacking List of Read-only Optical Disc(s) and/or Associated Files
    fp('6.61.02'), // Specification Lacking An Incorporation By Reference Statement for Read-only Optical Disc // verify
    fp('6.62'),    // Data File Not in ASCII File Format or XML File Format
    fp('6.64.01'), // Computer Program Listing of More Than 300 Lines in Specification
    fp('6.70.01'), // Amendment Doesn't Include Statement that Discs are Identical
    fp('6.70.02'), // No Listing in Transmittal Letter Submitted With Amendment
    fp('6.71.01'), // Specification Lacking List (Amendment Filed With Discs)
    fp('6.71.02'), // Specification Lacking Incorporation By Reference Statement for Amended or Added Disc or Text File
    fp('6.72.01'), // Discs Not Identical
    fp('6.72.02'), // Data File, Submitted with Amendment, Not in ASCII File Format or XML File Format
    fp('6.72.03'), // Read-only Optical Discs Are Not Readable
    fp('6.72.04'), // Read-only Optical Disc Contains Viruses
    fp('6.72.05'), // Missing Files on Amended Read-only Optical Disc
  ]),

  sec('subj-reexam', 'REEXAMINATION', [
    fp('22.09'),  // Action is final
    fp('22.10'),  // Action is final, necessitated by amendment
    fp('22.06'),  // Examiner's amendment accompanying NIRC
    fp('22.03'),  // Issue not within scope of reexamination
    fp('22.07'),  // Litigation, reminder to apprise PTO
    fp('22.08'),  // Litigation reminder, third party
    fp('22.01'),  // New substantial question of patentability
    fp('22.01.01'), // Substantial New Question of Patentability Based Solely on Old Art // verify
    fp('22.02'),  // No substantial new question of patentability
    fp('22.04'),  // Papers to be submitted in response to action
    fp('22.05'),  // Reexamination based on reissue claims
    fp('28.04'),  // Reexamination Ordered Pursuant to 35 USC 257 // verify
    fp('26.75'),  // Time Period for Response under 37 CFR 41.77(e) // verify
  ]),

  sec('subj-ref-cited', 'REFERENCE CITED', [
    fp('7.81'),    // Correction Letter Re Last Office Action
    fp('7.82'),    // Correction of Reference Citation
    fp('7.82.01'), // Copy of Reference(s) Furnished
  ]),

  sec('subj-reissue-apps', 'REISSUE APPLICATIONS', [
    fp('14.15'),  // Consent of assignee lacking
    sec('subj-reissue-lit', 'LITIGATION RELATED REISSUE', [
      fp('14.07'), // Related litigation stayed
      fp('14.08'), // Related litigation terminated
      fp('14.09'), // Related litigation not overlapping
      fp('14.10'), // Applicant's request
      fp('14.11'), // Action stayed, related litigation
      fp('14.06'), // Litigation related reissue
    ]),
    fp('14.11.01'), // Duty under 37 CFR 1.178(b) and 1.56
  ]),

  sec('subj-rejection', 'REJECTION', [
    sec('subj-rej-101', '35 USC 101', [
      fp('7.04.01'), // Statement of Statutory Basis, 35 USC 101
      fp('7.05.01'), // Rejection, 35 USC 101, Nonstatutory (Not One of the Four Statutory Categories)
      fp('7.05.02'), // Rejection, Utility Lacking
      fp('7.05.03'), // Rejection, Inoperative
      fp('7.04.03'), // Rejection, Human Organism
      fp('7.05'),    // Rejection, Heading Only (Utility, Non-Statutory, Inoperative)
      fp('7.05.016', [
        fp('7.05.017'), // Director Approval for Non-Enumerated Abstract Idea
      ]),
      fp('8.31'),    // Rejection, 35 USC 101, Double Patenting
      fp('8.32'),    // Provisional double patenting rejection
      fp('8.30'),    // Heading for double patenting
      fp('8.27.fti'), // Different Inventors, Common Assignee, Same Invention, Examined Under Pre-AIA Provisions
      fp('7.05.04'), // Utility Rejections Under 35 USC 101 and 35 USC 112(a)
    ]),
    sec('subj-rej-102', '35 USC 102', [
      fp('7.08.fti'),    // Pre-AIA 102(a), Activity by Another Before Invention by Applicant
      fp('7.09.fti'),    // Pre-AIA 102(b), Activity More Than One Year Prior to Filing
      fp('7.10.fti'),    // Pre-AIA 102(c), Invention Abandoned
      fp('7.11.fti'),    // Pre-AIA 102(d), Foreign Patenting
      fp('7.12.fti'),    // Pre-AIA 35 USC 102(e), Patent Appl. Publication or Patent to Another
      fp('7.12.01.fti'), // Pre-AIPA 35 USC 102(e), Patent to Another with Earlier Filing Date
      fp('7.13.fti'),    // Pre-AIA 102(f), Applicant Not the Inventor
      fp('7.14.fti'),    // Pre-AIA 102(g), Priority of Invention
      fp('7.15.fti'),    // Rejection, Pre-AIA 35 USC 102(a), (b) Patent or Publication, and (g)
      fp('7.15.01.fti'), // Provisional Rejection, Pre-AIA 35 U.S.C. 102(e) - Common Assignee
      fp('7.15.02.fti'), // Pre-AIA 35 USC 102(e), Common Assignee, Applicant, or Joint Inventor
      fp('7.16.fti'),    // Rejection, Pre-AIA 35 USC 102(b), Public Use or on Sale
      fp('7.17.fti'),    // Rejection, Pre-AIA 35 USC 102(c), Abandonment of Invention
      fp('7.18.fti'),    // Rejection, Pre-AIA 35 USC 102(d), Foreign Patenting
      fp('7.19.fti'),    // Rejection, Pre-AIA 35 USC 102(f), Applicant Not the Inventor
      fp('7.48.fti'),    // Failure To Present Claims for Interference
      fp('7.27.fti'),    // Rejection, Pre-AIA 35 USC 102 or Pre-AIA 103(a)
    ]),
    sec('subj-rej-103', '35 USC 103(a)', [
      fp('7.20.fti'),    // Statement of Statutory Basis, Pre-AIA 35 USC 103(a)
      fp('7.23.fti'),    // Background, Graham v. Deere
      fp('7.20.02.fti'), // Joint Inventors, Common Ownership Presumed
      fp('7.21.02.fti'), // Rejection, Pre-AIA 35 USC 103(a), Common Assignee
      fp('7.21.01.fti'), // Provisional Rejection, Pre-AIA 35 USC 103(a), Common Assignee
      fp('7.21.fti'),    // Rejection, Pre-AIA 35 USC 103(a)
      fp('7.22.fti'),    // Rejection, Pre-AIA 35 USC 103(a), Further in View Of
      fp('7.27.fti'),    // Rejection, Pre-AIA 35 USC 102 or Pre-AIA 103(a)
      fp('7.06.01'),     // Claim Limitation Relating to a Tax Strategy // verify
      fp('7.20.01.fti'), // Pre-AIA 103(a) Rejection Using Prior Art Under Pre-AIA 102(e), (f), or (g) Not Disqualified
    ]),
    sec('subj-rej-112', '35 USC 112', [
      fp('7.30.03.h'), // Header for Claim Interpretation // verify
      sec('subj-rej-112-allow-amend', 'ALLOWABLE IF AMENDED TO OVERCOME REJECTION', [
        fp('7.43.01'), // Independent claim
        fp('7.43.02'), // Dependent claim
      ]),
      sec('subj-rej-112a', 'REJECTION, Section (a) or 1st Paragraph (Pre-AIA)', [
        fp('7.31.04'), // Best mode requirement
        fp('7.31.01'), // Description requirement, including new matter situations
        fp('7.31.02'), // Enablement
        fp('7.33.01'), // Essential subject matter missing from claims (enablement)
        fp('7.31.03'), // Scope of enablement
        fp('7.31.05'), // Scope of Enablement of a "Single Means" Claim
      ]),
      sec('subj-rej-112b', 'REJECTION, Section (b) or 2nd Paragraph (Pre-AIA)', [
        fp('7.34.04'), // Broader range/limitation and narrow range/limitation
        fp('7.34.07'), // Claims are a literal translation
        fp('7.34.14'), // Essential cooperative relationships omitted
        fp('7.34.13'), // Essential elements omitted
        fp('7.34.12'), // Essential steps omitted
        fp('7.34'),    // Failure to claim applicant's invention
        fp('7.34.01'), // Failure to particularly point out and distinctly claim
        sec('subj-rej-112b-indef', 'INDEFINITE LANGUAGE', [
          fp('7.34.08'), // 'For example'
          fp('7.34.09'), // 'Or the like'
          fp('7.34.10'), // 'Such as'
        ]),
        fp('7.34.05'), // Lack of antecedent basis in the claims
        fp('7.34.03'), // Relative term, term of degree
        fp('7.34.02'), // Terminology used inconsistent with accepted meaning
        fp('7.34.23'), // Claim Limitation Interpreted under 35 USC 112(f) but Disclosure Lacking
        fp('7.34.24'), // Unclear Whether Claim Limitation Is To Be Interpreted Under 35 USC 112(f)
      ]),
      sec('subj-rej-112d', 'REJECTION, Section (d) or 4th Paragraph (Pre-AIA)', [
        fp('7.36.01'), // Rejection 35 USC 112(d) or 35 USC 112 (Pre-AIA), 4th Paragraph - Improper Dependent Claim
        fp('7.36'),    // Statement of Statutory Basis, 35 USC 112(d) or 35 USC 112 (Pre-AIA), Fourth Paragraph
      ]),
      fp('7.35'),    // Rejection, 'omnibus claims'
      fp('7.34.15'), // Rejection, 35 USC 112, pro se applicant
      fp('7.05.04'), // Utility Rejections Under 35 USC 101 and 35 USC 112(a)
    ]),
    sec('subj-rej-251', '35 USC 251', [
      fp('14.12'), // Rejection, broadened reissue claims after two years
      fp('14.13'), // Rejection, broadened reissue claims filed by assignee
    ]),
    sec('subj-rej-disclaimer', 'DISCLAIMER', [
      fp('7.49'),     // Failure to appeal
      fp('7.48.fti'), // Failure to present claim for interference
    ]),
    sec('subj-rej-markush', 'IMPROPER MARKUSH GROUPING', [
      fp('8.40'), // Improper Markush Grouping Rejection
    ]),
    sec('subj-rej-final', 'FINAL REJECTION', [
      fp('7.39'),    // 'This action is made final'
      fp('7.39.01'), // Options for applicant, pro se
      fp('7.40.01'), // On IDS under 37 C.F.R. 1.97(c)
      fp('7.41'),    // Proper, first action
      fp('7.40'),    // Proper, necessitated by amendment
      fp('7.42'),    // Withdrawn
      fp('7.42.01.fti'), // Transitional application submission under 37 CFR 1.129(a)
    ]),
    sec('subj-rej-nonstat-dp', 'NONSTATUTORY (OBVIOUSNESS-TYPE) DOUBLE PATENTING', [
      fp('8.33'),    // Statement of basis
      fp('8.36'),    // Rejection, Nonstatutory Double Patenting - With Secondary Reference(s)
      fp('8.35'),    // Provisional Rejection, Nonstatutory Double Patenting - No Secondary Reference(s)
      fp('8.37'),    // Provisional Rejection, Nonstatutory Double Patenting - With Secondary Reference(s)
    ]),
    sec('subj-rej-diff-inv', 'Different Inventors, Common Assignee, Inventions Not Patentably Distinct, No Evidence of Common Ownership at Time of Invention, Examined Under Pre-AIA provisions', [
      fp('8.28.01.fti'), // Advisory Information Relating to Form Paragraph 8.28.fti
      fp('8.28.fti'),    // Different Inventors, Common Assignee, Inventions Not Patentably Distinct
    ]),
    fp('7.50'),    // Previously allowed claim, new art
    fp('7.103'),   // Statute Cited in Prior Office Action
    sec('subj-rej-reissue', 'REISSUE APPLICATIONS', [
      fp('14.12'),  // Rejection, broadened claims after two years
      fp('14.13'),  // Rejection, broadened claims filed by assignee
      fp('14.14'),  // Rejection, defective oath
    ]),
  ]),

  sec('subj-reissue-app-single', 'REISSUE APPLICATION', [
    fp('14.01'), // Reissue Application, Applicable Laws and Rules Heading
  ]),

  sec('subj-rejoinder', 'REJOINDER', [
    fp('8.42'),    // Of less than all process claims
    fp('8.43'),    // Of all previously withdrawn process claims
    fp('8.21.04'), // Notice of Potential Rejoinder of Process Claims in Ochiai/Brouwer Situation
  ]),

  sec('subj-reply-brief', 'REPLY BRIEF', [
    fp('12.181'), // Acknowledgement of Reply Brief // verify
  ]),

  sec('subj-req-info', 'REQUIREMENT FOR INFORMATION', [
    fp('19.02'),    // After receipt of a protest // verify
    fp('19.02.AE'), // Requirement for Information - Application Under Accelerated Examination // verify
  ]),

  sec('subj-restr-tel', 'RESTRICTION REQUIREMENT, TELEPHONE REQUIREMENT', [
    fp('8.23'),    // With election
    fp('8.23.01'), // Without election
  ]),

  sec('subj-restr-indep', 'RESTRICTION, INDEPENDENT AND DISTINCT INVENTIONS', [
    fp('8.26'),    // Amendment non-responsive, all elected claims cancelled
    fp('8.26.AE'), // Non-Responsive, Canceled Elected Claims - Application Under Accelerated Examination // verify
    sec('subj-restr-withdrawn', 'CLAIMS STAND WITHDRAWN FROM CONSIDERATION', [
      fp('8.05'), // With traverse
      fp('8.06'), // Without traverse
    ]),
    fp('8.21'),    // Burden and Means for Traversal
    fp('8.14'),    // Intermediate-final product
    fp('8.15'),    // Combination-subcombination
    fp('8.14.01'), // Distinct Products or Distinct Processes
    fp('8.17'),    // Process and apparatus
    fp('8.18'),    // Product and process of making
    fp('8.20'),    // Product and process of using
    fp('8.16'),    // Subcombinations, useable together
    fp('8.20.02'), // Unrelated inventions
    fp('8.20.03'), // Unrelated Product and Process Inventions
    fp('8.13'),    // Distinctness (Heading)
    fp('8.23'),    // Election made by telephone
    sec('subj-restr-grouping', 'GROUPING OF THE INVENTIONS', [
      fp('8.08'), // Two inventions
      fp('8.09'), // Three inventions // verify
      fp('8.10'), // Four inventions // verify
      fp('8.11'), // Additional inventions
    ]),
    fp('8.23.02'), // Joint inventors, correction of inventorship requirement
    fp('8.12'),    // Linking claims // verify
    fp('8.23.01'), // No election by telephone
    sec('subj-restr-ready-allow', 'READY FOR ALLOWANCE, TREATMENT OF NON-ELECTED CLAIMS', [
      fp('8.03'), // Requirement was traversed
      fp('8.07'), // Requirement was not traversed
      fp('8.49'), // Elected Invention Allowable, Claims Stand Withdrawn, Restriction Maintained
    ]),
    sec('subj-restr-final', 'REQUIREMENT MADE FINAL', [
      fp('8.25'),    // Answer to arguments with traverse
      fp('8.25.01'), // Without traverse
      fp('8.25.02'), // Without traverse based on an incomplete response
    ]),
  ]),

  sec('subj-restr-species', 'RESTRICTION REQUIREMENT, SPECIES', [
    fp('8.01'), // Election of Species; Species Claim(s) Present
    fp('8.26'), // Amendment non-responsive, all elected claims cancelled
    fp('8.26.AE'), // Canceled Elected Claims, Non-Responsive - Application Under Accelerated Examination // verify
    fp('8.05'), // With traverse
    fp('8.25.01'), // Without traverse
    fp('8.25.02'), // Without traverse, incomplete response
    fp('8.04'),    // Election by original presentation
    fp('8.23'),    // Election by telephone
    fp('8.02'),    // Election of Species; No Species Claim Present
    fp('8.03'),    // In Condition for Allowance, Non-elected Claims Withdrawn with Traverse
    fp('8.07'),    // Ready for Allowance, Non-elected Claims Withdrawn Without Traverse
    fp('8.25'),    // Response to final must include cancellation / Answer to Arguments with Traverse
  ]),

  sec('subj-search-not-made', 'SEARCH NOT MADE', [
    fp('7.02'), // Disclosure incomprehensible
    fp('7.01'), // Unconventional terminology not art-accepted
  ]),

  sec('subj-specification', 'SPECIFICATION', [
    fp('6.01'),    // Arrangement of
    fp('6.02'),    // Content of
    fp('6.29'),    // Double spacing required
    fp('6.32'),    // Easily erasable paper
    fp('7.01'),    // Examination prohibited, use of unconventional terminology
    fp('7.02'),    // Examination prohibited, incomprehensible
    fp('7.44'),    // Lacks antecedent basis for claim terminology
    fp('6.31'),    // Lengthy Specification
    fp('7.29'),    // Minor informalities
    fp('7.28'),    // New matter objection
    fp('6.30'),    // Revision required, numerous errors
    fp('6.32.01'), // Application Papers Must be Legible // verify
    fp('13.01'),   // Rewritten specification required upon issue
    sec('subj-spec-sub', 'SUBSTITUTE', [
      fp('6.28.02'), // Not entered
      fp('6.28.01'), // Required
      fp('13.01'),   // Required at issue
      fp('6.28'),    // Required, idiomatic English
    ]),
  ]),

  sec('subj-supp-exam', 'SUPPLEMENTAL EXAMINATION CERTIFICATE', [
    fp('28.01'), // Header for Reasons for Substantial New Question of Patentability Determination // verify
    fp('28.02'), // Reasons for Finding No Substantial New Question of Patentability // verify
    fp('28.03'), // Reasons for Finding A Substantial New Question of Patentability // verify
  ]),

  sec('subj-suspension', 'SUSPENSION OF ACTION', [
    fp('7.54'),    // At applicant's request
    fp('7.52'),    // Awaiting new reference
    fp('7.53'),    // Possible interference
    fp('7.56'),    // Denied, improper, outstanding Office action
    fp('10.20'),   // Denied, fee not paid
  ]),

  sec('subj-term-disc', 'TERMINAL DISCLAIMER', [
    sec('subj-td-acceptable-lang', 'EXAMPLES OF ACCEPTABLE LANGUAGE', [
      fp('14.27.07.fti'),   // In Application Filed Before Sept. 16, 2012, Activities Undertaken Within the Scope of a Joint Research Agreement // verify
      fp('14.27.04.1'),     // In Patent To Be Granted - Application Filed On or After Sept. 16, 2012 // verify
      fp('14.27.07.1'),     // In Patent To Be Granted - Application Filed On or After Sept. 16, 2012, Activities Undertaken Within the Scope of a Joint Research Agreement // verify
      fp('14.27.06'),       // In patent (reexamination situation)
      fp('14.27.08'),       // In patent (reexamination situation; activities undertaken within the scope of a joint research agreement) // verify
    ]),
    sec('subj-td-samples', 'SAMPLES OF A TERMINAL DISCLAIMER', [
      fp('14.37'), // Information about a Terminal Disclaimer Over a Pending Application
      fp('14.38'), // Information about a Terminal Disclaimer Over a Prior Patent
    ]),
    fp('14.36'),    // Suggestion that applicant request a refund
    fp('14.34'),    // Requirement for statement to record assignment submitted with Disclaimer
    fp('14.23'),    // Terminal Disclaimer proper
    fp('14.23.01'), // Terminal Disclaimer proper (reexam Only)
    sec('subj-td-not-proper', 'TERMINAL DISCLAIMER NOT PROPER', [
      fp('14.26.05'), // Application/patent improperly identified
      fp('14.26.04'), // Application/patent not identified
      fp('14.26.02'), // Directed to particular claim(s)
      fp('14.26', [
        fp('14.26.01'),     // Extent of interest not stated
        fp('14.27.02'),     // Fails to Disclaim Terminal Portion of any patent granted on subject application
        fp('14.27.03'),     // Fails to Disclaim Terminal Portion of subject patent
        fp('14.28.fti'),    // Failure To State Capacity To Sign - Application Filed Before Sept. 16, 2012
        fp('14.24', [
          fp('14.25'),      // Introductory paragraph (reexam only)
        ]),
        fp('14.26.10'),     // Terminal Disclaimer Identifies Party Who Is Not The Applicant - Application Filed On or After Sept. 16, 2012 // verify
        fp('14.27.01'),     // No clause enforceable only during common ownership
        fp('14.26.07'),     // No disclaimer fee submitted
        fp('14.26.03'),     // Not signed
        fp('14.26.06.fti'), // Not Signed by All Owners - Application Filed Before Sept. 16, 2012
        fp('14.26.08'),     // Not Properly Signed - Application Filed On or After Sept. 16, 2012 // verify
        fp('14.26.09'),     // Failure To State Capacity To Sign - Application Filed On or After Sept. 16, 2012 // verify
        fp('14.29.fti'),    // Not Recognized as Officer of Assignee - Application Filed Before Sept. 16, 2012
      ]),
      fp('14.26'), // Does Not Comply With 37 CFR 1.321 "Sub-Heading" Only
    ]),
    fp('14.29.02.fti'), // Criteria To Accept Terminal Disclaimer When Signed by a Non-Recognized Officer - Application Filed Before September 16, 2012 // verify
    fp('14.30.fti'),    // No Evidence of Chain of Title to Assignee - Application Filed Before Sept. 16, 2012
    fp('14.32'),        // Application/patent which forms basis for rejection not identified
    fp('14.33'),        // 37 CFR 3.73 Establishing the right of the assignee to prosecute
    fp('14.35'),        // Previously Submitted Disclaimer Fee Can Be Applied - Applicant
    fp('14.35.01'),     // Previously Submitted Disclaimer Fee Can Be Applied - Patent Owner
  ]),

  fp('6.11'),   // Title of invention not descriptive
  fp('6.20'),   // Trade Names, Trademarks, and Other Marks Used in Commerce

  sec('subj-transitional', 'TRANSITIONAL PROCEDURES', [
    fp('7.41.01.fti'),  // Transitional After Final Practice, First Submission (37 CFR 1.129(a))
    fp('7.42.03.fti'),  // Action Is Final, First Action Following Submission Under 37 CFR 1.129(a) Filed Prior to June 8, 2005
    fp('7.42.02.fti'),  // Nonresponsive Submission Filed Under 37 CFR 1.129(a)
    fp('8.41'),         // Transitional Restriction or Election of Species Requirement - pre-GATT Filing
    fp('7.41.02.fti'),  // Transitional After Final Practice, Second Submission (37 CFR 1.129(a))
    fp('7.42.01.fti'),  // Withdrawal of finality of last Office action
  ]),

  sec('subj-types-apps', 'TYPES OF APPLICATIONS', [
    fp('2.01'), // Division
    fp('2.07'), // Substitute
  ]),

  sec('subj-withdrawal-finality', 'WITHDRAWAL OF FINALITY', [
    fp('7.42'),        // Applicant's request
    fp('7.42.01.fti'), // Transitional application under 37 CFR 1.129(a)
    fp('7.50'),        // Withdrawal of allowability of claims, rejection on new art
  ]),

  sec('subj-withdrawal-from-issue', 'WITHDRAWAL FROM ISSUE', [
    fp('10.01'), // Fee not paid
  ]),

]
