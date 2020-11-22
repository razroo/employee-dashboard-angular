import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class UiCommonModule {}
