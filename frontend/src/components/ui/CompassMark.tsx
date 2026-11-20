// src/components/ui/CompassMark.tsx
export default function CompassMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
      <path d="M100 24 L116 100 L100 118 L84 100 Z" className="fill-gold" />
      <path d="M100 176 L116 100 L100 118 L84 100 Z" className="fill-teal" />
      <circle cx="100" cy="100" r="7" fill="#fff" />
    </svg>
  );
}