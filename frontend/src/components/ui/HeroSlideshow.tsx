// src/components/ui/HeroSlideshow.tsx
import type { HeroSlide } from '../../content/heroSlides';

interface HeroSlideshowProps {
  slides: HeroSlide[];
  index: number;
}

export default function HeroSlideshow({ slides, index }: HeroSlideshowProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          srcSet={slide.srcSet}
          sizes="100vw"
          width={1600}
          height={1067}
          alt=""
          fetchPriority={i === 0 ? 'high' : 'auto'}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover object-[70%_30%] transition-opacity duration-[1400ms] ease-in-out motion-safe:animate-kenburns motion-reduce:transition-none ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}