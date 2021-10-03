import { TicketsEntity } from './tickets.models';
import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as TicketsActions from './tickets.actions';
import * as fromTickets from './tickets.reducer';
import * as TicketsSelectors from './tickets.selectors';

@Injectable()
export class TicketsFacade {
  loaded$ = this.store.pipe(select(TicketsSelectors.getTicketsLoaded));
  allTickets$ = this.store.pipe(select(TicketsSelectors.getAllTickets));
  selectedTickets$ = this.store.pipe(select(TicketsSelectors.getSelected));

  constructor(private store: Store<TicketsEntity>) {}

  init() {
    this.store.dispatch(TicketsActions.init());
  }
}
