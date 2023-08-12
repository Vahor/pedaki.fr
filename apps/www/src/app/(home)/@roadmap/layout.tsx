import { Button } from '@pedaki/common/ui/button';
import Link from 'next/link';
import React from 'react';

const RoadmapLayout = ({ children }: { children: React.ReactElement | React.ReactNode }) => {
  return (
    <div className="">
      roadmap
      <Button variant="outline" className="gap-2" asChild>
        <Link href="https://github.com/users/Vahor/projects/1">
          <span>Github</span>
        </Link>
      </Button>
      {children}
    </div>
  );
};

export default RoadmapLayout;
