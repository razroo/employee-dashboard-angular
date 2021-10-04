import { Injectable } from '@angular/core';
import { from} from 'rxjs'
import { pluck} from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { TicketsQuery } from '@razroo-fully-architected-dashboard/data-graphql';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(public apollo: Apollo) { }

  getTickets(event?:any, sortEvent?: any): any {
    const query = TicketsQuery
    const variables = {
      start: event ? event.pageIndex * event.pageSize: 0,
      limit:  event ? event.pageSize  : 10,
      sort: 'employeeName:asc,employeeName:desc'
    }

    const allTickets = this.apollo.query({query, variables})

    return from(allTickets).pipe(pluck('data', 'tickets'));

  }
}