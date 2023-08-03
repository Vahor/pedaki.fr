import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@pedaki/common/ui/card';
import React from 'react';
import PriceScaler from './price-scaler';

const Price = () => {
  return (
    <section className=" container px-8 pb-7">
      <div className="rounded-2xl bg-gray-100 px-4 py-4">
        <h2 className="text-center text-2xl font-bold">Les bons prix super cool</h2>
        <p className="mx-auto mt-6 max-w-md text-center text-base font-medium text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eveniet!
        </p>

        <div className="grid grid-cols-5 gap-4 mx-4 py-4">
          <Card className="col-span-2">
            <CardHeader className="space-y-1">
              <CardTitle className="text-sm">Price Scaler</CardTitle>
              <CardDescription className="text-xs">Heberge le chez toi mec</CardDescription>
            </CardHeader>
            <CardContent className="border-b">
              <div className="mb-4 flex items-center justify-between">
                <p>Le prix est de 0€</p>
              </div>
            </CardContent>
            <CardFooter className="rounded-b-lg bg-gray-50">
              <ul>
                <li>- oui</li>
                <li>- oui</li>
                <li>- oui</li>
                <li>- oui</li>
              </ul>
            </CardFooter>
          </Card>
          <PriceScaler />
        </div>
      </div>
    </section>
  );
};

export default Price;
