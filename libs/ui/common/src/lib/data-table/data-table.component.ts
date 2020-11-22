import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'razroo-fully-architected-dashboard-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() dataSource: unknown[];

  constructor() { }

  ngOnInit(): void {
  }

}
