import type { FaqData } from '@/types';

export const faqData: FaqData = {
  badge: 'QNA',
  heading: 'Your Questions, Answered',
  faqs: [
    {
      id: '1',
      question: "What's your approach to front-end development?",
      answer:
        'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
    },
    {
      id: '2',
      question: 'How do you ensure websites load quickly and efficiently?',
      answer:
        'I leverage modern frameworks like Next.js, optimize images, implement efficient caching strategies, minimize JavaScript bundle sizes, and follow core web vitals best practices.',
    },
    {
      id: '3',
      question: 'What kind of projects do you specialize in?',
      answer:
        'I specialize in building interactive single-page applications, animated portfolios, modern SaaS dashboards, e-commerce web applications, and responsive landing pages.',
    },
    {
      id: '4',
      question: 'How do you handle project deadlines?',
      answer:
        'I break down projects into structured milestones with clear deliverables, maintaining transparent communication and using agile workflows to deliver on time.',
    },
    {
      id: '5',
      question: 'What technologies do you use?',
      answer:
        'My core stack includes React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Zustand/Redux Toolkit, and shadcn/ui components.',
    },
  ],
};
