// src/pages/About.tsx
import { Link } from 'react-router-dom';
import CtaBand from '../components/sections/CtaBand';
import CompassMark from '../components/ui/CompassMark';
import Container from '../components/ui/Container';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import {
  about,
  founder,
  inclusion,
  mission,
  partnerships,
  team,
  values,
  vision,
  whoWeServe,
  whyDira,
} from '../content/about';
import { usePageMeta } from '../lib/usePageMeta';

const bodyText = 'text-lg leading-relaxed text-navy/85';

const Dot = () => (
  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
);

export default function About() {
  usePageMeta('About');
  const [lead, ...story] = about.story;
  const founderRole = founder.title.split(' | ')[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 text-white md:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold motion-safe:animate-fade-up">
            {about.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight motion-safe:animate-fade-up [animation-delay:120ms] sm:text-5xl">
            {about.heading}
          </h1>
          <p className="mt-4 font-serif text-xl text-gold/90 motion-safe:animate-fade-up [animation-delay:180ms]">
            {about.tagline}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 motion-safe:animate-fade-up [animation-delay:240ms]">
            {lead}
          </p>
        </Container>
      </section>

      {/* Story + name meaning */}
      <section className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className={`space-y-5 lg:col-span-2 ${bodyText}`}>
            {story.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="self-start">
            <aside className="rounded-2xl bg-mist p-8 text-center">
              <CompassMark className="mx-auto h-28 w-28 text-navy/40" />
              <p className="mt-4 font-serif text-5xl font-semibold">{about.nameMeaning.word}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-teal-dark">
                {about.nameMeaning.language} for “{about.nameMeaning.meaning}”
              </p>
            </aside>
          </Reveal>
        </Container>
      </section>

      {/* Why Dira exists */}
      <section className="bg-mist py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading heading={whyDira.heading} />
          </Reveal>
          <div className={`space-y-5 lg:col-span-3 ${bodyText}`}>
            {whyDira.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p
                  className={
                    paragraph === 'Dira exists to help bridge these gaps.'
                      ? 'font-serif text-2xl text-teal-dark'
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal>
              <div className="rounded-2xl bg-navy p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                  {whyDira.convictionLead}
                </p>
                <p className="mt-3 font-serif text-2xl leading-snug">{whyDira.conviction}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision + Mission */}
      <section className="py-16 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {[vision, mission].map((item, index) => (
            <Reveal key={item.heading} delay={index * 140} className="h-full">
              <div className="h-full rounded-2xl border border-navy/10 border-t-4 border-t-gold bg-white p-8 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                <h2 className="text-2xl font-semibold">{item.heading}</h2>
                <p className={`mt-4 ${bodyText}`}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Core values */}
      <section className="bg-mist py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading heading={values.heading} />
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.items.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 90} className="h-full">
                  <div className="h-full rounded-2xl bg-white p-7 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                    <span className="block h-1 w-10 rounded-full bg-gold" />
                    <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
                    <p className="mt-3 leading-relaxed text-navy/80">{value.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Who we serve */}
      <section id="who-we-serve" className="py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading heading={whoWeServe.heading} intro={whoWeServe.intro} />
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.items.map((item, index) => (
              <li key={item.label}>
                <Reveal delay={index * 90} className="h-full">
                  <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 transition hover:border-teal hover:shadow-lg">
                    <h3 className="text-lg font-semibold">{item.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/80">{item.summary}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Inclusion */}
      <section id="inclusion" className="bg-mist py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading heading={inclusion.heading} />
            <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-teal-dark">
              {inclusion.body[0]}
            </p>
          </Reveal>
          <div className={`mt-8 grid gap-6 md:grid-cols-2 ${bodyText}`}>
            {inclusion.body.slice(1).map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 120}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold">{inclusion.commitmentsHeading}</h3>
              <ul className="mt-4 space-y-3 text-navy/85">
                {inclusion.commitments.map((commitment) => (
                  <li key={commitment} className="flex items-start gap-3">
                    <Dot />
                    {commitment}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <p className={`mt-8 max-w-3xl ${bodyText}`}>{inclusion.closing}</p>
          </Reveal>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <Reveal>
            <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
              {founder.photo ? (
                <img
                  src={founder.photo}
                  alt={`${founder.name}, ${founderRole}`}
                  className="aspect-square w-full rounded-3xl object-cover object-top shadow-lg"
                />
              ) : (
                <div className="flex aspect-square items-center justify-center rounded-3xl bg-navy font-serif text-9xl text-gold">
                  {founder.name[0]}
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">
              {founder.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{founder.name}</h2>
            <p className="mt-2 font-medium text-teal-dark">{founder.title}</p>
            <ul className="mt-4 space-y-1 text-navy/85">
              {founder.credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2">
                  <Dot />
                  {credential}
                </li>
              ))}
            </ul>
            <div className={`mt-6 space-y-4 ${bodyText}`}>
              {founder.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-widest text-teal-dark">
              {founder.strengthsHeading}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {founder.strengths.map((strength) => (
                <li
                  key={strength}
                  className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Partnerships */}
      <section className="bg-mist py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading heading={partnerships.heading} />
          </Reveal>
          <div className={`space-y-5 lg:col-span-3 ${bodyText}`}>
            {partnerships.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
            <Reveal>
              <Link
                to={partnerships.cta.to}
                className="inline-block rounded-full bg-navy px-6 py-3 text-base font-semibold text-white transition hover:bg-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                {partnerships.cta.label}
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {team.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <SectionHeading heading="Our Team" />
            <ul className="mt-12 grid gap-8 md:grid-cols-2">
              {team.map((member) => (
                <li key={member.name} className="rounded-2xl border border-navy/10 p-6">
                  {member.photo && (
                    <img src={member.photo} alt={member.name} className="mb-5 h-32 w-32 rounded-2xl object-cover" />
                  )}
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm font-medium text-teal-dark">{member.role}</p>
                  <div className="mt-4 space-y-3 text-navy/85">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand />
    </>
  );
}