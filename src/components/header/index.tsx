import React from "react";
import Logo from "~/components/header/logo";
import Navigation from "~/components/header/navigation";

const Header = () => {
  return (
    <header className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-8 px-4 md:px-8 lg:px-16">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
