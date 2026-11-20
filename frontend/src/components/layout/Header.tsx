// src/components/layout/Header.tsx
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav, site } from '../../content/site';
import ButtonLink from '../ui/ButtonLink';
import Container from '../ui/Container';
import Wordmark from './Wordmark';
import diraMark from '../../assets/dira-mark.webp';

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  `rounded px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
    isActive ? 'text-teal-dark' : 'text-navy hover:text-teal'
  }`;

const mobileLink = ({ isActive }: { isActive: boolean }) =>
  `rounded px-2 py-3 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${isActive ? 'text-teal-dark' : 'text-navy'}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = nav.filter((item) => !item.cta);
  const cta = nav.find((item) => item.cta);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled || open ? 'border-navy/10 shadow-md shadow-navy/5' : 'border-navy/10'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          onClick={close}
          aria-label={`${site.name} home`}
          className="flex items-center gap-2.5"
        >
          <img src={diraMark} alt="" width={40} height={40} className="h-10 w-10" />
          <Wordmark />
        </Link>

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

        <button
          type="button"
          className="-mr-2.5 rounded-lg p-2.5 text-navy transition-colors hover:bg-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-navy/10 bg-white motion-safe:animate-menu-in lg:hidden"
        >
          <Container className="flex flex-col py-4">
            {links.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={mobileLink} onClick={close}>
                {item.label}
              </NavLink>
            ))}
            {cta && (
              <ButtonLink to={cta.to} onClick={close} className="mt-3">
                {cta.label}
              </ButtonLink>
            )}
          </Container>
        </nav>
      )}
    </header>
  );
}