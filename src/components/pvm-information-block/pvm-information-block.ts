import { Component, Input } from '@angular/core';

/**
 * Generated class for the PvmInformationBlockComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pvm-information-block',
  templateUrl: 'pvm-information-block.html'
})
export class PvmInformationBlockComponent {

  @Input()  public title: string;
  @Input()  public content: string;
  @Input()  public iconClassBefore: string;
  @Input()  public contentClass: string;
  @Input()  public titleClass: string;

}
