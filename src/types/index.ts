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
