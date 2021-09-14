import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs'
import { pluck,   } from 'rxjs/operators';
import { Apollo,  } from 'apollo-angular';
import { TicketsQuery } from '@razroo-fully-architected-dashboard/data-graphql';

@Injectable({
  providedIn: 'root'
})

export class TicketsService {
  constructor(public apollo: Apollo) { }

  getTickets(event?: any, sortEvent?: any): Observable<TicketsService> {

    const query = TicketsQuery
    const allTickets = this.apollo.query({
      query: query,
      variables: {
        start: event ? event.pageIndex * event.pageSize: 0,
        limit:  event ? event.pageSize  : 10,
        sort: 'Name:asc,Name:desc',
        where: event ? {Name_contains: event.where} : {}
      }
     })

    return from(allTickets).pipe(pluck('data', 'tickets'));
  }
  
}

