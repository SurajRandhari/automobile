export interface PhoneEntry {
  label: string;
  number: string;
}

export interface SiteInfo {
  phones: PhoneEntry[];
  email?: string;
}
