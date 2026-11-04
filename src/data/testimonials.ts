import type { TestimonialData } from '@/types';

export const testimonialData: TestimonialData = {
  badge: 'TESTIMONIALS',
  heading: 'What Our Clients Say',
  testimonials: [
    {
      id: '1',
      companyName: 'Adobe',
      companyLogo: '/adobe.svg',
      quote: 'They tailor their solutions to our specific needs and goals.',
      authorName: 'Jack Grealish',
      authorRole: 'CEO Adobe',
      authorAvatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: '2',
      companyName: 'Airbnb',
      companyLogo: '/airbnb.svg',
      quote:
        'They organized their work and internal management was outstanding.',
      authorName: 'Kevin De Bruyne',
      authorRole: 'Project Manager Air BNB',
      authorAvatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      companyName: 'Loom',
      companyLogo: '/loom.svg',
      quote: 'Working with them was a great experience.',
      authorName: 'Jeremy Doku',
      authorRole: 'Senior Developers Loom',
      authorAvatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: '4',
      companyName: 'Spotify',
      companyLogo: '/spotify.svg',
      quote: 'The results exceeded our expectations across all metrics.',
      authorName: 'Alexia Putellas',
      authorRole: 'Product Lead Spotify',
      authorAvatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
  ],
};
