import { getRoadmapIssues } from '~/services/github/roadmap';
import React from 'react';

const Roadmap = async () => {
  const roadmap = await getRoadmapIssues();

  return (
    <div className="">
      <pre>{JSON.stringify(roadmap, null, 2)}</pre>
    </div>
  );
};

export default Roadmap;
