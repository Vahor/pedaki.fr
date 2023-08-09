import { Card } from '@pedaki/common/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@pedaki/common/ui/tooltip';
import React from 'react';

interface Feature {
  title: string;
  tooltip: string;
  selfHost: string;
  scaler: React.ReactNode;
}

const table1 = [
  {
    title: 'Bidule1',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule2',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule3',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule4',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: 'inclus',
  },
  {
    title: 'Bidule5',
    tooltip:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iure nisi non nostrum possimus repellat suscipit!',
    selfHost: 'toi même',
    scaler: (
      <div>
        <span>inclus</span>
        <p>
          <span className="text-xs text-primary">+ 20e pour plus gros</span>
        </p>
      </div>
    ),
  },
];

const PriceTable = () => {
  return (
    <div>
      <div className="sticky top-0 -mb-2 w-full sm:bg-background/80 pb-4 pt-20 backdrop-blur">
        <div className="container flex text-base">
          <div className="w-0 sm:w-[24%]"></div>
          <div className="w-[50%] text-left font-semibold sm:w-[38%]">
            <span>Self-Host</span>
            <div>
              <span className="text-3xl">Gratuit</span>
            </div>
          </div>
          <div className="w-[50%] text-left font-semibold sm:w-[38%]">
            <span>Scaler</span>
            <div>
              <span className="text-3xl">20e</span>
              <span className="pl-1 text-xs text-primary">/mois</span>
            </div>
            <span>Paiement à l&apos;année</span>
          </div>
        </div>
      </div>
      <div className="container">
        <FeatureTable features={table1} title="Features" />
        <FeatureTable features={table1} title="Sécurité" />
        <FeatureTable features={table1} title="Jsp" />
      </div>
    </div>
  );
};

const FeatureTable = ({ features, title }: { features: Feature[]; title: string }) => {
  return (
    <section>
      <h2 className="border-b pb-2 text-xl font-bold">{title}</h2>
      <div className="mb-16 w-full text-base">
        <Card className="my-2 bg-secondary" withShadow={false}>
          {features.map((feature, i) => (
            <div
              className="flex flex-col items-center border-b text-sm transition last:border-transparent hover:bg-secondary sm:flex-row"
              key={i}
            >
              <div className="w-[24%] min-w-[120px] py-4 pl-4 text-left font-semibold">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="text-muted-foreground">
                      <span className="border-b border-dotted border-foreground">
                        {feature.title}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent align="center" side="right">
                      <p className="max-w-sm">{feature.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-1 items-center pb-2 sm:pb-0">
                <div className="w-[50%] min-w-[180px] px-1.5 text-center sm:text-left">
                  {feature.selfHost}
                </div>
                <div className="w-[50%] min-w-[180px] px-1.5 text-center sm:text-left">
                  {feature.scaler}
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default PriceTable;