// src/components/layout/Wordmark.tsx
import { site } from '../../content/site';

// Text stand-in for the logo image until the cropped asset is added.
const descriptor = site.name.replace(site.shortName, '').trim();

export default function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-serif text-3xl font-semibold ${light ? 'text-white' : 'text-navy'}`}>
        {site.shortName}
      </span>
      <span
        className={`mt-1 text-[0.7rem] font-medium uppercase tracking-wider ${light ? 'text-white/80' : 'text-navy/80'}`}
      >
        {descriptor}
      </span>
    </span>
  );
}