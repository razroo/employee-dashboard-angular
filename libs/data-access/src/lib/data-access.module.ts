import { DataAccessTicketsModule } from './../../tickets/src/lib/data-access-tickets.module';
import { environment } from './../../../../apps/employee-dashboard/src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
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
    DataAccessTicketsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
})
export class DataAccessModule {}
