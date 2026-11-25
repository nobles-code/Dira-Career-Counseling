// src/content/services.ts
import type { Service, ServiceId } from '../types/content';

// Single place that builds a service anchor, so ids are type-checked wherever it is used.
export const servicePath = (id: ServiceId) => `/services#${id}`;

export const servicesIntro = {
  heading: 'What We Do',
  body: 'Dira Careers & Counselling works with individuals, families, schools and community partners through career guidance, counselling, personal development, parent education and mentorship, so that more people can make informed decisions and grow with confidence.',
};

export const services: Service[] = [
  {
    id: 'career-guidance',
    title: 'Career Guidance and Exploration',
    summary:
      'We help learners, young adults and adults in transition understand their interests, strengths, values and aspirations, explore career possibilities, and make sense of the education, training and employment pathways open to them. The aim is never to prescribe a career, but to support informed, intentional decisions and a realistic plan for moving forward.',
    ctaLabel: 'Book a career conversation',
    enquiry: 'Hello Dira, I would like to talk about career guidance and exploration.',
  },
  {
    id: 'counselling',
    title: 'Counselling Support',
    summary:
      'Education and career decisions are not made in isolation from the rest of life. Counselling offers a supportive and confidential professional relationship, within the practitioner’s competence and scope of practice, where personal, emotional, relational or adjustment concerns that affect wellbeing and development can be explored. It can sit alongside career exploration, for example when a young person is dealing with uncertainty, low confidence or pressure from others. Where a concern falls outside what Dira is qualified and equipped to provide, we consider appropriate referral.',
    ctaLabel: 'Ask about counselling',
    enquiry: 'Hello Dira, I would like to know more about counselling support.',
  },
  {
    id: 'parent-education',
    title: 'Parent and Caregiver Education',
    summary:
      'We equip parents and caregivers with practical insights into the changing world of work, emerging opportunities and the different routes into education and employment. We encourage families to support young people’s aspirations through informed conversations rather than assumptions, comparisons or pressure, so that they become informed partners in their child’s development rather than choosing their path for them.',
    ctaLabel: 'Talk to us about your child',
    enquiry:
      'Hello Dira, I am a parent/caregiver and would like to learn more about parent and caregiver education.',
  },
  {
    id: 'school-programmes',
    title: 'School-Based Career Development',
    summary:
      'We partner with schools to deliver interactive career discovery sessions, learner workshops and structured career development programmes that complement existing guidance and counselling efforts, helping learners understand themselves, navigate subject and pathway decisions and prepare for future opportunities.',
    ctaLabel: 'Request a school session',
    enquiry:
      'Hello Dira, I am contacting you on behalf of a school about career development programmes.\nSchool name:\nApproximate number of learners:',
  },
  {
    id: 'personal-development',
    title: 'Personal Development and Mentorship',
    summary:
      'We promote self-awareness, confidence, resilience, emotional intelligence, decision-making and goal setting to help individuals approach life’s transitions with greater preparedness, and to build the confidence and adaptability to adjust as new opportunities emerge.',
    ctaLabel: 'Ask about mentorship',
    enquiry: 'Hello Dira, I would like to know more about personal development and mentorship.',
  },
  {
    id: 'community-outreach',
    title: 'Inclusive Community Outreach and Empowerment',
    summary:
      'Talent and potential exist in every community, but access to opportunities is not always equal. We work with schools, families, community organisations and development partners to reach underserved learners and young people through outreach, mentorship, career awareness and personal development initiatives, promoting dignity, disability-inclusive career development and awareness of reasonable accommodations, and widening access to information, positive role models and opportunities for growth.',
    ctaLabel: 'Start a conversation',
    enquiry: 'Hello Dira, I would like to talk about community outreach and working together.',
  },
];

export const servicesClosing =
  'We do not define people by their circumstances. With better information, appropriate support and inclusive opportunities, more individuals can recognise their strengths, explore their possibilities and take meaningful steps towards their aspirations.';