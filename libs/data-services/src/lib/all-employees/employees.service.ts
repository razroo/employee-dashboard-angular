import { Injectable } from '@angular/core';
import {  from, Observable } from 'rxjs'
import { pluck } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {GetAllEmployees} from '../../../../data-graphql/src/lib/all-employees.queries';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private apollo: Apollo) { }
  getEmployees(): Observable<EmployeesService> {
    const query = GetAllEmployees;
    console.log('testing', query)
    const allEmployees$ = this.apollo.query({query})
    return from(allEmployees$).pipe(pluck('data', 'employees')); 
  }
}
