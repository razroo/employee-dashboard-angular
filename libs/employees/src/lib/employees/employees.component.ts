import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';
import {EmployeesService } from '@razroo-fully-architected-dashboard/data-services'

import { Observable } from 'rxjs'
@Component({
  selector: 'razroo-fully-architected-dashboard-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
 
})

export class EmployeesComponent implements OnInit {
  
  constructor(private employeesService: EmployeesService){} 

  employeeTableColumns: TableColumn[];

  ngOnInit(): void {

    this.employeesService.subscribe(data => {
      console.log('data');
      console.log(data);
    });

   

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
