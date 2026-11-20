// src/components/ui/FloatingChat.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { contact } from '../../content/site';
import { whatsappUrl } from '../../lib/contact';

const message = '';

export default function FloatingChat() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!contact.whatsapp || pathname === '/contact') return null;

  return (
    <a
      href={whatsappUrl(contact.whatsapp, message)}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label="Chat with Dira on WhatsApp (opens in a new tab)"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
      className={`group fixed right-4 z-40 flex items-center gap-2 rounded-full bg-teal-dark px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy/25 transition duration-300 hover:bg-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:right-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}