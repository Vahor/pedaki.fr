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
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const parseIntOr = (value: string | null, defaultValue: number) => {
  // TODO: move this utils in @pedaki/common
  if (value === null) return defaultValue;
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    return defaultValue;
  }
  return parsed;
};

// TODO: move this utils in @pedaki/common (or config ?)
//  we'll have to link this to stripe somehow to have the real prices ?
//  we'll have to see how to share the translation (we'll reuse the same description in the app.pedaki.fr licenses pages)
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

const clamp = (value: number, min: number, max: number) => {
  // TODO: move this utils in @pedaki/common
  return Math.max(Math.min(value, max), min);
};

const clampSize = (size: number) => clamp(Math.ceil(size), 1, prices.length);

const safeHistoryReplaceState = (state: any, title: string, url: string) => {
  // TODO: move this utils in @pedaki/common
  try {
    history.replaceState(state, title, url);
  } catch (e) {
    console.error(e);
  }
};

const PriceScaler = () => {
  const param = useSearchParams();
  const [size, updateSize] = useState(() => parseIntOr(param.get('size'), 1));
  const pathname = usePathname();

  const onValueChange = (value: number[]) => {
    if (value.length !== 1) return;
    const newValue = value[0]!;
    const newParams = new URLSearchParams(param);
    const newSize = clampSize(newValue);
    newParams.set('size', newSize.toString());
    safeHistoryReplaceState(null, '', `${pathname}?${newParams.toString()}`);
    updateSize(newSize);
  };

  const selectedSize = clampSize(size);
  const selectedPrice = prices[selectedSize - 1]!;

  return (
    <Card className="border-accent-foreground/80 md:col-span-3">
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
          step={0.01}
          onValueChange={onValueChange}
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
