import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';

export const ticketsRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TicketsComponent],
})
export class TicketsModule {}
