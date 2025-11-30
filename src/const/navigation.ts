// Navigation configuration for top nav bar
export interface NavItem {
  key: string;
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    key: 'projects',
    label: 'Projects',
    path: '/projects',
  },
  {
    key: 'organizations',
    label: 'Organizations',
    path: '/organizations',
  },
];

export const NAV_TITLE = 'Pipe Project';

