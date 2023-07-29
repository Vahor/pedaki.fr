"use client";

import React, { useState } from "react";
import Burger from "@pedaki/common/ui/burger";
import { cn } from "@pedaki/common/lib/utils";
import * as Portal from "@radix-ui/react-portal";

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
            "h-0 overflow-hidden transition-all duration-500 ease-in-out",
            mobileOpen ? "flex h-32 md:h-0" : "h-0",
          )}
        >
          <ul className="mt-4 flex w-full flex-col gap-2 border-t border-t-secondary pt-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </Portal.Root>
    </div>
  );
};

export default Mobile;
