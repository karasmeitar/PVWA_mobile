import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {ShowHideInput} from "../../directives/show-hide-input";

@NgModule({
  declarations: [
    LoginPage,
    ShowHideInput,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
