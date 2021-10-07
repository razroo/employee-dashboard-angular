import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { UiCommonModule } from '@razroo-fully-architected-dashboard/ui/common';

@NgModule({
  imports: [CommonModule, UiCommonModule, TicketsRoutingModule],
  declarations: [TicketsComponent],
  exports: [TicketsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TicketsModule {}
