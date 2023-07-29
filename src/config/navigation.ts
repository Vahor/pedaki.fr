type Navigation = {
  name: string;
} & (
  | {
      children?: never;
      href: string;
    }
  | {
      href?: never;
      children: (Navigation & { description: string })[];
    }
);

export const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Modules",
    children: [
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
    ],
  },
  {
    name: "Resources",
    children: [
      {
        href: "/",
        name: "About",
        description: "About the project",
      },
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
    ],
  },
  {
    name: "Documentation",
    children: [
      {
        href: "/",
        name: "About",
        description: "About the project",
      },
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
      {
        href: "/",
        name: "Gestion de classes",
        description: "About the project",
      },
    ],
  },
] as Navigation[];
