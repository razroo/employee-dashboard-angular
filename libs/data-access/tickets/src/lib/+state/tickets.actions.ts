import { createAction, props } from '@ngrx/store';
import { TicketsEntity } from './tickets.models';

export const init = createAction('[Tickets Page] Init');

export const loadTicketsSuccess = createAction(
  '[Tickets/API] Load Tickets Success',
  props<{ tickets: TicketsEntity[] }>()
);

export const loadTicketsFailure = createAction(
  '[Tickets/API] Load Tickets Failure',
  props<{ error: any }>()
);
