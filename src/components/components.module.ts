import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { PvmDetailsComponent } from './pvm-details/pvm-details';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CardComponent,
    PvmDetailsComponent],
	imports: [IonicModule.forRoot(ComponentsModule)],
	exports: [CardComponent,
    PvmDetailsComponent]
})
export class ComponentsModule {}
