import { Badge } from '@pedaki/design/ui/badge';
import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import { PageHeader } from '~/components/PageHeader';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-16 md:pt-32">
        <Badges />
        <PageHeader
          title="Le futur de la gestion scolaire"
          description="Toutes les fonctionnalités pour gérer votre établissement, dans une seule application."
          withPadding={false}
          titleClassName="md:text-7xl max-w-screen-md px-8"
        />
        <div className="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-8">
          <Link href="https://app.pedaki.fr" className="w-full sm:w-auto">
            <Button variant="stroke-primary-gray" className="w-full font-semibold">
              <span className="text-main">Découvrir le projet</span>
              <AnimatedChevronRight />
            </Button>
          </Link>
          <Link href="https://demo.pedaki.fr" className="w-full sm:w-auto">
            <Button variant="filled-neutral" className="w-full font-semibold">
              <span>Ouvrir la démo</span>
              <AnimatedChevronRight className="text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Badges = () => {
  return (
    <Link href="https://docs.pedaki.fr/news/2023/august/initial-press-release" target="_blank">
      <Badge
        variant="outline"
        className="group bg-weak py-1 hover:border-orange-8"
        tabIndex={0}
      >
        <span>Ouverture prévue en 2024</span>
        <AnimatedChevronRight className="h-3 w-3 text-primary" />
      </Badge>
    </Link>
  );
};

export default Hero;
