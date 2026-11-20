// src/components/sections/Faq.tsx
import { faqSection, faqs } from '../../content/extras';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';

export default function Faq() {
  return (
    <section className="bg-mist py-20">
      <Container className="grid gap-10 lg:grid-cols-3 lg:gap-14">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">{faqSection.heading}</h2>
          <span className="mt-4 block h-1 w-14 rounded-full bg-gold" />
          <p className="mt-5 text-lg text-navy/80">{faqSection.intro}</p>
        </Reveal>
        <div className="space-y-3 lg:col-span-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 70}>
              <details className="group rounded-2xl border border-navy/10 bg-white transition open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-teal-dark transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-navy/80">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}