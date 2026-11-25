// src/content/approach.ts
import type { FrameworkStage, Principle, Value } from '../types/content';

export const approach = {
  eyebrow: 'Our Approach',
  heading: 'Clarity begins with understanding the individual.',
  highlight:
    'We believe meaningful career decisions begin with understanding who you are, not simply deciding what you want to become.',
  body: [
    'Every individual has unique strengths, interests, values, abilities, experiences, aspirations and circumstances. We create space for individuals to explore these dimensions, understand themselves better, and discover possibilities that may not have previously been within their awareness.',
    'Our approach combines self-discovery, career exploration, counselling-informed support and practical career planning to help individuals make informed decisions about education, training, work and their future.',
  ],
  helpHeading: 'We help individuals:',
  principlesIntro:
    'Our work is guided by four interconnected principles: Discover, Investigate, Reflect and Act.',
  closing:
    'Our goal is not to prescribe a career, but to empower individuals to make intentional, informed and meaningful decisions about their future.',
};

export const helps: Value[] = [
  {
    title: 'Understand themselves',
    description:
      'Identify their strengths, interests, values, abilities, aspirations and areas for growth.',
  },
  {
    title: 'Explore possibilities',
    description:
      'Discover careers, industries, occupations, educational pathways and opportunities beyond their immediate exposure.',
  },
  {
    title: 'Make informed decisions',
    description:
      'Evaluate options against their personal characteristics, educational requirements, available resources and the realities of the changing world of work.',
  },
  {
    title: 'Develop a direction',
    description: 'Translate their discoveries into realistic goals and meaningful next steps.',
  },
  {
    title: 'Build confidence and adaptability',
    description:
      'Develop the confidence to navigate uncertainty, overcome setbacks, embrace growth and adjust as new opportunities emerge.',
  },
];

export const framework = {
  eyebrow: 'The Dira Framework',
  heading: 'Four stages. One purposeful journey.',
  intro:
    'Our work is guided by four interconnected principles: Discover, Investigate, Reflect and Act. They provide a structured but flexible way of helping individuals move from self-understanding to informed decisions and purposeful action.',
};

export const frameworkStages: FrameworkStage[] = [
  {
    step: 1,
    title: 'Discover',
    tagline: 'Understand yourself',
    body: [
      'We begin with the individual, recognising that each person has a different combination of interests, strengths, values, abilities, aspirations and experiences.',
      'Through guided conversations, reflection and appropriate activities, we help individuals develop greater self-awareness and recognise the factors that influence their choices.',
    ],
    listHeading: 'We explore:',
    points: [
      'Personal interests, strengths and abilities.',
      'Values, motivations and aspirations.',
      'Learning preferences and experiences.',
      'Personal circumstances and influences.',
    ],
  },
  {
    step: 2,
    title: 'Investigate',
    tagline: 'Explore possibilities',
    body: [
      'Self-awareness opens the door to exploration. We help individuals discover a wider range of education, training and career opportunities, including options they may not have previously considered.',
      'We encourage informed exploration rather than relying on assumptions, popular career choices or outdated ideas about the world of work.',
    ],
    listHeading: 'We explore:',
    points: [
      'Careers, occupations and emerging fields.',
      'Skills, competencies and workplace expectations.',
      'Education, training and qualification pathways.',
      'Labour-market information and changing industry trends.',
      'Entry requirements, costs, accessibility and alternative routes.',
    ],
  },
  {
    step: 3,
    title: 'Reflect',
    tagline: 'Make informed choices',
    body: [
      'Exploration becomes meaningful when individuals can connect what they have learnt about themselves with the opportunities they have discovered.',
      'We support individuals to examine their options, consider alternatives and weigh personal aspirations against practical realities. We recognise that a suitable decision must take account of both individual preferences and the opportunities and constraints within a person’s environment.',
    ],
    listHeading: 'We consider:',
    points: [
      'Personal interests, strengths and long-term aspirations.',
      'Education and training requirements.',
      'Financial, family, social and geographical circumstances.',
      'Potential barriers, available support and alternative pathways.',
      'The implications and possible outcomes of different choices.',
    ],
  },
  {
    step: 4,
    title: 'Act',
    tagline: 'Move forward with purpose',
    body: [
      'Clarity is most valuable when it leads to action. We help individuals translate their insights and decisions into practical steps towards their education, career and personal development goals.',
    ],
    listHeading: 'Depending on the individual’s needs, this may involve:',
    points: [
      'Setting realistic and achievable goals.',
      'Developing an education or career pathway plan.',
      'Identifying skills and experiences to develop.',
      'Exploring opportunities for further learning and exposure.',
      'Identifying support systems and strategies for navigating challenges.',
      'Reviewing progress and adjusting plans as circumstances change.',
    ],
  },
];

// Short form used by teasers elsewhere on the site.
export const principles: Principle[] = frameworkStages.map((stage) => ({
  step: stage.step,
  title: stage.title,
  description: stage.tagline,
}));

