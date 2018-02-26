import { NgModule } from '@angular/core';
import { CardComponent } from './card/card';
import { PvmDetailsComponent } from './pvm-details/pvm-details';
import { IonicModule } from 'ionic-angular';
import { CybSvgComponent } from './cyb-svg/cyb-svg';
import { PvmInformationBlockComponent } from './pvm-information-block/pvm-information-block';
import { ApplicationCardComponent } from './application-card/application-card';

@NgModule({
  declarations: [CardComponent,
    CybSvgComponent,
    PvmDetailsComponent,
    PvmInformationBlockComponent,
    ApplicationCardComponent],
  imports: [IonicModule.forRoot(ComponentsModule)],
  exports: [CardComponent,
    CybSvgComponent,
    PvmDetailsComponent,
    PvmInformationBlockComponent,
    ApplicationCardComponent]
})
export class ComponentsModule {}
