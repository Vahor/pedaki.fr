import { Badge } from '@pedaki/common/ui/badge';
import { Button } from '@pedaki/common/ui/button';
import Link from 'next/link';
import React from 'react';
import Balancer from 'react-wrap-balancer';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col justify-center gap-4 px-4 pt-8">
        <div>
          <Badges />
        </div>
        <div className="mx-auto max-w-screen-sm">
          <Balancer
            as="h1"
            className="text-center text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl"
          >
            Pedaki rend la gestion scolaire magique
          </Balancer>
        </div>
        <div className="mx-auto max-w-screen-md">
          <Balancer
            as="p"
            className="text-center text-base leading-7 text-muted-foreground md:text-lg"
          >
            Un seul outil pour Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure
            nisi non nostrum possimus repellat suscipit!
          </Balancer>
        </div>

        <div className="mx-auto flex flex-col gap-4 sm:flex-row md:mt-6">
          <Button
            variant="secondary"
            size="lg"
            className="space-x-2 border font-bold hover:opacity-90"
            asChild
          >
            <Link href="https://demo.pedaki.fr">Ouvrir la démo</Link>
          </Button>
          <Button variant="default" size="lg" className="space-x-2 font-bold hover:opacity-90">
            <span>Découvrir le projet</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Badges = () => {
  return (
    <div className="flex justify-center gap-4">
      <Badge variant="secondary" className="border-accent-foreground/10">
        Ouverture prévue en 2024
      </Badge>
    </div>
  );
};

export default Hero;
