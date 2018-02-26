import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmMasterLayoutPage } from './pvm-master-layout';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PvmMasterLayoutPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmMasterLayoutPage),
    ComponentsModule
  ],
})
export class PvmMasterLayoutPageModule {}
