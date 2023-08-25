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
        href: 'https://docs.pedaki.fr/modules/class-management',
        name: 'Gestion de classes 1',
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
    ],
  },
  {
    name: 'Documentation',
    children: [],
  },
] as Navigation[];
