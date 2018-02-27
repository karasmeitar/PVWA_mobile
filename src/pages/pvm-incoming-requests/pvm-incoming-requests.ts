import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IncomingRequestsService} from "../../providers/incoming-requests.service";
import {IncomingRequestData} from "../../model/IncomingRequestData";
import {cardData} from "../../model/cardData";
import moment from 'moment'

/**
 * Generated class for the PvmIncomingRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pvm-incoming-requests',
  templateUrl: 'pvm-incoming-requests.html',
})
export class PvmIncomingRequestsPage {
  public requests: Array<cardData>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private incomingRequestsService: IncomingRequestsService) {
    this.incomingRequestsService.getAll().subscribe((requestData: Array<IncomingRequestData>) => {
      this.requests = requestData.map(request => {
        return {
          header: request.RequestorUserName,
          entityType: "requests",
          infoItems: [{
            title: 'ACCOUNT:',
            content: request.AccountDetails.Properties['UserName'] + ' on ' + request.AccountDetails.Properties['Address']
          },
            {title: 'TIME FRAME:', content: this.getTimeFrame(request)}],
          icon: request.AccessType == 'OneTime' ? 'cyb-icon-request_single' : 'cyb-icon-request_multiple',
          iconText: request.AccessType == 'OneTime' ? 'single' : 'multiple',
          iconColor: 'blue'
        }
      })
    })

  }
  getTimeFrame(request: IncomingRequestData){
    if(request.AccessFrom && request.AccessTo){
      moment.unix(request.AccessFrom).format("MM/DD/YYYY") + ' - ' + moment.unix(request.AccessTo).format("MM/DD/YYYY")
    }
  }

}
