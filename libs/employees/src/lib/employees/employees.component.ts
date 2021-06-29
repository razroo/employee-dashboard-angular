import { Component, OnInit } from '@angular/core';
//import { Subscription } from 'rxjs';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {  AllEmployeesService } from '@razroo-fully-architected-dashboard/data-services';


@Component({
  selector: 'razroo-fully-architected-dashboard-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
 
})

export class EmployeesComponent implements OnInit {


  getEmployees(): void {
    return this.getEmployees()
  }
  constructor(private AllEmployeesService: AllEmployeesService) {}

 
  // eslint-disable-next-line @typescript-eslint/member-ordering
  employeeTableColumns: TableColumn[];

  ngOnInit(): void {


   

    this.employeeTableColumns = [
      {
        name: 'Name',
        dataKey: 'name',
        isSortable: true,
      },
      {
        name: 'Position',
        dataKey: 'position',
        isSortable: true,
      },
      {
        name: 'Location',
        dataKey: 'location',
        isSortable: true,
      },
      {
        name: 'Permission',
        dataKey: 'permission',
        isSortable: true,
      },
      {
        name: 'Report To',
        dataKey: 'reportTo',
        isSortable: true,
      }
    ];
  }

}
