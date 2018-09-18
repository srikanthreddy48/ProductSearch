import { NgModule } from '@angular/core';
import { NeButtonDirective,
         NeButtonXDirective,
         NeButtonFabDirective,
         NeButtonIconDirective,
         NeButtonIconSDirective,
         NeInputDirective,
         NeTextareaDirective,
         NeFontLargeDirective,
         NeFontLargeXDirective,
         NeFontSmallDirective,
         NeIconCircleDirective,
         NeNavigationDirective } from './components.attribute';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    declarations: [
        NeButtonDirective,
        NeButtonXDirective,
        NeButtonFabDirective,
        NeButtonIconDirective,
        NeButtonIconSDirective,
        NeInputDirective,
        NeTextareaDirective,
        NeFontLargeDirective,
        NeFontLargeXDirective,
        NeFontSmallDirective,
        NeIconCircleDirective,
        NeNavigationDirective
    ],
    exports: [
        NeButtonDirective,
        NeButtonXDirective,
        NeButtonFabDirective,
        NeButtonIconDirective,
        NeButtonIconSDirective,
        NeInputDirective,
        NeTextareaDirective,
        NeFontLargeDirective,
        NeFontLargeXDirective,
        NeFontSmallDirective,
        NeIconCircleDirective,
        NeNavigationDirective
    ]
})

export class ComponentsModule {}
