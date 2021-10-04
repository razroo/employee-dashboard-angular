import { TicketsFacade } from './../../../../data-access/tickets/src/lib/+state/tickets.facade';
import { Component, OnInit } from '@angular/core';
import { TableColumn,  } from '@razroo-fully-architected-dashboard/ui/common';

@Component({
  selector: 'razroo-fully-architected-dashboard-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  tickets$ = this.ticketsFacade.allTickets$;
  MatTableDataSource: any;
  sort: any;

  
  constructor(
    private ticketsFacade: TicketsFacade
  ) {}

  ticketsTableColumns: TableColumn[];

  ngOnInit(): void {
    this.ticketsFacade.init();

    this.ticketsTableColumns = [
      {
        name: 'Employee Name',
        dataKey: 'employeeName',
        isSortable: true,
      },
      {
        name: 'Project Name',
        dataKey: 'projectName',
        isSortable: true,
      },
      {
        name: 'Short Description',
        dataKey: 'shortDescription',
        isSortable: true,
      },
      {
        name: 'Ticket Number',
        dataKey: 'ticketNumber',
        isSortable: true,
      },
      {
        name: 'Ticket Link',
        dataKey: 'ticketLink',
        isSortable: true,
      },
      {
        name: 'Reporter Name',
        dataKey: 'reporterName',
        isSortable: true,
      },
      {
        name: 'Design Link',
        dataKey: 'designLink',
        isSortable: true,
      }
    ];
  }
  paginateTable($event?: any): void {
    this.ticketsFacade.init();
  }

  sortTable(sortEvent: any) : void {
    this.ticketsFacade.init();
  }
}
