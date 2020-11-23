import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@razroo-fully-architected-dashboard/ui/common';
import { RepoDataComponent } from './repo-data.component';

const repoDataRoutes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: RepoDataComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(repoDataRoutes)],
  exports: [RouterModule]
})
export class RepoDataRoutingModule { }
