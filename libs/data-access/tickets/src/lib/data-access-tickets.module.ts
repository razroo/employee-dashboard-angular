import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTickets from './+state/tickets.reducer';
import { TicketsEffects } from './+state/tickets.effects';
import { TicketsFacade } from './+state/tickets.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../../../apps/employee-dashboard/src/environments/environment'


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTickets.TICKETS_FEATURE_KEY,
      fromTickets.reducer
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: false, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forFeature([TicketsEffects]),
  ],
  providers: [TicketsFacade],
})
export class DataAccessTicketsModule {}
