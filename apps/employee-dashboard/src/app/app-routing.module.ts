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
    path: 'repo-data',
    loadChildren: () => import('@razroo-fully-architected-dashboard/repo-data').then(m => m.RepoDataModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('@razroo-fully-architected-dashboard/tickets').then(m => m.TicketsModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('@razroo-fully-architected-dashboard/analytics').then(m => m.AnalyticsModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { onSameUrlNavigation: "reload", relativeLinkResolution: 'legacy' } ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
