import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IncomingRequestsService} from "../../providers/incoming-requests.service";
import {IncomingRequestData} from "../../model/IncomingRequestData";

/**
 * Generated class for the PvmIncomingRequestsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pvm-incoming-requests-details',
  templateUrl: 'pvm-incoming-requests-details.html',
})
export class PvmIncomingRequestsDetailsPage {

  title: string;
  isReasonDisplay: boolean;
  incomingData: IncomingRequestData;

  constructor(public navParams: NavParams,private request: IncomingRequestsService) {
    this.incomingData = this.navParams.get('item');
    this.isReasonDisplay = false;
    this.title = 'Incoming Request';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PvmIncomingRequestsDetailsPage');
  }

}
