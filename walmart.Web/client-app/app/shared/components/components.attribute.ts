import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'button[ne-button]'
})
export class NeButtonDirective {
    @HostBinding('class') class = 'ne-button'
}


@Directive({
    selector: 'button[ne-button-x]'
})
export class NeButtonXDirective {
    @HostBinding('class') class = 'ne-button-x'
}

@Directive({
    selector: 'button[ne-button-fab]'
})
export class NeButtonFabDirective {
    @HostBinding('class') class = 'ne-button-fab'
}

@Directive({
    selector: 'button[ne-button-icon]'
})
export class NeButtonIconDirective {
    @HostBinding('class') class = 'ne-button-icon'
}

@Directive({
    selector: 'button[ne-button-icon-s]'
})
export class NeButtonIconSDirective {
    @HostBinding('class') class = 'ne-button-icon-s'
}

@Directive({
    selector: 'input[ne-input]'
})
export class NeInputDirective {
    @HostBinding('class') class = 'ne-input'
}

@Directive({
    selector: 'textarea[ne-textarea]'
})
export class NeTextareaDirective {
    @HostBinding('class') class = 'ne-textarea'
}

@Directive({
    selector: '*[ne-font-large-x]'
})
export class NeFontLargeXDirective {
    @HostBinding('class') class = 'ne-font-large-x'
}

@Directive({
    selector: '*[ne-font-large]'
})
export class NeFontLargeDirective {
    @HostBinding('class') class = 'ne-font-large'
}

@Directive({
    selector: '*[ne-font-small]'
})
export class NeFontSmallDirective {
    @HostBinding('class') class = 'ne-font-small'
}

@Directive({
    selector: '*[ne-icon-circle]'
})
export class NeIconCircleDirective {
    @HostBinding('class') class = 'ne-icon-circle'
}

@Directive({
    selector: '*[ne-navigation]'
})
export class NeNavigationDirective {
    @HostBinding('class') class = 'ne-navigation'
}
