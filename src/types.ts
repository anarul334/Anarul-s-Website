export type Language = 'en' | 'bn';

export type Theme = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  iconName: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  details: {
    en: string[];
    bn: string[];
  };
}

export interface TimelineItem {
  id: string;
  period: string;
  title: {
    en: string;
    bn: string;
  };
  organization: {
    en: string;
    bn: string;
  };
  details?: {
    en: string;
    bn: string;
  };
  grade?: string;
  type: 'experience' | 'training' | 'education';
}

export interface CertificateItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  issuer: {
    en: string;
    bn: string;
  };
  year: string;
  grade?: string;
  imageUrl?: string;
  verificationId?: string;
}

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  age: string;
  gender: 'male' | 'female' | 'other';
  problem: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'done' | 'cancelled';
  createdAt: string;
  notes?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: {
    en: string;
    bn: string;
  };
  category: {
    en: string;
    bn: string;
  };
  summary: {
    en: string;
    bn: string;
  };
  content: {
    en: string;
    bn: string;
  };
  date: string;
  readTime: string;
  author: string;
}

export interface Testimonial {
  id: string;
  name: string;
  village: {
    en: string;
    bn: string;
  };
  treatment: {
    en: string;
    bn: string;
  };
  comment: {
    en: string;
    bn: string;
  };
  rating: number;
  date: string;
  status: 'approved' | 'pending';
}

export interface ClinicHours {
  regularDays: {
    en: string;
    bn: string;
  };
  regularTime: {
    en: string;
    bn: string;
  };
  fridayStatus: {
    en: string;
    bn: string;
  };
  emergencyNotice: {
    en: string;
    bn: string;
  };
}

export interface ContactInfo {
  practitionerName: string;
  banglaName: string;
  titleEn: string;
  titleBn: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  addressEn: string;
  addressBn: string;
  pharmacyEn: string;
  pharmacyBn: string;
  email: string;
  regNumber: string;
}
