// src/content/home.ts
import type { Audience, Cta } from '../types/content';
import { servicePath } from './services';


export const hero = {
  headline: 'Guiding people towards a future of possibilities',
  subheadline:
    'Dira helps learners, parents and schools make informed decisions about education, careers and life, whatever their background or circumstances.',
  primaryCta: { label: 'Get in Touch', to: '/contact' } satisfies Cta,
  secondaryCta: { label: 'Explore Our Services', to: '/services' } satisfies Cta,
};

export const audiencesSection = {
  heading: 'Who We Work With',
  intro:
    'Dira works with learners, young adults, parents, schools and community partners.',
};

export const audiences: Audience[] = [
  {
    id: 'learners',
    label: 'Learners & Young Adults',
    summary:
      'Understand your interests, strengths and values, and explore the pathways open to you.',
    to: servicePath('career-guidance'),
    ctaLabel: 'Explore career guidance',
  },
  {
    id: 'parents',
    label: 'Parents & Guardians',
    summary:
      'Support your child’s aspirations through informed conversations, not assumptions or pressure.',
    to: servicePath('parent-education'),
    ctaLabel: 'Explore parent support',
  },
  {
    id: 'schools',
    label: 'Schools',
    summary:
      'Strengthen your guidance and counselling with interactive sessions, workshops and structured programmes.',
    to: servicePath('school-programmes'),
    ctaLabel: 'See school programmes',
  },
  {
    id: 'communities',
    label: 'Community Partners',
    summary:
      'Help widen access to information, role models and opportunities for underserved young people.',
    to: '/partner',
    ctaLabel: 'Partner with us',
  },
];

export const approachTeaser = {
  heading: 'Identity Before Career',
  body: 'Understanding who you are is an important starting point for deciding where you want to go. Our approach helps people discover, investigate, reflect and act.',
  cta: { label: 'Our Approach', to: '/approach' } satisfies Cta,
};

export const inclusionTeaser = {
  heading: 'Your circumstances do not have to define your possibilities',
  body: 'Access to career information, mentorship and personal development should not be limited by economic circumstances or social background.',
  cta: { label: 'Our Commitment to Inclusion', to: '/about#inclusion' } satisfies Cta,
};

export const closingCta = {
  heading: 'Your future deserves direction.',
  body: 'Whether you are a learner, a parent, a school or a partner, Dira is ready to explore how we can work together.',
  primaryCta: { label: 'Get in Touch', to: '/contact' } satisfies Cta,
  secondaryCta: { label: 'Partner With Dira', to: '/partner' } satisfies Cta,
};