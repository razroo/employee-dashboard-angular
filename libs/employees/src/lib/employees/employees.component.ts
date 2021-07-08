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
    public employeesService: EmployeesService
  ) {}


  employeeTableColumns: TableColumn[];

   hhello 
   
  ngOnInit(): void {
    
    this.employees$.subscribe(employees => {
      console.log(employees, 'Employees ');
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
}
