import { Badge } from '@pedaki/common/ui/badge';
import { Button } from '@pedaki/common/ui/button';
import React from 'react';
import Balancer from 'react-wrap-balancer';


const Hero = () => {
  return (
    <section>
      <div className="flex flex-col justify-center gap-3 px-4 pt-8 pb-2 md:gap-4">
        <div>
          <Badges />
        </div>
        <div className="mx-auto max-w-screen-sm">
          <Balancer
            as="h1"
            className="text-center text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl"
          >
            Pedaki rend la gestion scolaire <u className="decoration-primary decoration-4">magique</u>
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

        <div className="mx-8 mt-4 flex flex-col gap-4 sm:mx-auto md:flex-row">
          <Button variant="default" size="lg" className="space-x-2 font-bold hover:opacity-90">
            <span>Découvrir le projet</span>
            {/*TODO move this icon somewhere like in @pedaki/common/ui/icons */}
            <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
              />
            </svg>
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