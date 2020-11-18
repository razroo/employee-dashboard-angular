import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

const employeesRoutes: Routes = [
  { path: '',
    component: EmployeesComponent,
    children: [
      { path: '', component: EmployeesComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(employeesRoutes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
