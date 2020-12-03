import { createAction, props } from '@ngrx/store';
import { EmployeesEntity } from './employees.models';

export const loadEmployees = createAction('[Employees] Load Employees');

export const loadEmployeesSuccess = createAction(
  '[Employees] Load Employees Success',
  props<{ employees: EmployeesEntity[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employees] Load Employees Failure',
  props<{ error: any }>()
);
