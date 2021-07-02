import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';
import {allEmployees, EmployeesService } from '@razroo-fully-architected-dashboard/data-services'



@Component({
  selector: 'razroo-fully-architected-dashboard-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
 
})

export class EmployeesComponent implements OnInit {

  constructor(
    private employeesService: EmployeesService
    ){} 
  
 allEmployees: allEmployees[] = [];

  employeeTableColumns: TableColumn[];

  ngOnInit(): void {


      this.employeesService.getEmployees().subscribe(allEmployees => {
     
      console.log( 'all-employees:',allEmployees);
      return allEmployees;
      
      //TODO  add the allEmployees object to the js object and attach that to the data table
         
     
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
