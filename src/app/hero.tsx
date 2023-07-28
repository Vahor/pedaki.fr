import React from "react";
import { Badge } from "@pedaki/common/ui/badge";
import { Button } from "@pedaki/common/ui/button";
import Image from "next/image";
import mock from "../../public/a/mock-hero.png";

const Hero = () => {
  return (
    <>
      <div className="mx-auto mt-8 flex max-w-screen-md flex-col justify-center gap-3 px-4 md:mt-16 md:gap-4">
        <div>
          <Badges />
        </div>
        <h1 className="text-center text-4xl font-bold tracking-tighter text-gray-900 md:text-6xl">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="mx-auto w-2/3 text-center text-sm leading-7 text-muted-foreground md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          ex facilis non, recusandae tempora voluptatum.
        </p>

        <div className="mx-8 mt-4 flex flex-col gap-4 md:mx-auto md:flex-row">
          <Button variant="secondary">Lorem ipsum</Button>
          <Button variant="default">Lorem ipsum</Button>
        </div>
      </div>

      <div className="relative mt-8 w-full max-w-screen-lg px-4 flex justify-center mx-auto">
        <Image src={mock} alt="mock" layout="responsive" priority />
      </div>
    </>
  );
};

const Badges = () => {
  return (
    <div className="flex justify-center gap-4">
      <Badge variant="outline">Ouverture prévue en 2024</Badge>
    </div>
  );
};

export default Hero;