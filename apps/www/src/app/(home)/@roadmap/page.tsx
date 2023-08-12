import { Avatar, AvatarFallback, AvatarImage } from '@pedaki/common/ui/avatar';
import { Card, CardContent, CardFooter } from '@pedaki/common/ui/card';
import { Skeleton } from '@pedaki/common/ui/skeleton';
import type { Issue } from '~/services/github/roadmap';
import { getRoadmapIssues } from '~/services/github/roadmap';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';


type Status = 'OPEN' | 'CLOSED_COMPLETED' | 'CLOSED_NOT_PLANNED';
const StatusMap = {
  OPEN: 'rgb(31, 136, 61)',
  CLOSED_COMPLETED: 'rgb(130, 80, 223)',
  CLOSED_NOT_PLANNED: 'rgb(110, 119, 129)',
} as Record<Status, string>;

// TODO: move theses icons to @pedaki/common/ui/icons
const StatusIcon = {
  OPEN: (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2Z"
      />
    </svg>
  ),
  CLOSED_NOT_PLANNED: (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 5L7 19"
      />
    </svg>
  ),
  CLOSED_COMPLETED: (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"
      />
    </svg>
  ),
} as Record<Status, JSX.Element>;

const getStatusKey = (status: string, stateReason: string): Status => {
  return status === 'OPEN' ? 'OPEN' : (`CLOSED_${stateReason}` as Status);
};

const StatusCircle = ({ status, stateReason }: { status: string; stateReason: string }) => {
  // I could use svg, but I'm lazy, css is fine for now
  const statusKey = getStatusKey(status, stateReason);
  const color = StatusMap[statusKey];
  const icon = StatusIcon[statusKey];

  return (
    <div
      className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border"
      style={{ borderColor: `${color}`, color: `${color}` }}
    >
      {icon}
    </div>
  );
};

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
    <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-6">
      <div className="col-span-6 flex flex-col gap-4 md:col-span-3 lg:col-span-2 lg:mt-2 lg:scale-95">
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
      <div className="col-span-6 hidden flex-col gap-4 md:col-span-3 lg:col-span-2 lg:mt-2 lg:flex lg:scale-95">
        {roadmapColumns[2].map(issue => (
          <GithubCard key={issue.content.number} issue={issue} />
        ))}
      </div>
    </div>
  );
};

const GithubCard = ({ issue }: { issue: Issue }) => {
  return (
    <Link href={issue.content.url} prefetch={false} target="_blank">
      <Card className="cursor-pointer hover:border-primary">
        <CardContent className="space-y-2 pb-3 pt-6">
          <div className="flex flex-row items-center gap-1 space-y-0 text-sm text-muted-foreground">
            <span className="underline">{issue.content.repository.resourcePath}</span>
            <span>on {dayjs(issue.content.createdAt).format('MMM DD')}</span>
          </div>
          <div className="flex flex-row items-baseline gap-2">
            <StatusCircle status={issue.content.state} stateReason={issue.content.stateReason} />
            <div>
              <span
                dangerouslySetInnerHTML={{ __html: issue.content.titleHTML }}
                className="font-semibold"
              ></span>
              <span className="ml-1 text-sm text-muted-foreground">#{issue.content.number}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t py-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-[24px] w-[24px]">
              <AvatarImage
                src={issue.content.author.avatarUrl}
                className="my-auto"
                height={24}
                width={24}
              />
              <AvatarFallback>
                <Skeleton />
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">
              Ouvert par {issue.content.author.name}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Roadmap;

// Does not work as we need to see the cookies() in the user component
// export const revalidate = 3600; // 1 hour