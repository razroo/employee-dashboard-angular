import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular'
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';


// testing query data here.
// potentially a problem with   apollo/component structure. 
const ELEMENT_DATA =  gql`
query getEmployees{
  employees {
  id
  Name
  Avatar { previewUrl
  }
      Position
    Location
    Permission
    Action
    ReportTo
    }
  }
`;


@Component({
  selector: 'razroo-fully-architected-dashboard-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {


  constructor(private apollo: Apollo) {}
  private querySubscription: Subscription;
  elementData;
  employeeTableColumns: TableColumn[];


  ngOnInit(): void {
    this.elementData = ELEMENT_DATA;

    this.querySubscription = this.apollo.watchQuery({
      query: ELEMENT_DATA
    }).valueChanges
    .subscribe(({ data}) => {
      // attempting to log the data to see if its in the FE 
    console.log('This is working', data)
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
