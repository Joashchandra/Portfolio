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

export interface SkillsetItem {
  id: string;
  name: string;
  percentage: number;
  description: string;
  iconUrl?: string;
}

export interface SkillsetData {
  badge: string;
  heading: string;
  skills: SkillsetItem[];
}

export interface HeroData {
  greeting: string;
  name: string;
  description: string;
  profileImage: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  iconType: 'dribbble' | 'instagram' | 'linkedin';
  src: string;
  alt: string;
}

export interface ComparisonItem {
  id: string;
  text: string;
}

export interface ComparisonData {
  badge: string;
  heading: string;
  myColumn: {
    title: string;
    avatar: string;
    traits: ComparisonItem[];
  };
  otherColumn: {
    title: string;
    traits: ComparisonItem[];
  };
}
