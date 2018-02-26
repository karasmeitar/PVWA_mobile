import {Injectable} from "@angular/core";
import {SERVER_PATH} from "./constants";
import {HttpService} from "./http.service";

@Injectable()
export class AccountsService {
  private favoriteAccountsURL = `${SERVER_PATH}/accounts?SavedFilter=Favorites`;

  constructor(private http: HttpService) {
  }

  public getAll() {
    return this.http.get(this.favoriteAccountsURL);
  }
}
