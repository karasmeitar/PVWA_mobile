import { Component, Input } from '@angular/core';

@Component({
  selector: 'cyb-svg',
  templateUrl: 'cyb-svg.html'
})
export class CybSvgComponent {
  @Input() name: string;

  constructor() {
    this.name = '';
  }

}
