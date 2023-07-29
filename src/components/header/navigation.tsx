import React from "react";
import User from "~/components/header/user";
import Mobile from "~/components/header/mobile";
import Desktop from "~/components/header/desktop";

const Navigation = () => {
  return (
    <>
      {/*Desktop navigation*/}
      <div className="hidden md:flex">
        <Desktop />
      </div>

      <div className="flex items-center gap-4">
        <User />
        <Mobile />
      </div>
    </>
  );
};

export default Navigation;
