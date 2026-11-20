// src/lib/usePageMeta.ts
import { useEffect } from 'react';
import { site } from '../content/site';

// Home passes no title and gets the brand line; other pages get "Page | Brand".
export function usePageMeta(title?: string, description: string = site.description) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${site.name}`
      : `${site.name} | ${site.tagline}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description);
  }, [title, description]);
}