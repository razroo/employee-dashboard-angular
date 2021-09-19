import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEmployees from './+state/employees.reducer';
import { EmployeesEffects } from './+state/employees.effects';
import { EmployeesFacade } from './+state/employees.facade';
<<<<<<< HEAD
import { DataAccessTicketsModule } from '@razroo-fully-architected-dashboard/data-access/tickets';
=======
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
>>>>>>> a699710a6ee01e544913a406ef8cb2fff2bf975d

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEmployees.EMPLOYEES_FEATURE_KEY,
      fromEmployees.reducer
    ),
    EffectsModule.forFeature([EmployeesEffects]),
<<<<<<< HEAD
    DataAccessTicketsModule
=======
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
>>>>>>> a699710a6ee01e544913a406ef8cb2fff2bf975d
  ],
  providers: [EmployeesFacade],
})
export class DataAccessModule {}
