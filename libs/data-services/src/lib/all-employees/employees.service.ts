import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs'
import { pluck,   } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { EmployeeQuery } from '@razroo-fully-architected-dashboard/data-graphql';


@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  constructor(public apollo: Apollo) { }

  getEmployees(event?: any, sortEvent?: any): Observable<EmployeesService> {
    // console.log('event');
    // console.log(event);

    const query = EmployeeQuery
    const allEmployees = this.apollo.query({
      query: query,
      variables: {
       start: event ? event.pageIndex * event.pageSize: 0,
       limit:  event ? event.pageSize  : 10,
       sort: 'Name:asc,Name:desc',
       where: event ? {Name_contains: event.where} : {}
      }
     })

    return from(allEmployees).pipe(pluck('data', 'employees'));
  }
}
