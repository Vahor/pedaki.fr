import { Button } from '@pedaki/common/ui/button';
import { TooltipProvider } from '@pedaki/common/ui/tooltip';
import { AnimatedChevronRight } from '~/components/AnimatedChevronRight';
import { getRoadmapIssues } from '~/services/github/roadmap';
import Link from 'next/link';
import React from 'react';
import { GithubCard } from './card';

const Roadmap = async () => {
  const roadmap = await getRoadmapIssues();
  // split the roadmap in 3 columns
  const roadmapSize = roadmap.items.nodes.length;
  const roadmapSizePerColumn = Math.ceil(roadmapSize / 3);
  const roadmapColumns = [
    roadmap.items.nodes.slice(0, roadmapSizePerColumn),
    roadmap.items.nodes.slice(roadmapSizePerColumn, roadmapSizePerColumn * 2),
    roadmap.items.nodes.slice(roadmapSizePerColumn * 2, roadmapSize),
  ] as const;

  return (
    <section className="container py-16">
      {/* TODO: faire un composant pour les header de section, je les ai repris 4 fois */}
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Rejoignez notre communauté open source</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis, ipsam
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-6">
        <TooltipProvider delayDuration={0}>
          <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2 lg:scale-95">
            {roadmapColumns[0].map(issue => (
              <GithubCard key={issue.content.number} issue={issue} />
            ))}
          </div>
          <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2">
            {roadmapColumns[1].map(issue => (
              <GithubCard key={issue.content.number} issue={issue} />
            ))}
          </div>
          {/* Hide this column on smaller screen (shown on lg)*/}
          <div className="col-span-6 hidden flex-col gap-4 md:col-span-3 lg:col-span-2 lg:flex lg:scale-95">
            {roadmapColumns[2].map(issue => (
              <GithubCard key={issue.content.number} issue={issue} />
            ))}
          </div>
        </TooltipProvider>
      </div>
      <div className="mt-6 flex w-full justify-center">
        <Link href="https://github.com/vahor/pedaki-pedaki.fr" prefetch={false} target="_blank">
          <Button variant="outline" className="group gap-2 bg-white">
            {/*TODO: add env variable for the github url*/}
            <span>Rejoindre la communauté</span>
            <AnimatedChevronRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Roadmap;

export const revalidate = 3600; // 1 hour
