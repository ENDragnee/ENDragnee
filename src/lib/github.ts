export interface GithubProfile {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
  location: string;
  created_at: string;
}

export async function getGithubProfile(
  username: string,
): Promise<GithubProfile | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      // Add more context to the error
      const errorBody = await response.text();
      console.error(
        `GitHub API Error: ${response.status} ${response.statusText}`,
        errorBody,
      );
      throw new Error("Failed to fetch GitHub profile");
    }
    return await response.json();
  } catch (error) {
    console.error(
      "An error occurred while fetching the GitHub profile:",
      error,
    );
    return null;
  }
}

export interface ContributionData {
  heatmap: { date: string; count: number; level: number }[];
  stats: {
    commits: number;
    prs: number;
    issues: number;
    reviews: number;
  };
}

export async function getGithubContributions(username: string, token: string): Promise<ContributionData | null> {
  const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';
  const now = new Date();
  const to = now.toISOString();
  const from = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString();

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalPullRequestReviewContributions
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { username, from, to } }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`GraphQL API Error: ${response.status}`, errorBody);
      throw new Error('Failed to fetch contribution data');
    }

    const json = await response.json();
    const data = json.data.user.contributionsCollection;

    // A map to reliably convert the string level to a number
    const levelMap: { [key: string]: number } = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };

    const heatmap = data.contributionCalendar.weeks.flatMap((week: any) =>
      week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        // 👇 THE FIX: Use the map to get a number from 0-4
        level: levelMap[day.contributionLevel] ?? 0,
      }))
    );
    
    const stats = {
      commits: data.totalCommitContributions,
      prs: data.totalPullRequestContributions,
      issues: data.totalIssueContributions,
      reviews: data.totalPullRequestReviewContributions,
    };

    return { heatmap, stats };

  } catch (error) {
    console.error("Error in getGithubContributions:", error);
    return null;
  }
}
