"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@pedaki/common/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@pedaki/common/lib/utils";

const Desktop = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
              <ListItem href="/docs" title="SelfHost">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
              <ListItem href="/docs" title="Jsp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Modules</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <ListItem href="/docs" title="Gestion de classe">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
              <ListItem href="/docs" title="Gestion de classe">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
              <ListItem href="/docs" title="Gestion de classe">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ressources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
              <ListItem href="/docs" title="SelfHost">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
              <ListItem href="/docs" title="Jsp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                quidem.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Desktop;
