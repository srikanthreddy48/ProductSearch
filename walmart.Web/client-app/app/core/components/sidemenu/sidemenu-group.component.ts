import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { SidemenuItemComponent } from './sidemenu-item.component';


@Component({
    selector: 'ne-sidemenu-group',
    templateUrl: './sidemenu-group.component.html'
})

export class SidemenuGroupComponent {
    @Input() label;
    @Input() icon;
    isOpen = false;

    clicked() {
        this.isOpen = !this.isOpen;
    }
}
