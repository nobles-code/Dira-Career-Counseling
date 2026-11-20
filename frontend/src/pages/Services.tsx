// src/pages/Services.tsx
import { Link } from 'react-router-dom';
import ButtonLink from '../components/ui/ButtonLink';
import Container from '../components/ui/Container';
import { contact } from '../content/site';
import { services, servicesClosing, servicesIntro } from '../content/services';
import { usePageMeta } from '../lib/usePageMeta';
import { whatsappUrl } from '../lib/contact';
import ImageFeature from '../components/sections/ImageFeature';
import { featureImages } from '../content/imagery';
import Reveal from '../components/ui/Reveal';

export default function Services() {
  usePageMeta('Services', servicesIntro.body);

  return (
    <>
      <Container as="section" className="py-16 md:py-20">
        <h1 className="text-4xl font-semibold motion-safe:animate-fade-up md:text-5xl">{servicesIntro.heading}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/80 motion-safe:animate-fade-up [animation-delay:150ms]">
          {servicesIntro.body}
        </p>
      </Container>

      {services.map((service, index) => {
        const chat = contact.whatsapp ? whatsappUrl(contact.whatsapp, service.enquiry) : null;
        return (
          <section key={service.id} id={service.id} className={index % 2 === 0 ? 'bg-mist' : 'bg-white'}>
            <Container className="py-14 md:py-16">
              <Reveal className="grid gap-6 md:grid-cols-3 md:gap-12">
                <div>
                  <span className="block h-1 w-10 rounded-full bg-gold" />
                  <h2 className="mt-5 text-2xl font-semibold">{service.title}</h2>
                </div>
                <div className="md:col-span-2">
                  <p className="max-w-2xl leading-relaxed text-navy/80">{service.summary}</p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <ButtonLink to={chat ?? '/contact'}>{service.ctaLabel}</ButtonLink>
                    {chat && (
                      <ButtonLink to="/contact" variant="secondary">
                        Other ways to reach us
                      </ButtonLink>
                    )}
                    <Link
                      to="/#audiences"
                      className="rounded text-sm font-semibold text-teal-dark hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                    >
                      ← Who we work with
                    </Link>
                  </div>
                </div>
                </Reveal>
            </Container>
          </section>
        );
      })}
    <ImageFeature {...featureImages.services} />
      <Container as="section" className="py-16 text-center">
        <Reveal>
          <p className="mx-auto max-w-3xl font-serif text-xl leading-relaxed">{servicesClosing}</p>
          <ButtonLink to="/contact" className="mt-8">
            Get in Touch
          </ButtonLink>
        </Reveal>
      </Container>
    </>
  );
}