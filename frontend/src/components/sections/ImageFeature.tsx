// src/components/sections/ImageFeature.tsx
import Container from '../ui/Container';
import type { ImageFeatureContent } from '../../types/content';

export default function ImageFeature({
  image,
  alt,
  width,
  height,
  eyebrow,
  heading,
  body,
  points,
  reverse = false,
  tone = 'white',
}: ImageFeatureContent) {
  return (
    <section className={tone === 'mist' ? 'bg-mist' : ''}>
      <Container className="grid items-center gap-12 py-20 lg:grid-cols-2">
        <div className={reverse ? 'lg:order-last' : ''}>
          <img
            src={image}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-3xl shadow-lg"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{heading}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy/85">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {points && points.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}