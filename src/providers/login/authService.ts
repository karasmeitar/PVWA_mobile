import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {LoginData} from "../../model/loginData";
import {catchError, map} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  private currentUser: LoginData;
  private loginUrl = 'https://10.0.116.183/PasswordVault/api/auth/cyberark/logon';

  constructor(public http: HttpClient) {
  }

  public login(loginUser: LoginData) {
    if (loginUser.password === null || loginUser.userName === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.currentUser = loginUser;
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.post(this.loginUrl, this.currentUser,{headers: headers})
        .pipe(
          map(this.extractData),
            catchError(this.handleError)
        );
    }
  }

  public getUserInfo(): LoginData {
    return this.currentUser;
  }

  public logout() {
   // need to logout from PVWa VIA REST
  }

  private extractData(res: Response) {
    let body = res.json();
    debugger;
    return body || {};
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
