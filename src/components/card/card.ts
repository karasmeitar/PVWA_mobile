import { Component, Input } from '@angular/core';

@Component({
  selector: 'pvm-card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input() public header: string;
  @Input() public entityType: 'threat' | 'sessions' | 'accounts' | 'requests';

  constructor() {
    this.header = '';
    this.entityType = 'threat';
  }

}
