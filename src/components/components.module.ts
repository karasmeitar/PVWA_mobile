import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { PvmDetailsComponent } from './pvm-details/pvm-details';
import { IonicModule } from 'ionic-angular';
import { CybSvgComponent } from './cyb-svg/cyb-svg';

@NgModule({
  declarations: [CardComponent,
    CybSvgComponent,
    PvmDetailsComponent],
  imports: [IonicModule.forRoot(ComponentsModule)],
  exports: [CardComponent,
    CybSvgComponent,
    PvmDetailsComponent]
})
export class ComponentsModule {}
