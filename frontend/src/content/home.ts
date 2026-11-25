// src/content/home.ts
import type { Audience, Cta } from '../types/content';
import { servicePath } from './services';

export const hero = {
  headline: 'Guiding people towards a future of possibilities',
  subheadline:
    'Dira helps individuals, families and schools understand themselves, explore possibilities and make informed decisions about education, careers and life. Clarity. Confidence. Purpose.',
  primaryCta: { label: 'Get in Touch', to: '/contact' } satisfies Cta,
  secondaryCta: { label: 'Explore Our Services', to: '/services' } satisfies Cta,
};

export const audiencesSection = {
  heading: 'Who We Work With',
  intro:
    'Dira works with individuals, families, schools and community partners at different stages of the education, career and personal development journey.',
};

export const audiences: Audience[] = [
  {
    id: 'learners',
    label: 'Learners & Young Adults',
    summary:
      'From early self-awareness to pathway decisions and the move into work, understand your strengths and explore the options open to you.',
    to: servicePath('career-guidance'),
    ctaLabel: 'Explore career guidance',
  },
  {
    id: 'parents',
    label: 'Parents & Caregivers',
    summary:
      'Become an informed partner in your child’s development, supporting their choices without imposing your own expectations.',
    to: servicePath('parent-education'),
    ctaLabel: 'Explore parent support',
  },
  {
    id: 'adults',
    label: 'Adults in Career Transition',
    summary:
      'Gain clarity about direction, changing aspirations, transferable skills and further development opportunities.',
    to: servicePath('career-guidance'),
    ctaLabel: 'Find your direction',
  },
  {
    id: 'schools',
    label: 'Schools & Community Organisations',
    summary:
      'Strengthen career development, learner support, mentorship and access to information and opportunities.',
    to: servicePath('school-programmes'),
    ctaLabel: 'See school programmes',
  },
];

export const approachTeaser = {
  heading: 'Clarity begins with understanding the individual',
  body: 'We believe meaningful career decisions begin with understanding who you are, not simply deciding what you want to become. Our work is guided by four stages: Discover, Investigate, Reflect and Act.',
  cta: { label: 'Our Approach', to: '/approach' } satisfies Cta,
};

export const inclusionTeaser = {
  heading: 'Talent and potential exist in every community',
  body: 'Access to opportunities is not always equal. A person’s circumstances should not be the sole determinant of how far they can explore their possibilities.',
  cta: { label: 'Our Commitment to Inclusion', to: '/about#inclusion' } satisfies Cta,
};

export const closingCta = {
  heading: 'Your Future Deserves Direction.',
  body: 'Whether you are a learner exploring possibilities, a parent supporting a child’s development, a young adult navigating education and career decisions, an adult considering a transition, or a school seeking meaningful career development support, Dira is ready to walk alongside you.',
  tagline: 'Let’s begin with understanding where you are and exploring where you could go.',
  primaryCta: { label: 'Get in Touch', to: '/contact' } satisfies Cta,
  secondaryCta: { label: 'Explore Our Services', to: '/services' } satisfies Cta,
  tertiaryCta: { label: 'Partner With Dira', to: '/partner' } satisfies Cta,
};