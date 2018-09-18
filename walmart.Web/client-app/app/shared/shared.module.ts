// All the components/ services used only once are declared here. Part of App like modals, spinners toasters etc.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ProgressSpinnerService } from './progress-spinner/progress-spinner.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { LoaderComponent } from './loader/loader.component';
import { NotificationMessageComponent } from './notification/notification.component';

export const interceptor = new ProgressSpinnerService();

// Import all the services into core module. forRoot() also includes component. So Lazy loading
// is not possible if you add to the feature module
// If App module doesn't need the service of the child module; mention only in the child module.
// The component and services will be lazy loaded and inside the child DI context.

// If App module also need the service of the child module add that service to the core
// module. This way component will be lazy loaded and the services will be available at the
// app level.

// All the shared components and shared services will be imported as forRoot(). So all the services
// are singleton and components are available across the app. No lazy loading

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsModule,
    NotificationMessageComponent,
    ProgressSpinnerComponent
  ],
  declarations: [
    NotificationMessageComponent,
    ProgressSpinnerComponent,
    LoaderComponent
  ],
  entryComponents: [
    NotificationMessageComponent,
    ProgressSpinnerComponent,
    LoaderComponent
  ],
  providers: [
    {provide: ProgressSpinnerService, useValue: interceptor},
    {provide: HTTP_INTERCEPTORS, useValue: interceptor, multi: true}
  ]

})
export class SharedModule { }
