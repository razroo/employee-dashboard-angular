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

    this.employees$.subscribe(employees => {
    console.log(employees);
    return employees
    })


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
    console.log('$event:', $event);
    this.employeesService.getEmployees($event);

  }

  sortTable($sortEvent: any): void {
    console.log('sorting event:', $sortEvent);
    this.employeesService.getEmployees($sortEvent);
   
  }
}
