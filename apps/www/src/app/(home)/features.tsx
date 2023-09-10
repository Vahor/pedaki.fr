import { CardDescription, CardTitle } from '@pedaki/design/ui/card';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import { StyledLink } from '~/components/StyledLink';
import Link from 'next/link';
import React from 'react';

const Features = () => {
  return (
    <section className="border-y bg-gray-100 py-16">
      <div className="container py-4">
        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Des super trucs</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis, ipsam
            </p>
          </div>
          <div>
            <Link
              href="https://docs.pedaki.fr"
              className="group flex items-center gap-1 pt-2 text-sm font-semibold text-primary transition-opacity duration-300 hover:opacity-75"
              prefetch={false}
            >
              <span>En savoir plus</span>
              <AnimatedChevronRight />
            </Link>
          </div>
        </div>
        <div className="relative mb-2 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1">
          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 1"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Super sécurisé"
            link="https://docs.pedaki.fr"
            video="a/v/feature1.mp4"
            alt="mock"
          />
          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 2"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Gere les trucs"
            link="https://docs.pedaki.fr"
            video="a/v/feature2.mp4"
            alt="mock"
          />

          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 3"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Host le chez toi"
            link="https://docs.pedaki.fr"
            video="a/v/feature3.mp4"
            alt="mock"
          />

          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 4"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Super option 3"
            link="https://docs.pedaki.fr"
            video="a/v/feature3.mp4"
            alt="mock"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{
  title: string;
  description: string;
  link: string;
  learnMore: string;
  video: string;
  alt: string;
}> = ({ title, description, link, learnMore, alt, video }) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-16 lg:even:flex-row-reverse">
      <div className="relative space-y-4 p-0.5">
        <div className="h-10 w-10 rounded-full bg-primary/50">{/*  TODO icon per feature */}</div>
        <CardTitle className="">{title}</CardTitle>
        <CardDescription>
          <span>{description}</span>
          <StyledLink
            href={link}
            prefetch={false}
            className="group mt-2 flex w-max items-center gap-1 font-semibold"
          >
            <span>{learnMore}</span>
            <AnimatedChevronRight />
          </StyledLink>
        </CardDescription>
      </div>
      <video
        title={alt}
        loop
        playsInline
        autoPlay
        muted
        controls={false}
        className="mb-4 max-h-[300px] overflow-hidden rounded-xl bg-secondary-foreground object-cover object-center p-1 lg:max-h-[400px] lg:w-[50%]"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Features;
