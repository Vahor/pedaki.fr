import { cache } from '@pedaki/common/lib/cache/memory-cache';
import { env } from '~/env.mjs';
import sanitizeHtml from 'sanitize-html';

export interface Roadmap {
  url: string;
  items: {
    nodes: Issue[];
  };
}

export type IssueType = 'ISSUE' | 'PULL_REQUEST';
export type IssueState = 'OPEN' | 'CLOSED';
export type IssueStateReason = null | 'COMPLETED' | 'NOT_PLANNED';

export interface Issue {
  type: IssueType;
  content: {
    number: number;
    state: IssueState;
    stateReason: IssueStateReason;
    titleHTML: string;
    url: string;
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
                        ... on PullRequest {
                            state
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
  return await cache(
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
          revalidate: 300, // 5 minutes in seconds
        },
      });

      const { data, errors } = (await response.json()) as JsonResponse;

      // log headers
      console.log('RateLimit Headers');
      console.log({
        'X-RateLimit-Limit': response.headers.get('X-RateLimit-Limit'),
        'X-RateLimit-Remaining': response.headers.get('X-RateLimit-Remaining'),
        'X-RateLimit-Reset': response.headers.get('X-RateLimit-Reset'),
        'X-RateLimit-Used': response.headers.get('X-RateLimit-Used'),
        'X-RateLimit-Resource': response.headers.get('X-RateLimit-Resource'),
      });

      if (errors) {
        console.error(errors);
        throw new Error('Error fetching roadmap issues');
      }

      // filter out private repos / pull requests
      data.user.projectV2.items.nodes = data.user.projectV2.items.nodes.filter(issue => {
        if (issue.type !== 'ISSUE' && issue.type !== 'PULL_REQUEST') {
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
