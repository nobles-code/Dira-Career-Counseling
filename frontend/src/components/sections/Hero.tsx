// src/components/sections/Hero.tsx
import heroLarge from '../../assets/hero-16000.png';
import heroSmall from '../../assets/hero-800.png';
import { hero } from '../../content/home';
import { site } from '../../content/site';
import ButtonLink from '../ui/ButtonLink';
import Container from '../ui/Container';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white md:flex md:min-h-[calc(100svh-4rem)] md:items-center">
      {/* Stacked block on mobile so the face stays visible; full-bleed background from md up. */}
      <img
        src={heroLarge}
        srcSet={`${heroSmall} 800w, ${heroLarge} 1600w`}
        sizes="100vw"
        width={1600}
        height={1067}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="h-72 w-full object-cover object-[70%_30%] motion-safe:animate-hero-zoom sm:h-96 md:absolute md:inset-0 md:h-full"
      />
      {/* Opaque on the text side so contrast holds whatever the photo looks like. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-linear-to-r from-navy via-navy/80 to-navy/10 md:block"
      />
      <Container className="relative w-full py-12 md:py-24">
<p className="text-sm font-semibold uppercase tracking-widest text-gold motion-safe:animate-fade-up">
          {site.tagline}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight motion-safe:animate-fade-up [animation-delay:120ms] sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
<p className="mt-6 max-w-2xl text-lg text-white/85 motion-safe:animate-fade-up [animation-delay:240ms]">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 motion-safe:animate-fade-up [animation-delay:360ms]">
          <ButtonLink to={hero.primaryCta.to}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink to={hero.secondaryCta.to} variant="light">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}