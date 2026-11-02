import type { AboutMeData } from '@/types';

export const aboutMeData: AboutMeData = {
  badge: 'ABOUT ME',
  heading: 'What Do I Help?',
  description:
    'I am a Frontend Developer dedicated to solving problems and creating impactful digital experiences. By combining process-driven design and modern development practices, I build intuitive and responsive digital products that not only enhance user satisfaction but also drive business success. Let’s collaborate to bring your vision to life and elevate your digital presence',
  items: [
    {
      id: '1',
      title: 'Landing Page',
      projectsCount: '5',
      iconType: 'monitor',
    },
    {
      id: '2',
      title: 'Dashboard Saas',
      projectsCount: '7',
      iconType: 'layout',
    },
    {
      id: '3',
      title: 'Company Profile',
      projectsCount: '12',
      iconType: 'briefcase',
    },
  ],
  stats: {
    projectsCompleted: {
      count: '200+',
      label: 'Project Completed',
    },
    happyClients: {
      count: '50+',
      label: 'Happy Clients',
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      ],
    },
  },
};
