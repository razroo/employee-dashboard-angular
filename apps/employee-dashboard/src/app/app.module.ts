import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiCommonModule } from '@razroo-fully-architected-dashboard/ui/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,
    UiCommonModule, MatToolbarModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
