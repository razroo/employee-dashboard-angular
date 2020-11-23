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
  selector: 'razroo-fully-architected-dashboard-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  elementData;
  ticketsTableColumns: TableColumn[];

  constructor() { }

  ngOnInit(): void {
    this.elementData = ELEMENT_DATA;

    this.ticketsTableColumns = [
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
