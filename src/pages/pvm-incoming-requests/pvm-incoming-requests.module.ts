import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmIncomingRequestsPage } from './pvm-incoming-requests';
import { PvmAccountPage } from "../pvm-account/pvm-account";
import {ComponentsModule} from "../../components/components.module";
import {PvmIncomingRequestsDetailsPageModule} from "../pvm-incoming-requests-details/pvm-incoming-requests-details.module";

@NgModule({
  declarations: [
    PvmIncomingRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmIncomingRequestsPage),
    ComponentsModule,
    PvmIncomingRequestsDetailsPageModule
  ],
  exports:[PvmIncomingRequestsPage]
})
export class PvmIncomingRequestsPageModule {}
