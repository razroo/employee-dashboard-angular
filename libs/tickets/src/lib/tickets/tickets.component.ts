import { TicketsFacade } from './../../../../data-access/tickets/src/lib/+state/tickets.facade';
import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';

@Component({
  selector: 'razroo-fully-architected-dashboard-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  tickets$ = this.ticketsFacade.loaded$;
  constructor(
    private ticketsFacade: TicketsFacade
  ) {}

  ticketsTableColumns: TableColumn[];

  ngOnInit(): void {
    this.ticketsFacade.init();
  }
}
