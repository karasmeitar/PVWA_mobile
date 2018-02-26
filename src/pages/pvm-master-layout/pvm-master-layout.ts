import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the PvmMasterLayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pvm-master-layout',
  templateUrl: 'pvm-master-layout.html',
})
export class PvmMasterLayoutPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PvmMasterLayoutPage');
  }
  goToSlide(slideNumber: number) {
    this.slides.slideTo(slideNumber, 500);
  }

}
