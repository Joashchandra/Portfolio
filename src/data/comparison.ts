import type { ComparisonData } from '@/types';

export const comparisonData: ComparisonData = {
  badge: 'COMPARISON',
  heading: 'Why I Stand Out',
  myColumn: {
    title: 'With Me',
    avatar: '/portrait.png',
    traits: [
      { id: '1', text: 'React Expert' },
      { id: '2', text: 'Precise Website Implementation' },
      { id: '3', text: 'TypeScript Proficiency' },
      { id: '4', text: 'Clean, Maintainable Code' },
      { id: '5', text: 'Responsive Website Development' },
      { id: '6', text: 'Performance Optimization' },
      { id: '7', text: 'UI Design Proficiency (Figma)' },
    ],
  },
  otherColumn: {
    title: 'Another Talent',
    traits: [
      { id: '1', text: 'Basic React Knowledge' },
      { id: '2', text: 'Inconsistent Design Translation' },
      { id: '3', text: 'Little to No TypeScript Knowledge' },
      { id: '4', text: 'Unstructured Code' },
      { id: '5', text: 'Inconsistent Responsiveness' },
      { id: '6', text: 'Slow and Heavy Websites' },
      { id: '7', text: 'No Design Skills' },
    ],
  },
};
