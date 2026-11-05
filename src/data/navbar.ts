import type { NavbarData } from '@/types';

export const navbarData: { navbar: NavbarData } = {
  navbar: {
    brand: {
      name: 'Your Logo',
      logo: '/logo.svg',
    },
    menuItems: [
      {
        id: 'home',
        label: 'Home',
        path: '#home',
      },
      {
        id: 'about',
        label: 'About',
        path: '#about',
      },
      {
        id: 'skill',
        label: 'Skill',
        path: '#skill',
      },
      {
        id: 'projects',
        label: 'Projects',
        path: '#portfolio',
      },
      {
        id: 'faq',
        label: 'FAQ',
        path: '#faq',
      },
      {
        id: 'contact',
        label: 'Contact',
        path: '#contact',
      },
    ],
  },
};
