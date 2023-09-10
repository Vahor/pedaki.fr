import { Badge, Button } from '@pedaki/design';
import { PageHeader } from '~/components/PageHeader';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-12">
        <div>
          <Badges />
        </div>
        <PageHeader
          title="Le futur de la gestion scolaire"
          description="Toutes les fonctionnalités pour gérer votre établissement, dans une seule application."
          withPadding={false}
          titleClassName="md:text-6xl max-w-screen-md"
        />
        <div className="mt-3 flex flex-col gap-4 sm:flex-row md:mt-8">
          <Button
            variant="secondary"
            size="lg"
            className="space-x-2 border bg-white font-bold hover:opacity-90"
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
