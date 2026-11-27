// src/components/ui/ButtonLink.tsx
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'light' | 'dark';

// Gold is used as a fill with navy text; gold text on white fails contrast.
const variants: Record<Variant, string> = {
  primary: 'bg-gold text-navy hover:bg-gold-dark',
  secondary: 'border border-navy text-navy hover:bg-navy hover:text-white',
  light: 'border border-white text-white hover:bg-white hover:text-navy',
  dark: 'bg-navy text-white hover:bg-navy-dark',
};

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

const isExternal = (to: string) => /^https?:\/\//.test(to);

export default function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg motion-safe:hover:shadow-navy/20 motion-safe:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${variants[variant]} ${className}`;
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link to={to} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}