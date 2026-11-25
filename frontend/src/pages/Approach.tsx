// src/pages/Approach.tsx
import CtaBand from '../components/sections/CtaBand';
import ImageFeature from '../components/sections/ImageFeature';
import Container from '../components/ui/Container';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import {
  approach,
  framework,
  frameworkStages,
  gains,
  guidanceAndCounselling,
  helps,
  howWeWork,
  inclusiveApproach,
  journey,
  parents,
} from '../content/approach';
import { featureImages } from '../content/imagery';
import { usePageMeta } from '../lib/usePageMeta';

const bodyText = 'text-lg leading-relaxed text-navy/85';

const Dot = () => (
  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
);

export default function Approach() {
  usePageMeta('Our Approach', approach.highlight);

  return (
    <>
      {/* Hero */}
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

      {/* Intro + pull quote */}
      <section className="py-16 md:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
          <div className={`space-y-5 lg:col-span-3 ${bodyText}`}>
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

      {/* We help individuals */}
      <section className="bg-mist py-16 md:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-semibold">{approach.helpHeading}</h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helps.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 90} className="h-full">
                  <div className="h-full rounded-2xl border-t-4 border-gold bg-white p-7 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-navy/80">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <p className="mt-10 max-w-3xl font-serif text-2xl leading-snug text-teal-dark">
              {approach.closing}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* The Dira Framework */}
      <section id="framework" className="py-16 md:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">
              {framework.eyebrow}
            </p>
            <SectionHeading heading={framework.heading} intro={framework.intro} />
          </Reveal>
          <ol className="mt-12 space-y-8">
            {frameworkStages.map((stage) => (
              <li key={stage.step}>
                <Reveal>
                  <div className="grid gap-6 rounded-2xl border border-navy/10 border-l-4 border-l-gold bg-white p-7 shadow-sm lg:grid-cols-3 lg:gap-10 lg:p-9">
                    <div>
                      <span aria-hidden="true" className="font-serif text-6xl font-semibold text-gold">
                        {stage.step}
                      </span>
                      <h3 className="mt-2 text-2xl font-semibold uppercase tracking-wide">
                        {stage.title}
                      </h3>
                      <p className="mt-1 font-medium text-teal-dark">{stage.tagline}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className={`space-y-4 ${bodyText}`}>
                        {stage.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <p className="mt-6 font-semibold">{stage.listHeading}</p>
                      <ul className="mt-3 space-y-2 text-navy/85">
                        {stage.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <Dot />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ImageFeature {...featureImages.approach} />

      {/* How we work + journey */}
      <section className="bg-mist py-16 md:py-20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">{howWeWork.heading}</h2>
            <p className="mt-3 font-serif text-2xl text-teal-dark">{howWeWork.tagline}</p>
          </Reveal>
          <div className={`mt-8 max-w-3xl space-y-5 ${bodyText}`}>
            {howWeWork.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-14 text-2xl font-semibold">{howWeWork.journeyHeading}</h3>
          </Reveal>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((step, index) => (
              <li key={step.step}>
                <Reveal delay={index * 100} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                    <span aria-hidden="true" className="font-serif text-4xl font-semibold text-gold">
                      {step.step}
                    </span>
                    <h4 className="mt-3 text-lg font-semibold">{step.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-navy/80">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal>
            <p className={`mt-8 max-w-3xl ${bodyText}`}>{howWeWork.note}</p>
          </Reveal>
        </Container>
      </section>

      {/* Guidance and counselling */}
      <section className="py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              heading={guidanceAndCounselling.heading}
              intro={guidanceAndCounselling.intro}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[guidanceAndCounselling.guidance, guidanceAndCounselling.counselling].map(
              (item, index) => (
                <Reveal key={item.title} delay={index * 140} className="h-full">
                  <div className="h-full rounded-2xl border border-navy/10 border-t-4 border-t-teal bg-white p-8 shadow-sm">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className={`mt-4 ${bodyText}`}>{item.body}</p>
                  </div>
                </Reveal>
              ),
            )}
          </div>
          <Reveal>
            <p className={`mt-8 max-w-3xl ${bodyText}`}>{guidanceAndCounselling.complement}</p>
            <p className="mt-4 max-w-3xl text-navy/70">{guidanceAndCounselling.referral}</p>
          </Reveal>
        </Container>
      </section>

      {/* Parents and caregivers */}
      <section id="parents" className="bg-mist py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="text-3xl font-semibold">{parents.heading}</h2>
            <p className="mt-4 font-serif text-2xl leading-snug text-teal-dark">{parents.tagline}</p>
          </Reveal>
          <div className="lg:col-span-3">
            <div className={`space-y-5 ${bodyText}`}>
              {parents.body.map((paragraph) => (
                <Reveal key={paragraph}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
                <p className="font-semibold">{parents.listHeading}</p>
                <ul className="mt-4 space-y-3 text-navy/85">
                  {parents.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Dot />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <p className={`mt-8 ${bodyText}`}>{parents.closing}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Inclusive and developmental approach */}
      <section className="py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading heading={inclusiveApproach.heading} />
            <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-teal-dark">
              {inclusiveApproach.lead}
            </p>
          </Reveal>
          <div className={`mt-8 grid gap-6 md:grid-cols-3 ${bodyText}`}>
            {inclusiveApproach.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 120}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What you can gain */}
      <section className="bg-mist py-16 md:py-20">
        <Container>
          <Reveal>
            <SectionHeading heading={gains.heading} intro={gains.intro} />
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gains.items.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 90} className="h-full">
                  <div className="h-full rounded-2xl bg-white p-7 shadow-sm transition motion-safe:hover:-translate-y-1 hover:shadow-lg">
                    <span className="block h-1 w-10 rounded-full bg-gold" />
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-navy/80">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Closing statement */}
      <Container as="section" className="py-16 text-center md:py-20">
        <Reveal>
          <span className="mx-auto block h-1 w-12 rounded-full bg-gold" />
          <p className="mx-auto mt-6 max-w-3xl font-serif text-2xl leading-relaxed">{gains.closing}</p>
        </Reveal>
      </Container>

      <CtaBand />
    </>
  );
}