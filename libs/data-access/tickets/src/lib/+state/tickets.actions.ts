import { createAction, props } from '@ngrx/store';
import { TicketsEntity } from './tickets.models';

export const init = createAction('[Tickets] Load Tickets');

export const loadTicketsSuccess = createAction(
  '[Tickets] Load Tickets Success',
  props<{ tickets: TicketsEntity[] }>()
);

export const loadTicketsFailure = createAction(
  '[Tickets/API] Load Tickets Failure',
  props<{ error: any }>()
);