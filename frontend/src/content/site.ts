// src/content/site.ts
import type { NavItem, SocialLink } from '../types/content';

export { contact } from './contact';

export const site = {
  name: 'Dira Careers & Counselling',
  shortName: 'Dira',
  tagline: 'Clarity. Confidence. Purpose.',
  description:
    'Career guidance, parent education, school career programmes and mentorship that help learners and families make informed decisions about education, careers and life.',
  url: 'https://diracareersandcounselling.co.ke',
};

export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Partner With Us', to: '/partner' },
  { label: 'Contact', to: '/contact', cta: true },
];

export const socials: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://www.facebook.com/people/Dira-Careers-Counselling/61595996518773/',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/diracareersandcounselling/',
  },
];