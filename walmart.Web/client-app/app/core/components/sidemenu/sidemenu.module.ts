import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu.component';
import { SidemenuGroupComponent } from './sidemenu-group.component';
import { SidemenuItemComponent } from './sidemenu-item.component';
import { SidemenuSharedService } from './sidemenu.shared';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../shared/material.module';
import { SideMenuChangeService } from './sidemenu-change.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    SidemenuComponent,
    SidemenuGroupComponent,
    SidemenuItemComponent
    ],
  exports: [
    SidemenuComponent,
    SidemenuGroupComponent,
    SidemenuItemComponent
  ],
  providers: [SidemenuSharedService, SideMenuChangeService]
})
export class SidemenuModule { }
