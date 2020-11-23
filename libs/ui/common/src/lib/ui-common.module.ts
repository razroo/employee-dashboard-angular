import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import { DataPropertyGetterPipe } from './data-table/data-property-getter.pipe';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, RouterModule,
    MatTableModule],
  declarations: [LayoutComponent, DataTableComponent, DataPropertyGetterPipe],
  exports: [LayoutComponent, DataTableComponent],
})
export class UiCommonModule {}
