// src/pages/Contact.tsx
import Container from '../components/ui/Container';
import { services } from '../content/services';
import { contact } from '../content/site';
import { getChannelLinks, whatsappUrl } from '../lib/contact';
import type { ChannelLink } from '../lib/contact';
import { usePageMeta } from '../lib/usePageMeta';
import { openingHours } from '../content/contact';
import Reveal from '../components/ui/Reveal';

const topics = [
  ...services.map(({ id, title, enquiry }) => ({ id, title, enquiry })),
  {
    id: 'general',
    title: 'Something else',
    enquiry: 'Hello Dira, I would like to find out more about your services.',
  },
];

const kindLabels: Record<ChannelLink['kind'], string> = {
  email: 'Email',
  phone: 'Phone',
  whatsapp: 'WhatsApp',
};

const cardClass =
  'flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 transition motion-safe:hover:-translate-y-1 hover:border-teal hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal';

export default function Contact() {
  usePageMeta('Contact', 'Get in touch with Dira Careers & Counselling on WhatsApp, email or phone.');

  const whatsapp = contact.whatsapp;
  const others = getChannelLinks(contact).filter((channel) => channel.kind !== 'whatsapp');
  const hasOthers = others.length > 0 || Boolean(contact.location);

  return (
    <>
      <Container as="section" className="py-16 md:py-20">
        <h1 className="text-4xl font-semibold motion-safe:animate-fade-up md:text-5xl">Get in Touch</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/80 motion-safe:animate-fade-up [animation-delay:150ms]">
          Tell us a little about what you need and we will point you in the right direction. Whether
          you are a learner, a parent, a school or a partner, we would like to hear from you.
        </p>
      </Container>

      {whatsapp && (
        <section className="bg-mist">
          <Container className="py-14 md:py-16">
            <Reveal>
            <h2 className="text-2xl font-semibold">Start a conversation on WhatsApp</h2>
            <p className="mt-3 max-w-2xl text-navy/80">
              Choose a topic and WhatsApp opens with a message ready to send. Please keep your first
              message brief and avoid sharing sensitive personal details.
            </p>
            </Reveal>
            <Reveal delay={120}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <li key={topic.id}>
                  <a
                    href={whatsappUrl(whatsapp, topic.enquiry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group ${cardClass}`}
                  >
                    <span className="h-1 w-10 rounded-full bg-gold" />
                    <h3 className="mt-5 flex-1 text-lg font-semibold">{topic.title}</h3>
                    <span className="mt-6 text-sm font-semibold text-teal-dark group-hover:underline">
                      Chat on WhatsApp →
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {hasOthers && (
        <Container as="section" className="py-14 md:py-16">
          <h2 className="text-2xl font-semibold">{whatsapp ? 'Other ways to reach us' : 'Reach us'}</h2>
          <ul className="mt-6 space-y-3 text-lg">
            {others.map((channel) => (
              <li key={channel.href}>
                <span className="text-navy/70">{kindLabels[channel.kind]}: </span>
                <a
                  href={channel.href}
                  className="font-semibold text-teal-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  {channel.label}
                </a>
              </li>
            ))}
            {contact.location && (
              <li>
                <span className="text-navy/70">Location: </span>
                {contact.location}
              </li>
            )}
          </ul>
        </Container>
      )}

                <h3 className="mt-10 text-xl font-semibold">Opening hours</h3>
          <ul className="mt-4 space-y-2 text-lg">
            {openingHours.map(({ days, hours }) => (
              <li key={days}>
                <span className="text-navy/70">{days}: </span>
                {hours}
              </li>
            ))}
          </ul>

      {!whatsapp && !hasOthers && (
        <Container as="section" className="pb-20">
          <p className="text-lg text-navy/80">Our contact details are being set up. Please check back soon.</p>
        </Container>
      )}
    </>
  );
}