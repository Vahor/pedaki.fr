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
        href: '/',
        name: 'Gestion de classes 1',
        description: 'About the project',
      },
      {
        href: '/',
        name: 'Gestion de classes 2',
        description: 'About the project',
      },
      {
        href: '/',
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
        href: '/',
        name: 'Gestion de classes 1',
        description: 'About the project',
      },
      {
        href: '/',
        name: 'Gestion de classes 2',
        description: 'About the project',
      },
      {
        href: '/',
        name: 'Gestion de classes 3',
        description: 'About the project',
      },
    ],
  },
  {
    name: 'Documentation',
    children: [
      {
        href: '/',
        name: 'About',
        description: 'About the project',
      },
      {
        href: '/',
        name: 'Gestion de classes 1',
        description: 'About the project',
      },
      {
        href: '/',
        name: 'Gestion de classes 2',
        description: 'About the project',
      },
    ],
  },
] as Navigation[];
