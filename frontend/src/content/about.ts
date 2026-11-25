// src/content/about.ts
import type { AudienceSegment, TeamMember, Value } from '../types/content';
import njeriPhoto from '../assets/njeri_gathimba.jpg';

export const about = {
  eyebrow: 'About Dira',
  heading: 'Guiding people towards a future of possibilities',
  tagline: 'Clarity. Confidence. Purpose.',
  story: [
    'At Dira Careers & Counselling, we believe every individual deserves the opportunity to understand themselves, recognise their strengths, explore possibilities and make informed decisions about their future.',
    'Inspired by the Swahili word Dira, meaning compass, our name reflects our belief that people need more than directions. They need the self-awareness, information, confidence and support to navigate their own journeys.',
    'We exist to support individuals, families and communities as they navigate education, career choices, personal development and life transitions.',
    'Our work recognises that meaningful career development goes beyond choosing a course or profession. It involves understanding the individual, exploring the changing world of work, considering available opportunities and circumstances, and developing the confidence to make purposeful decisions.',
    'Through career guidance, counselling, personal development, parent engagement and mentorship, we seek to make these opportunities for growth more accessible, inclusive and meaningful.',
  ],
  nameMeaning: { word: 'Dira', meaning: 'compass', language: 'Swahili' },
};

export const whyDira = {
  heading: 'Why Dira Exists',
  body: [
    'People make important education, career and life decisions at different stages of their lives. Yet many do so without adequate information, exposure, guidance or support.',
    'Young people may struggle to identify their strengths or understand the opportunities available to them. Parents may find it difficult to guide their children through an increasingly complex education and employment landscape. Young adults and working professionals may need support when navigating career choices, transitions or changing aspirations.',
    'For individuals facing social, economic or other barriers, these challenges can be even greater.',
    'Dira exists to help bridge these gaps.',
    'We believe that when people understand themselves, have access to relevant information and receive appropriate support, they are better equipped to make informed decisions and navigate their futures with confidence.',
  ],
  convictionLead: 'Our work is guided by a simple conviction:',
  conviction:
    'Every individual deserves the opportunity to discover their direction and develop the confidence to pursue it.',
};

export const vision = {
  heading: 'Our Vision',
  body: 'To build a society where individuals and families have the clarity and support to make informed education, career and life decisions.',
};

export const mission = {
  heading: 'Our Mission',
  body: 'To empower individuals, families and communities through accessible career guidance, counselling, personal development, parent education and mentorship, enabling informed decision-making, meaningful growth and purposeful participation in the world of work and society.',
};

export const values = {
  heading: 'Our Core Values',
  items: [
    {
      title: 'Individuality',
      description:
        'We recognise that every person has unique strengths, interests, experiences, aspirations and circumstances. We respect individual journeys and avoid one-size-fits-all solutions.',
    },
    {
      title: 'Empowerment',
      description:
        'We provide guidance, information and support that strengthen people’s ability to understand their options, make informed decisions and take ownership of their development.',
    },
    {
      title: 'Inclusion',
      description:
        'We believe access to guidance, information and opportunities for growth should not be determined by economic circumstances, disability, social background or other barriers.',
    },
    {
      title: 'Integrity',
      description:
        'We value honesty, respect, confidentiality, professional responsibility and appropriate boundaries in our relationships and services.',
    },
    {
      title: 'Lifelong Growth',
      description:
        'We recognise that learning, career development and personal growth are continuous processes that evolve with experience, opportunity and changing circumstances.',
    },
  ] as Value[],
};

export const whoWeServe = {
  heading: 'Who We Serve',
  intro:
    'Dira works with individuals, families, schools and community partners at different stages of the education, career and personal development journey.',
  items: [
    {
      label: 'Children and preteens',
      summary:
        'We encourage early self-awareness, confidence, exploration of interests and exposure to possibilities in age-appropriate ways.',
    },
    {
      label: 'Teenagers and secondary school learners',
      summary:
        'We support learners as they explore career interests, understand education pathways, navigate subject and pathway decisions, and prepare for future opportunities.',
    },
    {
      label: 'Young adults and emerging professionals',
      summary:
        'We help young adults explore further education, career options, skills development and transitions into the world of work.',
    },
    {
      label: 'Parents and caregivers',
      summary:
        'We equip parents and caregivers with information and practical guidance to support their children’s development and education and career decisions without imposing their own expectations.',
    },
    {
      label: 'Adults navigating career transitions',
      summary:
        'We support individuals seeking greater clarity about career direction, changing aspirations, transferable skills and further development opportunities.',
    },
    {
      label: 'Schools and community organisations',
      summary:
        'We collaborate with institutions and community partners to strengthen career development, learner support, mentorship and access to information and opportunities.',
    },
  ] as AudienceSegment[],
};

