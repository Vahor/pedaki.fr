import { env } from '~/env.mjs';

interface Roadmap {
  url: string;
  items: {
    nodes: Issue[];
  };
}

interface Issue {
  type: string;
  content: {
    state: string;
    titleHTML: string;
    url: string;
    number: number;
    updatedAt: string;
    labels: {
      nodes: Label[];
    };
    repository: {
      url: string;
      isPrivate: boolean;
    };
  };
}

interface Label {
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
            items(first: 10) {
                nodes {
                    type
                    content {
                        ... on Issue {
                            state
                            titleHTML
                            url
                            number
                            updatedAt
                            labels(first: 5) {
                                nodes {
                                    name
                                    color
                                    description
                                }
                            }
                            repository {
                                url
                                isPrivate
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

export const getRoadmapIssues = async (): Promise<Roadmap> => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600 * 6, // 6 hours
    },
  });

  const { data, errors } = (await response.json()) as JsonResponse;

  if (errors) {
    throw new Error('Error fetching roadmap issues');
  }

  return data.user.projectV2;
};
