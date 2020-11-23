import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoDataComponent } from './repo-data/repo-data.component';
import { RepoDataRoutingModule } from './repo-data/repo-data-routing.module';
import { UiCommonModule } from '@razroo-fully-architected-dashboard/ui/common';

@NgModule({
  imports: [CommonModule, RepoDataRoutingModule, UiCommonModule],
  declarations: [RepoDataComponent],
})
export class RepoDataModule {}
