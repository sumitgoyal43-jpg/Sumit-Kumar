
export enum DocumentType {
  UTC = 'UTC Plan',
  INF = 'Infrastructure Plan',
  DOWNTIME = 'Downtime Plan',
  IA = 'IA Approvals Summary',
  UAT = 'UAT Approvals Summary',
}

export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'textarea';
}

export type FormData = {
  [key: string]: string;
};
