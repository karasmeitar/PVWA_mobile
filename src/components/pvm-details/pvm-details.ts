import { Component } from '@angular/core';
import {PendingRequestData} from "../../model/pendingRequestData";
import {IncomingRequestsService} from "../../providers/incoming-requests.service";

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
  pendingRequest:PendingRequestData;

  constructor(private request: IncomingRequestsService) {
    console.log('Hello PvmDetailsComponent Component');
    this.isReasonDisplay = false;
    this.text = 'Hello World';
    this.title = 'Incoming Request';
    this.reason = '';
    this.pendingRequest = new PendingRequestData(
      'Hexoo 2 - Machine 1.2',
      'Anna Hamilton',
      '12 Feb 12:00 - 12 Feb 18:00',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet');
    this.date = '28 Feb 10:33'
    debugger;

    //this.request.confirmRequest("3", "asd").subscribe(response => console.log('Approved', response));
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
    this.isReasonDisplay = false;
  }

  public applyClicked(): void {
    debugger;
    if (this.actionTitle === "approve") {
      //this.request.confirmRequest("3", this.reason).subscribe(response => console.log('Approved', response));
    }
    else {
      //this.request.rejectRequest("3", this.reason).subscribe(response => console.log('Approved', response));
    }
    this.actionTitle = "";
    this.isReasonDisplay = false;
  }
}
