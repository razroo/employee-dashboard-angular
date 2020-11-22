import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LayoutComponent } from '@razroo-fully-architected-dashboard/ui/common';

const employeesRoutes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: EmployeesComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(employeesRoutes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
