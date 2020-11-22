import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class UiCommonModule {}
