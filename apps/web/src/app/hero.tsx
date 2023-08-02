import { Badge } from '@pedaki/common/ui/badge';
import { Button } from '@pedaki/common/ui/button';
import React from 'react';
import VideoDemo from './video-demo';

const Hero = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-md flex-col justify-center gap-3 px-4 pt-16 md:gap-4">
        <div>
          <Badges />
        </div>
        <h1 className="text-center text-4xl font-semibold tracking-tighter text-gray-900 md:text-6xl">
          Lorem Ipsum Dolor Sit Amet.
        </h1>
        <p className="text-center text-base leading-7 text-muted-foreground md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex facilis non,
          recusandae tempora voluptatum.
        </p>

        <div className="mx-24 mt-4 flex flex-col gap-4 md:mx-auto md:flex-row">
          <Button variant="default" size="lg" className="text-base bg-amber-500 font-bold hover:opacity-90">
            Découvrir le projet
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
      <Badge variant="secondary" className="border-accent-foreground/10">Ouverture prévue en 2024</Badge>
    </div>
  );
};

export default Hero;
