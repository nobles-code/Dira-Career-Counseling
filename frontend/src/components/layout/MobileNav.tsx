// src/components/layout/MobileNav.tsx
import { useEffect, useState, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { nav } from '../../content/site';
import ButtonLink from '../ui/ButtonLink';

type IconName = 'home' | 'about' | 'services' | 'approach' | 'partner' | 'contact' | 'menu' | 'dot';

const icons: Record<IconName, ReactNode> = {
  home: <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />,
  about: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </>
  ),
  services: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  approach: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  partner: (
    <>
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </>
  ),
  contact: <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" />,
  menu: (
    <>
      <circle cx="5" cy="12" r="1.2" />
      <circle cx="12" cy="12" r="1.2" />
      <circle cx="19" cy="12" r="1.2" />
    </>
  ),
  dot: <circle cx="12" cy="12" r="3" />,
};

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

// Short, fixed labels by route so the bar never overflows, whatever the nav copy says.
const meta: Record<string, { label: string; icon: IconName }> = {
  '/': { label: 'Home', icon: 'home' },
  '/about': { label: 'About', icon: 'about' },
  '/services': { label: 'Services', icon: 'services' },
  '/approach': { label: 'Approach', icon: 'approach' },
  '/partner': { label: 'Partner', icon: 'partner' },
  '/contact': { label: 'Contact', icon: 'contact' },
};

const TAB_PATHS = ['/', '/services', '/about', '/contact'];

const describe = (to: string, fallback: string) => meta[to] ?? { label: fallback, icon: 'dot' as IconName };

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-teal';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const byPath = new Map(nav.map((item) => [item.to, item]));
  const tabs = TAB_PATHS.filter((p) => byPath.has(p)).map((p) => ({ to: p, ...describe(p, byPath.get(p)!.label) }));
  const pages = nav.filter((item) => !item.cta);
  const cta = nav.find((item) => item.cta);

  return (
    <>
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/90 shadow-[0_-6px_20px_-12px] shadow-navy/20 backdrop-blur lg:hidden"
      >
        <div className="mx-auto grid h-16 max-w-lg grid-cols-5 pb-[env(safe-area-inset-bottom)]">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === '/'}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center gap-1 text-[0.7rem] font-medium transition-colors ${focusRing} ${
                  isActive ? 'text-teal-dark' : 'text-navy/70 active:text-teal'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    aria-hidden="true"
                    className={`absolute top-0 h-0.5 w-8 rounded-full bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                  <span className={`transition-transform duration-300 ${isActive ? '-translate-y-0.5' : ''}`}>
                    <Icon name={tab.icon} />
                  </span>
                  {tab.label}
                </>
              )}
            </NavLink>
          ))}
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className={`flex flex-col items-center justify-center gap-1 text-[0.7rem] font-medium text-navy/70 transition-colors active:text-teal ${focusRing}`}
          >
            <Icon name="menu" />
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Site menu" className="fixed inset-0 z-50 lg:hidden">
          <div
            aria-hidden="true"
            onClick={close}
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm motion-safe:animate-fade-in"
          />
          <div className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-3 shadow-2xl motion-safe:animate-sheet-up">
            <div className="relative mb-4 flex items-center justify-center">
              <span aria-hidden="true" className="h-1.5 w-10 rounded-full bg-navy/15" />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                autoFocus
                className={`absolute right-[-0.5rem] top-[-0.25rem] rounded-full p-2 text-navy transition-colors hover:bg-mist ${focusRing}`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {pages.map((item) => {
                const { icon } = describe(item.to, item.label);
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={close}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl border p-4 text-sm font-semibold transition-colors ${focusRing} ${
                        isActive
                          ? 'border-gold bg-gold/10 text-teal-dark'
                          : 'border-navy/10 text-navy active:bg-mist'
                      }`
                    }
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-teal">
                      <Icon name={icon} />
                    </span>
                    <span className="leading-tight">{item.label}</span>
                  </NavLink>
                );
              })}
            </div>

            {cta && (
              <ButtonLink to={cta.to} onClick={close} className="mt-4 w-full">
                {cta.label}
              </ButtonLink>
            )}
          </div>
        </div>
      )}
    </>
  );
}