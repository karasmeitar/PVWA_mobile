import { Component } from '@angular/core';
import {PendingRequestData} from "../../model/pendingRequestData";
import {IncomingRequestsService} from "../../providers/incoming-requests.service";
import {IncomingRequestData} from "../../model/IncomingRequestData";
import {NavController, NavParams} from "ionic-angular";
import {PvmMasterLayoutPage} from "../../pages/pvm-master-layout/pvm-master-layout";

/**
 * Generated class for the PvmDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pvm-details',
  templateUrl: 'pvm-details.html'
})
export class PvmDetailsComponent {
  text: string;
  title: string;
  date: string;
  actionTitle:string;
  isReasonDisplay: boolean;
  reason:string;
  incomingData: IncomingRequestData;

  constructor(private nav: NavController,public navParams: NavParams,private request: IncomingRequestsService) {
    this.incomingData = this.navParams.get('item');
    this.isReasonDisplay = false;
    this.title = 'Incoming Request';
  }

  public declineClicked(): void {
    this.actionTitle = "decline";
    this.isReasonDisplay = true;
  }

  public approveClicked(): void {
    this.actionTitle = "approve";
    this.isReasonDisplay = true;
  }

  public cancelClicked(): void {
    this.actionTitle = "";
    this.reason = "";
    this.isReasonDisplay = false;
  }

  public applyClicked(): void {
    try{
      if (this.actionTitle === "confirm") {
        this.request.confirmRequest(this.incomingData.RequestID, this.reason).subscribe(response => console.log('Approved', response));
      }
      else {

        this.nav.pop();
        return;
        //TODO: fix the bug
        // this.request.rejectRequest(this.incomingData.RequestID, this.reason).subscribe(response => {
        //   console.log('Reject', response);
        //   this.actionTitle = "";
        //   this.isReasonDisplay = false;
        //   this.nav.pop();
        // });
      }
    }
    catch(e) {
      console.log('error>>>', e);
    }

    //this.nav.push(PvmMasterLayoutPage);
  }

}
