import React from "react";
import User from "~/components/header/user";
import Mobile from "~/components/header/mobile";

const Navigation = () => {
  return (
    <>
      {/*Desktop navigation*/}
      <div className="hidden lg:flex"></div>

      <div className="flex items-center gap-4">
        <User />
        <Mobile />
      </div>
    </>
  );
};

export default Navigation;
