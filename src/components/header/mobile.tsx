'use client';

import { cn } from '@pedaki/common/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@pedaki/common/ui/accordion';
import Burger from '@pedaki/common/ui/burger';
import { Portal } from '@radix-ui/react-portal';
import { navigation } from '~/config/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Mobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile burger */}
      <Burger onClick={() => setMobileOpen(!mobileOpen)} active={mobileOpen} />
      <PortalNav mobileOpen={mobileOpen} />
    </div>
  );
};

const PortalNav = ({ mobileOpen }: { mobileOpen: boolean }) => {
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
          mobileOpen ? 'h-96' : 'h-0',
        )}
      >
        <ul className="mt-4 flex w-full flex-col gap-2 border-t border-t-secondary pt-4">
          <Accordion type="single" collapsible>
            {navigation.map(item => {
              if (item.children) {
                return (
                  <li key={item.name}>
                    <AccordionItem value={item.name} className="border-transparent">
                      <AccordionTrigger>{item.name}</AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {item.children.map(subitem => (
                            <li key={subitem.name}>
                              <Link href={subitem.href}>{subitem.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </li>
                );
              }

              return null;
            })}
          </Accordion>
        </ul>
      </nav>
    </Portal>
  );
};

export default Mobile;
