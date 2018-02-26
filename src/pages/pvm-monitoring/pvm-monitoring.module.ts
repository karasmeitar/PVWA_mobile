import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmMonitoringPage } from './pvm-monitoring';
import {PvmIncomingRequestsPage} from "../pvm-incoming-requests/pvm-incoming-requests";

@NgModule({
  declarations: [
    PvmMonitoringPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmMonitoringPage),
  ],
  exports:[PvmMonitoringPage]
})
export class PvmMonitoringPageModule {}
