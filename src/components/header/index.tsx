import React from "react";
import Logo from "~/components/header/logo";
import Navigation from "~/components/header/navigation";

const Header = () => {
  return (
    <header className="container fixed inset-x-0 top-0 mx-auto flex w-full max-w-screen-xl items-center justify-center pt-8 md:w-max">
      <div className="relative flex w-full flex-col rounded-lg bg-white px-4 py-2 shadow">
        <div className="flex justify-between gap-4">
          <Logo />
          <Navigation />
        </div>
        <div id="mobile-target"></div>
      </div>
    </header>
  );
};

export default Header;
