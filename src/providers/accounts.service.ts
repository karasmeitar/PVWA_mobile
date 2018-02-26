import {Injectable} from "@angular/core";
import {SERVER_PATH} from "./constants";
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";
import {accountData} from "../model/accountData";
import {map} from "rxjs/operators";

@Injectable()
export class AccountsService {
  private favoriteAccountsURL = `${SERVER_PATH}/accounts?SavedFilter=Favorites`;

  constructor(private http: HttpService) {
  }

  public getAll(): Observable<accountData[]> {
    return this.http.get(this.favoriteAccountsURL).pipe(map(res => {
      return res['Accounts'].map(item => <accountData>{...item});
    }));
  }
}
