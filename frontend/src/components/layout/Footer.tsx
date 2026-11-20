// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { contact, nav, site, socials } from '../../content/site';
import { getChannelLinks, socialLabels } from '../../lib/contact';
import Container from '../ui/Container';
import Wordmark from './Wordmark';
import diraMark from '../../assets/dira-mark.webp';
import { openingHours } from '../../content/contact';

const heading = 'font-sans text-sm font-semibold uppercase tracking-wider text-gold';
const linkClass = 'text-white/80 transition-colors hover:text-white';

export default function Footer() {
  const channels = getChannelLinks(contact);
  const hasContact = channels.length > 0 || Boolean(contact.location);

  return (
    <footer className="bg-navy-dark text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={diraMark}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-white p-0.5"
            />
            <Wordmark light />
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/80">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className={heading}>Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {channels.map((channel) => (
              <li key={channel.href}>
                <a href={channel.href} className={linkClass}>
                  {channel.label}
                </a>
              </li>
            ))}
            {contact.location && <li className="text-white/80">{contact.location}</li>}
            {!hasContact && (
              <li>
                <Link to="/contact" className={linkClass}>
                  Contact us
                </Link>
              </li>
            )}
          </ul>
          <h3 className="mt-6 text-sm font-semibold text-white">Opening hours</h3>
          <ul className="mt-2 space-y-1 text-sm text-white/80">
            {openingHours.map(({ days, hours }) => (
              <li key={days}>
                {days}: {hours}
              </li>
            ))}
          </ul>

          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {socials.map((social) => (
                <li key={social.platform}>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {socialLabels[social.platform]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>

      <div className="border-t border-white/10 pb-24 pt-6 text-center text-xs text-white/60 sm:pb-6">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}