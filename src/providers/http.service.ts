import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) {
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {headers: this.headers}).pipe(catchError(this.handleError));
  }

  public post(url: string, params: {}) {
    return this.http.post(url, params, {headers: this.headers}).pipe(catchError(this.handleError));
  }

  public setToken(token: string) {
    this.headers = this.headers.set('Authorization', token);
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
