import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ItemDetailsComponent } from './itemDetails/itemDetails.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material';
import { MatPaginator, DateAdapter, NativeDateAdapter, MatDatepickerModule, MAT_DATE_FORMATS } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { SearchService } from './search.service';
import { LoadingModule } from 'ngx-loading';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    CdkTableModule,
    MatTableModule,
    FormsModule,
    FlexLayoutModule,LoadingModule,
    MatDatepickerModule
  ],
  declarations: [
    SearchComponent, ItemDetailsComponent
  ],
  exports: [
    SearchComponent, ItemDetailsComponent
  ],
  entryComponents: [
    ItemDetailsComponent
  ],
  providers: [
    MatPaginator,
    SearchService
  ]
})

export class SearchModule {
}

