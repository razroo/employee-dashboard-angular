import { TicketsEntity } from './tickets.models';
import { TicketsService } from '@razroo-fully-architected-dashboard/data-services';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as TicketsFeature from './tickets.reducer';
import * as TicketsActions from './tickets.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class TicketsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.init),
      fetch({
        run: (action) => {
          return this.ticketsService.getTickets().pipe(
            map((tickets: TicketsEntity[]) => TicketsActions.loadTicketsSuccess({ tickets: tickets })))
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TicketsActions.loadTicketsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private ticketsService: TicketsService) {

  }
}
