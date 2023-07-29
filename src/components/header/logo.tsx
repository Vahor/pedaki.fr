import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex select-none items-center hover:opacity-75" href="/">
      <Image src="/logo.svg" alt="Pedaki" width="36" height="36" />
      <span className="inline md:hidden ml-2 text-lg font-bold">pedaki</span>
    </Link>
  );
};

export default Logo;
