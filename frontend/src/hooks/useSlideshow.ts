// src/hooks/useSlideshow.ts
import { useEffect, useState } from 'react';

export function useSlideshow(count: number, interval = 6500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Re-arms whenever the slide changes, so clicking a dot also restarts the timer.
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearTimeout(id);
  }, [index, count, interval]);

  return { index, setIndex };
}