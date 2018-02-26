import {Component, ViewChild} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading, IonicPage} from 'ionic-angular';
import {LoginData} from "../../model/loginData";
import {AuthService} from "../../providers/login/authService";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('password') passwordInput: any;
  loading: Loading;
  registerCredentials: LoginData;
  isPasswordVisible: boolean;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
    this.registerCredentials = new LoginData('', '');
    this.isPasswordVisible = false;
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    this.nav.push('Main');
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if (allowed) {
          //Navigate to request/accounts
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public iconClicked(showPass:boolean): void {
    this.isPasswordVisible = showPass;
    if(this.isPasswordVisible){
      this.passwordInput.changeType('text');
    } else {
      this.passwordInput.changeType('password');
    }
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
