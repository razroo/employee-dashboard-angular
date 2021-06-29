import { Component, OnInit } from '@angular/core';
//import { Subscription } from 'rxjs';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';

@Component({
  selector: 'razroo-fully-architected-dashboard-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
 
})

export class EmployeesComponent implements OnInit {
  


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
