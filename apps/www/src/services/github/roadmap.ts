import { cache } from '@pedaki/common/lib/cache/memory-cache';
import { env } from '~/env.mjs';
import sanitizeHtml from 'sanitize-html';

export interface Roadmap {
  url: string;
  items: {
    nodes: Issue[];
  };
}

export interface Issue {
  type: string;
  content: {
    state: string;
    stateReason: string;
    titleHTML: string;
    url: string;
    number: number;
    createdAt: string;
    updatedAt: string;
    labels: {
      nodes: Label[];
    };
    repository: {
      resourcePath: string;
      isPrivate: boolean;
      descriptionHTML: string;
    };
    author: {
      login: string;
      name: string;
      avatarUrl: string;
    };
  };
}

export interface Label {
  name: string;
  color: string;
  description: string;
}

interface JsonResponse {
  data: {
    user: {
      projectV2: Roadmap;
    };
  };
  errors: {
    message: string;
  }[];
}

const accessToken = env.GITHUB_ROADMAP_ACCESS_TOKEN;
const apiUrl = 'https://api.github.com/graphql';

const query = `
query User {
    user(login: "vahor") {
        projectV2(number: 1) {
            items(first: 50) {
                nodes {
                    type
                    content {
                        ... on Issue {
                            state
                            stateReason
                            titleHTML
                            url
                            number
                            createdAt
                            updatedAt
                            labels(first: 3) {
                                nodes {
                                    name
                                    color
                                    description
                                }
                            }
                            repository {
                                resourcePath
                                isPrivate
                                descriptionHTML
                            }
                            author {
                                login
                                avatarUrl(size: 20)
                                ... on User {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

export const getRoadmapIssues = async () => {
  return cache(
    async () => {
      console.log('Fetching roadmap issues');
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${accessToken}`,
        },
        body: JSON.stringify({ query }),
        next: {
          revalidate: 600, // 10 minutes in seconds
        },
      });

      const { data, errors } = (await response.json()) as JsonResponse;

      if (errors) {
        console.error(errors);
        throw new Error('Error fetching roadmap issues');
      }

      // filter out private repos / pull requests
      data.user.projectV2.items.nodes = data.user.projectV2.items.nodes.filter(issue => {
        if (issue.type !== 'ISSUE') {
          return false;
        }
        return !issue.content.repository.isPrivate;
      });

      data.user.projectV2.items.nodes.sort((a, b) => {
        return new Date(b.content.updatedAt).getTime() - new Date(a.content.updatedAt).getTime();
      });
      // 3 columns so 9 issues max
      data.user.projectV2.items.nodes = data.user.projectV2.items.nodes.slice(0, 9);

      data.user.projectV2.items.nodes.forEach(issue => {
        // Sanitize HTML, we are never too safe
        issue.content.titleHTML = sanitizeHtml(issue.content.titleHTML);
        issue.content.repository.descriptionHTML = sanitizeHtml(
          issue.content.repository.descriptionHTML,
        );

        // Remove starting / from resourcePath
        issue.content.repository.resourcePath = issue.content.repository.resourcePath.replace(
          /^\//,
          '',
        );
      });

      return data.user.projectV2;
    },
    'roadmap:issues',
    {
      ttl: 1000 * 60 * 10, // 10 minutes
      keepStale: true,
    },
  );
};
