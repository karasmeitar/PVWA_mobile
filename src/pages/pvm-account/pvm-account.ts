import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {accountData} from "../../model/accountData";
import {cardData} from "../../model/cardData";

/**
 * Generated class for the PvmAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pvm-account',
  templateUrl: 'pvm-account.html',
})
export class PvmAccountPage {
  public accounts: Array<cardData> = [{
    header : 'Anna Hamilton',
    entityType: 'requests',
    infoItems: [{title: 'ACCOUNT', content:'Administrator on 10.8.9.7'},{title: 'TIME FRAME', content:'12 Feb 12:00 - 12 Feb 18:00'}]
  },
    {
      header : 'Anna Hamilton',
      entityType: 'requests',
      infoItems: [{title: 'ACCOUNT', content:'Administrator on 10.8.9.7'},{title: 'TIME FRAME', content:'12 Feb 12:00 - 12 Feb 18:00'}]
    },
    {
      header : 'Anna Hamilton',
      entityType: 'requests',
      infoItems: [{title: 'ACCOUNT', content:'Administrator on 10.8.9.7'},{title: 'TIME FRAME', content:'12 Feb 12:00 - 12 Feb 18:00'}],
      icon: 'cyb-icon-accounts',
      iconText: 'single',
      iconColor: 'red'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
  }

}
