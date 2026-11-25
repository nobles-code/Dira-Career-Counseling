// src/types/content.ts
export type ServiceId =
  | 'career-guidance'
  | 'counselling'
  | 'parent-education'
  | 'school-programmes'
  | 'personal-development'
  | 'community-outreach';


export interface NavItem {
  label: string;
  to: string;
  cta?: boolean;
}

export interface Cta {
  label: string;
  to: string;
}

export interface Service {
  id: ServiceId;
  title: string;
  summary: string;
  ctaLabel: string;
  enquiry: string;
}

export interface Audience {
  id: string;
  label: string;
  summary: string;
  to: string;
  ctaLabel: string;
}

export interface Principle {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string | null;
  bio: string[];
}

export interface ContactChannels {
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  location: string | null;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'youtube' | 'x' | 'tiktok';
  url: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface AudienceSegment {
  label: string;
  summary: string;
}

export interface FrameworkStage {
  step: number;
  title: string;
  tagline: string;
  body: string[];
  listHeading: string;
  points: string[];
}
export interface ImageFeatureContent {
  image: string;
  alt: string;
  width: number;
  height: number;
  eyebrow: string;
  heading: string;
  body: string[];
  points?: string[];
  reverse?: boolean;
  tone?: 'white' | 'mist';
}