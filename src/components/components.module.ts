import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import {IonicModule} from "ionic-angular";
import { CybSvgComponent } from './cyb-svg/cyb-svg';

@NgModule({
	declarations: [CardComponent,
    CybSvgComponent],
	imports: [IonicModule.forRoot(ComponentsModule)],
	exports: [CardComponent,
    CybSvgComponent]
})
export class ComponentsModule {}
