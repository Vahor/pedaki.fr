type Navigation = {
  name: string;
} & (
  | {
      children?: never;
      href: string;
    }
  | {
      href?: never;
      children: (Navigation & { href: string; description: string })[];
    }
);

export const navigation = [
  {
    name: 'Modules',
    children: [
      {
        href: '/1',
        name: 'Gestion de classes 1',
        description: 'About the project',
      },
      {
        href: '/2',
        name: 'Gestion de classes 2',
        description: 'About the project',
      },
      {
        href: '/3',
        name: 'Gestion de classes 3',
        description: 'About the project',
      },
    ],
  },
  {
    name: 'Resources',
    children: [
      {
        href: '/pricing',
        name: 'Pricing',
        description: 'About the project',
      },
      {
        href: '/4',
        name: 'Gestion de classes 1',
        description: 'About the project',
      },
      {
        href: '/5',
        name: 'Gestion de classes 2',
        description: 'About the project',
      },
      {
        href: '/6',
        name: 'Gestion de classes 3',
        description: 'About the project',
      },
    ],
  },
  {
    name: 'Documentation',
    children: [
      {
        href: '/6',
        name: 'About',
        description: 'About the project',
      },
      {
        href: '/7',
        name: 'Gestion de classes 1',
        description: 'About the project',
      },
      {
        href: '/8',
        name: 'Gestion de classes 2',
        description: 'About the project',
      },
    ],
  },
] as Navigation[];
