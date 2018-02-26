import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AuthService} from '../providers/login/authService';
import {LoginPage} from "../pages/login/login";
//import {PvmMasterLayoutPageModule} from "../pages/pvm-master-layout/pvm-master-layout.module";
import {HttpClientModule} from "@angular/common/http";
import {ComponentsModule} from "../components/components.module";
import {PvmDetailsComponent} from "../components/pvm-details/pvm-details";

@NgModule({
  declarations: [
    MyApp,
    LoginPage//,
   // PvmMasterLayoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PvmDetailsComponent/*,
    PvmMasterLayoutPageModule
    */
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
  ]
})
export class AppModule {}
