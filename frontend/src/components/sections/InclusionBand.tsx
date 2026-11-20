// src/components/sections/InclusionBand.tsx
import { inclusionTeaser } from '../../content/home';
import ButtonLink from '../ui/ButtonLink';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';

export default function InclusionBand() {
  return (
    <section className="relative isolate overflow-hidden bg-teal-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
      />
      <Container className="grid gap-8 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <span className="block h-1 w-12 rounded-full bg-gold" />
          <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {inclusionTeaser.heading}
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lg leading-relaxed text-white/90">{inclusionTeaser.body}</p>
          <ButtonLink to={inclusionTeaser.cta.to} variant="light" className="mt-8">
            {inclusionTeaser.cta.label}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}