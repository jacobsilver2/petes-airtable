export interface AirtableRecord {
  id: string;
  data: AirtableData;
}

export interface AirtableData {
  Name?: string;
  Content?: string;
  display?: boolean;
  type?: string;
  website?: string;
  email?: string;
  order?: number;
  Description?: string;
  Price?: string;
  width?: number;
  height?: number;
  Attachments?: AirtableAttachment[];
  [key: string]: any;
}

export interface AirtableAttachment {
  url: string;
  filename: string;
  type: string;
  size: number;
  width?: number;
  height?: number;
}

export interface CalendarEvent {
  id: string;
  fields: {
    Name: string;
    Date: string;
    'Act Image'?: AirtableAttachment[];
    'Act Hosted'?: string[];
    'Act Blurb'?: string[];
    'Act Website'?: string[];
    'Act Soundcloud'?: string[];
    'All Day'?: boolean;
    Ticketed?: boolean;
    'Ticket Price'?: number;
  };
}

export interface FormData {
  name: string;
  email: string;
  message?: string;
  [key: string]: any;
}

export interface PageProps {
  children?: React.ReactNode;
}

export interface LayoutProps {
  children: React.ReactNode;
  fluid?: string | null;
  text?: string;
  subText?: string;
  maxWidth?: string;
}