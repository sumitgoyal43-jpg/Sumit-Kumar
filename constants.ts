
import { DocumentType, FormField } from './types';

export const DOCUMENT_TYPES: DocumentType[] = [
  DocumentType.UTC,
  DocumentType.INF,
  DocumentType.DOWNTIME,
  DocumentType.IA,
  DocumentType.UAT,
];

export const FORM_CONFIG: Record<DocumentType, FormField[]> = {
  [DocumentType.UTC]: [
    { id: 'projectName', label: 'Project Name', placeholder: 'e.g., Phoenix Rises', type: 'text' },
    { id: 'crqNumber', label: 'Change Request (CRQ) Number', placeholder: 'e.g., CRQ1234567', type: 'text' },
    { id: 'releaseDate', label: 'Target Release Date', placeholder: 'e.g., 2024-12-01', type: 'text' },
    { id: 'testers', label: 'Testers Involved', placeholder: 'e.g., John Doe, Jane Smith', type: 'text' },
    { id: 'testScenarios', label: 'Summary of Test Scenarios', placeholder: 'Describe the key user journeys and functionalities being tested.', type: 'textarea' },
  ],
  [DocumentType.INF]: [
    { id: 'projectName', label: 'Project Name', placeholder: 'e.g., Project Titan', type: 'text' },
    { id: 'crqNumber', label: 'Change Request (CRQ) Number', placeholder: 'e.g., CRQ1234567', type: 'text' },
    { id: 'serversAffected', label: 'Servers Affected', placeholder: 'List server hostnames or IPs', type: 'textarea' },
    { id: 'servicesToRestart', label: 'Services to Restart', placeholder: 'e.g., Apache Tomcat on Server A, Nginx on Server B', type: 'textarea' },
    { id: 'requiredConfigs', label: 'New/Modified Configurations', placeholder: 'e.g., Update config.xml with new database connection string', type: 'textarea' },
    { id: 'validationSteps', label: 'Post-Change Validation Steps', placeholder: 'e.g., 1. Curl health check endpoint. 2. Verify service status.', type: 'textarea' },
  ],
  [DocumentType.DOWNTIME]: [
    { id: 'projectName', label: 'Project Name', placeholder: 'e.g., Eagle Eye Upgrade', type: 'text' },
    { id: 'crqNumber', label: 'Change Request (CRQ) Number', placeholder: 'e.g., CRQ1234567', type: 'text' },
    { id: 'startTime', label: 'Downtime Start (UTC)', placeholder: 'e.g., 2024-11-20 02:00 UTC', type: 'text' },
    { id: 'endTime', label: 'Downtime End (UTC)', placeholder: 'e.g., 2024-11-20 04:00 UTC', type: 'text' },
    { id: 'affectedSystems', label: 'Affected Systems & User Impact', placeholder: 'e.g., API Gateway will be unavailable. Users cannot log in.', type: 'textarea' },
    { id: 'technicalLead', label: 'Technical Lead Contact', placeholder: 'e.g., Alex Ray (alex.ray@example.com)', type: 'text' },
    { id: 'rollbackProcedure', label: 'High-Level Rollback Procedure', placeholder: 'e.g., 1. Revert git deployment tag. 2. Restore database from pre-change snapshot.', type: 'textarea' },
  ],
  [DocumentType.IA]: [
    { id: 'projectName', label: 'Project Name', placeholder: 'e.g., Compliance Dashboard', type: 'text' },
    { id: 'crqNumber', label: 'Change Request (CRQ) Number', placeholder: 'e.g., CRQ1234567', type: 'text' },
    { id: 'approvers', label: 'Approver Names & Roles', placeholder: 'e.g., Sarah Chen (Security Lead), Mike Brown (Architecture)', type: 'textarea' },
    { id: 'approvalDate', label: 'Approval Date(s)', placeholder: 'e.g., 2024-10-15', type: 'text' },
    { id: 'risksDiscussed', label: 'Key Considerations & Risks Discussed', placeholder: 'e.g., Discussed impact on data retention policy. Mitigation: Implemented data masking.', type: 'textarea' },
  ],
  [DocumentType.UAT]: [
    { id: 'projectName', label: 'Project Name', placeholder: 'e.g., Customer Portal v2', type: 'text' },
    { id: 'crqNumber', label: 'Change Request (CRQ) Number', placeholder: 'e.g., CRQ1234567', type: 'text' },
    { id: 'businessApprovers', label: 'Business Approvers & Titles', placeholder: 'e.g., Emily White (Director of Sales)', type: 'textarea' },
    { id: 'signOffDate', label: 'Sign-off Date', placeholder: 'e.g., 2024-11-05', type: 'text' },
    { id: 'uatScope', label: 'Scope of UAT', placeholder: 'e.g., End-to-end testing of the new checkout flow by the sales team.', type: 'textarea' },
    { id: 'outstandingDefects', label: 'Outstanding Defects (if any)', placeholder: 'e.g., Minor UI alignment issue on Firefox (Defect #987), planned for next sprint.', type: 'textarea' },
  ],
};

export const PROMPT_INSTRUCTIONS: Record<DocumentType, string> = {
  [DocumentType.UTC]: 'Generate a formal User Test Case (UTC) Plan. The document should be structured for clarity and completeness. Include sections for: Introduction/Purpose, Scope (In-Scope and Out-of-Scope), Test Environment Details, Test Schedule, Roles and Responsibilities of the testers, a summary of the Test Scenarios based on the user input, and formal Entry/Exit Criteria for the testing phase.',
  [DocumentType.INF]: 'Generate a formal Infrastructure Plan for a change request. This document details the technical changes to the infrastructure. Include sections for: Change Overview, Impacted Infrastructure (listing servers, databases, etc.), Detailed Implementation Steps (including pre-change checks, execution steps, and post-change validation), a Communication Plan, and a Rollback Plan.',
  [DocumentType.DOWNTIME]: 'Generate a formal Downtime Plan. This document is critical for communicating service unavailability. It must be clear and precise. Include sections for: Purpose of the Downtime, a comprehensive list of Affected Systems and Services, the exact Downtime Window (Start and End in UTC), a detailed Communication Plan (for pre-downtime, during, and post-downtime notifications), a list of Key Contacts (Technical, Business, Communication), and a clear Rollback Procedure.',
  [DocumentType.IA]: 'Generate a formal Impact Assessment (IA) Approvals Summary. This document serves as a record of the necessary approvals from various stakeholders. Structure it with an Introduction, a summary of the change, a section listing the required approvals (e.g., Security, Architecture, Data Governance), and for each, list the Approver, Role, Date of Approval, and a summary of Key Considerations or Risks that were discussed and accepted.',
  [DocumentType.UAT]: 'Generate a formal User Acceptance Testing (UAT) Approvals Summary. This document confirms that business stakeholders have tested and approved the changes. Include sections for: Introduction, Scope of UAT Conducted, a summary of the UAT Results, details of any Outstanding Defects (and their agreed resolution), and a formal Sign-off section listing the Business Approvers, their titles, and the date of sign-off.',
};
