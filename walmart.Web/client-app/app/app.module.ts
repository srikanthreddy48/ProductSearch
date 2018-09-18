import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { environment } from '../environments/environment';
import { ProgressSpinnerService } from './shared/progress-spinner/progress-spinner.service';
import { NgxCarouselModule } from 'ngx-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SearchModule,
    SharedModule,
    MaterialModule, // providers if any will be maintained singleton
    FlexLayoutModule,
    CoreModule.forRoot(),
    NgxCarouselModule
  ],
  providers: [
    [{provide: HTTP_INTERCEPTORS, useClass: ProgressSpinnerService, multi: true}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {}
}
