import React from "react";
import { Badge } from "@pedaki/common/ui/badge";
import { Button } from "@pedaki/common/ui/button";
import VideoDemo from "~/app/video-demo";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-screen-md flex-col justify-center gap-3 px-4 pt-32 md:gap-4">
        <div>
          <Badges />
        </div>
        <h1 className="text-center text-4xl font-semibold tracking-tighter text-gray-900 md:text-6xl">
          Lorem Ipsum Dolor Sit Amet.
        </h1>
        <p className="mx-auto w-2/3 text-center text-sm leading-7 text-muted-foreground md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          ex facilis non, recusandae tempora voluptatum.
        </p>

        <div className="mx-8 mt-4 flex flex-col gap-4 md:mx-auto md:flex-row">
          <Button variant="default">Lorem ipsum</Button>
        </div>
      </div>

      <VideoDemo />
    </section>
  );
};

const Badges = () => {
  return (
    <div className="flex justify-center gap-4">
      <Badge variant="default">Ouverture prévue en 2024</Badge>
    </div>
  );
};

export default Hero;
