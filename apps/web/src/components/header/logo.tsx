import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link className="flex select-none items-center hover:opacity-75" href="/">
      <Image src="/logo.svg" alt="Pedaki" width="36" height="36" />
      <span className="ml-2 inline text-lg font-bold mb-0.5">pedaki</span>
    </Link>
  );
};

export default Logo;
