import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmIncomingRequestsPage } from './pvm-incoming-requests';
import { PvmAccountPage } from "../pvm-account/pvm-account";

@NgModule({
  declarations: [
    PvmIncomingRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmIncomingRequestsPage),
  ],
  exports:[PvmIncomingRequestsPage]
})
export class PvmIncomingRequestsPageModule {}
