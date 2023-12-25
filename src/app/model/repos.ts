enum GitHubRepositoryOwnerType {
  Organization = 'Organization',
  User = 'User',
}

enum GitHubRepositoryVisibility {
  Public = 'public',
  Private = 'private',
  Internal = 'internal',
}

type GitHubRepositoryOwner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  html_url: string;
  type: GitHubRepositoryOwnerType;
  site_admin: boolean;
};

type GitHubRepositoryLicense = {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
};

export type GitHubRepository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubRepositoryOwner;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: GitHubRepositoryLicense;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility?: GitHubRepositoryVisibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};
