/**
 * Alphabetical listing of MPEP form paragraphs.
 * Each letter group contains FP nodes in alphabetical order by title.
 */
import type { CatNode } from './categories'

function fp(id: string): CatNode {
  return { id: `fp-${id}`, fpId: id }
}

function sec(id: string, label: string, children: CatNode[]): CatNode {
  return { id, label, children }
}

export const ALPHABETICAL: CatNode[] = [
  sec('alpha-a', 'A', [
    fp('7.90'), // Abandonment, Failure to Respond
    fp('6.12'), // Abstract Missing (Background)
    fp('6.13'), // Abstract Objected To
    fp('6.15'), // Abstract of The Disclosure- Chemical Cases
    fp('6.14'), // Abstract of the Disclosure- Content
    fp('6.16'), // Abstract of The Disclosure- Language
    fp('6.16.01'), // Abstract of The Disclosure- Placement
    fp('2.27'), // Acknowledge Certified Copy of Foreign Priority Paper in Parent
    fp('12.181'), // Acknowledgement of Reply Brief
    fp('26.65'), // Acknowledgment of Rebuttal Brief
    fp('6.37'), // Acknowledgment of Replacement Drawing Sheets
    fp('26.07'), // Action Closing Prosecution
    fp('14.10'), // Action in Reissue Not Stayed - Applicant's Request
    fp('14.11'), // Action in Reissue Not Stayed - Related Litigation
    fp('14.09'), // Action in Reissue Not Stayed - Related Litigation Not Overlapping
    fp('14.07'), // Action in Reissue Not Stayed - Related Litigation Stayed
    fp('14.08'), // Action in Reissue Not Stayed - Related Litigation Terminated
    fp('7.39'), // Action Is Final
    fp('7.42.031.fti'), // Action Is Final, Action Following Submission Under 37 CFR 1.129(a) Filed On or After June 8, 2005
    fp('7.41'), // Action Is Final, First Action
    fp('7.42.09'), // Action is Final, First Action Following Request For Continued Examination Under 37 CFR 1.114
    fp('7.42.03.fti'), // Action Is Final, First Action Following Submission Under 37 CFR 1.129(a) Filed Prior to June 8, 2005
    fp('7.41.03'), // Action Is Final, First Action Following Submission Under 37 CFR 1.53(d), Continued Prosecution Application (CPA) in a Design Application
    fp('7.40'), // Action Is Final, Necessitated by Amendment
    fp('7.40.01'), // Action Is Final, Necessitated by IDS With Timing Fee
    fp('7.40.02.fti'), // Action Is Final, Necessitated by Invoking the Joint Research Agreement Prior Art Disqualification Under Pre-AIA 35 USC 103(c)
    fp('15.64'), // Addition of "And Described" to Claim
    fp('7.169'), // Advisory Action - Proposed Rejection of Claims - Before Appeal Brief
    fp('8.28.01.fti'), // Advisory Information Relating to Form Paragraph 8.28.fti
    fp('7.64.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Effective To Overcome Reference
    fp('7.57.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective- Heading
    fp('7.58.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective, Claiming Same Invention
    fp('7.62.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective, Diligence Lacking
    fp('7.63.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective, Insufficient Evidence of Actual Reduction to Practice
    fp('7.61.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective, Insufficient Evidence of Conception
    fp('7.59.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective, Insufficient Evidence of Reduction to Practice Before Reference Date
    fp('7.60.fti'), // Affidavit or Declaration Under 37 CFR 1.131(a): Ineffective, Reference Is a Statutory Bar
    fp('7.65'), // Affidavit or Declaration Under 37 CFR 1.132, Effective to Withdraw Rejection
    fp('7.66'), // Affidavit or Declaration Under 37 CFR 1.132, Insufficient
    fp('2.03'), // Affidavits and Declarations in Prior Application
    fp('7.42.16'), // After Bd. Decision but before Further Appeal or Civil Action, RCE Under 37 CFR 1.114 Without Submission and/or Fee
    fp('26.55.01'), // Agreement With Statement of Findings of Patentability on Appeal
    fp('26.54.01'), // Agreement With Statement of the Grounds of Rejection on Appeal
    fp('26.53.01'), // Agreement With the Summary of Claimed Subject Matter In Brief(s)
    fp('8.43'), // Allowable Product, Rejoinder of All Previously Withdrawn Process Claims
    fp('8.42'), // Allowable Product, Rejoinder of at Least One Process Claim, Less Than All Claims
    fp('7.43.02'), // Allowable Subject Matter, Claims Rejected Under 35 USC 112(b) or 35 USC 112 (Pre-AIA), Second Paragraph, Dependent Claim
    fp('7.43.01'), // Allowable Subject Matter, Claims Rejected Under 35 USC 112(b) or 35 USC 112 (Pre-AIA), Second Paragraph, Independent Claim
    fp('7.43.03'), // Allowable Subject Matter, Formal Requirements Outstanding
    fp('18.07.03c'), // Alternatives Do Not Share a Common Structure or Belong to a Recognized Class
    fp('18.07.03a'), // Alternatives Lack Common Property or Activity
    fp('18.07.03b'), // Alternatives Share a Common Structure That is Not a Significant Structural Element and Do Not Belong to a Recognized Class
    fp('15.60'), // Amend All Figure Descriptions
    fp('29.59.02'), // Amend Application Title to Correspond to the Claim
    fp('15.63'), // Amend Claim "As Shown and Described"
    fp('15.62'), // Amend Claim "As Shown"
    fp('15.61'), // Amend Selected Figure Descriptions
    fp('15.61.01'), // Amend Specification to Add Reference to Color Drawing(s)/Photograph(s) (Ch. 16 Design Application)
    fp('15.59'), // Amend Title
    fp('29.59.01'), // Amend Title Except for Product Indication
    fp('26.52.03'), // Amendment After Action Closing Prosecution Entered
    fp('26.52.04'), // Amendment After Action Closing Prosecution Not Entered
    fp('12.119'), // Amendment After Board Decision - Entry Refused
    fp('12.298'), // Amendment After Board Decision - Entry Refused
    fp('7.84'), // Amendment is Non-responsive to Interview
    fp('7.84.AE'), // Amendment Is Non-Responsive to Interview - Application Under Accelerated Examination
    fp('15.65'), // Amendment May Not Be Possible
    fp('24.14'), // Amendment Missing Instruction to Enter the Sequence Listing into the Application
    fp('24.29.26'), // Amendment Missing Statement of Location of Additions, Deletions or Replacements of Sequence Information
    fp('24.15'), // Amendment Missing Statement of No New Matter
    fp('24.25.26'), // Amendment Missing Statement of No New Matter
    fp('24.16'), // Amendment Missing Statement of Support
    fp('24.26.26'), // Amendment Missing Statement of Support
    fp('6.19.02'), // Amendment Not in Compliance with 37 CFR 1.57(b)
    fp('22.12'), // Amendment Proposed in Reexamination - 37 CFR 1.530(d)
    fp('6.33'), // Amendment to Claims Not Entered, Bona Fide, improper form 37 CFR 1.121(c) more than 5 words
    fp('15.51.01'), // Amendment to Disclosure Not Affecting Claim - 35 U.S.C. 132 Objection (New Matter)
    fp('7.86'), // Amendment Under 37 CFR 1. 312 Entered In Part
    fp('7.85'), // Amendment Under 37 CFR 1.312 Entered
    fp('7.87'), // Amendment Under 37 CFR 1.312 Not Entered
    fp('14.20.01'), // Amendments to Reissue - 37 CFR 1.173(b)
    fp('8.25'), // Answer to Arguments with Traverse
    fp('8.19'), // Apparatus and Product Made
    fp('12.109.01'), // Appeal Dismissed - Allowed Claims - Formal Matters Remaining
    fp('12.209'), // Appeal Dismissed - Allowed Claims - Formal Matters Remaining
    fp('15.10.fti'), // Applicability of AIA First Inventor to File Provisions
    fp('23.06'), // Applicant Suggesting an Interference
    fp('7.03.fti'), // Application Examined Under First to Invent provisions
    fp('2.11'), // Application must Be Copending with Parent
    fp('2.11.01'), // Application Must Be Filed Within 12 Months From the Provisional Application Unless Petition Granted
    fp('7.42.15'), // Application on Appeal, Continued Prosecution Application Treated As Continued Examination Under 37 CFR 1.114
    fp('7.42.13'), // Application on Appeal, Request For Continued Examination without Fee Claim Allowed
    fp('7.42.14'), // Application on Appeal, Request For Continued Examination without Fee Claim Allowed With Formal Matters Outstanding.
    fp('7.42.12'), // Application on Appeal, Request For Continued Examination without Submission/Fee Claim Allowed with Formal Matters Outstanding.
    fp('7.42.11'), // Application on Appeal, Request For Continued Examination without Submission/Fee Claim Allowed.
    fp('7.42.10'), // Application on Appeal, Request For Continued Examination without Submission/Fee No Claim Allowed.
    fp('6.32'), // Application on Easily Erasable Paper
    fp('14.26.05'), // Application or Patent Improperly Identified
    fp('14.26.04'), // Application or Patent Not Identified
    fp('6.32.01'), // Application Papers Must be Legible
    fp('14.32'), // Application-Patent Which Forms Basis for Rejection Not Identified
    fp('7.38'), // Arguments Are Moot Because of New Ground of Rejection
    fp('7.37'), // Arguments Are Not Persuasive
    fp('7.38.02'), // Arguments Persuasive, New Ground(s) of Rejection
    fp('7.38.01'), // Arguments Persuasive, Previous Rejection/Objection Withdrawn
    fp('6.01'), // Arrangement of the Sections of the Specification in a Utility Application
    fp('7.115'), // Art Relied Upon for Description of Prior Art
    fp('7.116'), // Art relied Upon for Development of Invention
    fp('7.117'), // Art Relied Upon for Drafting Claimed Subject Matter
    fp('7.110'), // Art Suggested as Relevant
    fp('29.61.01'), // At Least One Color Drawing Statement
    fp('4.08'), // Attorney - Agent Suspended (Plural Practitioners)
    fp('14.16.04.fti'), // Attorney/Agent of Record Signs - Application Filed Before Sept. 16, 2012
    fp('4.07'), // Attorney/Agent Suspended (Sole Practitioner)
    fp('15.07'), // Avoidance of New Matter
  ]),
  sec('alpha-b', 'B', [
    fp('7.108'), // Background Description
    fp('8.33'), // Basis for Non-statutory Double Patenting (Obviousness And Non-obviousness Type) - Heading Only
    fp('15.24.06'), // Basis for Nonstatutory Double Patenting, "Heading Only"
    fp('2.39'), // Benefit Claim is Untimely 35 USC 119(e), 120, 121, 365(c), or 386(c)
    fp('5.04'), // Benefit of Certificate of Mailing Denied
    fp('7.95'), // Bona Fide, Non-responsive Amendments
    fp('7.95.AE'), // Bona Fide, Non-Responsive Amendments - Application Under Accelerated Examination
    fp('7.34.04'), // Broader Range-Limitation and Narrow Range or Limitation in Same Claim
    fp('7.30.05'), // Broadest Reasonable Interpretation under 35 USC 112(f) or pre-AIA 35 USC 112, Sixth Paragraph: Use of "Means" (or "Step") in Claim Drafting and Rebuttable Presumptions Raised
    fp('8.21'), // Burden and Means for Traversal for all Restrictions, other than an Election of Species
  ]),
  sec('alpha-c', 'C', [
    fp('15.75.01.fti'), // C-I-P Caution, Claim to Foreign Priority in Earlier Filed Application - Status of Foreign Application Unknown
    fp('15.35'), // Cancel Nonelected Design (Traverse)
    fp('8.26'), // Canceled Elected Claims, Non-responsive
    fp('8.26.AE'), // Canceled Elected Claims, Non-Responsive - Application Under Accelerated Examination
    fp('15.37'), // Cancellation of Nonelected Groups, No Traverse
    fp('2.20'), // Certified Copies of Priority Papers in Parent or Related (Reissue Situation) - Application
    fp('2.22'), // Certified Copy Filed, But Proper Claim Not Made
    fp('15.03'), // Certified Copy Filed, But Proper Claim Not Made
    fp('15.47'), // Characteristic Feature Statement
    fp('7.96'), // Citation of Relevant Prior Art
    fp('7.112'), // Cites for Electronically Searchable Databases or Other Indexed Collections
    fp('23.06.05'), // Claim Added/Amended; Failure to Provide Claim Chart Showing Written Description
    fp('7.06.01'), // Claim Limitation Relating to a Tax Strategy Deemed To Be Within the Prior Art under 35 USC 102 or 103
    fp('15.58.01'), // Claimed Design Is Patentable (35 USC. 112 Rejections)
    fp('15.58'), // Claimed Design Is Patentable (Ex Parte Quayle Actions)
    fp('2.26'), // Claimed Foreign Priority - Certified Copy Filed
    fp('2.25'), // Claimed Foreign Priority, No Certified Copy Filed
    fp('15.02'), // Claimed Foreign Priority, No Certified Copy Filed
    fp('7.44'), // Claimed Subject Matter Not in Specification
    fp('7.97'), // Claims Allowed
    fp('12.156'), // Claims Appendix
    fp('26.56'), // Claims Appendix
    fp('7.34.07'), // Claims Are a Literal Translation
    fp('23.14.01'), // Claims Copied More Than 1 Year from Application Pub. Date
    fp('23.14'), // Claims Copied More Than One Year from Patent Issue Date
    fp('18.10'), // Claims Defective
    fp('26.80'), // Claims Held Invalid by Court, No Longer Being Reexamined
    fp('22.20'), // Claims Held Invalid By Court, No Longer Being Reexamined
    fp('7.29.01'), // CLAIMS OBJECTED TO, MINOR INFORMALITIES
    fp('7.29.02'), // CLAIMS OBJECTED TO, REFERENCE CHARACTERS NOT ENCLOSED WITHIN PARENTHESES
    fp('7.29.03'), // CLAIMS OBJECTED TO, SPACING OF LINES
    fp('18.12.01'), // Claims Objectionable - Inadequate Written Description
    fp('18.15'), // Claims Objectionable - Indefiniteness
    fp('18.14.01'), // Claims Objectionable - Lack Of Best Mode
    fp('18.13.01'), // Claims Objectionable - Non-Enabling Disclosure
    fp('7.50'), // Claims Previously Allowed, Now Rejected, New Art
    fp('8.05'), // Claims Stand Withdrawn with Traverse
    fp('8.06'), // Claims Stand Withdrawn Without Traverse
    fp('6.18.01'), // Claims- Placement
    fp('15.05.041'), // Color Drawing(s)/Photograph(s) Submitted
    fp('16.06'), // Color Drawings Must be in Duplicate
    fp('6.24.01'), // Color Photographs and Color Drawings, Petition Required
    fp('16.02'), // Colors Specified Do Not Correspond With Those Shown
    fp('8.15'), // Combination-Subcombination
    fp('6.64.01'), // Computer Program Listing Appendix of More Than 300 Lines in Specification
    fp('6.64.02'), // Computer Program Listing as Printout Within the Specification (More Than 60 Lines And Not More Than Three Hundred Lines)
    fp('24.08'), // Computer Readable Form (CRF) contains error(s) according to STIC report
    fp('24.09'), // Computer Readable Form (CRF) damaged or unreadable
    fp('7.127'), // Conclusion of Office Action that Includes Requirement
    fp('7.126'), // Conclusion of Requirement Mailed without Any Other Office Action
    fp('7.126.AE'), // Conclusion Of Requirement Mailed Without Any Other Office Action - Application Under Accelerated Examination
    fp('7.125'), // Conclusion of Requirement that Accompanies Office Action
    fp('12.279'), // Conclusion to Examiner Answer - No New Grounds of Rejection
    fp('12.279.01'), // Conclusion to Examiner Answer Raising New Grounds of Rejection
    fp('12.179'), // Conclusion to Examiner's Answer - No New Grounds of Rejection
    fp('12.179.01'), // Conclusion to Examiner's Answer Raising New Grounds of Rejection
    fp('15.01'), // Conditions Under 35 U.S.C. 119(a)-(d), 172, 386(a) and (b)
    fp('15.01.01'), // Conditions Under 35 USC 172 Not Met
    fp('14.15'), // Consent of Assignee to Reissue Lacking
    fp('6.02'), // Content of Specification
    fp('7.124'), // Contents of Good Faith Reply
    fp('2.10.01'), // Continuation or Divisional Appl. Contains New Matter Rel. to Prior-Filed Appl.
    fp('15.74'), // Continuation-In-Part
    fp('15.74.01'), // Continuation-In-Part - Not Entitled To Benefit of Earlier Filing Date
    fp('7.42.05'), // Continued Examination Under 37 CFR 1.114 After Allowance or Quayle Action
    fp('7.42.06'), // Continued Examination Under 37 CFR 1.114 After Appeal But Before A Board Decision
    fp('7.42.07'), // Continued Examination Under 37 CFR 1.114 After Board Decision But Before Further Appeal or Civil Action
    fp('7.42.04'), // Continued Examination Under 37 CFR 1.114 After Final Rejection
    fp('2.14'), // Continuing Application Fee, 35 U.S.C. 120, 121, 365(c), or 386(c) Benefit Claim
    fp('7.114'), // Copies of Publications Authored by Inventor(s)
    fp('12.162.02'), // Copies Related to Proceeding
    fp('26.61.03'), // Copies Related to Proceeding
    fp('7.113'), // Copy of Art Referred to in the disclosure, But Not Submitted
    fp('7.83'), // Copy of Office Action Supplied
    fp('7.82.01'), // Copy of Reference(s) Furnished
    fp('26.56.01'), // Copy of the Appealed Claims in the Appendix of Appellant Brief is Correct
    fp('15.73'), // Corrected Drawing Sheets Required
    fp('7.81'), // Correction Letter Re Last Office Action
    fp('6.19.03'), // Correction of Ineffective Incorporation by Reference
    fp('7.82'), // Correction of Reference Citation
    fp('22.73'), // Correspondence and Inquiry as to Office Actions
    fp('26.73'), // Correspondence and Inquiry as to Office Actions
    fp('2.35'), // CPA Status Acceptable - Conditional Request (for Design Application)
    fp('2.30'), // CPA Status Acceptable (for Design Applications)
    fp('2.31'), // CPA Status Not Acceptable - Request Not on Separate Paper (for Design Applications)
    fp('14.29.02.fti'), // Criteria To Accept Terminal Disclaimer When Signed by a Non-Recognized Officer - Application Filed Before September 16, 2012
    fp('14.16.06'), // Criteria to Accept When Signed by a Non-Recognized Officer
  ]),
  sec('alpha-d', 'D', [
    fp('6.62'), // Data File on Read-only Optical Disc Not in ASCII File Format or XML file format (only for a "Sequence Listing XML")
    fp('6.72.02'), // Data File, Submitted with Amendment, on Read-only Optical Disc Not in ASCII File Format or XML File Format (only for a "Sequence Listing XML" submission)
    fp('4.03'), // Death of Patent Practitioner
    fp('24.19.26'), // Defective "Sequence Listing XML"
    fp('26.66.01'), // Defective Amended Rebuttal Brief-No Opportunity to Correct
    fp('26.66'), // Defective Rebuttal Brief-Opportunity to Correct
    fp('14.01.02'), // Defective Reissue Oath-Declaration, 37 CFR 1.175(a)(1) - The Identified "Error" is Not Appropriate Error
    fp('14.01.04.fti'), // Defective Reissue Oath/Declaration in Application Filed Before Sept. 16, 2012, 37 CFR 1.175- Lack of Statement of "Without Any Deceptive Intention"
    fp('14.01.06'), // Defective Reissue Oath/Declaration, 37 CFR 1.175 - General
    fp('14.01.03'), // Defective Reissue Oath/Declaration, 37 CFR 1.175 - Multiple Identified "Errors" Not Appropriate Errors
    fp('14.01.01'), // Defective Reissue Oath/Declaration, 37 CFR 1.175 - No Statement of a Specific Error
    fp('14.01.05'), // Defective Reissue Oath/Declaration, 37 CFR 1.175 - No Statement of Defect in the Patent
    fp('2.07'), // Definition of a Substitute
    fp('18.09'), // Description Defective
    fp('15.50.02'), // Description of Broken Lines (Ch. 16 Design Application)
    fp('29.22'), // Description of Broken Lines Added by Examiner's Amendment (International Design Application)
    fp('15.50.05'), // Description of Broken Lines as Boundary of Design (Ch. 16 Design Application)
    fp('29.24'), // Description of Broken Lines as Boundary of Design Added by Examiner's Amendment (International Design Application)
    fp('29.26'), // Description of Coloring Added by Examiner's Amendment (International Design Application)
    fp('15.44'), // Design Inseparable from Article to which Applied
    fp('15.55.01'), // Design Patent - Trademark Overlap
    fp('15.05'), // Design Patent Specification Arrangement (Ch. 16 Design Application)
    fp('15.55'), // Design Patent-Copyright Overlap
    fp('7.121'), // Details of Improvements Over the Prior Art
    fp('8.28.fti'), // Different Inventors, Common Assignee, Inventions Not Patentably Distinct, No Evidence of Common Ownership at Time of Invention, Examined Under Pre-AIA provisions
    fp('8.27.fti'), // Different Inventors, Common Assignee, Same Invention, Examined Under Pre-AIA Provisions
    fp('14.26.02'), // Directed to Particular Claim(s)
    fp('7.02'), // DISCLOSURE IS INCOMPREHENSIBLE
    fp('7.29'), // DISCLOSURE OBJECTED TO, MINOR INFORMALITIES
    fp('2.10'), // Disclosure of Prior-Filed Application Does Not Provide Support for Claimed Subject Matter
    fp('29.101'), // Discussion of the Merits of the Application
    fp('12.186'), // Dismissal Following A Supplemental Examiner's Answer Written in Response to a Remand for Further Consideration of a Rejection
    fp('12.279.02'), // Dismissal Following New Ground(s) of Rejection in Examiner Answer
    fp('12.179.02'), // Dismissal Following New Ground(s) of Rejection in Examiner's Answer
    fp('12.286'), // Dismissal Following Substitute Examiner Answer in Response to a Remand for Consideration of a Rejection
    fp('8.14.01'), // Distinct Products or Distinct Processes
    fp('8.13'), // Distinctness (Heading)
    fp('14.26'), // Does Not Comply With 37 CFR 1.321 "Sub-Heading" Only
    fp('7.106'), // Domain of Search
    fp('4.01'), // Double Correspondence
    fp('15.24.07'), // Double Patenting Rejection (Design-Utility)
    fp('8.38'), // Double Patenting-Nonstatutory (Based Solely on Improper Timewise Extension of Patent Rights) With a Patent
    fp('8.39'), // Double Patenting-Nonstatutory (Based Solely on Improper Timewise Extension of Patent Rights) With Another Application
    fp('15.05.05'), // Drawing Correction Required Prior to Appeal
    fp('16.07'), // Drawing Figures Not Competently Executed
    fp('18.08.01'), // Drawing Is Required
    fp('18.08'), // Drawing Objections - Defects
    fp('18.11'), // Drawing Objections - Lack Clarity
    fp('6.43'), // Drawings Contain Informalities, Application Allowed
    fp('6.26'), // Drawings Do Not Permit Examination
    fp('6.36'), // Drawings Do Not Show Claimed Subject Matter
    fp('16.11'), // Drawings in Improper Scale
    fp('6.22'), // Drawings Objected To
    fp('6.22.01'), // Drawings Objected To, Details Not Shown
    fp('6.22.02'), // Drawings Objected To, Different Numbers Refer to Same Part
    fp('6.22.03'), // Drawings Objected To, Different Parts Referred to by Same Number
    fp('6.22.04'), // Drawings Objected To, Incomplete
    fp('6.22.05'), // Drawings Objected To, Modifications in Same Figure
    fp('6.22.06'), // Drawings Objected To, Reference Numbers Not in Drawings
    fp('6.22.07'), // Drawings Objected To, Reference Numbers Not in Specification
    fp('15.05.03'), // Drawings/Photographs Disclosure Objected To
    fp('7.05.06'), // DUPLICATE CLAIMS, OBJECTION
    fp('7.05.05'), // DUPLICATE CLAIMS, WARNING
  ]),
  sec('alpha-e', 'E', [
    fp('8.49'), // Elected Invention Allowable, Claims Stand Withdrawn, Restriction Maintained
    fp('8.47.01'), // Elected Invention Allowable, Non-elected Claims Canceled, After Final Rejection, No Outstanding Issues Remaining
    fp('8.47'), // Elected Invention Allowable, Non-elected Claims Canceled, Before Final Rejection, No Outstanding Issues Remaining
    fp('8.46'), // Elected Invention Allowable, Non-elected Claims Canceled, Other Issues Remain Outstanding
    fp('8.45'), // Elected Invention Allowable, Rejoinder of All Previously Withdrawn Claims
    fp('8.50'), // Elected Invention Allowable, Some Claims No Longer Considered Withdrawn
    fp('8.04'), // Election by Original Presentation
    fp('18.21'), // Election by Original Presentation in National Stage Applications Submitted Under 35 USC 371
    fp('8.02'), // Election of Species; No Species Claim Present
    fp('8.01'), // Election of Species; Species Claim(s) Present
    fp('8.25.01'), // Election Without Traverse
    fp('8.25.02'), // Election Without Traverse Based on Incomplete Response
    fp('4.10'), // Employ Services of Attorney or Agent
    fp('15.66'), // Employ Services of Patent Attorney or Agent (Design Application Only)
    fp('15.66.01'), // Employ Services of Professional Patent
    fp('7.34.14'), // Essential Cooperative Relationships Omitted
    fp('7.34.13'), // Essential Elements Omitted
    fp('7.34.12'), // Essential Steps Omitted
    fp('14.16.01'), // Establishment of Ownership Not Signed By Appropriate Party
    fp('14.30.02.fti'), // Evidence of Chain of Title to Assignee - Submission Not Signed by Appropriate Party - Application Filed Before Sept. 16, 2012, Terminal Disclaimer Is Thus Not Entered
    fp('12.157'), // Evidence Relied Upon
    fp('26.57'), // Evidence Relied Upon - Heading
    fp('23.02'), // Ex Parte Prosecution is Resumed
    fp('22.09'), // Ex Parte Reexamination - Action is Final
    fp('22.10'), // Ex Parte Reexamination - Action is Final, Necessitated by Amendment
    fp('12.249'), // Examiner Answer Cover Sheet
    fp('12.119.02'), // Examiner Sustained in Part - Requirement of Rewriting Dependent Claims (At Least One Allowed Claim)
    fp('12.292'), // Examiner Sustained in Part - Requirement of Rewriting Dependent Claims (At Least One Allowed Claim)
    fp('12.119.01'), // Examiner Sustained in Part - Requirement of Rewriting Dependent Claims (No Allowed Claim)
    fp('12.291'), // Examiner Sustained in Part - Requirement of Rewriting Dependent Claims (No Allowed Claim)
    fp('13.02'), // Examiner's Amendment
    fp('22.06'), // Examiner's Amendment Accompanying Notice of Intent to Issue Reexamination Certificate
    fp('26.69'), // Examiner's Amendment Accompanying Notice of Intent to Issue Reexamination Certificate
    fp('13.02.01'), // Examiner's Amendment Authorized
    fp('6.47'), // Examiner's Amendment Involving Drawing Changes
    fp('12.149'), // Examiner's Answer Cover Sheet
    fp('26.64'), // Examiner's Answer, Conclusion
    fp('12.154.01'), // Examiner's Statement of Grounds of Rejection
    fp('14.27.07.fti'), // Examples of Acceptable Terminal Disclaimer Language - Application Filed Before Sept. 16, 2012, Activities
    fp('14.27.07.1'), // Examples of Acceptable Terminal Disclaimer Language - Application Filed On or After Sept. 16, 2012, Activities Undertaken Within the Scope of a Joint Research Agreement
    fp('14.27.08'), // Examples of Acceptable Terminal Disclaimer Language in Patent (Reexamination Situation; activities undertaken within the scope of a joint research agreement)
    fp('14.27.06'), // Examples of Acceptable Terminal Disclaimer Language in Patent (Reexamination Situations)
    fp('14.27.04.1'), // Examples of Acceptable Terminal Disclaimer Language in Patent To Be Granted - Application Filed On or After Sept. 16, 2012
    fp('14.27.04.fti'), // Examples of Acceptable Terminal Disclaimer Language in Patent To Be Granted -Application Filed Before Sept. 16, 2012
    fp('15.08.03'), // Explanation of evidence cited in support of simulation rejection
    fp('15.15.01.fti'), // Explanation of rejection under Pre-AIA 35 USC 102(a), (b), (d), or (e)
    fp('13.02.02'), // Extension of Time and Examiner's Amendment Authorized
    fp('13.06'), // Extension of Time by Examiner's Amendment
    fp('22.04.01'), // Extension of Time in Reexamination
    fp('12.111'), // Extension To File Brief - Denied
    fp('12.211'), // Extension To File Brief - Denied
    fp('12.110'), // Extension To File Brief - Granted
    fp('12.210'), // Extension To File Brief - Granted
    fp('14.26.01'), // Extent of Interest Not Stated
  ]),
  sec('alpha-f', 'F', [
    fp('14.27.02'), // Fails to Disclaim Terminal Portion of any Patent Granted On Subject Application
    fp('14.27.03'), // Fails to Disclaim Terminal Portion of Subject Patent
    fp('14.16'), // Failure of Assignee to Establish Ownership
    fp('23.06.04'), // Failure to Explain in Detail Why Applicant Will Prevail on Priority
    fp('23.06.02'), // Failure to Identify the Counts and Corresponding Claims
    fp('23.06.01'), // Failure to Identify the Other Application or Patent
    fp('7.48.fti'), // Failure To Present Claims for Interference
    fp('23.06.03'), // Failure to Provide Claim Chart Comparing At Least One Claim
    fp('14.16.02'), // Failure to State Capacity to Sign
    fp('14.28.fti'), // Failure To State Capacity To Sign - Application Filed Before Sept. 16, 2012
    fp('14.26.09'), // Failure To State Capacity To Sign - Application Filed On or After Sept. 16, 2012
    fp('15.47.01'), // Feature Statement Caution
    fp('15.40.01'), // Final Rejection Under other Statutory Provisions
    fp('15.40.fti'), // Final Rejection Under Pre-AIA 35 USC 103(a) (Multiple References)
    fp('15.39.02.fti'), // Final Rejection Under Pre-AIA 35 USC 103(a) (Single Reference)
    fp('7.39.01'), // Final Rejection, Options for Applicant, Pro Se
    fp('26.59.01'), // Findings of Patentability
    fp('26.55'), // Findings of Patentability to be Reviewed on Appeal
    fp('26.04'), // First Action Not Mailed With Order
    fp('2.23'), // Foreign Filing More than 12 Months Earlier, No Petition to Restore Priority Granted
    fp('15.03.01.fti'), // Foreign Filing More Than 6 Months Before U.S. Filing, Application Filed Before March 16, 2013
    fp('23.19'), // Foreign Priority not Substantiated
    fp('5.02'), // Format of Certificate of Mailing or Transmission
    fp('26.66.02'), // Forward to the Board for Decision
    fp('15.41'), // Functional, Structural Features Not Considered
  ]),
  sec('alpha-g', 'G', [
    fp('12.159'), // Grounds of Rejection
    fp('26.59'), // Grounds of Rejection
    fp('26.54.011'), // Grounds of Rejection Not on Review
    fp('12.154'), // Grounds of Rejection to be Reviewed on Appeal
    fp('12.254'), // Grounds of Rejection to be Reviewed on Appeal
    fp('26.54'), // Grounds of Rejection to be Reviewed on Appeal
    fp('15.34'), // Groups Withdrawn From Consideration After Traverse
    fp('15.36'), // Groups Withdrawn From Consideration Without Traverse
  ]),
  sec('alpha-h', 'H', [
    fp('7.30.03.h'), // Header for Claim Interpretation
    fp('28.01'), // Header for Reasons for Substantial New Question of Patentability Determination
    fp('2.09'), // Heading for Conditions for Benefit Claims Under 35 USC 119(e), 120, 121, 365(c), or 386(c)
    fp('12.150'), // Heading for Examiner's Answer
    fp('26.50'), // Heading for Examiner's Answer
    fp('18.05'), // Heading For Lack Of Unity Action (Including Species)
    fp('24.01'), // Heading for Sequence Requirements
    fp('24.17.26'), // Heading for ST. 26 Sequence Requirements
    fp('18.07.03'), // Heading- Chemical Compound Alternatives of Markush Group Are Not of a Similar Nature
    fp('7.82.03'), // How to Obtain Copies of U.S. Patent Application Publications
    fp('7.04.03'), // Human Organism
  ]),
  sec('alpha-i', 'I', [
    fp('15.24.05.fti'), // Identical Claim: Common Assignee
    fp('15.26'), // Identification of Prior Application(s) in Nonprovisional Applications - Benefit Claimed
    fp('12.150.05'), // Identification of the Related Appeals and Interferences
    fp('26.50.05'), // Identification the the Related Appeals and Interferences
    fp('6.28'), // Idiomatic English
    fp('6.36.01'), // Illustration of Prior Art
    fp('15.46.01'), // Impermissible Descriptive Statement
    fp('26.05.01'), // Improper Amendment in an Inter Partes Reexamination - 37 CFR 1.530(d)-(j)
    fp('22.13'), // Improper Amendment in Reexamination - 37 CFR 1.530(d)
    fp('14.21.01'), // Improper Amendment to Reissue - 37 CFR 1.173(b)
    fp('24.17'), // Improper CRF Transfer Request
    fp('8.40'), // Improper Markush Grouping Rejection
    fp('7.45'), // Improper Multiple Dependent Claims
    fp('8.03'), // In Condition for Allowance, Non-elected Claims Withdrawn with Traverse
    fp('6.19'), // Incorporation by Reference, Foreign Patent or Application
    fp('7.34.08'), // Indefinite Claim Language -For Example-
    fp('7.34.09'), // Indefinite Claim Language- Or The Like
    fp('7.34.10'), // Indefinite Claim Language- Such As
    fp('15.90'), // Indication of Allowability Withdrawn
    fp('6.19.01'), // Ineffective Incorporation by Reference, General
    fp('14.37'), // Information about a Terminal Disclaimer Over a Pending Application
    fp('14.38'), // Information about a Terminal Disclaimer Over a Prior Patent
    fp('6.49'), // Information Disclosure Statement Not Considered
    fp('6.49.01'), // Information Disclosure Statement Not Considered, After First Action but Before Prosecution Closes, No Timing Statement
    fp('6.49.02'), // Information Disclosure Statement Not Considered, After First Action, But Before the Prosecution of the Application Closes, No Timing Fee
    fp('6.49.05'), // Information Disclosure Statement Not Considered, After the Prosecution of the Application Closes, Issue Fee Not Paid, No Timing Fee
    fp('6.49.03'), // Information Disclosure Statement Not Considered, After the Prosecution of the Application Closes, Issue Fee Not Paid, No Timing Statement
    fp('6.49.07'), // Information Disclosure Statement Not Considered, No Copy of References
    fp('6.49.09'), // Information Disclosure Statement Not Considered, No Explanation of Relevance
    fp('6.49.08'), // Information Disclosure Statement Not Considered, No List of References
    fp('6.49.12'), // Information Disclosure Statement Not Considered, No Size Fee
    fp('6.49.11'), // Information Disclosure Statement Not Considered, No Size Fee Assertion
    fp('6.49.10'), // Information Disclosure Statement Not Considered, Non-acceptable Electronic Medium
    fp('6.49.06'), // Information Disclosure Statement Not Considered, References Listed in Specification
    fp('6.52'), // Information Disclosure Statement, Filed After Prosecution Closed
    fp('13.09'), // Information Disclosure Statement, Issue Fee Paid
    fp('6.40'), // Information on How to Effect Drawing Changes
    fp('8.14'), // Intermediate-Final Product
    fp('7.105.02'), // Interrogatories of Facts Known to Applicant
    fp('26.03'), // Issue Not Within Scope of Inter Partes Reexamination
    fp('22.03'), // Issue Not Within Scope Of Reexamination
  ]),
  sec('alpha-j', 'J', [
    fp('7.20.02.fti'), // Joint Inventors, Common Ownership Presumed
    fp('8.23.02'), // Joint Inventors, Correction of Inventorship
  ]),
  sec('alpha-l', 'L', [
    fp('7.34.05'), // Lack of Antecedent Basis in The Claims
    fp('7.95.01'), // Lack of Arguments in Response
    fp('14.16.03'), // Lack of Capacity to Sign
    fp('15.08.01'), // Lack of Ornamentality (Article Not Visible in its Normal and Intended Use)
    fp('15.08'), // Lack of Ornamentality (Article Visible in End Use)
    fp('22.15'), // Lack of Service - 37 CFR 1.550(f)
    fp('26.68'), // Lack of Service in inter partes reexamination-37 CFR 1.903
    fp('18.06.02'), // Lack Of Unity - One Additional Group Of Claims
    fp('18.07'), // Lack Of Unity - Reasons Why Inventions Lack Unity
    fp('18.18'), // Lack Of Unity - Species - Reasons Why Unity Is Lacking
    fp('18.06'), // Lack Of Unity - Three Groups Of Claims
    fp('18.06.01'), // Lack Of Unity - Two (Or Additional) Groups Of Claims
    fp('14.27.011'), // Lacks 37 CFR 1.321(d) Statement for Joint Research Agreement under 35 U.S.C. 102(c) or pre-AIA 35 U.S.C. 103(c)(2)&(3)
    fp('14.27.01'), // Lacks Clause of Enforceable Only During Period of Common Ownership
    fp('18.03'), // Lacks Industrial Applicability
    fp('18.02.02'), // Lacks Inventive Step - Additional Reference
    fp('18.02'), // Lacks Inventive Step - One Reference
    fp('18.02.01'), // Lacks Inventive Step - Two References
    fp('18.01'), // Lacks Novelty
    fp('16.05.01'), // Latin Name or Genus and Species of Plant Missing
    fp('6.31'), // Lengthy Specification
    fp('7.107'), // Level of Skill and Knowledge in the Art
    fp('7.111'), // List of Keywords
    fp('12.151.01'), // List of Rejected Claims That Are Pending
    fp('12.157.02'), // Listing of Evidence Relied Upon
    fp('26.57.03'), // Listing of the Art of Record Relied Upon by Requester
    fp('26.57.02'), // Listing of the Evidence Relied Upon by Examiner
    fp('14.06'), // Litigation Related Reissue
    fp('22.07'), // Litigation Reminder (Patent Owner Request or Director Ordered Reexamination)
    fp('22.08'), // Litigation Reminder (Third Party Request)
  ]),
  sec('alpha-m', 'M', [
    fp('29.20'), // Matter Not Forming Part of Design (International Design Application)
    fp('18.04.01'), // Meets Industrial Applicability
    fp('18.04'), // Meets Novelty and Inventive Step
    fp('10.15'), // Memorandum - Certification of Correction (Inventorship)
    fp('10.19'), // Memorandum - Certification of Correction (X-Ref to Other Reissues in Family)
    fp('24.13'), // Missing or Defective Incorporation by Reference Paragraph
    fp('24.06'), // Missing Statement that the “Sequence Listing” (Paper or PDF) and the CRF are the Same
    fp('24.24.26'), // Missing, Defective, or Incomplete Incorporation by Reference Paragraph
    fp('6.48'), // Model, Exhibit, or Specimen - Applicant Must Make Arrangements for Return
  ]),
  sec('alpha-n', 'N', [
    fp('7.100'), // Name and Number of Examiner to be Contacted
    fp('16.05'), // Name or Denomination for Plant Missing
    fp('7.119'), // Names of Products or Services Incorporating Claimed Invention
    fp('7.120'), // Names of Products or Services Prior Art
    fp('18.20'), // National Stage Election Of Species In 35 USC. 371 Applications
    fp('18.19'), // National Stage Restriction In 35 USC. 371 Applications
    fp('15.48'), // Necessity for Good Drawings
    fp('6.21'), // New Drawings, Competent Draftsperson
    fp('12.154.04'), // New Grounds of Rejection - Heading
    fp('12.256'), // New Grounds of Rejection - Heading
    fp('2.33'), // New Inventor Identified in CPA (for Design Applications)
    fp('26.01'), // New Question of Patentability
    fp('24.18.26'), // No "Sequence Listing XML" part of the disclosure
    fp('26.52.05'), // No Amendment After Action Closing Prosecution
    fp('12.156.01'), // No Comment on Appellant's Claims Appendix
    fp('12.152.01'), // No Comment on Appellant's Statement of Status of Amendments
    fp('12.153.01'), // No Comment on Appellant's Statement of the Summary of Claimed Subject Matter
    fp('24.07'), // No Computer Readable Form (CRF) submitted
    fp('14.26.07'), // No Disclaimer Fee Submitted
    fp('14.30.fti'), // No Evidence of Chain of Title to Assignee - Application Filed Before Sept. 16, 2012
    fp('14.30.01'), // No Evidence of Chain of Title to Assignee (Reexamination Situations)
    fp('12.157.01'), // No Evidence Relied Upon
    fp('26.57.01'), // No Evidence Relied Upon in the Examiner's Answer
    fp('26.65.01'), // No Further Response
    fp('26.60'), // No New Ground of Rejection; no New Finding of Patentability
    fp('26.02'), // No New Question of Patentability
    fp('26.67'), // No Receipt of Rebuttal Brief(s)
    fp('12.150.06'), // No Related Appeals and Interferences Identified
    fp('26.50.06'), // No Related Appeals and Interferences Identified
    fp('12.162.01'), // No Related Proceeding Identified
    fp('26.61.02'), // No Related Proceedings Identified
    fp('24.03'), // No Sequence Listing part of the disclosure and Defective CRF
    fp('24.02'), // No sequence listing part of the disclosure and No CRF
    fp('22.02'), // No Substantial New Question Of Patentability
    fp('8.23.03'), // No Telephone Restriction Permitted, No Attorney or Agent of Record, Practitioner Included in ADS
    fp('26.54.012'), // Nonappealable Issue in Brief
    fp('7.42.02.fti'), // Nonresponsive Submission Filed Under 37 CFR 1.129(a)
    fp('15.25'), // Nonstatutory Double Patenting Rejection (Multiple References)
    fp('14.29.fti'), // Not Recognized as Officer of Assignee - Application Filed Before Sept. 16, 2012,"Sub-Heading" Only
    fp('14.26.03'), // Not Signed
    fp('14.26.06.fti'), // Not Signed by All Owners - Application Filed Before Sept. 16, 2012
    fp('8.21.04'), // Notice of Potential Rejoinder of Process Claims in Ochiai/Brouwer Situation
    fp('7.06'), // Notice re prior art available under both Pre-AIA and AIA
    fp('15.10.15'), // Notice re prior art available under both Pre-AIA and AIA
    fp('26.62'), // Notification regarding Rebuttal Brief
    fp('6.17'), // Numbering of Claims, 37 CFR 1.126
    fp('6.30'), // Numerous Errors in Specification
  ]),
  sec('alpha-o', 'O', [
    fp('7.29.04'), // Objection - Embedded Hyperlinks or Other Browser-Executable Code
    fp('7.43'), // Objection to Claims, Allowable Subject Matter
    fp('7.28'), // OBJECTION TO NEW MATTER ADDED TO SPECIFICATION
    fp('29.60.02'), // Objection to Specification - Missing Figure Descriptions
    fp('15.24'), // Obviousness-Type Double Patenting Rejection (Single Reference)
    fp('15.09.01'), // Offensive Subject Matter
    fp('2.19'), // Overcome Rejection by Translation
  ]),
  sec('alpha-other', 'Other (symbols/numbers)', [
    fp('24.28.26'), // "Sequence Listing XML" bibliographic information does not match application
    fp('24.20.26'), // "Sequence Listing XML" contains errors according to STIC report
    fp('24.27.26'), // "Sequence Listing XML" contains foreign language text
    fp('15.51'), // 35 U.S.C. 112(a) Rejection (Written Description)
    fp('8.30'), // 35 USC 101, Statutory Basis for Double Patenting - Heading Only
    fp('7.30.06'), // 35 USC 112(f) or pre-AIA 35 USC 112, Sixth Paragraph, Invoked Despite Absence of "Means"
    fp('7.30.07'), // 35 USC 112(f) or pre-AIA 35 USC 112, Sixth Paragraph, Not Invoked Despite Presence of "Means" or "Step"
    fp('2.21.01'), // 35 USC 119(a)-(d) or (f), 365(a) or (b), or 386(a) Foreign Priority Claim is Untimely
    fp('15.23'), // 35 USC. 171 Double Patenting (Design-Design)
    fp('15.23.01'), // 35 USC. 171 Provisional Double Patenting (Design-Design)
    fp('15.09'), // 35 USC. 171 Rejection
    fp('14.22.01'), // 35 USC. 251, New Matter
    fp('14.33'), // 37 CFR 3.73 - Establishing Right of Assignee to Prosecute
  ]),
  sec('alpha-p', 'P', [
    fp('7.84.01'), // Paper Is Unsigned
    fp('7.84.01.AE'), // Paper Is Unsigned - Application Under Accelerated Examination
    fp('7.214'), // Papers Not Returned, Pro Se
    fp('26.05'), // Papers to be Submitted in Response to Action
    fp('22.04'), // Papers To Be Submitted In Response To Action
    fp('8.29'), // Patentably Indistinct Claims, Copending Applications
    fp('19.01'), // Period For Comments On Protest By Applicant
    fp('12.120'), // Period For Seeking Court Review Has Lapsed
    fp('12.297'), // Period For Seeking Court Review Has Lapsed
    fp('26.67.01'), // Periods for Seeking Court Review or Rehearing Have Lapsed
    fp('10.30'), // Petition Header Information
    fp('10.20'), // Petition or Request Dismissed, Proper Fee Not Submitted
    fp('7.209'), // Petition to Expunge, Conclusion, Information Made Public
    fp('7.212'), // Petition to Expunge, Conclusion, Information Not Clearly Identified
    fp('7.211'), // Petition to Expunge, Conclusion, Lack Of Clear Statement
    fp('7.207'), // Petition to Expunge, Conclusion, Lacks Fee
    fp('7.208'), // Petition to Expunge, Conclusion, Material to Determination of Patentability
    fp('7.213'), // Petition to Expunge, Conclusion, Missing Statement That Petition Submitted For Party In Interest
    fp('7.210'), // Petition to Expunge, Conclusion, No Commitment To Retain Information
    fp('10.16.01'), // Petition Under 37 CFR 1.324 filed on or after September 16, 2012, Dismissed
    fp('10.16.fti'), // Petition Under 37 CFR 1.324 filed prior to September 16, 2012, Dismissed
    fp('10.17'), // Petition Under 37 CFR 1.324, Denied
    fp('10.13'), // Petition Under 37 CFR 1.324, Granted
    fp('7.206'), // Petition Under 37 CFR 1.59(b) to Expunge Information Dismissed
    fp('7.205'), // Petition Under 37 CFR 1.59(b) to Expunge Information Granted
    fp('7.204'), // Petition Under 37 CFR 1.59(b) to Expunge Information: Decision Held in Abeyance
    fp('2.05'), // Possible Status as Continuation
    fp('2.06'), // Possible Status as Continuation-in-Part
    fp('2.01'), // Possible Status as Divisional
    fp('7.08.fti'), // Pre-AIA 102(a), Activity by Another Before Invention by Applicant
    fp('7.09.fti'), // Pre-AIA 102(b), Activity More Than One Year Prior to Filing
    fp('7.10.fti'), // Pre-AIA 102(c), Invention Abandoned
    fp('7.11.fti'), // Pre-AIA 102(d), Foreign Patenting
    fp('7.13.fti'), // Pre-AIA 102(f), Applicant Not the Inventor
    fp('7.14.fti'), // Pre-AIA 102(g), Priority of Invention
    fp('7.20.04.fti'), // Pre-AIA 103(a) Rejection Using Prior Art Under Pre-AIA 102(e), (f), or (g) That Is Attempted To Be Disqualified Under Pre-AIA 35 USC 103(c) Using the Common Ownership or Assignment Provision
    fp('7.20.05.fti'), // Pre-AIA 103(a) Rejection Using Prior Art Under Pre-AIA 102(e), (f), or (g) That Is Attempted To Be Disqualified Under Pre-AIA 35 USC 103(c) Using the Joint Research Agreement Provisions
    fp('7.20.01.fti'), // Pre-AIA 103(a) Rejection Using Prior Art Under Pre-AIA 102(e), (f), or (g) That Is Not Disqualified Under Pre-AIA 35 USC 103(c) Because Reference Is Prior Art Under Another Subsection of Pre-AIA 35 USC 102
    fp('15.11.fti'), // Pre-AIA 35 USC 102(a) Rejection
    fp('15.12.fti'), // Pre-AIA 35 USC 102(b) Rejection
    fp('15.13.fti'), // Pre-AIA 35 USC 102(c) Rejection
    fp('15.15.03.fti'), // Pre-AIA 35 USC 102(e) provisional rejection - design claimed in an earlier filed design patent application with common inventor and/or assignee
    fp('15.15.fti'), // Pre-AIA 35 USC 102(e) Rejection
    fp('15.15.04.fti'), // Pre-AIA 35 USC 102(e) rejection - design disclosed but not claimed in a patent
    fp('7.12.fti'), // Pre-AIA 35 USC 102(e), Patent Appl. Publication or Patent to Another with Earlier Filing Date in view of the American Inventors Protection Act of 1999 and the Intellectual Property and High Technology Technical Amendments Act of 2002
    fp('15.19.04.fti'), // Pre-AIA 35 USC 102(e)/103(a) Provisional Rejection - design claimed in an earlier filed design patent application with common inventor and/or assignee
    fp('15.19.07.fti'), // Pre-AIA 35 USC 102(e)/103(a) Rejection - Design Claimed in a Design Patent Having an Earlier Prior Art Date and No Common Assignee
    fp('15.19.06.fti'), // Pre-AIA 35 USC 102(e)/103(a) Rejection - Design Claimed in a Design Patent with an Earlier Prior Art Date and Common Assignee
    fp('15.16.fti'), // Pre-AIA 35 USC 102(f) Rejection
    fp('15.17.fti'), // Pre-AIA 35 USC 102(g) Rejection
    fp('15.19.fti'), // Pre-AIA 35 USC 103(a) Rejection (Multiple References)
    fp('15.18.fti'), // Pre-AIA 35 USC 103(a) Rejection (Single Reference)
    fp('15.14.fti'), // Pre-AIA35 USC 102(d)/35 USC 172 Rejection
    fp('15.19.05.fti'), // Pre-AIA35 USC 102(e)/103(a) rejection - design disclosed but not claimed
    fp('7.12.01.fti'), // Pre-AIPA 35 USC 102(e), Patent to Another with Earlier Filing Date, Ref. is a US Patent Issued Directly or Indirectly From a National Stage of, or a Continuing Application Claiming Benefit to, an Intl. Application Having an Intl. Filing Date Prior to 11/29/2000
    fp('15.19.02.fti'), // Preface Pre-AIA 35 USC 102(e)/103(a) rejection - Different inventors, common assignee, obvious designs, no evidence of common ownership at time later design was made
    fp('15.75.fti'), // Preface to Rejection in Alleged CIP Based on Pre-AIA 35 USC 102(d)/35 USC 172
    fp('15.70.fti'), // Preface, Pre-AIA 35 USC 103(a) Rejection
    fp('7.46'), // Prelim. Amend. Unduly Interferes with the Preparation of an Office Action
    fp('14.35'), // Previously Submitted Disclaimer Fee Can Be Applied - Applicant
    fp('14.35.01'), // Previously Submitted Disclaimer Fee Can Be Applied - Patent Owner
    fp('2.40'), // Prior-Filed Appl. Not Entitled to a Filing Date or Basic Filing Fee Not Paid
    fp('15.04'), // Priority Under Bilateral or Multilateral Treaties
    fp('8.17'), // Process and Apparatus
    fp('8.18'), // Product and Process of Making
    fp('8.20'), // Product and Process of Using
    fp('7.109'), // Products and Services Embodying Invention
    fp('15.50.04'), // Proper Drawing Disclosure With Use of Broken Lines
    fp('5.01'), // Proper Heading for Incoming Papers
    fp('15.24.08'), // Provisional Double Patenting Rejection (Design-Utility)
    fp('15.31'), // Provisional Election Required (37 CFR 1.143)
    fp('15.24.04'), // Provisional Nonstatutory Double Patenting Rejection (Multiple References)
    fp('15.24.03'), // Provisional Nonstatutory Double Patenting Rejection (Single Reference)
    fp('15.15.02.fti'), // Provisional Pre-AIA 35 USC 102(e) rejection - design disclosed but not claimed in another application with common inventor and/or assignee
    fp('15.19.03.fti'), // Provisional Pre-AIA 35 USC 102(e)/103(a) rejection - design disclosed but not claimed in another application with common inventor and/or assignee
    fp('8.32'), // Provisional Rejection, 35 USC 101, Double Patenting
    fp('8.35'), // Provisional Rejection, Nonstatutory Double Patenting - No Secondary Reference(s)
    fp('8.37'), // Provisional Rejection, Obviousness Type Double Patenting - with Secondary Reference(s)
    fp('7.15.01.fti'), // Provisional Rejection, Pre-AIA 35 U.S.C. 102(e) - Common Assignee, Common Applicant, or At Least One Common (Joint) Inventor
    fp('7.21.01.fti'), // Provisional Rejection, Pre-AIA 35 USC 103(a), Common Assignee, Common Applicant, or at Least One Common (Joint) Inventor
    fp('6.39'), // PTO No Longer Makes Drawing Changes
  ]),
  sec('alpha-q', 'Q', [
    fp('15.33'), // Qualifying Statement To Be Used In Restriction When A Common Embodiment Is Included In More Than One Group
    fp('7.51'), // Quayle Action
    fp('15.72'), // Quayle Action
    fp('7.51.AE'), // Quayle Action - Application Under Accelerated Examination
  ]),
  sec('alpha-r', 'R', [
    fp('15.67'), // Rationale for 35 USC 103 Rejection (Single Reference)
    fp('6.72.04'), // Read-only Optical Disc Contains Viruses
    fp('6.70.01'), // Read-only Optical Disc Requirements (Amendment Does Not Include Statement that discs are Identical)
    fp('6.72.01'), // Read-only Optical Disc Requirements (Discs Not Identical)
    fp('6.72.05'), // Read-only Optical Disc Requirements (Missing Files on Amended Read-only Optical Disc)
    fp('6.70.02'), // Read-only Optical Disc Requirements (No Listing in Transmittal Letter Submitted With Amendment)
    fp('6.60.02'), // Read-only Optical Disc Requirements (No Listing in Transmittal Letter)
    fp('6.60.01'), // Read-only Optical Disc Requirements (No Statement that discs are Identical)
    fp('6.72.03'), // Read-only Optical Discs Are Not Readable
    fp('8.07'), // Ready for Allowance, Non-elected Claims Withdrawn Without Traverse
    fp('12.150.01'), // Real Party in Interest
    fp('26.50.01'), // Real Party in Interest
    fp('7.66.01'), // Reason Why Affidavit or Declaration Under 37 CFR 1.132 Is Insufficient, Affiant Has Never Seen Invention Before
    fp('7.66.05'), // Reason Why Affidavit or Declaration Under 37 CFR 1.132 Is Insufficient, Conclusion
    fp('7.66.02'), // Reason Why Affidavit or Declaration Under 37 CFR 1.132 Is Insufficient, Invention Works as Intended
    fp('7.66.04'), // Reason Why Affidavit or Declaration Under 37 CFR 1.132 Is Insufficient, No Evidence of Long-felt Need
    fp('7.66.03'), // Reason Why Affidavit or Declaration Under 37 CFR 1.132 Is Insufficient, Refers Only to Invention, Not to Claims
    fp('13.03'), // Reasons for Allowance
    fp('28.03'), // Reasons for Finding A Substantial New Question of Patentability
    fp('28.02'), // Reasons for Finding No Substantial New Question of Patentability
    fp('13.03.01'), // Reasons for Indication of Allowable Subject Matter
    fp('22.16'), // Reasons for Patentability and/or Confirmation
    fp('26.70'), // Reasons for Patentability and/or Confirmation in Inter Partes Reexamination
    fp('22.05'), // Reexamination Based on Reissue Claims
    fp('28.04'), // Reexamination Ordered Pursuant to 35 USC 257
    fp('2.34'), // Reference in CPA to Prior Application (by Amendment to the Specification, for Design Applications)
    fp('2.38'), // Reference to a Non-English Language Provisional Application
    fp('2.15'), // Reference to Prior Application, 35 USC 119(e), 120, 121, 365(c), or 386(c) Benefit
    fp('6.53'), // References Considered in 35 USC. 371 Application Based Upon Search Report - Prior to Allowance
    fp('6.54'), // References Considered in 35 USC. 371 Application Based Upon Search Report - Ready for Allowance
    fp('6.55'), // References Not Considered in 35 USC. 371 Application Based Upon Search Report
    fp('14.01'), // Reissue Application, Applicable Laws and Rules Heading
    fp('7.36.01'), // Rejection 35 USC 112(d) or 35 USC 112 (Pre-AIA), 4th Paragraph - Improper Dependent Claim
    fp('15.38'), // Rejection Maintained
    fp('7.34.15'), // Rejection Under 35 USC 112, Pro Se
    fp('7.05.017'), // Rejection, 35 USC 101, Director Approval for Non-Enumerated Abstract Idea
    fp('8.31'), // Rejection, 35 USC 101, Double Patenting
    fp('7.05'), // Rejection, 35 USC 101, Heading Only (Utility, Non-Statutory, Inoperative)
    fp('7.05.03'), // Rejection, 35 USC 101, Inoperative
    fp('7.05.016'), // Rejection, 35 USC 101, Nonstatutory (Directed to a Judicial Exception without an Inventive Concept/Significantly More)
    fp('7.05.01'), // Rejection, 35 USC 101, Nonstatutory (Not One of the Four Statutory Categories)
    fp('7.05.02'), // Rejection, 35 USC 101, Utility Lacking
    fp('15.21'), // Rejection, 35 USC 112(a) and (b) or Pre-AIA 35 USC 112, First And Second Paragraphs
    fp('7.31.04'), // Rejection, 35 USC 112(a) or 35 USC 112 (Pre-AIA), 1st Paragraph - Best Mode Requirement
    fp('7.31.02'), // Rejection, 35 USC 112(a) or 35 USC 112 (Pre-AIA), 1st Paragraph - Enablement
    fp('7.33.01'), // Rejection, 35 USC 112(a) or 35 USC 112 (Pre-AIA), 1st Paragraph - Essential Subject Matter Missing From Claims (Enablement)
    fp('7.31.03'), // Rejection, 35 USC 112(a) or 35 USC 112 (Pre-AIA), 1st Paragraph - Scope of Enablement
    fp('7.31.01'), // Rejection, 35 USC 112(a) or 35 USC 112 (Pre-AIA), 1st Paragraph, Description Requirement, Including New Matter Situations
    fp('7.31.05'), // Rejection, 35 USC 112(a) or 35 USC 112,(Pre-AIA), 1st Paragraph - Scope of Enablement of a "Single Means" Claim
    fp('16.03'), // Rejection, 35 USC 112(a) or Pre-AIA 35 USC 112, 1st Paragraph, Non-Support for Colors
    fp('29.25'), // Rejection, 35 USC 112(b) - Unclear Use of Coloring (International Design Application)
    fp('29.21'), // Rejection, 35 USC 112(b) - Undescribed Broken Lines (International Design Application)
    fp('29.23'), // Rejection, 35 USC 112(b) - Undescribed Broken Lines as Boundary of Design (International Design Application)
    fp('7.34'), // Rejection, 35 USC 112(b) or 35 USC 112 (Pre-AIA), 2nd Paragraph, Failure to Claim Inventor's Invention
    fp('7.35'), // Rejection, 35 USC 112(b) or 35 USC 112 (Pre-AIA), 2nd Paragraph, Failure to Particularly Point out and Distinctly Claim - Omnibus Claim
    fp('7.34.01'), // Rejection, 35 USC 112(b) or 35 USC 112 (Pre-AIA), 2nd Paragraph, Failure to Particularly Point out and Distinctly Claim (Indefinite)
    fp('15.22'), // Rejection, 35 USC 112(b) or Pre-AIA 35 USC 112, 2nd Paragraph
    fp('15.22.02'), // Rejection, 35 USC 112(b) or Pre-AIA 35 USC 112, 2nd Paragraph ("Or the Like" In Claim)
    fp('15.22.03'), // Rejection, 35 USC 112(b) or Pre-AIA 35 USC 112, 2nd Paragraph (Title Fails to Specify a Known Article of Manufacture)
    fp('15.21.01'), // Rejection, 35 USC 112(b) or Pre-AIA 35 USC 112, Second Paragraph (Additional Information Requested)
    fp('26.03.01'), // Rejection, 35 USC 314(a), Claim Enlarges Scope of Patent
    fp('16.04'), // Rejection, 35 USC. 102
    fp('16.08'), // Rejection, 35 USC. 112
    fp('14.12'), // Rejection, 35 USC. 251, Broad Claims After Two Years
    fp('14.13'), // Rejection, 35 USC. 251, Broad Claims Filed By Assignee
    fp('14.17'), // Rejection, 35 USC. 251, Recapture
    fp('22.11'), // Rejection, 35 USC. 305, Claim Enlarges Scope of Patent
    fp('14.14'), // Rejection, Defective Reissue Oath or Declaration
    fp('7.49'), // Rejection, Disclaimer, Failure to Appeal
    fp('8.36'), // Rejection, Nonstatutory Double Patenting - With Secondary Reference(s)
    fp('8.34'), // Rejection, Nonstatutory Double Patenting- No Secondary Reference(s)
    fp('7.27.fti'), // Rejection, Pre-AIA 35 USC 102 or Pre-AIA 103(a)
    fp('7.15.fti'), // Rejection, Pre-AIA 35 USC 102(a), (b) Patent or Publication, and (g)
    fp('7.16.fti'), // Rejection, Pre-AIA 35 USC 102(b), Public Use or on Sale
    fp('7.17.fti'), // Rejection, Pre-AIA 35 USC 102(c), Abandonment of Invention
    fp('7.18.fti'), // Rejection, Pre-AIA 35 USC 102(d), Foreign Patenting
    fp('7.15.02.fti'), // Rejection, Pre-AIA 35 USC 102(e), Common Assignee, Applicant, or Joint Inventor
    fp('7.15.03.fti'), // Rejection, Pre-AIA 35 USC 102(e), No Common Assignee or Inventor(s)
    fp('7.19.fti'), // Rejection, Pre-AIA 35 USC 102(f), Applicant Not the Inventor
    fp('7.21.fti'), // Rejection, Pre-AIA 35 USC 103(a)
    fp('7.21.02.fti'), // Rejection, Pre-AIA 35 USC 103(a), Common Assignee, Common Applicant, or at Least One Common (Joint) Inventor
    fp('7.22.fti'), // Rejection, Pre-AIA 35 USC 103(a), Further in View Of
    fp('14.21.09.fti'), // Rejection, Pre-AIA 35 USC 251, No Error Without Deceptive Intention - Application filed Before Sept. 16, 2012, External Knowledge
    fp('14.22.fti'), // Rejection, Pre-AIA 35 USC 251, No Error Without Deceptive Intention-- Application filed Before Sept. 16, 2012, Evidence in the Application
    fp('7.34.23'), // Rejections Under 35 USC 112(b) or pre-AIA 35 USC 112, 2nd Para., Claim Limitation is Interpreted under 35 USC 112(f) or pre-AIA 35 USC 112, 6th Para., but Disclosure of the Structure, Material, or Acts for Performing the Function Recited in a Claim Is Lacking, Insufficient, or Not Clearly Linked
    fp('7.34.24'), // Rejections under 35 USC 112(b) or pre-AIA 35 USC 112, 2nd Para., Unclear Whether Claim Limitation Is To Be Interpreted Under 35 USC 112(f) or pre-AIA 35 USC 112, 6th Para. - Result of 3-Prong Test Inconclusive
    fp('12.150.04'), // Related Appeals and Interferences
    fp('26.50.04'), // Related Appeals and Interferences
    fp('12.162'), // Related Proceeding(s) Appendix
    fp('26.61.01'), // Related Proceeding(s) Appendix
    fp('7.34.03'), // Relative Term - Term of Degree Rendering Claim Indefinite
    fp('14.11.01'), // Reminder of Duties under 37 CFR 1.178(b) & 1.56
    fp('6.42'), // Reminder That Applicant must Make Drawing Changes
    fp('6.41'), // Reminder That PTO No Longer Makes Drawing Changes
    fp('15.69.01'), // Remove Indefinite Language ("Or the Like") by Examiner's Amendment
    fp('13.04'), // Reopen Prosecution - After Notice of Allowance
    fp('13.05'), // Reopen Prosecution - Vacate Notice of Allowance
    fp('12.239'), // Reopening of Prosecution After Appeal Brief
    fp('12.187'), // Reopening of Prosecution After Appeal Brief or Reply Brief
    fp('15.05.04'), // Replacement Drawing Sheets Required
    fp('12.182'), // Reply Brief Not Considered
    fp('7.98.01'), // Reply Is Late, Extension of Time Suggested, Pro Se
    fp('7.98.02'), // Reply Is Late, Petition to Revive Suggested, Pro Se
    fp('7.91'), // Reply Is Not Fully Responsive, Extension of Time Suggested
    fp('29.100'), // Reply Reminder
    fp('29.102'), // Reply Reminder for Restriction Requirements Concerning Figure Numbering
    fp('16.12'), // Report from U.S. Dept. if Agriculture
    fp('29.10'), // Reproductions Objected to, Amended Reproductions Do Not Comply With Formal Requirements
    fp('29.11'), // Reproductions Objected to, Design Not Fully Disclosed in Reproductions
    fp('7.42.08.AE'), // Request For Continued Examination W. Submission Under 37 CFR 1.114 - Not Fully Responsive - Application Under Accelerated Examination
    fp('7.42.08'), // Request For Continued Examination With Not Fully Responsive Submission Filed Under 37 CFR 1.114
    fp('7.56.02'), // Request for Deferral of Examination under 37 CFR 1.103(d), Denied
    fp('7.54.01'), // Request for Deferral of Examination under 37 CFR 1.103(d), Granted
    fp('23.01'), // Request for Interference Premature; Examination Not Completed
    fp('7.56.01'), // Request for Suspension of Action under 37 CFR 1.103, Dismissed
    fp('7.56'), // Request For Suspension, Dismissed, Outstanding Office Action
    fp('7.54.02'), // Request for Termination of a Suspension of Action, granted
    fp('2.32'), // Request To Delete a Named Inventor in CPA (for Design Applications)
    fp('12.163'), // Request to Present Oral Arguments
    fp('12.279.03'), // Request to Present Oral Arguments
    fp('26.63'), // Request to Present Oral Arguments
    fp('18.22'), // Requirement for Election and Means for Traversal in National Stage Applications Submitted Under 35 USC 371
    fp('19.02'), // Requirement For Information
    fp('19.02.AE'), // Requirement for Information - Application Under Accelerated Examination
    fp('7.105'), // Requirement for Information, Heading
    fp('7.104.02'), // Requirement for Information, Rescission of Statement Under 37 CFR 1.55 or 1.78
    fp('6.27'), // Requirement for Marked-up Copy of Drawing Corrections
    fp('13.01'), // Requirement for Rewritten Specification
    fp('14.34'), // Requirement for Statement to Record Assignment Submitted with Terminal Disclaimer
    fp('8.23.01'), // Requirement, No Election by Telephone
    fp('8.23'), // Requirement, When Elected by Telephone
    fp('23.04'), // Requiring Applicant to Add Claim to Provoke Interference
    fp('7.98'), // Response Is Late, Extension of Time Suggested
    fp('12.161'), // Response to Argument
    fp('12.261'), // Response to Argument
    fp('26.61'), // Response to Argument
    fp('15.27.07'), // Rest. Not Req. (Change in Appear. & Scope - 1st Action Issue)
    fp('15.27.06'), // Rest. Not Req. (Change in Appear. & Scope - 1st Action Non Issue)
    fp('12.255'), // Restatement of Rejection
    fp('15.27.04'), // Restriction Not Required - Change In Scope (First Action - Non Issue)
    fp('15.27.05'), // Restriction Not Required - Change In Scope (First Action Issue)
    fp('15.27.03'), // Restriction Not Required (First Action - Issue)
    fp('15.27.02'), // Restriction Not Required-Change in Appearance (First Action - Non Issue)
    fp('15.27'), // Restriction Under 35 USC. 121
    fp('15.27.01'), // Restriction Under 35 USC. 121 (Obvious Variations Within Group)
    fp('15.29'), // Restriction Under 35 USC. 121 (Segregable Parts or Combination/Subcombination)
    fp('15.27.08'), // Restriction with Differences in Appearance and Scope
    fp('8.08'), // Restriction, 2 Groupings
    fp('8.09'), // Restriction, 3rd Grouping
    fp('8.10'), // Restriction, 4th Grouping
    fp('8.11'), // Restriction, Additional Groupings
    fp('8.12'), // Restriction, Linking Claims
    fp('7.118'), // Results of Prior Art Search
    fp('26.08'), // Right of Appeal Notice
    fp('2.18'), // Right of Priority under 35 USC 119 (a) - (d)
    fp('13.10'), // Rule 312 Amendment, Issue Fee Paid, No Petition-Fee
  ]),
  sec('alpha-s', 'S', [
    fp('18.07.01'), // Same or Corresponding Technical Feature Lacking Among Groups
    fp('5.01.01'), // Separate Paper Required
    fp('24.22.26'), // Sequence IDs not present in drawings
    fp('24.21.26'), // Sequence IDs not present in specification
    fp('24.11'), // Sequence IDs not present in the drawings
    fp('24.10'), // Sequence IDs not present in the specification
    fp('24.23.26'), // Sequence in specification, drawings, or claims that is not in XML
    fp('24.12'), // Sequences present in the specification or drawings that are not in the CRF or listing
    fp('6.18'), // Series of Singular Dependent Claims
    fp('18.07.02'), // Shared Technical Feature Does Not Make a Contribution Over the Prior Art
    fp('15.08.02'), // Simulation (Entire Article)
    fp('5.05'), // Small Entity Status
    fp('6.61.02'), // Specification Lacking An Incorporation By Reference Statement for Read-only Optical Disc or Text File Submitted Via the USPTO Patent Electronic Filing System
    fp('6.71.02'), // Specification Lacking Incorporation By Reference Statement for Amended or Added Read-only Optical Disc or Text File
    fp('6.61.01'), // Specification Lacking List of Read-only Optical Disc(s) and/or Associated Files
    fp('6.71.01'), // Specification Lacking List of Read-only optical Disc(s) and/or Associated Files (Amendment Filed With Read-only optical Disc(s))
    fp('16.09'), // Specification, Less Than Complete Description
    fp('16.10'), // Specification, Location of Plant Not Disclosed
    fp('16.01'), // Specification, Manner of Asexually Reproducing
    fp('6.29'), // Specification, Spacing of Lines
    fp('16.13'), // Specimens are Required
    fp('12.254.02'), // Statement of Grounds of Rejection - modified
    fp('12.254.01'), // Statement of Grounds of Rejection - not modified
    fp('29.04'), // Statement of Statutory Bases, Improper Inventorship in International Design Application
    fp('7.30.01'), // Statement of Statutory Basis 35 USC 112(a) and 35 USC 112 (Pre-AIA), First Paragraph
    fp('7.04.01'), // Statement of Statutory Basis, 35 USC 101
    fp('7.36'), // Statement of Statutory Basis, 35 USC 112(d) or 35 USC 112 (Pre-AIA), Fourth Paragraph
    fp('7.30.03'), // Statement of Statutory Basis, 35 USC 112(f) or Pre-AIA 35 USC 112, Sixth paragraph
    fp('7.07.fti'), // Statement of Statutory Basis, Pre-AIA 35 USC 102
    fp('7.20.fti'), // Statement of Statutory Basis, Pre-AIA 35 USC 103(a)
    fp('7.30.02'), // Statement of Statutory Basis,35 USC 112(b) and 35 USC 112 (Pre-AIA), Second Paragraph
    fp('26.52'), // Status of Amendments
    fp('12.152'), // Status of Amendments After Final
    fp('12.151'), // Status of Claims
    fp('26.51'), // Status of Claims
    fp('7.103'), // Statute Cited in Prior Action
    fp('15.07.01'), // Statutory Basis, 35 USC. 171
    fp('7.105.01'), // Stipulations of Facts Known to Applicant
    fp('8.16'), // Subcombinations, Useable Together
    fp('6.23'), // Subject Matter Admits of Illustration
    fp('6.23.01'), // Subject Matter Admits of Illustration (No Examination of Claims)
    fp('15.43'), // Subject Matter of Design Patent
    fp('22.14'), // Submission Not Fully Responsive to Non-Final Office Action
    fp('26.06'), // Submission Not Fully Responsive to Office Action
    fp('7.122'), // Submission of Only Pertinent Pages Where Document is Large
    fp('22.01'), // Substantial New Question Of Patentability
    fp('22.01.01'), // Substantial New Question of Patentability Based Solely on Old Art
    fp('12.285'), // Substitute Examiner Answer - On Remand FOR FURTHER CONSIDERATION OF A REJECTION
    fp('6.28.02'), // Substitute Specification Filed Under 37 CFR 1.125(b) and (c) Not Entered
    fp('6.28.01'), // Substitute Specification Required by Examiner
    fp('7.43.04'), // Suggestion of Allowable Drafted Claim(s), Pro Se
    fp('14.36'), // Suggestion that "Applicant" Request a Refund
    fp('14.36.01'), // Suggestion that "Patent Owner" Request a Refund
    fp('15.20.02'), // Suggestion To Overcome Rejection Under 35 U.S.C. 112(a) and (b) or pre-AIA 35 U.S.C. 112, First and Second Paragraphs (Ch. 16 Design Application)
    fp('29.27'), // Suggestion To Overcome Rejection Under 35 USC 112(a) and (b) (International Design Application)
    fp('15.23.02'), // Summary for "Same Invention" - Type Double Patenting Rejections
    fp('12.153'), // Summary of Claimed Subject Matter
    fp('26.53'), // Summary of Claimed Subject Matter
    fp('12.184'), // Supplemental Examiner's Answer - No Option to Reopen Prosecution
    fp('14.05.02.fti'), // Supplemental Oath or Declaration Required Prior to Allowance - Application Filed Before Sept. 16, 2012
    fp('7.147'), // Supplemental Reply Not Approved for Entry
    fp('12.185'), // Supplental Examiner's Answer - On Remand FOR FURTHER CONSIDERATION OF A REJECTION
    fp('15.85'), // Surfaces/Portions of Article Disclaimed
    fp('7.54'), // Suspension of Action, Applicant's Request
    fp('7.52'), // Suspension of Action, Awaiting New Reference
    fp('7.53'), // Suspension of Action, Possible Interference
  ]),
  sec('alpha-t', 'T', [
    fp('6.63.02'), // Table Column/Row Relationship Not Maintained
    fp('6.63.01'), // Table Less Than 51 Pages Submitted Only as Text File
    fp('7.102'), // Telephone Inquiry Contacts- 5/4/9 Schedule
    fp('7.101'), // Telephone Inquiry Contacts- Non 5/4/9 Schedule
    fp('15.28.01'), // Telephone Restriction - Obvious Variations Within Group
    fp('15.28'), // Telephone Restriction Under 35 USC. 121
    fp('15.30'), // Telephone Restriction Under 35 USC. 121 (Segregable Parts or Combination/Subcombination)
    fp('15.28.02'), // Telephone Restriction with Differences in Appearance and Scope
    fp('14.26.10'), // Terminal Disclaimer Identifies Party Who Is Not The Applicant - Application Filed On or After Sept. 16, 2012
    fp('14.24'), // Terminal Disclaimer Not Proper - Introductory Paragraph
    fp('14.25'), // Terminal Disclaimer Not Proper - Introductory Paragraph (Reexamination Only)
    fp('14.26.08'), // Terminal Disclaimer Not Properly Signed - Application Filed On or After Sept. 16, 2012
    fp('14.23'), // Terminal Disclaimer Proper
    fp('14.23.01'), // Terminal Disclaimer Proper (Reexamination Only)
    fp('7.34.02'), // Terminology Used Inconsistent With Accepted Meaning
    fp('7.23.fti'), // Test for Obviousness
    fp('24.05'), // The Sequence Listing part of the disclosure and the CRF are not the same
    fp('6.51'), // Time Limit for Completing Information Disclosure Statement
    fp('23.06.06'), // Time Period for Reply
    fp('26.75'), // Time Period for Response under 37 CFR 41.77(e)
    fp('15.05.01'), // Title of Design Invention
    fp('6.11'), // Title of Invention Is Not Descriptive
    fp('6.11.01'), // Title of Invention, Suggested Change
    fp('6.20'), // Trade Names, Trademarks, and Other Marks Used in Commerce
    fp('15.76'), // Trademark in Drawing
    fp('7.35.01'), // Trademark or Trade Name as a Limitation in the Claim
    fp('7.41.01.fti'), // Transitional After Final Practice, First Submission (37 CFR 1.129(a))
    fp('7.41.02.fti'), // Transitional After Final Practice, Second Submission (37 CFR 1.129(a))
    fp('8.41'), // Transitional Restriction or Election of Species Requirement - pre-GATT Filing
    fp('10.14'), // Treatment of 37 CFR 1.48 Petition Under 37 CFR 1.324, Granted
  ]),
  sec('alpha-u', 'U', [
    fp('7.37.01'), // Unpersuasive Argument- Age of Reference(s)
    fp('7.37.13'), // Unpersuasive Argument- Arguing Against References Individually
    fp('7.37.08'), // Unpersuasive Argument- Arguing Limitations Which Are Not Claimed
    fp('7.37.02'), // Unpersuasive Argument- Bodily Incorporation
    fp('7.37.11'), // Unpersuasive Argument- General Allegation of Patentability
    fp('7.37.03'), // Unpersuasive Argument- Hindsight Reasoning
    fp('7.37.09'), // Unpersuasive Argument- Intended Use
    fp('7.37.10'), // Unpersuasive Argument- Limitation(s) in Preamble
    fp('7.37.04'), // Unpersuasive Argument- No Teaching, Suggestion, or Motivation To Combine
    fp('7.37.05'), // Unpersuasive Argument- Non-analogous Art
    fp('7.37.12'), // Unpersuasive Argument- Novelty Not Clearly Pointed Out
    fp('7.37.06'), // Unpersuasive Argument- Number of References
    fp('7.37.07'), // Unpersuasive Argument- The Invention Obtains Result Not Contemplated by Prior Art
    fp('4.09'), // Unregistered Attorney or Agent
    fp('8.20.02'), // Unrelated Inventions
    fp('8.20.03'), // Unrelated Product and Process Inventions
    fp('7.70.AE'), // Updated AE Support Document Required for Claim Amendments Not Encompassed by Previous Support Document(s) - Application Under Accelerated Examination
    fp('15.50'), // Use of Broken Lines for Indicating Unimportant Features Not Permitted
    fp('15.50.01'), // Use of Broken Lines in Drawing (Ch. 16 Design Application)
    fp('7.71.AE'), // Use Of Proper Document and Fee Codes When Filing A Reply Electronically Via the USPTO Patent Electronic Filing System - Application Under Accelerated Examination
    fp('7.01'), // USE OF UNCONVENTIONAL TERMINOLOGY, CANNOT BE EXAMINED
    fp('7.05.04'), // Utility Rejections Under 35 USC 101 and 35 USC 112(a) or Pre-AIA 35 USC 112, First Paragraph
  ]),
  sec('alpha-v', 'V', [
    fp('15.42'), // Visual Characteristics
  ]),
  sec('alpha-w', 'W', [
    fp('10.18'), // Waiver of Requirements of 37 CFR 1.324 Under 37 CFR 1.183, Dismissed
    fp('7.123'), // Waiver of Timing Fee and Statement Requirements for Certain Information Disclosures
    fp('12.278'), // Warning in Examiner's Answer Containing NSDP Rejection Not Argued
    fp('10.01'), // Withdrawal From Issue, Fee Not Paid
    fp('12.121'), // Withdrawal of Appeal as to Some of the Claims on Appeal
    fp('7.42'), // Withdrawal of Finality of Last Office Action
    fp('7.42.01.fti'), // Withdrawal of Finality of Last Office Action - Transitional Application Under 37 CFR 1.129(a)
    fp('12.154.05'), // Withdrawn Rejections
    fp('12.257'), // Withdrawn Rejections
  ]),
]
