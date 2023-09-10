'use client';

import { useScrollLock } from '@pedaki/common/hooks';
import { Burger, Button, ScrollArea } from '@pedaki/design';
import { cn } from '@pedaki/design/utils';
import { Portal } from '@radix-ui/react-portal';
import { navigation } from '~/config/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Mobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  useScrollLock(mobileOpen);

  return (
    <div className="md:hidden">
      {/* Mobile burger */}
      <Burger onClick={() => setMobileOpen(!mobileOpen)} active={mobileOpen} />
      <PortalNav mobileOpen={mobileOpen} closeMobile={closeMobile} />
    </div>
  );
};

const PortalNav = ({
  mobileOpen,
  closeMobile,
}: {
  mobileOpen: boolean;
  closeMobile: () => void;
}) => {
  // FIXME: isClient is a trick to avoid SSR (bug with Portal)

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Portal
      asChild
      container={typeof document !== 'undefined' ? document.getElementById('mobile-target') : null}
    >
      {/* Mobile navigation */}
      <nav
        className={cn(
          'relative flex h-0 overflow-hidden transition-all duration-500 ease-in-out md:h-0',
          mobileOpen ? 'h-[min(60vh,600px)]' : 'h-0',
        )}
      >
        <div className="mt-2 w-full border-t border-t-secondary pt-2">
          <ScrollArea className="flex h-full w-full flex-col gap-2 overflow-auto">
            <ul className="mr-16">
              {navigation.map(item => {
                if (item.children) {
                  return (
                    <li key={item.name} className="mt-6 first:mt-0">
                      <div className="mb-3.5 font-semibold text-gray-900">{item.name}</div>
                      <ul>
                        {item.children.map(subitem => (
                          <li key={subitem.name}>
                            <Button
                              asChild
                              variant="ghost"
                              className="flex justify-start px-0 py-0"
                              onClick={closeMobile}
                            >
                              <Link href={subitem.href} className="px-4 py-2">
                                {subitem.name}
                              </Link>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return null;
              })}
            </ul>
          </ScrollArea>
        </div>
      </nav>
    </Portal>
  );
};

export default Mobile;
