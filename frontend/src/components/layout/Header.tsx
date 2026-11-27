// src/components/layout/Header.tsx
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav, site } from '../../content/site';
import ButtonLink from '../ui/ButtonLink';
import Container from '../ui/Container';
import Wordmark from './Wordmark';
import diraMark from '../../assets/dira-mark.webp';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal';

// Gold underline slides in on hover and stays on the active page.
const desktopLink = ({ isActive }: { isActive: boolean }) =>
  `relative rounded px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-gold after:transition-transform after:duration-300 motion-reduce:after:transition-none ${focusRing} ${
    isActive
      ? 'text-teal-dark after:scale-x-100'
      : 'text-navy after:scale-x-0 hover:text-teal hover:after:scale-x-100'
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = nav.filter((item) => !item.cta);
  const cta = nav.find((item) => item.cta);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-navy/10 backdrop-blur transition-[background-color,box-shadow] duration-300 ${
        scrolled ? 'bg-white/90 shadow-md shadow-navy/5' : 'bg-white'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          aria-label={`${site.name} home`}
          className="group flex items-center gap-2.5"
        >
          <img
            src={diraMark}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 transition-transform duration-500 ease-out motion-safe:group-hover:rotate-[8deg] motion-safe:group-hover:scale-105"
          />
          <Wordmark />
        </Link>

        {/* Desktop only. On phones, navigation lives in the bottom bar (MobileNav). */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={desktopLink}>
              {item.label}
            </NavLink>
          ))}
          {cta && (
            <ButtonLink to={cta.to} className="ml-3">
              {cta.label}
            </ButtonLink>
          )}
        </nav>
      </Container>
    </header>
  );
}