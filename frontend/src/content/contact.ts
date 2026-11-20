// src/content/contact.ts
import type { ContactChannels } from '../types/content';

export const contact: ContactChannels = {
  email: 'diracareersandcounselling@gmail.com',
  phone: '+254 786 338 544',
  // Assumes the same number is on WhatsApp. Change if the client uses a different one.
  whatsapp: '+254 786 338 544',
  location: null,
};

export interface OpeningHours {
  days: string;
  hours: string;
}

export const openingHours: OpeningHours[] = [
  { days: 'Monday – Friday', hours: '8:00am – 5:00pm' },
  { days: 'Saturday', hours: '9:00am – 1:00pm' },
];