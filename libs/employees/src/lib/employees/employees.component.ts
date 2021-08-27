import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';
import { EmployeesService } from '@razroo-fully-architected-dashboard/data-services'

@Component({
  selector: 'razroo-fully-architected-dashboard-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})

export class EmployeesComponent implements OnInit {
  employees$ = this.employeesService.getEmployees();

  constructor(
    private employeesService: EmployeesService
  ) {}

  employeeTableColumns: TableColumn[];

  ngOnInit(): void {

    this.employeeTableColumns = [
      {
        name: 'Name',
        dataKey: 'Name',
        isSortable: true,
      },
      {
        name: 'Position',
        dataKey: 'Position',
        isSortable: true,
      },
      {
        name: 'Location',
        dataKey: 'Location',
        isSortable: true,
      },
      {
        name: 'Permission',
        dataKey: 'Permission',
        isSortable: true,
      },
      {
        name: 'Report To',
        dataKey: 'ReportTo',
        isSortable: true,
      }
    ];
  }

  paginateTable($event?: any): void {
    this.employeesService.getEmployees($event);
  }

  sortTable(sortEvent : any): void {
    this.employeesService.getEmployees(sortEvent);
  }

  search(searchEvent: string): void {
    this.employees$ = this.employeesService.getEmployees({where: searchEvent})
  }

}

