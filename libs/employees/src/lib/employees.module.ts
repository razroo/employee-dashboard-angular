import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { UiCommonModule } from '@razroo-fully-architected-dashboard/ui/common';





@NgModule({
  imports: [CommonModule, UiCommonModule, EmployeesRoutingModule],
  declarations: [EmployeesComponent],
  exports: [EmployeesComponent],
})
export class EmployeesModule {}
