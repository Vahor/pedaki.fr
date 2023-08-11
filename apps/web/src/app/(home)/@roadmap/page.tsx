import { getRoadmapIssues } from '~/services/github/roadmap';
import React from 'react';

const Roadmap = async () => {
  const roadmap = await getRoadmapIssues();

  return (
    <div className="">
      <pre>{new Date().toISOString()}</pre>
      <pre>{JSON.stringify(roadmap, null, 2)}</pre>
    </div>
  );
};

export default Roadmap;

// export const revalidate = 3600; // 1 hour
export const revalidate = 30; // 30 seconds