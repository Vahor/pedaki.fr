import { Button } from '@pedaki/common/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@pedaki/common/ui/card';
import Link from 'next/link';
import React from 'react';

const Price = () => {
  // TODO: voir pour ajouter des icons / svg ça fait vide là
  return (
    <section className="container py-16">
      {/* TODO: faire un composant pour les header de section, je les ai repris 4 fois */}
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Les bons prix super cool</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis, ipsam
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
        <PriceCard
          className="md:col-span-2"
          title="Price Self-Host"
          description="Heberge le chez toi mec"
          price="Gratuit"
          features={[
            //   TODO: store features list in constant somewhere
            { text: 'oui', enabled: true },
            { text: 'oui', enabled: true },
            { text: 'oui', enabled: false },
            { text: 'oui', enabled: false },
          ]}
        />

        <PriceCard
          className="border-primary md:col-span-3"
          title="Price Scaler"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          price="A partir de 20€"
          monthly="/mois"
          features={[
            { text: 'oui', enabled: true },
            { text: 'oui', enabled: true },
            { text: 'oui', enabled: true },
            { text: 'oui', enabled: true },
          ]}
        />
      </div>
      <div className="mt-6 flex w-full justify-center">
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/pricing">
            <span>Comparer toutes les offres</span>
            {/* TODO: replace with arrow icon from @pedaki/common/ui/icons */}
            <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  );
};

const PriceCard: React.FC<{
  className: string;
  title: string;
  description: string;
  price: string;
  monthly?: string;
  features: { text: string; enabled: boolean }[];
}> = ({ className, title, description, price, monthly, features }) => {
  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="border-b">
        <div className="flex items-center justify-between">
          <p>
            {price}
            {monthly ? <span className="pl-1 text-xs text-muted-foreground">/mois</span> : ''}
          </p>
        </div>
      </CardContent>
      <CardFooter className="rounded-b-lg bg-secondary">
        <ul>
          {features.map((feature, index) => (
            <li key={index} className={feature.enabled ? '' : 'line-through'}>
              {feature.text}
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};

export default Price;
