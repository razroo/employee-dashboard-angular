import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';

@NgModule({
  imports: [CommonModule, AnalyticsRoutingModule],
  declarations: [AnalyticsComponent],
})
export class AnalyticsModule {}
