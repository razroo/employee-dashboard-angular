import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs'
import { pluck,   } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { EmployeeQuery } from '@razroo-fully-architected-dashboard/data-graphql';


@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  constructor(public apollo: Apollo,
  ) { }


  type: string;
  itemsPerPage = 10;

  getEmployees(): Observable<EmployeesService> {



    const query = EmployeeQuery
    const allEmployees = this.apollo.query({  query: query,
      variables: {
        type: this.type,
        offset:0,
        limit: this.itemsPerPage,
      }
     })
    console.log(allEmployees, 'employees')
    return from(allEmployees).pipe(pluck('data', 'employees')
    )
}
 // just need to work on the fetchMore aspect of the query.  


}
