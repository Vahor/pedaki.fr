import { Badge } from '@pedaki/design/ui/badge';
import { Button } from '@pedaki/design/ui/button';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import { PageHeader } from '~/components/PageHeader';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-32">
        <Badges />
        <PageHeader
          title="Le futur de la gestion scolaire"
          description="Toutes les fonctionnalités pour gérer votre établissement, dans une seule application."
          withPadding={false}
          titleClassName="md:text-7xl max-w-screen-md px-8"
        />
        <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row md:mt-8">
          <Link href="https://app.pedaki.fr" className="w-full sm:w-auto">
            <Button variant="outline" className="font-semibold w-full">
              <span>Découvrir le projet</span>
              <AnimatedChevronRight />
            </Button>
          </Link>
          <Link href="https://demo.pedaki.fr" className="w-full sm:w-auto">
            <Button variant="neutral" className="font-semibold w-full">
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
    <div className="flex justify-center gap-4">
      <Badge variant="outline" className="bg-white">
        Ouverture prévue en 2024
      </Badge>
    </div>
  );
};

export default Hero;