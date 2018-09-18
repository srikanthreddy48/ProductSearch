import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './core/services/auth-guard.service';

const routes: Routes = [
  {
     path: '', redirectTo: '/search', pathMatch: 'full'
  },
  {
    path: '**',
    component:  SearchComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
