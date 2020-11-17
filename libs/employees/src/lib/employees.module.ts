import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeesComponent],
  exports: [EmployeesComponent],
})
export class EmployeesModule {}
