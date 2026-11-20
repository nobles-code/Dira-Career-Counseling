// src/pages/About.tsx
import CtaBand from '../components/sections/CtaBand';
import CompassMark from '../components/ui/CompassMark';
import Container from '../components/ui/Container';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { about, founder, inclusion, mission, team, vision } from '../content/about';
import { usePageMeta } from '../lib/usePageMeta';

const bodyText = 'text-lg leading-relaxed text-navy/85';

export default function About() {
  usePageMeta('About');
  const [lead, ...story] = about.story;
  const [founderRole, founderFocus] = founder.title.split(' | ');
  const [inclusionLead, ...inclusionRest] = inclusion.body;

  return (
    <>
      <section className="bg-navy py-16 text-white md:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold motion-safe:animate-fade-up">
            {about.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight motion-safe:animate-fade-up [animation-delay:120ms] sm:text-5xl">
            {about.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 motion-safe:animate-fade-up [animation-delay:240ms]">
            {lead}
          </p>
        </Container>
      </section>

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

      <section className="bg-mist py-16 md:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          {[vision, mission].map((item, index) => (
            <Reveal key={item.heading} delay={index * 140} className="h-full">
              <div className="h-full rounded-2xl border-t-4 border-gold bg-white p-8 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                <h2 className="text-2xl font-semibold">{item.heading}</h2>
                <p className={`mt-4 ${bodyText}`}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section id="inclusion" className="py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading heading={inclusion.heading} />
            <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-teal-dark">
              {inclusionLead}
            </p>
          </Reveal>
          <div className={`mt-8 grid gap-6 md:grid-cols-2 ${bodyText}`}>
            {inclusionRest.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 120}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 md:py-20">
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
            <p className="mt-2 font-medium text-teal-dark">
              {founderRole} | {founderFocus}
            </p>
            <ul className="mt-4 space-y-1 text-navy/85">
              {founder.credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {credential}
                </li>
              ))}
            </ul>
            <div className={`mt-6 space-y-4 ${bodyText}`}>
              {founder.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {founder.strengths.map((strength) => (
                <li key={strength} className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium">
                  {strength}
                </li>
              ))}
            </ul>
          </Reveal>
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