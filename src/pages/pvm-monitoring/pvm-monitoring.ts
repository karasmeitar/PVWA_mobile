import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {cardData} from "../../model/cardData";

/**
 * Generated class for the PvmMonitoringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pvm-monitoring',
  templateUrl: 'pvm-monitoring.html',
})
export class PvmMonitoringPage {

  public monitoring: Array<cardData> = [{
    header: '10 Feb 11:02:45 am',
    entityType: 'sessions',
    infoItems: [{title: 'USER', content: 'Anna Hamilton'}, {
      title: 'ACCOUNT',
      content: 'Administrator on 10.9.8.7'
    }],
    icon: 'cyb-icon-sessions',
    iconText: 'medium',
    iconColor: 'orange'
  },
    {
      header: 'Anna Hamilton',
      entityType: 'sessions',
      infoItems: [{title: 'ACCOUNT', content: 'Administrator on 10.8.9.7'}, {
        title: 'TIME FRAME',
        content: '12 Feb 12:00 - 12 Feb 18:00'
      }],
      icon: 'cyb-icon-sessions',
      iconText: 'low',
      iconColor: 'blue'
    },
    {
      header: 'Anna Hamilton',
      entityType: 'sessions',
      infoItems: [{title: 'ACCOUNT', content: 'Administrator on 10.8.9.7'}, {
        title: 'TIME FRAME',
        content: '12 Feb 12:00 - 12 Feb 18:00'
      }],
      icon: 'cyb-icon-sessions',
      iconText: 'high',
      iconColor: 'red'
    }
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PvmMonitoringPage');
  }

}
