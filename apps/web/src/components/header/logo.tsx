import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link className="flex select-none items-center hover:opacity-75" href="/">
        <Image src="/logo-light.svg" alt="Pedaki" height="36" width="120" className="dark:hidden inline" />
        <Image src="/logo-dark.svg" alt="Pedaki" height="36" width="120" className="hidden dark:inline" />
    </Link>
  );
};

export default Logo;
