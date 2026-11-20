// src/lib/contact.ts
import type { ContactChannels, SocialLink } from '../types/content';

export interface ChannelLink {
  kind: 'email' | 'phone' | 'whatsapp';
  label: string;
  href: string;
}

// wa.me needs digits only, in international format (2547XXXXXXXX). A local 07XX number
// is converted to Kenya's 254 prefix so a number copied as-is from the client still works.
const whatsappDigits = (number: string) => {
  const digits = number.replace(/\D/g, '');
  return digits.startsWith('0') ? `254${digits.slice(1)}` : digits;
};

// The optional message arrives prefilled in the chat; the visitor still presses send.
export const whatsappUrl = (number: string, message?: string) => {
  const base = `https://wa.me/${whatsappDigits(number)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
export const telUrl = (number: string) =>
  `tel:${number.replace(/[^\d+]/g, '')}`;

export function getChannelLinks(contact: ContactChannels): ChannelLink[] {
  const links: ChannelLink[] = [];
  if (contact.email) {
    links.push({ kind: 'email', label: contact.email, href: `mailto:${contact.email}` });
  }
  if (contact.phone) {
    links.push({ kind: 'phone', label: contact.phone, href: telUrl(contact.phone) });
  }
  if (contact.whatsapp) {
    links.push({ kind: 'whatsapp', label: 'WhatsApp', href: whatsappUrl(contact.whatsapp) });
  }
  return links;
}

export const socialLabels: Record<SocialLink['platform'], string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  x: 'X',
  tiktok: 'TikTok',
};