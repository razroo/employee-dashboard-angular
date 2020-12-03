import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromEmployees from './employees.reducer';
import * as EmployeesSelectors from './employees.selectors';

@Injectable()
export class EmployeesFacade {
  loaded$ = this.store.pipe(select(EmployeesSelectors.getEmployeesLoaded));
  allEmployees$ = this.store.pipe(select(EmployeesSelectors.getAllEmployees));
  selectedEmployees$ = this.store.pipe(select(EmployeesSelectors.getSelected));

  constructor(private store: Store<fromEmployees.EmployeesPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
