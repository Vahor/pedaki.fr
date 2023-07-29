"use client";

import React, { useState } from "react";
import Burger from "@pedaki/common/ui/burger";
import { cn } from "@pedaki/common/lib/utils";
import * as Portal from "@radix-ui/react-portal";
import { navigation } from "~/config/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@pedaki/common/ui/accordion";

const Mobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="md:hidden">
      {/* Mobile burger */}
      <Burger onClick={() => setMobileOpen(!mobileOpen)} active={mobileOpen} />
      <Portal.Root
        container={
          typeof window !== "undefined"
            ? document.getElementById("mobile-target")
            : null
        }
      >
        {/* Mobile navigation */}
        <nav
          className={cn(
            "relative h-0 overflow-hidden transition-all duration-500 ease-in-out",
            mobileOpen ? "flex h-96 md:h-0" : "h-0",
          )}
        >
          <ul className="mt-4 flex w-full flex-col gap-2 border-t border-t-secondary pt-4">
            <Accordion type="single" collapsible>
              {navigation.map((item) => {
                if (item.children) {
                  return (
                    <li key={item.name}>
                      <AccordionItem
                        value={item.name}
                        className="border-transparent"
                      >
                        <AccordionTrigger>{item.name}</AccordionTrigger>
                        <AccordionContent>
                          <ul>
                            {item.children.map((subitem) => (
                              <li key={subitem.name}>
                                <a href={subitem.href}>{subitem.name}</a>
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
      </Portal.Root>
    </div>
  );
};

export default Mobile;