export const howWeWork = {
  heading: 'How We Work',
  tagline: 'Listen. Guide. Empower.',
  body: [
    'Every individual, family and institution begins from a different place. We therefore start by listening and understanding before recommending an appropriate form of support.',
    'Our engagements are guided by the needs, age, circumstances and goals of the people we serve. Depending on the service, we may use individual conversations, group activities, guided reflection, career exploration exercises, relevant assessment tools, information resources and practical planning.',
    'Our approach is collaborative. We do not make life decisions on behalf of individuals or place them into fixed career categories. Instead, we provide guidance, information and support that enable them to participate actively in their own development and decisions.',
  ],
  journeyHeading: 'What does the journey look like?',
  note: 'The process is flexible rather than one-size-fits-all. The activities, duration and level of follow-up depend on the individual’s needs and the service agreed.',
};

export const journey: Principle[] = [
  {
    step: 1,
    title: 'Understanding your needs',
    description:
      'We begin with a conversation to understand your concerns, expectations, background and goals. This helps us identify the kind of guidance or support that may be appropriate.',
  },
  {
    step: 2,
    title: 'Guided discovery and exploration',
    description:
      'We use relevant conversations, activities and resources to help you understand yourself, explore opportunities and consider possible pathways.',
  },
  {
    step: 3,
    title: 'Reflection and decision-making',
    description:
      'We help you examine your options, ask important questions, consider practical realities and identify choices that align with your aspirations and circumstances.',
  },
  {
    step: 4,
    title: 'Practical planning',
    description:
      'Where appropriate, we work together to develop goals, action steps and a realistic plan for moving forward.',
  },
  {
    step: 5,
    title: 'Review and continued development',
    description:
      'Where included in the agreed service, we review progress, address emerging challenges and adjust plans as needs and circumstances evolve.',
  },
];

export const guidanceAndCounselling = {
  heading: 'Career Guidance and Counselling: Working Together',
  intro:
    'We recognise that education and career decisions are not made in isolation from the rest of life. Personal experiences, relationships, emotions, responsibilities and changing circumstances can all influence how people make decisions and pursue their goals.',
  guidance: {
    title: 'Career guidance',
    body: 'Supports individuals to understand themselves, explore education and occupational opportunities, evaluate alternatives and make informed career and learning decisions.',
  },
  counselling: {
    title: 'Counselling',
    body: 'Provides a supportive and confidential professional relationship, within the practitioner’s competence and scope of practice, in which individuals can explore personal, emotional, relational or adjustment concerns that may affect their wellbeing and development.',
  },
  complement:
    'These areas can complement each other. For example, a young person experiencing uncertainty, low confidence or pressure from others may benefit from appropriate counselling support alongside career exploration.',
  referral:
    'Where a concern falls outside the support Dira is qualified and equipped to provide, appropriate referral or signposting should be considered.',
};

export const parents = {
  heading: 'Working With Parents and Caregivers',
  tagline: 'Support their journey. Do not choose it for them.',
  body: [
    'Parents and caregivers play an important role in shaping a young person’s confidence, opportunities and decisions. Their encouragement, expectations, experiences and access to information can influence how young people view their futures.',
    'At Dira, we encourage parents and caregivers to become informed partners in career development rather than making career decisions on behalf of their children.',
  ],
  listHeading: 'We encourage families to:',
  points: [
    'Listen to a young person’s interests, questions and aspirations.',
    'Recognise individual strengths instead of comparing children.',
    'Explore education and career opportunities beyond familiar or traditional choices.',
    'Understand the changing world of work and the different routes into employment.',
    'Discuss financial, academic and practical realities openly and constructively.',
    'Encourage responsible decision-making while respecting a young person’s developing independence.',
  ],
  closing:
    'Our aim is to strengthen communication between young people and their families so that career decisions are informed, realistic and supportive of individual growth.',
};

export const inclusiveApproach = {
  heading: 'An Inclusive and Developmental Approach',
  lead: 'We believe every individual deserves the opportunity to explore their potential and participate meaningfully in decisions about their future.',
  body: [
    'People do not begin their career journeys from the same circumstances. Disability, financial limitations, location, access to education, family responsibilities, previous experiences and other barriers may influence the opportunities available to them.',
    'Dira seeks to recognise these realities rather than judge individuals by them. We encourage exploration of accessible pathways, available support, reasonable accommodations and alternative routes where relevant.',
    'Our approach is respectful of individual differences and responsive to the needs of the people and communities we serve.',
  ],
};

export const gains = {
  heading: 'What Can You Gain From Working With Dira?',
  intro:
    'The outcomes depend on the individual’s needs and the service undertaken. They may include:',
  items: [
    {
      title: 'Greater self-awareness',
      description:
        'A clearer understanding of personal interests, strengths, values, abilities and aspirations.',
    },
    {
      title: 'Career and education awareness',
      description:
        'Better knowledge of occupations, skills, training options and educational pathways.',
    },
    {
      title: 'Informed decision-making',
      description: 'The ability to compare options and consider personal and practical factors.',
    },
    {
      title: 'A sense of direction',
      description: 'Greater clarity about possible next steps and development priorities.',
    },
    {
      title: 'Practical plans',
      description:
        'Career exploration summaries, pathway plans or action plans where appropriate.',
    },
    {
      title: 'Confidence and adaptability',
      description:
        'Improved readiness to navigate decisions, challenges and changing opportunities.',
    },
  ] as Value[],
  closing:
    'We do not promise a perfect career match or a predetermined outcome. We aim to equip individuals with the understanding, information and decision-making skills to navigate their own journeys.',
};