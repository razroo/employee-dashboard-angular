import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEmployees from './+state/employees.reducer';
import { EmployeesEffects } from './+state/employees.effects';
import { EmployeesFacade } from './+state/employees.facade';
import * as fromTickets from './+state/tickets.reducer';
import { TicketsEffects } from './+state/tickets.effects';
import { TicketsFacade } from './+state/tickets.facade';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEmployees.EMPLOYEES_FEATURE_KEY,
      fromEmployees.reducer
    ),
    EffectsModule.forFeature([EmployeesEffects]),
    StoreModule.forFeature(
      fromTickets.TICKETS_FEATURE_KEY,
      fromTickets.reducer
    ),
    EffectsModule.forFeature([TicketsEffects]),
  ],
  providers: [EmployeesFacade, TicketsFacade],
})
export class DataAccessModule {}
