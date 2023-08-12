'use client';

import { cn } from '@pedaki/common/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@pedaki/common/ui/navigation-menu';
import { navigation } from '~/config/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Desktop = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigation.map(item => {
          const isActive =
            pathname === item.href ||
            (item.children?.some(subitem => subitem.href === pathname) ?? false);
          if (item.children) {
            return (
              <NavigationMenuItem key={item.name}>
                <>
                  <NavigationMenuTrigger className="bg-white" data-active={isActive}>
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                      {item.children.map(subitem => {
                        const isChildrenActive = pathname === subitem.href;

                        return (
                          <ListItem
                            href={subitem.href}
                            title={subitem.name}
                            key={subitem.name}
                            data-active={isChildrenActive}
                          >
                            {subitem.description}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  'data-[active=true]:text-accent-foreground',
                )}
                data-active={isActive}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href!}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';

export default Desktop;