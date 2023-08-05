import { Button } from '@pedaki/common/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="dark pt-32">
      <div className="bg-background text-foreground">
        <div className="container">
          <div className="flex flex-col justify-between gap-12 pb-8 pt-12 md:flex-row">
            <div className="mx-auto w-full max-w-[20rem]">
              <Link className="mb-4 flex select-none items-center hover:opacity-75" href="/">
                <Image src="/logo.svg" alt="Pedaki" width="36" height="36" />
                <span className="mb-1 ml-2 inline text-2xl font-bold">pedaki</span>
              </Link>
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, esse.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-[20rem] flex-1 flex-col justify-center gap-4 divide-y md:max-w-full md:flex-row md:divide-y-0 lg:gap-16">
              <div className="flex flex-col gap-6 pt-4">
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
              <div className="flex flex-col gap-6 pt-4">
                <p className="text-left text-sm2 font-semibold">Resources</p>
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
          <div className="mx-auto max-w-[20rem] py-4 md:max-w-full">Pedaki © 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
