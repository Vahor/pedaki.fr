"use client";

import React, { useState } from "react";
import Burger from "@pedaki/common/ui/burger";

const Mobile = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex lg:hidden">
      {/* Mobile burger */}
      <div className="flex lg:hidden">
        <Burger
          onClick={() => setMobileOpen(!mobileOpen)}
          active={mobileOpen}
        />
      </div>
      {/* Mobile navigation */}
      <div
        className={`fixed left-0 top-16 z-10 h-screen w-full bg-white ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
