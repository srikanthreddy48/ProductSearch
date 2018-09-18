// All the components/ services used only once are declared here. Part of App like modals, spinners toasters etc.

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services//auth-guard.service';
import { SidemenuModule } from './components/sidemenu/sidemenu.module';
import { ErrorManager } from './services/error-manager.service';

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
    CommonModule,
    SidemenuModule,
  ],
  exports: [
    SidemenuModule
  ],
  declarations: [],

})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
              ErrorManager,
              AuthGuard
            ]
        };
    }
 }
