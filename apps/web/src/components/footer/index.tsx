import { Button } from '@pedaki/common/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from "../header/logo";

const Footer = () => {
  return (
    <footer className="pt-32">
      <div className="container">
        <div className="flex justify-between gap-12 border-t pb-8 pt-12 flex-col md:flex-row">
          <div className="max-w-[20rem] w-full mx-auto">
            <Link className="flex select-none items-center hover:opacity-75 mb-4" href="/">
              <Image src="/logo.svg" alt="Pedaki" width="36" height="36" />
              <span className="ml-2 mb-1 inline text-2xl font-bold">pedaki</span>
            </Link>
            <p className="font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse.</p>
          </div>
          <div className="flex flex-1 gap-4 lg:gap-16 justify-center flex-col md:flex-row divide-y md:divide-y-0 max-w-[20rem] md:max-w-full w-full mx-auto">
            <div className="flex flex-col gap-6 pt-4">
              <p className="font-semibold text-sm2">Features</p>
              <ul className="-ml-3.5">
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/features">Feature 1</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/features">Feature 2</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/features">Feature 3</Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-4">
              <p className="font-semibold text-sm2 text-left">Resources</p>
              <ul className="-ml-3.5">
                <li>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/features">Feature 1</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/features">Feature 2</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/features">Feature 3</Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-4">
              <p className="font-semibold text-sm2 text-left">Jsp</p>
              <ul className="-ml-3.5">
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/features">Feature 1</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/features">Feature 2</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" asChild>
                    <Link href="/features">Feature 3</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4 max-w-[20rem] md:max-w-full mx-auto">Pedaki © 2023</div>
      </div>
    </footer>
  );
};

export default Footer;
