import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmAccountPage } from './pvm-account';
//import {PvmDetailsComponent} from "../../components/pvm-details/pvm-details";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    PvmAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmAccountPage),
    ComponentsModule
  ],
  exports:[PvmAccountPage]
})
export class PvmAccountPageModule {}
