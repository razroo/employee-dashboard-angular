import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@razroo-fully-architected-dashboard/ui/common';
import { TicketsComponent } from './tickets/tickets.component';

const ticketsRoutes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TicketsComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(ticketsRoutes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
