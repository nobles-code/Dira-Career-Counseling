// src/content/extras.ts
export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const howItWorks = {
  heading: 'Getting started is simple',
  intro: 'No forms and no pressure. Here is what happens when you reach out.',
  steps: [
    {
      step: 1,
      title: 'Say hello',
      description:
        'Send us a message on WhatsApp, call or email. Tell us briefly who the support is for and what you would like help with.',
    },
    {
      step: 2,
      title: 'Talk it through',
      description:
        'We listen, ask a few questions and help you see which of our services fits you, your child or your school best.',
    },
    {
      step: 3,
      title: 'Take the next step',
      description:
        'Together we agree a practical way forward, whether that is a guidance session, a parent workshop or a programme for your school.',
    },
  ] as HowItWorksStep[],
};

export const faqSection = {
  heading: 'Questions you may have',
  intro: 'A few quick answers. If yours is not here, just ask us.',
};

export const faqs: Faq[] = [
  {
    question: 'Who can work with Dira?',
    answer:
      'Learners and young people, parents and families, schools, and community organisations and partners. If you are unsure where you fit, send us a message and we will point you in the right direction.',
  },
  {
    question: 'How do I get started?',
    answer:
      'The easiest way is a message on WhatsApp. You can also call or email us. We respond during our working hours, which are listed on the Contact page.',
  },
  {
    question: 'Is career guidance only for school leavers?',
    answer:
      'No. Choices about education and work come up many times in a person’s life. We see career development as a continuous process of learning and exploration, not a one-time decision.',
  },
  {
    question: 'Do parents take part?',
    answer:
      'Yes. Parents are important partners in a young person’s journey, which is why parent education is one of our core services.',
  },
  {
    question: 'Can you work with our school or organisation?',
    answer:
      'Yes. We run career programmes with schools and partner with community organisations. Visit the Partner With Us page or message us to start the conversation.',
  },
];