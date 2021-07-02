import { Injectable } from '@angular/core';
import {  from, Observable} from 'rxjs'
import { pluck } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import {EmployeeQuery} from '@razroo-fully-architected-dashboard/data-graphql';
//import { allEmployees } from './employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  constructor(private apollo: Apollo,

    ) { }
// rethink how this is structured. this is where I need to work 
  getEmployees(): Observable<EmployeesService> {
    
    const query = EmployeeQuery
    const allEmployees = this.apollo.query({query})
    return from(allEmployees).pipe(pluck('data', 'employees'))
    
    
  }
  
}
