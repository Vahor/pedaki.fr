import Desktop from './desktop';
import Mobile from './mobile';
import User from './user';
import React from 'react';

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
