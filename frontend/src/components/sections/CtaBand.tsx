// src/components/sections/CtaBand.tsx
import { Link } from 'react-router-dom';
import { closingCta } from '../../content/home';
import ButtonLink from '../ui/ButtonLink';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';

export default function CtaBand() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="rounded-3xl bg-gold px-6 py-14 text-center text-navy sm:px-12 lg:py-20">
            <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{closingCta.heading}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed">{closingCta.body}</p>
            <p className="mx-auto mt-5 max-w-2xl font-serif text-xl font-semibold">
              {closingCta.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink to={closingCta.primaryCta.to} variant="dark">
                {closingCta.primaryCta.label}
              </ButtonLink>
              <ButtonLink to={closingCta.secondaryCta.to} variant="secondary">
                {closingCta.secondaryCta.label}
              </ButtonLink>
              <Link
                to={closingCta.tertiaryCta.to}
                className="px-2 py-3 font-semibold underline underline-offset-4 transition hover:text-teal-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {closingCta.tertiaryCta.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}