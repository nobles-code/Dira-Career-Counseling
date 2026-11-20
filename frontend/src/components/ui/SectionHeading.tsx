// src/components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  heading: string;
  intro?: string;
}

export default function SectionHeading({ heading, intro }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold sm:text-4xl">{heading}</h2>
      <span className="mt-4 block h-1 w-14 rounded-full bg-gold" />
      {intro && <p className="mt-5 text-lg leading-relaxed text-navy/85">{intro}</p>}
    </div>
  );
}