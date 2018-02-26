import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PvmAccountPage } from './pvm-account';

@NgModule({
  declarations: [
    PvmAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(PvmAccountPage),
  ],
  exports:[PvmAccountPage]
})
export class PvmAccountPageModule {}
