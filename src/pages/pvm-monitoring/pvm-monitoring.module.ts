import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmMonitoringPage } from './pvm-monitoring';
import {ComponentsModule} from "../../components/components.module";

//import {PvmIncomingRequestsPage} from "../pvm-incoming-requests/pvm-incoming-requests";

@NgModule({
  declarations: [
    PvmMonitoringPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmMonitoringPage),
    ComponentsModule
  ],
  exports:[PvmMonitoringPage]
})
export class PvmMonitoringPageModule {}
