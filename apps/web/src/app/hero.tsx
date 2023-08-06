import { Badge } from '@pedaki/common/ui/badge';
import { Button } from '@pedaki/common/ui/button';
import React from 'react';
import VideoDemo from './video-demo';


const Hero = () => {
  return (
    <section>
      <div className="flex flex-col justify-center gap-3 px-4 pt-8 md:gap-4">
        <div>
          <Badges />
        </div>
        <h1 className="text-center text-4xl font-bold tracking-tighter text-gray-900 md:text-6xl">
          Lorem Ipsum Dolor Sit Amet.
        </h1>
        <p className="mx-auto max-w-screen-md text-center text-base leading-7 text-muted-foreground md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex facilis non,
          recusandae tempora voluptatum.
        </p>

        <div className="mx-8 mt-4 flex flex-col gap-4 sm:mx-auto md:flex-row">
          <Button variant="default" size="lg" className="font-bold hover:opacity-90 space-x-2">
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

      <VideoDemo />
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