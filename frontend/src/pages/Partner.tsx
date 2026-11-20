// src/pages/Partner.tsx
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ui/ButtonLink';
import Container from '../components/ui/Container';
import { partner } from '../content/partner';
import { contact } from '../content/site';
import { whatsappUrl } from '../lib/contact';
import { usePageMeta } from '../lib/usePageMeta';
import ImageFeature from '../components/sections/ImageFeature';
import { featureImages } from '../content/imagery';
import Reveal from '../components/ui/Reveal';


const enquiry = (partnerType?: string) =>
  partnerType
    ? `Hello Dira, I would like to explore a partnership.\nPartner type: ${partnerType}\nOrganisation:`
    : 'Hello Dira, I would like to explore a partnership.';

const card = 'flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6';
const interactive =
  'transition motion-safe:hover:-translate-y-1 hover:border-teal hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal';
const textLink =
  'rounded text-sm font-semibold text-teal-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal';

export default function Partner() {
  usePageMeta(
    'Partner With Us',
    'Partner with Dira Careers & Counselling to widen access to career guidance, mentorship and opportunity.',
  );

  const whatsapp = contact.whatsapp;
  const chat = whatsapp ? whatsappUrl(whatsapp, enquiry()) : null;

  return (
    <>
      <section className="bg-navy text-white">
        <Container className="py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold motion-safe:animate-fade-up">{partner.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight motion-safe:animate-fade-up [animation-delay:120ms] sm:text-5xl">

            {partner.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 motion-safe:animate-fade-up [animation-delay:240ms]">
            {partner.intro}
          </p>
        </Container>
      </section>

      <ImageFeature {...featureImages.partner} />
      <Container as="section" className="py-14 md:py-20">
        <h2 className="text-3xl font-semibold">Who We Partner With</h2>
        {whatsapp && (
          <p className="mt-3 max-w-2xl text-navy/80">
            Choose the option that fits you best and WhatsApp opens with a message ready to send.
          </p>
        )}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partner.partnerTypes.map((partnerType) => (
            <li key={partnerType}>
              {whatsapp ? (
                <a
                  href={whatsappUrl(whatsapp, enquiry(partnerType))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${card} ${interactive}`}
                >
                  <span className="h-1 w-10 rounded-full bg-gold" />
                  <h3 className="mt-5 flex-1 text-lg font-semibold">{partnerType}</h3>
                  <span className="mt-6 text-sm font-semibold text-teal-dark group-hover:underline">
                    Start a conversation →
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              ) : (
                <div className={card}>
                  <span className="h-1 w-10 rounded-full bg-gold" />
                  <h3 className="mt-5 text-lg font-semibold">{partnerType}</h3>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>

      <section className="bg-mist">
        <Container className="py-14 md:py-20">
          <p className="max-w-3xl text-lg leading-relaxed text-navy/85">{partner.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink to={chat ?? '/contact'}>Start a partnership conversation</ButtonLink>
            {chat && (
              <ButtonLink to="/contact" variant="secondary">
                Other ways to reach us
              </ButtonLink>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/services" className={textLink}>
              Explore our services
            </Link>
            <Link to="/about#inclusion" className={textLink}>
              Our commitment to inclusion
            </Link>
          </div>
        </Container>
      </section>

      <Container as="section" className="py-16 text-center md:py-20">
        <span className="mx-auto block h-1 w-12 rounded-full bg-gold" />
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-3xl font-serif text-2xl leading-relaxed">{partner.closingLine}</p>
        </Reveal>
      </Container>
    </>
  );
}