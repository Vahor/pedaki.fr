import { Button } from '@pedaki/common/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@pedaki/common/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@pedaki/common/ui/dialog';
import { ScrollArea } from '@pedaki/common/ui/scroll-area';
import { Separator } from '@pedaki/common/ui/separator';
import Link from 'next/link';
import React from 'react';
import PriceScaler from './price-scaler';


const Price = () => {
  // TODO: voir pour ajouter des icons / svg ça fait vide là
  return (
    <section className="container py-7">
      {/* TODO: faire un composant pour les header de section, je les ai repris 4 fois */}
      <div className="flex lg:flex-row lg:items-center justify-between flex-col">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Les bons prix super cool</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis, ipsam
          </p>
        </div>
        <div>
          <Link
            href="/page-qui-compare-edusign-pronote-etc"
            className="flex items-center gap-1 pt-2 text-sm font-semibold text-primary transition-opacity duration-300 hover:opacity-75"
          >
            <span>Comparer les coûts</span>
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
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
        <Card className="md:col-span-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-sm">Price Self-Host</CardTitle>
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
      <Dialog>
        <div className="mt-4 flex w-full justify-center">
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-white">
              <span>Comparer toutes les offres</span>
              {/* TODO: replace with arrow icon from @pedaki/common/ui/icons */}
              <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
                />
              </svg>
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent className="h-[70%] gap-0 px-0 md:max-w-screen-md lg:max-w-screen-lg 2xl:max-w-screen-xl">
          <div className="flex w-full text-base">
            <div className="w-[24%]"></div>
            <div className="w-[38%] pb-3 text-left font-semibold">Self-Host</div>
            <div className="w-[38%] pb-3 text-left font-semibold">Scaler</div>
          </div>
          <Separator />
          <ScrollArea>
            <table className="w-full text-base">
              <tbody>
                {Array.from({ length: 20 }).map((_, i) => (
                  <tr className="border-b text-sm transition hover:bg-secondary" key={i}>
                    <td className="w-[24%] min-w-[200px] py-3 pl-4 text-left font-semibold">
                      Prix {i}
                    </td>
                    <td className="w-[38%] min-w-[180px] px-1.5 text-left">0€</td>
                    <td className="w-[38%] min-w-[180px] px-1.5 text-left">0€</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Price;