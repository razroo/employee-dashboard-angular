import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as TicketsFeature from './tickets.reducer';
import * as TicketsActions from './tickets.actions';

@Injectable()
export class TicketsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return TicketsActions.loadTicketsSuccess({ tickets: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return TicketsActions.loadTicketsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
