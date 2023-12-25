'use client';

import { ColumnDef } from '@tanstack/react-table';
import { GitHubRepository } from '../../model/repos';

export const columns: ColumnDef<GitHubRepository>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'full_name',
    header: 'Full Name',
  },
  {
    accessorKey: 'html_url',
    header: 'URL',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'fork',
    header: 'Fork',
  },
  {
    accessorKey: 'created_at',
    header: 'Created At',
  },
  {
    accessorKey: 'updated_at',
    header: 'Updated At',
  },
  {
    accessorKey: 'pushed_at',
    header: 'Pushed At',
  },
  {
    accessorKey: 'fork',
    header: 'Fork',
  },
  {
    accessorKey: 'homepage',
    header: 'Homepage',
  },
  {
    accessorKey: 'size',
    header: 'Size',
  },
  {
    accessorKey: 'stargazers_count',
    header: 'Stargazers Count',
  },
  {
    accessorKey: 'watchers_count',
    header: 'Watchers Count',
  },
  {
    accessorKey: 'language',
    header: 'Language',
  },
  {
    accessorKey: 'has_issues',
    header: 'Has Issues',
  },
  {
    accessorKey: 'has_projects',
    header: 'Has Projects',
  },
  {
    accessorKey: 'has_downloads',
    header: 'Has Downloads',
  },
  {
    accessorKey: 'has_wiki',
    header: 'Has Wiki',
  },
  {
    accessorKey: 'has_pages',
    header: 'Has Pages',
  },
  {
    accessorKey: 'has_discussions',
    header: 'Has Discussions',
  },
  {
    accessorKey: 'forks_count',
    header: 'Forks Count',
  },
  {
    accessorKey: 'archived',
    header: 'Archived',
  },
  {
    accessorKey: 'disabled',
    header: 'Disabled',
  },
  {
    accessorKey: 'open_issues_count',
    header: 'Open Issues Count',
  },
  {
    accessorKey: 'license',
    header: 'License',
  },
  {
    accessorKey: 'allow_forking',
    header: 'Allow Forking',
  },
  {
    accessorKey: 'is_template',
    header: 'Is Template',
  },
  {
    accessorKey: 'topics',
    header: 'Topics',
  },
  {
    accessorKey: 'forks',
    header: 'Forks',
  },
  {
    accessorKey: 'open_issues',
    header: 'Open Issues',
  },
  {
    accessorKey: 'watchers',
    header: 'Watchers',
  },
];

// has_issues: boolean;
//   has_projects: boolean;
//   has_downloads: boolean;
//   has_wiki: boolean;
//   has_pages: boolean;
//   has_discussions: boolean;
//   forks_count: number;
//   mirror_url: string | null;
//   archived: boolean;
//   disabled: boolean;
//   open_issues_count: number;
