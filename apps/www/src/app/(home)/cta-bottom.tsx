import {Button} from '@pedaki/design';
import {AnimatedChevronRight} from '~/components/AnimatedChevronRight';
import Link from 'next/link';
import React from 'react';

const CallToActionBottom = () => {
  return (
    <div className="border-t bg-gray-100 py-16">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold text-foreground md:text-5xl">
            Un outil essentiel <br className="hidden md:block" />
            pour toutes les écoles.
          </h1>
          <p className="py-8 text-base text-muted-foreground md:text-lg">
            Dites adieu aux feuilles de papier et aux tableurs Excel{' '}
            <br className="hidden md:block" />
            et bonjour à un outil simple qui se concentre sur ce qui compte vraiment.
          </p>
        </div>
        <div>
          <Link href="https://docs.pedaki.fr">
            <Button size="lg" variant="default" className="group space-x-2 font-bold">
              <span>Créer mon compte</span>
              <AnimatedChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBottom;
