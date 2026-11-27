// src/components/sections/Hero.tsx
import { Fragment, useRef } from 'react';

import { hero } from '../../content/home';
import { heroSlides } from '../../content/heroSlides';
import { site } from '../../content/site';
import { useSlideshow } from '../../hooks/useSlideshow';
import ButtonLink from '../ui/ButtonLink';
import Container from '../ui/Container';
import HeroSlideshow from '../ui/HeroSlideshow';
import SlideDots from '../ui/SlideDots';

const WORD_STEP = 70; // ms between headline words
const WORD_START = 250; // ms before the first word

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="ml-2 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { index, setIndex } = useSlideshow(heroSlides.length);
  const words = hero.headline.split(' ');
  const afterHeadline = WORD_START + words.length * WORD_STEP + 120;

  const goNext = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-navy text-white md:flex md:min-h-[calc(100svh-4rem)] md:items-center"
    >
      {/* Photo: stacked block on mobile so the face stays visible; full-bleed from md up.
          Slightly oversized on desktop so the scroll parallax never exposes an edge. */}
      <div className="hero-parallax relative h-72 sm:h-96 md:absolute md:inset-x-0 md:-top-[10%] md:h-[120%]">
 <HeroSlideshow slides={heroSlides} index={index} />
        {/* Mobile only: melt the photo into the text block. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-navy to-transparent md:hidden"
        />
        <SlideDots
          count={heroSlides.length}
          index={index}
          onSelect={setIndex}
          className="absolute bottom-3 right-3 z-10 flex md:hidden"
        />

      </div>

      {/* Opaque on the text side so contrast holds whatever the photo looks like. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-linear-to-r from-navy via-navy/80 to-navy/10 md:block"
      />

      {/* Slow drifting glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -bottom-20 h-72 w-72 rounded-full bg-teal/30 blur-3xl motion-safe:animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/3 hidden h-64 w-64 rounded-full bg-gold/15 blur-3xl [animation-delay:-6s] motion-safe:animate-float md:block"
      />

      <Container className="hero-fade relative w-full py-12 md:py-24">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-0.5 w-10 origin-left bg-gold motion-safe:animate-line-grow"
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-gold motion-safe:animate-fade-up">
            {site.tagline}
          </p>
        </div>

        <h1
          aria-label={hero.headline}
          className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          {words.map((word, i) => (
            <Fragment key={i}>
              <span aria-hidden="true" className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
                <span
                  className="inline-block motion-safe:animate-word-up"
                  style={{ animationDelay: `${WORD_START + i * WORD_STEP}ms` }}
                >
                  {word}
                </span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg text-white/85 motion-safe:animate-fade-up"
          style={{ animationDelay: `${afterHeadline}ms` }}
        >
          {hero.subheadline}
        </p>

        <div
          className="mt-10 flex flex-wrap gap-4 motion-safe:animate-fade-up"
          style={{ animationDelay: `${afterHeadline + 140}ms` }}
        >
          <ButtonLink to={hero.primaryCta.to} className="group">
            {hero.primaryCta.label}
            <Arrow />
          </ButtonLink>
          <ButtonLink to={hero.secondaryCta.to} variant="light" className="group">
            {hero.secondaryCta.label}
            <Arrow />
          </ButtonLink>
        </div>
      </Container>

      {/* Scroll cue (desktop). Wrapper carries the scroll fade, button carries the entrance. */}
      <div className="hero-fade absolute inset-x-0 bottom-6 mx-auto hidden w-fit md:block">
        <button
          type="button"
          onClick={goNext}
          aria-label="Scroll to next section"
          style={{ animationDelay: `${afterHeadline + 600}ms` }}
          className="flex flex-col items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold motion-safe:animate-fade-up"
        >
          Scroll
          <span aria-hidden="true" className="relative block h-8 w-px overflow-hidden bg-white/25">
            <span className="absolute inset-x-0 top-0 h-2 bg-gold motion-safe:animate-scroll-dot" />
          </span>
        </button>
      </div>
       <SlideDots
        count={heroSlides.length}
        index={index}
        onSelect={setIndex}
        className="absolute bottom-6 right-6 z-10 hidden md:flex lg:right-10"
      />
    </section>
  );
}