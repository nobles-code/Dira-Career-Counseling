// src/content/imagery.ts
import type { ImageFeatureContent } from '../types/content';
import workshopGrowth from '../assets/workshop-growth.png';
import workshopGuidance from '../assets/workshop-guidance.png';
import workshopPartners from '../assets/workshop-partners.png';

export const featureImages: Record<'services' | 'approach' | 'partner', ImageFeatureContent> = {
  services: {
    image: workshopGrowth,
    alt: 'A facilitator speaking to a small group beside a flipchart listing self-awareness, better choices, healthy relationships and personal growth.',
    width: 1672,
    height: 941,
    eyebrow: 'Personal development',
    heading: 'Guidance that begins with knowing yourself',
    body: [
      'Good decisions about education and careers start with self-awareness. Our sessions help learners and young people understand their strengths, interests and values, so the choices they make are truly their own.',
      'From there we build towards healthier relationships, steady personal growth and a clearer picture of what comes next.',
    ],
    points: ['Self-awareness', 'Better choices', 'Healthy relationships', 'Personal growth'],
  },
  approach: {
    image: workshopGuidance,
    alt: 'A presenter addressing seated participants in a bright room, with a screen titled Building a Positive Future.',
    width: 1536,
    height: 1024,
    eyebrow: 'How we work',
    heading: 'Listen. Support. Empower.',
    body: [
      'We start by listening. Every learner, parent and school begins from a different place, so we take time to understand where someone is before suggesting where they could go.',
      'Then we help people set goals, work through the challenges in the way, and keep growing with support around them.',
    ],
    points: ['Know yourself', 'Set goals', 'Overcome challenges', 'Grow with support'],
    reverse: true,
  },
  partner: {
    image: workshopPartners,
    alt: 'A facilitator addressing a seated group at a guidance workshop, with a Counselling & Guidance banner behind her.',
    width: 1536,
    height: 1024,
    eyebrow: 'Partnerships',
    heading: 'Together for a brighter future',
    body: [
      'We work with schools, parent groups, community organisations and development partners to bring career guidance and personal development to the people who need it most.',
      'If you would like to host a session, run a programme for your learners or explore a partnership, we would be glad to talk.',
    ],
    points: ['Listen', 'Support', 'Empower', 'Grow'],
    tone: 'mist',
  },
};