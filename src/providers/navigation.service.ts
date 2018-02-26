import {Injectable} from "@angular/core";
import {SERVER_PATH} from "./constants";
import {HttpService} from "./http.service";
import {NavigationData} from "../model/navigationData";
import {map} from "rxjs/operators";

@Injectable()
export class NavigationService {
  private navigationURL = `${SERVER_PATH}/Settings/MobileNavigation`;

  constructor(private http: HttpService) {
  }

  public getAll() {
    return this.http.get<NavigationData[]>(this.navigationURL).pipe(map(res => {
      return res.map(item => new NavigationData(item['Name'], item['Count']));
    }));
  }
}
