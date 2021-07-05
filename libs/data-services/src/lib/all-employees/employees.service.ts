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

  
  getEmployees(): Observable<EmployeesService> {
    const query = EmployeeQuery
    console.log(EmployeeQuery)
    const allEmployees = this.apollo.query({ query })
      console.log(allEmployees, 'employee data')
    return from(allEmployees).pipe(pluck('data', 'employees')

    )
}


}
