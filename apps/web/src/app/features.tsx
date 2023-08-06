import { CardDescription, CardTitle } from '@pedaki/common/ui/card';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mock from '../../public/a/mock-hero.webp';


const Features = () => {
  return (
    <section className="border-y bg-gray-100 py-7">
      <div className="container py-4">
        <div className="flex flex-row items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Des super trucs</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis, ipsam
            </p>
          </div>
          <div>
            <Link
              href="/docs"
              className="flex items-center gap-1 pt-2 text-sm font-semibold text-primary transition-opacity duration-300 hover:opacity-75"
            >
              <span>En savoir plus</span>
              {/* TODO: replace with arrow icon from @pedaki/common/ui/icons */}
              <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative mb-2 mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 1"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Super sécurisé"
            link="/docs/feature1"
            image={mock}
            alt="mock"
          />
          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 2"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Gere les trucs"
            link="/docs/feature2"
            image={mock}
            alt="mock"
          />

          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 3"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Host le chez toi"
            link="/docs/feature3"
            image={mock}
            alt="mock"
          />

          <FeatureCard
            title="Lorem ipsum dolor sit amet, consectetur. 4"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, yep?"
            learnMore="Super option 3"
            link="/docs/feature4"
            image={mock}
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
  image: StaticImageData;
  alt: string;
}> = ({ title, description, link, learnMore, alt, image }) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={image}
        alt={alt}
        priority
        height={460}
        className="mb-4 rounded-xl border bg-gray-200 p-0.5"
      />
      <div className="relative space-y-4 p-0.5">
        <CardTitle className="">{title}</CardTitle>
        <CardDescription>
          <span>{description}</span>
          <Link
            href={link}
            className="flex items-center gap-1 pt-2 font-semibold text-primary transition-opacity duration-300 hover:opacity-75"
          >
            <span>{learnMore}</span>
            {/* TODO: replace with arrow icon from @pedaki/common/ui/icons */}
            <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
              />
            </svg>
          </Link>
        </CardDescription>
      </div>
    </div>
  );
};

export default Features;