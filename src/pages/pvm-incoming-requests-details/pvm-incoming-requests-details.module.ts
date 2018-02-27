import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmIncomingRequestsDetailsPage } from './pvm-incoming-requests-details';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PvmIncomingRequestsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmIncomingRequestsDetailsPage),
    ComponentsModule
  ],
  exports:[PvmIncomingRequestsDetailsPage]
})
export class PvmIncomingRequestsDetailsPageModule {}
