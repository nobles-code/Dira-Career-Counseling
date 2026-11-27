// src/components/ui/SlideDots.tsx
interface SlideDotsProps {
  count: number;
  index: number;
  onSelect: (i: number) => void;
  className?: string; // caller sets display + position
}

export default function SlideDots({ count, index, onSelect, className = '' }: SlideDotsProps) {
  if (count < 2) return null;
  return (
    <div role="group" aria-label="Hero photos" className={`items-center ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Show photo ${i + 1} of ${count}`}
          aria-current={i === index}
          onClick={() => onSelect(i)}
          className="group rounded-full p-2 focus-visible:outline-2 focus-visible:outline-gold"
        >
          <span
            className={`block h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-8 bg-gold' : 'w-3 bg-white/50 group-hover:bg-white'
            }`}
          />
        </button>
      ))}
    </div>
  );
}