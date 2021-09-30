import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as EmployeesActions from './employees.actions';
import { EmployeesEntity } from './employees.models';

export const EMPLOYEES_FEATURE_KEY = 'employees';

export interface State extends EntityState<EmployeesEntity> {
  selectedId?: string | number; // which Employees record has been selected
  loaded: boolean; // has the Employees list been loaded
  error?: string | null; // last known error (if any)
}

export interface EmployeesPartialState {
  readonly [EMPLOYEES_FEATURE_KEY]: State;
}

export const employeesAdapter: EntityAdapter<EmployeesEntity> = createEntityAdapter<EmployeesEntity>();

export const initialState: State = employeesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const employeesReducer = createReducer(
  initialState,
  on(EmployeesActions.loadEmployees, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EmployeesActions.loadEmployeesSuccess, (state, { employees }) =>
    employeesAdapter.setAll(employees, { ...state, loaded: true })
  ),
  on(EmployeesActions.loadEmployeesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return employeesReducer(state, action);
}
