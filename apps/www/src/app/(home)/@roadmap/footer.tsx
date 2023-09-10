import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-6 flex w-full justify-center">
      <Link href="https://github.com/vahor/pedaki-pedaki.fr" prefetch={false} target="_blank">
        <Button variant="outline" className="group gap-2 bg-white">
          {/*TODO: add env variable for the github url*/}
          <span>Rejoindre la communauté</span>
          <AnimatedChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default Footer;
