// src/components/sections/AudienceGrid.tsx
import { Link } from 'react-router-dom';
import { audiences, audiencesSection } from '../../content/home';
import Container from '../ui/Container';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function AudienceGrid() {
  return (
    <section id="audiences" className="py-20">
      <Container>
        <Reveal>
          <SectionHeading heading={audiencesSection.heading} intro={audiencesSection.intro} />
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience, index) => (
            <li key={audience.id}>
              <Reveal delay={index * 100} className="h-full">
                <Link
                  to={audience.to}
                  className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 transition motion-safe:hover:-translate-y-1 hover:border-teal hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                >
                  <span className="h-1 w-10 rounded-full bg-gold transition-all duration-300 group-hover:w-16" />
                  <h3 className="mt-5 text-xl font-semibold">{audience.label}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/80">{audience.summary}</p>
                  <span className="mt-6 text-sm font-semibold text-teal-dark group-hover:underline">
                    {audience.ctaLabel}{' '}
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}