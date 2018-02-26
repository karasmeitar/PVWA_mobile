import { Component, Input } from '@angular/core';

@Component({
  selector: 'pvm-card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input() public header: string;
  @Input() public entityType: 'threat' | 'sessions' | 'accounts' | 'requests';
  @Input() public icon: string;
  @Input() public iconText: string;
  @Input() public iconColor: 'blue' | 'red' | 'orange';

  constructor() {
    this.header = '';
    this.entityType = 'threat';
    this.icon = null;
    this.iconText = null;
    this.iconColor = 'blue';
  }
}
