import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link className="flex select-none items-center hover:opacity-75" href="/">
      <Image src="/logo.svg" alt="Pedaki" width="36" height="36" />
      <span className="mb-0.5 ml-2 inline text-lg font-bold">pedaki</span>
    </Link>
  );
};

export default Logo;
