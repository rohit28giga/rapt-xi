export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: string;
  status: 'success' | 'warning' | 'error';
  details: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
  isTyping?: boolean;
}

export enum DemoStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED'
}