'use client';

import { TooltipProvider } from '@pedaki/design/ui';
import { GithubCard } from '~/app/(home)/@roadmap/card';
import Footer from '~/app/(home)/@roadmap/footer';
import Header from '~/app/(home)/@roadmap/header';
import type { Issue } from '~/services/github/roadmap';
import React from 'react'; // TODO: remember to change this

// TODO: remember to change this
const fakeIssue: Issue = {
  type: 'ISSUE',
  content: {
    number: 420,
    state: 'OPEN',
    stateReason: null,
    titleHTML: 'The roadmap does not load',
    url: 'https://github.com/vahor/pedaki-pedaki.fr/issues/new?title=The%20roadmap%20does%20not%20load&template=bug_report.md',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    labels: {
      nodes: [
        {
          name: 'template: bug',
          color: 'EFE0C5',
          description: "Something isn't working",
        },
      ],
    },
    repository: {
      resourcePath: 'pedaki-pedaki.fr',
      isPrivate: false,
      descriptionHTML: 'The website of the Pedaki community',
    },
    author: {
      name: 'Vous',
      avatarUrl:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjQiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxMjgiIHkyPSIxMjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDI4OWRlZykiPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9ImhzbCgyMjYsIDk5JSwgODUlKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgxMDQsIDY4JSwgNzQlKSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4=',
    },
  },
};

export default function RoadmapError() {
  return (
    <section className="container py-16">
      <Header />

      <div className="mt-8 grid grid-cols-2 gap-2">
        <p className="col-span-2 md:col-span-1">
          TODO: message disant qu&apos;on a eu une erreur pour charger la roadmap Et que si ils
          veulent ils peuvent faire une issue
        </p>
        <TooltipProvider delayDuration={0}>
          <div className="col-span-2 md:col-span-1">
            <GithubCard issue={fakeIssue} />
          </div>
        </TooltipProvider>
      </div>
      <Footer />
    </section>
  );
}
