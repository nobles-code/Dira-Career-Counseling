// src/components/sections/HowItWorks.tsx
import { howItWorks } from '../../content/extras';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';

export default function HowItWorks() {
  return (
    <section className="py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{howItWorks.heading}</h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-gold" />
          <p className="mt-5 text-lg text-navy/80">{howItWorks.intro}</p>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((item, index) => (
            <li key={item.step}>
              <Reveal delay={index * 140} className="h-full">
                <div className="h-full rounded-2xl border border-navy/10 bg-white p-7 transition motion-safe:hover:-translate-y-1 hover:border-teal hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-dark font-serif text-xl font-semibold text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-navy/80">{item.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}