import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';


@NgModule({
  imports: [CommonModule, TicketsRoutingModule],
  declarations: [TicketsComponent],
})
export class TicketsModule {}
