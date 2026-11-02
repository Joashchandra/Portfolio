export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface NavbarData {
  brand: {
    name: string;
    logo: string;
  };
  menuItems: NavItem[];
}

export interface AboutMeItem {
  id: string;
  title: string;
  projectsCount: string;
  iconType: 'monitor' | 'layout' | 'briefcase';
}

export interface AboutMeData {
  badge: string;
  heading: string;
  description: string;
  items: AboutMeItem[];
  stats: {
    projectsCompleted: {
      count: string;
      label: string;
    };
    happyClients: {
      count: string;
      label: string;
      avatars: string[];
    };
  };
}
