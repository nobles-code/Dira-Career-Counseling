// src/pages/Approach.tsx
import CtaBand from '../components/sections/CtaBand';
import ImageFeature from '../components/sections/ImageFeature';
import Container from '../components/ui/Container';
import Reveal from '../components/ui/Reveal';
import { approach, principles } from '../content/approach';
import { featureImages } from '../content/imagery';
import { usePageMeta } from '../lib/usePageMeta';

export default function Approach() {
  usePageMeta('Our Approach', approach.highlight);

  return (
    <>
      <section className="bg-navy py-20 text-white md:py-24">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold motion-safe:animate-fade-up">
            {approach.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight motion-safe:animate-fade-up [animation-delay:120ms] sm:text-5xl">
            {approach.heading}
          </h1>
          <p className="mt-6 max-w-3xl font-serif text-xl leading-relaxed text-white/90 motion-safe:animate-fade-up [animation-delay:240ms] sm:text-2xl">
            {approach.highlight}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="space-y-5 text-lg leading-relaxed text-navy/85 lg:col-span-3">
            {approach.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="lg:col-span-2">
            <blockquote className="border-l-4 border-gold pl-6">
              <p className="font-serif text-2xl leading-snug text-teal-dark">
                A compass does not choose the road. It helps you find yours.
              </p>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-semibold">{approach.principlesIntro}</h2>
          </Reveal>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <li key={principle.step}>
                <Reveal delay={index * 120} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border-t-4 border-gold bg-white p-7 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                    <span aria-hidden="true" className="font-serif text-5xl font-semibold text-gold">
                      {principle.step}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold">{principle.title}</h3>
                    <p className="mt-3 leading-relaxed text-navy/80">{principle.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ImageFeature {...featureImages.approach} />

      <Container as="section" className="pb-16 text-center md:pb-20">
        <Reveal>
          <span className="mx-auto block h-1 w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-6 max-w-3xl font-serif text-2xl leading-relaxed">{approach.closing}</p>
        </Reveal>
      </Container>

      <CtaBand />
    </>
  );
}