// src/pages/Home.tsx
import ApproachTeaser from '../components/sections/ApproachTeaser';
import AudienceGrid from '../components/sections/AudienceGrid';
import CtaBand from '../components/sections/CtaBand';
import Hero from '../components/sections/Hero';
import InclusionBand from '../components/sections/InclusionBand';
import { usePageMeta } from '../lib/usePageMeta';
import Faq from '../components/sections/Faq';
import HowItWorks from '../components/sections/HowItWorks';

export default function Home() {
  usePageMeta();
  return (
    <>
      <Hero />
      <AudienceGrid />
      <ApproachTeaser />
      <HowItWorks />
      <InclusionBand />
      <Faq />
      <CtaBand />
    </>
  );
}