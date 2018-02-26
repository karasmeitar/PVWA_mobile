import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { LoginPage } from './login';
import {PvmMasterLayoutPageModule} from "../pvm-master-layout/pvm-master-layout.module";

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicModule.forRoot(LoginPage),
    PvmMasterLayoutPageModule
  ],
})
export class LoginPageModule {}
