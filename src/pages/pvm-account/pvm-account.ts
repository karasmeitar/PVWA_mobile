import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {accountData} from "../../model/accountData";
import {cardData} from "../../model/cardData";
import {AccountsService} from "../../providers/accounts.service";
import moment from 'moment'
import {accountData} from "../../model/accountData";

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
  public accounts: Array<cardData>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private accountsService:AccountsService ) {
    this.accountsService.getAll().subscribe((accountData:Array<accountData>)=>{
      this.accounts = accountData.map(account=> {
          return {
            header : account.Properties['UserName'],
            entityType:"accounts",
            infoItems:[{title: 'ADDRESS', content: account.Properties['Address']},
              {title: 'LAST ACCESS', content: account.Properties['LastUsedBy'] +  moment.unix(account.Properties['LastUsedDate']).format("MM/DD/YYYY")}],
            icon: 'cyb-icon-accounts',
            iconColor: "'blue'"
          }
      })
    })
  }
}
