import { TicketsService } from './../../../../../data-services/src/lib/tickets.service';
import { TicketsEntity } from './tickets.models';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

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
            map((tickets: TicketsEntity[]) => TicketsActions.loadTicketsSuccess({ tickets: tickets }))
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return TicketsActions.loadTicketsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private ticketsService: TicketsService) {}
}
