import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import Link from 'next/link';
import React from 'react';

const CallToActionBottom = () => {
  return (
    <div className="bg-surface py-20 text-white">
      <div className="container flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-title-3 font-bold lg:text-title-2 lg:font-bold" id="open-source">
            Un outil essentiel <br className="hidden md:block" />
            pour <span className="underline decoration-primary-base decoration-dotted">
              toutes
            </span>{' '}
            les écoles.
          </h2>
        </div>
        <div>
          <Link href="https://docs.pedaki.fr">
            <Button size="lg" variant="filled-primary" className="font-semibold">
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
