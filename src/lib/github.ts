export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
  fork: boolean;
  updated_at: string;
};

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const res = await fetch(
    "https://api.github.com/users/Bahaa65/repos?per_page=100&sort=updated",
    { headers, next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    console.error("Failed to fetch GitHub repos", res.status, await res.text());
    return [];
  }
  const data = (await res.json()) as GitHubRepo[];
  return data.filter((r) => !r.fork);
}


