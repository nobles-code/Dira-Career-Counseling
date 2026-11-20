// src/content/services.ts
import type { Service, ServiceId } from '../types/content';

// Single place that builds a service anchor, so ids are type-checked wherever it is used.
export const servicePath = (id: ServiceId) => `/services#${id}`;

export const servicesIntro = {
  heading: 'What We Do',
  body: 'Dira Careers & Counselling works with learners, young adults, parents, schools and community partners to promote informed choices, personal growth and equitable access to development opportunities.',
};

export const services: Service[] = [
  {
    id: 'career-guidance',
    title: 'Career Guidance and Exploration',
    summary:
      'We help learners and young adults identify their interests, strengths, values and aspirations, explore career possibilities, and understand relevant education, training and employment pathways.',
    ctaLabel: 'Book a career conversation',
    enquiry: 'Hello Dira, I would like to talk about career guidance and exploration.',
  },
  {
    id: 'parent-education',
    title: 'Parent and Guardian Education',
    summary:
      'We equip parents and guardians with practical insights into the changing world of work, emerging opportunities and different learning pathways. We encourage families to support young people’s aspirations through informed conversations rather than assumptions, comparisons or pressure.',
    ctaLabel: 'Talk to us about your child',
    enquiry:
      'Hello Dira, I am a parent/guardian and would like to learn more about parent and guardian education.',
  },
  {
    id: 'school-programmes',
    title: 'School-Based Career Development',
    summary:
      'We partner with schools to deliver interactive career discovery sessions, learner workshops and structured career development programmes that complement existing guidance and counselling efforts.',
    ctaLabel: 'Request a school session',
    enquiry:
      'Hello Dira, I am contacting you on behalf of a school about career development programmes.\nSchool name:\nApproximate number of learners:',
  },
  {
    id: 'personal-development',
    title: 'Personal Development and Mentorship',
    summary:
      'We promote self-awareness, confidence, resilience, emotional intelligence, decision-making and goal setting to help individuals approach life’s transitions with greater preparedness.',
    ctaLabel: 'Ask about mentorship',
    enquiry: 'Hello Dira, I would like to know more about personal development and mentorship.',
  },
  {
    id: 'community-outreach',
    title: 'Inclusive Community Outreach and Empowerment',
    summary:
      'We are committed to reaching disadvantaged and underserved groups, including young people and girls who may face economic, social or educational barriers. Through community outreach, mentorship, career awareness and personal development initiatives, we seek to widen access to information, positive role models and opportunities for growth.',
    ctaLabel: 'Start a conversation',
    enquiry: 'Hello Dira, I would like to talk about community outreach and working together.',
  },
];

export const servicesClosing =
  'We believe that circumstances should not define a person’s potential. With appropriate support, information and opportunity, individuals can identify possibilities, strengthen their capabilities and take meaningful steps towards their aspirations.';