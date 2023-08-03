'use client';

import { cn } from '@pedaki/common/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@pedaki/common/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@pedaki/common/ui/tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const parseIntOr = (value: string | null, defaultValue: number) => {
  if (value === null) return defaultValue;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    return defaultValue;
  }
  return parsed;
};

const prices = [
  {
    price: 20,
    code: 'A1',
  },
  {
    price: 30,
    code: 'A2',
  },
  {
    price: 40,
    code: 'A3',
  },
  {
    price: 50,
    code: 'A4',
  },
];

const PriceScaler = () => {
  const param = useSearchParams();
  const size = parseIntOr(param.get('size'), 1);
  const router = useRouter();
  const pathname = usePathname();

  const updateSize = (value: number) => {
    const newParams = new URLSearchParams(param);
    newParams.set('size', value.toString());
    router.replace(`${pathname}?${newParams.toString()}`, { shallow: true, scroll: false });
  };

  const selectedPrice = prices[size - 1]!;

  return (
    <Card className="col-span-3 border-accent-foreground/80">
      <CardHeader className="space-y-1">
        <CardTitle className="text-sm">Price Scaler</CardTitle>
        <CardDescription className="text-xs">
          Belle phrase qui dit que la taille en vrai ça compte
        </CardDescription>
      </CardHeader>
      <CardContent className="border-b">
        <div className="mb-4 flex items-center justify-between">
          <p>Le prix est de {selectedPrice.price}€</p>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger className="text-muted-foreground">
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4m0-4h.01" />
                  </g>
                </svg>
              </TooltipTrigger>
              <TooltipContent align="end">
                <p>Texte qui dit que si ils se trompent ils peuvent modifier à tout moment</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <SliderPrimitive.Root
          className={cn('relative flex w-full touch-none select-none items-center')}
          defaultValue={[size]}
          max={4}
          min={1}
          step={1}
          onValueChange={value => updateSize(value)}
        >
          <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>

        <p>
          <span className="text-xs">Taille : </span>
          <span className="text-xs">{selectedPrice.code}</span>
        </p>
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
  );
};

export default PriceScaler;
