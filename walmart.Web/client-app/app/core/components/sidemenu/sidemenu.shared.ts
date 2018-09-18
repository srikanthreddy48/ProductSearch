import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SidemenuItemComponent } from './sidemenu-item.component';

@Injectable()
export class SidemenuSharedService {
    activeItem: SidemenuItemComponent = null;

    setActiveMenu(activeMenu: SidemenuItemComponent) {
        if (this.activeItem != null) {
            this.activeItem.isActive = false;
        }
        this.activeItem = activeMenu;
        this.activeItem.isActive = true;
    }

    getActiveMenu(activeMenu: SidemenuItemComponent) {
        return this.activeItem;
    }
}
