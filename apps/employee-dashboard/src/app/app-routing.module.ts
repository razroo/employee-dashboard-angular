import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@razroo-fully-architected-dashboard/employees').then(m => m.EmployeesModule),
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('@razroo-fully-architected-dashboard/employees').then(m => m.EmployeesModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"} ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
