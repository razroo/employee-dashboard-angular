import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromEmployees from './employees.reducer';
import * as EmployeesActions from './employees.actions';

@Injectable()
export class EmployeesEffects {
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeesActions.loadEmployees),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return EmployeesActions.loadEmployeesSuccess({ employees: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return EmployeesActions.loadEmployeesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
