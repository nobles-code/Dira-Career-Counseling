// src/content/about.ts
import type { TeamMember } from '../types/content';
import njeriPhoto from '../assets/njeri_gathimba.jpg';

export const about = {
  eyebrow: 'About Dira',
  heading: 'Guiding people towards a future of possibilities',
  story: [
    'At Dira Careers & Counselling, we believe that every person deserves the opportunity to understand their potential, make informed decisions and pursue a meaningful future—regardless of their background, circumstances or access to opportunities.',
    'Inspired by the Swahili word Dira, meaning compass, we exist to help individuals and families navigate the decisions that shape education, careers, personal development and life direction.',
    'We recognise that choosing a career involves more than selecting a course or profession. It begins with self-awareness, grows through informed exploration and reflection, and develops into purposeful action supported by the right information, guidance and encouragement.',
    'Our work combines career guidance, personal development, parent education and mentorship to help people navigate an evolving world of work with greater clarity and confidence.',
  ],
  nameMeaning: { word: 'Dira', meaning: 'compass', language: 'Swahili' },
};

export const vision = {
  heading: 'Our Vision',
  body: 'A society where individuals and families have the knowledge, confidence and support to make informed decisions about education, careers and life, regardless of their circumstances.',
};

export const mission = {
  heading: 'Our Mission',
  body: 'To empower individuals, families and communities through career guidance, personal development, parent education and mentorship, while promoting inclusive access to information and opportunities for growth.',
};

export const inclusion = {
  heading: 'Our Commitment to Inclusion',
  body: [
    'We believe that access to career information, mentorship and personal development should not be limited by a person’s economic circumstances or social background.',
    'Dira is committed to working with schools and community partners to reach underserved learners and young people, including girls facing barriers to education, exposure and opportunity. We aim to support their growth through dignity-centred engagement, practical guidance, positive role models and connections to appropriate resources.',
    'Our vision is not simply to help people choose careers, but to contribute to a society where more individuals can recognise their strengths, explore their possibilities and participate meaningfully in their communities and the world of work.',
  ],
};

export const founder = {
  eyebrow: 'Meet the Founder',
  name: 'Njeri Gathimba',
  title: 'Founder | Workforce Development, Career Guidance and Personal Development',
  credentials: [
    'Certified Professional Counselling Psychologist',
    'Associate Member, Career Development Association of Kenya (CDAK)',
  ],
  photo: njeriPhoto as string | null,
  bio: [
    'Dira Careers & Counselling is founded by Peris, a professional whose background brings together business leadership, strategic management, research and a growing specialisation in career guidance and human development.',
    'With over a decade of experience in banking, business development and leadership, Peris brings a practical understanding of organisations, workplace expectations, customer needs, strategic decision-making and the skills people need to navigate changing professional environments. Her experience includes roles in research, branch management and general management.',
    'Her academic background in Economics and Sociology, combined with her continuing professional development in career guidance and counselling, informs her interest in the relationship between individuals, families, education, work and society.',
    'Peris is particularly passionate about helping young people understand themselves before making career decisions, supporting parents to become informed partners in their children’s development, and creating opportunities for individuals whose potential may be overlooked because of their circumstances.',
    'This combination enables Dira to approach career guidance not only from the perspective of personal aspirations, but also through an understanding of workplaces, transferable skills, organisational needs and the importance of connecting education with the world of work.',
    'Through Dira Careers & Counselling, Peris seeks to build meaningful partnerships with schools, families, mentors, community organisations and development partners to help more people access the information, support and opportunities they need to thrive.',
  ],
  strengths: [
    'Strategic thinking',
    'Research and analytical skills',
    'Leadership experience',
    'Business development',
    'Communication',
    'Mentorship',
    'Commitment to inclusive human development',
  ],
};

export const team: TeamMember[] = [];