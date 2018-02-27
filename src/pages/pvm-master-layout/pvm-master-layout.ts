import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {NavigationService} from "../../providers/navigation.service";
import {NavigationData} from "../../model/navigationData";

enum eSlidesMode {
  IncomingRequests = 'requests',
  FavoriteAccounts = 'accounts',
  LiveSessions = 'sessions'
}

enum eSlidesModeName {
  IncomingRequests = 'Incoming Requests',
  FavoriteAccounts = 'Favorite Accounts',
  LiveSessions = 'Live Sessions'
}

@IonicPage()
@Component({
  selector: 'page-pvm-master-layout',
  templateUrl: 'pvm-master-layout.html',
})
export class PvmMasterLayoutPage {
  public currentIndex: number;
  public currentContentSlide: string;
  public tabs: NavigationData[];
  public type: 'threat' | 'sessions' | 'accounts' | 'requests';
  @ViewChild('tabSlide') tabSlide: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private navigation: NavigationService) {

    this.type = 'accounts';
    this.currentContentSlide = 'FavoriteAccounts';
    this.currentIndex = 0;
  }

  ionViewDidLoad() {
    this.tabs = [];
    this.navigation.getAll().subscribe(response => {
      this.tabs = response;
      this.tabs.push(new NavigationData('LiveSessions', 0));
      this.translateNavigationDataName();
      this.topNavbarSlidesChange(this.tabSlide);
    });
  }

  translateNavigationDataName(): void {
    this.tabs.map((item) => {
      item.translatedName = eSlidesMode[item.name];
      return item;
    });
  }

  goToSlide(slideNumber: number): void {
    console.log(slideNumber);
    this.tabSlide.slideTo(slideNumber, 500);
    this.loadContentSlide(this.tabSlide.getActiveIndex());

  }

  loadContentSlide(slideNumber: number): void {
    if (slideNumber < 0 || slideNumber >= this.tabs.length) {
      return;
    }

    this.currentContentSlide = this.tabs[slideNumber].name;
  }

  topNavbarSlidesChange(item: Slides): void {
    if (!item) {
      return;
    }
    this.loadContentSlide(item.getActiveIndex());
    this.updateCurrentIndex();
    this.type = eSlidesMode[this.tabs[this.currentIndex].name];
  }

  updateCurrentIndex(): void {
    this.currentIndex = this.tabSlide.getActiveIndex();
  }

}
