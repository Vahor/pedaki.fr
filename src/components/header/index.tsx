import Logo from '~/components/header/logo';
import Navigation from '~/components/header/navigation';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="sticky inset-x-0 top-2 z-50 mt-8">
        <div
          className="container mx-auto flex w-full max-w-screen-xl items-center justify-center md:w-max"
          style={{
            paddingRight: 'calc(2rem + var(--removed-body-scroll-bar-size, 0px))',
          }}
        >
          <div className="relative flex w-full flex-col rounded-lg bg-white px-4 py-2 shadow-xl">
            <div className="flex justify-between gap-4">
              <Logo />
              <Navigation />
            </div>
            <div id="mobile-target"></div>
          </div>
        </div>
      </header>
      {/* Grid bg */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-[-1] mx-auto h-96 bg-grid-gray-200"
        style={{
          backgroundPositionX: '-16px',
        }}
      >
        <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-50 to-gray-50"></div>
      </div>
    </>
  );
};

export default Header;
