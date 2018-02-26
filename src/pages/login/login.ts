import {Component, ViewChild} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading, IonicPage} from 'ionic-angular';
import {LoginData} from "../../model/loginData";
import {AuthService} from "../../providers/login/authService";
import {PvmMasterLayoutPage} from "../pvm-master-layout/pvm-master-layout";
import {NavigationService} from "../../providers/navigation.service";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('password') passwordInput: any;
  @ViewChild('submit') submitButton: any;
  loading: Loading;
  registerCredentials: LoginData;
  isPasswordVisible: boolean;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController,
              private loadingCtrl: LoadingController, private navigation: NavigationService) {
    this.registerCredentials = new LoginData('moshik', '123Cyber');
    this.isPasswordVisible = false;
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.submitButton._elementRef.nativeElement.classList.add('processing');
    setTimeout(()=>{
      this.auth.login(this.registerCredentials).subscribe(token => {
        if (token) {
          this.auth.setToken(token);
          this.navigation.getAll().subscribe(response => console.log('Nav', response));
          //Navigate to request/accounts

          this.submitButton._elementRef.nativeElement.classList.remove('processing');
          this.submitButton._elementRef.nativeElement.classList.add('success');
          setTimeout(()=> {
            this.submitButton._elementRef.nativeElement.classList.remove('success');
            this.nav.push(PvmMasterLayoutPage, {currentUser :this.registerCredentials});
          },1000);

        } else {
          this.showError("Access Denied");
          this.submitButton._elementRef.nativeElement.classList.remove('processing');
          this.submitButton._elementRef.nativeElement.classList.remove('success');
        }
      },
      error => {
        this.submitButton._elementRef.nativeElement.classList.remove('processing');
        this.submitButton._elementRef.nativeElement.classList.remove('success');
        this.showError(error);
      });
    },1000);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public iconClicked(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
