import { Button } from '@pedaki/common/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="bg-background">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 divide-y pb-8 pt-12 md:flex-row md:gap-12 md:divide-y-0">
            <div className="mx-auto w-full max-w-[40rem] md:max-w-[20rem]">
              <Link className="mb-4 flex select-none items-center hover:opacity-75" href="/">
                <Image src="/logo-light.svg" alt="Pedaki" height="36" width="120" className="dark:hidden inline" />
                <Image src="/logo-dark.svg" alt="Pedaki" height="36" width="120" className="hidden dark:inline" />
              </Link>
              <p className="text-sm2 font-medium text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-[40rem] flex-1 flex-col justify-center gap-4 divide-y md:max-w-full md:flex-row md:divide-y-0 lg:gap-16">
              <div className="flex flex-col gap-3 pt-4">
                <p className="text-sm2 font-semibold">Features</p>
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
              <div className="flex flex-col gap-3 pt-4">
                <p className="text-left text-sm2 font-semibold">Resources</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/features"
                      className="text-sm font-medium text-gray-700 hover:text-primary"
                    >
                      Feature 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features"
                      className="text-sm font-medium text-gray-700 hover:text-primary"
                    >
                      Feature 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/features"
                      className="text-sm font-medium text-gray-700 hover:text-primary"
                    >
                      Feature 3
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <p className="text-left text-sm2 font-semibold">Jsp</p>
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
          <div className="mx-auto max-w-[40rem] py-4 md:max-w-full">Pedaki © 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
