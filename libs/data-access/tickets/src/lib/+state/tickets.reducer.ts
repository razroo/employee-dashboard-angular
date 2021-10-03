import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as TicketsActions from './tickets.actions';
import { TicketsEntity } from './tickets.models';

export const TICKETS_FEATURE_KEY = 'tickets';

export interface State extends EntityState<TicketsEntity> {
  selectedId?: string | number; // which Tickets record has been selected
  loaded: boolean; // has the Tickets list been loaded
  error?: string | null; // last known error (if any)
}

export interface TicketsPartialState {
  readonly [TICKETS_FEATURE_KEY]: State;
}

export const ticketsAdapter: EntityAdapter<TicketsEntity> = createEntityAdapter<TicketsEntity>();

export const initialState: State = ticketsAdapter.getInitialState({
  // set initial required properties
  loaded: true,
});

const ticketsReducer = createReducer(
  initialState,
  on(TicketsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: 'null',
  })),
  on(TicketsActions.loadTicketsSuccess, (state, { tickets }) =>
    ticketsAdapter.setAll(tickets, { ...state, loaded: true })
  ),
  on(TicketsActions.loadTicketsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return ticketsReducer(state, action);
}
