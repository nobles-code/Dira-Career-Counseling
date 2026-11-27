// src/content/heroSlides.ts
import heroLarge from '../assets/hero-16000.png';
import heroSmall from '../assets/hero-800.png';

export interface HeroSlide {
  src: string;
  srcSet?: string;
}

// Picks up any file named hero-session-*.jpg|jpeg|png|webp in src/assets, in filename order.
const sessionModules = import.meta.glob<string>('../assets/hero-session-*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const sessionSlides: HeroSlide[] = Object.keys(sessionModules)
  .sort()
  .map((path) => ({ src: sessionModules[path] }));

export const heroSlides: HeroSlide[] = [
  { src: heroLarge, srcSet: `${heroSmall} 800w, ${heroLarge} 1600w` },
  ...sessionSlides,
];