import { Component, Input } from '@angular/core';
import { SidemenuSharedService } from './sidemenu.shared';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'ne-sidemenu-item',
    templateUrl: './sidemenu-item.component.html'
})

export class SidemenuItemComponent {
    @Input() label;
    @Input() icon;
    @Input() route;
    isActive = false;

    constructor(private menuService: SidemenuSharedService) {

    }

    selectMenu(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.menuService.setActiveMenu(this);
    }
}
