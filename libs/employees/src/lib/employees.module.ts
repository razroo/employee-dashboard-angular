import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  imports: [CommonModule, EmployeesRoutingModule],
  declarations: [EmployeesComponent],
  exports: [EmployeesComponent],
})
export class EmployeesModule {}
