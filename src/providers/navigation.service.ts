import {Injectable} from "@angular/core";
import {SERVER_PATH} from "./constants";
import {HttpService} from "./http.service";

@Injectable()
export class NavigationService {
  private navigationURL = `${SERVER_PATH}/Settings/MobileNavigation`;

  constructor(private http: HttpService) {
  }

  public getAll() {
    return this.http.get(this.navigationURL);
  }
}
