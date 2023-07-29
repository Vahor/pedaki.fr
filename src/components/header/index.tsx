import React from "react";
import Logo from "~/components/header/logo";
import Navigation from "~/components/header/navigation";

const Header = () => {
  return (
    <header>
      <div
        className="container fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-screen-xl items-center justify-center pt-8 md:w-max"
        style={{
          paddingRight: "calc(2rem + var(--removed-body-scroll-bar-size, 0px))",
        }}
      >
        <div className="relative flex w-full flex-col rounded-lg bg-white px-4 py-2 shadow">
          <div className="flex justify-between gap-4">
            <Logo />
            <Navigation />
          </div>
          <div id="mobile-target"></div>
        </div>
      </div>

      {/* Grid bg */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-[-1] mx-auto h-96 max-w-screen-xl bg-grid-gray-200"
        style={{
          backgroundPositionX: "-16px",
        }}
      >
        <div className="h-full w-full bg-gradient-to-b from-transparent via-[#FAFBFD] to-[#FAFBFD]"></div>
      </div>
    </header>
  );
};

export default Header;