export const inclusion = {
  heading: 'Our Commitment to Inclusion',
  body: [
    'We believe talent, potential and aspiration exist in every community, but access to opportunities is not always equal.',
    'A person’s financial circumstances, geographical location, disability, family responsibilities, educational access or social environment should not be the sole determinants of how far they can explore their possibilities.',
    'Dira is committed to promoting more inclusive access to career information, mentorship and personal development opportunities, particularly for underserved learners and young people.',
    'We seek to work with schools, families, community organisations and development partners to reach individuals who may otherwise have limited access to guidance, exposure and support.',
  ],
  commitmentsHeading: 'Our commitment includes:',
  commitments: [
    'Encouraging awareness of accessible education, training and career pathways.',
    'Promoting dignity, participation and respect for individual differences.',
    'Supporting exploration of alternative pathways where conventional routes may be inaccessible.',
    'Encouraging disability-inclusive career development and awareness of reasonable accommodations.',
    'Connecting individuals and communities with appropriate information, resources and support networks.',
  ],
  closing:
    'We do not define people by their circumstances. We believe that with better information, appropriate support and inclusive opportunities, more individuals can participate meaningfully in their communities and the world of work.',
};

export const founder = {
  eyebrow: 'Meet the Founder',
  name: 'Njeri Gathimba',
  title: 'Founder | Workforce Development | Career Guidance | Human Development',
  credentials: [
    'Certified Professional Counselling Psychologist',
    'Associate Member, Career Development Association of Kenya (CDAK)',
  ],
  photo: njeriPhoto as string | null,
  bio: [
    'Dira Careers & Counselling was founded by Njeri Gathimba, whose professional journey brings together business leadership, strategic management, research and specialised training in career guidance, counselling and human development.',
    'With over a decade of experience in banking, business development and leadership, Njeri has developed a practical understanding of organisations, workplace expectations, strategic decision-making, customer needs and the skills required to navigate changing professional environments.',
    'Her experience includes research, branch management and general management, giving her insight into both organisational development and the realities individuals encounter as they build and advance their careers.',
    'Her academic background in Economics and Sociology informs her interest in the relationship between individuals, families, education, employment and society. She has since pursued postgraduate training in counselling and is currently completing her doctoral studies.',
    'Njeri is particularly passionate about helping young people understand themselves before making education and career decisions, supporting parents to become informed partners in their children’s development, and expanding access to guidance and opportunities for individuals whose potential may be overlooked because of their circumstances.',
    'Her interest in workforce development also shapes Dira’s perspective on the connection between education, skills, employability and the evolving needs of the workplace, including the healthcare sector.',
    'Through Dira, she seeks to bring together individuals, families, schools, mentors, community organisations and development partners to strengthen access to guidance, information and meaningful opportunities for growth.',
  ],
  strengthsHeading: 'Professional strengths',
  strengths: [
    'Strategic thinking and planning',
    'Research and analytical skills',
    'Business development and organisational leadership',
    'Understanding of workplace and workforce development',
    'Communication and stakeholder engagement',
    'Leadership, mentorship and capacity development',
    'Commitment to inclusive human development',
  ],
};

export const partnerships = {
  heading: 'Building Partnerships for Greater Impact',
  body: [
    'We recognise that meaningful career and personal development requires collective effort.',
    'Families, schools, employers, mentors, community organisations and development partners all have a role to play in creating environments where individuals can discover their strengths, explore opportunities and make informed decisions.',
    'Dira welcomes partnerships with organisations and individuals who share our commitment to education, career development, mentorship, inclusion and human development.',
    'Together, we can help expand access to information, strengthen support systems and create more opportunities for individuals and communities to thrive.',
  ],
  cta: { label: 'Partner With Dira', to: '/partner' },
};

 
export interface FrameworkStage {
  step: number;
  title: string;
  tagline: string;
  body: string[];
  listHeading: string;
  points: string[];
}

export const team: TeamMember[] = [];