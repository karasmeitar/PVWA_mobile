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
  private accountData: cardData;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accountData = {
      infoItems: [{title: 'ACCOUNT', content:'Administrator on 10.8.9.7'},{title: 'test', content:'test'},{title: 'TIME FRAME', content:'12 Feb 12:00 - 12 Feb 18:00'},
        {title: 'test', content:'test'}]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PvmAccountPage');
  }

}
