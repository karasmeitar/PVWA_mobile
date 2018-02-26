import {Component, Input} from '@angular/core';
import {cardData} from "../../model/cardData";

/**
 * Generated class for the ApplicationCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'application-card',
  templateUrl: 'application-card.html'
})
export class ApplicationCardComponent {

 @Input() applicationData: cardData;

  constructor() {
  }

}
