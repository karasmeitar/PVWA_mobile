import { NgModule } from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import { LoginPage } from './login';
import {ShowHideInput} from "../../directives/show-hide-input";
import {PvmMasterLayoutPageModule} from "../pvm-master-layout/pvm-master-layout.module";

@NgModule({
  declarations: [
    LoginPage,
    ShowHideInput
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    IonicModule.forRoot(LoginPage),
    PvmMasterLayoutPageModule
  ],
})
export class LoginPageModule {}
