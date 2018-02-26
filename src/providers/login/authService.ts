import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {LoginData} from "../../model/loginData";
import {SERVER_PATH} from "../constants";
import {HttpService} from "../http.service";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  private currentUser: LoginData;
  private loginUrl = `${SERVER_PATH}/auth/cyberark/logon`;

  constructor(private http: HttpService) {
  }

  public login(loginUser: LoginData) {
    if (loginUser.password === null || loginUser.userName === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.currentUser = loginUser;
      return this.http.post(this.loginUrl, this.currentUser);
    }
  }

  public setToken(token): void {
    this.http.setToken(token);
  }

  public getUserInfo(): LoginData {
    return this.currentUser;
  }

  public logout() {
   // need to logout from PVWa VIA REST
  }
}
