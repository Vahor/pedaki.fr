import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex select-none items-center hover:opacity-75" href="/">
      <Image src="/logo.svg" alt="Pedaki" width="32" height="32" />
      <span className="ml-2 text-xl font-bold">pedaki</span>
    </Link>
  );
};

export default Logo;
