import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmMasterLayoutPage } from './pvm-master-layout';
import { ComponentsModule } from '../../components/components.module';
import {PvmAccountPageModule} from "../pvm-account/pvm-account.module";
import {PvmMonitoringPageModule} from "../pvm-monitoring/pvm-monitoring.module";
import {PvmIncomingRequestsPageModule} from "../pvm-incoming-requests/pvm-incoming-requests.module";

@NgModule({
  declarations: [
    PvmMasterLayoutPage,

  ],
  imports: [
    IonicPageModule.forChild(PvmMasterLayoutPage),
    ComponentsModule,
    PvmAccountPageModule,
    PvmMonitoringPageModule,
    PvmIncomingRequestsPageModule
  ],
})
export class PvmMasterLayoutPageModule {}
