import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoDataComponent } from './repo-data/repo-data.component';
import { RepoDataRoutingModule } from './repo-data/repo-data-routing.module';

@NgModule({
  imports: [CommonModule, RepoDataRoutingModule],
  declarations: [RepoDataComponent],
})
export class RepoDataModule {}
