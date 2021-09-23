import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as TicketsActions from './tickets.actions';
import * as TicketsSelectors from './tickets.selectors';

@Injectable()
export class TicketsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TicketsSelectors.getTicketsLoaded));
  allTickets$ = this.store.pipe(select(TicketsSelectors.getAllTickets));
  selectedTickets$ = this.store.pipe(select(TicketsSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(TicketsActions.init());
  }
}
