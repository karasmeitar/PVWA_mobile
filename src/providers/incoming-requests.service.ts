import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {SERVER_PATH} from "./constants";
import {Observable} from "rxjs/Observable";
import {IncomingRequestData} from "../model/IncomingRequestData";
import {map} from "rxjs/operators";

@Injectable()
export class IncomingRequestsService {
  private incomingRequestsURL = `${SERVER_PATH}/incomingRequests?onlyWaiting=true&expired=false`;
  private confirmRequestURL = (id: string) => `${SERVER_PATH}/incomingRequests/${id}/confirm`;
  private rejectRequestURL = (id: string) => `${SERVER_PATH}/incomingRequests/${id}/reject`;

  constructor(private http: HttpService) {
  }

  public getAll(): Observable<IncomingRequestData[]> {
    return this.http.get(this.incomingRequestsURL).pipe(map(res => {
      return res['IncomingRequests'].map(item => <IncomingRequestData>{...item});
    }));
  }

  public confirmRequest(id: string, reason: string) {
    return this.http.post(this.confirmRequestURL(id), {reason});
  }

  public rejectRequest(id: string, reason: string) {
    return this.http.post(this.rejectRequestURL(id), {reason});
  }
}
