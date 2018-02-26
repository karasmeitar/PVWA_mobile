import { Component } from '@angular/core';
import {PendingRequestData} from "../../model/pendingRequestData";

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
  pendingRequest:PendingRequestData;

  constructor() {
    console.log('Hello PvmDetailsComponent Component');
    this.text = 'Hello World';
    this.title = 'Incoming Request';
    this.pendingRequest = new PendingRequestData(
      'Hexoo 2 - Machine 1.2',
      'Anna Hamilton',
      '12 Feb 12:00 - 12 Feb 18:00',
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet');
    this.date = '28 Feb 10:33'
  }

}
