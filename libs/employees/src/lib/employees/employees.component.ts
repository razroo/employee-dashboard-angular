import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';

const ELEMENT_DATA = [
  {name: 'test', position: 'test position', location: 'New York',
    permission: 'test permission', reportTo: 'no one'},
  {name: 'test', position: 'test position', location: 'Los Angelos',
    permission: 'test permission', reportTo: 'no one'},
  {name: 'test', position: 'test position', location: 'Alabama',
    permission: 'test permission', reportTo: 'no one'},
  {name: 'test', position: 'test position', location: 'new york',
    permission: 'test permission', reportTo: 'no one'},
  {name: 'test', position: 'test position', location: 'new york',
    permission: 'test permission', reportTo: 'no one'},
  {name: 'test', position: 'test position', location: 'new york',
    permission: 'test permission', reportTo: 'no one'},
  {name: 'test', position: 'test position', location: 'new york',
    permission: 'test permission', reportTo: 'no one'},
  {name: 'test', position: 'test position', location: 'new york',
    permission: 'test permission', reportTo: 'no one'},
];

@Component({
  selector: 'razroo-fully-architected-dashboard-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  elementData;
  employeeTableColumns: TableColumn[];

  constructor() { }

  ngOnInit(): void {
    this.elementData = ELEMENT_DATA;

    this.employeeTableColumns = [
      {
        name: 'Name',
        dataKey: 'name'
      },
      {
        name: 'Position',
        dataKey: 'position'
      },
      {
        name: 'Location',
        dataKey: 'location'
      },
      {
        name: 'Permission',
        dataKey: 'permission'
      },
      {
        name: 'Report To',
        dataKey: 'reportTo'
      }
    ];
  }

}
