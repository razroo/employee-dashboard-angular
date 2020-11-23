import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';

const ELEMENT_DATA = [
  {repoName: 'Fantastic Beasts', stars: '10322', forks: '1000',
    mergedPullRequests: '200', watchers: 'people go here', commits: '10000',
    closedIssues: '231'},
  {repoName: 'Fantastic Beasts', stars: '10322', forks: '1000',
    mergedPullRequests: '200', watchers: 'people go here', commits: '10000',
    closedIssues: '231'},
  {repoName: 'Fantastic Beasts', stars: '10322', forks: '1000',
    mergedPullRequests: '200', watchers: 'people go here', commits: '10000',
    closedIssues: '231'},
  {repoName: 'Fantastic Beasts', stars: '10322', forks: '1000',
    mergedPullRequests: '200', watchers: 'people go here', commits: '10000',
    closedIssues: '231'},
  {repoName: 'Fantastic Beasts', stars: '10322', forks: '1000',
    mergedPullRequests: '200', watchers: 'people go here', commits: '10000',
    closedIssues: '231'},
  {repoName: 'Fantastic Beasts', stars: '10322', forks: '1000',
    mergedPullRequests: '200', watchers: 'people go here', commits: '10000',
    closedIssues: '231'},
];

@Component({
  selector: 'razroo-fully-architected-dashboard-repo-data',
  templateUrl: './repo-data.component.html',
  styleUrls: ['./repo-data.component.scss']
})
export class RepoDataComponent implements OnInit {
  elementData;
  repoDataTableColumns: TableColumn[];

  constructor() { }

  ngOnInit(): void {
    this.elementData = ELEMENT_DATA;

    this.repoDataTableColumns = [
      {
        name: 'Repo Name',
        dataKey: 'repoName',
        isSortable: true,
      },
      {
        name: 'Stars',
        dataKey: 'stars',
        isSortable: true,
      },
      {
        name: 'Forks',
        dataKey: 'forks',
        isSortable: true,
      },
      {
        name: 'Merged Pull Requests',
        dataKey: 'mergedPullRequests',
        isSortable: true,
      },
      {
        name: 'Watchers',
        dataKey: 'watchers',
        isSortable: true,
      },
      {
        name: 'Commits',
        dataKey: 'commits',
        isSortable: true,
      },
      {
        name: 'Closed Issues',
        dataKey: 'closedIssues',
        isSortable: true,
      }
    ];
  }

}
