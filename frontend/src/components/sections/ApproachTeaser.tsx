// src/components/sections/ApproachTeaser.tsx
import { principles } from '../../content/approach';
import { approachTeaser } from '../../content/home';
import ButtonLink from '../ui/ButtonLink';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';

export default function ApproachTeaser() {
  return (
    <section className="bg-mist py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">{approachTeaser.heading}</h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-gold" />
          <p className="mt-5 text-lg leading-relaxed text-navy/85">{approachTeaser.body}</p>
          <ButtonLink to={approachTeaser.cta.to} variant="secondary" className="mt-8">
            {approachTeaser.cta.label}
          </ButtonLink>
        </Reveal>
        <ol className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <li key={principle.step}>
              <Reveal delay={index * 110} className="h-full">
                <div className="h-full rounded-2xl bg-white p-5 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-dark font-semibold text-white">
                    {principle.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{principle.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/80">{principle.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}