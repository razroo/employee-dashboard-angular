import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { RepoDataComponent } from './repo-data/repo-data.component';

export const repoDataRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [RepoDataComponent],
})
export class RepoDataModule {}
