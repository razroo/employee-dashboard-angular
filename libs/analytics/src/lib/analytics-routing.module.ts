import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@razroo-fully-architected-dashboard/ui/common';
import { AnalyticsComponent } from './analytics/analytics.component';

const analyticsRoutes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: AnalyticsComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(analyticsRoutes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
