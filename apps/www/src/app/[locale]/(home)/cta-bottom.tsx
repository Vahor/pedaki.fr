import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import Link from 'next/link';
import React from 'react';

const CallToActionBottom = () => {
  return (
    <div className="dark bg-secondary py-20">
      <div className="container flex justify-between md:items-center flex-col md:flex-row gap-4">
        <div>
          <h2 className="text-4xl font-bold lg:text-5xl" id="open-source">
            Un outil essentiel <br className="hidden md:block" />
            pour <span className="underline decoration-orange-9 decoration-dotted">toutes</span> les écoles.
          </h2>
        </div>
        <div>
          <Link href="https://docs.pedaki.fr">
            <Button size="lg" variant="orange" className="font-semibold">
              <span>Créer mon compte</span>
              <AnimatedChevronRight className="text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBottom;
